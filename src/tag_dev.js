import {client} from 'i13n-client';

// suntory

const load = () => {
  client('//localhost:7000/src/user/rubys.ini', (t, cb) => {
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
        value: 'https://analytics.omniscientai.com'
      }
    ]);
  });
};

load();
window.i13nReload = () => load(); 
