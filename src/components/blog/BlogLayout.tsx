import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../data/blogs';
import BlogHero from './BlogHero';
import RelatedPosts from './RelatedPosts';
import SEO from '../seo/SEO';
import Breadcrumbs from '../navigation/Breadcrumbs';
import { SITE_URL } from '../../config/constants';

const BlogLayout = ({ post }: { post: BlogPost }) => {
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.featuredImage}`,
    author: {
      '@type': 'Person',
      name: post.author.name
    },
    publisher: {
      '@type': 'Organization',
      name: 'WorkspaceBays',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`
      }
    },
    datePublished: post.date,
    dateModified: post.lastUpdated || post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`
    }
  };

  return (
    <>
      <SEO 
        title={post.metaTitle} 
        description={post.metaDescription} 
        canonical={`/blog/${post.slug}`}
        ogType="article"
        image={post.featuredImage}
        schema={blogPostingSchema}
      />
      
      <article className="min-h-screen bg-transparent">
        <BlogHero post={post} />

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <Breadcrumbs />
          
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-solar-orange prose-a:no-underline hover:prose-a:underline">
            {post.content}
          </div>

          <div className="mt-16 pt-10 border-t border-brand-dark/10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center text-white font-display font-bold text-xl">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-brand-dark font-display text-lg">{post.author.name}</p>
              <p className="text-brand-dark/60 text-sm font-sans">{post.author.role}</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <section className="relative py-24 overflow-hidden text-white text-center" style={{ background: '#161616' }}>
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] mb-6">Need help choosing the right solution?</h2>
            <p className="text-lg text-[#FAF9F6]/60 font-medium leading-relaxed mb-10">Talk to WorkspaceBays to find the perfect cloud infrastructure for your business.</p>
            <div className="flex justify-center">
              <Link to="/contact" className="btn-solar-orange px-8 py-4 text-base flex items-center justify-center gap-2 group shadow-none cursor-pointer">
                <MessageCircle size={20} />
                CONTACT WORKSPACEBAYS
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <RelatedPosts currentSlug={post.slug} category={post.categories[0]} />
      </article>
    </>
  );
};

export default BlogLayout;
