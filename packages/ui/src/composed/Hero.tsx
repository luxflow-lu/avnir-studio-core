import * as React from "react";

export function Hero({
  title,
  subtitle,
  actions,
  media,
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  media?: React.ReactNode;
}) {
  return (
    <section className="bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-primary">{title}</h1>
          {subtitle && <p className="mt-4 text-[var(--text-muted)] max-w-2xl">{subtitle}</p>}
          {actions && <div className="mt-8 flex gap-3">{actions}</div>}
        </div>
        {media && (
          <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-md">{media}</div>
        )}
      </div>
    </section>
  );
}
