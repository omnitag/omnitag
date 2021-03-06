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
  fetcher,
  handleWebPopup,
  getWebPopupData,
  getPreview,
  initialIframe,
  checkMustHaveLine,
  updateSampleTemplateIframeStyle,
  checkTimeExpired,
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
    clock.restore();
    sandbox.restore();
  });

  it("test parseRouter", () => {
    fetcher.getCacheData = () => {};
    let spy = sandbox.spy(fetcher, "getCacheData");

    parseRouter(
      [
        {
          router: "/xxx",
        },
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
    const expected = { cTime: 0, quota: 1, count: 0 };
    expect(wData).to.deep.equal(expected);
    const wData2 = getWebPopupData(1, 1, true);
    const expected2 = { cTime: 0, quota: 1, count: 1 };
    expect(wData2).to.deep.equal(expected2);
    clock.tick(86400000);
    const wData3 = getWebPopupData(1, 1, true);
    expect(wData3).to.deep.equal({ cTime: 0, quota: 1, count: 2 });
    clock.tick(1);
    const wData4 = getWebPopupData(1, 1, true);
    expect(wData4).to.deep.equal({ cTime: 86400001, quota: 1, count: 1 });
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

  it("test sample template iframe style", () => {
    handleWebPopup({
      wid: 1,
      data: {
        html: `
        <body id="wrapper" style="box-sizing: border-box; margin: 0;">
          <div data-sample-id="A" id="template-sample" style="box-sizing: border-box; margin: 0; display: flex;">
          </div>
        </body>
      `,
        options: { display_times: 0 },
      },
    });
    const iframe = query.one("iframe");
    expect(iframe.nodeName).to.equal("IFRAME");

    updateSampleTemplateIframeStyle(iframe);
    expect(iframe.getAttribute("data-sample-id")).to.equal("A");
    expect(iframe.style.height).to.equal("100%");
  });
});

describe("Test checkMustHaveLine", () => {
  let reset;
  beforeEach(() => {
    reset = jsdom("", { url: "http://localhost" });
  });

  afterEach(() => {
    reset();
  });

  it("test preview", () => {
    reset();
    reset = jsdom("", {
      url:
        "http://localhost?__wpreview=eyJob3N0IjoiaHR0cHM6Ly9sYW4uY2ljZC5vbW5pY2xvdWQudGVjaDoxODAwMCIsInRpZCI6Ik9BLWMxOWViNiJ9",
    });
    const acture = checkMustHaveLine();
    const isPreview = getPreview();
    expect(isPreview).to.have.all.keys("host", "tid");
    expect(acture).to.be.false;
  });

  it("test needHasLine=0", () => {
    const acture = checkMustHaveLine(0);
    expect(acture).to.be.false;
  });

  it("test needHasLine=1 hasLine=false", () => {
    const acture = checkMustHaveLine(1, false);
    expect(acture).to.be.true;
  });

  it("test needHasLine=1 hasLine=true", () => {
    const acture = checkMustHaveLine(1, true);
    expect(acture).to.be.false;
  });

  it("test needHasLine=2 hasLine=false", () => {
    const acture = checkMustHaveLine(2, false);
    expect(acture).to.be.false;
  });

  it("test needHasLine=2 hasLine=true", () => {
    const acture = checkMustHaveLine(2, true);
    expect(acture).to.be.true;
  });
});

describe("Test checkTimeExpired", () => {
  let reset;
  let clock;
  beforeEach(() => {
    reset = jsdom("", { url: "http://localhost" });
    clock = sinon.useFakeTimers(new Date("2020-01-01").getTime());
  });

  afterEach(() => {
    reset();
    clock.restore();
  });

  it("test Webpopup in Time Range", () => {
    expect(checkTimeExpired("2019-12-25", "2020-01-25")).to.be.false;
  });

  it("test Webpopup Expired", () => {
    expect(checkTimeExpired("2019-01-01", "2019-12-25")).to.be.true;
  });

  it("test Webpopup not Starting", () => {
    expect(checkTimeExpired("2020-01-25", "2020-12-25")).to.be.true;
  });

  it("test inValid dateTime won't stop Webpopup", () => {
    expect(checkTimeExpired("200000-20000-20000", () => {})).to.be.false;
  });
});
