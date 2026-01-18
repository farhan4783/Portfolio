import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCode } from 'react-icons/fa';
import { SiPython, SiJavascript } from 'react-icons/si';
import ComputersCanvas from './canvas/Computers';
import { heroData } from '../constants';
import '../styles/Hero.css';

const Hero = () => {
    const [roles] = useState(heroData.roles);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 150;
        const currentRole = roles[roleIndex];

        const timer = setTimeout(() => {
            if (!isDeleting && displayedRole === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
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

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="hero-buttons"
                >
                    <a href="#works" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
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
            </motion.div>
        </section>
    );
};

export default Hero;
