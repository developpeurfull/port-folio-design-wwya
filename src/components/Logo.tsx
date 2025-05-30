
import React from 'react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        
        {/* Outer circle */}
        <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
        
        {/* Inner design */}
        <circle cx="50" cy="50" r="35" fill="white" opacity="0.95" />
        
        {/* Letter or symbol */}
        <path 
          d="M 30 35 L 45 20 L 55 20 L 70 35 L 70 45 L 55 60 L 45 60 L 30 45 Z" 
          fill="url(#logoGradient)" 
        />
        <circle cx="50" cy="40" r="8" fill="white" />
      </svg>
    </div>
  );
};

export default Logo;
