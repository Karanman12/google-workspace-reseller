import React from 'react';
import SEO from '../components/seo/SEO';

const Pricing = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <SEO title="Pricing | WorkspaceBays" description="Pricing page for WorkspaceBays." canonical="/pricing" />
      <div className="text-center mb-16 pt-20">
        <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">Pricing</h2>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
          Coming Soon
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-10">We are currently working on this page. Check back later.</p>
        
        <a 
          href="/contact"
          className="inline-block py-4 px-8 btn-solar-orange text-base cursor-pointer font-bold uppercase tracking-wide"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default Pricing;
