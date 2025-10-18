import * as React from 'react';
type Size = 'sm'|'md'|'lg';
export function Section({ className='', size='md', ...props }: React.HTMLAttributes<HTMLElement> & { size?: Size }){
  const pad = size === 'sm' ? 'py-[var(--section-sm)]' : size === 'lg' ? 'py-[var(--section-lg)]' : 'py-[var(--section-md)]';
  return <section className={`max-w-[var(--container-xl)] mx-auto px-[clamp(1rem,4vw,2rem)] ${pad} ${className}`} {...props} />;
}
