import i13nStore from "i13n-store";
import { win, doc } from "win-doc";
import { utils } from "i13n-client";
import { create, inject, remove } from "create-el";
import query from "css-query-selector";
import formSerialize from "form-serialize-js";
import callfunc from "call-func";
import { initMap } from "get-object-value";

const {
  req,
  parseJson,
  get,
  getTime,
  getNum,
  router,
  getClientId,
  dispatch,
  getUrl,
  lazyAttr,
  lStorage
} = utils();

let match;

const errorEmptyWid = "webpopup id should not empty";

const getPreview = () => {
  const urlParam = getUrl("__wpreview", top.location);
  return urlParam ? parseJson(atob(urlParam)) : null;
};

const getTagId = () => {
  let { tid } = getPreview() || {};
  if (!tid) {
    const state = i13nStore.getState();
    tid = state.get("tagId");
  }
  return tid;
};

const getOsgHost = () => {
  let { host } = getPreview() || {};
  if (!host) {
    const state = i13nStore.getState();
    host = state.get("defaultMpHost");
  }
  return host;
};

const fetcher = {
  getCacheData: (configUrl, wid, cb) => {
    const webPopupCacheData = lazyAttr(`webPopupCacheData-${wid}`);
    const isPreview = getPreview();
    let data = webPopupCacheData();
    if (!data || isPreview) {
      req(configUrl, oReq => e => {
        data = get(parseJson(oReq.responseText), ["PAYLOAD", "data"]);
        if ((data && data.is_active) || isPreview) {
          callfunc(cb, [{ data }]);
        }
        if (data && data.is_active) {
          webPopupCacheData(data);
        } else {
          webPopupCacheData({});
        }
      });
    } else {
      callfunc(cb, [{ data }]);
    }
  },
  getCacheRouter: cb => {
    const webPopupCacheRouter = lazyAttr(`webPopupCacheRouter`);
    let data = webPopupCacheRouter();
    if (!data || getPreview()) {
      const tid = getTagId();
      const routerUrl = `${getOsgHost()}/ma_cms/get-all-routers/?tid=${tid}`;
      req(routerUrl, oReq => e => {
        data = get(parseJson(oReq.responseText), ["PAYLOAD", "data"]) || [];
        webPopupCacheRouter(data);
        callfunc(cb, [{ data }]);
      });
    } else {
      callfunc(cb, [{ data }]);
    }
  }
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
        action: event_action || "empty-action-detected",
        category: event_category,
        label: fmData
      }
    });
    iframeWin.document.body.innerHTML = submitDone;
    setTimeout(() => remove(dIframe), 1000);
  });
};

const getWebPopupData = (wid, display_times, addCount) => {
  if (!wid) {
    console.warn(errorEmptyWid);
    return false;
  }
  const date = getTime()
    .toArray()
    .slice(0, 3)
    .join("/");
  const store = lStorage("omniwebpopup");
  const data = parseJson(store()) || {};
  const quota = getNum(display_times) || 1;
  const wDataDefault = {
    date,
    quota,
    count: 0
  };
  let wData;
  if (addCount) {
    wData = get(data, [wid], wDataDefault);
    wData.count++;
  } else {
    wData = initMap(data)(wid, wDataDefault);
    if (wData.date !== date) {
      wData = wDataDefault;
    }
  }
  data[wid] = wData;
  store(JSON.stringify(data));
  return wData;
};

const checkHaveToLogin = needLogin => {
  if (!needLogin || getPreview()) {
    return false;
  }
  const state = i13nStore.getState();
  const uid = state.get("uid");
  return uid ? false : true;
};

const checkOverDisplayTimes = (wid, display_times) => {
  const wData = getWebPopupData(wid, display_times);
  if (wData.quota > wData.count || getPreview()) {
    return false;
  } else {
    return true;
  }
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
      const p = (y / allH).toFixed(2) * 100;
      e.scrollPercent = p;
      callfunc(cb, [e]);
    }, 50);
  };
  win()?.addEventListener(
    "scroll",
    scrollMonitor,
    supportsPassive ? { passive: true } : false
  );
  scrollMonitor({});
};

const handleWebPopup = ({ data, tid, cid, wid }) => {
  const { html, options = {} } = data || {};
  const { need_login, trigger_type, display_times, delay, scrollPos } = options;
  if (
    checkHaveToLogin(need_login) ||
    checkOverDisplayTimes(wid, display_times)
  ) {
    match = match.next();
    if (match) {
      match.fn();
    }
    return false;
  }
  const dIframe = create("iframe")()({
    id: "omnisegment-iframe",
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
    postIframeHeight(iframeWin, dIframe);
    if (!bInit) {
      dIframe.style.display = "block";
      initialIframe({ iframeWin, dIframe, data });
      bInit = true;
      getWebPopupData(wid, display_times, true);
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
    regScrollEvent(e => {
      if (e.scrollPercent >= scrollPos) {
        setTimeout(() => execInit(), onloadDelay);
      }
    });
  } else {
    iframeWin.onload = () => setTimeout(execInit, onloadDelay);
    setTimeout(execInit, timeoutDelay);
  }
};

const parseRouter = (routerData, url) => {
  const oRouter = new router();
  (routerData || []).forEach(rule => {
    oRouter.addRoute(rule.router, () => {
      const tid = getTagId();
      const cid = getClientId();
      const wid = rule.webpopup_id;
      let configUrl = `${getOsgHost()}/ma_cms/get-web-popup/?tid=${tid}&wid=${wid}`;
      if (getUrl("__wpreview")) {
        configUrl += `&cid=${cid}`;
      }
      fetcher.getCacheData(configUrl, wid, ({ data }) => {
        if (data) {
          handleWebPopup({
            data,
            tid,
            cid,
            wid
          });
        }
      });
    });
  });
  url = url || doc().location.pathname;
  match = oRouter.match(url);
  if (match) {
    match.fn();
  }
};

const interactionTask = () => {
  fetcher.getCacheRouter(({ data }) => parseRouter(data));
};

const interaction = () => {
  i13nStore.addListener(interactionTask, "impression");
};

export default interaction;

export { parseRouter, fetcher, handleWebPopup, getWebPopupData, initialIframe };
