import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectFilter.css';

const ProjectFilter = ({ categories, activeCategory, onFilterChange }) => {
    const isAllActive = (activeCategory || '').trim().toLowerCase() === 'all' || (activeCategory || '').trim().toLowerCase() === 'all projects';

    return (
        <div className="filter-container">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`filter-btn ${isAllActive ? 'active' : ''}`}
                onClick={() => onFilterChange('All')}
            >
                All Projects
            </motion.button>
            {categories.map((category) => {
                const isActive = (category || '').trim().toLowerCase() === (activeCategory || '').trim().toLowerCase();
                return (
                    <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`filter-btn ${isActive ? 'active' : ''}`}
                        onClick={() => onFilterChange(category)}
                    >
                        {category}
                    </motion.button>
                );
            })}
        </div>
    );
};

export default ProjectFilter;
