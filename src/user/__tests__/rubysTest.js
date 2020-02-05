import {expect} from 'chai';
import {get as getContent} from 'get-content';
import get from 'get-object-value';
import glob from 'glob';
import ini from 'parse-ini-string';
import {nest} from 'object-nested';
import exec from 'exec-script';
import gJsdom from 'jsdom-global';
import {utils} from 'i13n-client';

const file = 'src/user/rubys.ini';

describe('Test ruby ini', () => {
  let scripts;
  let jsdom;
  before( done => {
    jsdom = gJsdom('', {runScripts: 'outside-only', url: 'http://localhost'});
    getContent(file).then(text => {
      const conf = nest(ini(text), '_');
      scripts = get(conf, ['script']);
    }).done(()=>done());
  });
  after(() => {
    jsdom();
  });

  it('Test purchase script', done => {
    window.i13n = utils();
    const purchaseScript = get(scripts, ['initPurchaseFinish']);
    exec(purchaseScript);
    done();
  });
});
