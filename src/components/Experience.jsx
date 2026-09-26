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
            title: "B.Tech in Computer Science & Engineering (Data Science)",
            institution: "IILM University, Greater Noida",
            description: "B.Tech student in Computer Science & Engineering with specialization in Data Science and Full Stack Development. Coursework & practical focus: Data Science, Machine Learning, Deep Learning, Distributed Systems, Data Structures & Algorithms, Computer Vision, Big Data Analysis.",
            highlights: ["Data Science Specialization", "DSA Proficiency", "Distributed Systems & ML"],
            icon: <FaGraduationCap />,
            type: "education"
        },
        {
            year: "2025",
            title: "Real-Time Systems & Computer Vision",
            institution: "Flagship Engineering Projects",
            description: "Engineered real-time distributed platforms: Chess Platform with authoritative WebSocket state synchronization and Redis recovery, plus EmotionAI low-latency facial recognition streaming at 20+ FPS via FastAPI and OpenCV.",
            highlights: ["WebSockets & Redis", "Computer Vision (DeepFace)", "Sub-10ms Latency"],
            icon: <FaServer />,
            type: "project"
        },
        {
            year: "2024 - 2025",
            title: "AI Agents & LLM Development",
            institution: "Autonomous AI Projects",
            description: "Built production-grade AI agents including an autonomous Data Analyst Agent with natural language query support and an LLM-powered Code Review Assistant that catches 78% of common anti-patterns.",
            highlights: ["LLM Integration", "AI Agents", "Production Deployment"],
            icon: <FaBrain />,
            type: "project"
        },
        {
            year: "2024",
            title: "Recommendation Engines & Data Science",
            institution: "Movie Maverick & ML Systems",
            description: "Engineered Movie Maverick, a hybrid movie recommendation platform using SVD matrix factorization, TF-IDF content analysis, and Redis caching — reducing cold-start prediction error by 34% and cutting response times to <85ms.",
            highlights: ["Hybrid SVD + TF-IDF", "Cold-Start Solution", "Redis Caching"],
            icon: <FaDatabase />,
            type: "project"
        },
        {
            year: "2023 - 2024",
            title: "Deep Learning & Predictive Modeling",
            institution: "ML Engineering Projects",
            description: "Developed LSTM stock market predictor achieving 87.3% directional accuracy with walk-forward validation. Built Customer Churn system with 92% recall using XGBoost, SMOTE, and SHAP explainability.",
            highlights: ["LSTM Networks", "87.3% Accuracy", "SHAP Explainability"],
            icon: <FaRocket />,
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
