import { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineViewer = ({ className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    console.log('Spline scene loaded successfully');
  };

  const handleError = (error) => {
    setIsLoading(false);
    setHasError(true);
    console.error('Spline loading error:', error);
  };

  const LoadingFallback = () => (
    <div className="spline-placeholder">
      <div className="placeholder-content">
        <p>Loading 3D Scene...</p>
        <div className="loading-spinner">⚡</div>
        <p className="placeholder-note">Interactive 3D experience loading</p>
      </div>
    </div>
  );

  const ErrorFallback = () => (
    <div className="spline-placeholder">
      <div className="placeholder-content">
        <p>3D Scene Unavailable</p>
        <div className="loading-spinner">🎨</div>
        <p className="placeholder-note">Unable to load 3D content</p>
      </div>
    </div>
  );

  if (hasError) {
    return <ErrorFallback />;
  }

  return (
    <div className={`spline-container ${className}`}>
      {isLoading && <LoadingFallback />}
      <Suspense fallback={<LoadingFallback />}>
        <Spline 
          scene="https://prod.spline.design/e4y7IGbrhMhdV5eg/scene.splinecode"
          style={{ 
            width: '100%', 
            height: '100%',
            display: isLoading ? 'none' : 'block'
          }}
          onLoad={handleLoad}
          onError={handleError}
        />
      </Suspense>
    </div>
  );
};

export default SplineViewer;
