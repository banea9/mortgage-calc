import React from "react";

const IntrestRate = ({ onIntrestRateChange }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label>Please enter intrest rate:</label>
      <input
        onBlur={onIntrestRateChange}
        className="db mt2 w-15 mv3"
        type="number"
        placeholder="Enter intrest rate..."
      />
    </div>
  );
};

export default IntrestRate;
