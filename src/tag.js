import {client} from 'i13n-client';
import query from 'css-query-selector';
import {getUrl} from 'seturl'

const tags = query.all('script[src*="usergram.omniscientai.com/tag.js?id"]');

let thisId;
tags.some(tag => {
  const src = tag.getAttribute("src")
  if (src && src.length) {
    if (-1 !== src.indexOf('tag')) {
      thisId = getUrl('id', src)
    }
  }
  if (thisId) {
    return true
  } else {
    return false
  }
})

client(`https://usergram.omniscientai.com/u/${thisId}.ini`,
  t => atob(t)
)
