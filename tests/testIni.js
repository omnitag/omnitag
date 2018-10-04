import {expect} from 'chai';
import sinon from 'sinon';
import glob from 'glob';
import {get as getContent} from 'get-content';
import ini from 'parse-ini-string';
import {nest} from 'object-nested';
import get from 'get-object-value';
import exec from 'exec-script';
import gJsdom from 'jsdom-global';

const keys = Object.keys;

describe('Test ini file', () => {
  let jsdom;
  before(() => {
    jsdom = gJsdom('', {runScripts: 'outside-only'});
  });
  it('test syntax', done => {
    glob('**/*.ini', {cwd: './src/user/', realpath: true}, (err, files) => {
      const allFiles = {};
      const checkDone = f => {
        delete allFiles[f];
        if (!keys(allFiles).length) {
          done();
        }
      };
      files.forEach(f => {
        allFiles[f] = true;
        getContent(f)
          .then(text => {
            const conf = nest(ini(text), '_');
            const scripts = get(conf, ['script']);
            if (!scripts) {
              throw new Error(['Can not find script', f]);
            }
            keys(scripts).forEach(key => {
              const errCb = (e, script) => {
                if (e.name === 'SyntaxError') {
                  throw new Error(['SyntaxError', script]);
                }
              };
              const script = scripts[key];
              exec(script, null, null, errCb);
            });
          })
          .done(() => {
            checkDone(f);
          });
      });
    });
  });

  after(() => {
    jsdom();
  });
});
