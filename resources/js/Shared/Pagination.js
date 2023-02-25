import React, { memo } from 'react'
import { Link } from '@inertiajs/react';

const PageLink = memo(({ active, label, url }) => {
  return (
    <Link className={`mx-2 text-gray-600 text-sm ${active ? 'border-{side}-2 border-b border-gray-600' : ''}`} href={url}>
      <span dangerouslySetInnerHTML={{ __html: label }}></span>
    </Link>
  );
})

const PageInactive = memo(({ label }) => {
  return (
    <div className="mx-2 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: label }} />
  );
})

const Pagination = memo(({ links = [] }) => {
  if (links.length === 3) return null;
  return (
    <div className="flex justify-center items-center mt-8">
      {links.map(({ active, label, url }) => {
        return url === null ? (
          <PageInactive key={label} label={label} />
        ) : (
          <PageLink key={label} label={label} active={active} url={url} />
        );
      })}
    </div>
  );
})

export default Pagination