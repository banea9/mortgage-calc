import React from "react";

const LoanAmount = ({ onLoanAmountChange }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label>Please enter loan amount:</label>
      <input
        onBlur={onLoanAmountChange}
        className="db mt2 w-15 mv3"
        type="number"
        placeholder="Enter amount..."
      />
    </div>
  );
};

export default LoanAmount;
