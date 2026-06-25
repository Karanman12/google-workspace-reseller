import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import Breadcrumbs from '../../components/navigation/Breadcrumbs';
import RelatedPosts from '../../components/blog/RelatedPosts';
import { 
  MessageCircle, 
  ArrowRight, 
  ArrowUpRight,
  Mail, 
  HardDrive, 
  Video, 
  FileText, 
  ShieldCheck, 
  Calendar,
  Wallet,
  CreditCard,
  Zap,
  ChevronDown,
  CheckCircle2,
  Star
} from 'lucide-react';

const GoogleWorkspace = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { icon: Mail, title: 'Professional Gmail', desc: 'Get yourname@yourcompany.com. Build trust with a professional business email address.' },
    { icon: HardDrive, title: 'Google Drive', desc: 'Secure cloud storage. Access files from any device, anywhere, and share securely.' },
    { icon: Video, title: 'Google Meet HD', desc: 'Enterprise-grade video conferencing with screen sharing and recording capabilities.' },
    { icon: FileText, title: 'Docs, Sheets & Slides', desc: 'Real-time collaboration on documents, spreadsheets, and presentations.' },
    { icon: ShieldCheck, title: 'Admin Console & Security', desc: 'Centrally manage users, devices, and security settings for your organization.' },
    { icon: Calendar, title: 'Google Calendar & Chat', desc: 'Integrated scheduling and team messaging to keep everyone aligned.' }
  ];

  const plans = [
    {
      name: 'Standard',
      price: '₹845*',
      tagline: 'Per User / Month + Tax',
      features: ['Secure business email with custom domain', 'Google Meet meetings for up to 150 participants with recording', '2 TB cloud storage per user', 'Advanced security and management controls', 'Standard support with optional Enhanced Support upgrade', 'Gemini AI assistance across Gmail, Docs, Meet, and more'],
      popular: false
    },
    {
      name: 'Starter',
      price: '₹140*',
      tagline: 'Per User / Month + Tax',
      features: ['Professional business email with custom domain', 'Google Meet video meetings for up to 100 participants', '30 GB cloud storage per user', 'Security and admin management controls', 'Standard customer support', 'Google Gemini AI productivity features'],
      popular: true
    },
    {
      name: 'Plus',
      price: '₹1645*',
      tagline: 'Per User / Month + Tax',
      features: ['Secure business email with advanced eDiscovery and retention features', 'Google Meet meetings for up to 500 participants with recording and attendance tracking', '5 TB cloud storage per user', 'Enhanced security controls including Vault and advanced endpoint management', 'Standard support with optional Enhanced Support upgrade', 'Advanced Gemini AI and productivity tools'],
      popular: false
    }
  ];

  const whyChooseUs = [
    { icon: Wallet, title: 'Save 30% vs Direct', desc: 'Get genuine Google Workspace licenses at significantly lower rates than buying direct from Google.' },
    { icon: CreditCard, title: 'INR Billing', desc: 'Pay via UPI, NEFT, or bank transfer in Indian Rupees and receive official GST invoices instantly.' },
    { icon: Zap, title: '24-Hour Activation', desc: 'We guarantee a rapid setup. Once payment is confirmed, your workspace is ready within 24 hours.' },
    { icon: MessageCircle, title: 'Dedicated Support', desc: 'No bots or endless ticketing systems. Get direct access to your account manager.' }
  ];

  const faqs = [
    { q: 'What is Google Workspace?', a: 'Google Workspace is a suite of cloud computing, productivity, and collaboration tools, software, and products developed by Google. It includes Gmail, Drive, Docs, Meet, and more.' },
    { q: 'How is WorkspaceBays different from buying directly from Google?', a: 'We offer the exact same genuine Google licenses, but with local INR billing (UPI/NEFT), official GST invoices, dedicated support, and lower pricing (saving up to 30%).' },
    { q: 'Can I migrate my existing emails?', a: 'Yes! We offer comprehensive email migration services to move your data from cPanel, Microsoft 365, or other platforms to Google Workspace with zero downtime.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major Indian payment methods including UPI, NEFT, IMPS, RTGS, and direct bank transfers.' },
    { q: 'How long does setup take?', a: 'Standard setups are completed within 24 hours of payment confirmation. Migration timelines depend on data size but are planned to ensure zero downtime.' },
    { q: 'What happens if I need help later?', a: 'We provide dedicated support via email for all our Google Workspace clients at no extra cost.' }
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
        title="Google Workspace Reseller India | Buy Plans | WorkspaceBays" 
        description="Get professional business email with Google Workspace. Expert email migration support, local INR billing, and 24/7 dedicated support. Save up to 30% today." 
        canonical="/google-workspace"
        schema={faqSchema}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Breadcrumbs />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            <div className="max-w-3xl flex-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">GOOGLE WORKSPACE</h2>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Professional Email & Cloud Productivity for Your Business</h1>
                <p className="text-gray-500 text-lg mb-6 leading-relaxed max-w-2xl">Get Gmail, Google Drive, Google Meet, Docs, Sheets, and more — all under your company domain. We provide comprehensive <Link to="/email-migration" className="text-solar-orange hover:underline font-medium">migration support</Link> to ensure zero downtime. Setup in 24 hours, INR billing, save up to 30% vs direct pricing.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact"
                    className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
                  >
                    <Mail size={20} />
                    CONTACT US
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer flex items-center justify-center">
                    VIEW PRICING PLANS
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
                src="/google_workspace_dashboard.webp" 
                alt="Product mockup showing the Google Workspace dashboard and productivity tools" 
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
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-10 text-center md:text-left">Everything your team needs to collaborate.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-8 border-t border-white/[0.06]">
            {[
              { label: 'Cloud Space', value: '30GB–5TB Storage' },
              { label: 'Video Meetings', value: 'Up to 500 Participants' },
              { label: 'Professional Brand', value: 'Custom Domain Email' },
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
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">The ultimate productivity suite</h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">Work faster, smarter, and together with Google's industry-leading tools.</p>
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
                  GET STARTED
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto mt-16 space-y-6">
            <div className="p-8 card-concrete-glass">
              <h4 className="font-display font-bold text-lg text-brand-dark mb-4 tracking-tight">Pricing Information</h4>
              <div className="text-sm text-brand-dark/60 font-sans leading-relaxed space-y-3">
                <p>Choose the right Google Workspace plan for your business needs. Business Starter, Business Standard, and Business Plus plans support teams up to 300 users, while Enterprise plans are available for organizations requiring advanced flexibility.</p>
                <p>New customers may receive promotional benefits and additional features for a limited period.</p>
              </div>
            </div>
            <div className="p-8 card-concrete-glass">
              <h4 className="font-display font-bold text-lg text-brand-dark mb-4 tracking-tight">Special Offer Details</h4>
              <div className="text-sm text-brand-dark/60 font-sans leading-relaxed space-y-3">
                <p>Eligible new Google Workspace customers can enjoy introductory pricing for the first 20 users for up to 12 months. After the promotional period ends, regular pricing will apply. Customers can upgrade, modify, or cancel their plan whenever required.</p>
              </div>
            </div>
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
      <RelatedPosts category="Google Workspace" />

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden text-white text-center" style={{ background: '#161616' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Ready to Get Started with Google Workspace?</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Setup takes less than 24 hours. Contact us now for the fastest response. Don't forget to protect your domains with our <Link to="/ssl-certificate" className="text-solar-orange hover:underline font-medium">SSL Certificates</Link>.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer">
              CONTACT US
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoogleWorkspace;
