import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const resumeUrl = `${import.meta.env.BASE_URL}Mohd_Farhan.pdf`;

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="logo">
                    Farhan<span className="dot">.AI</span>
                </a>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#home" onClick={toggleMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" onClick={toggleMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#ai-playground" onClick={toggleMenu}>AI Lab</a>
                    </li>
                    <li className="nav-item">
                        <a href="#works" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" onClick={toggleMenu}>Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" onClick={toggleMenu}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Mohd_Farhan_Resume.pdf"
                            className="nav-resume-btn"
                            onClick={toggleMenu}
                        >
                            <FaDownload style={{ marginRight: '6px', fontSize: '0.8rem' }} />
                            Resume
                        </a>
                    </li>
                    <li className="nav-item social-icons">
                        <a href="https://github.com/farhan4783" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/mohdfarhansde" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
