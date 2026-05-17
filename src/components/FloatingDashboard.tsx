/**
 * Floating Glassmorphism Dashboard Mockup
 * Premium SaaS dashboard with floating animation, depth layering, and cinematic effects
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, FileText, Users, Calendar, Cloud, LayoutGrid, Search, Bell, CheckCircle2 } from 'lucide-react';

export const FloatingDashboard: React.FC<{ startAnimation?: boolean }> = ({ startAnimation = true }) => {
  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center py-20"
      initial={{ opacity: 0, y: 80, scale: 0.95, filter: 'blur(10px)' }}
      animate={startAnimation ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : { opacity: 0, y: 80, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Cinematic Ambient Glow (Amber) */}
      <div
        className="absolute inset-0 w-[800px] h-[800px] mx-auto pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(230, 90, 40, 0.04) 0%, transparent 60%)`,
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Main Single Centered Window */}
      <div className="relative w-full max-w-5xl mx-auto px-4" style={{ perspective: '2500px' }}>
        <motion.div
          className="relative w-full bg-white/50 backdrop-blur-3xl rounded-[24px] md:rounded-[32px] border border-white/60 shadow-[0_40px_120px_rgba(0,0,0,0.06),0_10px_30px_rgba(230,90,40,0.02)] overflow-hidden"
          animate={{ y: [0, -8, 0], rotateX: [0.5, 1.5, 0.5], rotateY: [-0.5, 0.5, -0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/10 to-transparent pointer-events-none" />

          {/* Window Header (Mac Style) */}
          <div className="relative h-14 bg-white/40 border-b border-white/40 flex items-center px-4 md:px-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/5" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/5" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] border border-black/5" />
            </div>
            
            {/* Search / Address Bar Mockup */}
            <div className="mx-auto w-48 md:w-64 h-8 bg-white/60 rounded-full border border-white/50 flex items-center justify-center shadow-sm">
              <Search size={12} className="text-gray-400 mr-2" />
              <div className="w-20 md:w-24 h-1.5 bg-gray-300 rounded-full opacity-50" />
            </div>

            <div className="flex gap-4">
              <div className="w-7 h-7 rounded-full bg-white/60 flex items-center justify-center border border-white/50 text-gray-500 shadow-sm hidden sm:flex">
                <Bell size={12} />
              </div>
            </div>
          </div>

          {/* Window Body */}
          <div className="relative flex flex-col md:flex-row min-h-[500px]">
            {/* Sidebar */}
            <div className="w-64 bg-white/30 border-r border-white/40 p-6 hidden md:flex flex-col gap-8">
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-2 mb-4">Workspace</p>
                <div className="flex items-center gap-3 px-3 py-2 bg-white/70 rounded-[12px] shadow-sm border border-white/60 text-[#1D1D1F]">
                  <LayoutGrid size={18} className="text-[#E65A28]" />
                  <span className="text-[13px] font-semibold">Overview</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-white/40 rounded-[12px] transition-colors cursor-pointer">
                  <Mail size={18} />
                  <span className="text-[13px] font-medium">Gmail</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-white/40 rounded-[12px] transition-colors cursor-pointer">
                  <FileText size={18} />
                  <span className="text-[13px] font-medium">Drive</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-white/40 rounded-[12px] transition-colors cursor-pointer">
                  <Calendar size={18} />
                  <span className="text-[13px] font-medium">Calendar</span>
                </div>
              </div>
              
              <div className="mt-auto bg-gradient-to-br from-[#E65A28]/10 to-transparent p-4 rounded-[16px] border border-[#E65A28]/20">
                 <p className="text-[11px] font-bold text-[#E65A28] mb-2">Premium Plan</p>
                 <div className="w-full bg-white/60 h-1.5 rounded-full mb-2 overflow-hidden">
                   <div className="w-2/3 h-full bg-[#E65A28] rounded-full" />
                 </div>
                 <p className="text-[10px] text-gray-500 font-medium">2.4 TB / 5 TB Used</p>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-white/20 to-transparent">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#1D1D1F] tracking-tight mb-1">Good morning, Team</h2>
                  <p className="text-[13px] text-gray-500 font-medium">Here's what's happening across your workspace today.</p>
                </div>
                <div className="flex -space-x-2 sm:-space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] sm:text-xs font-bold text-indigo-500 shadow-sm z-30">SJ</div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-[10px] sm:text-xs font-bold text-emerald-500 shadow-sm z-20">MR</div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-[#E65A28]/10 flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#E65A28] shadow-sm z-10">+4</div>
                </div>
              </div>

              {/* Grid of abstract product tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {/* Large Featured Tile (Drive/Docs) */}
                <div className="col-span-1 md:col-span-2 md:row-span-2 bg-white/60 backdrop-blur-md rounded-[20px] border border-white/50 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.02)] relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-bl from-[#E65A28]/10 to-transparent rounded-full blur-3xl" />
                  <div className="relative h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-[14px] bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20 shadow-sm">
                        <Cloud size={24} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#1D1D1F] mb-2 tracking-tight">Q3 Global Strategy Sync</h3>
                      <p className="text-[13px] text-gray-500 mb-8 max-w-sm">Live collaborative document. 8 team members currently viewing and editing.</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                      <div className="px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-white/60 flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] text-[12px] font-bold text-[#1D1D1F] hover:bg-white transition-colors cursor-pointer">
                        Open Document
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Live Editing</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Smaller Tiles */}
                <div className="bg-white/60 backdrop-blur-md rounded-[20px] border border-white/50 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-[12px] bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 shadow-sm">
                      <Mail size={18} />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#E65A28] text-white flex items-center justify-center text-[10px] font-bold shadow-md shadow-[#E65A28]/20">3</div>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1D1D1F] mb-1">Unread Mail</h4>
                    <p className="text-[11px] text-gray-500 font-medium">Important client updates</p>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-md rounded-[20px] border border-white/50 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-[12px] bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20 shadow-sm">
                      <Users size={18} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 bg-white/50 px-2 py-0.5 rounded-full border border-white/60">14:00</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#1D1D1F] mb-1">Weekly All-Hands</h4>
                    <p className="text-[11px] text-gray-500 font-medium">Google Meet Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
