import jsdom from "jsdom-global";
import { expect } from "chai";
import { i13nDispatch } from "i13n";
import i13nStore from "i13n-store";
import sinon from "sinon";

class req {
  open() {}
  send() {
    this.responseText = "Zm9vPWJhcgo=";
    this.onload(this);
  }
}

import tag, { closeTag } from "../tagWeb";

describe("Test tag", () => {
  const sandbox = sinon.createSandbox();
  let reset;

  beforeEach(() => {
    reset = jsdom(null, { url: "http://localhost" });
    window.XMLHttpRequest = req;
  });

  afterEach(() => {
    reset();
  });

  after(() => sandbox.restore());

  it("test mp host", (done) => {
    tag((hasAtoB) => {
      setTimeout(() => {
        const state = i13nStore.getState();
        expect(state.get("defaultMpHost")).to.equal(
          "https://analytics.omniscientai.com"
        );
        expect(hasAtoB).to.be.true;
        done();
      });
    });
  });

  it("test mp host when no atob", (done) => {
    i13nDispatch({ defaultMpHost: null });
    window.atob = null;
    tag((hasAtoB) => {
      setTimeout(() => {
        const state = i13nStore.getState();
        expect(state.get("defaultMpHost")).to.equal(
          "https://analytics.omniscientai.com"
        );
        expect(hasAtoB).to.be.false;
        done();
      });
    });
    setTimeout(() => {
      const dScript = document.body.querySelector("script");
      dScript.onreadystatechange();
    }, 600);
  });

  it("test duplicate warn", () => {
    sandbox.spy(console, "warn");
    const id = tag();
    tag();
    expect(console.warn.getCall(0).args[0]).to.have.string("duplicate");
    closeTag(id); // wait client setInterval
  });
});
