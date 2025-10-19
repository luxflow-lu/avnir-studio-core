import * as React from "react";
import { Card } from "../primitives/Card";

export function FeatureGrid({ items }:{ items:{icon?:React.ReactNode; title:string; text?:string; href?:string}[] }) {
  return (
    <section className="bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <a key={i} href={it.href ?? "#"} className="group">
            <Card className="h-full">
              <div className="flex items-start gap-4">
                {it.icon ?? <span className="w-10 h-10 rounded-[var(--radius-sm)] bg-white/5 grid place-items-center">◎</span>}
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{it.title}</h3>
                  {it.text && <p className="mt-1 text-[var(--text-muted)]">{it.text}</p>}
                  <div className="mt-3 text-[var(--brand)] opacity-90 group-hover:opacity-100">En savoir plus →</div>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
