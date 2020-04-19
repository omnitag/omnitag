import i13nStore from "i13n-store";
import { win, doc } from "win-doc";
import { utils } from "i13n-client";
import { create, inject, remove } from "create-el";
import query from "css-query-selector";
import formSerialize from "form-serialize-js";

const { req, parseJson, get, router, getClientId, dispatch, getUrl } = utils();

const getOverWrite = () => [
  {
    path: ["defaultMpHost"],
    value: "https://analytics.omniscientai.com"
  },
  {
    path: ["omnitag", "version"],
    value: "2020-02-26-01"
  }
];

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
  console.log({ iframe });
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
    setTimeout(()=>remove(dIframe), 1000);
  });
};

const handleWebPopup = ({ data, tid, cid }) => {
  const dIframe = create("iframe")()({
    style:
      "border: 0; position: fixed; width: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%);"
  });
  inject()(dIframe);
  const iframeDoc = dIframe?.contentWindow?.document;
  const iframeWin = dIframe?.contentWindow?.window;
  if (iframeDoc) {
    iframeDoc.open("text/html", "replace");
    iframeDoc.write(data.html);
    iframeDoc.close();
  }
  const execInit = () => {
    postIframeHeight(iframeWin, dIframe);
    initialIframe({ iframeWin, dIframe, data });
  };
  iframeWin.onload = () => setTimeout(execInit, 500);
  setTimeout(execInit, 1500);
};

const parseRouter = routerData => {
  const oRouter = new router();
  routerData.forEach(rule => {
    oRouter.addRoute(rule.router, () => {
      const tid = getTagId();
      const cid = getClientId();
      const wid = rule.webpopup_id;
      const configUrl = `${getOsgHost()}/ma_cms/get-web-popup/?tid=${tid}&cid=${cid}&wid=${wid}`;
      req(configUrl, oReq => e => {
        handleWebPopup({
          data: get(parseJson(oReq.responseText), ["PAYLOAD", "data"]),
          tid,
          cid,
          wid
        });
      });
    });
  });
  const urlPathName = doc().location.pathname;
  let match = oRouter.match(urlPathName);
  if (match) {
    match.fn();
    while ((match = match.next())) {
      match.fn();
    }
  }
};

const interactionTask = () => {
  const tid = getTagId();
  const routerUrl = `${getOsgHost()}/ma_cms/get-all-routers/?tid=${tid}`;
  req(routerUrl, oReq => e => {
    parseRouter(get(parseJson(oReq.responseText), ["PAYLOAD", "data"]));
  });
};

const interaction = () => {
  i13nStore.addListener(interactionTask, "init");
};

export { getOverWrite, interaction };
