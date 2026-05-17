/**
 * Example: Using the Premium Cinematic Hero Background
 * 
 * This file shows how to integrate the HeroBackground component
 * with your existing hero content for a premium, cinematic look.
 */

// Option 1: Simple integration with your existing Hero component
import { HeroBackground } from './HeroBackground';

// Wrap your existing Hero section:
// <HeroBackground>
//   <Hero />
// </HeroBackground>

// Option 2: Full hero section with advanced features
export const AdvancedCinematicHero = () => {
  return (
    <HeroBackground>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Your hero content here */}
          </div>
        </div>
      </section>
    </HeroBackground>
  );
};

// Key Features of the Cinematic Background:
// ✨ Subtle grid pattern overlay (barely visible for depth)
// ✨ Primary radial glow centered at top
// ✨ Secondary ambient glow for depth
// ✨ Tertiary warm accent glow for warmth
// ✨ Vignette effect on edges
// ✨ Ultra-subtle noise texture (premium feel)
// ✨ Layered blur effects for cinematic quality
// ✨ Performance optimized (no animations by default)
// ✨ Light mode only (premium SaaS aesthetic)
// ✨ Fully responsive

// Optional: Add floating animation to glow elements
// Add the "hero-float" class to individual glow divs in HeroBackground.tsx:
// className="... hero-float"

// Customization Tips:
// 1. Adjust opacity values (currently 40%, 30%, 20%) to intensify/soften glows
// 2. Modify radial gradient colors for different brand colors
// 3. Change blur amounts (80px, 100px, 90px) for more/less soft effect
// 4. Adjust mix-blend-mode (currently "screen") for different lighting feels
// 5. Modify grid size (50px) for finer/coarser grid pattern

// Color Palette Reference:
// Primary Blue (Google): rgba(26, 115, 232, ...)
// Secondary Light Blue: rgba(100, 200, 255, ...)
// Tertiary Light: rgba(200, 220, 255, ...)
// Use these or substitute with your brand colors
