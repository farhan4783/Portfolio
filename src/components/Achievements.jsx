import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaStar, FaGithub, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { SiTensorflow, SiGoogle, SiCoursera } from 'react-icons/si';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            icon: <SiTensorflow />,
            title: "TensorFlow Developer",
            description: "Certified in building and deploying ML models using TensorFlow. Covered CNNs, RNNs, NLP, and time-series prediction.",
            category: "Certification",
            issuer: "Google / Coursera",
            year: "2024"
        },
        {
            icon: <FaAward />,
            title: "ML Specialization",
            description: "Completed Andrew Ng's Machine Learning Specialization covering supervised learning, unsupervised learning, and best ML practices.",
            category: "Certification",
            issuer: "Stanford / Coursera",
            year: "2024"
        },
        {
            icon: <FaTrophy />,
            title: "6+ AI/ML Projects Deployed",
            description: "Built and shipped 6 production-quality AI projects including LSTM stock predictor (87.3% accuracy), recommendation engine, and customer churn system (92% recall).",
            category: "Achievement",
            issuer: "Personal Portfolio",
            year: "2024-2025"
        },
        {
            icon: <FaGithub />,
            title: "Active Open Source Contributor",
            description: "Maintaining 50+ GitHub repositories with consistent contributions. Projects span AI/ML, web development, and data science tooling.",
            category: "Contribution",
            issuer: "GitHub",
            year: "Ongoing"
        },
        {
            icon: <FaCertificate />,
            title: "Python for Data Science",
            description: "Certified in Python for data science including NumPy, Pandas, Matplotlib, and Scikit-learn for end-to-end ML pipeline development.",
            category: "Certification",
            issuer: "IBM / Coursera",
            year: "2024"
        },
        {
            icon: <FaMedal />,
            title: "Full Stack Web Development",
            description: "Mastered React, Django, FastAPI, and database technologies. Built real-time multiplayer applications with WebSocket integration.",
            category: "Certification",
            issuer: "Self-Directed Study",
            year: "2023-2024"
        }
    ];

    return (
        <>
            <motion.div variants={textVariant()} className="achievements-header">
                <p className="section-subtext">Recognition</p>
                <h2 className="section-heading">Achievements & Certifications.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="achievements-description"
            >
                Concrete milestones from my journey in AI/ML engineering and full-stack development —
                backed by certifications, metrics, and real project outcomes.
            </motion.p>

            <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.title}
                        variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                        className="achievement-card"
                    >
                        <div className="achievement-card-header">
                            <div className="achievement-icon">
                                {achievement.icon}
                            </div>
                            <div className="achievement-meta">
                                <span className="achievement-category">{achievement.category}</span>
                                <span className="achievement-year">{achievement.year}</span>
                            </div>
                        </div>
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p className="achievement-description">{achievement.description}</p>
                        <div className="achievement-issuer">
                            <FaExternalLinkAlt className="issuer-icon" />
                            <span>{achievement.issuer}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Achievements, "achievements");
