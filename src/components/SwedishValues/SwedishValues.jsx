import React from 'react';
import './SwedishValues.css';
import { FiActivity, FiCoffee, FiFeather, FiUsers, FiCircle, FiHeart } from 'react-icons/fi';

const SwedishValues = () => {
    const iconMap = {
        "Balance Over Extremes": FiActivity,
        "Pause to Progress": FiCoffee,
        "Nature as Teacher": FiFeather,
        "Everyone's Voice Matters": FiUsers,
        "Simplicity is Sophistication": FiCircle,
        "Comfort Fuels Creativity": FiHeart
    };

    const principles = [
        {
            number: "01",
            title: "Balance Over Extremes",
            thought: "I believe in finding the sweet spot - not too much, not too little. Whether it's work, design, or life itself, the middle path often leads to the most sustainable outcomes.",
            visual: "balance"
        },
        {
            number: "02",
            title: "Pause to Progress",
            thought: "The best ideas don't come from constant hustle. They emerge during quiet moments - a walk, a coffee break, a conversation. I build time for reflection into my process.",
            visual: "pause"
        },
        {
            number: "03",
            title: "Nature as Teacher",
            thought: "Fresh air clears the mind. Open spaces inspire open thinking. I find my best solutions when I step away from the screen and into the world.",
            visual: "nature"
        },
        {
            number: "04",
            title: "Everyone's Voice Matters",
            thought: "Great work happens when everyone feels heard. I create environments where hierarchy fades and ideas flow freely, regardless of who they come from.",
            visual: "equality"
        },
        {
            number: "05",
            title: "Simplicity is Sophistication",
            thought: "The most elegant solutions are often the simplest. I strip away the unnecessary to reveal what truly matters - in design, in communication, in life.",
            visual: "simplicity"
        },
        {
            number: "06",
            title: "Comfort Fuels Creativity",
            thought: "A warm cup, a cozy space, a moment of calm - these aren't luxuries, they're necessities. When we feel comfortable, we create our best work.",
            visual: "comfort"
        }
    ];

    return (
        <section className="philosophy-section">
            {/* Minimal Header */}
            <div className="philosophy-header">
                <span className="philosophy-label">How I Work & Live</span>
                <h2 className="philosophy-title">Saheel's Guiding Principles</h2>
            </div>

            {/* Principles Grid Layout */}
            <div className="principles-grid">
                {principles.map((principle, index) => {
                    const IconComponent = iconMap[principle.title];
                    return (
                        <div key={index} className="principle-card">
                            <div className="principle-icon">
                                <IconComponent />
                            </div>
                            <div className="principle-content">
                                <h3 className="principle-title">{principle.title}</h3>
                                <p className="principle-thought">{principle.thought}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Subtle Footer Quote */}
            <div className="philosophy-footer">
                <p className="footer-insight">
                    These are the lens through which I approach every project, every challenge, every day.
                </p>
            </div>
        </section>
    );
};

export default SwedishValues;

