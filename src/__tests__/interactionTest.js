// unittest lib
import jsdom from "jsdom-global";
import { expect } from "chai";
import sinon from "sinon";

// lib
import { i13nDispatch } from "i13n";
import i13nStore from "i13n-store";
import { utils } from "i13n-client";

import { parseRouter, fetch,  handleWebPopup } from "../interaction";

const {query} = utils();

describe("Test Interaction", () => {
  let reset;
  let sandbox;

  beforeEach(() => {
    reset = jsdom("", { url: "http://localhost" });
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    reset();
    sandbox.restore()
  });

  it("test parseRouter", () => {
    fetch.getCacheData = ()=>{};
    let spy = sandbox.spy(fetch, 'getCacheData');
    
    parseRouter([{
      router: '/xxx'
    }], '/xxx');
    expect(spy.callCount >=1).to.be.true;
  });

  it("test handleWebPopup", ()=>{
    handleWebPopup({}); 
    const iframe = query.one('frame');
    console.log(iframe);
  });

});
