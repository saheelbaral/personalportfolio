import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroBg from '../../assets/hero-bg-full.png';
import heroBgLight from '../../assets/hero-light.png';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { useTheme } from '../../context/ThemeContext';
import { FiClock, FiLayers, FiMusic } from 'react-icons/fi';

const Hero = () => {
    const { isDarkMode } = useTheme();
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="hero-container"
            style={{
                backgroundImage: `url(${isDarkMode ? heroBg : heroBgLight})`
            }}
        >
            {/* Left Column: Text */}
            <div className="hero-content">
                <div className="hero-eyebrow">I'm Saheel</div>
                <h1 className="hero-headline">
                    Digital marketer <br />
                    <span className="highlight-text">and brand strategist.</span>
                </h1>
                <p className="hero-description">
                    I'm adept in using digital tools for digital marketing across various industries.
                </p>
            </div>

            {/* Center Column: Spacer (was Image) to keep grid structure or just empty div so spacing works */}
            <div className="hero-spacer"></div>

            {/* Right Column: Widgets */}
            <div className="hero-widgets">
                {/* Widget 1: Local Time (Compact) */}
                <div className="glass-card compact-card">
                    <div className="widget-icon-header">
                        <FiClock className="widget-icon" />
                        <span className="card-header-inline">LOCAL TIME</span>
                    </div>
                    <span className="card-value-inline">{currentTime}</span>
                </div>

                {/* Widget 2: Location (Dynamic Weather) */}
                <WeatherWidget />

                {/* Widget 3: Working On */}
                <div className="glass-card">
                    <div className="widget-icon-header">
                        <FiLayers className="widget-icon" />
                        <div className="card-header">Working On</div>
                    </div>
                    <div className="card-title">iCaptain Userdeck</div>
                    <div className="card-sub">Building an interactive user manual to help new users get started quickly</div>
                </div>

                {/* Widget 4: Listening To */}
                <div className="glass-card music-card">
                    <div className="widget-icon-header">
                        <FiMusic className="widget-icon" />
                        <div className="card-header">Listening To</div>
                    </div>
                    <div className="music-content">
                        <img
                            src="https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79"
                            alt="Song for Zula album art"
                            className="album-art"
                        />
                        <div className="music-info">
                            <div className="song-title">Song for Zula</div>
                            <div className="artist-name">Phosphorescent</div>
                            <a href="https://open.spotify.com/track/0WgALRIGJILxAYSC0j1FLN" target="_blank" rel="noopener noreferrer" className="spotify-link">
                                Open in Spotify →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
