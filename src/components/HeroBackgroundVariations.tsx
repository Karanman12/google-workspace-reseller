/**
 * Premium Cinematic Hero Background - Variations
 * Choose the intensity and style that fits your brand
 */

import React from 'react';

// VARIATION 1: Ultra Subtle (Most minimal, barely noticeable glow)
export const HeroBackgroundSubtle: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#FAFBFC] via-[#FCFCFD] to-[#F9FAFB] overflow-hidden">
      {/* Minimal grid */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Very subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(26, 115, 232, 0.08) 0%, transparent 70%)`,
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

// VARIATION 2: Intense (Bold cinematic effect with stronger glows)
export const HeroBackgroundIntense: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#F5F7FA] via-[#F8F9FC] to-[#F2F4F8] overflow-hidden">
      {/* Visible grid */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Strong noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='400' height='400' fill='%23000' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Primary intense glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1200px] h-[1200px] opacity-50 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(26, 115, 232, 0.2) 0%, rgba(26, 115, 232, 0.08) 30%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      {/* Strong secondary glow */}
      <div
        className="absolute top-32 right-1/4 w-[1000px] h-[1000px] opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(100, 200, 255, 0.15) 0%, transparent 60%)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Warm accent */}
      <div
        className="absolute -top-1/4 left-1/4 w-[800px] h-[800px] opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(200, 220, 255, 0.12) 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      <div className="absolute inset-0 opacity-8 mix-blend-multiply pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)`
        }}
      />

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

// VARIATION 3: Warm (Accent with warm color tones)
export const HeroBackgroundWarm: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#FAF9F7] via-[#FCFBF9] to-[#F8F7F5] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Warm primary glow (orange-ish) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1000px] h-[1000px] opacity-35 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(255, 140, 50, 0.12) 0%, rgba(255, 100, 20, 0.04) 25%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Warm secondary */}
      <div
        className="absolute top-20 right-1/3 w-[800px] h-[800px] opacity-28 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(255, 180, 100, 0.1) 0%, transparent 60%)`,
          filter: 'blur(100px)',
        }}
      />

      <div className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)`
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-50/[0.01] pointer-events-none" />

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

// VARIATION 4: Cool (Blue and purple accents)
export const HeroBackgroundCool: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#F7F9FC] via-[#FAFBFE] to-[#F6F8FC] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Cool primary glow (purple-blue) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1000px] h-[1000px] opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(100, 120, 255, 0.15) 0%, rgba(100, 150, 255, 0.05) 25%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      {/* Purple accent */}
      <div
        className="absolute top-20 right-1/3 w-[800px] h-[800px] opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(150, 120, 255, 0.1) 0%, transparent 60%)`,
          filter: 'blur(100px)',
        }}
      />

      <div className="absolute inset-0 opacity-5 mix-blend-multiply pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)`
        }}
      />

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

// VARIATION 5: Energetic (Bright, vibrant)
export const HeroBackgroundEnergetic: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#FCFDFF] to-[#F9FBFF] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Bright energetic primary */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[1000px] h-[1000px] opacity-45 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(26, 115, 232, 0.18) 0%, rgba(26, 115, 232, 0.06) 30%, transparent 70%)`,
          filter: 'blur(70px)',
        }}
      />

      {/* Energetic secondary cyan */}
      <div
        className="absolute top-32 right-1/4 w-[900px] h-[900px] opacity-35 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(0, 200, 255, 0.12) 0%, transparent 60%)`,
          filter: 'blur(85px)',
        }}
      />

      {/* Energetic accent */}
      <div
        className="absolute -top-1/4 left-1/4 w-[700px] h-[700px] opacity-28 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(150, 200, 255, 0.1) 0%, transparent 70%)`,
          filter: 'blur(90px)',
        }}
      />

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

// USAGE GUIDE:
// Import the variation you want and wrap your hero content:
// 
// import { HeroBackgroundIntense } from './components/HeroBackgroundVariations';
// 
// <HeroBackgroundIntense>
//   <YourHeroContent />
// </HeroBackgroundIntense>

// Pick based on your brand personality:
// - HeroBackground: Perfect balance (default recommendation)
// - HeroBackgroundSubtle: Minimal, elegant, understated
// - HeroBackgroundIntense: Bold, strong presence, energetic
// - HeroBackgroundWarm: Friendly, approachable, welcoming
// - HeroBackgroundCool: Modern, tech-forward, professional
// - HeroBackgroundEnergetic: Vibrant, youthful, exciting
