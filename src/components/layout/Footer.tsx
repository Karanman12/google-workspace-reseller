import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer 
      className="text-white pt-20 pb-10"
      style={{
        background: '#161616'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16 pb-16 border-b border-white/10">
          <div className="md:w-1/3">
            <Link to="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <img src="/wb-logo.png" alt="WorkspaceBays Logo" className="h-16 w-auto object-contain" loading="lazy" style={{ mixBlendMode: 'multiply' }} />
              <span className="font-display font-bold text-2xl tracking-tight">
                Workspace<span className="text-[#FF7120]">Bays</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-xs font-medium uppercase tracking-widest">AUTHORIZED CLOUD PARTNER</p>
          </div>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-2">Services</h4>
              <Link to="/google-workspace" className="text-sm font-semibold hover:text-google-blue transition-colors">Google Workspace</Link>
              <Link to="/microsoft-365" className="text-sm font-semibold hover:text-google-blue transition-colors">Microsoft 365</Link>
              <Link to="/email-migration" className="text-sm font-semibold hover:text-google-blue transition-colors">Email Migration</Link>
              <Link to="/fix-hacked-website" className="text-sm font-semibold hover:text-google-blue transition-colors">Fix Hacked Website</Link>
              <Link to="/ssl-certificate" className="text-sm font-semibold hover:text-google-blue transition-colors">SSL Certificate</Link>
              <Link to="/website-design" className="text-sm font-semibold hover:text-google-blue transition-colors">Website Design</Link>
              <Link to="/ecommerce-website" className="text-sm font-semibold hover:text-google-blue transition-colors">Ecommerce Website</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-2">Company</h4>
              <Link to="/about" className="text-sm font-semibold hover:text-google-blue transition-colors">About</Link>
              <Link to="/contact" className="text-sm font-semibold hover:text-google-blue transition-colors">Contact</Link>
              <Link to="/blog" className="text-sm font-semibold hover:text-google-blue transition-colors">Blog</Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white/30 text-xs font-medium">
            © {new Date().getFullYear()} WorkspaceBays. All rights reserved. <br className="md:hidden" />
            Google Workspace™ and Microsoft 365™ are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
