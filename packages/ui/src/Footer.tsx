import * as React from 'react';
export function Footer(){
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="max-w-[var(--container-xl)] mx-auto px-[clamp(1rem,4vw,2rem)] py-10 text-sm text-muted">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p>© {new Date().getFullYear()} AVNIR-Studio — Tous droits réservés.</p>
          <ul className="flex items-center gap-4">
            <li><a className="hover:text-primary" href="/legal">Mentions légales</a></li>
            <li><a className="hover:text-primary" href="/privacy">Confidentialité</a></li>
            <li><a className="hover:text-primary" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
