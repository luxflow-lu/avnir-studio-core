import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary'|'secondary'|'ghost'|'danger';
  size?: 'sm'|'md'|'lg';
};

const base = 'inline-flex items-center justify-center font-medium rounded-[var(--radius-sm)] shadow-sm transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
const sizes = { sm: 'h-9 px-3 text-sm', md: 'h-10 px-4 text-base', lg: 'h-12 px-6 text-base' };
const variants = {
  primary: 'bg-[var(--brand)] text-[var(--brand-on)] hover:opacity-90',
  secondary: 'border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--brand-on)]',
  ghost: 'bg-transparent text-[var(--brand)] hover:bg-white/5',
  danger: 'bg-red-600 text-white hover:bg-red-500'
};

export function Button({ variant='primary', size='md', className='', ...props }: Props) {
  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}
