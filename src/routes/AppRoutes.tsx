import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Pricing from '../pages/Pricing';

import GoogleWorkspace from '../pages/services/GoogleWorkspace';
import Microsoft365 from '../pages/services/Microsoft365';
import EmailMigration from '../pages/services/EmailMigration';
import FixHackedWebsite from '../pages/services/FixHackedWebsite';
import SSLCertificate from '../pages/services/SSLCertificate';
import WebsiteDesign from '../pages/services/WebsiteDesign';
import EcommerceWebsite from '../pages/services/EcommerceWebsite';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="pricing" element={<Pricing />} />
        
        <Route path="google-workspace" element={<GoogleWorkspace />} />
        <Route path="microsoft-365" element={<Microsoft365 />} />
        <Route path="email-migration" element={<EmailMigration />} />
        <Route path="fix-hacked-website" element={<FixHackedWebsite />} />
        <Route path="ssl-certificate" element={<SSLCertificate />} />
        <Route path="website-design" element={<WebsiteDesign />} />
        <Route path="ecommerce-website" element={<EcommerceWebsite />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
