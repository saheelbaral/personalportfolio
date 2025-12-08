import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        { word: "AWESOME", text: "Totally transformed our brand presence.", author: "Max P.", company: "TechNova" },
        { word: "VISIONARY", text: "Saw the future before we even did.", author: "Sarah L.", company: "FutureSoft" },
        { word: "RELENTLESS", text: "Stopped at nothing to get results.", author: "David C.", company: "BoldMove" },
        { word: "GENIUS", text: "Solved our biggest bottleneck instantly.", author: "Job G.", company: "InnovateX" },
        { word: "FAST", text: "Delivered weeks ahead of schedule.", author: "Casandra M.", company: "SwiftLogistics" },
        { word: "BOLD", text: "Not afraid to break the mold.", author: "Tom H.", company: "CreativeMinds" }
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
