import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../../components/seo/SEO';
import { 
  MessageCircle, ArrowRight, ShoppingCart, CreditCard, Package, Smartphone, ShieldCheck, TrendingUp, CheckCircle2, Star, Zap, Settings, ChevronDown
} from 'lucide-react';

const EcommerceWebsite = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { icon: ShoppingCart, title: 'Online Store Development', desc: 'Powerful, scalable e-commerce platforms built on WooCommerce or Shopify.' },
    { icon: Package, title: 'Product Catalog Management', desc: 'Easy-to-use interfaces for adding, editing, and categorizing your inventory.' },
    { icon: CreditCard, title: 'Payment Gateway Integration', desc: 'Seamless integration with Razorpay, Stripe, PayU, and other major providers.' },
    { icon: Settings, title: 'Order & Inventory Management', desc: 'Automated tracking, invoicing, and stock level notifications.' },
    { icon: Smartphone, title: 'Mobile Commerce Ready', desc: 'Optimized checkout experiences that convert mobile traffic into sales.' },
    { icon: TrendingUp, title: 'Marketing & Analytics', desc: 'Built-in SEO, discount engines, and Google Analytics e-commerce tracking.' }
  ];

  const packages = [
    {
      name: 'Starter Store',
      price: '₹25,000',
      tagline: 'Perfect for small catalogs',
      features: ['Up to 50 Products', 'Standard Payment Gateway', 'Basic Shipping Rules', 'Mobile Responsive'],
      popular: false
    },
    {
      name: 'Professional E-commerce',
      price: '₹55,000',
      tagline: 'Ideal for growing retail brands',
      features: ['Unlimited Products', 'Advanced Filtering', 'Multiple Payment Options', 'Abandoned Cart Recovery'],
      popular: true
    },
    {
      name: 'Enterprise Setup',
      price: 'Custom',
      tagline: 'High volume and custom needs',
      features: ['ERP/CRM Integrations', 'Multi-Vendor Support', 'Custom Checkout Flows', 'Dedicated Server Setup'],
      popular: false
    }
  ];

  const whyChooseUs = [
    { icon: ShieldCheck, title: 'Secure Transactions', desc: 'We implement rigorous security standards to protect customer data and payments.' },
    { icon: Zap, title: 'Optimized for Conversion', desc: 'Frictionless checkout processes designed to reduce cart abandonment.' },
    { icon: Package, title: 'End-to-End Solutions', desc: 'From domain registration to shipping API integrations, we handle it all.' },
    { icon: MessageCircle, title: 'Post-Launch Support', desc: 'We provide training on how to manage your store, plus ongoing technical support.' }
  ];

  const faqs = [
    { q: 'Which e-commerce platform do you use?', a: 'We specialize in WooCommerce (WordPress) for ultimate flexibility, but also build on Shopify and custom React/Next.js stacks depending on your requirements.' },
    { q: 'Can you integrate Indian payment gateways?', a: 'Yes, we seamlessly integrate Razorpay, Cashfree, PayU, CCAvenue, and international options like Stripe and PayPal.' },
    { q: 'Can you integrate shipping providers like Shiprocket?', a: 'Absolutely. We can connect your store with Shiprocket, Delhivery, or other logistics APIs for automated shipping calculation and tracking.' },
    { q: 'How many products can my store handle?', a: 'Our Professional and Enterprise builds can handle unlimited products. Performance depends on the hosting architecture, which we optimize for your catalog size.' },
    { q: 'Will I be able to manage the store myself?', a: 'Yes. We provide a comprehensive admin dashboard and training so you can easily manage products, orders, and customers.' },
    { q: 'Do you charge a percentage of my sales?', a: 'No. We only charge for the development and hosting. You keep 100% of your sales revenue (minus standard payment gateway fees).' }
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
        title="E-commerce Website Development | WorkspaceBays" 
        description="Professional Online Store Development, Product Catalogs, Payment Gateways, and Mobile Commerce solutions." 
        canonical="/ecommerce-website"
        schema={faqSchema}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">E-COMMERCE</h2>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Start Selling Online with Powerful E-commerce</h1>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl">Launch a robust, secure, and high-converting online store. We provide complete e-commerce solutions including product catalogs, secure payment gateways, and seamless order management. Pair your store with <Link to="/google-workspace" className="text-solar-orange hover:underline">Google Workspace</Link> for professional email, and secure it with our <Link to="/ssl-certificate" className="text-solar-orange hover:underline">SSL Certificates</Link>.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919654387865?text=Hi%2C%20I%20want%20to%20build%20an%20ecommerce%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
                >
                  <MessageCircle size={20} />
                  WHATSAPP US
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/contact" className="btn-solar-dark px-8 py-4 text-base shadow-none cursor-pointer flex items-center justify-center">
                  START YOUR STORE
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
          <p className="text-[11px] font-bold text-[#E65A28] uppercase tracking-[0.25em] mb-4 text-center md:text-left">SCALE</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#FAF9F6] leading-[1.1] mb-16 text-center md:text-left">Built for unlimited growth.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-10 border-t border-white/[0.06]">
            {[
              { label: 'Platform Focus', value: 'Online Store Development' },
              { label: 'Inventory', value: 'Product Catalog Mgmt' },
              { label: 'Transactions', value: 'Payment Gateway Setup' },
              { label: 'Experience', value: 'Mobile Commerce First' }
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
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">FEATURES</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Everything a modern store needs</h3>
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
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">PRICING</h2>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">E-commerce Packages</h3>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -6 }} className={`relative p-10 card-concrete-glass transition-all duration-300 ${pkg.popular ? 'border-solar-orange border-2 scale-105 z-10 bg-white/60 shadow-[0_20px_50px_rgba(255,113,32,0.04)]' : 'hover:border-brand-dark/30'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar-orange text-white px-4 py-1.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-1.5 border border-solar-orange/15 shadow-sm">
                    <Star size={12} fill="currentColor" /> BEST VALUE
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
                  GET QUOTE
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Ready to Start Selling Online?</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Launch your e-commerce store with our expert developers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919654387865?text=Hi%2C%20I%20am%20interested%20in%20building%20an%20ecommerce%20store."
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

export default EcommerceWebsite;
