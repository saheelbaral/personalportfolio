import React from 'react';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">SAHEEL BARAL</span>
        <span className="navbar-divider">|</span>
        <button className="navbar-cta-text">GET IN TOUCH</button>
      </div>
      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
