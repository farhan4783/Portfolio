import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaBrain, FaDatabase, FaServer } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/Experience.css';

const Experience = () => {
    const timeline = [
        {
            year: "2023 - Present",
            title: "B.Tech in Computer Science",
            institution: "IILM University, Greater Noida",
            description: "4th year student with specialization in AI/ML and Full Stack Development. Core coursework: Machine Learning, Deep Learning, Data Structures & Algorithms, Computer Vision, NLP.",
            highlights: ["AI/ML Specialization", "DSA Proficiency", "Research Projects"],
            icon: <FaGraduationCap />,
            type: "education"
        },
        {
            year: "2025",
            title: "AI Agent & LLM Development",
            institution: "Advanced Projects",
            description: "Built production-grade AI agents including an autonomous Data Analyst Agent with natural language query support and an LLM-powered Code Review Assistant that catches 78% of common anti-patterns.",
            highlights: ["LLM Integration", "AI Agents", "Production Deployment"],
            icon: <FaBrain />,
            type: "project"
        },
        {
            year: "2024",
            title: "Deep Learning & ML Engineering",
            institution: "Research & Development",
            description: "Developed LSTM-based Stock Market Predictor achieving 87.3% directional accuracy. Built Customer Churn Prediction system with 92% recall using ensemble methods and SHAP explainability.",
            highlights: ["LSTM Networks", "87.3% Accuracy", "SHAP Explainability"],
            icon: <FaRocket />,
            type: "project"
        },
        {
            year: "2024",
            title: "Recommendation Systems & Data Science",
            institution: "AI/ML Projects",
            description: "Engineered a hybrid Movie Recommendation System using SVD matrix factorization and TF-IDF content analysis, solving the cold-start problem with a 34% error reduction over baseline approaches.",
            highlights: ["SVD & TF-IDF", "Hybrid Models", "Cold-Start Solution"],
            icon: <FaDatabase />,
            type: "project"
        },
        {
            year: "2023 - 2024",
            title: "Full Stack Development",
            institution: "Web & Mobile Projects",
            description: "Built a real-time multiplayer Chess Platform with Stockfish AI integration using TypeScript and Bun. Mastered React, Django, FastAPI, and Flutter for end-to-end application development.",
            highlights: ["React & TypeScript", "Django & FastAPI", "Real-time Systems"],
            icon: <FaCode />,
            type: "project"
        }
    ];

    return (
        <>
            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="experience-header"
            >
                <p className="section-subtext">My Journey</p>
                <h2 className="section-heading">Experience & Education.</h2>
            </motion.div>

            <div className="timeline-container">
                <div className="timeline-line"></div>
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", 0.1, 0.75)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
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
                            {item.highlights && (
                                <div className="timeline-highlights">
                                    {item.highlights.map((highlight, i) => (
                                        <span key={i} className="timeline-highlight-tag">
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
