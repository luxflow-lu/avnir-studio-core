import "../src/main.css";
import React, { useEffect, useMemo, useState } from "react";
import { BrandToggle } from "../src/brand-toggle";
import { ThemeToggle, ThemeMode } from "../src/components/system/ThemeToggle";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    if (typeof document !== "undefined") {
      const initialBrand = (typeof localStorage !== "undefined" && localStorage.getItem("brand")) || "avnir";
      document.documentElement.setAttribute("data-brand", initialBrand);
    }
  }, []);

  // Resolve and apply theme (dark|light|system)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const stored = (typeof localStorage !== "undefined" && (localStorage.getItem("theme") as ThemeMode | null)) || "system";
    setTheme(stored);
  }, []);

  const resolved = useMemo<"dark" | "light">(() => {
    if (theme === "system") {
      if (typeof window !== "undefined") {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return "dark";
    }
    return theme;
  }, [theme]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", resolved);
  }, [resolved]);

  useEffect(() => {
    if (theme !== "system") return;
    const m = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    if (!m) return;
    const handler = () => {
      document.documentElement.setAttribute("data-theme", m.matches ? "dark" : "light");
    };
    m.addEventListener?.("change", handler);
    return () => m.removeEventListener?.("change", handler);
  }, [theme]);

  const onThemeChange = (t: ThemeMode) => {
    setTheme(t);
    try { localStorage.setItem("theme", t); } catch {}
  };

  return <>
    {children}
    <div style={{ position: "fixed", right: 12, bottom: 12, display: "flex", gap: 8, zIndex: 1000 }}>
      <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
      <BrandToggle />
    </div>
  </>;
};
