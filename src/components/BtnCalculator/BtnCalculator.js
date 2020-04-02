import React from "react";
import "./button.css";
const BtnCalculate = ({ onBtnClick }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button
        onClick={onBtnClick}
        className="br3 pointer mv3"
        style={{ padding: "10px 25px", border: "3px solid #0f0c29" }}
      >
        Calculate mortgage
      </button>
    </div>
  );
};

export default BtnCalculate;
