import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import RelatedPosts from '../../components/blog/RelatedPosts';
import { 
  MessageCircle, ArrowRight, ShieldCheck, Search, Globe, Trash2, Database, Lock, AlertTriangle, UserX, AlertCircle, Clock, ChevronDown
} from 'lucide-react';

const FixHackedWebsite = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { icon: ShieldCheck, title: 'Malware & Virus Removal', desc: 'Deep scan and clean of all infected files without harming your content.' },
    { icon: Search, title: 'Backdoor Detection & Removal', desc: 'Identify and eliminate hidden access points hackers use.' },
    { icon: Globe, title: 'Google Blacklist Removal', desc: 'We restore your reputation and remove the deceptive site warning.' },
    { icon: Trash2, title: 'Spam Content Cleanup', desc: 'Remove injected SEO spam, pharmaceutical links, and malicious ads.' },
    { icon: Database, title: 'Database Security Repair', desc: 'Cleanse infected database tables and restore integrity.' },
    { icon: Lock, title: 'WordPress/CMS Hardening', desc: 'Update software and implement strict security policies.' }
  ];

  const steps = [
    { title: 'Step 1: Emergency Assessment', desc: 'Immediate scan of your website' },
    { title: 'Step 2: Malware Removal', desc: 'Clean all malicious code and files' },
    { title: 'Step 3: Security Hardening', desc: 'Patch vulnerabilities, update software' },
    { title: 'Step 4: Monitoring & Prevention', desc: 'Ongoing protection setup' }
  ];

  const warnings = [
    { icon: AlertTriangle, title: 'Google Blacklisting Damages SEO', desc: 'A hacked warning will plummet your search rankings instantly.' },
    { icon: UserX, title: 'Hackers Steal Customer Data', desc: 'Your users personal information is at extreme risk.' },
    { icon: AlertCircle, title: 'Spam Injections Destroy Trust', desc: 'Spam links ruin your brand reputation.' },
    { icon: Clock, title: 'Delayed Action Worsens Damage', desc: 'The longer you wait, the harder and costlier it is to recover.' }
  ];

  const faqs = [
    { q: 'How do I know if my website is hacked?', a: 'Common signs include unusual traffic, strange pop-ups, slow loading times, warnings from Google (Deceptive site ahead), or unexpected administrative users.' },
    { q: 'How long does it take to fix a hacked website?', a: 'Most hacked websites are fully cleaned and secured within 24 hours of starting the process.' },
    { q: 'Will fixing my website remove the Google blacklist warning?', a: 'Yes. After cleaning, we submit a review request to Google, which typically clears the warning within a few days.' },
    { q: 'Do you fix WordPress websites only?', a: 'While we specialize in WordPress, we can clean and secure PHP-based websites, Joomla, Magento, and custom HTML/PHP setups.' },
    { q: 'Will I lose any data during the cleanup?', a: 'We take complete backups before making any changes to ensure zero data loss during the malware removal process.' },
    { q: 'Do you provide ongoing security monitoring?', a: 'Yes, we set up robust firewalls and offer ongoing maintenance plans to prevent future breaches.' }
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
        title="Fix Hacked Website | WorkspaceBays" 
        description="Website hacked? We clean malware, remove backdoors, and restore your website to a secure state — usually within 24 hours." 
        canonical="/fix-hacked-website"
        schema={faqSchema}
      />
      
      <section className="pt-32 pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">WEBSITE SECURITY</h2>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Fix Your Hacked Website — Fast Recovery & Protection</h1>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl">Website hacked? Blacklisted by Google? Showing spam content? We clean malware, remove backdoors, and restore your website to a secure state — usually within 24 hours. After recovery, secure your site with an <Link to="/ssl-certificate" className="text-solar-orange hover:underline">SSL Certificate</Link> or upgrade your <Link to="/website-design" className="text-solar-orange hover:underline">Website Design</Link> for better security.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919654387865?text=Emergency:%20My%20website%20is%20hacked."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer bg-red-600 hover:bg-red-700 border-red-600"
                >
                  <MessageCircle size={20} />
                  EMERGENCY HELP
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer flex items-center justify-center">
                  REQUEST SECURITY AUDIT
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-36 overflow-hidden text-white" style={{ background: '#161616' }}>
        <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <p className="text-[11px] font-bold text-red-500 uppercase tracking-[0.25em] mb-4 text-center md:text-left">RAPID RESPONSE</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-16 text-center md:text-left">Secure your digital assets.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-10 border-t border-white/[0.06]">
            {[
              { label: 'Speed', value: '24-Hour Recovery' },
              { label: 'Thoroughness', value: '100% Malware Removal' },
              { label: 'Reputation', value: 'Google Blacklist Removal' },
              { label: 'Future-Proof', value: 'Security Hardening Included' }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="font-display font-bold text-lg text-[#FAF9F6] mb-2 tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {stat.value}
                </h3>
                <p className="text-[#FAF9F6]/60 text-[13px] font-medium leading-relaxed max-w-[240px] uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">WHAT WE FIX</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Complete Security Restoration</h3>
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

      <section className="py-24 bg-transparent overflow-hidden border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">OUR PROCESS</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark tracking-tight leading-tight">How We Restore Your Site</h3>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
            <div className="hidden md:block absolute top-[32px] left-[15%] right-[15%] h-[1px] bg-brand-dark/20" />
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="flex-1 text-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-brand-dark text-white font-display font-extrabold text-2xl flex items-center justify-center mx-auto mb-6 ring-8 ring-concrete-gray border border-brand-dark">
                  {i + 1}
                </div>
                <h4 className="font-display font-bold text-xl text-brand-dark mb-4 uppercase tracking-wide">{step.title}</h4>
                <p className="text-brand-dark/70 leading-relaxed max-w-xs mx-auto font-sans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-red-500 uppercase mb-3">URGENT</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Why Act Now</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {warnings.map((warning, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="flex items-start gap-6 p-8 card-concrete-glass border-red-500/30">
                <div className="w-16 h-16 rounded-xl border border-red-500 flex items-center justify-center shrink-0 bg-red-50 text-red-500">
                  <warning.icon size={28} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">{warning.title}</h4>
                  <p className="text-brand-dark/70 leading-relaxed font-sans">{warning.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Related Blogs Section */}
      <RelatedPosts category="IT & Security" />

      <section className="relative py-24 overflow-hidden text-white text-center" style={{ background: '#161616' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-red-500 mb-6">Website Hacked? Get Emergency Help Now</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Don't wait. WhatsApp us now for immediate recovery.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919654387865?text=Emergency:%20My%20website%20is%20hacked."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer bg-red-600 border-red-600"
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

export default FixHackedWebsite;
