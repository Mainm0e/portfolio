import React from "react";
import "./style.css"; // Import the CSS file for the navbar styles
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo"> My Portfolio </h1>{" "}
        <ul className="nav-links">
          <li className="nav-item">
            {" "}
            <a href="#contact"> Contact </a>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <a href="https://www.linkedin.com/in/adithep-tamwisai-3b0a7525b/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <a href="https://github.com/Mainm0e" target="_blank" rel="noopener noreferrer"> Github </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
}

export default Navbar;
