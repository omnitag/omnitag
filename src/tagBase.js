import interaction from "./interaction";

const getOverWrite = () => {
  interaction();
  return [
    {
      path: ["defaultMpHost"],
      value: "https://analytics.omniscientai.com"
    },
    {
      path: ["version"],
      value: 2
    }
  ];
};

export { getOverWrite, interaction };
