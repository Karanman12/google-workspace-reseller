import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { GridBackground } from '../GridBackground';

const Layout = () => {
  const [isLoadingIntro, setIsLoadingIntro] = useState(true);
  const [startHomepageAnimation, setStartHomepageAnimation] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

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
      setStartHomepageAnimation(true);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoadingIntro && (
          <motion.div
            key="intro-loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.25, ease: 'easeInOut' }
            }}
            className="fixed inset-0 z-[999999] bg-[#E4E4E4] flex flex-col items-center justify-center pointer-events-auto"
            style={{ height: '100vh', width: '100vw' }}
          >
            <div className="absolute inset-0 pointer-events-none z-0 hero-grid" />
            
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative z-10 flex items-center justify-center"
            >
              <span 
                className="font-display font-black text-4xl tracking-tight text-[#1D1D1F]"
                style={{ letterSpacing: '-0.03em', fontWeight: 900 }}
              >
                Workspace<span className="text-[#E65A28]">Bays</span>
              </span>
            </motion.div>
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
        className="min-h-screen bg-transparent flex flex-col"
      >
        <Navbar startAnimation={startHomepageAnimation} />
        
        <GridBackground>
          <main className="flex-grow pt-20 min-h-[65vh]">
            <Outlet context={{ startAnimation: startHomepageAnimation }} />
          </main>
        </GridBackground>
        
        <Footer />
      </motion.div>
    </>
  );
};

export default Layout;
