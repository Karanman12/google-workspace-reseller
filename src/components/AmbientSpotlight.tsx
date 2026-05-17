/**
 * Cinematic Ambient Spotlight Glow
 * Soft gradient atmosphere with clean futuristic light-gray feel
 * Creates subtle premium lighting with minimal visual noise
 */

import React from 'react';

export const AmbientSpotlight: React.FC = () => {
  return (
    <>
      {/* Primary cinematic light source - soft ambient radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] opacity-50 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(250, 250, 250, 0.3) 20%,
            rgba(240, 240, 240, 0.15) 40%,
            rgba(230, 230, 230, 0.08) 60%,
            transparent 75%
          )`,
          filter: 'blur(100px)',
          animation: 'float-glow 14s ease-in-out infinite'
        }}
      />

      {/* Secondary subtle layer - clean gray tones */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-35 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center,
            rgba(245, 245, 245, 0.18) 0%,
            rgba(230, 230, 230, 0.10) 35%,
            transparent 70%
          )`,
          filter: 'blur(110px)',
          animation: 'float-glow 14s ease-in-out infinite 0.5s'
        }}
      />

      {/* Tertiary subtle glow for extra depth - minimal and clean */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-28 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center,
            rgba(235, 235, 235, 0.12) 0%,
            transparent 60%
          )`,
          filter: 'blur(95px)',
          animation: 'float-glow 16s ease-in-out infinite 1s'
        }}
      />

      {/* CSS Animations - smoother and subtler */}
      <style>{`
        @keyframes float-glow {
          0%, 100% {
            transform: translateY(0px) translateX(-50%);
          }
          25% {
            transform: translateY(-10px) translateX(-50%);
          }
          50% {
            transform: translateY(0px) translateX(-50%);
          }
          75% {
            transform: translateY(10px) translateX(-50%);
          }
        }

        @keyframes float-glow-subtle {
          0%, 100% {
            transform: scale(1) translateX(-50%);
          }
          50% {
            transform: scale(1.02) translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

// Alternative: Enhanced version with more dramatic effect
export const AmbientSpotlightIntense: React.FC = () => {
  return (
    <>
      {/* Main spotlight - more intense */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] opacity-50 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(200, 220, 255, 0.3) 25%,
            rgba(100, 180, 255, 0.12) 45%,
            transparent 75%
          )`,
          filter: 'blur(100px)',
          animation: 'float-glow-intense 7s ease-in-out infinite'
        }}
      />

      {/* Secondary layer */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center,
            rgba(220, 240, 255, 0.2) 0%,
            rgba(180, 210, 255, 0.1) 35%,
            transparent 70%
          )`,
          filter: 'blur(90px)',
          animation: 'float-glow-intense 9s ease-in-out infinite 0.3s'
        }}
      />

      <style>{`
        @keyframes float-glow-intense {
          0%, 100% {
            transform: translateY(0px) translateX(-50%);
          }
          33% {
            transform: translateY(-20px) translateX(-50%);
          }
          66% {
            transform: translateY(20px) translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

// Alternative: Subtle version for minimal look
export const AmbientSpotlightSubtle: React.FC = () => {
  return (
    <>
      {/* Very subtle glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(200, 220, 255, 0.08) 30%,
            transparent 70%
          )`,
          filter: 'blur(140px)',
          animation: 'float-glow-subtle 10s ease-in-out infinite'
        }}
      />

      <style>{`
        @keyframes float-glow-subtle {
          0%, 100% {
            transform: translateY(0px) translateX(-50%);
          }
          50% {
            transform: translateY(10px) translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

// USAGE:
// 
// Import and add to your hero section:
// import { AmbientSpotlight } from './components/AmbientSpotlight';
//
// <div className="relative">
//   <AmbientSpotlight />
//   {/* Your hero content here */}
// </div>
//
// Or use variations:
// <AmbientSpotlightIntense /> - More dramatic
// <AmbientSpotlightSubtle /> - Very minimal
