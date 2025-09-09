import React from 'react';
import './Loading.css';

const Loading = ({ progress = 0 }) => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <img src="/assets/logo small.png" alt="Logo" />
        </div>
        <div className="loading-text">Loading...</div>
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="loading-percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default Loading;
