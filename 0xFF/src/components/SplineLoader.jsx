import './SplineLoader.css';

const SplineLoader = () => {
  return (
    <div className="spline-loader">
      <div className="loader-content">
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loader-text">Loading 3D Experience...</p>
        <div className="loader-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default SplineLoader;
