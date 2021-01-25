import interaction from "./interaction";

const getOverWrite = () => {
  interaction();
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
      value: "2.0.2",
    },
  ];
};

export { getOverWrite, interaction };
