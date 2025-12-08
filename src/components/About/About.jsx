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
                        I’m a versatile <span className="highlight-red">marketer</span> who partners with <span className="highlight-red">brands</span> to turn ideas into <span className="highlight-red">real growth.</span> I focus on clear strategies, sharp decisions, and fast execution.
                    </h2>
                </div>

                <div className="about-subtext-wrapper">
                    <p className="about-subtext">
                        Bringing your vision to life quickly and efficiently—whether it’s branding, campaigns, or analytics—I’ve got it covered, delivering smooth and effective solutions from start to finish.
                    </p>
                    <button className="about-cta-button">See my Work</button>
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
