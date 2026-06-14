import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { 
  MessageCircle, ArrowRight, ChevronDown, CheckCircle2, Loader2, Mail, Clock
} from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    numUsers: '',
    planInterest: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: serverTimestamp(),
        source: 'contact_page'
      });
      setStatus('success');
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        numUsers: '',
        planInterest: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const faqs = [
    { q: 'How quickly will I get a response?', a: 'We aim to respond to all inquiries within 2 hours during our business days (Mon–Sat, 9 AM – 8 PM IST).' },
    { q: 'Can I call instead of WhatsApp?', a: 'Yes! The phone number listed is also available for direct calls during business hours.' },
    { q: 'Do you offer demos before purchase?', a: 'We can arrange a screen-sharing session to walk you through the admin console and features.' },
    { q: 'What information should I have ready?', a: 'It helps to know if you already have a domain name, how many users you need, and if you have existing emails to migrate.' },
    { q: 'Do you provide support after setup?', a: 'Absolutely. We provide dedicated support via WhatsApp and email for all active clients.' }
  ];

  return (
    <>
      <SEO title="Contact Us | WorkspaceBays" description="Contact WorkspaceBays for Google Workspace, Microsoft 365, and Cloud Services. We respond within 2 hours." />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">GET IN TOUCH</h2>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Contact WorkspaceBays</h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">Have questions about Google Workspace, Microsoft 365, or any of our services? We respond within 2 hours on business days.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-transparent border-t border-brand-dark/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side - Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              
              <div className="p-8 card-concrete-glass flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl border border-brand-dark flex items-center justify-center bg-white text-solar-orange">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">WhatsApp Us</h4>
                  <p className="text-brand-dark/70 font-sans mb-4">Fastest Response. Message us directly.</p>
                  <a href="https://wa.me/919654387865" target="_blank" rel="noopener noreferrer" className="text-solar-orange font-bold font-mono tracking-wider hover:underline flex items-center gap-2">
                    +91 96543 87865 <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="p-8 card-concrete-glass flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl border border-brand-dark flex items-center justify-center bg-white text-solar-orange">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">Email Us</h4>
                  <p className="text-brand-dark/70 font-sans mb-4">For detailed inquiries and support.</p>
                  <a href="mailto:karanmandal9654@gmail.com" className="text-solar-orange font-bold font-mono tracking-wider hover:underline flex items-center gap-2">
                    karanmandal9654@gmail.com <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="p-8 card-concrete-glass flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl border border-brand-dark flex items-center justify-center bg-white text-solar-orange">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-brand-dark mb-2 uppercase tracking-wide">Business Hours</h4>
                  <p className="text-brand-dark/70 font-sans">Monday – Saturday</p>
                  <p className="text-brand-dark font-bold font-mono tracking-wider mt-1">9:00 AM – 8:00 PM IST</p>
                </div>
              </div>

            </motion.div>

            {/* Right Side - Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="p-8 md:p-10 card-concrete-glass relative overflow-hidden bg-white/40">
                <div className="absolute top-0 right-0 w-64 h-64 bg-solar-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center h-full">
                    <div className="w-20 h-20 bg-google-green/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="text-google-green w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-brand-dark mb-4 uppercase tracking-wide">Request Received!</h3>
                    <p className="text-brand-dark/60 font-sans mb-8">We will contact you via WhatsApp or Email shortly to finalize your setup.</p>
                    <button onClick={() => setStatus('idle')} className="btn-solar-dark px-8 py-3 text-sm">
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group flex flex-col gap-2">
                        <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase transition-colors duration-200 group-focus-within:text-solar-orange">Your Name</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all placeholder:text-brand-dark/20 font-sans shadow-none" placeholder="Ravi Kumar" />
                      </div>
                      <div className="group flex flex-col gap-2">
                        <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase transition-colors duration-200 group-focus-within:text-solar-orange">Business Name</label>
                        <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all placeholder:text-brand-dark/20 font-sans shadow-none" placeholder="Acme Pvt Ltd" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group flex flex-col gap-2">
                        <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase transition-colors duration-200 group-focus-within:text-solar-orange">Email</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all placeholder:text-brand-dark/20 font-sans shadow-none" placeholder="ravi@company.com" />
                      </div>
                      <div className="group flex flex-col gap-2">
                        <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase transition-colors duration-200 group-focus-within:text-solar-orange">Phone</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all placeholder:text-brand-dark/20 font-sans shadow-none" placeholder="+91 96543 87865" />
                      </div>
                    </div>
                    <div className="group flex flex-col gap-2">
                      <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase transition-colors duration-200 group-focus-within:text-solar-orange">Number of Users</label>
                      <select name="numUsers" value={formData.numUsers} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all font-sans shadow-none">
                        <option value="">Select team size</option>
                        <option value="1–5 users">1–5 users</option>
                        <option value="6–10 users">6–10 users</option>
                        <option value="11–25 users">11–25 users</option>
                        <option value="26–50 users">26–50 users</option>
                        <option value="50+ users">50+ users</option>
                      </select>
                    </div>
                    <div className="group flex flex-col gap-2">
                      <label className="block text-xs font-mono tracking-wider text-brand-dark/60 uppercase transition-colors duration-200 group-focus-within:text-solar-orange">Plan Interest</label>
                      <select name="planInterest" value={formData.planInterest} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark bg-white/60 focus:bg-white focus:border-solar-orange outline-none transition-all font-sans shadow-none">
                        <option value="">Select a plan</option>
                        <option value="Google Workspace Starter">Google Workspace Starter</option>
                        <option value="Google Workspace Standard">Google Workspace Standard</option>
                        <option value="Microsoft 365 Basic">Microsoft 365 Basic</option>
                        <option value="Microsoft 365 Standard">Microsoft 365 Standard</option>
                        <option value="Email Migration">Email Migration</option>
                        <option value="Fix Hacked Website">Fix Hacked Website</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    {status === 'error' && (
                      <p className="text-google-red text-sm font-bold text-center">Something went wrong. Please try again or message us on WhatsApp.</p>
                    )}

                    <button disabled={status === 'submitting'} className="w-full py-4 btn-solar-orange text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-none font-bold uppercase tracking-wide active:scale-[0.98] transition-all duration-150">
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          SENDING...
                        </>
                      ) : (
                        'START MY SETUP →'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Prefer WhatsApp? Message Us Directly</h2>
          <div className="flex justify-center mt-10">
            <a
              href="https://wa.me/919654387865?text=Hi%2C%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer"
            >
              <MessageCircle size={20} />
              WHATSAPP US
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
