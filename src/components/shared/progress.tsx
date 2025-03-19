import React from "react";

interface ProgressBarProps {
  progress: number; // Accepts a number between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-[10px] bg-accent rounded-lg overflow-hidden relative">
      <div
        className="h-[10px] bg-primary rounded-lg transition-all duration-500 ease-in-out relative"
        style={{ width: `${progress}%` }}
      >
        {/* Shimmer Effect */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
