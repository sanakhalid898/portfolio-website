import React from 'react';

export default function GirlPointer() {
  return (
    <div className="w-full h-full relative flex items-end justify-center pb-4">
      <svg 
        viewBox="-40 0 240 400" 
        className="w-full h-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]" 
        fill="none" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Glow definitions */}
        <defs>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="stroke-[#374151] dark:stroke-brand-green fill-white dark:fill-[#080d14] transition-colors duration-300">
          
          {/* Hair back */}
          <path d="M70 120 C 60 160, 50 180, 50 200 L 90 200 Z" />
          
          {/* Left Arm (pointing left with stick) */}
          <path d="M60 230 C 30 250, 10 260, 10 260" />

          {/* Body / Jacket */}
          <path d="M100 180 L 60 250 L 60 400 L 160 400 L 160 250 Z" />
          
          {/* Jacket Details */}
          <path d="M80 180 L 140 180 L 110 220 Z" fillOpacity="0.4" />
          <line x1="110" y1="220" x2="110" y2="400" className="stroke-[#9ca3af] dark:stroke-brand-green/50" strokeDasharray="6 4" />
          
          {/* Head & Face */}
          <path d="M110 180 C 80 180, 70 150, 70 120 C 70 90, 80 60, 110 60 C 140 60, 150 90, 150 120 C 150 150, 140 180, 110 180 Z" />
          
          {/* Cyber Visor */}
          <rect x="75" y="100" width="70" height="25" rx="10" className="fill-gray-800 dark:fill-brand-green/20" filter="url(#neonGlow)" />
          <line x1="90" y1="112.5" x2="130" y2="112.5" className="stroke-brand-green dark:stroke-white opacity-80" strokeWidth="2" />
          
          {/* Hair Front (Bangs) */}
          <path d="M110 60 C 80 60, 70 90, 70 120 C 90 120, 100 100, 110 100 C 120 100, 130 120, 150 120 C 150 90, 140 60, 110 60 Z" />

          {/* Right Arm (resting on hip) */}
          <path d="M160 230 C 180 240, 200 280, 170 320" />
        </g>

        {/* The Presentation Pointer Stick */}
        <line x1="10" y1="260" x2="-30" y2="120" stroke="#ef4444" strokeWidth="6" filter="url(#neonGlow)" />
        <circle cx="-30" cy="120" r="5" fill="#ef4444" stroke="none" filter="url(#neonGlow)" />
        
        {/* Decorative sparks near pointer tip */}
        <path d="M-40 110 L -45 105 M -20 100 L -15 90 M -45 130 L -55 135" stroke="#ef4444" strokeWidth="3" filter="url(#neonGlow)" />
      </svg>
    </div>
  );
}
