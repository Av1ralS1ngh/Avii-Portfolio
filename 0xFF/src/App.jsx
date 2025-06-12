import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import Terminal from './components/Terminal'

import SoundPermissionModal from './components/SoundPermissionModal'
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [allowSound, setAllowSound] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handlePermissionGranted = (soundChoice) => {
    setAllowSound(soundChoice);
    setHasPermission(true);
  };

  return (
    <>
      {!hasPermission && (
        <SoundPermissionModal onPermissionGranted={handlePermissionGranted} />
      )}
      
      {hasPermission && (
        <>
          <AudioPlayer 
            src="/music/background.mp3" 
            shouldPlay={allowSound}
            isActive={hasPermission}
          />
          
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main className="portfolio">
            {activeSection === 'home' && (
              <section className="hero">
                <Terminal isActive={hasPermission} />
                <div className="hero-content">
                  <h1 className="hero-title">Aviral Singh</h1>
                  <p className="hero-subtitle">Blockchain Developer & Web3 Innovator</p>
                  <p className="hero-description">B.Tech Metallurgy & Materials Engineering, IIT Roorkee</p>
                  <div className="hero-cta">
                    <button className="cta-button primary" onClick={() => setActiveSection('projects')}>
                      View My Work
                    </button>
                    <button className="cta-button secondary" onClick={() => setActiveSection('contact')}>
                      Get In Touch
                    </button>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'about' && <About />}
            {activeSection === 'skills' && <Skills />}
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'achievements' && <Achievements />}
            {activeSection === 'contact' && <Contact />}
          </main>
        </>
      )}
    </>
  )
}

export default App
