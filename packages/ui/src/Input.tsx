import * as React from 'react';
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className='', ...props }, ref) => (
    <input ref={ref} className={`h-10 w-full rounded-[var(--radius-sm)] bg-bg/60 border border-white/10 px-3 placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)/0.4] ${className}`} {...props} />
  )
);
Input.displayName = 'Input';
