import interaction from "./interaction";

const getOverWrite = () => {
  interaction();
  return [
    {
      path: ["defaultMpHost"],
      value: "https://analytics.omniscientai.com"
    },
    {
      path: ["needCheckTagId"],
      value: true 
    },
    {
      path: ["version"],
      value: '1.3.0'
    }
  ];
};

export { getOverWrite, interaction };
