import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className='navbar-cover'>
        <div className="logo">
        <span>Mainm0e</span>
        </div>
        <div className="nav-links">
        <ul className='nav-list'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
