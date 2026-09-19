import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SiReact, SiThreedotjs, SiFramer } from 'react-icons/si';
import '../styles/Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Farhan<span className="footer-dot">.AI</span></h3>
                        <p className="footer-tagline">Building intelligent systems that learn, predict, and automate.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-link-group">
                            <h4 className="footer-link-title">Navigate</h4>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#ai-playground">AI Lab</a>
                            <a href="#works">Projects</a>
                        </div>
                        <div className="footer-link-group">
                            <h4 className="footer-link-title">More</h4>
                            <a href="#experience">Experience</a>
                            <a href="#skills">Skills</a>
                            <a href="#achievements">Achievements</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>

                    <div className="footer-social">
                        <h4 className="footer-link-title">Connect</h4>
                        <div className="footer-social-icons">
                            <a href="https://github.com/farhan4783" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/mohdfarhansde" target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>© {new Date().getFullYear()} Mohd Farhan. Crafted with <FaHeart className="heart-icon" /> & AI</p>
                    </div>
                    <div className="footer-tech">
                        <span className="tech-badge"><SiReact /> React</span>
                        <span className="tech-badge"><SiThreedotjs /> Three.js</span>
                        <span className="tech-badge"><SiFramer /> Framer</span>
                    </div>
                    <button className="scroll-to-top" onClick={scrollToTop} title="Back to top">
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
