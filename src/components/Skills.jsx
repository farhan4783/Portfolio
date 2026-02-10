import React, { useState } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiFigma, SiFlutter, SiDart, SiTensorflow, SiScikitlearn, SiFastapi, SiStreamlit, SiDjango, SiPostgresql } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);

    const skillCategories = [
        {
            category: "Frontend Development",
            icon: "🎨",
            skills: [
                { name: 'React', icon: <FaReact />, level: 'Advanced' },
                { name: 'JavaScript', icon: <FaJs />, level: 'Advanced' },
                { name: 'TypeScript', icon: <SiTypescript />, level: 'Intermediate' },
                { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
                { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
                { name: 'Tailwind', icon: <SiTailwindcss />, level: 'Intermediate' },
            ]
        },
        {
            category: "Backend & Databases",
            icon: "⚙️",
            skills: [
                { name: 'Python', icon: <FaPython />, level: 'Advanced' },
                { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
                { name: 'Django', icon: <SiDjango />, level: 'Advanced' },
                { name: 'FastAPI', icon: <SiFastapi />, level: 'Advanced' },
                { name: 'MongoDB', icon: <SiMongodb />, level: 'Intermediate' },
                { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Intermediate' },
            ]
        },
        {
            category: "AI/ML & Data Science",
            icon: "🤖",
            skills: [
                { name: 'TensorFlow', icon: <SiTensorflow />, level: 'Advanced' },
                { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 'Advanced' },
                { name: 'Streamlit', icon: <SiStreamlit />, level: 'Advanced' },
            ]
        },
        {
            category: "Mobile & Tools",
            icon: "📱",
            skills: [
                { name: 'Flutter', icon: <SiFlutter />, level: 'Advanced' },
                { name: 'Dart', icon: <SiDart />, level: 'Advanced' },
                { name: 'Git', icon: <FaGitAlt />, level: 'Advanced' },
                { name: 'Docker', icon: <FaDocker />, level: 'Intermediate' },
                { name: 'Figma', icon: <SiFigma />, level: 'Intermediate' },
            ]
        }
    ];

    const getLevelPercentage = (level) => {
        switch (level) {
            case 'Advanced': return 90;
            case 'Intermediate': return 70;
            case 'Beginner': return 40;
            default: return 50;
        }
    };

    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Technical Skills</h2>
            <p className="skills-subtitle">Technologies I work with to build amazing projects</p>

            {/* Tab Navigation */}
            <div className="skills-tabs">
                {skillCategories.map((category, index) => (
                    <button
                        key={index}
                        className={`skill-tab ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        <span className="tab-icon">{category.icon}</span>
                        <span className="tab-text">{category.category}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="skills-tab-content"
                >
                    <div className="skills-container">
                        {skillCategories[activeTab].skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="skill-card"
                            >
                                <div className="skill-icon" style={{ color: 'var(--accent-primary)' }}>
                                    {skill.icon}
                                </div>
                                <h3 className="skill-name">{skill.name}</h3>
                                <div className="skill-level-container">
                                    <div className="skill-level-bar">
                                        <motion.div
                                            className="skill-level-fill"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${getLevelPercentage(skill.level)}%` }}
                                            transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                                        />
                                    </div>
                                    <span className="skill-level-text">{skill.level}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default Skills;
