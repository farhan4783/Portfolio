import React, { useState, useMemo } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import {
    FaGithub,
    FaStar,
    FaArrowRight
} from 'react-icons/fa';
import ProjectFilter from './ProjectFilter';
import '../styles/Works.css';

const ProjectCard = ({
    name,
    subtitle,
    description,
    tags,
    image,
    source_code_link,
    isCaseStudy,
    category,
    metrics,
    onViewDetails,
    project
}) => {
    return (
        <Tilt
            options={{
                max: 12,
                scale: 1.015,
                speed: 400,
            }}
            className='featured-card'
        >
            {/* Image Container with Badges */}
            <div className='featured-image-container'>
                <img
                    src={image}
                    alt={name}
                    className='featured-image'
                    loading="lazy"
                />
                <div className="featured-image-overlay"></div>

                {/* Top Overlay Badges */}
                <div className="card-overlay-badges">
                    {isCaseStudy ? (
                        <span className="card-badge-cs">
                            <FaStar className="cs-star" /> Case Study
                        </span>
                    ) : (
                        <span className="card-badge-standard">
                            Project
                        </span>
                    )}
                    <span className="card-category-chip">{category}</span>
                </div>

                {/* GitHub Quick Link Icon */}
                <div className='card-img_hover'>
                    <a
                        href={source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='featured-github-icon'
                        title="View source on GitHub"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaGithub size={16} />
                    </a>
                </div>
            </div>

            {/* Card Content */}
            <div className='featured-content'>
                <h3 className='featured-title'>{name}</h3>
                {subtitle && <p className="featured-subtitle-text">{subtitle}</p>}
                <p className='featured-description'>{description}</p>
            </div>

            {/* Metrics Preview Chips */}
            {metrics && (
                <div className="card-metrics-preview">
                    {Object.entries(metrics).slice(0, 3).map(([key, value]) => (
                        <div key={key} className="card-metric">
                            <span className="card-metric-value">{value}</span>
                            <span className="card-metric-label">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Tech Tags */}
            <div className='tags-container'>
                {tags && tags.slice(0, 4).map((tag) => (
                    <span
                        key={`${name}-${typeof tag === 'string' ? tag : tag.name}`}
                        className={`tag-text ${typeof tag === 'string' ? '' : tag.color}`}
                    >
                        #{typeof tag === 'string' ? tag : tag.name}
                    </span>
                ))}
                {tags && tags.length > 4 && (
                    <span className="tag-text more-tags">+{tags.length - 4}</span>
                )}
            </div>

            {/* View Details Action Button */}
            <button
                type="button"
                className="view-details-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    if (typeof onViewDetails === 'function') {
                        onViewDetails(project);
                    } else {
                        window.location.hash = `#project/${project.id}`;
                    }
                }}
            >
                <span>{isCaseStudy ? "View Details & Full Case Study" : "View Project Details"}</span>
                <FaArrowRight className="btn-arrow" />
            </button>
        </Tilt>
    );
};

const Works = ({ onSelectProject }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Extract unique categories cleanly
    const categories = useMemo(() => {
        return [...new Set(projects.map(p => p.category).filter(Boolean))];
    }, []);

    // Robust filter with case-insensitive and trimmed comparisons
    const filteredProjects = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        const selected = (activeCategory || 'All').trim().toLowerCase();

        return projects.filter(project => {
            const projectCat = (project.category || '').trim().toLowerCase();
            const matchesCategory =
                selected === 'all' ||
                selected === 'all projects' ||
                projectCat === selected;

            const matchesSearch =
                !query ||
                project.name.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                (project.subtitle && project.subtitle.toLowerCase().includes(query)) ||
                (project.tags && project.tags.some(tag => {
                    const tagName = typeof tag === 'string' ? tag : tag.name;
                    return tagName.toLowerCase().includes(query);
                }));

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <>
            <motion.div variants={textVariant()} className="works-header">
                <div className="centerpiece-banner">
                    <span className="pulse-cyan-dot"></span>
                    <span>Engineering Portfolio & Systems Deep Dives</span>
                </div>
                <h2 className="works-title">Featured Projects.</h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className='works-description'
            >
                Production-grade distributed systems, computer vision pipelines, and intelligent AI models.
                Click on any project to view its full architectural case study, technical challenges, and live implementation details.
            </motion.p>

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

            <motion.div layout className='works-container'>
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id || `project-${index}`}
                                layout
                                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                                transition={{ duration: 0.28, delay: Math.min(index * 0.04, 0.2) }}
                                className="project-card-wrapper"
                            >
                                <ProjectCard
                                    {...project}
                                    project={project}
                                    onViewDetails={onSelectProject}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            key="no-results"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="no-results"
                        >
                            <p>No projects found matching your search criteria.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Works, "works");
