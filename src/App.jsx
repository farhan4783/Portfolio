import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Statistics from './components/Statistics'
import Works from './components/Works'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import CurrentWorks from './components/CurrentWorks'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import Preloader from './components/Preloader'
import { StarsCanvas } from './components/canvas';
import './App.css'
import './styles/animations.css'

const Footer = () => (
  <footer style={{
    padding: '2rem',
    textAlign: 'center',
    borderTop: '1px solid var(--glass-border)',
    background: 'var(--bg-primary)',
    color: 'var(--text-secondary)',
    position: 'relative',
    zIndex: 10
  }}>
    <p>© 2026 Mohd Farhan | Crafted with React & ❤️</p>
  </footer>
)

function App() {
  return (
    <>
      <Preloader />
      <div className="app-container">
        <ScrollProgress />
        <div className="canvas-wrapper">
          <StarsCanvas />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Statistics />
        <Works />
        <Experience />
        <Skills />
        <Achievements />
        <CurrentWorks />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App


