import * as React from 'react';
export function Notice({ children, className='' }: {children:React.ReactNode; className?:string}){
  return (
    <div className={`rounded-xl border border-yellow-400/20 bg-yellow-400/5 text-yellow-100 px-4 py-3 text-sm ${className}`}>
      {children}
    </div>
  );
}
