import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        { word: "AWESOME", text: "Totally transformed our brand presence.", author: "Ashik L.", company: "SaaS Founder/CEO" },
        { word: "VISIONARY", text: "Saw the future before we even did.", author: "Jackson W.", company: "Customer Success Manager" },
        { word: "RELENTLESS", text: "Stopped at nothing to get results.", author: "Greg H.", company: "Customer Service Manager" },
        { word: "GENIUS", text: "Solved our biggest bottleneck instantly.", author: "Martin M.", company: "Insurance Analyst" },
        { word: "FAST", text: "Delivered weeks ahead of schedule.", author: "Elliot A.", company: "Entrepreneur" },
        { word: "BOLD", text: "Always showed up with bold ideas.", author: "Prabin S.", company: "Education Admin Director" }
    ];

    return (
        <section className="testimonials-section">
            <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-text">The Verdict</span>
            </div>

            <div className="trailer-grid">
                {reviews.map((review, index) => (
                    <div key={index} className={`trailer-item item-${index}`}>
                        <h3 className="impact-word">{review.word}</h3>
                        <p className="trailer-text">"{review.text}"</p>
                        <div className="trailer-author-wrapper">
                            <span className="trailer-author">- {review.author}</span>
                            <span className="trailer-company">{review.company}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
