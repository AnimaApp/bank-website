import React from "react";
import LineChart from "../charts/LineChart";

function ProfitLossChart() {
  const data = [
    {
      name: "January",
      profit: 3600,
      loss: 2560,
    },
    {
      name: "February",
      profit: 3930,
      loss: 2640,
    },
    {
      name: "March",
      profit: 2400,
      loss: 2580,
    },
    {
      name: "April",
      profit: 3380,
      loss: 2340,
    },
  ];

  return (
    <LineChart
      data={data}
      lines={[
        { key: "profit", color: "#00A1E4" },
        { key: "loss", color: "#FF6250" },
      ]}
    />
  );
}

export default ProfitLossChart;
