
import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../../assets/profile.png';
import Fireflies from '../Fireflies/Fireflies';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { useTheme } from '../../context/ThemeContext';
import { FiClock, FiLayers } from 'react-icons/fi';
import { SiSpotify } from 'react-icons/si';
import { getNowPlaying } from '../../services/spotifyService';

const Hero = () => {
    const { isDarkMode } = useTheme();
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [spotifyData, setSpotifyData] = useState({
        isPlaying: false,
        title: 'Loading...',
        artist: '',
        albumArt: null,
        songUrl: null
    });

    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Fetch Spotify data on mount and refresh every 30 seconds
    useEffect(() => {
        const fetchSpotify = async () => {
            const data = await getNowPlaying();
            setSpotifyData(data);
        };

        fetchSpotify();
        const spotifyInterval = setInterval(fetchSpotify, 30000);

        return () => clearInterval(spotifyInterval);
    }, []);

    return (
        <div className="hero-container">
            {/* Firefly Particle Background */}
            <Fireflies />

            {/* Centered Content Block */}
            <div className="hero-center">
                {/* Circular Avatar */}
                <div className="hero-avatar">
                    <img src={profileImg} alt="Saheel Baral" />
                </div>

                {/* Text Content */}
                <div className="hero-eyebrow">I'm Saheel</div>
                <h1 className="hero-headline">
                    Full-Stack Growth <br />
                    <span className="highlight-text">marketing specialist.</span>
                </h1>
                <p className="hero-description">
                    I'm adept in Aquisition Marketing, Funnel Design (Sales), and Automation.
                </p>
            </div>

            {/* Status Bar */}
            <div className="hero-status-bar">
                {/* Local Time */}
                <div className="status-segment">
                    <FiClock className="status-icon" />
                    <span className="status-label">Local Time</span>
                    <span className="status-value">{currentTime}</span>
                </div>

                <div className="status-divider" />

                {/* Weather */}
                <div className="status-segment">
                    <WeatherWidget compact />
                </div>

                <div className="status-divider" />

                {/* Working On */}
                <div className="status-segment">
                    <FiLayers className="status-icon" />
                    <span className="status-label">Working On</span>
                    <span className="status-value">iCaptain Userdeck</span>
                </div>

                <div className="status-divider" />

                {/* Spotify */}
                <div className="status-segment">
                    <SiSpotify className="status-icon status-icon-spotify" />
                    <span className="status-label">{spotifyData.isPlaying ? 'Listening' : 'Last Played'}</span>
                    <span className="status-value">
                        {spotifyData.songUrl ? (
                            <a href={spotifyData.songUrl} target="_blank" rel="noopener noreferrer" className="status-spotify-link">
                                {spotifyData.title}
                            </a>
                        ) : spotifyData.title}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
