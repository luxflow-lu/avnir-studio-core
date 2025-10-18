import * as React from 'react';
type Link = { label: string; href: string };
export function Navbar({ logo, links = [], cta }:{ logo?:React.ReactNode; links?:Link[]; cta?:React.ReactNode }) {
  return (
    <header className="sticky top-0 z-50 w-full h-[4.5rem] bg-[color:var(--bg)/0.7] backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bg)/0.5] border-b border-white/5">
      <div className="max-w-[var(--container-xl)] mx-auto px-[clamp(1rem,4vw,2rem)] h-full flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">{logo ?? <span className="inline-flex h-8 w-8 rounded-lg bg-primary/20" />}</div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map(l => <a key={l.label} href={l.href} className="hover:text-primary">{l.label}</a>)}
        </nav>
        <div className="hidden md:block">
          {cta ?? <a className="inline-flex h-10 items-center rounded-lg bg-primary px-4 text-[color:var(--bg)] font-medium">Commencer</a>}
        </div>
      </div>
    </header>
  );
}
