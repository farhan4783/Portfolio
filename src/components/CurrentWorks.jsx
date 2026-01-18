import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/github';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import '../styles/CurrentWorks.css';

const CurrentWorks = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProjects = async () => {
            const data = await fetchProjects();
            setProjects(data);
            setLoading(false);
        };
        getProjects();
    }, []);

    return (
        <section className="projects-section" id="current-works">
            <h2 className="section-title">Currently Working</h2>

            {loading ? (
                <div className="loading">Loading projects...</div>
            ) : (
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="card-top">
                                <FaGithub className="github-icon" />
                                <div className="project-links">
                                    <a href={project.html_url} target="_blank" rel="noreferrer">View Code</a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-desc">{project.description || "No description available."}</p>

                            <div className="card-bottom">
                                <div className="project-stats">
                                    <span><FaStar /> {project.stargazers_count}</span>
                                    <span><FaCodeBranch /> {project.forks_count}</span>
                                </div>
                                <div className="project-lang">
                                    {project.language && <span className="lang-tag">{project.language}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CurrentWorks;
