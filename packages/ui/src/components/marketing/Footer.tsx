import * as React from "react";

import { cx } from "../../utils/cx";

export type LinkItem = { label: string; href: string };
export type FooterColumn = { title: string; links: LinkItem[] };
export type FooterProps = {
  columns: FooterColumn[];
  social?: React.ReactNode;
  note?: string;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ columns, social, note, className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cx("footer", className)} {...props}
      >
        <div className="footer-container">
          {columns.map((col, i) => (
            <div key={i} className="footer-column">
              <h3 className="footer-column-title">{col.title}</h3>
              <ul className="footer-links">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a
                      className="footer-link"
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
        <div className="footer-bottom">
          <div className="footer-note">
            {note ?? "© 2025 Votre société. Tous droits réservés."}
          </div>
          {social && <div className="footer-social">{social}</div>}
        </div>
      </footer>
    );
  },
);
Footer.displayName = "Footer";
