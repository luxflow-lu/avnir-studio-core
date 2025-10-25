import * as React from "react";
import { cx } from "../../utils/cx";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  sections?: FooterSection[];
  bottomContent?: React.ReactNode;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, sections = [], bottomContent, ...props }, ref) => (
    <footer
      ref={ref}
      className={cx("footer", className)} {...props}
    >
      {sections && sections.length > 0 && (
        <div className="footer-container">
          <div className="footer-grid">
            {sections.map((section, index) => (
              <div key={index} className="footer-section">
                <h3>{section.title}</h3>
                <ul className="footer-links">
                  {section.links &&
                    section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="footer-link"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      {bottomContent && (
        <div className="footer-bottom">
          {bottomContent}
        </div>
      )}
    </footer>
  ),
);
Footer.displayName = "Footer";
