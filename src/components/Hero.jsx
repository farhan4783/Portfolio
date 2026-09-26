import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaBrain,
    FaEnvelope,
    FaWhatsapp,
    FaCopy,
    FaCheck,
    FaMapMarkerAlt,
    FaCogs
} from 'react-icons/fa';
import { SiTensorflow, SiPython } from 'react-icons/si';
import ComputersCanvas from './canvas/Computers';
import { heroData } from '../constants';
import '../styles/Hero.css';

const Hero = () => {
    const [roles] = useState(heroData.roles);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 45 : 120;
        const currentRole = roles[roleIndex];

        const timer = setTimeout(() => {
            if (!isDeleting && displayedRole === currentRole) {
                setTimeout(() => setIsDeleting(true), 1600);
            } else if (isDeleting && displayedRole === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                setDisplayedRole(prev =>
                    isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [displayedRole, isDeleting, roleIndex, roles]);

    const resumeUrl = `${import.meta.env.BASE_URL}Mohd_Farhan.pdf`;

    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("mohdfarhan4002@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-status-badge"
                >
                    <span className="status-dot"></span>
                    <span>Open to Software & Data Science Roles</span>
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="hero-greeting"
                >
                    {heroData.greeting}
                </motion.h3>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-name"
                >
                    <span className="gradient-text">{displayedRole}</span>
                    <span className="cursor">|</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hero-description"
                >
                    {heroData.description}
                </motion.p>

                {/* Recruiter Fast Access Card */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="hero-recruiter-card"
                >
                    <div className="recruiter-card-header">
                        <span className="recruiter-badge">Recruiter Fast-Connect</span>
                        <span className="recruiter-location">
                            <FaMapMarkerAlt style={{ color: 'var(--accent-primary)', marginRight: '4px' }} />
                            Greater Noida / Delhi NCR (Open to Relocation & Remote)
                        </span>
                    </div>

                    <div className="recruiter-quick-actions">
                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className={`quick-contact-btn email-btn ${copiedEmail ? 'copied' : ''}`}
                            title="Click to copy email address"
                        >
                            {copiedEmail ? <FaCheck style={{ color: '#00f2ff' }} /> : <FaEnvelope />}
                            <span>{copiedEmail ? "Email Copied!" : "mohdfarhan4002@gmail.com"}</span>
                            {!copiedEmail && <FaCopy className="copy-icon-subtle" />}
                        </button>

                        <a
                            href="https://wa.me/919599372101?text=Hi%20Farhan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="quick-contact-btn whatsapp-btn"
                            title="Direct WhatsApp chat"
                        >
                            <FaWhatsapp style={{ color: '#25d366' }} />
                            <span>+91 9599372101</span>
                        </a>
                    </div>
                </motion.div>

                {/* Main Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="hero-buttons"
                >
                    <a href="#works" className="btn btn-primary">
                        <FaCogs style={{ marginRight: '8px' }} />
                        Explore Case Studies
                    </a>
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Mohd_Farhan_Resume.pdf"
                        className="btn btn-resume"
                        title="Download Mohd Farhan's Resume PDF"
                    >
                        <FaDownload style={{ marginRight: '8px' }} />
                        Download Resume
                    </a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="hero-social-links"
                >
                    <a href={heroData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="GitHub Profile">
                        <FaGithub />
                    </a>
                    <a href={heroData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-icon" title="LinkedIn Profile">
                        <FaLinkedin />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-image"
            >
                <div className="tech-shape-container">
                    <ComputersCanvas />
                </div>

                {/* Floating AI-themed icons */}
                <div className="floating-icons-container">
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="floating-icon icon-tensorflow"
                    >
                        <SiTensorflow />
                    </motion.div>
                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        className="floating-icon icon-python"
                    >
                        <SiPython />
                    </motion.div>
                    <motion.div
                        animate={{ y: [-8, 12, -8] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="floating-icon icon-brain"
                    >
                        <FaBrain />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
