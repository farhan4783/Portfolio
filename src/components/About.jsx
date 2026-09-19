import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaServer, FaDownload } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/About.css';

const About = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}Mohd_Farhan.pdf`;

    const highlights = [
        {
            icon: <FaCode />,
            title: "Problem Solver",
            description: "Building systems from first principles, mastering DSA, and engineering robust software that scales."
        },
        {
            icon: <FaRobot />,
            title: "AI & Automation",
            description: "Creating intelligent solutions, deep learning models, and autonomous LLM agents that eliminate manual work."
        },
        {
            icon: <FaServer />,
            title: "Backend Developer",
            description: "Architecting high-performance APIs and distributed systems with Python, Django, FastAPI, and modern tech."
        }
    ];

    return (
        <>
            <motion.div variants={textVariant()} className="about-header">
                <p className="section-subtext">Introduction</p>
                <h2 className="section-heading">About Me.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="about-description"
            >
                My developer journey is fueled by <span className="gradient-text">curiosity</span> and
                the love of building things from zero. I started coding by experimenting, breaking things,
                and learning how systems actually work—not just how to use them.
            </motion.p>

            <motion.p
                variants={fadeIn("", "", 0.2, 1)}
                className="about-description"
            >
                I'm deeply interested in <span className="gradient-text">automation, AI, and backend development</span>,
                where logic meets real-world impact. I enjoy designing systems that save time, reduce manual work,
                and scale efficiently. For me, coding isn't just about writing lines of code—it's about creating
                solutions that feel smart and intentional.
            </motion.p>

            <motion.div
                variants={fadeIn("", "", 0.3, 1)}
                className="about-cta-row"
            >
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-resume-btn"
                >
                    <FaDownload style={{ marginRight: '8px' }} />
                    Download Resume (PDF)
                </a>
            </motion.div>

            <div className="highlights-grid">
                {highlights.map((highlight, index) => (
                    <motion.div
                        key={highlight.title}
                        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                        className="highlight-card"
                    >
                        <div className="highlight-icon">
                            {highlight.icon}
                        </div>
                        <h3 className="highlight-title">{highlight.title}</h3>
                        <p className="highlight-description">{highlight.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
