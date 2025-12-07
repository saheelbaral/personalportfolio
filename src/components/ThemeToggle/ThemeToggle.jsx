import React from 'react';
import './ThemeToggle.css';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <div className="toggle-scene">
                <div className="sun-moon">
                    <div className="crater"></div>
                    <div className="crater"></div>
                </div>
                <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <div className="clouds">
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
