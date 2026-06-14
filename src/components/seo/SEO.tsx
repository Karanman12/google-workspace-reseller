import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical }: { title: string; description: string; canonical?: string }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      {canonical && <meta property="twitter:url" content={canonical} />}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
