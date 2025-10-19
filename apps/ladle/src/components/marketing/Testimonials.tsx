import * as React from "react";
import { cx } from "../../utils/cx";

export type Testimonial = { quote: string; author: string; role?: string; avatarSrc?: string };
export type TestimonialsProps = { title?: string; subtitle?: string; items: Testimonial[]; variant?: "grid" | "carousel"; className?: string } & React.HTMLAttributes<HTMLElement>;

export const Testimonials = React.forwardRef<HTMLElement, TestimonialsProps>(({ title, subtitle, items, variant = "grid", className, ...props }, ref) => {
  // For now, provide a simple carousel fallback: render as grid always; carousel can be enhanced later.
  return (
    <section ref={ref} className={cx("w-full mx-auto px-4 md:px-6 py-16 md:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {title && <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>}
            {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <figure key={i} className="rounded-[var(--radius-lg)] border border-white/10 bg-[var(--surface)] text-white p-6 shadow-sm">
              <blockquote className="text-sm leading-relaxed text-[var(--text-muted)]">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                {t.avatarSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.avatarSrc} alt="" className="h-9 w-9 rounded-full object-cover" />
                ) : (
                  <div className="h-9 w-9 rounded-full bg-white/10" aria-hidden />
                )}
                <div>
                  <div className="font-medium text-white">{t.author}</div>
                  {t.role && <div className="text-xs text-[var(--text-muted)]">{t.role}</div>}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
});
Testimonials.displayName = "Testimonials";
