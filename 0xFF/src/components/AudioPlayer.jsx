import { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ src, shouldPlay, isActive, onTimeUpdate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && shouldPlay && isActive && !hasError) {
      if (isPlaying) {
        audio.play().catch(console.error);
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, shouldPlay, isActive, hasError]);

  // Auto-start music if permission was granted
  useEffect(() => {
    if (shouldPlay && isActive && !hasError && !isLoading) {
      setIsPlaying(true);
    }
  }, [shouldPlay, isActive, hasError, isLoading]);

  const handlePlay = () => {
    if (hasError || !isActive) return;
    setIsPlaying(!isPlaying);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    setIsPlaying(false);
    console.warn('Audio file could not be loaded. Please ensure the file exists at:', src);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      const time = audio.currentTime;
      setCurrentTime(time);
      if (onTimeUpdate) {
        onTimeUpdate(time);
      }
    }
  };

  const getButtonContent = () => {
    if (hasError) return '❌';
    if (isLoading) return '⏳';
    return isPlaying ? '🔊' : '🔇';
  };

  const getAriaLabel = () => {
    if (hasError) return 'Audio file not found';
    if (isLoading) return 'Loading audio';
    return isPlaying ? 'Pause music' : 'Play music';
  };

  if (!isActive) return null;

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        onLoadedData={handleLoadedData}
        onError={handleError}
        onTimeUpdate={handleTimeUpdate}
      />
      <button 
        className={`audio-toggle ${isPlaying ? 'playing' : ''} ${hasError ? 'error' : ''}`}
        onClick={handlePlay}
        aria-label={getAriaLabel()}
        disabled={hasError}
      >
        {getButtonContent()}
      </button>
      {hasError && (
        <div className="error-tooltip">
          Audio file not found
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
