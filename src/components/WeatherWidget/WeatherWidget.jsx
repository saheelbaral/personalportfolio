import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';

import sunnyBg from '../../assets/weather/sunny.png';
import cloudyBg from '../../assets/weather/cloudy.png';
import rainyBg from '../../assets/weather/rainy.png';
import snowyBg from '../../assets/weather/snowy.png';

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Stockholm Coordinates (Approx for "Sweden")
    const LAT = 59.3293;
    const LON = 18.0686;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,weather_code,is_day`
                );

                if (!response.ok) throw new Error('Failed to fetch weather');

                const data = await response.json();
                setWeather(data.current);
                setLoading(false);
            } catch (err) {
                console.error("Weather fetch failed:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    // Illustration Helper
    const WeatherIllustration = ({ code, isDay }) => {
        // Simple mapping
        // 0: Clear
        // 1-3: Cloud
        // 45,48: Fog (Cloud)
        // 51+, 61+, 80+: Rain
        // 71+: Snow
        // 95: Storm

        const props = { className: "weather-illustration", width: "64", height: "64", viewBox: "0 0 64 64" };

        // Sun / Clear
        if (code === 0) {
            if (!isDay) return (
                <svg {...props}>
                    <circle cx="32" cy="32" r="14" fill="#F4F6F0" opacity="0.9" /> {/* Moon */}
                    <circle cx="42" cy="24" r="4" fill="#E6E8D2" opacity="0.6" />
                </svg>
            );
            return (
                <svg {...props}>
                    <circle cx="32" cy="32" r="16" fill="#fbbf24" /> {/* Sun core */}
                    <g stroke="#fbbf24" strokeWidth="4" strokeLinecap="round">
                        <line x1="32" y1="6" x2="32" y2="10" />
                        <line x1="32" y1="54" x2="32" y2="58" />
                        <line x1="58" y1="32" x2="54" y2="32" />
                        <line x1="10" y1="32" x2="6" y2="32" />
                        <line x1="50.4" y1="13.6" x2="47.6" y2="16.4" />
                        <line x1="16.4" y1="47.6" x2="13.6" y2="50.4" />
                        <line x1="50.4" y1="50.4" x2="47.6" y2="47.6" />
                        <line x1="16.4" y1="13.6" x2="13.6" y2="16.4" />
                    </g>
                </svg>
            );
        }

        // Clouds / Fog
        if ((code >= 1 && code <= 3) || (code >= 45 && code <= 48)) {
            return (
                <svg {...props}>
                    <path d="M16 40C16 31.1634 23.1634 24 32 24C32.962 24 33.9009 24.1039 34.8105 24.3013C36.6322 17.5204 42.7937 12.5 50.1 12.5C58.882 12.5 66 19.618 66 28.4C66 29.5636 65.8741 30.6946 65.6366 31.777C65.8756 31.7611 66.1163 31.75 66.3571 31.75C71.3277 31.75 75.3571 35.7794 75.3571 40.75C75.3571 45.7206 71.3277 49.75 66.3571 49.75H16C10.4772 49.75 6 45.2728 6 39.75C6 34.2272 10.4772 29.75 16 29.75V40Z"
                        fill="url(#cloudGrad)" transform="translate(-10, 4) scale(0.85)" />
                    <defs>
                        <linearGradient id="cloudGrad" x1="6" y1="12.5" x2="75.3571" y2="49.75" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#E2E8F0" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        }

        // Rain
        if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
            return (
                <svg {...props}>
                    {/* Simplified cloud */}
                    <path d="M22 26C22 21.5817 25.5817 18 30 18C30.481 18 30.9504 18.0519 31.4052 18.1506C32.3161 14.7602 35.3968 12.25 39.05 12.25C43.4411 12.25 47 15.8089 47 20.2C47 20.7818 46.9371 21.3473 46.8183 21.8885C46.9378 21.8806 47.0581 21.875 47.1786 21.875C49.6639 21.875 51.6786 23.8897 51.6786 26.375C51.6786 28.8603 49.6639 30.875 47.1786 30.875H22C19.2386 30.875 17 28.6364 17 25.875C17 23.1136 19.2386 20.875 22 20.875V26Z"
                        fill="#E2E8F0" transform="scale(1.1)" />
                    {/* Rain drops */}
                    <line x1="28" y1="38" x2="26" y2="44" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                    <line x1="36" y1="38" x2="34" y2="44" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                    <line x1="44" y1="38" x2="42" y2="44" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
                </svg>
            );
        }

        // Snow
        if (code >= 71 && code <= 77) {
            return (
                <svg {...props}>
                    <path d="M22 26C22 21.5817 25.5817 18 30 18C30.481 18 30.9504 18.0519 31.4052 18.1506C32.3161 14.7602 35.3968 12.25 39.05 12.25C43.4411 12.25 47 15.8089 47 20.2C47 20.7818 46.9371 21.3473 46.8183 21.8885C46.9378 21.8806 47.0581 21.875 47.1786 21.875C49.6639 21.875 51.6786 23.8897 51.6786 26.375C51.6786 28.8603 49.6639 30.875 47.1786 30.875H22C19.2386 30.875 17 28.6364 17 25.875C17 23.1136 19.2386 20.875 22 20.875V26Z"
                        fill="#E2E8F0" transform="scale(1.1)" />
                    <circle cx="28" cy="42" r="2" fill="white" />
                    <circle cx="36" cy="48" r="2" fill="white" />
                    <circle cx="44" cy="42" r="2" fill="white" />
                </svg>
            );
        }

        // Storm
        if (code >= 95) {
            return (
                <svg {...props}>
                    <path d="M22 26C22 21.5817 25.5817 18 30 18C30.481 18 30.9504 18.0519 31.4052 18.1506C32.3161 14.7602 35.3968 12.25 39.05 12.25C43.4411 12.25 47 15.8089 47 20.2C47 20.7818 46.9371 21.3473 46.8183 21.8885C46.9378 21.8806 47.0581 21.875 47.1786 21.875C49.6639 21.875 51.6786 23.8897 51.6786 26.375C51.6786 28.8603 49.6639 30.875 47.1786 30.875H22C19.2386 30.875 17 28.6364 17 25.875C17 23.1136 19.2386 20.875 22 20.875V26Z"
                        fill="#94a3b8" transform="scale(1.1)" />
                    <path d="M34 32L28 44H34L32 54L42 40H36L40 32H34Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1" strokeLinejoin="round" />
                </svg>
            );
        }

        return null;
    };

    const getWeatherLabel = (code) => {
        const labels = {
            0: "Clear",
            1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
            45: "Fog", 48: "Rime Fog",
            51: "Drizzle", 53: "Drizzle", 55: "Drizzle",
            61: "Rain", 63: "Rain", 65: "Heavy Rain",
            71: "Snow", 73: "Snow", 75: "Heavy Snow",
            95: "Storm",
        };
        return labels[code] || "Weather";
    };

    if (loading) return (
        <div className="glass-card weather-card loading">
            <div className="card-header">Currently In</div>
            <div className="card-title">Loading...</div>
        </div>
    );

    if (error) return (
        <div className="glass-card weather-card error">
            <div className="card-header">Currently In</div>
            <div className="card-title">Sweden</div>
            <div className="card-sub">--°C</div>
        </div>
    );

    const temp = Math.round(weather.temperature_2m);
    const label = getWeatherLabel(weather.weather_code);

    return (
        <div className="glass-card weather-card minimal">
            <div className="weather-content-minimal">
                <div className="weather-info">
                    <div className="card-header">Currently In</div>
                    <div className="card-title">Sweden</div>
                    <div className="weather-details">
                        <span className="temp">{temp}°</span>
                        <span className="condition">{label}</span>
                    </div>
                </div>
                <div className="weather-illustration-container">
                    <WeatherIllustration code={weather.weather_code} isDay={weather.is_day} />
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
