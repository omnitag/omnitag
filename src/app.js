import { client } from "i13n-client";
import { win } from "win-doc";
import { getOverWrite } from "./tagBase";

const i13nData = win().i13nData || {};
if (!i13nData.tag) {
  i13nData.tag = {
    gtag: {
      enabled: true,
      downstreams: ["mp"],
    },
  };
}

client(i13nData, (configs, cb) => cb(configs, getOverWrite()));
