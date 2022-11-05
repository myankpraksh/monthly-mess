import React from "react";
import "./CardContainer.css";
export default function CardContainer({cards}) {
  return <div className="CardContainer">
    {cards}
  </div>;
}
