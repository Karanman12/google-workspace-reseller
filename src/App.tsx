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
          top: '2.5vh',
          left: '10%',
          width: '80%',
          height: '56px',
          backgroundColor: '#F6F6F6',
          backdropFilter: 'blur(2px)',
          borderRadius: '10px',
          padding: '0 8px 0 24px',
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: 'none',
          boxShadow: 'none',
          zIndex: 1000,
        }}
      >
        <div className="flex items-center gap-4 flex-shrink-0">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 rounded-[10px] hover:bg-black/[0.02] transition-all group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex gap-1">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-google-blue" />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-google-red" />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-google-yellow" />
              <motion.div className="w-1.5 h-1.5 rounded-full bg-google-green" />
            </div>
            <span className="font-display font-extrabold text-[15px] tracking-tight text-[#1B1B1B] uppercase">
              Workspace<span className="text-[#FF7120]">Bays</span>
            </span>
          </motion.button>
        </div>

        {/* Center Links perfectly aligned inside the viewport */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6">
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
              className="text-[13px] font-mono tracking-wider px-3 py-1.5 text-brand-dark transition-all cursor-pointer hover:opacity-50"
              animate={{
                color: activeNav === item.toLowerCase().replace(' ', '-') 
                  ? '#FF7120' 
                  : '#1B1B1B'
              }}
            >
              <span>{item.toUpperCase()}</span>
            </motion.a>
          ))}
        </div>

        <div className="flex-shrink-0">
          <motion.button
            onClick={scrollToContact}
            className="font-mono font-bold text-[13px] bg-solar-orange text-brand-dark border border-solar-orange hover:bg-transparent transition-all duration-300 cursor-pointer flex items-center justify-center h-[40px] px-6 rounded-[10px]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>SETUP</span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile navbar pill */}
      <motion.div 
        className="md:hidden flex items-center justify-between pointer-events-auto"
        style={{
          position: 'fixed',
          top: '5vw',
          left: '10%',
          width: '80%',
          height: '48px',
          backgroundColor: '#F6F6F6',
          borderRadius: '10px',
          padding: '8px 12px 8px 16px',
          border: 'none',
          boxShadow: 'none',
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 flex-1"
        >
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-google-blue" />
            <div className="w-1.5 h-1.5 rounded-full bg-google-red" />
            <div className="w-1.5 h-1.5 rounded-full bg-google-yellow" />
            <div className="w-1.5 h-1.5 rounded-full bg-google-green" />
          </div>
          <span className="font-display font-extrabold text-xs tracking-tight text-brand-dark uppercase">
            Workspace<span className="text-[#FF7120]">Bays</span>
          </span>
        </button>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-brand-dark p-1 ml-auto cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
  const words = ['Growing Companies', 'Indian Enterprises', 'Startups', 'Remote Teams'];
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
              badge="GOOGLE & ZOHO WORKSPACE PARTNER"
              headline="Your Harbor for Cloud Workspace."
              subheadline={<Typewriter />}
              description="Premium Google Workspace & Zoho Workplace — INR billing, official invoice, setup in 24 hours."
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
                  className="w-full sm:w-auto btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
                >
                  <MessageCircle size={20} />
                  WHATSAPP (FASTEST RESPONSE)
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer"
                >
                  VIEW PRICING PLANS
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
    { value: 'Official Partner', label: 'Authorized Google Workspace & Zoho partner in India.' },
    { value: 'Instant INR Billing', label: 'Save 30% with official business invoices and UPI/NEFT options.' },
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
            AUTHORIZED PARTNER
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-6"
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
            We deploy fully-managed Google Workspace and Zoho Workplace setups optimized for Indian enterprises. Genuine licenses, absolute security, and zero complexity.
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
    { icon: Mail, title: 'Professional Email', desc: 'Get yourname@yourcompany.com — professional email that builds trust.', color: 'text-google-red', bg: 'bg-google-red/10' },
    { icon: HardDrive, title: 'Cloud Storage 2TB+', desc: 'Secure cloud storage. Access files from any device. Share and collaborate.', color: 'text-google-green', bg: 'bg-google-green/10' },
    { icon: Video, title: 'Video Conferencing HD', desc: 'Crystal-clear video calls with up to 500 participants and recording.', color: 'text-[#111111]', bg: 'bg-[#E8E8E6]' },
    { icon: FileText, title: 'Docs, Sheets & Slides', desc: 'Create, edit and collaborate on documents in real time. Full office compatibility.', color: 'text-google-yellow', bg: 'bg-google-yellow/10' },
    { icon: ShieldCheck, title: 'Admin Control Panel', desc: 'Full admin console to manage users, security policies, and permissions.', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Calendar, title: 'Shared Calendar', desc: 'Shared calendars, smart scheduling, and one-click video meeting integration.', color: 'text-orange-600', bg: 'bg-orange-50' }
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
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">WHAT'S INCLUDED</h2>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Everything your team needs to work smarter</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">The full Google Workspace & Zoho Workplace suite — professional email, cloud storage, video calls, and collaborative documents.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              className="p-8 card-concrete-glass"
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
  const [activeTab, setActiveTab] = useState<'google' | 'zoho'>('google');

  const googlePlans = [
    {
      name: 'Starter',
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
      name: 'Standard',
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
      name: 'Plus',
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

  const zohoPlans = [
    {
      name: 'Starter',
      price: '₹200',
      tagline: 'Perfect for small teams getting started',
      features: [
        'Professional Mail (your domain)',
        'Zoho WorkDrive — 10GB/user',
        'Zoho Meeting — 100 participants',
        'Writer, Sheet, Show (Docs)',
        'Admin control panel',
        'INR Billing + Official Invoice'
      ]
    },
    {
      name: 'Standard',
      price: '₹250',
      tagline: 'Ideal for growing businesses',
      popular: true,
      features: [
        'Everything in Starter',
        'Zoho WorkDrive — 100GB/user',
        'Meeting recording + webinars',
        'Zoho Meeting — 250 participants',
        'Secure business chat (Cliq)',
        'Shared work drives'
      ]
    },
    {
      name: 'Plus',
      price: '₹300',
      tagline: 'For enterprises needing advanced features',
      features: [
        'Everything in Standard',
        'Zoho WorkDrive — 1TB/user',
        'Advanced email retention & eDiscovery',
        'Zoho Meeting — 1000 participants',
        'Advanced custom branding',
        'Priority Zoho Support SLA'
      ]
    }
  ];

  const plans = activeTab === 'google' ? googlePlans : zohoPlans;

  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">PRICING</h2>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
              Transparent pricing, no hidden fees 
              <span className="ml-4 inline-block bg-white border border-brand-dark text-brand-dark px-3 py-1 rounded-full text-xs font-mono font-bold align-middle">SAVE UP TO 30%</span>
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">All plans include INR billing and dedicated WhatsApp support.</p>
          </motion.div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#F6F6F6] border border-brand-dark/10 rounded-[10px]">
            <button
              onClick={() => setActiveTab('google')}
              className={`px-6 py-2.5 rounded-[8px] text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeTab === 'google'
                  ? 'bg-[#1B1B1B] text-white shadow-sm'
                  : 'text-[#1B1B1B]/60 hover:text-[#1B1B1B]'
              }`}
            >
              Google Workspace
            </button>
            <button
              onClick={() => setActiveTab('zoho')}
              className={`px-6 py-2.5 rounded-[8px] text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                activeTab === 'zoho'
                  ? 'bg-[#1B1B1B] text-white shadow-sm'
                  : 'text-[#1B1B1B]/60 hover:text-[#1B1B1B]'
              }`}
            >
              Zoho Workplace
            </button>
          </div>
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`relative p-10 ${
                plan.popular 
                  ? 'card-flat-brutalist border-2 border-brand-dark scale-105 z-10' 
                  : 'card-concrete-glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-dark text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5">
                  <Star size={12} fill="currentColor" className="text-solar-orange" /> MOST POPULAR
                </div>
              )}
              <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-4xl font-extrabold text-brand-dark">{plan.price}</span>
                <span className="text-brand-dark/50 font-mono text-xs">/user/month</span>
              </div>
              <p className="text-brand-dark/60 text-sm mb-8 leading-relaxed font-sans">{plan.tagline}</p>
              
              <div className="h-px bg-brand-dark/10 w-full mb-8" />
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-brand-dark/70 font-sans">
                    <CheckCircle2 size={18} className="text-google-green shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 text-base cursor-pointer font-bold ${
                  plan.popular ? 'btn-solar-dark' : 'btn-solar-orange'
                }`}
              >
                GET STARTED
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    { title: 'Save 30% vs Direct', desc: 'Get the same genuine licenses at significantly lower rates than buying direct.', icon: Wallet, color: 'text-[#111111]', bg: 'bg-[#E8E8E6]' },
    { title: 'INR Billing', desc: 'Pay in Indian Rupees via UPI, NEFT, or bank transfer. Official invoice issued instantly.', icon: CreditCard, color: 'text-green-600', bg: 'bg-green-50' },
    { title: '24-Hour Activation', desc: 'Once payment is confirmed, your team is ready within 24 hours.', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50' },
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
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">WHY CHOOSE US</h2>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark tracking-tight leading-tight">The smartest way to get Google & Zoho in India</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-6 p-8 card-concrete-glass"
            >
              <div className="w-16 h-16 rounded-xl border border-brand-dark flex items-center justify-center shrink-0 bg-white text-solar-orange">
                <reason.icon size={28} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">{reason.title}</h4>
                <p className="text-brand-dark/70 leading-relaxed font-sans">{reason.desc}</p>
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
    { title: 'Choose Your Plan', desc: 'Select Google Workspace or Zoho Workplace and the plan that fits your team.' },
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
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">HOW IT WORKS</h2>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark tracking-tight leading-tight">Up and running in 3 simple steps</h3>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
          <div className="hidden md:block absolute top-[32px] left-[15%] right-[15%] h-[1px] bg-brand-dark/20" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 text-center relative z-10"
            >
              <div className="w-16 h-16 rounded-full bg-brand-dark text-white font-display font-extrabold text-2xl flex items-center justify-center mx-auto mb-6 ring-8 ring-concrete-gray border border-brand-dark">
                {i + 1}
              </div>
              <h4 className="font-display font-bold text-xl text-brand-dark mb-4 uppercase tracking-wide">{step.title}</h4>
              <p className="text-brand-dark/70 leading-relaxed max-w-xs mx-auto font-sans">{step.desc}</p>
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
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">OUR COMMITMENT</h2>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Our Commitment to You</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg italic">"Starting your Google Workspace journey with a partner who cares about your growth."</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 card-concrete-glass text-center"
            >
              <div className="w-12 h-12 rounded-xl border border-brand-dark flex items-center justify-center mx-auto mb-6 bg-white text-solar-orange">
                <point.icon size={24} />
              </div>
              <h4 className="font-display font-bold text-xl text-brand-dark mb-3 uppercase tracking-wide">{point.title}</h4>
              <p className="text-brand-dark/70 leading-relaxed text-sm font-sans">{point.desc}</p>
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
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">GET IN TOUCH</h2>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Request a Custom Quote</h3>
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
                  className={`flex items-center gap-6 p-4 card-concrete-glass group transition-colors ${item.link ? 'cursor-pointer hover:border-[#FF7120]' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl border border-brand-dark flex items-center justify-center shrink-0 bg-white text-solar-orange">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-wider text-brand-dark/50 uppercase">{item.label}</div>
                    <div className="text-sm font-bold text-brand-dark font-sans">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-concrete-glass p-10"
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
                    <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all placeholder:text-brand-dark/20 font-sans shadow-none" 
                      placeholder="Ravi Kumar" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase mb-2">Business Name</label>
                    <input 
                      type="text" 
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all placeholder:text-brand-dark/20 font-sans shadow-none" 
                      placeholder="Acme Pvt Ltd" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all placeholder:text-brand-dark/20 font-sans shadow-none" 
                      placeholder="ravi@company.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase mb-2">Phone</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all placeholder:text-brand-dark/20 font-sans shadow-none" 
                      placeholder="+91 96543 87865" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase mb-2">Number of Users</label>
                  <select 
                    name="numUsers"
                    value={formData.numUsers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all font-sans shadow-none"
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
                  <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase mb-2">Plan Interest</label>
                  <select 
                    name="planInterest"
                    value={formData.planInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all font-sans shadow-none"
                  >
                    <option value="">Select a plan</option>
                    <option value="Google Workspace Starter">Google Workspace Starter — ₹200/user</option>
                    <option value="Google Workspace Standard">Google Workspace Standard — ₹250/user</option>
                    <option value="Google Workspace Plus">Google Workspace Plus — ₹300/user</option>
                    <option value="Zoho Workplace Starter">Zoho Workplace Starter — ₹200/user</option>
                    <option value="Zoho Workplace Standard">Zoho Workplace Standard — ₹250/user</option>
                    <option value="Zoho Workplace Plus">Zoho Workplace Plus — ₹300/user</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                
                {status === 'error' && (
                  <p className="text-google-red text-sm font-bold text-center">Something went wrong. Please try again or message us on WhatsApp.</p>
                )}

                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-4 btn-solar-orange text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-none font-bold uppercase tracking-wide"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      SENDING...
                    </>
                  ) : (
                    'START MY SETUP →'
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
                Workspace<span className="text-google-blue">Bays</span>
              </span>
            </div>
            <p className="text-white/50 text-sm max-w-xs font-medium uppercase tracking-widest">GOOGLE & ZOHO WORKSPACE RESELLER</p>
          </div>
          <div className="flex gap-10">
            {['Pricing', 'Features', 'Why Us', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-semibold hover:text-google-blue transition-colors">{link}</a>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-white/30 text-xs font-medium">
            © {new Date().getFullYear()} WorkspaceBays. All rights reserved. <br className="md:hidden" />
            Google Workspace™ and Zoho Workplace™ are trademarks of their respective owners.
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
                  Workspace<span className="text-[#E65A28]">Bays</span>
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
