import { useEffect, useState } from 'react';

const SplinePreloader = ({ sceneUrl, onPreloadComplete }) => {
  const [isPreloading, setIsPreloading] = useState(true);
  const [preloadError, setPreloadError] = useState(false);

  useEffect(() => {
    const preloadSplineScene = async () => {
      try {
        // Preload the Spline scene
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = sceneUrl;
        link.as = 'fetch';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);

        // Simulate checking if the resource is loaded
        const checkPreload = () => {
          return new Promise((resolve) => {
            const timeout = setTimeout(() => {
              setIsPreloading(false);
              onPreloadComplete(true);
              resolve(true);
            }, 2000); // 2 seconds preload time

            // Clean up timeout if component unmounts
            return () => clearTimeout(timeout);
          });
        };

        await checkPreload();
      } catch (error) {
        console.error('Error preloading Spline scene:', error);
        setPreloadError(true);
        setIsPreloading(false);
        onPreloadComplete(false);
      }
    };

    if (sceneUrl) {
      preloadSplineScene();
    }
  }, [sceneUrl, onPreloadComplete]);

  return null; // This component doesn't render anything
};

export default SplinePreloader;
