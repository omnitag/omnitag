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
const getAttribute = t => v => t.getAttribute(v);

const run = runCb => {
  const tags = query.all('script[src*="/tag.js?id"]');
  tags.some(tag => {
    const getAttr = getAttribute(tag);
    const _src = getAttr('data-host');
    const tagSrc = getAttr('src');
    const src = _src ? _src : tagSrc;
    if (src && src.length && -1 !== src.indexOf(domain)) {
      const link = create('a')()({href: src});
      hostName = link.host;
      iniRoot = '//' + hostName + '/u';
      iniId = getUrl('id', tagSrc);
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
  client(`${iniRoot}/${iniId}.ini`, (t, cb) => {
    if (win().atob) {
      cb(utf8Decode(atob(t)), getOverWrite());
      callfunc(runCb, [true]);
    } else {
      js(doc().body)(() =>
        setTimeout(() => {
          cb(atob(t), getOverWrite());
          callfunc(runCb, [false]);
        }, 300),
      )('https://' + (hostName || 'usergram-cdn.' + domain) + '/decode.js');
    }
  });
};

export default run;
