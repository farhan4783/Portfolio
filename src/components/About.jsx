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
                Currently pursuing my <span className="gradient-text">B.Tech in Computer Science & Engineering with a specialization in Data Science</span> at IILM University.
                My developer journey is fueled by curiosity, first-principles thinking, and the drive to build systems from the ground up — not just stitching libraries together.
            </motion.p>

            <motion.p
                variants={fadeIn("", "", 0.2, 1)}
                className="about-description"
            >
                I specialize in <span className="gradient-text">distributed systems, machine learning engineering, and full-stack architecture</span>.
                Whether it's synchronizing millisecond-level state in multiplayer WebSocket platforms, mitigating cold starts with hybrid recommendation algorithms,
                or streaming 20+ FPS computer vision models with sub-45ms latency, I focus on building reliable software that scales under real workloads.
            </motion.p>

            <motion.div
                variants={fadeIn("", "", 0.3, 1)}
                className="about-cta-row"
            >
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Mohd_Farhan_Resume.pdf"
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
