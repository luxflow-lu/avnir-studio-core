import React, { useEffect, useState } from "react";

const BRANDS = [
  "avnir-studio",
  "muzidev",
  "muzipics",
  "muziweb",
  "muzimerch",
  "muzibase",
  "muzimanager",
];

function BrandThemeToolbar() {
  const html = typeof document !== "undefined" ? document.documentElement : null;
  const [brand, setBrand] = useState<string>(html?.getAttribute("data-brand") ?? "avnir-studio");
  const [theme, setTheme] = useState<string>(html?.getAttribute("data-theme") ?? "dark");

  useEffect(() => {
    html?.setAttribute("data-brand", brand);
  }, [brand, html]);

  useEffect(() => {
    if (theme === "dark") {
      html?.removeAttribute("data-theme");
    } else {
      html?.setAttribute("data-theme", theme);
    }
  }, [theme, html]);

  return (
    <div
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 9999,
        padding: 12,
        borderRadius: 8,
        background: "rgba(0,0,0,.8)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,.1)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        minWidth: 180,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 12,
          fontWeight: 600,
          marginBottom: 4,
        }}
      >
        🎨 Theme Controls
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label style={{ color: "rgba(255,255,255,.7)", fontSize: 11 }}>Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          style={{
            padding: "4px 8px",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,.2)",
            background: "rgba(255,255,255,.1)",
            color: "white",
            fontSize: 12,
          }}
        >
          {BRANDS.map((b) => (
            <option key={b} value={b} style={{ background: "#000", color: "white" }}>
              {b.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label style={{ color: "rgba(255,255,255,.7)", fontSize: 11 }}>Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            padding: "4px 8px",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,.2)",
            background: "rgba(255,255,255,.1)",
            color: "white",
            fontSize: 12,
          }}
        >
          <option value="dark" style={{ background: "#000", color: "white" }}>
            Dark
          </option>
          <option value="light" style={{ background: "#000", color: "white" }}>
            Light
          </option>
        </select>
      </div>
    </div>
  );
}

export default function Preview({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BrandThemeToolbar />
    </>
  );
}
