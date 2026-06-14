import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import { 
  MessageCircle, ArrowRight, Mail, Users, Calendar, FileText, List, Settings, ChevronDown
} from 'lucide-react';

const EmailMigration = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { icon: Mail, title: 'Emails & Attachments', desc: 'Complete transfer of your entire inbox history and all attachments.' },
    { icon: Users, title: 'Contacts & Address Books', desc: 'Securely copy all your business contacts and directory.' },
    { icon: Calendar, title: 'Calendars & Events', desc: 'Keep your schedules intact across your organization.' },
    { icon: FileText, title: 'Files & Documents', desc: 'Migrate your cloud files directly to Google Drive or OneDrive.' },
    { icon: List, title: 'Distribution Lists', desc: 'Preserve your group email addresses and team configurations.' },
    { icon: Settings, title: 'Custom Configurations', desc: 'We help recreate your specific mail rules and signatures.' }
  ];

  const steps = [
    { title: 'Step 1: Assessment', desc: 'We audit your current email setup' },
    { title: 'Step 2: Planning', desc: 'Custom migration plan with timeline' },
    { title: 'Step 3: Migration', desc: 'Seamless data transfer with monitoring' },
    { title: 'Step 4: Verification', desc: 'Complete validation and handover' }
  ];

  const platforms = [
    'cPanel/Webmail → Google Workspace',
    'GoDaddy Email → Google Workspace',
    'Microsoft 365 → Google Workspace',
    'Google Workspace → Microsoft 365',
    'Yahoo Business → Google Workspace',
    'Any IMAP/POP3 → Google Workspace or M365'
  ];

  const faqs = [
    { q: 'Will there be any downtime during migration?', a: 'No, we utilize background sync and DNS cutovers to ensure zero downtime. You will continue receiving emails normally.' },
    { q: 'How long does a typical migration take?', a: 'A standard migration takes 24-48 hours depending on mailbox sizes, but your business continues running uninterrupted during this period.' },
    { q: 'Will I lose any emails during migration?', a: 'Absolutely not. We guarantee 100% data integrity and run verification checks after completion.' },
    { q: 'Can you migrate from any email provider?', a: 'Yes, we can migrate from virtually any IMAP/POP3 enabled provider, Microsoft 365, GoDaddy, cPanel, and more.' },
    { q: 'Do you handle DNS and MX record changes?', a: 'Yes, our experts handle the complete technical DNS switch so you do not have to worry about the technical details.' },
    { q: 'What happens to my old email account?', a: 'Your old email account data will be synced over. Once the MX records switch, new emails will flow to your new workspace.' }
  ];

  return (
    <>
      <SEO title="Email Migration | WorkspaceBays" description="Seamless Email Migration — Zero Downtime, Zero Data Loss. Moving to Google Workspace or Microsoft 365." />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">EMAIL MIGRATION</h2>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Seamless Email Migration — Zero Downtime, Zero Data Loss</h1>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl">Moving to Google Workspace or Microsoft 365? We handle the complete migration of your emails, contacts, calendars, and files — with zero downtime and zero data loss.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919654387865?text=Hi%2C%20I%20need%20help%20with%20email%20migration."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
                >
                  <MessageCircle size={20} />
                  WHATSAPP US
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer flex items-center justify-center"
                >
                  LEARN MORE
                </button>
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
          <p className="text-[11px] font-bold text-[#E65A28] uppercase tracking-[0.25em] mb-4 text-center md:text-left">EXPERTISE</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-16 text-center md:text-left">Flawless data transitions.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-10 border-t border-white/[0.06]">
            {[
              { label: 'Uptime', value: 'Zero Downtime' },
              { label: 'Experience', value: '500+ Migrations Done' },
              { label: 'Versatility', value: 'All Platforms Supported' },
              { label: 'Security', value: 'Data Integrity Guaranteed' }
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

      {/* What We Migrate Section */}
      <section id="features" className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">WHAT WE MIGRATE</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Everything transfers smoothly</h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">We ensure no data is left behind during your transition.</p>
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

      {/* Process Section */}
      <section className="py-24 bg-transparent overflow-hidden border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">MIGRATION PROCESS</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark tracking-tight leading-tight">How It Works</h3>
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

      {/* Supported Platforms Section */}
      <section className="py-24 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">PLATFORMS</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Platforms We Support</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform, i) => (
              <motion.div key={i} whileHover={{ y: -3 }} className="p-6 card-concrete-glass text-center font-bold font-sans text-brand-dark">
                {platform}
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Ready to Migrate Your Emails?</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">WhatsApp us now for a seamless transition.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919654387865?text=Hi%2C%20I%20am%20ready%20for%20email%20migration."
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

export default EmailMigration;
