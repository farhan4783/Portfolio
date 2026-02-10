import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaStar } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            icon: <FaCertificate />,
            title: "Certifications",
            description: "Multiple certifications in AI/ML, Web Development, and Cloud Computing",
            category: "Learning"
        },
        {
            icon: <FaTrophy />,
            title: "Hackathons",
            description: "Participated in various coding competitions and hackathons",
            category: "Competition"
        },
        {
            icon: <FaStar />,
            title: "Open Source",
            description: "Active contributor to open-source projects on GitHub",
            category: "Contribution"
        },
        {
            icon: <FaMedal />,
            title: "Academic Excellence",
            description: "Consistent academic performance in Computer Science",
            category: "Academic"
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
                A collection of certifications, achievements, and recognitions earned through
                continuous learning and dedication to excellence in software development.
            </motion.p>

            <div className="achievements-note">
                <p>📁 <strong>Certificates Folder:</strong> All certification documents are organized in the <code>certificates/</code> folder for easy access and verification.</p>
            </div>

            <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.title}
                        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                        className="achievement-card"
                    >
                        <div className="achievement-icon">
                            {achievement.icon}
                        </div>
                        <div className="achievement-category">{achievement.category}</div>
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p className="achievement-description">{achievement.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Achievements, "achievements");
