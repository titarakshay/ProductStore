import React from "react";
import { NavLink } from "react-router-dom";
const logo = require("../media/logo.png");

// Header component
export default function Header() {
  return (
    <div className="header">
      <div className="d-flex justify-content-between align-items-center media-font p-3 px-3">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>

        <h1>Product Store</h1>

        <h2>E-Mart</h2>
      </div>
    </div>
  );
}
