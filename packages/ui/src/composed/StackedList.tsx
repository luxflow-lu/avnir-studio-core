import * as React from "react";

type Item = string | { title: string; text?: string };

export function StackedList({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-4">
      {items.map((it, i) => {
        const title = typeof it === "string" ? it : it.title;
        const text = typeof it === "string" ? undefined : it.text;
        return (
          <li key={i} className="flex gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand)] text-[var(--brand-on)] text-xs">
              ✓
            </span>
            <div>
              <p className="text-on-primary">{title}</p>
              {text && <p className="text-[var(--text-muted)] mt-1">{text}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
