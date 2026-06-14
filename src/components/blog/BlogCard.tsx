import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BlogPost } from '../../data/blogs';
import BlogCategory from './BlogCategory';

const BlogCard = ({ post, index = 0 }: { post: BlogPost; index?: number; key?: React.Key }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="h-full">
      <Link to={`/blog/${post.slug}`} className="group block h-full p-8 card-concrete-glass hover:border-brand-dark/30 transition-all duration-300 flex flex-col">
        <div className="flex gap-2 flex-wrap mb-4">
          {post.categories.map(cat => (
            <BlogCategory key={cat} category={cat} />
          ))}
        </div>
        <h4 className="font-display text-xl font-bold text-brand-dark mb-3 leading-snug group-hover:text-solar-orange transition-colors">
          {post.title}
        </h4>
        <p className="text-brand-dark/70 text-sm leading-relaxed mb-6 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-dark/10">
          <span className="text-xs font-mono text-brand-dark/40">{post.date}</span>
          <span className="text-solar-orange font-bold text-sm hover:underline flex items-center gap-1">
            Read Article <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
