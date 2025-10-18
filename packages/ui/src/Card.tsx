import * as React from 'react';
export function Card({ className='', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`bg-surface rounded-xl shadow-soft border border-white/5 ${className}`} {...props} />;
}
