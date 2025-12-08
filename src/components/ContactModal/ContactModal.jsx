import React, { useState } from 'react';
import './ContactModal.css';
import { FiX, FiSend } from 'react-icons/fi';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '9a6f13e5-1265-4b6d-8a1f-9ddee52c741e', // Replace with your actual key
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => {
                    setStatus('');
                    onClose();
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <FiX />
                </button>

                <h2 className="modal-title">Get In Touch</h2>
                <p className="modal-subtitle">Send me a message and I'll get back to you soon.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="What's this about?"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="Your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? (
                            'Sending...'
                        ) : status === 'success' ? (
                            'Sent!'
                        ) : (
                            <>
                                <FiSend /> Send Message
                            </>
                        )}
                    </button>

                    {status === 'error' && (
                        <p className="error-message">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
