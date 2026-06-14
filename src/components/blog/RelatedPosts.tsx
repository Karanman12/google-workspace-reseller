import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogs } from '../../data/blogs';
import BlogCard from './BlogCard';

const RelatedPosts = ({ currentSlug, category }: { currentSlug?: string; category?: string }) => {
  // Filter blogs by category if provided, and exclude the current post
  let filteredBlogs = blogs.filter(post => post.slug !== currentSlug);
  
  if (category) {
    filteredBlogs = filteredBlogs.filter(post => post.categories.includes(category));
  }
  
  // Take top 3
  const related = filteredBlogs.slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-24 bg-transparent border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">RESOURCES</h2>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight leading-tight">Related Articles</h3>
          </motion.div>
          <Link to="/blog" className="text-solar-orange font-bold hover:underline flex items-center gap-1 shrink-0">
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
