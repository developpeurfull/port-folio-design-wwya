
import React from 'react';

const HeroIllustration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg 
        viewBox="0 0 1200 800" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
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
        
        {/* Bureau moderne */}
        <rect x="200" y="550" width="800" height="30" fill="url(#deskGradient)" rx="15"/>
        
        {/* Ordinateur portable */}
        <rect x="450" y="480" width="300" height="20" fill="#374151" rx="10"/>
        <rect x="460" y="350" width="280" height="180" fill="url(#screenGradient)" rx="15"/>
        <rect x="470" y="360" width="260" height="160" fill="#10b981" rx="8"/>
        
        {/* Lignes de code sur l'écran */}
        <rect x="485" y="380" width="80" height="4" fill="#ffffff" opacity="0.9"/>
        <rect x="485" y="395" width="120" height="4" fill="#60a5fa" opacity="0.9"/>
        <rect x="485" y="410" width="60" height="4" fill="#f59e0b" opacity="0.9"/>
        <rect x="485" y="425" width="100" height="4" fill="#ffffff" opacity="0.9"/>
        <rect x="485" y="440" width="90" height="4" fill="#ec4899" opacity="0.9"/>
        
        {/* Tasse de café moderne */}
        <circle cx="850" cy="520" r="25" fill="#8b4513"/>
        <circle cx="850" cy="520" r="20" fill="#d97706"/>
        <rect x="875" y="515" width="20" height="8" fill="#8b4513" rx="4"/>
        
        {/* Plante décorative */}
        <rect x="250" y="530" width="20" height="25" fill="#92400e"/>
        <circle cx="260" cy="525" r="15" fill="#22c55e"/>
        <circle cx="255" cy="515" r="10" fill="#16a34a"/>
        <circle cx="268" cy="518" r="8" fill="#15803d"/>
        
        {/* Femme afro travaillant */}
        {/* Corps */}
        <ellipse cx="600" cy="450" rx="40" ry="60" fill="#ec4899"/>
        
        {/* Bras */}
        <ellipse cx="560" cy="430" rx="12" ry="35" fill="url(#skinGradient)" transform="rotate(-15 560 430)"/>
        <ellipse cx="640" cy="430" rx="12" ry="35" fill="url(#skinGradient)" transform="rotate(20 640 430)"/>
        
        {/* Mains */}
        <circle cx="550" cy="460" r="8" fill="url(#skinGradient)"/>
        <circle cx="650" cy="450" r="8" fill="url(#skinGradient)"/>
        
        {/* Tête */}
        <circle cx="600" cy="320" r="45" fill="url(#skinGradient)"/>
        
        {/* Cheveux afro */}
        <circle cx="600" cy="300" r="50" fill="#2d1b69"/>
        <circle cx="580" cy="290" r="15" fill="#2d1b69"/>
        <circle cx="620" cy="290" r="15" fill="#2d1b69"/>
        <circle cx="570" cy="310" r="12" fill="#2d1b69"/>
        <circle cx="630" cy="310" r="12" fill="#2d1b69"/>
        <circle cx="600" cy="280" r="10" fill="#2d1b69"/>
        
        {/* Traits du visage */}
        <circle cx="585" cy="315" r="3" fill="#1f2937"/>
        <circle cx="615" cy="315" r="3" fill="#1f2937"/>
        <path d="M 590 335 Q 600 345 610 335" stroke="#1f2937" strokeWidth="3" fill="none"/>
        
        {/* Éléments décoratifs flottants */}
        <circle cx="150" cy="200" r="6" fill="url(#bgGradient)" opacity="0.6"/>
        <circle cx="1050" cy="250" r="8" fill="url(#bgGradient)" opacity="0.6"/>
        <circle cx="200" cy="350" r="5" fill="url(#bgGradient)" opacity="0.6"/>
        <circle cx="1000" cy="150" r="7" fill="url(#bgGradient)" opacity="0.6"/>
        <circle cx="300" cy="100" r="4" fill="url(#bgGradient)" opacity="0.6"/>
        <circle cx="900" cy="100" r="6" fill="url(#bgGradient)" opacity="0.6"/>
        
        {/* Lignes décoratives */}
        <path d="M 100 400 Q 200 350 300 400" stroke="url(#bgGradient)" strokeWidth="3" fill="none" opacity="0.4"/>
        <path d="M 900 300 Q 1000 250 1100 300" stroke="url(#bgGradient)" strokeWidth="3" fill="none" opacity="0.4"/>
        <path d="M 150 600 Q 250 580 350 600" stroke="url(#bgGradient)" strokeWidth="2" fill="none" opacity="0.3"/>
        
        {/* Formes géométriques modernes */}
        <polygon points="100,150 130,120 160,150 130,180" fill="url(#bgGradient)" opacity="0.3"/>
        <polygon points="1050,350 1080,320 1110,350 1080,380" fill="url(#bgGradient)" opacity="0.3"/>
      </svg>
    </div>
  );
};

export default HeroIllustration;
