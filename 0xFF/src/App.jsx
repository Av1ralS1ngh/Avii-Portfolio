import { useState, useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import AudioPlayer from './components/AudioPlayer'
import Terminal from './components/Terminal'
import ThemeToggle from './components/ThemeToggle'

import SoundPermissionModal from './components/SoundPermissionModal'
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './App.css'

function AppContent() {
  const [hasPermission, setHasPermission] = useState(false);
  const [allowSound, setAllowSound] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [audioTime, setAudioTime] = useState(0);
  const [terminalDestroyed, setTerminalDestroyed] = useState(false);
  const [imageToggle, setImageToggle] = useState(false);
  const { isDark } = useTheme();

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

    const destroyCheckTimer = setTimeout(handleTerminalDestroyed, 5000); // Changed from 10000 to 5000

    return () => clearTimeout(destroyCheckTimer);
  }, [hasPermission]);

  // Toggle between images every 3 seconds
  useEffect(() => {
    const imageToggleTimer = setInterval(() => {
      setImageToggle(prev => !prev);
    }, 650);

    return () => clearInterval(imageToggleTimer);
  }, []);

  const getDeveloperImage = () => {
    if (isDark) {
      return imageToggle ? "/developer-image10.svg" : "/developer-image1.svg";
    } else {
      return imageToggle ? "/developer-image20.svg" : "/developer-image2.svg";
    }
  };

  return (
    <>
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
                
                {terminalDestroyed && (
                  <div className="hero-content">
                    <h1 className="hero-title">Aviral Singh</h1>
                    <p className="hero-subtitle">Blockchain Developer & Web3 Innovator</p>
                    <p className="hero-description">B.Tech 3rd year, IIT Roorkee</p>
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
                
                <div className="developer-image">
                  <img 
                    src={getDeveloperImage()} 
                    alt="Developer illustration" 
                    className="dev-img" 
                  />
                </div>
                
                <div className="hero-footer">
                  <div className="footer-content">
                    <span className="made-with">Made with 🩵</span>
                    <span className="divider">|</span>
                    <span className="powered-by">
                      Powered by 
                      <img src="/vite.svg" className="vite-logo" />
                      Ethereum
                    </span>
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
