import { expect } from "chai";
import { get as getContent } from "get-content";
import get from "get-object-value";
import glob from "glob";
import ini from "parse-ini-string";
import { nest } from "object-nested";
import exec from "exec-script";
import gJsdom from "jsdom-global";
import { utils } from "i13n-client";

const file = "src/user/rubys-matrix.ini";

describe("Test ruby ini", () => {
  let scripts;
  let jsdom;
  before((done) => {
    jsdom = gJsdom("", { runScripts: "outside-only", url: "http://localhost" });
    getContent(file)
      .then((text) => {
        const conf = nest(ini(text), "_");
        scripts = get(conf, ["script"]);
      })
      .done(() => done());
  });
  after(() => {
    jsdom();
  });

  it("Test purchase script", (done) => {
    window.i13n = utils();
    const utilsScript = get(scripts, ["utils"]);
    const purchaseScript = get(scripts, ["initPurchaseFinish"]);
    exec(utilsScript);
    exec(purchaseScript);
    done();
  });

  it("Test get json", () => {
    window.i13n = utils();
    const utilsScript = get(scripts, ["utils"]);
    exec(utilsScript);
    const getJson = window.i13n.getJson;
    expect(getJson('a')).to.deep.equal(['a']);
    expect(getJson("'A01','B02','C03'")).to.deep.equal(['A01','B02','C03']);
  });
});
