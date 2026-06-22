import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, ArrowRight, ShieldCheck, Mail, HardDrive, ShoppingCart, Lock, MonitorSmartphone, CheckCircle2, Zap, Wallet
} from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { SITE_URL } from '../config/constants';
import { HeroBackground } from '../components/HeroBackground';
import { HeroTypography } from '../components/HeroTypography';
import { FloatingDashboard } from '../components/FloatingDashboard';

const Typewriter = () => {
  const words = ['Microsoft 365', 'Google Workspace', 'Email Migration', 'Website Security'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-[#E65A28]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = ({ startAnimation = true }: { startAnimation?: boolean }) => {
  return (
    <section className="relative pt-20 pb-12 overflow-hidden">
      <HeroBackground>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center min-h-[65vh] justify-center">
            <HeroTypography
              badge="AUTHORIZED CLOUD PARTNER"
              headline="Your Harbor for Cloud Solutions."
              subheadline={<Typewriter />}
              description="Premium Google Workspace & Microsoft 365 licenses — INR billing, zero-downtime migrations, and complete web security."
              startAnimation={startAnimation}
            >
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16"
                initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                animate={startAnimation ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: 30, filter: 'blur(4px)' }}
                transition={{ duration: 0.65, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <a 
                  href="https://wa.me/919654387865?text=Hello%20WorkspaceBays%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
                >
                  <MessageCircle size={20} />
                  WHATSAPP US
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer"
                >
                  EXPLORE SERVICES
                </button>
              </motion.div>

              <motion.div 
                className="flex flex-wrap justify-center gap-8"
                initial="hidden"
                animate={startAnimation ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.7
                    }
                  }
                }}
              >
                {[
                  { icon: CheckCircle2, text: 'Genuine Licenses' },
                  { icon: Wallet, text: 'INR Billing' },
                  { icon: Zap, text: '24hr Setup' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 20, filter: 'blur(2px)' },
                      visible: { 
                        opacity: 1, 
                        x: 0, 
                        filter: 'blur(0px)',
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                      }
                    }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <item.icon size={18} className="text-google-green" />
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </HeroTypography>
          </div>
          
          <div className="mt-16">
            <FloatingDashboard startAnimation={startAnimation} />
          </div>
        </div>
      </HeroBackground>
    </section>
  );
};

const ServiceSection = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  reverse = false,
  highlights = [] as { text: string }[]
}: { 
  title: string, 
  description: string, 
  icon: any, 
  link: string, 
  reverse?: boolean,
  highlights?: { text: string }[]
}) => (
  <section className="py-12 md:py-16 bg-transparent border-t border-brand-dark/5">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-8 lg:gap-10`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="w-12 h-12 rounded-xl bg-solar-orange/10 flex items-center justify-center mb-4 border border-solar-orange/20 text-solar-orange">
            <Icon size={24} />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-brand-dark mb-3 tracking-tight leading-tight">{title}</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-lg">{description}</p>
          <Link to={link} className="btn-solar-dark px-7 py-3.5 inline-flex items-center gap-2 group text-sm">
            LEARN MORE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        {highlights.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full self-stretch flex flex-col justify-center"
          >
            <div className="card-concrete-glass p-6 md:p-8 space-y-3.5 h-full flex flex-col justify-center">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-google-green shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-dark/70 font-sans leading-relaxed">{h.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

const Stats = () => {
  const stats = [
    { value: '500+', label: 'Businesses Supported' },
    { value: 'Zero', label: 'Downtime Migrations' },
    { value: '100%', label: 'Websites Secured' },
    { value: '4.9★', label: 'Client Satisfaction' }
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden text-white" style={{ background: '#161616' }}>
      <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.04) 75%, rgba(255,255,255,0.04) 76%, transparent 77%, transparent)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[11px] font-bold text-[#E65A28] uppercase tracking-[0.25em] mb-4">
            PROVEN TRACK RECORD
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-6">
            Empowering Indian businesses with world-class cloud infrastructure.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-8 border-t border-white/[0.06]">
          {stats.map((stat, i) => (
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
  );
};

const ContactCTA = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-concrete-glass p-8 md:p-12 border-solar-orange/20 shadow-[0_20px_50px_rgba(255,113,32,0.04)]">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight mb-6">Need help choosing a solution?</h2>
          <p className="text-gray-500 text-lg mb-8">Talk to the WorkspaceBays team today. We'll assess your needs and recommend the perfect setup.</p>
          <Link to="/contact" className="btn-solar-orange px-10 py-5 text-lg inline-flex items-center gap-2 group shadow-none">
            TALK TO WORKSPACEBAYS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  const { startAnimation } = useOutletContext<any>() || { startAnimation: true };

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'WorkspaceBays',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9654387865',
        contactType: 'customer service'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'WorkspaceBays',
      url: SITE_URL
    }
  ];

  return (
    <>
      <SEO 
        title="WorkspaceBays" 
        description="Premium, fully-managed Google Workspace and Microsoft 365 licenses at the best prices in India with 24/7 support and 24-hour setup." 
        canonical="/"
        schema={schemas}
      />
      <Hero startAnimation={startAnimation} />
      
      <div id="services">
        <ServiceSection 
          title="Google Workspace" 
          description="Professional email, secure cloud storage, and video conferencing. Get authentic Google Workspace licenses billed locally in INR." 
          icon={Mail} 
          link="/google-workspace"
          highlights={[
            { text: 'Professional Gmail on your own domain (you@company.com)' },
            { text: 'Google Drive cloud storage — 30GB to 5TB per user' },
            { text: 'Google Meet HD video calls with up to 500 participants' },
            { text: 'Save up to 30% vs direct Google pricing with INR billing' }
          ]}
        />
        <ServiceSection 
          title="Microsoft 365" 
          description="The ultimate productivity suite. Power your business with Outlook, Teams, Word, Excel, and OneDrive — all fully managed." 
          icon={HardDrive} 
          link="/microsoft-365" 
          reverse={true}
          highlights={[
            { text: 'Outlook professional email with custom business domain' },
            { text: 'Desktop apps: Word, Excel, PowerPoint — full offline access' },
            { text: 'Microsoft Teams for chat, calls, and collaboration' },
            { text: '1TB OneDrive cloud storage per user included' }
          ]}
        />
        <ServiceSection 
          title="Email Migration" 
          description="Moving to a new platform? We guarantee zero-downtime, zero-data-loss migrations from any provider (cPanel, GoDaddy, Yahoo, etc.)." 
          icon={Zap} 
          link="/email-migration"
          highlights={[
            { text: 'Zero downtime — your team keeps working during migration' },
            { text: 'Complete transfer: emails, contacts, calendars, and files' },
            { text: 'Supports cPanel, GoDaddy, Yahoo, IMAP/POP3, and more' },
            { text: 'DNS and MX record configuration handled for you' }
          ]}
        />
        <ServiceSection 
          title="Fix Hacked Website" 
          description="Website compromised? We offer emergency malware removal, backdoor patching, and Google Blacklist removal within 24 hours." 
          icon={ShieldCheck} 
          link="/fix-hacked-website" 
          reverse={true}
          highlights={[
            { text: '24-hour emergency response and recovery' },
            { text: '100% malware and backdoor removal guarantee' },
            { text: 'Google Blacklist and spam content cleanup' },
            { text: 'Security hardening and ongoing monitoring setup' }
          ]}
        />
        <ServiceSection 
          title="SSL Certificates" 
          description="Secure your domains and boost your SEO with Premium DV, OV, and EV certificates from the world's top Certificate Authorities." 
          icon={Lock} 
          link="/ssl-certificate"
          highlights={[
            { text: 'DV, OV, and EV certificates for any domain' },
            { text: 'HTTPS padlock boosts Google search ranking' },
            { text: 'Browser trust signals increase visitor confidence' },
            { text: 'Complete installation and renewal management' }
          ]}
        />
        <ServiceSection 
          title="Website Design" 
          description="Beautiful, fast-loading, and fully responsive business websites engineered specifically to convert visitors into customers." 
          icon={MonitorSmartphone} 
          link="/website-design" 
          reverse={true}
          highlights={[
            { text: 'Mobile-first responsive design for all devices' },
            { text: 'SEO-optimized structure for Google visibility' },
            { text: 'Sub-second page load speeds for better conversions' },
            { text: 'Lead generation focused with clear CTAs' }
          ]}
        />
        <ServiceSection 
          title="Ecommerce Development" 
          description="Start selling online with scalable storefronts, secure payment gateway integrations, and comprehensive catalog management." 
          icon={ShoppingCart} 
          link="/ecommerce-website"
          highlights={[
            { text: 'Product catalog with categories, filters, and search' },
            { text: 'Razorpay, PayU, and UPI payment gateway integration' },
            { text: 'Order tracking, inventory, and customer management' },
            { text: 'Mobile-optimized shopping experience' }
          ]}
        />
      </div>

      <Stats />
      <ContactCTA />
    </>
  );
};

export default Home;