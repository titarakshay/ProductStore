import React from "react";
const logo = require("../media/logo.png");

// Header component
export default function Header() {
  return (
    <div className="header">
      <div className="d-flex justify-content-between align-items-color p-3 px-3">
        <img src={logo} alt="logo" style={{ width: "5rem" }} />
        <div>
          <h1>Product Store</h1>
        </div>
        <div>
          <h2>E-Mart</h2>
        </div>
      </div>
    </div>
  );
}
