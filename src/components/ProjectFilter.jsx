import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectFilter.css';

const ProjectFilter = ({ categories, activeCategory, onFilterChange }) => {
    return (
        <div className="filter-container">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => onFilterChange('All')}
            >
                All Projects
            </motion.button>
            {categories.map((category) => (
                <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => onFilterChange(category)}
                >
                    {category}
                </motion.button>
            ))}
        </div>
    );
};

export default ProjectFilter;
