/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Users, 
  Mail, 
  HardDrive, 
  Video, 
  FileText, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Wallet, 
  MessageCircle, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  ArrowRight,
  Star,
  Quote,
  Smartphone,
  CreditCard,
  Zap,
  Loader2
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from './lib/firebase';
import { GridBackground } from './components/GridBackground';
import { AmbientSpotlight } from './components/AmbientSpotlight';
import { HeroTypography } from './components/HeroTypography';
import { FloatingDashboard } from './components/FloatingDashboard';
import { HeroBackground } from './components/HeroBackground';

// --- Error Handling ---

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// --- Components ---

const Navbar = ({ startAnimation = true }: { startAnimation?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['Pricing', 'Features', 'Why Us', 'Contact'];

  return (
    <motion.div
      initial={{ opacity: 0, y: -60, filter: 'blur(8px)' }}
      animate={startAnimation ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: -60, filter: 'blur(8px)' }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 pointer-events-none"
    >
      {/* Floating pill navbar - Desktop */}
      <motion.nav
        className="hidden md:flex items-center justify-between pointer-events-auto transition-all duration-300"
        style={{
          position: 'fixed',
          top: '16px',
          left: '120px',
          right: '120px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '6px 6px 6px 20px',
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: 'none',
          zIndex: 1000,
        }}
      >
        <div className="flex items-center gap-4 flex-shrink-0">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] hover:bg-black/[0.02] transition-all group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex gap-1">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-google-blue" whileHover={{ scale: 1.2 }} />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-google-red" whileHover={{ scale: 1.2 }} />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-google-yellow" whileHover={{ scale: 1.2 }} />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-google-green" whileHover={{ scale: 1.2 }} />
            </div>
            <span className="font-display font-bold text-[15px] tracking-tight text-[#1D1D1F] hidden sm:inline">
              Workspace<span className="text-[#E65A28]">Bay</span>
            </span>
          </motion.button>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex items-center" style={{ gap: '40px' }}>
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  const id = item.toLowerCase().replace(' ', '-');
                  setActiveNav(id);
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[15px] font-medium tracking-wide px-4 py-2 rounded-lg text-navy/70 relative transition-all"
                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.025)', color: '#E65A28' }}
                animate={{
                  backgroundColor: activeNav === item.toLowerCase().replace(' ', '-') 
                    ? 'rgba(0, 0, 0, 0.035)' 
                    : 'transparent',
                  color: activeNav === item.toLowerCase().replace(' ', '-') 
                    ? '#E65A28' 
                    : 'rgba(29, 29, 31, 0.7)'
                }}
              >
                <span className="relative z-10">{item}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <motion.button
            onClick={scrollToContact}
            className="font-display font-medium text-[15px] text-white bg-[#E65A28] hover:bg-[#D54B1A] transition-all relative overflow-hidden group shadow-[0_1px_2px_rgba(230,90,40,0.15)] cursor-pointer flex items-center justify-center"
            style={{
              padding: '6px 16px',
              borderRadius: '8px',
              color: '#FFFFFF',
              backgroundColor: '#E65A28',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative">Setup</span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile navbar pill */}
      <motion.div 
        className="md:hidden flex items-center justify-between pointer-events-auto"
        style={{
          position: 'fixed',
          top: '16px',
          left: '24px',
          right: '24px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          padding: '10px 10px 10px 24px',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: 'none',
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 flex-1"
        >
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-google-blue" />
            <div className="w-2 h-2 rounded-full bg-google-red" />
            <div className="w-2 h-2 rounded-full bg-google-yellow" />
            <div className="w-2 h-2 rounded-full bg-google-green" />
          </div>
          <span className="font-display font-bold text-xs tracking-tight text-navy">
            Workspace<span className="text-[#E65A28]">Bay</span>
          </span>
        </button>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-navy p-1 ml-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu - Floating */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="md:hidden overflow-hidden pointer-events-auto"
            style={{
              position: 'fixed',
              top: '78px',
              left: '24px',
              right: '24px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0, 0, 0, 0.04)',
              zIndex: 999
            }}
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const id = item.toLowerCase().replace(' ', '-');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-sm font-medium px-4 py-2 rounded-lg text-navy/70 hover:bg-white/10 hover:text-[#E65A28] transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                onClick={scrollToContact}
                className="w-full mt-2 py-2.5 px-4 rounded-lg font-display font-semibold text-sm text-white bg-[#E65A28] hover:bg-[#D54B1A] hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Setup
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Typewriter = () => {
  const words = ['Growing Companies', 'Your Startup', 'Your Team', 'Your Business'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-[#E65A28]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = ({ startAnimation = true }: { startAnimation?: boolean }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <HeroBackground>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center min-h-[80vh] justify-center">
            <HeroTypography
              badge="GOOGLE WORKSPACE RESELLER"
              headline="Google Workspace for"
              subheadline={<Typewriter />}
              description="Premium Gmail, Drive, Meet & more — at the best prices in India. INR billing, official invoice, setup in 24 hours."
              startAnimation={startAnimation}
            >
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={startAnimation ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
                transition={{ duration: 0.65, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <a 
                  href="https://wa.me/919654387865?text=Hi%2C%20I%20came%20from%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#E65A28] text-white px-8 py-4 rounded-xl font-display font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#E65A28]/10 transition-all group"
                >
                  <MessageCircle size={20} />
                  WhatsApp (Fastest Response)
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto bg-white text-[#E65A28] border-2 border-[#E65A28]/10 px-8 py-4 rounded-xl font-display font-bold text-lg hover:bg-[#E65A28]/0.03 transition-all"
                >
                  View Pricing Plans
                </button>
              </motion.div>

              <motion.div 
                className="flex flex-wrap justify-center gap-8"
                initial="hidden"
                animate={startAnimation ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.7
                    }
                  }
                }}
              >
                {[
                  { icon: CheckCircle2, text: 'Genuine Licenses' },
                  { icon: Wallet, text: 'INR Billing' },
                  { icon: Zap, text: '24hr Setup' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 15, filter: 'blur(2px)' },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        filter: 'blur(0px)',
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                      }
                    }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <item.icon size={18} className="text-google-green" />
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </HeroTypography>
          </div>
          
          {/* Floating Dashboard Mockup - Positioned below the main content */}
          <div className="mt-16">
            <FloatingDashboard startAnimation={startAnimation} />
          </div>
        </div>
      </HeroBackground>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: 'Official Partner', label: 'Authorized Google Workspace reseller in India.' },
    { value: 'Instant INR Billing', label: 'Save 30% with GST invoices and UPI/NEFT options.' },
    { value: '24-Hour Setup', label: 'Guaranteed rapid domain deployment and migration.' },
    { value: 'Priority Support', label: 'Direct, personal human help via WhatsApp and email.' }
  ];

  return (
    <section 
      className="relative py-28 md:py-36 overflow-hidden text-white"
      style={{
        background: '#161616'
      }}
    >
      {/* 1. Subtle local white grid lines to maintain seamless grid continuity in the dark section */}
      <div 
        className="absolute inset-0 opacity-[0.22] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Editorial Heading / Welcome */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold text-[#E65A28] uppercase tracking-[0.25em] mb-4"
          >
            Authorized Partner
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-6"
          >
            The premium standard for business collaboration.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#FAF9F6]/60 font-medium leading-relaxed"
          >
            We deploy fully-managed, high-performance Google Workspace setups optimized for Indian enterprises. Genuine licenses, absolute security, and zero complexity.
          </motion.p>
        </div>

        {/* Minimalist Spaced Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-10 border-t border-white/[0.06]">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h3 className="font-display font-bold text-lg text-[#FAF9F6] mb-2 tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E65A28]" />
                {stat.value}
              </h3>
              <p className="text-[#FAF9F6]/60 text-[13px] font-medium leading-relaxed max-w-[240px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: Mail, title: 'Professional Gmail', desc: 'Get yourname@yourcompany.com — professional email that builds trust.', color: 'text-google-red', bg: 'bg-google-red/10' },
    { icon: HardDrive, title: 'Google Drive 2TB+', desc: 'Secure cloud storage. Access files from any device. Share and collaborate.', color: 'text-google-green', bg: 'bg-google-green/10' },
    { icon: Video, title: 'Google Meet HD', desc: 'Crystal-clear video calls with up to 500 participants and recording.', color: 'text-[#111111]', bg: 'bg-[#E8E8E6]' },
    { icon: FileText, title: 'Docs, Sheets, Slides', desc: 'Create, edit and collaborate on documents in real time. Full office compatibility.', color: 'text-google-yellow', bg: 'bg-google-yellow/10' },
    { icon: ShieldCheck, title: 'Admin Control Panel', desc: 'Full admin console to manage users, security policies, and permissions.', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Calendar, title: 'Google Calendar', desc: 'Shared calendars, smart scheduling, and one-click Meet integration.', color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  return (
    <section id="features" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#EA580C] uppercase tracking-widest mb-3">What's Included</h2>
            <h3 className="font-display text-3xl md:text-5xl font-extrabold text-navy mb-6">Everything your team needs to work smarter</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">The full Google Workspace suite — professional email, cloud storage, video calls, and collaborative documents.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-100 hover:border-google-blue/20 transition-all duration-300 bg-[#FBFBFE]"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon size={28} />
              </div>
              <h4 className="font-display font-bold text-xl text-navy mb-3">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Business Starter',
      price: '₹200',
      tagline: 'Perfect for small teams getting started',
      features: [
        'Professional Gmail (your domain)',
        'Google Drive — 30GB/user',
        'Google Meet — 100 participants',
        'Docs, Sheets, Slides',
        'Admin control panel',
        'INR Billing + Official Invoice'
      ]
    },
    {
      name: 'Business Standard',
      price: '₹250',
      tagline: 'Ideal for growing businesses',
      popular: true,
      features: [
        'Everything in Starter',
        'Google Drive — 2TB/user',
        'Meet recording + transcription',
        'Google Meet — 150 participants',
        'Noise cancellation in Meet',
        'Shared drives for teams'
      ]
    },
    {
      name: 'Business Plus',
      price: '₹300',
      tagline: 'For enterprises needing advanced features',
      features: [
        'Everything in Standard',
        'Google Drive — 5TB/user',
        'Vault archiving & eDiscovery',
        'Google Meet — 500 participants',
        'Advanced audit & reporting',
        'Enhanced support SLA'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#EA580C] uppercase tracking-widest mb-3">Simple Pricing</h2>
            <h3 className="font-display text-3xl md:text-5xl font-extrabold text-navy mb-6">
              Transparent pricing, no hidden fees 
              <span className="ml-4 inline-block bg-google-yellow text-navy px-3 py-1 rounded-full text-xs font-bold align-middle">Save up to 30%</span>
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">All plans include INR billing and dedicated WhatsApp support.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative p-10 rounded-2xl bg-white border ${
                plan.popular ? 'border-[#111111] shadow-2xl scale-105 z-10' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#111111] text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> MOST POPULAR
                </div>
              )}
              <h4 className="font-display font-bold text-xl text-navy mb-2">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-4xl font-extrabold text-[#111111]">{plan.price}</span>
                <span className="text-gray-400 text-sm">/user/month</span>
              </div>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{plan.tagline}</p>
              
              <div className="h-px bg-gray-100 w-full mb-8" />
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={18} className="text-google-green shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-xl font-display font-bold transition-all ${
                plan.popular 
                ? 'bg-[#111111] text-white hover:bg-black' 
                : 'bg-white text-[#111111] border-2 border-[#111111]/10 hover:bg-gray-50'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    { title: 'Save 30% vs Direct Google', desc: 'Get the same genuine licenses at significantly lower rates than buying direct.', icon: Wallet, color: 'text-[#111111]', bg: 'bg-[#E8E8E6]' },
    { title: 'INR Billing', desc: 'Pay in Indian Rupees via UPI, NEFT, or bank transfer. Official invoice issued instantly.', icon: CreditCard, color: 'text-green-600', bg: 'bg-green-50' },
    { title: '24-Hour Activation Guarantee', desc: 'Once payment is confirmed, your team is ready within 24 hours.', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { title: 'Dedicated WhatsApp Support', desc: 'Direct WhatsApp access to your account manager for any help.', icon: MessageCircle, color: 'text-red-500', bg: 'bg-red-50' }
  ];

  return (
    <section id="why-us" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#EA580C] uppercase tracking-widest mb-3">Why Choose Us</h2>
            <h3 className="font-display text-3xl md:text-5xl font-extrabold text-navy">The smartest way to get Google Workspace in India</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 p-8 rounded-2xl border border-gray-50 bg-[#FBFBFE] hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 rounded-2xl ${reason.bg} ${reason.color} flex items-center justify-center shrink-0`}>
                <reason.icon size={28} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-navy mb-2">{reason.title}</h4>
                <p className="text-gray-500 leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: 'Choose Your Plan', desc: 'Select the plan that fits your team size and features you need.' },
    { title: 'Pay Securely', desc: 'Pay via UPI, NEFT, or bank transfer in INR. Receive your invoice immediately.' },
    { title: 'Get Your Workspace', desc: 'Receive your logins within 24 hours. We handle the complete setup.' }
  ];

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#EA580C] uppercase tracking-widest mb-3">How It Works</h2>
            <h3 className="font-display text-3xl md:text-5xl font-extrabold text-navy">Up and running in 3 simple steps</h3>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gray-200" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 text-center relative z-10"
            >
              <div className="w-20 h-20 rounded-full bg-[#111111] text-white font-display font-extrabold text-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-black/20 ring-8 ring-[#EFEFED]">
                {i + 1}
              </div>
              <h4 className="font-display font-bold text-xl text-navy mb-4">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Commitment = () => {
  const points = [
    { icon: Quote, title: 'Transparency First', desc: 'Full clarity on pricing with no hidden costs or surprise renewals.', color: 'text-[#111111]', bg: 'bg-[#E8E8E6]' },
    { icon: Users, title: 'Personalized Support', desc: 'Direct access to a dedicated human expert for setup and ongoing queries.', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: ShieldCheck, title: 'Security & Privacy', desc: 'We ensure your workspace is configured with Google\'s best-practice security.', color: 'text-yellow-600', bg: 'bg-yellow-50' }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#EA580C] uppercase tracking-widest mb-3">Our Commitment</h2>
            <h3 className="font-display text-3xl md:text-5xl font-extrabold text-navy mb-6">Our Commitment to You</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">"Starting your Google Workspace journey with a partner who cares about your growth."</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-gray-100 bg-[#FBFBFE] text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${point.bg} ${point.color} flex items-center justify-center mx-auto mb-6`}>
                <point.icon size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-navy mb-3">{point.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    numUsers: '',
    planInterest: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const requestsRef = collection(db, 'requests');
      await addDoc(requestsRef, {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        numUsers: '',
        planInterest: ''
      });
    } catch (error) {
      setStatus('error');
      try {
        handleFirestoreError(error, OperationType.WRITE, 'requests');
      } catch (innerError) {
        // Error already logged and re-thrown
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-[#EA580C] uppercase tracking-widest mb-3">Get In Touch</h2>
            <h3 className="font-display text-3xl md:text-5xl font-extrabold text-navy mb-6">Request a Custom Quote</h3>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              We respond within 2 hours on business days. Tell us your team size and we'll help you start your setup immediately.
            </p>

              <div className="space-y-6">
                {[
                  { 
                    icon: MessageCircle, 
                    label: 'WhatsApp Us', 
                    value: '+91 96543 87865 — Fastest Response', 
                    color: 'text-green-600', 
                    bg: 'bg-green-50',
                    link: 'https://wa.me/919654387865?text=Hi%2C%20I%20came%20from%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.'
                  },
                  { 
                    icon: Mail, 
                    label: 'Email Us', 
                    value: 'karanmandal9654@gmail.com', 
                    color: 'text-[#111111]', 
                    bg: 'bg-[#E8E8E6]',
                    link: 'mailto:karanmandal9654@gmail.com'
                  },
                  { icon: Clock, label: 'Business Hours', value: 'Mon–Sat, 9 AM – 8 PM IST', color: 'text-orange-600', bg: 'bg-orange-50' }
                ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link} 
                  target={item.link?.startsWith('http') ? "_blank" : undefined}
                  rel={item.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-6 p-4 bg-white rounded-xl border border-gray-100 shadow-sm group transition-colors ${item.link ? 'cursor-pointer hover:border-[#EA580C]' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-full ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase">{item.label}</div>
                    <div className="text-sm font-bold text-navy">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h4 className="font-display font-bold text-2xl text-navy mb-8">Start Your Setup</h4>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-google-green/10 text-google-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h5 className="font-display font-bold text-2xl text-navy mb-2">Request Received!</h5>
                <p className="text-gray-500 mb-8">Our team will get back to you within 2 hours. Keep an eye on your email.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-google-blue font-bold hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-google-blue focus:ring-4 focus:ring-google-blue/5 outline-none transition-all placeholder:text-gray-300" 
                      placeholder="Ravi Kumar" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Business Name</label>
                    <input 
                      type="text" 
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-google-blue focus:ring-4 focus:ring-google-blue/5 outline-none transition-all placeholder:text-gray-300" 
                      placeholder="Acme Pvt Ltd" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-google-blue focus:ring-4 focus:ring-google-blue/5 outline-none transition-all placeholder:text-gray-300" 
                      placeholder="ravi@company.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Phone</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-google-blue focus:ring-4 focus:ring-google-blue/5 outline-none transition-all placeholder:text-gray-300" 
                      placeholder="+91 96543 87865" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Number of Users</label>
                  <select 
                    name="numUsers"
                    value={formData.numUsers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-google-blue focus:ring-4 focus:ring-google-blue/5 outline-none transition-all"
                  >
                    <option value="">Select team size</option>
                    <option value="1–5 users">1–5 users</option>
                    <option value="6–10 users">6–10 users</option>
                    <option value="11–25 users">11–25 users</option>
                    <option value="26–50 users">26–50 users</option>
                    <option value="50+ users">50+ users</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Plan Interest</label>
                  <select 
                    name="planInterest"
                    value={formData.planInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-google-blue focus:ring-4 focus:ring-google-blue/5 outline-none transition-all"
                  >
                    <option value="">Select a plan</option>
                    <option value="Business Starter">Business Starter — ₹200/user</option>
                    <option value="Business Standard">Business Standard — ₹250/user</option>
                    <option value="Business Plus">Business Plus — ₹300/user</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                
                {status === 'error' && (
                  <p className="text-google-red text-sm font-bold text-center">Something went wrong. Please try again or message us on WhatsApp.</p>
                )}

                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-google-blue text-white rounded-xl font-display font-bold text-lg hover:bg-navy hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    'Start My Setup →'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer 
      className="text-white pt-20 pb-10"
      style={{
        background: '#161616'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-google-blue" />
                <div className="w-2 h-2 rounded-full bg-google-red" />
                <div className="w-2 h-2 rounded-full bg-google-yellow" />
                <div className="w-2 h-2 rounded-full bg-google-green" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Workspace<span className="text-google-blue">Bay</span>
              </span>
            </div>
            <p className="text-white/50 text-sm max-w-xs font-medium uppercase tracking-widest">Google Workspace Reseller</p>
          </div>
          <div className="flex gap-10">
            {['Pricing', 'Features', 'Why Us', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold hover:text-google-blue transition-colors">{link}</a>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-white/30 text-xs font-medium">
            © {new Date().getFullYear()} WorkspaceBay. All rights reserved. <br className="md:hidden" />
            Google Workspace™ is a trademark of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isLoadingIntro, setIsLoadingIntro] = useState(true);
  const [startHomepageAnimation, setStartHomepageAnimation] = useState(false);

  useEffect(() => {
    // Force manual scroll restoration and scroll to top on fresh mount
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (isLoadingIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoadingIntro]);

  useEffect(() => {
    // Solid loading screen hold duration
    const timer = setTimeout(() => {
      setIsLoadingIntro(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleIntroExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    setStartHomepageAnimation(true); // Triggers fresh homepage reveal ONLY after the overlay exit completes!
  };

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={handleIntroExitComplete}>
        {isLoadingIntro && (
          <motion.div
            key="intro-loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: 'blur(15px)',
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
            }}
            className="fixed inset-0 z-[999999] bg-[#E4E4E4] flex flex-col items-center justify-center pointer-events-auto"
            style={{ height: '100vh', width: '100vw' }}
          >
            {/* Elegant moving grid pattern lines to maintain visual theme */}
            <div className="absolute inset-0 pointer-events-none z-0 hero-grid opacity-80" />

            {/* Glowing background spotlight behind the text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute pointer-events-none mix-blend-multiply w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(230, 90, 40, 0.06) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
            />

            {/* Centered Text Wrapper */}
            <div className="relative overflow-hidden px-10 py-6">
              <motion.div
                initial={{ y: '100%', opacity: 0, filter: 'blur(12px)' }}
                animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4"
              >
                {/* 4 dots brand logo visual */}
                <div className="flex gap-1.5 flex-shrink-0">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-2.5 h-2.5 rounded-full bg-google-blue" 
                  />
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-2.5 h-2.5 rounded-full bg-google-red" 
                  />
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-2.5 h-2.5 rounded-full bg-google-yellow" 
                  />
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.55, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-2.5 h-2.5 rounded-full bg-google-green" 
                  />
                </div>

                <span 
                  className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#1D1D1F]"
                  style={{
                    letterSpacing: '-0.03em',
                    fontWeight: 900
                  }}
                >
                  Workspace<span className="text-[#E65A28]">Bay</span>
                </span>
              </motion.div>
            </div>
            
            {/* Tiny refined bottom progress bar indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-black/[0.04] rounded-full overflow-hidden">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '0%' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-[#E65A28] rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        animate={startHomepageAnimation ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ 
          visibility: startHomepageAnimation ? 'visible' : 'hidden',
          pointerEvents: startHomepageAnimation ? 'auto' : 'none'
        }}
        className="min-h-screen bg-transparent"
      >
        <Navbar startAnimation={startHomepageAnimation} />
        <GridBackground>
          <main>
            <Hero startAnimation={startHomepageAnimation} />
            <Stats />
            <Features />
            <Pricing />
            <WhyUs />
            <HowItWorks />
            <Commitment />
            <Contact />
          </main>
        </GridBackground>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/919654387865?text=Hi%2C%20I%20came%20from%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-shadow"
        >
          <MessageCircle size={32} />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-google-red rounded-full flex items-center justify-center text-[10px] font-bold animate-bounce shadow-lg">1</div>
        </motion.a>
      </motion.div>
    </>
  );
}
