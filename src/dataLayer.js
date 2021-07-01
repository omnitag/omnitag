import get from "get-object-value";
import "./data-layer-helper";

const acceptActions = [
  "ClickProduct",
  "ViewContent",
  "AddToCart",
  "RemoveFromCart",
  "Checkout",
  "Purchase",
  "Refund",
  "Search",
];

const proccessI13nBeacon = (model, message) => {
  const i13nData = get(message, ["i13n"]);
  if (i13nData) {
    window.i13n.dispatch({
      uid: get(i13nData, ["uid"], null),
    });
    if (i13nData.action && acceptActions.indexOf(i13nData.action) !== -1) {
      window.i13n.dispatch("action", {
        I13N: i13nData,
      });
    }
  }
};

const dataLayer = () => {
  const _listener = (model, message) => {
    proccessI13nBeacon(model, message);
  };
  try {
    window.dataLayer = window.dataLayer || [];
    const helper = new DataLayerHelper(window.dataLayer, {
      listener: _listener,
      listenToPast: false,
    });
    window.i13n.helper = helper;
  } catch (err) {
    console.warn("Create DataLayerHelper Instance Failed:", err);
  }
};

export default dataLayer;
