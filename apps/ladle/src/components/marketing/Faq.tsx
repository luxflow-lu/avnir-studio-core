import * as React from "react";
import { cx } from "../../utils/cx";

export type Qa = { q: string; a: string };
export type FaqProps = {
  title?: string;
  subtitle?: string;
  items: Qa[];
  defaultOpen?: number[];
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Faq = React.forwardRef<HTMLElement, FaqProps>(
  ({ title, subtitle, items, defaultOpen = [], className, ...props }, ref) => {
    const [open, setOpen] = React.useState<Set<number>>(new Set(defaultOpen));

    const toggle = (idx: number) => {
      setOpen(prev => {
        const next = new Set(prev);
        if (next.has(idx)) next.delete(idx);
        else next.add(idx);
        return next;
      });
    };

    return (
      <section ref={ref} className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)} {...props}>
        <div className="mx-auto max-w-4xl">
          {(title || subtitle) && (
            <div className="mb-8 text-center">
              {title && <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>}
              {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
            </div>
          )}

          <div className="divide-y divide-white/10 rounded-[var(--radius-lg)] border border-white/10 bg-[var(--surface)] text-white shadow-sm">
            {items.map((qa, i) => {
              const id = `faq-item-${i}`;
              const expanded = open.has(i);
              return (
                <div key={i} className="p-1 md:p-1">
                  <button
                    className={cx(
                      "w-full flex items-center justify-between text-left rounded-[var(--radius-sm)] px-4 py-3 md:px-5 md:py-4",
                      "hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
                    )}
                    aria-controls={`${id}-panel`}
                    aria-expanded={expanded}
                    onClick={() => toggle(i)}
                  >
                    <span className="font-medium text-white tracking-tight">{qa.q}</span>
                    <span className="ml-4 inline-flex h-5 w-5 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-[var(--brand)]" aria-hidden>
                      {expanded ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`${id}-panel`}
                    role="region"
                    aria-labelledby={id}
                    className={cx("grid transition-all duration-200 ease-out px-4 md:px-5", expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 pb-4 text-sm leading-relaxed text-[var(--text-muted)]">{qa.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
);
Faq.displayName = "Faq";
