import {client, utils} from 'i13n-client';

// fruitpay
// const iniUrl = '//localhost:7000/src/user/OA-1597cbff.ini';

// rubys.com.tw
const iniUrl = '//localhost:7000/src/user/rubys.ini';

const load = () => {
  client(iniUrl, (t, cb) => {
    cb(t, [
      {
        path: ['tag', 'debug', 'enabled'],
        value: true,
      },
      {
        path: ['tag', 'gtag', 'gaId'],
        value: 'UA-124534784-1',
      },
      {
        path: ['tag', 'usergram', 'enabled'],
        value: false,
      },
      {
        path: ['defaultMpHost'],
        value: 'https://analytics.omniscientai.com',
      },
    ]);
  }, true);
};

load();
window.i13nReload = () => {
  const {lazyAttr} = utils();
  lazyAttr(iniUrl)(null);
  load();
};
