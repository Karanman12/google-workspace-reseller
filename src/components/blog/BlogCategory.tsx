import React from 'react';

const BlogCategory = ({ category }: { category: string; key?: React.Key }) => {
  return (
    <span className="text-[11px] font-mono font-bold tracking-widest text-solar-orange uppercase">
      {category}
    </span>
  );
};

export default BlogCategory;
