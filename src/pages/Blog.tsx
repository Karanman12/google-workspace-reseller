import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import { MessageCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { blogs } from '../data/blogs';
import BlogCard from '../components/blog/BlogCard';
import BlogCategory from '../components/blog/BlogCategory';

const Blog = () => {
  // Use the first post as the featured post
  const featuredPost = blogs[0];
  const gridPosts = blogs.slice(1);

  return (
    <>
      <SEO title="Blog & Insights | WorkspaceBays" description="Tips, tutorials, and industry insights to help your business get the most out of cloud tools like Google Workspace and Microsoft 365." canonical="/blog" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">BLOG</h2>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">Insights & Guides for Modern Businesses</h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">Tips, tutorials, and industry insights to help your business get the most out of cloud tools like Google Workspace and Microsoft 365.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link to={`/blog/${featuredPost.slug}`} className="group block p-8 md:p-12 card-concrete-glass hover:border-solar-orange/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div className="flex-1 space-y-4">
                    <div className="flex gap-2">
                      {featuredPost.categories.map(cat => (
                        <BlogCategory key={cat} category={cat} />
                      ))}
                    </div>
                    <h3 className="font-display text-2xl md:text-4xl font-extrabold text-brand-dark leading-tight group-hover:text-solar-orange transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-brand-dark/70 text-lg leading-relaxed max-w-3xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <span className="text-sm font-mono text-brand-dark/40">{featuredPost.date}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-dark/20" />
                      <span className="text-sm font-bold text-brand-dark flex items-center gap-1 group-hover:text-solar-orange transition-colors">
                        Read Article <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 pb-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden text-white text-center" style={{ background: '#161616' }}>
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Need Help Choosing the Right Plan?</h2>
          <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Our team can help you find the perfect workspace solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919654387865?text=Hello%20WorkspaceBays%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
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

export default Blog;
