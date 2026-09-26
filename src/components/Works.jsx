import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import SectionWrapper from "../hoc/SectionWrapper";
import { caseStudies, projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {
    FaGithub,
    FaStar,
    FaTimes,
    FaArrowRight,
    FaChartBar,
    FaCogs,
    FaCheckCircle,
    FaLayerGroup,
    FaExclamationTriangle,
    FaLightbulb,
    FaExternalLinkAlt
} from 'react-icons/fa';
import ProjectFilter from './ProjectFilter';
import '../styles/Works.css';

const ProjectDeepDive = ({ project, onClose }) => {
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!project) return null;

    const hasRichCaseStudy = Boolean(project.engineeringDetails || project.personalImplementation);

    return (
        <motion.div
            className="deep-dive-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="deep-dive-modal"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="deep-dive-close" onClick={onClose} aria-label="Close case study modal">
                    <FaTimes />
                </button>

                <div className="deep-dive-header">
                    <img src={project.image} alt={project.name} className="deep-dive-image" />
                    <div className="deep-dive-overlay-gradient"></div>
                    <div className="deep-dive-header-content">
                        <div className="deep-dive-badge-row">
                            <span className="case-study-pill">
                                {project.isCaseStudy ? "★ Flagship Engineering Case Study" : "Technical Project Deep Dive"}
                            </span>
                            <span className="case-study-category">{project.category}</span>
                        </div>
                        <h2 className="deep-dive-title">{project.name}</h2>
                        {project.subtitle && <p className="deep-dive-subtitle">{project.subtitle}</p>}
                        <div className="deep-dive-tags">
                            {project.tags.map(tag => (
                                <span key={tag.name} className="deep-dive-tag">#{tag.name}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Case Study Tab Navigation */}
                {hasRichCaseStudy && (
                    <div className="case-study-tabs">
                        <button
                            className={`case-study-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            <FaLightbulb /> Overview & Problem
                        </button>
                        <button
                            className={`case-study-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
                            onClick={() => setActiveTab('architecture')}
                        >
                            <FaLayerGroup /> Architecture
                        </button>
                        <button
                            className={`case-study-tab-btn ${activeTab === 'engineering' ? 'active' : ''}`}
                            onClick={() => setActiveTab('engineering')}
                        >
                            <FaCogs /> Engineering Details
                        </button>
                        <button
                            className={`case-study-tab-btn ${activeTab === 'implementation' ? 'active' : ''}`}
                            onClick={() => setActiveTab('implementation')}
                        >
                            <FaCheckCircle /> What I Implemented
                        </button>
                        <button
                            className={`case-study-tab-btn ${activeTab === 'results' ? 'active' : ''}`}
                            onClick={() => setActiveTab('results')}
                        >
                            <FaChartBar /> Results & Metrics
                        </button>
                    </div>
                )}

                <div className="deep-dive-body">
                    {/* Tab 1: Overview & Problem */}
                    {(!hasRichCaseStudy || activeTab === 'overview') && (
                        <div className="tab-pane">
                            <div className="deep-dive-section">
                                <h3 className="deep-dive-section-title">
                                    <span className="section-emoji"><FaLightbulb /></span> System Summary
                                </h3>
                                <p className="deep-dive-section-text">{project.description}</p>
                            </div>

                            {(project.problem || project.challenge) && (
                                <div className="deep-dive-section problem-section">
                                    <h3 className="deep-dive-section-title">
                                        <span className="section-emoji"><FaExclamationTriangle /></span> The Problem & Technical Challenges
                                    </h3>
                                    <p className="deep-dive-section-text">{project.problem || project.challenge}</p>
                                </div>
                            )}

                            {(project.solution || project.approach) && (
                                <div className="deep-dive-section solution-section">
                                    <h3 className="deep-dive-section-title">
                                        <span className="section-emoji">💡</span> The Solution & Approach
                                    </h3>
                                    <p className="deep-dive-section-text">{project.solution || project.approach}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tab 2: System Architecture */}
                    {hasRichCaseStudy && activeTab === 'architecture' && (
                        <div className="tab-pane">
                            <div className="deep-dive-section">
                                <h3 className="deep-dive-section-title">
                                    <span className="section-emoji"><FaLayerGroup /></span> System Architecture & Data Flow
                                </h3>
                                <div className="architecture-content">
                                    {project.architecture.split('\n').map((line, i) => (
                                        <p key={i} className="architecture-line">{line}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 3: Engineering Deep Dive */}
                    {hasRichCaseStudy && activeTab === 'engineering' && (
                        <div className="tab-pane">
                            <div className="deep-dive-section">
                                <h3 className="deep-dive-section-title">
                                    <span className="section-emoji"><FaCogs /></span> Engineering Deep Dive (Demonstrating Systems Design)
                                </h3>
                                <p className="deep-dive-section-text mb-4" style={{ marginBottom: '1.25rem', color: '#a0aec0' }}>
                                    Focusing on state synchronization, error recovery, concurrency management, and distributed performance:
                                </p>
                                <div className="engineering-cards-grid">
                                    {project.engineeringDetails.map((detail, idx) => (
                                        <div key={idx} className="engineering-detail-card">
                                            <div className="engineering-card-header">
                                                <span className="engineering-card-index">0{idx + 1}</span>
                                                <h4 className="engineering-card-title">{detail.title}</h4>
                                            </div>
                                            <p className="engineering-card-body">{detail.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Tab 4: What I Personally Implemented */}
                    {hasRichCaseStudy && activeTab === 'implementation' && (
                        <div className="tab-pane">
                            <div className="deep-dive-section">
                                <h3 className="deep-dive-section-title">
                                    <span className="section-emoji"><FaCheckCircle /></span> What I Personally Implemented
                                </h3>
                                <p className="deep-dive-section-text" style={{ marginBottom: '1rem', color: '#a0aec0' }}>
                                    Concrete features, state machines, algorithmic pipelines, and infrastructure I authored:
                                </p>
                                <ul className="personal-impl-list">
                                    {project.personalImplementation.map((item, idx) => (
                                        <li key={idx} className="personal-impl-item">
                                            <span className="impl-icon"><FaCheckCircle /></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Tab 5: Results & Metrics */}
                    {(!hasRichCaseStudy || activeTab === 'results') && (
                        <div className="tab-pane">
                            <div className="deep-dive-section">
                                <h3 className="deep-dive-section-title">
                                    <span className="section-emoji"><FaChartBar /></span> Measurable Results & Benchmarks
                                </h3>
                                <p className="deep-dive-section-text">{project.results}</p>
                            </div>

                            {project.metrics && (
                                <div className="deep-dive-metrics">
                                    {Object.entries(project.metrics).map(([key, value]) => (
                                        <div key={key} className="deep-dive-metric">
                                            <span className="metric-value">{value}</span>
                                            <span className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Action Links */}
                    <div className="deep-dive-actions">
                        <a
                            href={project.source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="deep-dive-btn deep-dive-btn-primary"
                        >
                            <FaGithub /> View Source Code on GitHub
                        </a>
                        <button
                            type="button"
                            className="deep-dive-btn deep-dive-btn-secondary"
                            onClick={() => {
                                navigator.clipboard.writeText(project.source_code_link);
                                alert("GitHub repository link copied to clipboard!");
                            }}
                        >
                            Copy Repo Link
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const FeaturedCaseStudyCard = ({ project, onSelect, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="case-study-hero-card"
        >
            <div className="case-study-card-inner">
                <div className="case-study-image-col">
                    <img src={project.image} alt={project.name} className="case-study-img" />
                    <div className="case-study-img-overlay"></div>
                    <div className="case-study-floating-badge">
                        <FaStar /> Case Study #{index + 1}
                    </div>
                </div>

                <div className="case-study-info-col">
                    <div className="case-study-meta-row">
                        <span className="case-study-tag-category">{project.category}</span>
                        <a
                            href={project.source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="case-study-gh-btn"
                            title="Open repository in new tab"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaGithub /> GitHub
                        </a>
                    </div>

                    <h3 className="case-study-main-title">{project.name}</h3>
                    <p className="case-study-main-subtitle">{project.subtitle}</p>
                    <p className="case-study-main-desc">{project.description}</p>

                    {/* Metrics preview */}
                    {project.metrics && (
                        <div className="case-study-metrics-row">
                            {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                                <div key={key} className="case-study-metric-chip">
                                    <span className="cs-metric-num">{value}</span>
                                    <span className="cs-metric-text">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Key Engineering highlights preview */}
                    {project.engineeringDetails && (
                        <div className="case-study-eng-preview">
                            <span className="eng-preview-label">Core Engineering:</span>
                            <div className="eng-preview-tags">
                                {project.engineeringDetails.map((detail, i) => (
                                    <span key={i} className="eng-preview-pill">
                                        ⚡ {detail.title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="case-study-card-actions">
                        <button
                            className="case-study-read-btn"
                            onClick={() => onSelect(project)}
                        >
                            <span>Read Full Case Study</span>
                            <FaArrowRight />
                        </button>
                        <a
                            href={project.source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="case-study-code-link"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaExternalLinkAlt style={{ marginRight: '6px' }} /> View Code
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectCard = ({
    index,
    name,
    subtitle,
    description,
    tags,
    image,
    source_code_link,
    featured,
    metrics,
    challenge,
    approach,
    results,
    onViewDetails,
    project
}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="project-card-motion"
        >
            <Tilt
                options={{
                    max: 12,
                    scale: 1,
                    speed: 450,
                }}
                className='featured-card p-5'
            >
                {featured && (
                    <div className="featured-badge">
                        <FaStar /> Case Study
                    </div>
                )}
                <div className='featured-image-container relative w-full h-[200px]'>
                    <img
                        src={image}
                        alt={name}
                        className='featured-image'
                    />

                    <div className='card-img_hover'>
                        <a
                            href={source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='featured-github-icon'
                            title="View source on GitHub"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <FaGithub size={18} color="white" />
                        </a>
                    </div>
                </div>

                <div className='featured-content mt-3'>
                    <h3 className='featured-title'>{name}</h3>
                    {subtitle && <p className="featured-subtitle-text">{subtitle}</p>}
                    <p className='featured-description'>{description}</p>
                </div>

                {/* Metrics Preview */}
                {metrics && (
                    <div className="card-metrics-preview">
                        {Object.entries(metrics).slice(0, 3).map(([key, value]) => (
                            <div key={key} className="card-metric">
                                <span className="card-metric-value">{value}</span>
                                <span className="card-metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className='tags-container mt-3'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`tag-text ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>

                {/* View Details Button */}
                <button
                    className="view-details-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        onViewDetails(project);
                    }}
                >
                    <FaChartBar style={{ marginRight: '6px' }} />
                    {project.isCaseStudy ? "View Engineering Case Study" : "View Technical Deep Dive"}
                    <FaArrowRight style={{ marginLeft: '6px', fontSize: '0.7rem' }} />
                </button>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);

    // Get unique categories across all projects
    const categories = [...new Set(projects.map(project => project.category))];

    // Filter projects
    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (project.subtitle && project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <motion.div variants={textVariant()} className="works-header">
                <div className="centerpiece-banner">
                    <span className="pulse-cyan-dot"></span>
                    <span>Systems & Machine Learning Centerpiece</span>
                </div>
                <h2 className="works-title">Featured Case Studies.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='works-description mt-3'
                >
                    Engineering is about solving tough constraints: synchronizing real-time state, handling network drops,
                    mitigating cold starts, and optimizing latency. Explore individual case studies below detailing the problem,
                    system architecture, deep engineering decisions, and measurable outcomes.
                </motion.p>
            </div>

            {/* Featured Case Studies Showcase (The Centerpiece) */}
            <div className="case-studies-centerpiece-container">
                {caseStudies.map((caseStudy, index) => (
                    <FeaturedCaseStudyCard
                        key={caseStudy.id}
                        project={caseStudy}
                        index={index}
                        onSelect={setSelectedProject}
                    />
                ))}
            </div>

            {/* Additional Projects Section */}
            <div className="all-projects-divider">
                <div className="divider-line"></div>
                <span className="divider-text">Full Engineering Catalog</span>
                <div className="divider-line"></div>
            </div>

            <ProjectFilter
                categories={categories}
                activeCategory={activeCategory}
                onFilterChange={setActiveCategory}
            />

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search systems by name, keyword, or architecture..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className='works-container mt-10'>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div key={`project-${index}`} className="project-card-wrapper">
                            <ProjectCard
                                index={index}
                                {...project}
                                project={project}
                                onViewDetails={setSelectedProject}
                            />
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>No projects found matching your criteria.</p>
                    </div>
                )}
            </div>

            {/* Deep Dive Case Study Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDeepDive
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default SectionWrapper(Works, "works");
