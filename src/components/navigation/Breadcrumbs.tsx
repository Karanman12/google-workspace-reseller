import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-brand-dark/60 font-mono tracking-wide py-4 mb-8">
      <Link to="/" className="hover:text-solar-orange transition-colors flex items-center gap-1">
        <Home size={14} />
        Home
      </Link>
      {pathnames.length > 0 && <ChevronRight size={14} />}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        // Format the title by splitting on dashes and capitalizing words
        const title = value
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return last ? (
          <span key={to} className="text-brand-dark font-bold">
            {title}
          </span>
        ) : (
          <React.Fragment key={to}>
            <Link to={to} className="hover:text-solar-orange transition-colors">
              {title}
            </Link>
            <ChevronRight size={14} />
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
