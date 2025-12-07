import React from 'react';
import './Hero.css';
import heroBg from '../../assets/hero-bg-full.png';
import heroBgLight from '../../assets/hero-light.png';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
    const { isDarkMode } = useTheme();

    // Simple time formatter for the "Local Time" widget
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div
            className="hero-container"
            style={{
                backgroundImage: `url(${isDarkMode ? heroBg : heroBgLight})`
            }}
        >
            {/* Left Column: Text */}
            <div className="hero-content">
                <span className="hero-greeting">I'm Saheel,</span>
                <h1 className="hero-headline">
                    I help brands<br />
                    leverage the power<br />
                    of digital marketing.
                </h1>
            </div>

            {/* Center Column: Spacer (was Image) to keep grid structure or just empty div so spacing works */}
            <div className="hero-spacer"></div>

            {/* Right Column: Widgets */}
            <div className="hero-widgets">
                {/* Widget 1: Local Time (Compact) */}
                <div className="glass-card compact-card">
                    <span className="card-header-inline">LOCAL TIME</span>
                    <span className="card-value-inline">{currentTime}</span>
                </div>

                {/* Widget 2: Location (Dynamic Weather) */}
                <WeatherWidget />

                {/* Widget 3: Working On */}
                <div className="glass-card">
                    <div className="card-header">Working On</div>
                    <div className="card-title">iCaptain Userdeck</div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
