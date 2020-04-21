import i13nStore from "i13n-store";
import { win, doc } from "win-doc";
import { utils } from "i13n-client";
import { create, inject, remove } from "create-el";
import query from "css-query-selector";
import formSerialize from "form-serialize-js";
import callfunc from "call-func";

const {
  req,
  parseJson,
  get,
  getNum,
  router,
  getClientId,
  dispatch,
  getUrl,
  lazyAttr
} = utils();

let match;

const getPreview = () => {
  const urlParam = getUrl("__wpreview");
  return urlParam ? parseJson(atob(urlParam)) : {};
};

const getTagId = () => {
  let { tid } = getPreview();
  if (!tid) {
    const state = i13nStore.getState();
    tid = state.get("tagId");
  }
  return tid;
};

const getOsgHost = () => {
  let { host } = getPreview();
  if (!host) {
    const state = i13nStore.getState();
    host = state.get("defaultMpHost");
  }
  return host;
};

const postIframeHeight = (win, dIframe) => {
  const dBody = win.document.body;
  dBody.style.margin = 0;
  dBody.style.padding = "10px";
  dBody.style.height = "auto";
  dBody.style.background = "transparent";
  const h = dBody.offsetHeight;
  dIframe.style.height = h + "px";
  dIframe.style.minHeight = h + "px";
};

const onClose = iframe => () => {
  remove(iframe);
};

const getCloseIcon = () => {
  const html = `
    <div style="position:absolute;left:50%;top:50%;transform: translate(-50%, -50%) rotate(45deg);width: 0.2rem; height: 1rem; background: rgb(51, 51, 51);">
       <div style="transform: rotate(90deg);width: 0.2rem; height: 1rem; background: rgb(51, 51, 51);"></div>
    </div>
  `;
  const dClose = create("div")()({
    style:
      "width: 1rem; height: 1rem; background: transparent; position: absolute; cursor: pointer; top: 5px; right: 5px;",
    innerHTML: html
  });
  return dClose;
};

const submitDone = `
<div style="width:300px;margin: 0 auto;text-align:center;background:#fcfff5;border-radius:10px">
  <svg viewBox="0 0 24 24" width="50%">
    <path fill="#2c662d" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
  </svg>
</div>
`;

const initialIframe = ({ iframeWin, dIframe, data }) => {
  const q = query.from(iframeWin.document);
  const fm = q.one("form");
  if (!fm) {
    return;
  }
  const dClose = getCloseIcon();
  dClose.addEventListener("click", onClose(dIframe));
  inject(fm.firstChild, true)(dClose);
  fm.addEventListener("submit", e => {
    e.preventDefault();
    const fmData = formSerialize(fm);
    const { event_action, event_category } = data;
    dispatch("action", {
      I13N: {
        action: event_action,
        category: event_category,
        label: fmData
      }
    });
    iframeWin.document.body.innerHTML = submitDone;
    setTimeout(() => remove(dIframe), 1000);
  });
};

const checkNeedLogin = needLogin => {
  if (!needLogin) {
    return true;
  }
  const state = i13nStore.getState();
  const uid = state.get("uid");
  return uid ? true : false;
};

const testForPassiveScroll = () => {
  const oWin = win();
  let supportsPassiveOption = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get: () => (supportsPassiveOption = true)
    });
    oWin.addEventListener("test", null, opts);
    oWin.removeEventListener("test", null, opts);
  } catch (e) {}
  return supportsPassiveOption;
};

const regScrollEvent = cb => {
  const supportsPassive = testForPassiveScroll();
  let scrollTimeout;
  const scrollMonitor = e => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const allH = doc().body.clientHeight;
      const y = window.scrollY;
      const p = ((y / allH).toFixed(2)) * 100;
      e.scrollPercent = p;
      callfunc(cb, [e]);
    }, 50);
  };
  win()?.addEventListener(
    "scroll",
    scrollMonitor,
    supportsPassive ? { passive: true } : false
  );
};

const handleWebPopup = ({ data, tid, cid }) => {
  const { html, options = {} } = data || {};
  const { need_login, trigger_type, delay, scrollPos } = options;
  console.log({ options });
  if (!checkNeedLogin(need_login)) {
    match = match.next();
    if (match) {
      match.fn();
    }
    return false;
  }
  const dIframe = create("iframe")()({
    style:
      "display: none; border: 0; position: fixed; width: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%);"
  });
  inject()(dIframe);
  const iframeDoc = dIframe?.contentWindow?.document;
  const iframeWin = dIframe?.contentWindow?.window;
  if (iframeDoc) {
    iframeDoc.open("text/html", "replace");
    iframeDoc.write(html);
    iframeDoc.close();
  }
  let bInit;
  const execInit = () => {
    if (!bInit) {
      dIframe.style.display = "block";
      postIframeHeight(iframeWin, dIframe);
      initialIframe({ iframeWin, dIframe, data });
      bInit = true;
    }
  };
  let onloadDelay = 500;
  let timeoutDelay = 3000;
  if ("delay" === trigger_type) {
    const delayNum = getNum(delay);
    onloadDelay += delayNum;
    timeoutDelay += delayNum;
  }
  if ("scrolling" === trigger_type) {
    regScrollEvent( e => {
      if (e.scrollPercent >= scrollPos) {
        setTimeout(execInit, onloadDelay);
      }
    });
  } else {
    iframeWin.onload = () => setTimeout(execInit, onloadDelay);
    setTimeout(execInit, timeoutDelay);
  } 
};

const getCacheData = (configUrl, wid, cb) => {
  const webPopupCacheData = lazyAttr(`webPopupCacheData-${wid}`);
  let data = webPopupCacheData();
  if (!data) {
    req(configUrl, oReq => e => {
      data = get(parseJson(oReq.responseText), ["PAYLOAD", "data"]);
      webPopupCacheData(data);
      callfunc(cb, [{ data }]);
    });
  } else {
    callfunc(cb, [{ data }]);
  }
};

const getCacheRouter = cb => {
  const webPopupCacheRouter = lazyAttr(`webPopupCacheRouter`);
  let data = webPopupCacheRouter();
  const tid = getTagId();
  const routerUrl = `${getOsgHost()}/ma_cms/get-all-routers/?tid=${tid}`;
  if (!data) {
    req(routerUrl, oReq => e => {
      data = get(parseJson(oReq.responseText), ["PAYLOAD", "data"]) || [];
      webPopupCacheRouter(data);
      callfunc(cb, [{ data }]);
    });
  } else {
    callfunc(cb, [{ data }]);
  }
};

const parseRouter = routerData => {
  const oRouter = new router();
  routerData.forEach(rule => {
    oRouter.addRoute(rule.router, () => {
      const tid = getTagId();
      const cid = getClientId();
      const wid = rule.webpopup_id;
      let configUrl = `${getOsgHost()}/ma_cms/get-web-popup/?tid=${tid}&wid=${wid}`;
      if (getUrl("__wpreview")) {
        configUrl += `&cid=${cid}`;
      }
      getCacheData(configUrl, wid, ({ data }) => {
        handleWebPopup({
          data,
          tid,
          cid,
          wid,
        });
      });
    });
  });
  const urlPathName = doc().location.pathname;
  match = oRouter.match(urlPathName);
  if (match) {
    match.fn();
  }
};

const interactionTask = () => {
  getCacheRouter(({ data }) => parseRouter(data));
};

const interaction = () => {
  i13nStore.addListener(interactionTask, "impression");
};

export default interaction;
