import * as React from "react";
import { cx } from "../../utils/cx";

export type ContactBlockProps = {
  title?: string;
  subtitle?: string;
  form?: React.ReactNode;
  details?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const ContactBlock = React.forwardRef<HTMLElement, ContactBlockProps>(
  ({ title, subtitle, form, details, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx("section", className)}
        {...props}
      >
        <div className="container">
          {(title || subtitle) && (
            <div className="section-header">
              {title && (
                <h2 className="section-title">
                  {title}
                </h2>
              )}
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </div>
          )}
          <div className="grid-2">
            <div className="card">
              {form ?? (
                <form className="space-y-4">
                  <div className="field">
                    <label htmlFor="name" className="label">
                      Nom
                    </label>
                    <input
                      id="name"
                      className="input"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="msg" className="label">
                      Message
                    </label>
                    <textarea
                      id="msg"
                      className="textarea"
                    />
                  </div>
                  <button className="btn btn-primary">
                    Envoyer
                  </button>
                </form>
              )}
            </div>
            <div className="card">
              {details ?? (
                <div className="contact-info">
                  <div className="contact-item">
                    <span>contact@exemple.com</span>
                  </div>
                  <div className="contact-item">
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="contact-item">
                    <span>10 rue Exemple, 75000 Paris</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  },
);
ContactBlock.displayName = "ContactBlock";
