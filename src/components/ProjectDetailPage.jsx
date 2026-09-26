import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaArrowLeft,
    FaGithub,
    FaExternalLinkAlt,
    FaLightbulb,
    FaExclamationTriangle,
    FaCogs,
    FaCheckCircle,
    FaChartBar,
    FaLayerGroup,
    FaCode,
    FaCopy
} from 'react-icons/fa';
import '../styles/ProjectDetailPage.css';

const ProjectDetailPage = ({ project, onBack }) => {
    useEffect(() => {
        // Prevent body background scroll while on the dedicated detail page
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onBack();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = originalOverflow || 'unset';
        };
    }, [onBack]);

    if (!project) return null;

    const copyLink = () => {
        const url = window.location.origin + window.location.pathname + `#project/${project.id}`;
        navigator.clipboard.writeText(url);
        alert('Case study link copied to clipboard!');
    };

    return (
        <motion.div
            className="project-detail-page"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
        >
            {/* Top Navigation Bar */}
            <div className="project-detail-nav">
                <button
                    onClick={onBack}
                    className="detail-back-btn"
                    title="Return to Portfolio Projects"
                >
                    <FaArrowLeft />
                    <span>Back to Projects</span>
                </button>

                <div className="detail-nav-actions">
                    <button
                        onClick={copyLink}
                        className="detail-action-icon-btn"
                        title="Copy case study link"
                    >
                        <FaCopy /> Copy Link
                    </button>
                    <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-action-gh-btn"
                    >
                        <FaGithub /> View Code
                    </a>
                </div>
            </div>

            {/* Hero Banner Section */}
            <header className="project-detail-hero">
                <div className="detail-hero-backdrop">
                    <img src={project.image} alt={project.name} className="detail-hero-bg-img" />
                    <div className="detail-hero-gradient"></div>
                </div>

                <div className="detail-hero-content">
                    <div className="detail-badge-row">
                        <span className="detail-category-badge">{project.category}</span>
                        {project.isCaseStudy && (
                            <span className="detail-case-study-badge">
                                ★ In-Depth Engineering Case Study
                            </span>
                        )}
                    </div>

                    <h1 className="detail-hero-title">{project.name}</h1>
                    {project.subtitle && <p className="detail-hero-subtitle">{project.subtitle}</p>}
                    <p className="detail-hero-description">{project.description}</p>

                    <div className="detail-hero-links">
                        <a
                            href={project.source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="detail-btn detail-btn-primary"
                        >
                            <FaGithub /> GitHub Repository
                        </a>
                        <button
                            onClick={onBack}
                            className="detail-btn detail-btn-secondary"
                        >
                            <FaArrowLeft /> Back to Main Portfolio
                        </button>
                    </div>

                    {/* Key Metrics Quick Cards */}
                    {project.metrics && (
                        <div className="detail-metrics-grid">
                            {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="detail-metric-card">
                                    <span className="detail-metric-val">{value}</span>
                                    <span className="detail-metric-lbl">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content Container */}
            <main className="project-detail-container">
                {/* Tech Stack Pills */}
                {project.tags && project.tags.length > 0 && (
                    <section className="detail-content-card">
                        <h3 className="detail-card-heading">
                            <FaCode className="heading-icon" /> Core Technologies & Environment
                        </h3>
                        <div className="detail-tags-wrap">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="detail-tech-pill">
                                    #{typeof tag === 'string' ? tag : tag.name}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Section 1: The Problem & Engineering Challenges */}
                {(project.problem || project.challenge) && (
                    <section className="detail-content-card problem-card">
                        <h3 className="detail-card-heading">
                            <FaExclamationTriangle className="heading-icon text-red" /> The Problem & Technical Challenges
                        </h3>
                        <p className="detail-card-text">{project.problem || project.challenge}</p>
                    </section>
                )}

                {/* Section 2: Architecture & System Design */}
                {project.architecture ? (
                    <section className="detail-content-card">
                        <h3 className="detail-card-heading">
                            <FaLayerGroup className="heading-icon text-cyan" /> System Architecture & Component Design
                        </h3>
                        <div className="detail-architecture-list">
                            {(typeof project.architecture === 'string'
                                ? project.architecture.split('\n')
                                : project.architecture
                            ).map((line, idx) => (
                                <div key={idx} className="architecture-item">
                                    <span className="arch-idx">0{idx + 1}</span>
                                    <p className="arch-desc">{line}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : (
                    project.approach && (
                        <section className="detail-content-card">
                            <h3 className="detail-card-heading">
                                <FaLightbulb className="heading-icon text-cyan" /> Technical Approach
                            </h3>
                            <p className="detail-card-text">{project.approach}</p>
                        </section>
                    )
                )}

                {/* Section 3: Engineering Deep Dive */}
                {project.engineeringDetails && project.engineeringDetails.length > 0 && (
                    <section className="detail-content-card">
                        <h3 className="detail-card-heading">
                            <FaCogs className="heading-icon text-purple" /> Engineering Deep Dive
                        </h3>
                        <p className="detail-section-intro">
                            Detailed breakdown of how critical distributed systems and machine learning challenges
                            were solved under production constraints:
                        </p>

                        <div className="detail-eng-grid">
                            {project.engineeringDetails.map((detail, idx) => (
                                <div key={idx} className="detail-eng-card">
                                    <div className="detail-eng-card-header">
                                        <span className="detail-eng-index">0{idx + 1}</span>
                                        <h4 className="detail-eng-title">{detail.title}</h4>
                                    </div>
                                    <p className="detail-eng-content">{detail.content}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Section 4: What I Personally Implemented */}
                {project.personalImplementation && project.personalImplementation.length > 0 && (
                    <section className="detail-content-card">
                        <h3 className="detail-card-heading">
                            <FaCheckCircle className="heading-icon text-green" /> What I Personally Implemented
                        </h3>
                        <p className="detail-section-intro">
                            Direct contributions, modules, and algorithms authored for this system:
                        </p>
                        <ul className="detail-impl-list">
                            {project.personalImplementation.map((item, idx) => (
                                <li key={idx} className="detail-impl-item">
                                    <FaCheckCircle className="impl-check-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Section 5: Measurable Results & Benchmarks */}
                {project.results && (
                    <section className="detail-content-card results-card">
                        <h3 className="detail-card-heading">
                            <FaChartBar className="heading-icon text-cyan" /> Measurable Results & Outcomes
                        </h3>
                        <p className="detail-card-text">{project.results}</p>
                    </section>
                )}

                {/* Bottom Footer Actions */}
                <div className="detail-bottom-actions">
                    <button
                        onClick={onBack}
                        className="detail-btn detail-btn-primary"
                    >
                        <FaArrowLeft /> Back to All Projects
                    </button>
                    <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-btn detail-btn-secondary"
                    >
                        <FaGithub /> View Source on GitHub
                    </a>
                </div>
            </main>
        </motion.div>
    );
};

export default ProjectDetailPage;
