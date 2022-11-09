import React from "react";
import FillChart from "../charts/FillChart";

function ForexChart() {
  const data = [
    { name: "January", amount: 2.17 },
    { name: "February", amount: 1.54 },
    { name: "March", amount: 1.24 },
    { name: "April", amount: 1.08 },
  ];

  return <FillChart data={data} dataKey="amount" height={80} tooltip={false} />;
}

export default ForexChart;
