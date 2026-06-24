import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  path?: string;
  isDropdown?: boolean;
  items?: { label: string; path: string }[];
}

const Navbar = ({ startAnimation = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { 
      label: 'Services', 
      isDropdown: true,
      items: [
        { label: 'Google Workspace', path: '/google-workspace' },
        { label: 'Microsoft 365', path: '/microsoft-365' },
        { label: 'Email Migration', path: '/email-migration' },
        { label: 'Fix Hacked Website', path: '/fix-hacked-website' },
        { label: 'SSL Certificate', path: '/ssl-certificate' },
        { label: 'Website Design', path: '/website-design' },
        { label: 'Ecommerce Website', path: '/ecommerce-website' },
      ]
    },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

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
          <Link
            to="/"
            onClick={handleScrollToTop}
            className="flex items-center gap-2 rounded-[10px] hover:bg-black/[0.02] transition-all group cursor-pointer"
          >
            <img src="/wb-logo.png" alt="WorkspaceBays Logo" className="h-16 w-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
            <span className="font-display font-extrabold text-[15px] tracking-tight text-[#1B1B1B]">
              Workspace<span className="text-[#FF7120]">Bays</span>
            </span>
          </Link>
        </div>

        {/* Center Links */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6">
          {navItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-[13px] font-mono tracking-wider px-3 py-1.5 transition-all cursor-pointer hover:opacity-50"
                    style={{
                      color: item.items?.some(subItem => location.pathname.startsWith(subItem.path)) 
                        ? '#FF7120' 
                        : '#1B1B1B'
                    }}
                  >
                    <span>{item.label.toUpperCase()}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                    <div className="bg-[#FFFFFF] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-black/5 p-2 w-[220px] flex flex-col">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="text-[13px] font-medium px-4 py-2.5 rounded-lg text-[#1B1B1B]/70 hover:bg-black/5 hover:text-[#FF7120] transition-all whitespace-nowrap"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.path!}
                className="text-[13px] font-mono tracking-wider px-3 py-1.5 transition-all cursor-pointer hover:opacity-50"
                style={{
                  color: location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path!))
                    ? '#FF7120' 
                    : '#1B1B1B'
                }}
              >
                <span>{item.label.toUpperCase()}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex-shrink-0">
          <Link
            to="/contact"
            className="font-mono font-bold text-[13px] bg-solar-orange text-brand-dark border border-solar-orange hover:bg-transparent transition-all duration-300 cursor-pointer flex items-center justify-center h-[40px] px-6 rounded-[10px]"
          >
            <span>SETUP</span>
          </Link>
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
          backdropFilter: 'blur(2px)',
          borderRadius: '10px',
          padding: '8px 12px 8px 16px',
          border: 'none',
          boxShadow: 'none',
          zIndex: 1000,
        }}
      >
        <Link
          to="/"
          onClick={handleScrollToTop}
          className="flex items-center gap-2 flex-1"
        >
          <img src="/wb-logo.png" alt="WorkspaceBays Logo" className="h-12 w-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
          <span className="font-display font-extrabold text-xs tracking-tight text-brand-dark">
            Workspace<span className="text-[#FF7120]">Bays</span>
          </span>
        </Link>

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
              {navItems.map((item, idx) => {
                if (item.isDropdown) {
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full text-sm font-medium px-4 py-2 rounded-lg text-navy/70 hover:bg-black/5 hover:text-[#E65A28] transition-all cursor-pointer"
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col mb-1 pl-4 border-l-2 border-brand-dark/5 ml-4">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block text-sm font-medium px-4 py-2 rounded-lg text-navy/70 hover:bg-black/5 hover:text-[#E65A28] transition-all"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <Link
                      to={item.path!}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-sm font-medium px-4 py-2 rounded-lg text-navy/70 hover:bg-black/5 hover:text-[#E65A28] transition-all"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center w-full mt-2 py-2.5 px-4 rounded-lg font-display font-semibold text-sm text-white bg-[#E65A28] hover:bg-[#D54B1A] hover:shadow-lg transition-all"
                >
                  Start Setup
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
