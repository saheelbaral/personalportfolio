import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FiMail, FiPhone, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const copyToClipboard = (text, itemName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(itemName);
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">SAHEEL BARAL</span>
        <span className="navbar-divider">|</span>

        <div className="contact-dropdown-container" ref={dropdownRef}>
          <button
            className="contact-icon-button contact-combined-button"
            onClick={toggleDropdown}
            aria-label="Contact"
          >
            <FiMail />
            <FiPhone />
          </button>

          {isDropdownOpen && (
            <div className="contact-dropdown">
              <div className="contact-dropdown-item">
                <FiMail className="contact-item-icon" />
                <span>saheelbaral@gmail.com</span>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard('saheelbaral@gmail.com', 'email')}
                  aria-label="Copy email"
                >
                  {copiedItem === 'email' ? <FiCheck /> : <FiCopy />}
                </button>
              </div>
              <div className="contact-dropdown-item">
                <FiPhone className="contact-item-icon" />
                <span>+46 76 752 51 62</span>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard('+46767525162', 'phone')}
                  aria-label="Copy phone"
                >
                  {copiedItem === 'phone' ? <FiCheck /> : <FiCopy />}
                </button>
              </div>
            </div>
          )}
        </div>

        <span className="navbar-divider">|</span>

        <a
          href="https://www.linkedin.com/in/baralsaheel"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon-button"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
      </div>
      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
