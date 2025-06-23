import { useEffect } from 'react';

const SplineViewer = ({ scene, className, onLoad }) => {
  useEffect(() => {
    // Simulate loading complete
    if (onLoad) {
      const timer = setTimeout(() => {
        onLoad();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [onLoad]);

  return (
    <div className={`spline-container ${className || ''}`}>
      {/* Clean professional background - no content */}
    </div>
  );
};

export default SplineViewer;
