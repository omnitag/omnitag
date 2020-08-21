import { client, utils } from "i13n-client";
import { interaction } from "./tagBase";

// fruitpay
// const iniUrl = '//lan.cicd.omnicloud.tech:7000/src/user/OA-1597cbff.ini';

// rubys.com.tw
// const iniUrl = '//localhost:7000/src/user/rubys.ini';
// const iniUrl = "//lan.cicd.omnicloud.tech:7000/src/user/rubys.ini";

// June1
// const iniUrl = '//lan.cicd.omnicloud.tech:7000/src/user/OA-19c95c3b.ini';

// shopify (Airspace my)
const iniUrl = '//lan.cicd.omnicloud.tech:7000/src/user/OA-e2a4b618.ini';

// edh
// const iniUrl = '//lan.cicd.omnicloud.tech:7000/src/user/OA-f8137c97.ini';

const iniCallback = (t, cb) => {
  cb(t, [
    {
      path: ["tag", "debug", "enabled"],
      value: true,
    },
    {
      path: ["tag", "gtag", "gaId"],
      value: "UA-124534784-1",
    },
    {
      path: ["tag", "usergram", "enabled"],
      value: false,
    },
    {
      path: ["defaultMpHost"],
      value: "https://analytics.omniscientai.com",
    },
    {
      path: ["tagId"],
      value: "OA-c1af6551",
    },
  ]);
  interaction();
};

const load = () => {
  client(iniUrl, iniCallback, true);
};

if (!window.i13nIsLoad) {
  window.i13nIsLoad = 1;
  load();
  window.i13nReload = () => {
    const { lazyAttr } = utils();
    lazyAttr(iniUrl)(null);
    load();
  };
} else {
  console.warn("Trigger multi tags.");
}
