import get from "get-object-value";
import "./data-layer-helper";

const proccessI13nBeacon = (model, message) => {
  const i13nData = get(message, ["i13n"], {});
  if (i13nData.action) {
    window.i13n.dispatch("action", {
      I13N: i13nData,
    });
  }
};

const dataLayer = () => {
  const _listener = (model, message) => {
    proccessI13nBeacon(model, message);
  };

  window.dataLayer = window.dataLayer || [];
  const helper = new DataLayerHelper(window.dataLayer, {
    listener: _listener,
    listenToPast: false,
  });
  window.i13n.helper = helper;
};

export default dataLayer;
