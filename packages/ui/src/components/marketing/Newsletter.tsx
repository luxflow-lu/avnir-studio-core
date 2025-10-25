"use client";

import * as React from "react";
import { cx } from "../../utils/cx";

export type NewsletterProps = {
  title?: string;
  subtitle?: string;
  onSubmit?: (email: string) => void;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Newsletter = React.forwardRef<HTMLElement, NewsletterProps>(
  ({ title, subtitle, onSubmit, className, ...props }, ref) => {
    const [email, setEmail] = React.useState("");
    const submit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.(email);
    };
    return (
      <section
        ref={ref}
        className={cx("newsletter", className)} {...props}
      >
        <div className="newsletter-container">
          {title && (
            <h2 className="newsletter-title">
              {title}
            </h2>
          )}
          {subtitle && <p className="newsletter-description">{subtitle}</p>}
          <form onSubmit={submit} className="newsletter-form">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              placeholder="Votre email"
            />
            <button
              type="submit"
              className="newsletter-button"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    );
  },
);
Newsletter.displayName = "Newsletter";
