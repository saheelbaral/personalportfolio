import React from 'react';
import './Achievements.css';
import { FaAsterisk } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            title: "SCALED REVENUE BY 200%",
            description: "Implemented a data-driven full-funnel strategy that doubled monthly recurring revenue within 12 months, optimizing every touchpoint from acquisition to retention.",
            scope: "SoME, HubSpot, Paid Ads",
            clients: "iCaptain, Newmew"
        },
        {
            title: "GENERATED 50K+ LEADS",
            description: "Designed and executed high-performance lead generation campaigns across multiple channels, significantly lowering CPA while improving lead quality scores.",
            scope: "SoME, HubSpot, Paid Ads",
            clients: "iCaptain, Newmew"
        },
        {
            title: "DOMINATED BRAND SHARE",
            description: "Revamped the brand positioning and organic social strategy, resulting in a 300% increase in engagement and establishing market leadership in key verticals.",
            scope: "SoME, HubSpot, Paid Ads",
            clients: "iCaptain, Newmew"
        }
    ];

    return (
        <section className="achievements-container">
            <div className="achievements-list">
                {achievements.map((item, index) => (
                    <div key={index} className="achievement-item">
                        <div className="achievement-icon-wrapper">
                            <FaAsterisk className="achievement-icon" />
                        </div>
                        <div className="achievement-content">
                            <h3 className="achievement-title">{item.title}</h3>
                            <p className="achievement-desc">{item.description}</p>

                            <div className="achievement-details">
                                <div className="detail-row">
                                    <span className="detail-label">Scope:</span>
                                    <span className="detail-value">{item.scope}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Clients:</span>
                                    <span className="detail-value">{item.clients}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
