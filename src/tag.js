import {client} from 'i13n-client';
import query from 'css-query-selector';
import {getUrl} from 'seturl'

const tags = query.all('script[src*="/tag.js?id"]');
const host = 'usergram.omniscientai.com'

let iniId;
let iniPath = host+'/u';
const getAttribute = t => v => t.getAttribute(v)
tags.some(tag => {
  const getAttr = getAttribute(tag) 
  const _src = getAttr("_src")
  const tagSrc = getAttr("src")
  const src = (_src) ? _src : tagSrc
  if (src && src.length && -1 !== src.indexOf(host)) {
    iniId = getUrl('id', tagSrc)
    const _iniPath = getAttr("_iniPath")
    if (_iniPath) {
      iniPath = _iniPath
    }
  }
  if (iniId) {
    return true
  } else {
    return false
  }
})

client(`//${iniPath}/${iniId}.ini`,
  t => atob(t)
)
