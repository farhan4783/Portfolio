import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiFigma, SiFlutter, SiDart } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React', icon: <FaReact />, level: 'Advanced' },
        { name: 'Flutter', icon: <SiFlutter />, level: 'Advanced' },
        { name: 'Dart', icon: <SiDart />, level: 'Advanced' },
        { name: 'JavaScript', icon: <FaJs />, level: 'Advanced' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
        { name: 'Git', icon: <FaGitAlt />, level: 'Intermediate' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 'Beginner' },
    ];

    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card animate-fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="skill-icon" style={{ color: 'var(--accent-primary)' }}>
                            {skill.icon}
                        </div>
                        <h3 className="skill-name">{skill.name}</h3>
                        <span className="skill-level">{skill.level}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
