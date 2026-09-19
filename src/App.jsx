import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AIPlayground from './components/AIPlayground'
import Statistics from './components/Statistics'
import Works from './components/Works'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import CurrentWorks from './components/CurrentWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import Preloader from './components/Preloader'
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
        <About />
        <AIPlayground />
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
