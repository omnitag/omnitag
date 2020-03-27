import i13nStore from 'i13n-store';
import {win, doc} from 'win-doc';
import {utils} from 'i13n-client';
import {create, inject} from 'create-el';

const {req, parseJson, get, router, getClientId} = utils();

const getOverWrite = () => [
  {
    path: ['defaultMpHost'],
    value: 'https://analytics.omniscientai.com',
  },
  {
    path: ['omnitag', 'version'],
    value: '2020-02-26-01',
  },
];

const getTagId = () => {
  const state = i13nStore.getState();
  // const tid = state.get('tagId');
  const tid = 'OA-c19eb6';
  return tid;
};

const handleWebPopup = ({data, tid, cid}) => {
  const dIframe = create('iframe')()({
    style: 'border: 0; position: fixed; top: 50%; left: 50%;' 
  });
  inject()(dIframe);
  const doc = dIframe?.contentWindow?.document;
  if (doc) {
    doc.open('text/html', 'replace');
    doc.write(data.html);
    doc.close();
  }
  console.log({dIframe, data, doc}, dIframe.contentWindow);
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
          data: get(parseJson(oReq.responseText), ['PAYLOAD', 'data']),
          tid,
          cid,
          wid,
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
    parseRouter(get(parseJson(oReq.responseText), ['PAYLOAD', 'data']));
  });
};

const interaction = () => {
  i13nStore.addListener(interactionTask, 'init');
};

export {getOverWrite, interaction};
