import {expect} from 'chai';
import {i13nDispatch} from 'i13n';
import i13nStore from 'i13n-store';
import jsdom from 'jsdom-global';
jsdom(null, {url: 'http://localhost'});

class req {
  open() {}
  send() {
    this.responseText = 'Zm9vPWJhcgo=';
    this.onload(this);
  }
}

window.XMLHttpRequest = req;

import tag from '../cjs/src/tag';

describe('Test tag', () => {
  it('test mp host', () => {
    const state = i13nStore.getState();
    expect(state.get('defaultMpHost')).to.equal(
      'https://analytics.omniscientai.com',
    );
  });

  it('test mp host when no atob', done => {
    i13nDispatch({defaultMpHost: null});
    tag(() => {
      setTimeout(() => {
        const state = i13nStore.getState();
        expect(state.get('defaultMpHost')).to.equal(
          'https://analytics.omniscientai.com',
        );
        done();
      });
    });
    setTimeout(() => {
      const dScript = document.body.querySelector('script');
      dScript.onreadystatechange();
    }, 600);
  });
});
