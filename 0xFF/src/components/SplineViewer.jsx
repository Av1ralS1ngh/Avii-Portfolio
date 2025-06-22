import { useEffect, useRef, useState } from 'react';
import './SplineViewer.css';

const SplineViewer = ({ splineUrl, className = '', style = {} }) => {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!splineUrl) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    const loadSpline = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        // Check if @splinetool/runtime is available
        const { Application } = await import('@splinetool/runtime');
        
        if (canvasRef.current) {
          const app = new Application(canvasRef.current);
          
          // Add error handling for the load
          app.load(splineUrl)
            .then(() => {
              setIsLoaded(true);
              setIsLoading(false);
              console.log('Spline scene loaded successfully');
            })
            .catch((error) => {
              console.error('Failed to load Spline scene:', error);
              setHasError(true);
              setIsLoading(false);
            });
        }
      } catch (error) {
        console.error('Failed to import Spline runtime:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(loadSpline, 100);
    return () => clearTimeout(timer);
  }, [splineUrl]);

  if (hasError) {
    return (
      <div className={`spline-error ${className}`} style={style}>
        <div className="error-content">
          <span className="error-icon">⚠️</span>
          <p>3D Scene Unavailable</p>
          <small>Check console for details</small>
        </div>
      </div>
    );
  }

  return (
    <div className={`spline-container ${className}`} style={style}>
      {isLoading && (
        <div className="spline-loader">
          <div className="loader-spinner"></div>
          <p>Loading 3D scene...</p>
        </div>
      )}
      <canvas 
        ref={canvasRef}
        className={`spline-canvas ${isLoaded ? 'loaded' : ''}`}
        style={{ 
          display: isLoading ? 'none' : 'block',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

export default SplineViewer;
