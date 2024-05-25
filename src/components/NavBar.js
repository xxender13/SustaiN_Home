// src/components/NavBar.js
import React from 'react';
import './NavBar.css';
import logo from 'C:/Users/harsh/OneDrive/Desktop/SustaiN_Home/src/images/logo.jpg'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        SUStaiN
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#concept">Concept</a>
        <a href="#demo">Demo</a>
        <a href="#contact">Contact Us</a>
        <a href="#launch" className="launch-button" onClick={() => window.open('https://sustain-app-a271500b1a7d.herokuapp.com/', '_blank')}>Launch App</a>
      </div>
    </nav>
  );
};

export default NavBar;
