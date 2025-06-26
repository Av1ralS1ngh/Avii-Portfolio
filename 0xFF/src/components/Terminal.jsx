import { useState, useEffect } from 'react';
import { asciiArtTexts } from '../data/asciiArt';
import './Terminal.css';

const Terminal = ({ audioTime = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const [isDestroying, setIsDestroying] = useState(false);
  const [shouldDestroy, setShouldDestroy] = useState(false);

  // Start exactly 5 seconds after page load
  useEffect(() => {
    const startTime = setTimeout(() => {
      setHasStarted(true);
      console.log('ASCII animations started at 5 seconds');
    },);

    return () => clearTimeout(startTime);
  }, []);

  // Show all 15 arts within 5 seconds (333ms each)
  useEffect(() => {
    if (!hasStarted || shouldDestroy) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % asciiArtTexts.length;
          
          // If we've completed a full cycle (back to index 0)
          if (newIndex === 0 && prevIndex === asciiArtTexts.length - 1) {
            setCycleCount(prev => {
              const newCount = prev + 1;
              if (newCount === 1) {
                // After first complete cycle, trigger destruction
                setTimeout(() => setShouldDestroy(true), 10);
              }
              return newCount;
            });
          }
          
          return newIndex;
        });
        setIsVisible(true);
      }, 50);
      
    }, 333);

    return () => clearInterval(interval);
  }, [hasStarted, shouldDestroy]);

  // Handle destruction animation
  useEffect(() => {
    if (shouldDestroy && !isDestroying) {
      setIsDestroying(true);
      console.log('Starting terminal destruction...');
    }
  }, [shouldDestroy, isDestroying]);

  if (shouldDestroy) {
    return (
      <div className={`terminal ${isDestroying ? 'destroying' : ''}`}>
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
            className="ascii-display visible"
          >
            <pre>{asciiArtTexts[asciiArtTexts.length - 1]}</pre>
          </div>
          <div className="terminal-cursor">_</div>
        </div>
      </div>
    );
  }

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
        
        {/* Debug info */}
        <div className="debug-info">
          Art: {currentIndex + 1}/15 | Cycles: {cycleCount} | Destroying: {shouldDestroy ? 'Yes' : 'No'}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
