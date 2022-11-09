import * as AntDesignIcons from "@ant-design/icons";
import React from "react";
import Button from "../buttons/Button";
import ForexChart from "../ForexChart";
import "./ForexCard.css";

function ForexCard({ title, currency }) {
  balance = 7000;
  rate = 1.12;
  buyRate = 1.13;
  sellRate = 1.11;

  return (
    <div className="forex-card">
      <div className="title-7 valign-text-middle poppins-normal-heavy-metal-20px">
        {title}
      </div>
      <div className="value-2 valign-text-middle poppins-semi-bold-heavy-metal-40px">
        €{balance.toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </div>
      <div className="chart-details">
        <div className="forex-details poppins-normal-heavy-metal-20px">
          <div className="currency valign-text-middle">{currency}</div>
          <div className="value-3 valign-text-middle">{rate}</div>
        </div>
        <ForexChart />
      </div>
      <div className="forex-actions">
        <Button
          text={`Sell | $${sellRate}`}
          icon={<AntDesignIcons.DollarCircleOutlined />}
          style={{ marginRight: "5px" }}
        />
        <Button
          text={`Buy | $${buyRate}`}
          icon={<AntDesignIcons.DollarCircleFilled />}
          style={{ marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default ForexCard;
