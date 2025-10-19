import * as React from 'react';
export function Badge({ children, className='' }: {children:React.ReactNode; className?:string}){
  return <span className={`inline-flex items-center rounded-full bg-[color:var(--brand)/0.15] text-[var(--brand)] px-2 py-0.5 text-xs ${className}`}>{children}</span>;
}
