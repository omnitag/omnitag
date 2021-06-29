import interaction from "./interaction";
import dataLayer from "./dataLayer";

const getOverWrite = () => {
  interaction();
  dataLayer()
  return [
    {
      path: ["defaultMpHost"],
      value: "https://analytics.omniscientai.com",
    },
    {
      path: ["tag", "gtag", "id"],
      value: "GTM-TW79K5B",
    },
    {
      path: ["needCheckTagId"],
      value: true,
    },
    {
      path: ["version"],
      value: "2.0.4",
    },
  ];
};

export { getOverWrite, interaction, dataLayer };
