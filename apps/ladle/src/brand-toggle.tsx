import { useEffect, useState } from "react";

const brands = [
  "avnir-studio",
  "muzidev",
  "muzipics",
  "muziweb",
  "muzimerch",
  "muzibase",
  "muzimanager",
];
const themes = ["dark", "light"];

export function BrandToggle() {
  const [brand, setBrand] = useState<string>(() => {
    if (typeof window === "undefined") return "avnir-studio";
    return localStorage.getItem("brand") || "avnir-studio";
  });

  const [theme, setTheme] = useState<string>(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-brand", brand);
    try {
      localStorage.setItem("brand", brand);
    } catch {}
  }, [brand]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  return (
    <div
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 50,
        background: "var(--surface)",
        padding: 12,
        borderRadius: 8,
        border: "1px solid var(--border, #333)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minWidth: 160,
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--titles)" }}>Theme Controls</div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label style={{ fontSize: 11, color: "var(--muted)" }}>Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          style={{
            padding: 4,
            borderRadius: 4,
            border: "1px solid var(--border, #333)",
            background: "var(--bg)",
            color: "var(--text)",
            fontSize: 12,
          }}
        >
          {brands.map((b) => (
            <option key={b} value={b}>
              {b.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label style={{ fontSize: 11, color: "var(--muted)" }}>Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            padding: 4,
            borderRadius: 4,
            border: "1px solid var(--border, #333)",
            background: "var(--bg)",
            color: "var(--text)",
            fontSize: 12,
          }}
        >
          {themes.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
