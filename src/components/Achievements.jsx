import React from 'react';
import { motion } from 'framer-motion';
import {
    FaBrain,
    FaRobot,
    FaNetworkWired,
    FaChartLine,
    FaMicrochip,
    FaJava,
    FaExternalLinkAlt,
    FaCertificate
} from 'react-icons/fa';
import {
    SiAnthropic,
    SiAmazonwebservices,
    SiMongodb
} from 'react-icons/si';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/Achievements.css';

const Achievements = () => {
    const certifications = [
        {
            icon: <FaBrain />,
            title: "Generative AI Mastermind",
            description: "Mastered prompt engineering, LLM architectures, fine-tuning techniques, and building production-ready Generative AI solutions.",
            category: "Gen AI",
            issuer: "Outskill",
            year: "Sep 2025"
        },
        {
            icon: <SiAnthropic />,
            title: "AI Fluency for Students",
            description: "Gained practical insights into prompt engineering, responsible AI usage, and leveraging modern AI tools for complex problem solving.",
            category: "Prompt Eng",
            issuer: "Anthropic",
            year: "Jul 2025"
        },
        {
            icon: <SiAnthropic />,
            title: "Claude 101",
            description: "Hands-on expertise with Claude LLMs, contextual prompt chains, and automated conversational workflows for productivity.",
            category: "LLM & AI",
            issuer: "Anthropic",
            year: "Jul 2025"
        },
        {
            icon: <SiAmazonwebservices />,
            title: "AWS Cloud Web App Builder",
            description: "Certified in architecting and deploying scalable, secure cloud-native web applications on AWS infrastructure.",
            category: "Cloud",
            issuer: "Amazon Web Services (AWS)",
            year: "Feb 2025"
        },
        {
            icon: <FaRobot />,
            title: "Natural Language Processing",
            description: "Applied NLP covering text preprocessing, tokenization, sentiment analysis, text embeddings, and transformer libraries.",
            category: "NLP",
            issuer: "Infosys Springboard",
            year: "Jun 2025"
        },
        {
            icon: <FaNetworkWired />,
            title: "Introduction to Deep Learning",
            description: "Foundational deep learning, neural network architectures, backpropagation, and multi-layer perceptron training.",
            category: "Deep Learning",
            issuer: "Infosys Springboard",
            year: "Jun 2025"
        },
        {
            icon: <FaChartLine />,
            title: "Introduction to Data Science",
            description: "Data science fundamentals, exploratory data analysis (EDA), statistical methods, and data pipelines with Pandas & NumPy.",
            category: "Data Science",
            issuer: "Infosys Springboard",
            year: "Jun 2025"
        },
        {
            icon: <SiMongodb />,
            title: "Introduction to MongoDB",
            description: "Document database modeling, aggregation pipelines, schema design, and production deployment with MongoDB Atlas.",
            category: "NoSQL DB",
            issuer: "MongoDB",
            year: "Jul 2024"
        },
        {
            icon: <FaMicrochip />,
            title: "Introduction to AI",
            description: "Core concepts of artificial intelligence, search algorithms, knowledge representation, and machine learning foundations.",
            category: "AI",
            issuer: "Infosys Springboard",
            year: "Jun 2025"
        },
        {
            icon: <FaJava />,
            title: "Java Programming Masterclass",
            description: "Comprehensive object-oriented programming (OOP), robust software architecture, data structures, and multithreading.",
            category: "Core Software",
            issuer: "Udemy",
            year: "Apr 2025"
        }
    ];

    return (
        <>
            <motion.div variants={textVariant()} className="achievements-header">
                <p className="section-subtext">Verified Credentials</p>
                <h2 className="section-heading">Licenses & Certifications.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="achievements-description"
            >
                Industry-recognized certifications and professional credentials across Generative AI,
                Cloud Architecture, Deep Learning, Natural Language Processing, and Distributed Databases.
            </motion.p>

            <div className="achievements-grid">
                {certifications.map((item, index) => (
                    <motion.div
                        key={item.title}
                        variants={fadeIn("up", "spring", index * 0.1, 0.65)}
                        className="achievement-card"
                    >
                        <div className="achievement-card-header">
                            <div className="achievement-icon">
                                {item.icon}
                            </div>
                            <div className="achievement-meta">
                                <span className="achievement-category">{item.category}</span>
                                <span className="achievement-year">{item.year}</span>
                            </div>
                        </div>
                        <h3 className="achievement-title">{item.title}</h3>
                        <p className="achievement-description">{item.description}</p>
                        <div className="achievement-issuer">
                            <FaExternalLinkAlt className="issuer-icon" />
                            <span>{item.issuer}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Achievements, "achievements");
