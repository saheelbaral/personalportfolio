import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const TestimonialCard = ({ name, role, image, review, rating }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`testimonial-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                    <img src={image} alt={name} className="client-image" />
                    <div className="front-content">
                        <h3 className="client-name">{name}</h3>
                        <p className="client-role">{role}</p>
                    </div>
                </div>

                {/* Back Side */}
                <div className="card-back">
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.floor(rating) ? "star-filled" : "star-empty"} />
                        ))}
                        <span className="rating-num">({rating} Rating)</span>
                    </div>

                    <p className="review-text">"{review}"</p>

                    <div className="mini-profile">
                        <img src={image} alt={name} className="mini-avatar" />
                        <div>
                            <span className="mini-name">{name}</span>
                            <span className="mini-role">{role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
