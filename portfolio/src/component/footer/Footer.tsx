import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
            <div className="footer-cover">
                <div className='social-media-links'>
                  <ul className='social-media-list'>
                    <li><a href="https://www.linkedin.com/in/adithep-tamwisai-3b0a7525b/">LinkedIn</a></li>
                    <li><a href="https://github.com/Mainm0e">Github</a></li>
                  </ul>
                </div>
                <div className="footer-links">
                    <ul className='footer-list'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
    </footer>
  );
}

export default Footer;
