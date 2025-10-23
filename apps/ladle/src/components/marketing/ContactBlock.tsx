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
        className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)}
        {...props}
      >
        <div className="mx-auto max-w-7xl">
          {(title || subtitle) && (
            <div className="mb-10 text-center">
              {title && (
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  {title}
                </h2>
              )}
              {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
            </div>
          )}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[var(--radius)] border border-border bg-card text-card-foreground p-6">
              {form ?? (
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-1">
                      Nom
                    </label>
                    <input
                      id="name"
                      className="w-full h-10 rounded-[var(--radius)] bg-background text-foreground border border-border px-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full h-10 rounded-[var(--radius)] bg-background text-foreground border border-border px-3"
                    />
                  </div>
                  <div>
                    <label htmlFor="msg" className="block text-sm mb-1">
                      Message
                    </label>
                    <textarea
                      id="msg"
                      className="w-full min-h-[120px] rounded-[var(--radius)] bg-background text-foreground border border-border px-3 py-2"
                    />
                  </div>
                  <button className="h-10 rounded-[var(--radius)] bg-[var(--brand)] text-[var(--brand-on)] px-4 font-medium">
                    Envoyer
                  </button>
                </form>
              )}
            </div>
            <div className="rounded-[var(--radius)] border border-border bg-card text-card-foreground p-6">
              {details ?? (
                <div className="space-y-2 text-muted-foreground">
                  <p>contact@exemple.com</p>
                  <p>+33 1 23 45 67 89</p>
                  <p>10 rue Exemple, 75000 Paris</p>
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
