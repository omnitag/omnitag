import i13nStore from 'i13n-store';
import {win, doc} from 'win-doc';
import {utils} from 'i13n-client';
import {create, inject} from 'create-el';

const {req, parseJson, get, router} = utils(); 


const getOverWrite = () =>
[
  {
    path: ['defaultMpHost'],
    value: 'https://analytics.omniscientai.com',
  },
  {
    path: ['omnitag', 'version'],
    value: '2020-02-26-01'
  }
];

const parseRouter = routerData => {
  const oRouter = new router();
  routerData.forEach(rule => {
    oRouter.addRoute(rule.router, ()=>{
      const dIframe = create('iframe')()();
      inject()(dIframe);
      console.log({dIframe});
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
}


const interactionTask = () => {
  const state = i13nStore.getState();
  // const tid = state.get('tagId');
  const tid = 'OA-c19eb6';
  const routerUrl = `https://lan.cicd.omnicloud.tech:18000/ma_cms/get-all-routers/?tid=${tid}`;
  req(routerUrl, oReq => e => {
    parseRouter(
      get(
        parseJson(oReq.responseText),
        ['PAYLOAD', 'data']
      )
    );
  });
};

const interaction = () => {
  i13nStore.addListener(interactionTask, 'init');
};


export {getOverWrite, interaction};
