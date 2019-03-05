import utf8Decode from './utf8Decode';
import {client} from 'i13n-client';
import query from 'css-query-selector';
import {getUrl} from 'seturl';
import {js, create} from 'create-el';

const tags = query.all('script[src*="/tag.js?id"]');
const domain = 'omniscientai.com';
const win = () => window;
const doc = () => document;

let iniId;
let iniPath;
let hostName;
const getAttribute = t => v => t.getAttribute(v);
tags.some(tag => {
  const getAttr = getAttribute(tag);
  const _src = getAttr('_src');
  const tagSrc = getAttr('src');
  const src = _src ? _src : tagSrc;
  if (src && src.length && -1 !== src.indexOf(domain)) {
    const link = create('a')()({href: src});
    hostName = link.host;
    iniPath = '//' + hostName + '/u';
    iniId = getUrl('id', tagSrc);
    const _iniPath = getAttr('_iniPath');
    if (_iniPath) {
      iniPath = _iniPath;
    }
  }
  if (iniId) {
    return true;
  } else {
    return false;
  }
});

client(`${iniPath}/${iniId}.ini`, (t, cb) => {
  const overWrite = [
    {
      path: ['defaultMpHost'],
      value: 'https://analytics.omniscientai.com'
    }
  ];
  if (win().atob) {
    return cb(utf8Decode(atob(t)));
  } else {
    js(doc().body)(() => setTimeout(() => cb(atob(t)), 300))(
      '//'+ hostName+ '/decode.js',
    );
  }
});
