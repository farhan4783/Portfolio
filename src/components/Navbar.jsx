import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    Portfolio<span className="dot">.</span>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#home" onClick={toggleMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#works" onClick={toggleMenu}>Work</a>
                    </li>
                    <li className="nav-item">
                        <a href="#current-works" onClick={toggleMenu}>Current</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" onClick={toggleMenu}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </li>
                    <li className="nav-item social-icons">
                        <a href="https://github.com/farhan4783" target="_blank" rel="noreferrer"><FaGithub /></a>
                        {/* Add more social links here */}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
