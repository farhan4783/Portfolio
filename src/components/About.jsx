import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaServer, FaLightbulb } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/About.css';

const About = () => {
    const highlights = [
        {
            icon: <FaCode />,
            title: "Problem Solver",
            description: "Building things from zero, experimenting and learning how systems actually work"
        },
        {
            icon: <FaRobot />,
            title: "AI & Automation",
            description: "Creating intelligent solutions that save time and reduce manual work"
        },
        {
            icon: <FaServer />,
            title: "Backend Developer",
            description: "Designing scalable systems where logic meets real-world impact"
        },
        {
            icon: <FaLightbulb />,
            title: "Continuous Learner",
            description: "Constantly exploring new tools and simplifying complex problems"
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

            <motion.p
                variants={fadeIn("", "", 0.3, 1)}
                className="about-description"
            >
                Outside of building projects, I'm constantly learning, exploring new tools, and thinking about
                how technology can simplify complex problems.
            </motion.p>

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
