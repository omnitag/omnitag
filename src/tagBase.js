import i13nStore from "i13n-store";
import { win, doc } from "win-doc";
import { utils } from "i13n-client";
import { create, inject } from "create-el";
import query from "css-query-selector";
import formSerialize from "form-serialize-js";

const { req, parseJson, get, router, getClientId, dispatch } = utils();

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

const getTagId = () => {
  const state = i13nStore.getState();
  // const tid = state.get('tagId');
  const tid = "OA-c19eb6";
  return tid;
};

const postIframeHeight = (win, dIframe) => {
  const dBody = win.document.body;
  dBody.style.margin = 0;
  dBody.style.padding = '10px';
  dBody.style.height = "auto";
  dBody.style.background = "transparent";
  const h = dBody.offsetHeight;
  dIframe.style.height = h + "px";
  dIframe.style.minHeight = h + "px";
};

const initialIframe = ({ iframeWin, data }) => {
  const q = query.from(iframeWin.document);
  const fm = q.one("form");
  if (!fm) {
    return;
  }
  fm.addEventListener("submit", e => {
    e.preventDefault();
    const fmData = formSerialize(fm);
    const {event_action, event_category} = data;
    dispatch("action", {
      I13N: {
        action: event_action,
        category: event_category,
        label: fmData
      },
    });
  });
};

const handleWebPopup = ({ data, tid, cid }) => {
  const dIframe = create("iframe")()({
    style: "border: 0; position: fixed; width: 100%; top: 50%; left: 50%; transform: translate(-50%, -50%);"
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
    initialIframe({ iframeWin, data });
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
      const configUrl = `https://lan.cicd.omnicloud.tech:18000/ma_cms/get-web-popup/?tid=${tid}&cid=${cid}&wid=${wid}`;
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
  const routerUrl = `https://lan.cicd.omnicloud.tech:18000/ma_cms/get-all-routers/?tid=${tid}`;
  req(routerUrl, oReq => e => {
    parseRouter(get(parseJson(oReq.responseText), ["PAYLOAD", "data"]));
  });
};

const interaction = () => {
  i13nStore.addListener(interactionTask, "init");
};

export { getOverWrite, interaction };
