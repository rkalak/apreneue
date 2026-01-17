import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC<{ onLoadingComplete: () => void }> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 100 / steps;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Wait 500ms before fading out
      } else {
        setProgress(currentProgress);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const circumference = 2 * Math.PI * 45; // radius = 45
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        {/* Logo with Fill Animation and Circular Progress */}
        <div className="relative w-40 h-40">
          {/* Circular Progress Ring (Behind Logo) */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#262626"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#0047AB"
              strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-300 ease-linear"
            />
          </svg>

          {/* Logo Container */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative w-full h-full">
              {/* Base logo (gray) */}
              <img
                src="/images/apreneue-globe-logo MAIN LOGO.png"
                alt="Loading"
                className="absolute inset-0 w-full h-full object-contain opacity-20"
              />
              {/* Filling logo (cobalt blue) with top-to-bottom reveal */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(${100 - progress}% 0 0 0)`
                }}
              >
                <img
                  src="/images/apreneue-globe-logo MAIN LOGO.png"
                  alt="Loading"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(24%) sepia(99%) saturate(2270%) hue-rotate(209deg) brightness(93%) contrast(101%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Percentage Counter */}
        <div className="mt-8 text-2xl font-bold text-white font-sans">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
