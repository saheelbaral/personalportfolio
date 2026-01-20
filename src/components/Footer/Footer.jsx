import React, { useState } from 'react';
import './Footer.css';
import { FiMail, FiPhone, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [copiedItem, setCopiedItem] = useState(null);

    const copyToClipboard = (text, itemName) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedItem(itemName);
            setTimeout(() => setCopiedItem(null), 2000);
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Saheel Baral</h3>
                    <p className="footer-tagline">Digital Marketer & Brand Strategist</p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-heading">Contact</h4>
                    <div className="footer-links">
                        <div className="footer-link">
                            <FiMail className="footer-icon" />
                            <span>saheelbaral@gmail.com</span>
                            <button
                                className="footer-copy-button"
                                onClick={() => copyToClipboard('saheelbaral@gmail.com', 'email')}
                                aria-label="Copy email"
                            >
                                {copiedItem === 'email' ? <FiCheck /> : <FiCopy />}
                            </button>
                        </div>
                        <div className="footer-link">
                            <FiPhone className="footer-icon" />
                            <span>+46 76 752 51 62</span>
                            <button
                                className="footer-copy-button"
                                onClick={() => copyToClipboard('+46767525162', 'phone')}
                                aria-label="Copy phone"
                            >
                                {copiedItem === 'phone' ? <FiCheck /> : <FiCopy />}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-section">
                    <h4 className="footer-heading">Connect</h4>
                    <div className="footer-social">
                        <a
                            href="https://www.linkedin.com/in/baralsaheel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {currentYear} Saheel Baral. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
