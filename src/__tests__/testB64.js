import { expect } from "chai";
import b64 from "../base64";

describe("Test base64", () => {
  it("encode chinese", () => {
    const s = "結帳商品";
    const code = b64.encode(s);
    expect(code).to.equal("57WQ5biz5ZWG5ZOB");
  });
  it("decode chinese", () => {
    const code = "57WQ5biz5ZWG5ZOB";
    const s = b64.decode(code);
    expect(s).to.equal("結帳商品");
  });
});
