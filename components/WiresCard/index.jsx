import * as AntDesignIcons from "@ant-design/icons";
import React from "react";
import Button from "../buttons/Button";
import WireRow from "../WireRow";
import "./WiresCard.css";

function WiresCard({ title }) {
  const wires = [
    { name: "Paypal", amount: 2400 },
    { name: "Stripe", amount: 3200 },
  ];

  return (
    <div className="wires-card">
      <div className="overlap-group">
        <div className="title-frame">
          <div className="title-5 valign-text-middle poppins-normal-heavy-metal-20px">
            {title}
          </div>
          <img className="divider-1" src="/img/divider@2x.svg" />
        </div>
        <Button
          text="Approve all"
          icon={<AntDesignIcons.CheckCircleFilled />}
          style={{ float: "right" }}
        />
      </div>
      <div className="list-1">
        {wires.map((wire) => (
          <WireRow key={wire.name} text={wire.name} value={wire.amount} />
        ))}
      </div>
    </div>
  );
}

export default WiresCard;
