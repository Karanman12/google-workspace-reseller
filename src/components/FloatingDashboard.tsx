/**
 * Premium Integration Grid Showcase
 * Authentic, clean bento-grid presentation of genuine Google Workspace & Zoho Workplace features
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Cloud, Video, Users, CheckCircle2, ShieldCheck, CreditCard, Zap, MessageCircle } from 'lucide-react';

export const FloatingDashboard: React.FC<{ startAnimation?: boolean }> = ({ startAnimation = true }) => {
  return (
    <motion.div
      className="w-full max-w-5xl mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 30 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-6">
        {/* Google Workspace Card */}
        <div className="card-concrete-glass p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-google-blue/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#1A73E8]" />
                <div className="w-2 h-2 rounded-full bg-[#EA4335]" />
                <div className="w-2 h-2 rounded-full bg-[#FBBC04]" />
                <div className="w-2 h-2 rounded-full bg-[#34A853]" />
              </div>
              <span className="text-[10px] font-mono font-bold text-google-blue uppercase tracking-widest bg-google-blue/10 px-2.5 py-1 rounded-full border border-google-blue/20">
                Google Workspace
              </span>
            </div>
            
            <h3 className="font-display font-extrabold text-2xl text-brand-dark mb-3 tracking-tight">
              Enterprise Google Suite
            </h3>
            <p className="text-sm text-brand-dark/60 leading-relaxed mb-6 font-sans">
              The industry standard for secure cloud collaboration, business communication, and enterprise domain tools.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { icon: Mail, text: "Professional Gmail on your business domain" },
                { icon: Cloud, text: "Google Drive secure cloud storage (30GB to 5TB+)" },
                { icon: Video, text: "Crystal-clear HD Meet video conferences" },
                { icon: Users, text: "Real-time Docs, Sheets & Slides collaboration" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-dark/70 font-sans">
                  <item.icon size={18} className="text-google-blue shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 border-t border-brand-dark/5 flex items-center justify-between">
            <span className="text-xs font-mono text-brand-dark/50">Fully-managed Setup</span>
            <span className="text-xs font-mono font-bold text-google-blue">100% Genuine Licenses</span>
          </div>
        </div>

        {/* Zoho Workplace Card */}
        <div className="card-concrete-glass p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-solar-orange/5 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#E65A28]" />
                <div className="w-2 h-2 rounded-full bg-[#1A73E8]" />
                <div className="w-2 h-2 rounded-full bg-[#34A853]" />
                <div className="w-2 h-2 rounded-full bg-[#FBBC04]" />
              </div>
              <span className="text-[10px] font-mono font-bold text-solar-orange uppercase tracking-widest bg-solar-orange/10 px-2.5 py-1 rounded-full border border-solar-orange/20">
                Zoho Workplace
              </span>
            </div>
            
            <h3 className="font-display font-extrabold text-2xl text-brand-dark mb-3 tracking-tight">
              Modern Zoho Suite
            </h3>
            <p className="text-sm text-brand-dark/60 leading-relaxed mb-6 font-sans">
              A powerful, feature-rich office environment built for modern remote teams seeking optimal collaboration efficiency.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                { icon: Mail, text: "Professional Zoho Mail with custom domain" },
                { icon: Cloud, text: "Zoho WorkDrive collaborative cloud storage" },
                { icon: MessageCircle, text: "Instant team chat & communication via Zoho Cliq" },
                { icon: Users, text: "Writer, Sheet & Show real-time document editor" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-dark/70 font-sans">
                  <item.icon size={18} className="text-solar-orange shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-brand-dark/5 flex items-center justify-between">
            <span className="text-xs font-mono text-brand-dark/50">Fully-managed Setup</span>
            <span className="text-xs font-mono font-bold text-solar-orange">Premium Features Included</span>
          </div>
        </div>
      </div>

      {/* Unified Platform Banner */}
      <div className="card-concrete-glass p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-solar-orange/[0.02] to-google-blue/[0.02] pointer-events-none" />
        <div className="flex flex-col gap-1 z-10">
          <div className="flex items-center gap-2 mb-1.5">
            <ShieldCheck size={18} className="text-google-green" />
            <span className="text-[10px] font-mono font-bold text-brand-dark/40 uppercase tracking-widest">
              Unified Reseller Benefits
            </span>
          </div>
          <h4 className="font-display font-extrabold text-xl text-brand-dark tracking-tight">
            Why setup your company workspace via WorkspaceBays?
          </h4>
          <p className="text-xs text-brand-dark/60 max-w-xl font-sans mt-0.5">
            Get official company billing invoices, save up to 30% compared to direct billing, and enjoy rapid 24-hour setup support.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4 shrink-0 z-10 w-full md:w-auto">
          {[
            { icon: CreditCard, label: "INR Auto-Billing", sub: "Official business invoices" },
            { icon: Zap, label: "24h Active Setup", sub: "MX/DNS fully configured" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3.5 bg-white/60 border border-brand-dark/5 rounded-[12px] flex-1 md:flex-initial min-w-[160px]">
              <div className="w-8 h-8 rounded-[8px] bg-brand-dark/5 flex items-center justify-center text-brand-dark shrink-0">
                <item.icon size={16} />
              </div>
              <div>
                <p className="text-[11px] font-mono font-bold text-brand-dark uppercase tracking-wider leading-none mb-1">{item.label}</p>
                <p className="text-[9px] font-sans text-brand-dark/50 leading-none">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Alternative: Minimal glassmorphism version
export const FloatingDashboardMinimal: React.FC = () => {
  return (
    <motion.div
      className="relative w-full max-w-xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative bg-white/10 backdrop-blur-3xl rounded-3xl border border-white/20 shadow-2xl p-8"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ boxShadow: '0 25px 50px rgba(26, 115, 232, 0.3)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl pointer-events-none" />

        <div className="relative space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-2">Your Workspace</h3>
            <p className="text-gray-600">Everything you need in one place</p>
          </div>

          <div className="space-y-3">
            {['Gmail Pro', 'Google Meet', 'Unlimited Drive'].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 size={20} className="text-google-green" />
                <span className="font-medium text-navy">{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-3 rounded-lg bg-google-blue text-white font-semibold hover:shadow-lg hover:shadow-google-blue/50 transition-all">
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};


// USAGE:
// Import and add to your hero section:
// import { FloatingDashboard } from './components/FloatingDashboard';
//
// <FloatingDashboard />
//
// Or minimal version:
// <FloatingDashboardMinimal />
