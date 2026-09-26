import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import AIPlayground from './components/AIPlayground'
import About from './components/About'
import Statistics from './components/Statistics'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import CurrentWorks from './components/CurrentWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Preloader from './components/Preloader'
import RecruiterDock from './components/RecruiterDock'
import { StarsCanvas } from './components/canvas';
import './App.css'
import './styles/animations.css'

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
        {/* Projects as the Centerpiece */}
        <Works />
        <AIPlayground />
        <About />
        <Statistics />
        <Experience />
        <Skills />
        <Achievements />
        <CurrentWorks />
        <Contact />
        <Footer />
        {/* Persistent Recruiter Quick-Contact Dock */}
        <RecruiterDock />
      </div>
    </>
  )
}

export default App
