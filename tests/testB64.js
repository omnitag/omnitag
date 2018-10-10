import {expect} from 'chai';
import sinon from 'sinon';
import b64 from '../cjs/src/base64' 

describe('Test base64', () => {
  it('encode chinese', () => {
    const s = '結帳商品';
    const code = b64.encode(s);
    expect(code).to.equal('57WQ5biz5ZWG5ZOB');
  });
  it('encode chinese', () => {
    const code = '57WQ5biz5ZWG5ZOB';
    const s = b64.decode(code);
    expect(s).to.equal('結帳商品');
  });
});
