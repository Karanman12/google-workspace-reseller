import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import RelatedPosts from '../../components/blog/RelatedPosts';
import { 
  MessageCircle, ArrowRight, ArrowUpRight, Mail, Users, FileText, HardDrive, Globe, ShieldCheck, Wallet, Zap, ChevronDown, CheckCircle2, Star
} from 'lucide-react';

const Microsoft365 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { icon: Mail, title: 'Outlook Professional Email', desc: 'Business-class email with a 50GB mailbox, calendar, and contacts.' },
    { icon: Users, title: 'Microsoft Teams', desc: 'Host online meetings and video calls for up to 300 people.' },
    { icon: FileText, title: 'Word, Excel & PowerPoint', desc: 'Create and edit documents collaboratively in real time.' },
    { icon: HardDrive, title: 'OneDrive Cloud Storage', desc: '1TB of cloud storage per user to securely store and share files.' },
    { icon: Globe, title: 'SharePoint & Collaboration', desc: 'Build an intranet to share resources and manage content.' },
    { icon: Mail, title: 'Alias Functionality', desc: 'Create multiple email aliases per user at no extra cost to manage different roles.' },
    { icon: ShieldCheck, title: 'Advanced Security & Compliance', desc: 'Protect your data with enterprise-grade security features.' }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '₹140*',
      tagline: 'Per User / Month + Tax',
      desc: 'Essential cloud tools for email, collaboration, and secure online work.',
      features: ['Professional business email with custom domain', 'Web and mobile versions of Office apps', 'Microsoft Teams chat and meetings', '1 TB cloud storage per user', 'Basic security and spam protection', 'File sharing and collaboration tools'],
      popular: false
    },
    {
      name: 'Standard',
      price: '₹765*',
      tagline: 'Per User / Month + Tax',
      desc: 'Complete productivity package with desktop apps and advanced collaboration tools.',
      features: ['Everything in Business Basic', 'Desktop versions of Word, Excel, PowerPoint and Outlook', 'Business-class email and calendar', 'Microsoft Teams meetings and collaboration', '1 TB cloud storage per user', 'Additional productivity applications'],
      popular: true
    },
    {
      name: 'Premium',
      price: '₹1825*',
      tagline: 'Per User / Month + Tax',
      desc: 'Advanced business protection with premium productivity and security features.',
      features: ['Everything in Business Standard', 'Advanced identity and access management', 'Enhanced security and threat protection', 'Device management controls', 'Data protection features', 'Premium support options'],
      popular: false
    }
  ];

  const whyChooseUs = [
    { icon: Wallet, title: 'Competitive INR Pricing', desc: 'Pay via local Indian methods with official GST invoices.' },
    { icon: Zap, title: 'Complete Setup & Migration', desc: 'We handle your entire migration and domain configuration.' },
    { icon: Users, title: 'Dedicated Account Manager', desc: 'Direct access to your account manager for any administrative needs.' },
    { icon: MessageCircle, title: '24/7 WhatsApp Support', desc: 'Immediate support when you need it most, directly on WhatsApp.' }
  ];

  const faqs = [
    { q: 'What is Microsoft 365 for Business?', a: 'Microsoft 365 is a cloud-based service that brings together the best-in-class productivity apps from Office 365 with advanced device management and security.' },
    { q: 'Can I use desktop apps like Word and Excel?', a: 'Yes, the Standard and Premium plans include fully installed desktop versions of Word, Excel, PowerPoint, and more.' },
    { q: 'How do I migrate from Google Workspace to Microsoft 365?', a: 'Our migration experts handle the complete transition of your emails, files, and calendars with zero downtime.' },
    { q: 'What payment methods are available?', a: 'We support all major Indian payment methods including UPI, NEFT, RTGS, and direct bank transfers.' },
    { q: 'Do you handle the complete setup?', a: 'Yes, we handle everything from domain verification to user creation and policy configuration.' },
    { q: 'Do you offer technical support for Microsoft 365 issues?', a: 'Yes! As an authorized partner, we provide direct administrative support for your tenant, avoiding long queues with Microsoft.' }
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
        title="Microsoft 365 Reseller India | Buy Office 365 Plans | WorkspaceBays" 
        description="Empower your team with Microsoft 365. Access Outlook, Teams, OneDrive, and Office Apps with seamless email migration and local INR billing." 
        canonical="/microsoft-365"
        schema={faqSchema}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            <div className="max-w-3xl flex-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">MICROSOFT 365</h2>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Microsoft 365 for Business — Outlook, Teams & Office Apps</h1>
                <p className="text-gray-500 text-lg mb-6 leading-relaxed max-w-2xl">The full Microsoft productivity suite for your business. Outlook email, Teams collaboration, Word, Excel, PowerPoint, and OneDrive — all managed and billed in INR. Need help moving? We provide expert <Link to="/email-migration" className="text-solar-orange hover:underline font-medium">email migration</Link> from any platform.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/919654387865?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Microsoft%20365."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
                  >
                    <MessageCircle size={20} />
                    WHATSAPP US
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer flex items-center justify-center">
                    VIEW PLANS
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="flex-1 w-full max-w-lg lg:max-w-none"
            >
              <img 
                src="/microsoft_365_dashboard.png" 
                alt="Product mockup showing the Microsoft 365 dashboard and enterprise collaboration tools" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-brand-dark/10"
              />
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
          <p className="text-[11px] font-bold text-[#E65A28] uppercase tracking-[0.25em] mb-4 text-center md:text-left">ENTERPRISE GRADE</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-10 text-center md:text-left">Work anywhere, anytime.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-8 border-t border-white/[0.06]">
            {[
              { label: 'Cloud Space', value: '1TB OneDrive Storage' },
              { label: 'Video Meetings', value: 'Up to 300 Participants' },
              { label: 'Productivity', value: 'Desktop Office Apps' },
              { label: 'Reliability', value: '99.9% Uptime SLA' }
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
          <div className="text-center mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">KEY BENEFITS</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Empower your workforce</h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">Unleash creativity and teamwork with Microsoft 365.</p>
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
      <section id="pricing" className="py-16 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">PRICING</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-4 tracking-tight leading-tight">Our Pricing</h3>
              <p className="text-brand-dark/60 text-base sm:text-lg font-sans">Free Trial For One Month For New Users Only</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -6 }} className={`relative p-10 card-concrete-glass transition-all duration-300 ${plan.popular ? 'border-solar-orange border-2 scale-105 z-10 bg-white/60 shadow-[0_20px_50px_rgba(255,113,32,0.04)]' : 'hover:border-brand-dark/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar-orange text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 border border-solar-orange/15 shadow-sm">
                    <Star size={12} fill="currentColor" /> MOST POPULAR
                  </div>
                )}
                <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-4xl font-extrabold text-brand-dark">{plan.price}</span>
                  <span className="text-brand-dark/50 font-mono text-xs">/user/mo</span>
                </div>
                <p className="text-brand-dark/60 text-sm mb-4 leading-relaxed font-sans">{plan.tagline}</p>
                <p className="text-brand-dark/70 text-sm mb-8 leading-relaxed font-sans">{plan.desc}</p>
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
                  GET STARTED
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto mt-16 p-8 card-concrete-glass text-sm text-brand-dark/60 font-sans leading-relaxed space-y-3">
            <p>Microsoft 365 plans help businesses improve productivity, communication, and security with reliable cloud-based tools.</p>
            <p>Plans are suitable for organizations of different sizes. Pricing may vary based on subscription terms and applicable taxes.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose WorkspaceBays */}
      <section className="py-16 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
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
          <div className="text-center mb-10">
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

      {/* Related Blogs Section */}
      <RelatedPosts category="Microsoft 365" />

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden text-white text-center" style={{ background: '#161616' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Ready to Move to Microsoft 365?</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Upgrade your team's productivity today. WhatsApp us to get started. Ensure your infrastructure is fully secure with our <Link to="/ssl-certificate" className="text-solar-orange hover:underline font-medium">SSL Certificates</Link>.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919654387865?text=Hi%2C%20I%20am%20ready%20to%20get%20started%20with%20Microsoft%20365."
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

export default Microsoft365;
