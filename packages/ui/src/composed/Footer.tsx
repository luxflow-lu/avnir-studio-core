import * as React from "react";

export function Footer({
  columns,
  legal,
}: {
  columns: { title: string; links: { label: string; href: string }[] }[];
  legal?: { left?: React.ReactNode; right?: React.ReactNode };
}) {
  return (
    <footer className="bg-[var(--bg)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="text-white font-semibold">{col.title}</h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((l, j) => (
                <li key={j}>
                  <a className="text-[var(--text-muted)] hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between text-[var(--text-muted)]">
          <div>{legal?.left ?? "© Company"}</div>
          <div>{legal?.right ?? "Tous droits réservés"}</div>
        </div>
      </div>
    </footer>
  );
}
