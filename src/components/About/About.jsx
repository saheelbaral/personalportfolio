import React from 'react';
import './About.css';
import profileImg from '../../assets/profile.png';
import { FaChessKnight, FaSearch, FaMapMarked, FaGlobe, FaShareAlt, FaPenFancy, FaUsers, FaChartLine, FaBullseye, FaEnvelope, FaAd, FaHashtag } from 'react-icons/fa';
import { SiGoogleanalytics, SiMeta, SiFigma, SiHubspot, SiSemrush, SiNotion } from 'react-icons/si';

const About = () => {
    return (
        <section className="about-container">
            <div className="about-top">
                <div className="about-image-wrapper">
                    <img src={profileImg} alt="Saheel" className="about-profile-img" />
                </div>
                <div className="about-bio">
                    <h2 className="about-name">Saheel Baral</h2>
                    <p className="about-text">
                        Effective digital marketing is about connecting the right message with the right audience at the perfect moment.
                        It’s about understanding human behavior and leveraging data to build meaningful relationships between brands and consumers.
                    </p>
                    <p className="about-text">
                        With a background in brand strategy and digital execution, I’ve learned how to turn abstract ideas into measurable results.
                        Whether it’s crafting a compelling narrative or optimizing a conversion funnel, I bridge the gap between creative vision and business growth.
                    </p>
                    <p className="about-text">
                        I collaborate seamlessly with design teams and stakeholders to ensure every campaign is not just seen, but felt and acted upon.
                    </p>
                </div>
            </div>

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
                    <div className="skill-card">
                        <FaChartLine className="skill-icon-real" style={{ color: '#f43f5e' }} /> {/* Rose */}
                        <span className="skill-name">Comp. Analysis</span>
                    </div>
                    <div className="skill-card">
                        <FaBullseye className="skill-icon-real" style={{ color: '#ef4444' }} /> {/* Red */}
                        <span className="skill-name">Growth Hacking</span>
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
                        <FaAd className="skill-icon-real" style={{ color: '#14b8a6' }} /> {/* Teal */}
                        <span className="skill-name">Copywriting</span>
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
                    <div className="skill-card">
                        <SiSemrush className="skill-icon-real" style={{ color: '#ff642d' }} /> {/* Semrush Orange */}
                        <span className="skill-name">Semrush</span>
                    </div>
                    <div className="skill-card">
                        <SiNotion className="skill-icon-real" style={{ color: '#000000' }} /> {/* Notion Black/White - handle via CSS if needed, but black works for now unless dark mode issue. Use white in dark mode? Let's use a gray to be safe */}
                        <span className="skill-name">Notion</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
