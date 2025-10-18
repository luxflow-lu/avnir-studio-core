import * as React from 'react';
export function Badge({ children, className='' }: {children:React.ReactNode; className?:string}){
  return <span className={`inline-flex items-center rounded-full bg-primary/15 text-primary px-2 py-0.5 text-xs ${className}`}>{children}</span>;
}
