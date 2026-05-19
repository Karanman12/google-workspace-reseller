/**
 * Premium cinematic hero background component
 * Inspired by hydroflowdrink.com and Apple design
 */

import React from 'react';

export const HeroBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Subtle clean neutral ambient halo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
        <div 
          className="w-[1000px] h-[1000px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Cinematic center glow - clean bright white spotlight */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div 
          className="w-[700px] h-[700px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 35%, rgba(255,255,255,0) 70%)',
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
