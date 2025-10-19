import * as React from "react";

type Mode = "light" | "dark" | "system";

export const ThemeToggleDemo: React.FC = () => {
  const [mode, setMode] = React.useState<Mode>(() => (localStorage.getItem("theme") as Mode) || "system");

  React.useEffect(() => {
    const root = document.documentElement;
    const apply = (m: Mode) => {
      const resolved: "light" | "dark" = m === "system"
        ? (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : m;
      root.setAttribute("data-theme", resolved);
    };
    apply(mode);
    try { localStorage.setItem("theme", mode); } catch {}
    if (mode === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => apply("system");
      media.addEventListener?.("change", handler);
      return () => media.removeEventListener?.("change", handler);
    }
  }, [mode]);

  return (
    <div className="inline-flex rounded-[var(--radius)] border border-border bg-card text-card-foreground overflow-hidden">
      {["dark","light","system"].map((opt) => (
        <button
          key={opt}
          className={`px-3 py-1.5 text-sm transition ${mode===opt?"bg-background text-foreground":"text-muted-foreground hover:bg-muted"}`}
          onClick={() => setMode(opt as Mode)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};
