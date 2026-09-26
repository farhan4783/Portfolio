import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AIPlayground from './components/AIPlayground';
import Statistics from './components/Statistics';
import Experience from './components/Experience';
import Works from './components/Works';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import CurrentWorks from './components/CurrentWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import RecruiterDock from './components/RecruiterDock';
import ProjectDetailPage from './components/ProjectDetailPage';
import { StarsCanvas } from './components/canvas';
import { projects } from './constants';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import './styles/animations.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync hash routing for project case study pages (#project/<id>)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        const found = projects.find(p => p.id === id);
        if (found) {
          setSelectedProject(found);
          return;
        }
      }
      setSelectedProject(null);
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handleHashChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    window.location.hash = `project/${project.id}`;
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project/')) {
      window.history.pushState(null, '', window.location.pathname + '#works');
    }
    setTimeout(() => {
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <>
      <Preloader />
      <div className="app-container">
        <ScrollProgress />
        <div className="canvas-wrapper">
          <StarsCanvas />
        </div>

        <Navbar />

        {/* 
          Homepage Layout Flow:
          1. Hero -> 2. About -> 3. AI Playground -> 4. Statistics ->
          5. Experience -> 6. Projects -> 7. Skills -> 8. Achievements ->
          9. Current Works -> 10. Contact -> 11. Footer
        */}
        <Hero />
        <About />
        <AIPlayground />
        <Statistics />
        <Experience />
        <Works onSelectProject={handleSelectProject} />
        <Skills />
        <Achievements />
        <CurrentWorks />
        <Contact />
        <Footer />

        {/* Floating Quick Connect Dock */}
        <RecruiterDock />

        {/* Full-Screen In-Depth Case Study Page View */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailPage
              project={selectedProject}
              onBack={handleBackToProjects}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
