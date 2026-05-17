/**
 * Global Grid Background and Premium Canvas
 * Inspired by Hydroflow and Apple aesthetic
 */

import React from 'react';

export const GridBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: '#EFEFED'
      }}
    >
      {/* 1. Subtle global grid lines (60px spacing, custom grid lines) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Subtle noise texture overlay for high-end feel */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' result='noise'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: '250px 250px'
        }}
      />

      {/* 3. Content sitting on top */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

