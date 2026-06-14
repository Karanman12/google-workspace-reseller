import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import { 
  MessageCircle, ArrowRight, ShieldCheck, Lock, Globe, CheckCircle2, Star, ShieldAlert, CreditCard, Zap, ChevronDown
} from 'lucide-react';

const SSLCertificate = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { icon: Lock, title: '256-Bit Encryption', desc: 'Industry-standard encryption to protect customer data and transactions.' },
    { icon: Globe, title: 'Browser Trust', desc: 'Recognized by 99.9% of web browsers and mobile devices globally.' },
    { icon: ShieldCheck, title: 'SEO Boost', desc: 'Google prioritizes HTTPS websites. An SSL certificate helps you rank higher.' },
    { icon: CheckCircle2, title: 'Visual Security Indicators', desc: 'Show the padlock icon to let visitors know their connection is safe.' },
    { icon: ShieldAlert, title: 'Malware Scanning', desc: 'Daily vulnerability assessments available with premium certificates.' },
    { icon: Zap, title: 'Fast Issuance', desc: 'DV certificates issued in minutes. EV and OV expedited.' }
  ];

  const plans = [
    {
      name: 'Domain Validated (DV)',
      price: '₹1,500',
      tagline: 'Basic security for blogs and small sites',
      features: ['Issued in minutes', 'Domain ownership verification', 'Green padlock in browser'],
      popular: false
    },
    {
      name: 'Organization Validated (OV)',
      price: '₹4,500',
      tagline: 'Enhanced trust for business websites',
      features: ['Business identity verification', 'Higher warranty level', 'Dynamic site seal'],
      popular: true
    },
    {
      name: 'Extended Validation (EV)',
      price: '₹12,000',
      tagline: 'Maximum trust for e-commerce',
      features: ['Green address bar display', 'Highest level of validation', 'Maximum warranty protection'],
      popular: false
    }
  ];

  const whyChooseUs = [
    { icon: CreditCard, title: 'INR Billing', desc: 'Pay locally via UPI or Bank Transfer with full GST invoices.' },
    { icon: Zap, title: 'Free Installation', desc: 'Our experts will install the certificate on your server at no extra cost.' },
    { icon: ShieldCheck, title: 'Top Certificate Authorities', desc: 'We partner with leading CAs like Sectigo, DigiCert, and GeoTrust.' },
    { icon: MessageCircle, title: 'Dedicated Support', desc: 'Get direct WhatsApp support for any installation or renewal issues.' }
  ];

  const faqs = [
    { q: 'What is an SSL Certificate?', a: 'An SSL (Secure Sockets Layer) certificate authenticates a websites identity and enables an encrypted connection to ensure data privacy.' },
    { q: 'What is the difference between DV, OV, and EV?', a: 'DV validates domain ownership only. OV verifies your business existence. EV undergoes strict vetting and displays your company name in the browser.' },
    { q: 'Will you install the SSL certificate for me?', a: 'Yes! We offer free installation on most standard hosting environments like cPanel, Plesk, and Apache/Nginx servers.' },
    { q: 'How long does it take to get my certificate?', a: 'DV certificates are issued within 10-15 minutes. OV takes 1-3 days, and EV takes up to 5 days due to strict validation processes.' },
    { q: 'Do I need a dedicated IP address?', a: 'No, with modern SNI technology, you do not strictly need a dedicated IP for an SSL certificate.' },
    { q: 'What happens when my certificate expires?', a: 'We will send you renewal reminders 30 days in advance to ensure your website never shows a "Not Secure" warning.' }
  ];

  return (
    <>
      <SEO title="SSL Certificates | WorkspaceBays" description="Secure your website with DV, OV, and EV SSL Certificates. HTTPS Security, Browser Trust, and Free Installation." />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">SECURITY</h2>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Secure Your Website with Premium SSL</h1>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl">Build customer trust, encrypt sensitive data, and boost your Google rankings. We offer DV, OV, and EV certificates from top global authorities with free installation.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919654387865?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20SSL%20Certificates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
                >
                  <MessageCircle size={20} />
                  WHATSAPP US
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer flex items-center justify-center">
                  REQUEST A QUOTE
                </Link>
              </div>
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
          <p className="text-[11px] font-bold text-[#E65A28] uppercase tracking-[0.25em] mb-4 text-center md:text-left">PROTECTION</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-16 text-center md:text-left">Unbreakable encryption.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-10 border-t border-white/[0.06]">
            {[
              { label: 'Encryption Standard', value: '256-Bit SHA-2' },
              { label: 'Compatibility', value: '99.9% Browser Trust' },
              { label: 'Search Visibility', value: 'Google SEO Boost' },
              { label: 'Service', value: 'Free Installation' }
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

      {/* Key Benefits Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">FEATURES</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Why you need HTTPS</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4 }} whileHover={{ y: -6 }} viewport={{ once: true }} className="p-8 card-concrete-glass">
                <div className="w-14 h-14 rounded-xl border border-brand-dark flex items-center justify-center mb-6 bg-white text-solar-orange">
                  <benefit.icon size={28} />
                </div>
                <h4 className="font-display font-bold text-xl text-brand-dark mb-3 uppercase tracking-wide">{benefit.title}</h4>
                <p className="text-brand-dark/70 leading-relaxed text-sm font-sans">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">CERTIFICATES</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Validation Levels</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -6 }} className={`relative p-10 card-concrete-glass transition-all duration-300 ${plan.popular ? 'border-solar-orange border-2 scale-105 z-10 bg-white/60 shadow-[0_20px_50px_rgba(255,113,32,0.04)]' : 'hover:border-brand-dark/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar-orange text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 border border-solar-orange/15 shadow-sm">
                    <Star size={12} fill="currentColor" /> BEST FOR BUSINESS
                  </div>
                )}
                <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-brand-dark/50 font-mono text-xs">Starting at</span>
                  <span className="font-display text-3xl font-extrabold text-brand-dark">{plan.price}</span>
                  <span className="text-brand-dark/50 font-mono text-xs">/yr</span>
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
                <Link to="/contact" className={`flex justify-center items-center w-full py-4 text-base cursor-pointer font-bold ${plan.popular ? 'btn-solar-dark' : 'btn-solar-orange'}`}>
                  GET QUOTE
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WorkspaceBays */}
      <section className="py-24 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">WHY US</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Why Choose WorkspaceBays</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="flex items-start gap-6 p-8 card-concrete-glass">
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

      {/* FAQ Section */}
      <section className="py-24 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">FAQ</h2>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 card-concrete-glass cursor-pointer" onClick={() => toggleFaq(i)}>
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-lg text-brand-dark">{faq.q}</h4>
                  <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === i && <p className="text-brand-dark/70 leading-relaxed mt-4 font-sans">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden text-white text-center" style={{ background: '#161616' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Need an SSL Certificate?</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Protect your website today. WhatsApp us to get started.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919654387865?text=Hi%2C%20I%20need%20an%20SSL%20certificate."
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

export default SSLCertificate;
