import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaBrain, FaProjectDiagram, FaDatabase, FaChartLine, FaCogs } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn } from '../utils/motion';
import '../styles/Statistics.css';

const Statistics = () => {
    const [counts, setCounts] = useState({
        projects: 0,
        repos: 0,
        mlModels: 0,
        technologies: 0,
    });

    const [hasAnimated, setHasAnimated] = useState(false);
    const [githubRepos, setGithubRepos] = useState(null);
    const sectionRef = useRef(null);

    const finalCounts = {
        projects: 6,
        repos: 50,
        mlModels: 8,
        technologies: 20,
    };

    // Try to fetch actual GitHub repo count
    useEffect(() => {
        const fetchGithubStats = async () => {
            try {
                const response = await fetch('https://api.github.com/users/farhan4783');
                if (response.ok) {
                    const data = await response.json();
                    setGithubRepos(data.public_repos);
                    finalCounts.repos = data.public_repos;
                }
            } catch (error) {
                // Fallback to hardcoded value
            }
        };
        fetchGithubStats();
    }, []);

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
            // Eased progress for smoother animation
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
                projects: Math.floor(finalCounts.projects * easedProgress),
                repos: Math.floor((githubRepos || finalCounts.repos) * easedProgress),
                mlModels: Math.floor(finalCounts.mlModels * easedProgress),
                technologies: Math.floor(finalCounts.technologies * easedProgress),
            });

            if (currentStep >= steps) {
                setCounts({
                    projects: finalCounts.projects,
                    repos: githubRepos || finalCounts.repos,
                    mlModels: finalCounts.mlModels,
                    technologies: finalCounts.technologies,
                });
                clearInterval(interval);
            }
        }, stepDuration);
    };

    const stats = [
        {
            icon: <FaProjectDiagram />,
            count: counts.projects,
            label: "AI/ML Projects Built",
            suffix: "+",
            description: "End-to-end deployed"
        },
        {
            icon: <FaGithub />,
            count: counts.repos,
            label: "GitHub Repositories",
            suffix: "+",
            description: githubRepos ? "Live count" : "And counting"
        },
        {
            icon: <FaBrain />,
            count: counts.mlModels,
            label: "ML Models Trained",
            suffix: "+",
            description: "LSTM, XGBoost, SVD & more"
        },
        {
            icon: <FaCogs />,
            count: counts.technologies,
            label: "Technologies Used",
            suffix: "+",
            description: "Python, TF, React, Django..."
        }
    ];

    return (
        <div ref={sectionRef} className="statistics-section">
            <div className="statistics-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                        className="stat-card"
                    >
                        <div className="stat-icon">
                            {stat.icon}
                        </div>
                        <div className="stat-count">
                            {stat.count}{stat.suffix}
                        </div>
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-description">{stat.description}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Statistics, "statistics");
