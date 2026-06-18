import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import { 
  MessageCircle, ArrowRight, MonitorSmartphone, Zap, Search, Target, Users, Palette, CheckCircle2, Star, Rocket, Clock, ChevronDown
} from 'lucide-react';

const WebsiteDesign = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { icon: Palette, title: 'Custom Business Websites', desc: 'Bespoke designs tailored to your brand identity and target audience.' },
    { icon: MonitorSmartphone, title: 'Fully Responsive', desc: 'Flawless experiences across desktops, tablets, and mobile devices.' },
    { icon: Zap, title: 'Fast Loading Speed', desc: 'Optimized performance to keep visitors engaged and improve SEO.' },
    { icon: Search, title: 'SEO-Friendly Structure', desc: 'Built from the ground up following search engine best practices.' },
    { icon: Target, title: 'Lead Generation Focus', desc: 'Strategic call-to-actions designed to convert visitors into customers.' },
    { icon: Users, title: 'User-Centric UI/UX', desc: 'Intuitive navigation and accessible layouts for maximum usability.' }
  ];

  const packages = [
    {
      name: 'Landing Page',
      price: '₹15,000',
      tagline: 'Perfect for campaigns and single products',
      features: ['Single Page Design', 'Contact Form Integration', 'Mobile Responsive', '1 Year Free Hosting'],
      popular: false
    },
    {
      name: 'Business Website',
      price: '₹35,000',
      tagline: 'Professional presence for companies',
      features: ['Up to 10 Pages', 'Custom UI/UX Design', 'Basic SEO Setup', 'Admin CMS Dashboard'],
      popular: true
    },
    {
      name: 'Custom Web App',
      price: 'Custom',
      tagline: 'Advanced functionality and integrations',
      features: ['Complex Data Structures', 'API Integrations', 'User Portals', 'Advanced Security'],
      popular: false
    }
  ];

  const whyChooseUs = [
    { icon: Rocket, title: 'Modern Tech Stack', desc: 'We build using React, Next.js, and modern tools for blazing fast performance.' },
    { icon: Clock, title: 'On-Time Delivery', desc: 'Strict adherence to project timelines and transparent milestone updates.' },
    { icon: Search, title: 'SEO Out-of-the-Box', desc: 'We do not just build pretty sites; we build sites that rank on Google.' },
    { icon: MessageCircle, title: 'Ongoing Support', desc: 'Post-launch maintenance and support available directly via WhatsApp.' }
  ];

  const faqs = [
    { q: 'How long does it take to build a website?', a: 'A standard business website typically takes 3 to 4 weeks from initial design approval to final launch.' },
    { q: 'Will my website be mobile-friendly?', a: 'Absolutely. All our websites are built with a mobile-first approach to ensure they look perfect on every device.' },
    { q: 'Do you provide domain and hosting?', a: 'Yes, we can manage your entire infrastructure, including domain registration, premium cloud hosting, and SSL certificates.' },
    { q: 'Can I update the content myself?', a: 'Yes, we integrate easy-to-use Content Management Systems (CMS) so you can update text and images without coding knowledge.' },
    { q: 'Is SEO included in the design package?', a: 'Basic on-page SEO (meta tags, optimized structure, fast loading) is included. Advanced SEO campaigns are offered separately.' },
    { q: 'What is the payment structure?', a: 'We typically require a 50% advance to start the project, and the remaining 50% upon successful completion and launch.' },
    { q: 'Do you provide website maintenance?', a: 'Yes. We offer ongoing maintenance packages that include hosting, security updates, backups, and content changes.' }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Website Design | WorkspaceBays" 
        description="Professional Business Websites, Responsive Design, Fast Loading, and SEO-Friendly Structure." 
        canonical="/website-design"
        schema={faqSchema}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">WEB DESIGN</h2>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">High-Performance Business Websites</h1>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl">Beautiful, fast-loading, and SEO-optimized websites engineered specifically to convert visitors into customers. We also offer powerful <Link to="/ecommerce-website" className="text-solar-orange hover:underline">E-commerce</Link> features and <Link to="/ssl-certificate" className="text-solar-orange hover:underline">SSL Certificates</Link> to build trust. Perfect for modern Indian businesses.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919654387865?text=Hi%2C%20I%20need%20a%20new%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
                >
                  <MessageCircle size={20} />
                  DISCUSS YOUR PROJECT
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer flex items-center justify-center">
                  GET A QUOTE
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <section className="relative py-16 md:py-24 overflow-hidden text-white" style={{ background: '#161616' }}>
        <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-[11px] font-bold text-[#E65A28] uppercase tracking-[0.25em] mb-4 text-center md:text-left">PERFORMANCE</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-16 text-center md:text-left">Built for the modern web.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-10 border-t border-white/[0.06]">
            {[
              { label: 'Speed', value: 'Sub-Second Loading' },
              { label: 'Responsiveness', value: '100% Mobile Ready' },
              { label: 'Architecture', value: 'SEO-Friendly Structure' },
              { label: 'Goal', value: 'Lead Generation Focus' }
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
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">CAPABILITIES</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Everything you need to succeed online</h3>
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

      {/* Packages Section */}
      <section className="py-16 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">PACKAGES</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Transparent Pricing</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -6 }} className={`relative p-10 card-concrete-glass transition-all duration-300 ${pkg.popular ? 'border-solar-orange border-2 scale-105 z-10 bg-white/60 shadow-[0_20px_50px_rgba(255,113,32,0.04)]' : 'hover:border-brand-dark/30'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar-orange text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 border border-solar-orange/15 shadow-sm">
                    <Star size={12} fill="currentColor" /> MOST POPULAR
                  </div>
                )}
                <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">{pkg.name}</h4>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-brand-dark/50 font-mono text-xs">{pkg.price === 'Custom' ? '' : 'Starting at'}</span>
                  <span className="font-display text-3xl font-extrabold text-brand-dark">{pkg.price}</span>
                </div>
                <p className="text-brand-dark/60 text-sm mb-8 leading-relaxed font-sans">{pkg.tagline}</p>
                <div className="h-px bg-brand-dark/10 w-full mb-8" />
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-brand-dark/70 font-sans">
                      <CheckCircle2 size={18} className="text-google-green shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`flex justify-center items-center w-full py-4 text-base cursor-pointer font-bold ${pkg.popular ? 'btn-solar-dark' : 'btn-solar-orange'}`}>
                  GET STARTED
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WorkspaceBays */}
      <section className="py-16 bg-transparent border-t border-brand-dark/5">
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
      <section className="py-16 bg-transparent border-t border-brand-dark/5">
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
      <section className="relative py-16 overflow-hidden text-white text-center" style={{ background: '#161616' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Ready to Build Your New Website?</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Contact us today to discuss your vision and get a free quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919654387865?text=Hi%2C%20I%20am%20looking%20for%20website%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
            >
              <MessageCircle size={20} />
              WHATSAPP US
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-base rounded-[10px] font-bold font-mono tracking-wide transition-all cursor-pointer flex items-center justify-center">
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteDesign;
