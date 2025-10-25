import * as React from "react";
export function PricingTabs({
  tabs,
  activeKey,
  onChange,
  children,
}: {
  tabs: { key: string; label: string }[];
  activeKey?: string;
  onChange?: (k: string) => void;
  children?: React.ReactNode;
}) {
  const [active, setActive] = React.useState(activeKey ?? tabs[0]?.key);
  const select = (k: string) => {
    setActive(k);
    onChange?.(k);
  };
  return (
    <div>
      <div className="inline-flex rounded-[var(--radius-sm)] border border-white/10 p-1 bg-[var(--surface)]">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => select(t.key)}
            className={
              "px-3 h-9 rounded-[var(--radius-xs)] text-sm " +
              (t.key === active
                ? "bg-[var(--brand)] text-[var(--brand-on)]"
                : "text-[var(--text-muted)] hover:text-on-primary")
            }
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}
