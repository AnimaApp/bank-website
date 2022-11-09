import React from "react";
import FillChart from "../charts/FillChart";

function BalanceChart() {
  const data = [
    { name: "January", balance: 12000 },
    { name: "February", balance: 13210 },
    { name: "March", balance: 10840 },
    { name: "April", balance: 14780 },
  ];

  return (
    <FillChart data={data} dataKey="balance" height={140} tooltip={true} />
  );
}

export default BalanceChart;
