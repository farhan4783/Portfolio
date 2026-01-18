import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Placeholder for EmailJS integration
        // Replace with your Service ID, Template ID, and Public Key
        setTimeout(() => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        }, 1000);
    };

    return (
        <div className="contact-container">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='contact-form-container'
            >
                <p className="contact-text-secondary">Get in touch</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="contact-head-text">Contact.</h3>
                    <div className="social-links">
                        <a href="https://github.com/farhan4783" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mohdfarhansde" target="_blank" rel="noopener noreferrer" className="social-icon">
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
                            placeholder="What's your good name?"
                            className='contact-input'
                        />
                    </label>
                    <label className='contact-label'>
                        <span className='contact-label-text'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className='contact-input'
                        />
                    </label>
                    <label className='contact-label'>
                        <span className='contact-label-text'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='contact-input'
                        />
                    </label>

                    <button
                        type='submit'
                        className='contact-submit-btn'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='contact-earth-container'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact", "contact-page-wrapper");
