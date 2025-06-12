import { useState, useEffect } from 'react';
import { asciiArtTexts } from '../data/asciiArt';
import './Terminal.css';

const Terminal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial 5-second delay
    const initialDelay = setTimeout(() => {
      setHasStarted(true);
    }, 6000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % asciiArtTexts.length
        );
        setIsVisible(true);
      }, 150); // Half of transition time for smooth fade
      
    }, 333); // 1/3 second = 333ms

    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn close"></span>
          <span className="btn minimize"></span>
          <span className="btn maximize"></span>
        </div>
        <div className="terminal-title">terminal</div>
      </div>
      <div className="terminal-body">
        <div className="terminal-prompt">
          <span className="prompt-user">aviral@portfolio</span>
          <span className="prompt-symbol">:~$</span>
          <span className="prompt-command">cat ascii_art.txt</span>
        </div>
        <div 
          className={`ascii-display ${isVisible ? 'visible' : 'hidden'}`}
        >
          <pre>{asciiArtTexts[currentIndex]}</pre>
        </div>
        <div className="terminal-cursor">_</div>
      </div>
    </div>
  );
};

export default Terminal;
