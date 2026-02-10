import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaProjectDiagram, FaTools } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn } from '../utils/motion';
import '../styles/Statistics.css';

const Statistics = () => {
    const [counts, setCounts] = useState({
        projects: 0,
        repos: 0,
        technologies: 0,
        experience: 0
    });

    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    const finalCounts = {
        projects: 15,
        repos: 52,
        technologies: 20,
        experience: 3
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;

            setCounts({
                projects: Math.floor(finalCounts.projects * progress),
                repos: Math.floor(finalCounts.repos * progress),
                technologies: Math.floor(finalCounts.technologies * progress),
                experience: Math.floor(finalCounts.experience * progress)
            });

            if (currentStep >= steps) {
                setCounts(finalCounts);
                clearInterval(interval);
            }
        }, stepDuration);
    };

    const stats = [
        {
            icon: <FaProjectDiagram />,
            count: counts.projects,
            label: "Projects Completed",
            suffix: "+"
        },
        {
            icon: <FaGithub />,
            count: counts.repos,
            label: "GitHub Repositories",
            suffix: "+"
        },
        {
            icon: <FaTools />,
            count: counts.technologies,
            label: "Technologies Mastered",
            suffix: "+"
        },
        {
            icon: <FaCode />,
            count: counts.experience,
            label: "Years of Experience",
            suffix: "+"
        }
    ];

    return (
        <div ref={sectionRef} className="statistics-section">
            <div className="statistics-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                        className="stat-card"
                    >
                        <div className="stat-icon">
                            {stat.icon}
                        </div>
                        <div className="stat-count">
                            {stat.count}{stat.suffix}
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Statistics, "statistics");
