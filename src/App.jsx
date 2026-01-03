import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'
import './styles/animations.css'

const Footer = () => (
  <footer style={{
    padding: '2rem',
    textAlign: 'center',
    borderTop: '1px solid var(--glass-border)',
    background: 'var(--bg-primary)',
    color: 'var(--text-secondary)'
  }}>
    <p>© 2026 Crafted with React & ❤️</p>
  </footer>
)

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
