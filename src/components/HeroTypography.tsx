/**
 * Premium Hero Typography
 * Inspired by Hydroflow - cinematic, minimal, futuristic
 * Huge bold headings with smooth stagger animations
 */

import React from 'react';
import { motion } from 'motion/react';

interface HeroTypographyProps {
  badge?: string;
  headline: string;
  subheadline?: string | React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  startAnimation?: boolean;
}

export const HeroTypography: React.FC<HeroTypographyProps> = ({
  badge,
  headline,
  subheadline,
  description,
  children,
  startAnimation = true
}) => {
  // Cinematic staggering coordinate definitions
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      }
    }
  };

  const badgeVariants: any = {
    hidden: { opacity: 0, scale: 0.95, x: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        delay: 0.15,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const headlineVariants: any = {
    hidden: { x: '10vw', opacity: 0, filter: 'blur(8px)' },
    visible: {
      x: '0vw',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: 0.25,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const subheadlineVariants: any = {
    hidden: { x: '8vw', opacity: 0, filter: 'blur(6px)', scale: 0.98 },
    visible: {
      x: '0vw',
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const descriptionVariants: any = {
    hidden: { opacity: 0, x: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        delay: 0.45,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const childrenVariants: any = {
    hidden: { opacity: 0, x: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        delay: 0.55,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      className="text-center mx-auto max-w-5xl px-4 md:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={startAnimation ? "visible" : "hidden"}
    >
      {/* Badge */}
      {badge && (
        <motion.div variants={badgeVariants} className="mb-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-dark/[0.03] backdrop-blur-md border border-brand-dark/[0.08] text-brand-dark text-[11px] font-mono tracking-[0.2em] uppercase shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solar-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-solar-orange"></span>
            </span>
            <span>{badge}</span>
          </div>
        </motion.div>
      )}

      {/* Main Headline */}
      <div className="overflow-hidden py-1 mb-4">
        <motion.h1
          variants={headlineVariants}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem] font-extrabold text-[#111111] leading-[1.1] tracking-tight"
        >
          {headline}
        </motion.h1>
      </div>

      {/* Subheadline (Orange Highlight Text) */}
      {subheadline && (
        <div className="overflow-hidden py-1 mb-10">
          <motion.h2
            variants={subheadlineVariants}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-black bg-gradient-to-r from-[#E65A28] via-orange-500 to-[#E65A28] bg-clip-text text-transparent leading-[1.1] tracking-tight"
            style={{
              textShadow: '0 0 40px rgba(230, 90, 40, 0.15)'
            }}
          >
            {subheadline}
          </motion.h2>
        </div>
      )}

      {/* Description */}
      {description && (
        <motion.p
          variants={descriptionVariants}
          className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-16 font-light"
        >
          {description}
        </motion.p>
      )}

      {/* Children (buttons, etc.) */}
      {children && (
        <motion.div variants={childrenVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

// Alternative: With split heading (multiple lines animated separately)
export const HeroTypographySplit: React.FC<{
  badge?: string;
  headlineLines: string[];
  description?: string;
  children?: React.ReactNode;
}> = ({
  badge,
  headlineLines,
  description,
  children
}) => {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      }
    }
  };

  const lineVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      className="text-center mx-auto max-w-4xl px-4 md:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {badge && (
        <motion.div variants={lineVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-dark text-brand-dark text-xs font-mono tracking-[0.2em] uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-solar-orange" />
            {badge.toUpperCase()}
          </div>
        </motion.div>
      )}

      {/* Headline lines */}
      <div className="mb-8">
        {headlineLines.map((line, index) => (
          <motion.div
            key={index}
            variants={lineVariants}
            className="overflow-hidden"
          >
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold text-brand-dark leading-[0.95] tracking-[0.02em] uppercase">
              {line}
            </h1>
          </motion.div>
        ))}
      </div>

      {description && (
        <motion.p
          variants={lineVariants}
          className="text-brand-dark/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-normal font-sans"
        >
          {description}
        </motion.p>
      )}

      {children && (
        <motion.div variants={lineVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

// Minimal variation - ultra clean
export const HeroTypographyMinimal: React.FC<{
  headline: string;
  description?: string;
  children?: React.ReactNode;
}> = ({
  headline,
  description,
  children
}) => {
  return (
    <motion.div
      className="text-center mx-auto max-w-4xl px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold text-navy leading-[1.0] mb-8 tracking-tight">
        {headline}
      </h1>

      {description && (
        <p className="text-gray-600 text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          {description}
        </p>
      )}

      {children}
    </motion.div>
  );
};

// USAGE EXAMPLES:
//
// 1. Basic usage:
// <HeroTypography
//   badge="GOOGLE WORKSPACE RESELLER"
//   headline="Google Workspace for Growing Companies"
//   description="Premium Gmail, Drive, Meet & more"
// >
//   <YourButtons />
// </HeroTypography>
//
// 2. With split lines (each line animates separately):
// <HeroTypographySplit
//   headlineLines={["Google Workspace", "for Growing", "Companies"]}
//   description="..."
// >
//   <YourButtons />
// </HeroTypographySplit>
//
// 3. Minimal style:
// <HeroTypographyMinimal
//   headline="Google Workspace"
//   description="..."
// >
//   <YourButtons />
// </HeroTypographyMinimal>
