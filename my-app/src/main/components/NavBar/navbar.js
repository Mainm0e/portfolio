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
            <a href="#home"> Home </a>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <a href="#about"> About </a>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <a href="#projects"> Projects </a>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <a href="#contact"> Contact </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
}

export default Navbar;
