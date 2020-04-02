import React from "react";
import "./logo.css";
import logo from "./calc.png";
const Header = () => {
  return (
    <div
      className="headerWrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{ padding: "5px" }}
        className="Logo ml4"
      />
      <h1 className="f2 dib" style={{ color: "#f3bc88" }}>
        Your mortgage calculator
      </h1>
    </div>
  );
};

export default Header;
