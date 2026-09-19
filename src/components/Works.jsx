import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub, FaStar, FaTimes, FaArrowRight, FaChartBar } from 'react-icons/fa';
import ProjectFilter from './ProjectFilter';
import '../styles/Works.css';

const ProjectDeepDive = ({ project, onClose }) => {
    if (!project) return null;

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
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="deep-dive-close" onClick={onClose}>
                    <FaTimes />
                </button>

                <div className="deep-dive-header">
                    <img src={project.image} alt={project.name} className="deep-dive-image" />
                    <div className="deep-dive-overlay-gradient"></div>
                    <div className="deep-dive-header-content">
                        <h2 className="deep-dive-title">{project.name}</h2>
                        <div className="deep-dive-tags">
                            {project.tags.map(tag => (
                                <span key={tag.name} className="deep-dive-tag">#{tag.name}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="deep-dive-body">
                    <p className="deep-dive-description">{project.description}</p>

                    {project.challenge && (
                        <div className="deep-dive-section">
                            <h3 className="deep-dive-section-title">
                                <span className="section-emoji">🎯</span> The Challenge
                            </h3>
                            <p className="deep-dive-section-text">{project.challenge}</p>
                        </div>
                    )}

                    {project.approach && (
                        <div className="deep-dive-section">
                            <h3 className="deep-dive-section-title">
                                <span className="section-emoji">⚙️</span> Approach
                            </h3>
                            <p className="deep-dive-section-text">{project.approach}</p>
                        </div>
                    )}

                    {project.results && (
                        <div className="deep-dive-section">
                            <h3 className="deep-dive-section-title">
                                <span className="section-emoji">📊</span> Results
                            </h3>
                            <p className="deep-dive-section-text">{project.results}</p>
                        </div>
                    )}

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

                    <div className="deep-dive-actions">
                        <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="deep-dive-btn deep-dive-btn-primary">
                            <FaGithub /> View Source Code
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectCard = ({
    index,
    name,
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
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="project-card-motion"
        >
            <Tilt
                options={{
                    max: 15,
                    scale: 1,
                    speed: 450,
                }}
                className='featured-card p-5'
            >
                {featured && (
                    <div className="featured-badge">
                        <FaStar /> Featured
                    </div>
                )}
                <div className='featured-image-container relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt={name}
                        className='featured-image'
                    />

                    <div className='card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='featured-github-icon'
                        >
                            <FaGithub size={20} color="white" />
                        </div>
                    </div>
                </div>

                <div className='featured-content mt-5'>
                    <h3 className='featured-title'>{name}</h3>
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

                <div className='tags-container mt-4'>
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
                {(challenge || approach || results) && (
                    <button
                        className="view-details-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            onViewDetails(project);
                        }}
                    >
                        <FaChartBar style={{ marginRight: '6px' }} />
                        View Deep Dive
                        <FaArrowRight style={{ marginLeft: '6px', fontSize: '0.7rem' }} />
                    </button>
                )}
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);

    // Get unique categories
    const categories = [...new Set(projects.map(project => project.category))];

    // Filter projects
    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <motion.div variants={textVariant()} className="works-header">
                <p>My work</p>
                <h2>Featured Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='works-description mt-3'
                >
                    Each project below solves a real problem with a concrete technical approach.
                    Click "View Deep Dive" to see the challenge, methodology, and results behind each build.
                </motion.p>
            </div>

            <ProjectFilter
                categories={categories}
                activeCategory={activeCategory}
                onFilterChange={setActiveCategory}
            />

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className='works-container mt-20'>
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

            {/* Deep Dive Modal */}
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
