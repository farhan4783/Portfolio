import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Toast from './Toast';
import '../styles/Contact.css';

import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            showToast('Please fill in all fields.', 'error');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            showToast('Please enter a valid email address.', 'error');
            return;
        }

        setLoading(true);

        // EmailJS integration
        // To activate: Replace these with your actual EmailJS credentials
        // 1. Sign up at https://www.emailjs.com/
        // 2. Create a service, template, and get your public key
        // 3. Replace the values below
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        if (SERVICE_ID === 'YOUR_SERVICE_ID') {
            // Demo mode — simulate sending
            setTimeout(() => {
                setLoading(false);
                showToast('Thank you! Your message has been sent. I\'ll get back to you soon.', 'success');
                setForm({ name: "", email: "", message: "" });
            }, 1500);
            return;
        }

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Mohd Farhan",
                from_email: form.email,
                to_email: "your-email@example.com",
                message: form.message,
            },
            PUBLIC_KEY
        ).then(
            () => {
                setLoading(false);
                showToast('Thank you! Your message has been sent. I\'ll get back to you soon.', 'success');
                setForm({ name: "", email: "", message: "" });
            },
            (error) => {
                setLoading(false);
                console.error(error);
                showToast('Something went wrong. Please try again or email me directly.', 'error');
            }
        );
    };

    return (
        <div className="contact-container">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='contact-form-container'
            >
                <p className="contact-text-secondary">Get in touch</p>
                <div className="contact-header-row">
                    <h3 className="contact-head-text">Contact.</h3>
                    <div className="social-links">
                        <a href="https://github.com/farhan4783" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mohdfarhansde" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='contact-form'
                >
                    <label className='contact-label'>
                        <span className='contact-label-text'>Your Name</span>
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
                        <span className='contact-label-text'>Your Email</span>
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
                        <span className='contact-label-text'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What would you like to discuss?'
                            className='contact-input'
                            required
                        />
                    </label>

                    <button
                        type='submit'
                        className='contact-submit-btn'
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="btn-spinner"></span>
                                Sending...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane style={{ marginRight: '8px' }} />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
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
