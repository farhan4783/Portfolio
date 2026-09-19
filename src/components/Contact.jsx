import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaWhatsapp, FaPhoneAlt, FaUser, FaCommentDots, FaCopy, FaCheck } from "react-icons/fa";
import Toast from './Toast';
import '../styles/Contact.css';

import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });
    const [copiedEmail, setCopiedEmail] = useState(false);

    const email = "mohdfarhan4002@gmail.com";
    const phone = "+91 9599372101";
    const phoneRaw = "919599372101";

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const showToast = (message, type = 'success') => {
        setToast({ visible: true, message, type });
    };

    const hideToast = () => {
        setToast({ ...toast, visible: false });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        showToast('Email address copied to clipboard!', 'success');
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            showToast('Please fill in all fields.', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    _subject: `New Portfolio Message from ${form.name}`,
                    _template: "table",
                    _captcha: "false"
                })
            });

            const result = await response.json();

            if (response.ok || result.success === "true" || result.success === true) {
                showToast(`Thank you ${form.name}! Your message has been sent to Farhan's inbox.`, 'success');
                setForm({ name: "", email: "", message: "" });
            } else {
                showToast(result.message || 'Message could not be sent. Please try WhatsApp or email directly.', 'error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            showToast('Network error. You can email me directly or text on WhatsApp!', 'error');
        } finally {
            setLoading(false);
        }
    };

    const getWhatsAppUrl = () => {
        const text = form.message.trim()
            ? `Hi Farhan, I am ${form.name || 'someone'} (${form.email || 'no email provided'}).\n\n${form.message}`
            : `Hi Farhan! I came across your portfolio and would like to connect.`;
        return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(text)}`;
    };

    return (
        <div className="contact-container">
            <motion.div
                variants={fadeIn("right", "spring", 0.1, 0.75)}
                className='contact-form-container'
            >
                <div className="contact-badge-chip">
                    <span className="contact-pulse-dot"></span>
                    <span>Ready to Collaborate</span>
                </div>

                <div className="contact-header-row">
                    <div>
                        <p className="contact-text-secondary">Get in touch</p>
                        <h3 className="contact-head-text">Contact Me.</h3>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/farhan4783" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mohdfarhansde" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Direct Contact Cards */}
                <div className="direct-contact-grid">
                    <div className="contact-info-card" onClick={copyEmail} title="Click to copy email">
                        <div className="contact-info-icon email-icon">
                            <FaEnvelope />
                        </div>
                        <div className="contact-info-text">
                            <span className="contact-info-label">Email</span>
                            <span className="contact-info-val">{email}</span>
                        </div>
                        <button type="button" className="copy-btn" aria-label="Copy email">
                            {copiedEmail ? <FaCheck color="#00f2ff" /> : <FaCopy />}
                        </button>
                    </div>

                    <a
                        href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hi Farhan! I saw your portfolio and would like to connect.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-info-card whatsapp-card"
                        title="Chat on WhatsApp"
                    >
                        <div className="contact-info-icon whatsapp-icon">
                            <FaWhatsapp />
                        </div>
                        <div className="contact-info-text">
                            <span className="contact-info-label">WhatsApp / Phone</span>
                            <span className="contact-info-val">{phone}</span>
                        </div>
                    </a>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='contact-form'
                >
                    <label className='contact-label'>
                        <span className='contact-label-text'>
                            <FaUser style={{ marginRight: '6px', fontSize: '0.8rem', color: 'var(--accent-primary)' }} />
                            Your Name
                        </span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='contact-input'
                            required
                        />
                    </label>

                    <label className='contact-label'>
                        <span className='contact-label-text'>
                            <FaEnvelope style={{ marginRight: '6px', fontSize: '0.8rem', color: 'var(--accent-primary)' }} />
                            Your Email
                        </span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className='contact-input'
                            required
                        />
                    </label>

                    <label className='contact-label'>
                        <span className='contact-label-text'>
                            <FaCommentDots style={{ marginRight: '6px', fontSize: '0.8rem', color: 'var(--accent-primary)' }} />
                            Your Message
                        </span>
                        <textarea
                            rows={5}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What project or role would you like to discuss?'
                            className='contact-input contact-textarea'
                            required
                        />
                    </label>

                    <div className="contact-actions">
                        <button
                            type='submit'
                            className='contact-submit-btn'
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="btn-spinner"></span>
                                    Sending to Farhan...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane style={{ marginRight: '8px' }} />
                                    Send Email
                                </>
                            )}
                        </button>

                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='contact-whatsapp-btn'
                            title="Send this message via WhatsApp"
                        >
                            <FaWhatsapp style={{ marginRight: '8px', fontSize: '1.2rem' }} />
                            Chat via WhatsApp
                        </a>
                    </div>
                </form>
            </motion.div>

            <motion.div
                variants={fadeIn("left", "spring", 0.2, 0.75)}
                className='contact-earth-container'
            >
                <EarthCanvas />
            </motion.div>

            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.visible}
                onClose={hideToast}
            />
        </div>
    );
};

export default SectionWrapper(Contact, "contact", "contact-page-wrapper");
