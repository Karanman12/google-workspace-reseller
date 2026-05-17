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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const headlineVariants = {
    hidden: { y: '100%', opacity: 0, filter: 'blur(8px)' },
    visible: {
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.0,
        delay: 0.45,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const subheadlineVariants = {
    hidden: { y: '80%', opacity: 0, filter: 'blur(6px)', scale: 0.98 },
    visible: {
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 1.0,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: 0.9,
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-50 border border-blue-100 text-google-blue text-xs font-bold tracking-widest uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse" />
            {badge}
          </div>
        </motion.div>
      )}

      {/* Main Headline */}
      <div className="overflow-hidden py-1 mb-2">
        <motion.h1
          variants={headlineVariants}
          className="font-display text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] font-extrabold text-[#111111] leading-[1.05] tracking-tight"
        >
          {headline}
        </motion.h1>
      </div>

      {/* Subheadline (Orange Highlight Text) */}
      {subheadline && (
        <div className="overflow-hidden py-1 mb-12">
          <motion.h2
            variants={subheadlineVariants}
            className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-black bg-gradient-to-r from-[#E65A28] via-orange-500 to-[#E65A28] bg-clip-text text-transparent leading-[1.1] tracking-tight"
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      }
    }
  };

  const lineVariants = {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-google-blue text-xs font-bold tracking-widest uppercase">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue animate-pulse" />
            {badge}
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
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold text-navy leading-[1.05] tracking-tight">
              {line}
            </h1>
          </motion.div>
        ))}
      </div>

      {description && (
        <motion.p
          variants={lineVariants}
          className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-10 font-light"
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
