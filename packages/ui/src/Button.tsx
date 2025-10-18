import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary'|'ghost'|'outline'|'subtle'|'danger';
  size?: 'sm'|'md'|'lg';
};

const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40';
const sizes = { sm: 'h-9 px-3 text-sm', md: 'h-10 px-4 text-base', lg: 'h-12 px-6 text-base' };
const variants = {
  primary: 'bg-primary text-bg hover:opacity-90',
  ghost: 'bg-transparent text-primary hover:bg-primary/10',
  outline: 'border border-primary text-primary hover:bg-primary/10',
  subtle: 'bg-surface text-text hover:bg-surface/80',
  danger: 'bg-red-600 text-white hover:bg-red-500'
};

export function Button({ variant='primary', size='md', className='', ...props }: Props) {
  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}
