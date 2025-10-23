import * as React from "react";
import { cx } from "../../utils/cx";

export type LinkItem = { label: string; href: string };
export type FooterColumn = { title: string; links: LinkItem[] };
export interface MarketingFooterProps extends React.HTMLAttributes<HTMLElement> {
  columns: FooterColumn[];
  social?: React.ReactNode;
  note?: string;
}

export const MarketingFooter = React.forwardRef<HTMLElement, MarketingFooterProps>(
  ({ columns, social, note, className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cx("w-full mx-auto px-4 md:px-6 py-12 border-t border-white/10", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {columns.map((col, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-white mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a
                      className="text-[var(--text-muted)] hover:text-white transition-colors"
                      href={l.href}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl mt-8 flex items-center justify-between gap-4">
          <div className="text-sm text-[var(--text-muted)]">
            {note ?? "© 2025 Votre société. Tous droits réservés."}
          </div>
          {social && <div className="flex gap-3">{social}</div>}
        </div>
      </footer>
    );
  },
);
MarketingFooter.displayName = "MarketingFooter";
