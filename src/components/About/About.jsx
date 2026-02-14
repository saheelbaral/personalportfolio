import React from 'react';
import './About.css';
import profileImg from '../../assets/profile.png';
import { FaChessKnight, FaSearch, FaMapMarked, FaGlobe, FaShareAlt, FaPenFancy, FaUsers, FaChartLine, FaBullseye, FaEnvelope, FaAd, FaHashtag } from 'react-icons/fa';
import { SiGoogleanalytics, SiMeta, SiFigma, SiHubspot, SiSemrush, SiNotion } from 'react-icons/si';
import Achievements from '../Achievements/Achievements';

const About = () => {
    return (
        <section className="about-container">
            <div className="about-top">
                <div className="about-headline-wrapper">
                    <span className="about-eyebrow">// Intro</span>
                    <h2 className="about-headline-large">
                        I specialize in <span className="headline-accent">3 key areas.</span> All of them drive growth.
                    </h2>
                    <div className="specialization-pills">
                        <span className="spec-pill spec-pill--blue">
                            <FaChartLine className="spec-pill-icon" />
                            Digital Marketing
                        </span>
                        <span className="spec-pill spec-pill--purple">
                            <FaBullseye className="spec-pill-icon" />
                            Sales Funnel Design
                        </span>
                        <span className="spec-pill spec-pill--green">
                            <FaUsers className="spec-pill-icon" />
                            CRM Automation
                        </span>
                    </div>
                </div>

                <div className="about-subtext-wrapper">
                    <p className="about-subtext">
                    </p>
                </div>
            </div>

            <Achievements />

            <div className="about-skills">
                {/* Column 1 */}
                <div className="skill-column">
                    <h3 className="skill-heading">Strategy</h3>
                    <div className="skill-card">
                        <FaChessKnight className="skill-icon-real" style={{ color: '#eab308' }} /> {/* Gold/Yellow */}
                        <span className="skill-name">Brand Strategy</span>
                    </div>
                    <div className="skill-card">
                        <FaSearch className="skill-icon-real" style={{ color: '#3b82f6' }} /> {/* Blue */}
                        <span className="skill-name">Market Research</span>
                    </div>
                    <div className="skill-card">
                        <FaMapMarked className="skill-icon-real" style={{ color: '#10b981' }} /> {/* Emerald */}
                        <span className="skill-name">Campaign Planning</span>
                    </div>
                    <div className="skill-card">
                        <FaUsers className="skill-icon-real" style={{ color: '#8b5cf6' }} /> {/* Violet */}
                        <span className="skill-name">User Personas</span>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="skill-column">
                    <h3 className="skill-heading">Marketing</h3>
                    <div className="skill-card">
                        <FaGlobe className="skill-icon-real" style={{ color: '#06b6d4' }} /> {/* Cyan */}
                        <span className="skill-name">SEO / SEM</span>
                    </div>
                    <div className="skill-card">
                        <FaShareAlt className="skill-icon-real" style={{ color: '#ec4899' }} /> {/* Pink */}
                        <span className="skill-name">Social Media</span>
                    </div>
                    <div className="skill-card">
                        <FaPenFancy className="skill-icon-real" style={{ color: '#f97316' }} /> {/* Orange */}
                        <span className="skill-name">Content Creation</span>
                    </div>
                    <div className="skill-card">
                        <FaEnvelope className="skill-icon-real" style={{ color: '#6366f1' }} /> {/* Indigo */}
                        <span className="skill-name">Email Marketing</span>
                    </div>
                    <div className="skill-card">
                        <FaHashtag className="skill-icon-real" style={{ color: '#d946ef' }} /> {/* Fuchsia */}
                        <span className="skill-name">Influencer Mktg</span>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="skill-column">
                    <h3 className="skill-heading">Tools</h3>
                    <div className="skill-card">
                        <SiGoogleanalytics className="skill-icon-real" style={{ color: '#E37400' }} /> {/* GA Orange */}
                        <span className="skill-name">Google Analytics</span>
                    </div>
                    <div className="skill-card">
                        <SiMeta className="skill-icon-real" style={{ color: '#0668E1' }} /> {/* Meta Blue */}
                        <span className="skill-name">Meta Ads</span>
                    </div>
                    <div className="skill-card">
                        <SiFigma className="skill-icon-real" style={{ color: '#A259FF' }} /> {/* Figma Purple */}
                        <span className="skill-name">Figma / Canva</span>
                    </div>
                    <div className="skill-card">
                        <SiHubspot className="skill-icon-real" style={{ color: '#ff7a59' }} /> {/* HubSpot Orange */}
                        <span className="skill-name">HubSpot</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
