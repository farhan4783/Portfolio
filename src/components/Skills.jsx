import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiFigma, SiFlutter, SiDart, SiTensorflow, SiScikitlearn, SiFastapi, SiStreamlit, SiDjango, SiPostgresql } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend Development",
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
            skills: [
                { name: 'TensorFlow', icon: <SiTensorflow />, level: 'Advanced' },
                { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 'Advanced' },
                { name: 'Streamlit', icon: <SiStreamlit />, level: 'Advanced' },
            ]
        },
        {
            category: "Mobile & Tools",
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

            {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="skill-category">
                    <h3 className="category-title">{category.category}</h3>
                    <div className="skills-container">
                        {category.skills.map((skill, index) => (
                            <div
                                className="skill-card animate-fade-in"
                                key={index}
                                style={{ animationDelay: `${(catIndex * 0.3) + (index * 0.1)}s` }}
                            >
                                <div className="skill-icon" style={{ color: 'var(--accent-primary)' }}>
                                    {skill.icon}
                                </div>
                                <h3 className="skill-name">{skill.name}</h3>
                                <div className="skill-level-container">
                                    <div className="skill-level-bar">
                                        <div
                                            className="skill-level-fill"
                                            style={{
                                                width: `${getLevelPercentage(skill.level)}%`,
                                                animationDelay: `${(catIndex * 0.3) + (index * 0.1) + 0.2}s`
                                            }}
                                        ></div>
                                    </div>
                                    <span className="skill-level-text">{skill.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;

