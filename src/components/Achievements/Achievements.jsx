import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Achievements.css';
import { FaAsterisk, FaShareAlt, FaAd, FaChartLine, FaTimes } from 'react-icons/fa';
import { SiHubspot, SiGoogleanalytics, SiMeta } from 'react-icons/si';

const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    const achievements = [
        {
            title: "SCALED REVENUE BY 200%",
            description: "Implemented full-stack growth strategies to increase revenue, brand presence, and solidify a well functioning sales funnel.",
            scope: [
                { label: "SoME", icon: <FaShareAlt style={{ color: '#ec4899' }} /> },
                { label: "HubSpot", icon: <SiHubspot style={{ color: '#ff7a59' }} /> },
                { label: "Paid Ads", icon: <FaAd style={{ color: '#14b8a6' }} /> }
            ],
            clients: "Sports SaaS",
            fullTitle: "Scaled Revenue by 200%",
            subline: "iCaptain - Sports SaaS",
            situation: "iCaptain had just entered into the sports marketplace ecosystem. Early traction was necessary, along with customer acquisition through sign-ups.",
            task: "Rebuild the acquisition strategy and create a cleaner, conversion-aligned funnel.",
            result: "Achieved +200% revenue growth and stabilized conversion performance through a full-funnel strategy.",
            keyActions: [
                "Rebuilt targeting & account structure",
                "Designed new landing flows",
                "Implemented multi-stage retargeting"
            ]
        },
        {
            title: "GENERATED 50K+ LEADS",
            description: "Designed and executed high-performance lead generation campaigns across multiple channels, significantly lowering CPA while improving lead quality scores.",
            scope: [
                { label: "Meta Ads", icon: <SiMeta style={{ color: '#0668E1' }} /> },
                { label: "Google Ads", icon: <SiGoogleanalytics style={{ color: '#E37400' }} /> },
                { label: "Strategy", icon: <FaChartLine style={{ color: '#f43f5e' }} /> }
            ],
            clients: "University / Education",
            fullTitle: "Generated 50K+ Leads",
            subline: "Toastmasters International, Chanakya College, Global Journeys",
            situation: "Several organizations needed predictable, scalable lead flow to support aggressive sales targets.",
            task: "Develop and optimize high-performance lead-gen systems across paid channels.",
            result: "Generated 50K+ qualified leads while reducing cost per lead month over month.",
            keyActions: [
                "Built multi-channel acquisition system",
                "Launched rapid experiment cycles",
                "Optimized toward lead quality, not volume"
            ]
        },
        {
            title: "Brand Identity Design + CX Training",
            description: "Revamped the brand positioning and organic social strategy, resulting in a 300% increase in engagement and establishing market leadership in key verticals.",
            scope: [
                { label: "Branding", icon: <FaAsterisk style={{ color: '#eab308' }} /> },
                { label: "Content", icon: <FaShareAlt style={{ color: '#8b5cf6' }} /> },
                { label: "Organic", icon: <SiHubspot style={{ color: '#10b981' }} /> }
            ],
            clients: "Brand Consultancy",
            fullTitle: "Brand Identity Design + CX Training",
            subline: "Newmew, Belmont Adventure",
            situation: "Despite strong brand presence, the client struggled to develop brand identity systems.",
            task: "Revamp the brand position, messaging system, and cross-platform visibility strategy.",
            result: "Achieved 30%+ brand engagement on new content systems and a sustained rise in high-intent traffic.",
            keyActions: [
                "Rebuilt brand identity documents",
                "Reworked content style and distribution",
                "Established brand visibility systems"
            ]
        }
    ];

    return (
        <section className="achievements-container">
            <span className="achievements-heading">// Achievements</span>
            <div className="achievements-list">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="achievement-item"
                        onClick={() => setSelectedAchievement(item)}
                    >
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

            {/* Achievement Overlay / Vault */}
            <AchievementOverlay
                achievement={selectedAchievement}
                onClose={() => setSelectedAchievement(null)}
            />
        </section>
    );
};

/* ── Achievement Overlay (The Glass Vault) ── */
const AchievementOverlay = ({ achievement, onClose }) => {
    // FIX: useEffect must be called unconditionally (before the null check)
    useEffect(() => {
        // When achievement is cleared, always reset body overflow
        if (!achievement) {
            document.body.style.overflow = 'auto';
        }
    }, [achievement]);

    // Cleanup on unmount (extra safety)
    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (!achievement) return null;

    const handleMouseEnter = () => {
        document.body.style.overflow = 'hidden';
    };

    const handleMouseLeave = () => {
        document.body.style.overflow = 'auto';
    };

    return createPortal(
        <div className={`vault-overlay ${achievement ? 'active' : ''}`} onClick={onClose}>
            <div
                className="vault-card"
                onClick={e => e.stopPropagation()}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button className="vault-close" onClick={onClose}>
                    <FaTimes />
                </button>

                <div className="vault-grid">
                    {/* Left Column: Result & Summary */}
                    <div className="vault-main">
                        <div className="vault-header">
                            <span className="vault-eyebrow">Case Briefing</span>
                            <h2 className="vault-title">{achievement.fullTitle}</h2>
                            <p className="vault-subline">{achievement.subline}</p>
                        </div>

                        <div className="vault-result-box">
                            <h4 className="str-label">The Core Result</h4>
                            <p className="vault-result-text">{achievement.result}</p>
                        </div>
                    </div>

                    {/* Right Column: STR Details */}
                    <div className="vault-details">
                        <div className="str-group">
                            <div className="str-section">
                                <h4 className="str-label">Situation</h4>
                                <p className="str-text">{achievement.situation}</p>
                            </div>

                            <div className="str-section">
                                <h4 className="str-label">Task</h4>
                                <p className="str-text">{achievement.task}</p>
                            </div>
                        </div>

                        {achievement.keyActions && (
                            <div className="vault-actions">
                                <h4 className="str-label">Execution Strategy</h4>
                                <ul className="vault-actions-list">
                                    {achievement.keyActions.map((action, i) => (
                                        <li key={i}>{action}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Achievements;
