import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/Experience.css';

const Experience = () => {
    const timeline = [
        {
            year: "2023 - Present",
            title: "B.Tech in Computer Science",
            institution: "IILM University, Greater Noida",
            description: "Currently in 3rd year, focusing on AI/ML, Data Structures, Algorithms, and Full Stack Development. Building innovative projects and exploring cutting-edge technologies.",
            icon: <FaGraduationCap />,
            type: "education"
        },
        {
            year: "2024",
            title: "AI/ML Project Development",
            institution: "Personal Projects",
            description: "Developed multiple AI-powered applications including Customer Churn Prediction, AI Code Review Assistant, and AI Data Analyst Agent using Python, TensorFlow, and Scikit-learn.",
            icon: <FaRocket />,
            type: "project"
        },
        {
            year: "2023 - 2024",
            title: "Full Stack Development",
            institution: "Self-Learning & Projects",
            description: "Built production-ready applications including Chess Platform with AI opponents, Movie Recommendation System, and Stock Market Predictor. Mastered React, TypeScript, Django, and FastAPI.",
            icon: <FaCode />,
            type: "project"
        }
    ];

    return (
        <>
            <motion.div variants={textVariant()} className="experience-header">
                <p className="section-subtext">My Journey</p>
                <h2 className="section-heading">Experience & Education.</h2>
            </motion.div>

            <div className="timeline-container">
                <div className="timeline-line"></div>
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", "spring", index * 0.3, 0.75)}
                        className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                    >
                        <div className="timeline-dot">
                            <div className="timeline-icon">
                                {item.icon}
                            </div>
                        </div>
                        <div className={`timeline-card ${item.type}`}>
                            <div className="timeline-year">{item.year}</div>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-institution">{item.institution}</p>
                            <p className="timeline-description">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
