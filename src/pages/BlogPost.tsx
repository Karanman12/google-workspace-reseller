import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import BlogLayout from '../components/blog/BlogLayout';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogs.find(b => b.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogLayout post={post} />;
};

export default BlogPost;
