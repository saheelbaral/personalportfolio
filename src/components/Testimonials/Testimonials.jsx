import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
    const clients = [
        {
            name: "Max Patrick",
            role: "Entrepreneur",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
            review: "In the fast-paced world of tech, it's crucial to have a creative partner who can keep up with our innovative ideas. Saheel not only kept up but exceeded our expectations.",
            rating: 5.0
        },
        {
            name: "Job Gadhzi",
            role: "CEO Glow Co",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
            review: "They transformed our marketing campaigns with their fresh perspective and bold designs. The ROI we've seen since the rebrand has been phenomenal.",
            rating: 4.8
        },
        {
            name: "Casandra Mo",
            role: "Entrepreneur",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
            review: "Working with Saheel was a game-changer. His ability to understand our target audience and craft messaging that resonates is unmatched.",
            rating: 5.0
        },
        {
            name: "David Chen",
            role: "CTO TechFlow",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
            review: "The strategic insights provided were invaluable. We saw immediate improvements in our user acquisition costs and overall retention rates.",
            rating: 4.9
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="section-divider">
                <span className="divider-line"></span>
                <span className="divider-text">Testimonials</span>
            </div>

            <h2 className="testimonials-heading">Our Happy Clients Say</h2>

            <div className="testimonials-grid">
                {clients.map((client, index) => (
                    <TestimonialCard key={index} {...client} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
