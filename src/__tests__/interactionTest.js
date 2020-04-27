// unittest lib
import jsdom from "jsdom-global";
import { expect } from "chai";
import sinon from "sinon";

// lib
import { create } from "create-el";
import { i13nDispatch } from "i13n";
import i13nStore from "i13n-store";
import { utils } from "i13n-client";

import {
  parseRouter,
  fetch,
  handleWebPopup,
  getWebPopupData,
  initialIframe
} from "../interaction";

const { query } = utils();

describe("Test Interaction", () => {
  let reset;
  let sandbox;
  let clock;

  beforeEach(() => {
    reset = jsdom("", { url: "http://localhost" });
    sandbox = sinon.createSandbox();
    clock = sinon.useFakeTimers();
  });
  afterEach(() => {
    reset();
    sandbox.restore();
    clock.restore();
  });

  it("test parseRouter", () => {
    fetch.getCacheData = () => {};
    let spy = sandbox.spy(fetch, "getCacheData");

    parseRouter(
      [
        {
          router: "/xxx"
        }
      ],
      "/xxx"
    );
    expect(spy.callCount >= 1).to.be.true;
  });

  it("test handleWebPopup", () => {
    handleWebPopup({ wid: 1, data: { options: { display_times: 0 } } });
    const iframe = query.one("iframe");
    expect(iframe.nodeName).to.equal("IFRAME");
  });

  it("test getWebPopupData", () => {
    const wData = getWebPopupData(1, 1);
    const expected = { date: "1970/01/01", quota: 1, count: 0 };
    expect(wData).to.deep.equal(expected);
    const wData2 = getWebPopupData(1, 1, true);
    const expected2 = { date: "1970/01/01", quota: 1, count: 1 };
    expect(wData2).to.deep.equal(expected2);
  });

  it("test initialIframe", () => {
    const dForm = create("form")()();
    const dIframe = create("iframe")()();
    document.body.appendChild(dForm);
    document.body.appendChild(dIframe);
    const b4Iframe = query.one("iframe");
    expect(!!b4Iframe).to.be.true;
    initialIframe({ iframeWin: window, dIframe, data: {} });
    dForm.submit();
    const afterIframe = query.one("iframe");
    expect(!!afterIframe).to.be.false;
  });
});
