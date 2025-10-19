import * as React from "react";
import { Button } from "../primitives/Button";

export function Navbar({ logo, links = [], cta }:{
  logo?: React.ReactNode;
  links: {label:string; href:string}[];
  cta?: {label:string; href:string};
}) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg)]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
        <a className="text-white font-semibold">{logo ?? "Brand"}</a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => <a key={l.href} href={l.href} className="text-[var(--text-muted)] hover:text-white">{l.label}</a>)}
        </nav>
        {cta && (
          <a href={cta.href} className="hidden md:inline-flex">
            <Button>{cta.label}</Button>
          </a>
        )}
      </div>
    </header>
  );
}
