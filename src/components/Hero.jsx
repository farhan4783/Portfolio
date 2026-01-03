import React from 'react';
import { FaReact, FaCode } from 'react-icons/fa';
import { SiPython, SiJavascript } from 'react-icons/si';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h3 className="hero-greeting animate-slide-left">Hello, I'm Mohd Farhan</h3>
                <h1 className="hero-name animate-fade-in">
                    <span className="gradient-text">Computer Science</span> Student
                </h1>
                <p className="hero-description animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Building the future with code. Specialized in Python, Flutter, and AI/ML.
                </p>
                <div className="hero-buttons animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>

            <div className="hero-image">
                <div className="code-card animate-float">
                    <div className="code-header">
                        <span className="code-dot red"></span>
                        <span className="code-dot yellow"></span>
                        <span className="code-dot green"></span>
                    </div>
                    <div className="code-content">
                        <pre>
                            <code>
                                <span className="c-keyword">const</span> <span className="c-var">portfolio</span> = <span className="c-op">{'{'}</span>
                                <span className="c-prop">owner:</span> <span className="c-str">'Farhan'</span>,
                                <span className="c-prop">role:</span> <span className="c-str">'Developer'</span>,
                                <span className="c-prop">skills:</span> <span className="c-op">['</span>React<span className="c-op">', '</span>Python<span className="c-op">']</span>,
                                <span className="c-prop">hireable:</span> <span className="c-bool">true</span>
                                <span className="c-op">{'}'}</span>;
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="floating-icon icon-react"><FaReact /></div>
                <div className="floating-icon icon-python"><SiPython /></div>
                <div className="floating-icon icon-js"><SiJavascript /></div>

                <div className="circle-gradient"></div>
            </div>
        </section>
    );
};

export default Hero;
