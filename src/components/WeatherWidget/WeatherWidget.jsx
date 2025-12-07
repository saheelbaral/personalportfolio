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

    // Helper to get background image
    const getBackgroundImage = (code, isDay) => {
        // sunny/clear
        if (code === 0) return sunnyBg;
        if (code >= 1 && code <= 3) return cloudyBg;
        if (code >= 45 && code <= 48) return cloudyBg; // fog
        // rain
        if (code >= 51 && code <= 67) return rainyBg;
        if (code >= 80 && code <= 82) return rainyBg;
        if (code >= 95) return rainyBg; // storm -> rainy bg for now
        // snow
        if (code >= 71 && code <= 77) return snowyBg;

        return isDay ? sunnyBg : cloudyBg; // Default
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
    const bgImage = getBackgroundImage(weather.weather_code, weather.is_day);

    return (
        <div
            className="glass-card weather-card"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="weather-overlay-tint"></div>
            <div className="weather-content">
                <div className="card-header">Currently In</div>
                <div className="card-title">Sweden</div>
                <div className="weather-details">
                    <span className="temp">{temp}°</span>
                    <span className="condition">{label}</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
