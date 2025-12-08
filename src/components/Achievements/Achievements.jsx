import React from 'react';
import './Achievements.css';
import { FaAsterisk, FaShareAlt, FaAd, FaChartLine } from 'react-icons/fa';
import { SiHubspot, SiGoogleanalytics, SiMeta } from 'react-icons/si';

const Achievements = () => {
    const achievements = [
        {
            title: "SCALED REVENUE BY 200%",
            description: "Implemented a data-driven full-funnel strategy that doubled monthly recurring revenue within 12 months, optimizing every touchpoint from acquisition to retention.",
            scope: [
                { label: "SoME", icon: <FaShareAlt style={{ color: '#ec4899' }} /> },
                { label: "HubSpot", icon: <SiHubspot style={{ color: '#ff7a59' }} /> },
                { label: "Paid Ads", icon: <FaAd style={{ color: '#14b8a6' }} /> }
            ],
            clients: "Sports SaaS"
        },
        {
            title: "GENERATED 50K+ LEADS",
            description: "Designed and executed high-performance lead generation campaigns across multiple channels, significantly lowering CPA while improving lead quality scores.",
            scope: [
                { label: "Meta Ads", icon: <SiMeta style={{ color: '#0668E1' }} /> },
                { label: "Google Ads", icon: <SiGoogleanalytics style={{ color: '#E37400' }} /> },
                { label: "Strategy", icon: <FaChartLine style={{ color: '#f43f5e' }} /> }
            ],
            clients: "University / Education"
        },
        {
            title: "DOMINATED BRAND SHARE",
            description: "Revamped the brand positioning and organic social strategy, resulting in a 300% increase in engagement and establishing market leadership in key verticals.",
            scope: [
                { label: "Branding", icon: <FaAsterisk style={{ color: '#eab308' }} /> },
                { label: "Content", icon: <FaShareAlt style={{ color: '#8b5cf6' }} /> },
                { label: "Organic", icon: <SiHubspot style={{ color: '#10b981' }} /> }
            ],
            clients: "Brand Consultancy"
        }
    ];

    return (
        <section className="achievements-container">
            <span className="achievements-heading">// Achievements</span>
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
                                <div className="detail-row scope-row">
                                    <span className="detail-label">Scope:</span>
                                    <div className="scope-chips">
                                        {item.scope.map((scopeItem, i) => (
                                            <div key={i} className="scope-chip">
                                                {scopeItem.icon}
                                                <span>{scopeItem.label}</span>
                                            </div>
                                        ))}
                                    </div>
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
