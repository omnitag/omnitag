import utf8Decode from './utf8Decode';
import {client} from 'i13n-client';
import query from 'css-query-selector';
import {getUrl} from 'seturl';
import {js, create} from 'create-el';
import {win, doc} from 'win-doc';
import {FUNCTION} from 'reshow-constant';
import callfunc from 'call-func';

import {getOverWrite} from './tagBase';

const domain = 'omniscientai.com';

let iniId;
let iniRoot;
let hostName;
const timer = {};
const getAttribute = t => v => t.getAttribute(v);

const run = runCb => {
  const oWin = win();
  const tags = query
    .all('script[src*="/tag.js?id"]')
    .concat(query.all('script[data-i13n-src]'));
  tags.some(tag => {
    const getAttr = getAttribute(tag);
    const _src = getAttr('data-i13n-src');
    const tagSrc = getAttr('src');
    const src = _src ? _src : tagSrc;
    if (src && src.length && -1 !== src.indexOf(domain)) {
      const link = create('a')()({href: src});
      hostName = link.host;
      iniRoot = 'https://' + hostName + '/u';
      iniId = getUrl('id', src);
      const _iniRoot = getAttr('data-ini-root');
      if (_iniRoot) {
        iniRoot = _iniRoot;
      }
    }
    if (iniId) {
      return true;
    } else {
      return false;
    }
  });
  const gOmnitagId = 'omnitag-' + iniId;
  if (oWin[gOmnitagId]) {
    console.warn('Found duplicate omnitag: '+iniId);
    return gOmnitagId;
  }
  oWin[gOmnitagId] = 1;
  timer[gOmnitagId] = client(`${iniRoot}/${iniId}.ini`, (t, cb) => {
    if (oWin.atob) {
      cb(utf8Decode(atob(t)), getOverWrite());
      callfunc(runCb, [true]);
    } else {
      js(doc().body)(() =>
        setTimeout(() => {
          cb(atob(t), getOverWrite());
          callfunc(runCb, [false]);
        }, 300),
      )('https://' + (hostName || 'omnitag.' + domain) + '/decode.js');
    }
  });
  return gOmnitagId;
};

const closeTag = id => callfunc(timer[id]); 

export default run;
export {closeTag};
