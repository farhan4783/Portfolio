import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaDownload,
    FaEnvelope,
    FaWhatsapp,
    FaLinkedin,
    FaCheck,
    FaChevronDown,
    FaChevronUp,
    FaCommentDots
} from 'react-icons/fa';
import '../styles/RecruiterDock.css';

const RecruiterDock = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const email = "mohdfarhan4002@gmail.com";
    const phoneRaw = "919599372101";
    const resumeUrl = `${import.meta.env.BASE_URL}Mohd_Farhan.pdf`;

    const handleCopyEmail = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    return (
        <aside className="recruiter-dock-wrapper" aria-label="Connect Quick Menu">
            <div className="recruiter-dock-container">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.96 }}
                            transition={{ duration: 0.18 }}
                            className="dock-expanded-menu"
                        >
                            <div className="dock-menu-header">
                                <span className="dock-status-indicator"></span>
                                <div>
                                    <div className="dock-title">Mohd Farhan</div>
                                    <div className="dock-sub">B.Tech CSE (Data Science)</div>
                                </div>
                            </div>

                            <div className="dock-actions-list">
                                <a
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download="Mohd_Farhan_Resume.pdf"
                                    className="dock-action-item dock-resume-action"
                                    title="Download Farhan's Resume PDF"
                                >
                                    <FaDownload className="dock-item-icon" />
                                    <div className="dock-item-text">
                                        <span className="dock-item-primary">Resume</span>
                                        <span className="dock-item-secondary">PDF Download</span>
                                    </div>
                                </a>

                                <a
                                    href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent("Hi Farhan, I saw your portfolio and would like to connect.")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dock-action-item dock-whatsapp-action"
                                    title="Chat directly on WhatsApp"
                                >
                                    <FaWhatsapp className="dock-item-icon whatsapp-color" />
                                    <div className="dock-item-text">
                                        <span className="dock-item-primary">WhatsApp</span>
                                        <span className="dock-item-secondary">+91 9599372101</span>
                                    </div>
                                </a>

                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className={`dock-action-item dock-email-action ${copiedEmail ? 'copied' : ''}`}
                                    title="Click to copy email"
                                >
                                    {copiedEmail ? (
                                        <FaCheck className="dock-item-icon cyan-color" />
                                    ) : (
                                        <FaEnvelope className="dock-item-icon cyan-color" />
                                    )}
                                    <div className="dock-item-text">
                                        <span className="dock-item-primary">
                                            {copiedEmail ? "Copied!" : "Email"}
                                        </span>
                                        <span className="dock-item-secondary">{email}</span>
                                    </div>
                                </button>

                                <a
                                    href="https://www.linkedin.com/in/mohdfarhansde"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dock-action-item dock-linkedin-action"
                                    title="View LinkedIn Profile"
                                >
                                    <FaLinkedin className="dock-item-icon linkedin-color" />
                                    <div className="dock-item-text">
                                        <span className="dock-item-primary">LinkedIn</span>
                                        <span className="dock-item-secondary">mohdfarhansde</span>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Floating Trigger Button Named 'Connect' */}
                <button
                    type="button"
                    className={`dock-trigger-btn ${isExpanded ? 'active' : ''}`}
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label="Toggle Connect Menu"
                >
                    <div className="dock-trigger-content">
                        <FaCommentDots className="dock-trigger-icon" />
                        <span className="dock-trigger-label">Connect</span>
                    </div>
                    {isExpanded ? <FaChevronDown className="dock-chevron" /> : <FaChevronUp className="dock-chevron" />}
                </button>
            </div>
        </aside>
    );
};

export default RecruiterDock;
