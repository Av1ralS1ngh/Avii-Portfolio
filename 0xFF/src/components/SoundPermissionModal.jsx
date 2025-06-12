import { useState } from 'react';
import './SoundPermissionModal.css';

const SoundPermissionModal = ({ onPermissionGranted }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleChoice = (allowSound) => {
    setIsVisible(false);
    setTimeout(() => {
      onPermissionGranted(allowSound);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="sound-modal-overlay">
      <div className="sound-modal">
        <div className="sound-modal-header">
          <h2>🎵 Audio Experience</h2>
        </div>
        <div className="sound-modal-body">
          <p>Would you like to enable background music for the full experience?</p>
          <div className="sound-modal-buttons">
            <button 
              className="sound-btn sound-btn-yes"
              onClick={() => handleChoice(true)}
            >
              🔊 Yes, Enable Sound
            </button>
            <button 
              className="sound-btn sound-btn-no"
              onClick={() => handleChoice(false)}
            >
              🔇 No, Keep Silent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundPermissionModal;
