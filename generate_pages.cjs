const fs = require('fs');
const path = require('path');

const pagesDir = path.join('src', 'pages');
const servicesDir = path.join(pagesDir, 'services');

if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
if (!fs.existsSync(servicesDir)) fs.mkdirSync(servicesDir, { recursive: true });

const generateContent = (title, folderDepth = '') => `import React from 'react';
import SEO from '${folderDepth}../components/seo/SEO';

const ${title.replace(/[^a-zA-Z0-9]/g, '')} = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <SEO title="${title} | WorkspaceBays" description="${title} page for WorkspaceBays." />
      <div className="text-center mb-16 pt-20">
        <h2 className="text-xs sm:text-sm font-mono tracking-[0.2em] text-solar-orange uppercase mb-3">${title}</h2>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
          Coming Soon
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-10">We are currently working on this page. Check back later.</p>
        
        <a 
          href="/contact"
          className="inline-block py-4 px-8 btn-solar-orange text-base cursor-pointer font-bold uppercase tracking-wide"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')};
`;

const pages = ['About', 'Contact', 'Blog', 'Pricing'];
const services = [
  'Google Workspace',
  'Microsoft 365',
  'Email Migration',
  'Fix Hacked Website',
  'SSL Certificate',
  'Website Design',
  'Ecommerce Website'
];

pages.forEach(page => {
  const file = path.join(pagesDir, `${page}.jsx`);
  fs.writeFileSync(file, generateContent(page, ''));
});

services.forEach(service => {
  const filename = service.replace(/\s+/g, '') + '.jsx';
  const file = path.join(servicesDir, filename);
  fs.writeFileSync(file, generateContent(service, '../'));
});
