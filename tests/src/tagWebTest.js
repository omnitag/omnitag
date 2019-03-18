jsdom(null, {url: 'http://localhost'});
import {expect} from 'chai';
import {i13nDispatch} from 'i13n';
import i13nStore from 'i13n-store';
import jsdom from 'jsdom-global';

class req {
  open() {}
  send() {
    this.responseText = 'Zm9vPWJhcgo=';
    this.onload(this);
  }
}

window.XMLHttpRequest = req;

import tag from '../../cjs/src/tagWeb';

describe('Test tag', () => {
  it('test mp host', done => {
    tag(hasAtoB => {
      setTimeout(() => {
        const state = i13nStore.getState();
        expect(state.get('defaultMpHost')).to.equal(
          'https://analytics.omniscientai.com',
        );
        expect(hasAtoB).to.be.true;
        done();
      });
    });
  });

  it('test mp host when no atob', done => {
    i13nDispatch({defaultMpHost: null});
    window.atob = null;
    tag(hasAtoB => {
      setTimeout(() => {
        const state = i13nStore.getState();
        expect(state.get('defaultMpHost')).to.equal(
          'https://analytics.omniscientai.com',
        );
        expect(hasAtoB).to.be.false;
        done();
      });
    });
    setTimeout(() => {
      const dScript = document.body.querySelector('script');
      dScript.onreadystatechange();
    }, 600);
  });
});
