import React from 'react';
import { motion } from 'motion/react';
import { BlogPost } from '../../data/blogs';
import BlogCategory from './BlogCategory';

const BlogHero = ({ post }: { post: BlogPost }) => {
  return (
    <section className="pt-32 pb-12 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex justify-center gap-3 mb-6">
            {post.categories.map(cat => (
              <BlogCategory key={cat} category={cat} />
            ))}
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-mono text-brand-dark/50">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-brand-dark/20" />
            <span>{post.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-brand-dark/20" />
            <span>By {post.author.name}</span>
          </div>
        </motion.div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl border border-brand-dark/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
