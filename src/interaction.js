import i13nStore from "i13n-store";
import { win, doc } from "win-doc";
import { utils } from "i13n-client";
import { create, inject, remove } from "create-el";
import query from "css-query-selector";
import formSerialize from "form-serialize-js";
import callfunc from "call-func";
import { initMap } from "get-object-value";
import windowOnLoad from "window-onload";

const expireSec = 86400;
const iframeId = "omnisegment-iframe";

const {
  dispatch,
  delegate,
  lazyAttr,
  parseJson,
  get,
  getTimestamp,
  getNum,
  getUrl,
  req,
  router,
  getClientId,
  expireCallback,
  lStorage,
} = utils();

let match;

const errorEmptyWid = "webpopup id should not empty";

const getPreview = () => {
  let url;
  try {
    url = top.location + "";
  } catch (e) {
    url = doc().URL;
  }
  const urlParam = getUrl("__wpreview", url);
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
  getCacheData: ({ tid, wid, cid }, cb) => {
    const isPreview = getPreview();
    if (isPreview && isPreview.wid) {
      wid = isPreview.wid;
    }
    const webPopupCacheData = lazyAttr(`webPopupCacheData-${wid}`, expireSec);
    const configUrl = `${getOsgHost()}/ma_cms/get-web-popup/?tid=${tid}&wid=${wid}&cid=${cid}${
      isPreview ? "&preview=true" : ""
    }`;
    let data = webPopupCacheData();
    if (!data || isPreview) {
      req(configUrl, (oReq) => (e) => {
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
  getCacheRouter: (cb) => {
    const tid = getTagId();
    if (!tid) {
      console.warn("tid not assign, cancel webpopup.");
      return;
    }
    const webPopupCacheRouter = lazyAttr(`webPopupCacheRouter`, 86400);
    const isPreview = getPreview();
    let data = webPopupCacheRouter();
    if (!data || isPreview) {
      const routerUrl = `${getOsgHost()}/ma_cms/get-all-routers/?tid=${tid}${
        isPreview ? "&preview=true" : ""
      }`;
      req(routerUrl, (oReq) => (e) => {
        data = get(parseJson(oReq.responseText), ["PAYLOAD", "data"]) || [];
        webPopupCacheRouter(data);
        callfunc(cb, [{ data }]);
      });
    } else {
      callfunc(cb, [{ data }]);
    }
  },
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

const getCloseIcon = () => {
  const size = "1.5rem";
  const weight = "0.3rem";
  const html = `
    <div style="position:absolute;left:50%;top:50%;transform: translate(-50%, -50%) rotate(45deg);width: ${weight}; height: ${size}; background: #fff;">
       <div style="transform: rotate(90deg);width: ${weight}; height: ${size}; background: #fff;"></div>
    </div>
  `;
  const dClose = create("div")()({
    className: "webpopup-close default-close",
    style: `width: ${size}; height: ${size}; padding: 12px; position: absolute; cursor: pointer; top: 5px; right: 5px; background: rgb(51, 51, 51); border-radius: 50%;`,
    innerHTML: html,
  });
  return dClose;
};

const initialIframe = ({ iframeWin, dIframe, data }) => {
  const bd = iframeWin.document.body;
  const q = query.from(iframeWin.document);
  q.all("a").forEach((link) => {
    if (!link.target) {
      link.target = "_top";
    }
  });
  delegate(bd, "click", ".webpopup-close", (e) => {
    remove(dIframe);
  });
  const fm = q.one("form");
  if (fm) {
    initialForm({ fm, bd, dIframe, data });
  }
};

const initialForm = ({ fm, bd, dIframe, data }) => {
  const submitDone = `
<div style="width:300px;margin: 0 auto;text-align:center;background:#fcfff5;border-radius:10px">
  <svg viewBox="0 0 24 24" width="50%">
    <path fill="#2c662d" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
  </svg>
</div>
`;
  const dClose = getCloseIcon();
  inject(fm.firstChild, true)(dClose);
  fm.addEventListener("submit", (e) => {
    e.preventDefault();
    const fmData = formSerialize(fm);
    dispatch("action", {
      I13N: {
        action: "FormFillOut",
        category: "FormFillOut",
        label: fmData,
      },
    });
    bd.innerHTML = submitDone;
    setTimeout(() => remove(dIframe), 1000);
  });
};

const getWebPopupData = (wid, display_times, addCount) => {
  if (!wid) {
    console.warn(errorEmptyWid);
    return false;
  }
  const cTime = getTimestamp();
  const store = lStorage("omniwebpopup");
  const data = parseJson(store()) || {};
  const quota = getNum(display_times) || 1;
  const wDataDefault = {
    cTime,
    quota,
    count: 0,
  };
  let wData = get(data, [wid], wDataDefault);
  expireCallback(wData.cTime, expireSec * 1000, null, () => {
    wData = wDataDefault;
  });
  if (addCount) {
    wData.count++;
  }
  data[wid] = wData;
  store(JSON.stringify(data));
  return wData;
};

/**
 * @return if exceed display time will return true
 */
const checkOverDisplayTimes = (wid, display_times) => {
  const wData = getWebPopupData(wid, display_times);
  if (wData.quota > wData.count || getPreview()) {
    return false;
  } else {
    return true;
  }
};

/**
 * @return if need login and user not login will return true
 */
const checkHaveToLogin = (needLogin) => {
  if (!needLogin || getPreview()) {
    return false;
  }
  const state = i13nStore.getState();
  const uid = state.get("uid");
  return uid ? false : true;
};

/**
 * @return con1: if need have line and user not have line will return true
 * @return con2: if don't need have line but user have line will return true
 */
const checkMustHaveLine = (needHasLine, hasLine) => {
  if (getPreview()) {
    return false;
  }
  const thisNeedHasLine = needHasLine * 1;
  if (!thisNeedHasLine) {
    return false;
  }
  if (1 === thisNeedHasLine) {
    return hasLine ? false : true;
  } else {
    return hasLine ? true : false;
  }
};

const testForPassiveScroll = () => {
  const oWin = win();
  let supportsPassiveOption = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get: () => (supportsPassiveOption = true),
    });
    oWin.addEventListener("test", null, opts);
    oWin.removeEventListener("test", null, opts);
  } catch (e) {}
  return supportsPassiveOption;
};

const regScrollEvent = (cb) => {
  const supportsPassive = testForPassiveScroll();
  let scrollTimeout;
  const scrollMonitor = (e) => {
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
  const { html, has_line, options = {} } = data || {};
  const {
    need_login,
    need_has_line,
    trigger_type,
    display_times,
    delay,
    scrollPos,
  } = options;
  if (
    checkOverDisplayTimes(wid, display_times) ||
    checkHaveToLogin(need_login) ||
    checkMustHaveLine(need_has_line, has_line)
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
      "display: none; border: 0; position: fixed; width: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999",
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
      postIframeHeight(iframeWin, dIframe);
    }
  };
  let onloadDelay = 500;
  if ("delay" === trigger_type) {
    const delayNum = getNum(delay) * 1000;
    onloadDelay += delayNum;
  }
  if ("scrolling" === trigger_type) {
    regScrollEvent((e) => {
      if (e.scrollPercent >= scrollPos) {
        setTimeout(() => execInit(), onloadDelay);
      }
    });
  } else {
    windowOnLoad({ doc: iframeDoc }).process(() => {
      setTimeout(execInit, onloadDelay);
    });
  }
};

const hasInitIframe = () => {
  return doc().getElementById(iframeId);
};

const parseRouter = (routerData, url) => {
  const oRouter = new router();
  (routerData || []).forEach((rule) => {
    oRouter.addRoute(rule.router, () => {
      const tid = getTagId();
      const cid = getClientId();
      const wid = rule.webpopup_id;
      fetcher.getCacheData({ tid, cid, wid }, ({ data }) => {
        if (data && !hasInitIframe()) {
          handleWebPopup({
            data,
            tid,
            cid,
            wid,
          });
        }
      });
    });
  });
  url = url || doc().URL;
  match = oRouter.match(url);
  if (match) {
    match.fn();
  }
};

const interactionTask = () => {
  fetcher.getCacheRouter(({ data }) => parseRouter(data));
};

const interaction = () => {
  i13nStore.addListener(interactionTask, "init");
};

export default interaction;

export {
  parseRouter,
  fetcher,
  handleWebPopup,
  getWebPopupData,
  initialIframe,
  checkMustHaveLine,
  getPreview,
};
