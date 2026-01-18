import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub } from 'react-icons/fa';
import '../styles/Works.css';

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='featured-card p-5'
            >
                <div className='featured-image-container relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
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
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
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
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='works-container mt-20'>
                {projects.map((project, index) => (
                    <div key={`project-${index}`} className="project-card-wrapper">
                        <ProjectCard index={index} {...project} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "works");
