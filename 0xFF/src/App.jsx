import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import AudioPlayer from './components/AudioPlayer'
import Terminal from './components/Terminal'
import SplineViewer from './components/SplineViewer'
import ThemeToggle from './components/ThemeToggle'

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
  const [audioTime, setAudioTime] = useState(0);
  const [terminalDestroyed, setTerminalDestroyed] = useState(false);

  const handlePermissionGranted = (soundChoice) => {
    setAllowSound(soundChoice);
    setHasPermission(true);
  };

  const handleAudioTimeUpdate = (time) => {
    setAudioTime(time);
  };

  useEffect(() => {
    const handleTerminalDestroyed = () => {
      setTimeout(() => {
        setTerminalDestroyed(true);
      }, 4000); // 3s destroy animation + 1s delay
    };

    const destroyCheckTimer = setTimeout(handleTerminalDestroyed, 10000);

    return () => clearTimeout(destroyCheckTimer);
  }, [hasPermission]);

  return (
    <ThemeProvider>
      {!hasPermission && (
        <SoundPermissionModal onPermissionGranted={handlePermissionGranted} />
      )}
      
      {hasPermission && (
        <>
          <ThemeToggle />
          <AudioPlayer 
            src="/music/background.mp3" 
            shouldPlay={allowSound}
            isActive={hasPermission}
            onTimeUpdate={handleAudioTimeUpdate}
          />
          
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          
          <main className="portfolio">
            {activeSection === 'home' && (
              <section className="hero">
                {!terminalDestroyed && <Terminal />}
                
                <div className="hero-spline-bg">
                  <SplineViewer className="hero-spline" />
                </div>
                
                {terminalDestroyed && (
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
                )}
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
    </ThemeProvider>
  )
}

export default App
