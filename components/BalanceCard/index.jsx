import React from "react";
import BalanceChart from "../BalanceChart";
import "./BalanceCard.css";

function BalanceCard({ title }) {
  const value = 14000;

  return (
    <div className="balance-card">
      <div className="title valign-text-middle poppins-normal-heavy-metal-20px">
        {title}
      </div>
      <h1 className="value valign-text-middle poppins-semi-bold-heavy-metal-40px">
        ${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </h1>
      <BalanceChart />
    </div>
  );
}

export default BalanceCard;
