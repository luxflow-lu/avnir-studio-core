import * as React from "react";
import { Button } from "../primitives/Button";

export function SplitCTA({
  media,
  title,
  text,
  cta,
}: {
  media: React.ReactNode;
  title: string;
  text?: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 md:p-8 shadow-md">
          <div className="rounded-[var(--radius-md)] overflow-hidden shadow-sm">{media}</div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
            {text && <p className="mt-3 text-[var(--text-muted)]">{text}</p>}
            <a href={cta.href} className="inline-flex mt-6">
              <Button>{cta.label}</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
