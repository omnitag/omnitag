import interaction from "./interaction";

const getOverWrite = () => {
  interaction();
  return [
    {
      path: ["defaultMpHost"],
      value: "https://analytics.omniscientai.com"
    },
    {
      path: ["omnitag", "version"],
      value: "2020-04-27-01"
    }
  ];
};

export { getOverWrite, interaction };
