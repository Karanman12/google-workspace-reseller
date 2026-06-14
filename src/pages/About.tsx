import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { 
  MessageCircle, ArrowRight, Mail, Briefcase, Monitor, ArrowRightLeft, ShieldCheck, Globe, Quote, Users
} from 'lucide-react';

const About = () => {
  const offerings = [
    { icon: Mail, title: 'Google Workspace Plans', desc: 'Premium Gmail, Drive, Meet, and more for modern teams.' },
    { icon: Briefcase, title: 'Microsoft 365 Plans', desc: 'Industry-standard Office apps and Teams collaboration.' },
    { icon: ArrowRightLeft, title: 'Email Migration Services', desc: 'Seamless, zero-downtime transition from any provider.' },
    { icon: ShieldCheck, title: 'Website Security & Recovery', desc: 'Fast recovery and protection for hacked websites.' },
    { icon: Globe, title: 'SSL & Website Design', desc: 'Complete web presence and security solutions.' }
  ];

  const values = [
    { icon: Quote, title: 'Transparency First', desc: 'Full pricing clarity, no hidden costs, and official GST invoices for every transaction.' },
    { icon: Users, title: 'Human Support', desc: 'Direct access to a real person. No frustrating chatbots or endless ticketing loops.' },
    { icon: ShieldCheck, title: 'Security Focused', desc: 'We implement best-practice security configurations for all our client deployments.' }
  ];

  return (
    <>
      <SEO title="About Us | WorkspaceBays" description="India's Trusted Google Workspace & Cloud Services Partner. We help businesses get set up with professional cloud tools." canonical="/about" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">ABOUT US</h2>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">India's Trusted Google Workspace & Cloud Services Partner</h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">WorkspaceBays is an authorized Google Workspace and Microsoft 365 partner based in India. We help businesses of all sizes get set up with professional cloud tools — quickly, affordably, and with dedicated human support.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">OUR STORY</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 tracking-tight">Making the cloud accessible.</h3>
              <p className="text-brand-dark/70 text-lg leading-relaxed mb-6 font-sans">
                Founded with a simple mission: make professional cloud tools accessible and affordable for Indian businesses.
              </p>
              <p className="text-brand-dark/70 text-lg leading-relaxed font-sans">
                We noticed that many companies were overpaying for Google Workspace or struggling with complex setups. WorkspaceBays was built to solve that — offering genuine licenses at up to 30% lower prices, with personal setup support and INR billing.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {[
                { title: 'Transparency', desc: 'No hidden costs, no surprise renewals.' },
                { title: 'Speed', desc: '24-hour setup guarantee.' },
                { title: 'Support', desc: 'Direct WhatsApp access to your account manager.' }
              ].map((val, i) => (
                <div key={i} className="p-6 card-concrete-glass border-l-4 border-solar-orange">
                  <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">{val.title}</h4>
                  <p className="text-brand-dark/70 font-sans">{val.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <section className="relative py-28 md:py-36 overflow-hidden text-white" style={{ background: '#161616' }}>
        <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-[11px] font-bold text-[#E65A28] uppercase tracking-[0.25em] mb-4 text-center md:text-left">IMPACT</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-16 text-center md:text-left">By the numbers.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-10 border-t border-white/[0.06]">
            {[
              { label: 'Trust', value: '500+ Businesses Served' },
              { label: 'Speed', value: '24-Hour Setup' },
              { label: 'Value', value: '30% Average Savings' },
              { label: 'Satisfaction', value: '4.9★ Client Rating' }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="font-display font-bold text-lg text-[#FAF9F6] mb-2 tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E65A28]" />
                  {stat.value}
                </h3>
                <p className="text-[#FAF9F6]/60 text-[13px] font-medium leading-relaxed max-w-[240px] uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">SERVICES</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">What We Offer</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offer, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4 }} whileHover={{ y: -6 }} viewport={{ once: true }} className="p-8 card-concrete-glass">
                <div className="w-14 h-14 rounded-xl border border-brand-dark flex items-center justify-center mb-6 bg-white text-solar-orange">
                  <offer.icon size={28} />
                </div>
                <h4 className="font-display font-bold text-xl text-brand-dark mb-3 uppercase tracking-wide">{offer.title}</h4>
                <p className="text-brand-dark/70 leading-relaxed text-sm font-sans">{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">PRINCIPLES</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Our Core Values</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-8 card-concrete-glass text-center">
                <div className="w-16 h-16 rounded-xl border border-brand-dark flex items-center justify-center mx-auto mb-6 bg-white text-solar-orange">
                  <val.icon size={28} />
                </div>
                <h4 className="font-display font-bold text-xl text-brand-dark mb-3 uppercase tracking-wide">{val.title}</h4>
                <p className="text-brand-dark/70 leading-relaxed text-sm font-sans">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden text-white text-center" style={{ background: '#161616' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Ready to Work with Us?</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Get your business set up with the right cloud tools today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919654387865?text=Hi%2C%20I%20would%20like%20to%20work%20with%20WorkspaceBays."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
            >
              <MessageCircle size={20} />
              WHATSAPP US
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-base rounded-[10px] font-bold font-mono tracking-wide transition-all cursor-pointer flex items-center justify-center">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
