import React from "react";

const MortgageOutput = ({ mortgage, years }) => {
  return (
    <div
      style={{
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <p>{`Your monthly payment is: ${mortgage.monthlyPayment.toFixed(2)}$`}</p>
      <p>{`Your total payment is: ${(
        mortgage.monthlyPayment *
        years *
        12
      ).toFixed(2)}$`}</p>
    </div>
  );
};

export default MortgageOutput;
