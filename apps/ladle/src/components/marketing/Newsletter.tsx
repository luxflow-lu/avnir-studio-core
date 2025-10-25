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
        className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
          <form onSubmit={submit} className="mt-6 flex gap-3 justify-center">
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
              className="h-10 w-64 rounded-[var(--radius)] bg-card text-card-foreground border border-border px-3 focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Votre email"
            />
            <button
              type="submit"
              className="h-10 rounded-[var(--radius)] bg-[var(--brand)] text-[var(--brand-on)] px-4 font-medium"
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
