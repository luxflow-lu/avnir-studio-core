import * as React from 'react';
export function Navbar({ left, right }:{ left?: React.ReactNode; right?: React.ReactNode }){
  return (
    <header className="w-full bg-bg/70 backdrop-blur supports-[backdrop-filter]:bg-bg/50 border-b border-white/5">
      <div className="max-w-[var(--container-xl)] mx-auto px-[clamp(1rem,4vw,2rem)] h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">{left ?? <span className="inline-flex h-8 w-8 rounded-lg bg-primary/20" />}</div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">{right}</nav>
        <div className="md:hidden" />
      </div>
    </header>
  );
}
