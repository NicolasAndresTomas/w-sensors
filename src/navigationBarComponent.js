//import libaries
import React from 'react';
import './index.css';

//import images
import logo from './images/logo.png'

//navigation bar function
function navigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left-container">
        <img src={logo} alt="Logo" />
        <div className="navbar-left-contents">
          <a href="/">Home</a>
          <a href="/">Athletes</a>
          <a href="/">Our Technology</a>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">User</a>
        </div>
      </div>
    </nav>
  );
}

export default navigationBar;