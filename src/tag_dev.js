import {client} from 'i13n-client';

const reload = () => {
  client('http://localhost:7000/src/user/rubys.ini', (t, cb) => {
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
        value: true,
      },
    ]);
  });
};

reload();
window.i13nReload = reload; 
