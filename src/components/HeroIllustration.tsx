
import React from 'react';

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-80 md:h-96">
      <svg 
        viewBox="0 0 800 600" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background elements */}
        <defs>
          <linearGradient id="deskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b4513" />
            <stop offset="100%" stopColor="#a0522d" />
          </linearGradient>
        </defs>
        
        {/* Desk */}
        <rect x="150" y="400" width="500" height="20" fill="url(#deskGradient)" rx="10"/>
        
        {/* Laptop base */}
        <rect x="280" y="350" width="240" height="15" fill="#374151" rx="8"/>
        
        {/* Laptop screen */}
        <rect x="290" y="250" width="220" height="140" fill="url(#screenGradient)" rx="10"/>
        <rect x="300" y="260" width="200" height="120" fill="#10b981" rx="5"/>
        
        {/* Code lines on screen */}
        <rect x="310" y="270" width="60" height="3" fill="#ffffff" opacity="0.8"/>
        <rect x="310" y="280" width="80" height="3" fill="#60a5fa" opacity="0.8"/>
        <rect x="310" y="290" width="45" height="3" fill="#f59e0b" opacity="0.8"/>
        <rect x="310" y="300" width="70" height="3" fill="#ffffff" opacity="0.8"/>
        
        {/* Coffee cup */}
        <circle cx="580" cy="370" r="20" fill="#8b4513"/>
        <circle cx="580" cy="370" r="15" fill="#d97706"/>
        <rect x="600" y="365" width="15" height="5" fill="#8b4513" rx="2"/>
        
        {/* Plant */}
        <rect x="200" y="380" width="15" height="20" fill="#92400e"/>
        <circle cx="207" cy="375" r="12" fill="#22c55e"/>
        <circle cx="203" cy="365" r="8" fill="#16a34a"/>
        <circle cx="213" cy="368" r="6" fill="#15803d"/>
        
        {/* Woman figure */}
        {/* Body */}
        <ellipse cx="400" cy="320" rx="30" ry="45" fill="#ec4899"/>
        
        {/* Arms */}
        <ellipse cx="370" cy="310" rx="8" ry="25" fill="url(#skinGradient)" transform="rotate(-10 370 310)"/>
        <ellipse cx="430" cy="310" rx="8" ry="25" fill="url(#skinGradient)" transform="rotate(15 430 310)"/>
        
        {/* Hands */}
        <circle cx="365" cy="330" r="6" fill="url(#skinGradient)"/>
        <circle cx="435" cy="325" r="6" fill="url(#skinGradient)"/>
        
        {/* Head */}
        <circle cx="400" cy="230" r="35" fill="url(#skinGradient)"/>
        
        {/* Hair */}
        <path d="M 365 220 Q 400 190 435 220 Q 430 200 400 195 Q 370 200 365 220" fill="#2d1b69"/>
        <circle cx="385" cy="210" r="8" fill="#2d1b69"/>
        <circle cx="415" cy="210" r="8" fill="#2d1b69"/>
        <circle cx="400" cy="205" r="6" fill="#2d1b69"/>
        
        {/* Face features */}
        <circle cx="390" cy="225" r="2" fill="#1f2937"/>
        <circle cx="410" cy="225" r="2" fill="#1f2937"/>
        <path d="M 395 240 Q 400 245 405 240" stroke="#1f2937" strokeWidth="2" fill="none"/>
        
        {/* Floating elements */}
        <circle cx="120" cy="150" r="4" fill="#f59e0b" opacity="0.6"/>
        <circle cx="680" cy="180" r="6" fill="#ec4899" opacity="0.6"/>
        <circle cx="150" cy="250" r="3" fill="#10b981" opacity="0.6"/>
        <circle cx="650" cy="120" r="5" fill="#8b5cf6" opacity="0.6"/>
        
        {/* Decorative lines */}
        <path d="M 100 300 Q 150 280 200 300" stroke="#e2e8f0" strokeWidth="2" fill="none"/>
        <path d="M 600 200 Q 650 180 700 200" stroke="#e2e8f0" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  );
};

export default HeroIllustration;
