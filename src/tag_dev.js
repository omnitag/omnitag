import {client} from 'i13n-client';

// suntory

const load = () => {
  client('http://localhost:7000/src/user/bebit.ini', (t, cb) => {
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
    ]);
  });
};

load();
window.i13nReload = () => load(); 
