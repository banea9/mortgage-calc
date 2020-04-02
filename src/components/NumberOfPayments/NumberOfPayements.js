import React from "react";

const NumberOfPayments = ({ onLoanLengthChange }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label>Please enter length of loan (in years):</label>
      <input
        onBlur={onLoanLengthChange}
        className="db mt2 w-15 mv3"
        type="number"
        placeholder="Enter loan length..."
      />
    </div>
  );
};

export default NumberOfPayments;
