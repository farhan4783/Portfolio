import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CurrentWorks from './components/CurrentWorks'
import Works from './components/Works'
import Skills from './components/Skills'
import Contact from './components/Contact'
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
    <p>© 2026 Crafted with React & ❤️</p>
  </footer>
)

function App() {
  return (
    <div className="app-container">
      <div className="canvas-wrapper">
        <StarsCanvas />
      </div>
      <Navbar />
      <Hero />
      <Works />
      <CurrentWorks />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
