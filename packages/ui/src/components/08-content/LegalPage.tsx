/**
 * LegalPage Component
 * Displays legal content (Privacy, Cookies, Terms, etc.)
 */

import * as React from "react";
import { cx } from "../../utils/cx";

export interface LegalSection {
  id?: string;
  title: string;
  content: string;
  items?: string[];
  contact?: string;
}

export interface LegalPageProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  lastUpdated?: string;
  sections: LegalSection[];
}

export const LegalPage = React.forwardRef<HTMLDivElement, LegalPageProps>(
  ({ className, title, lastUpdated, sections, ...props }, ref) => {
    return (
      <div ref={ref} className={cx("legal-page", className)} {...props}>
        {/* Header */}
        <header className="legal-page-header">
          <h1 className="legal-page-title">{title}</h1>
          {lastUpdated && (
            <p className="legal-page-meta">
              Dernière mise à jour : {new Date(lastUpdated).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="legal-page-content">
          {sections.map((section, index) => (
            <section key={section.id || index} className="legal-section">
              <h2 className="legal-section-title">{section.title}</h2>
              
              {section.content && (
                <div className="legal-section-content">{section.content}</div>
              )}

              {section.items && section.items.length > 0 && (
                <ul className="legal-section-items">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="legal-section-item"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              )}

              {section.contact && (
                <div className="legal-section-contact">{section.contact}</div>
              )}
            </section>
          ))}
        </div>
      </div>
    );
  }
);

LegalPage.displayName = "LegalPage";
