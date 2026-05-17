/**
 * Premium cinematic hero background component
 * Inspired by hydroflowdrink.com and Apple design
 */

import React from 'react';

export const HeroBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Subtle amber ambient warmth (Hydroflow sunset effect) - Toned down to avoid washing out background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
        <div 
          className="w-[1000px] h-[1000px] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, rgba(230,90,40,0.1) 0%, rgba(230,90,40,0.02) 45%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Cinematic center glow - Toned down so the exact concrete gray #E4E4E4 color shines through */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div 
          className="w-[700px] h-[700px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 35%, rgba(255,255,255,0) 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-30 w-full h-full">
        {children}
      </div>
    </div>
  );
};
