import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
                <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-buttons">
                    <a href="mailto:mohdfarhan4002@gmail.com" className="contact-btn">
                        <FaEnvelope className="btn-icon" /> Say Hello
                    </a>
                    <a href="https://www.linkedin.com/in/mohdfarhansde" target="_blank" rel="noreferrer" className="contact-btn btn-secondary">
                        <FaLinkedin className="btn-icon" /> Connect on LinkedIn
                    </a>
                </div>

                <div className="social-links">
                    <a href="https://github.com/farhan4783" target="_blank" rel="noreferrer" className="social-link">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mohdfarhansde" target="_blank" rel="noreferrer" className="social-link">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
