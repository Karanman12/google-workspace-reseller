import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <SEO title="404 - Page Not Found | WorkspaceBays" description="The page you are looking for does not exist." />
      <h1 className="font-display text-8xl md:text-9xl font-extrabold text-brand-dark mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/"
        className="btn-solar-orange px-8 py-4 text-base font-bold uppercase tracking-wide inline-flex items-center"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
