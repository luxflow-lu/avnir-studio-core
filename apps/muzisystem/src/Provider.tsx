import * as React from "react";

export interface ProviderProps {
  children: React.ReactNode;
}

// Fonctions utilitaires pour thème et brand
export const setTheme = (next: "light" | "dark" | "system") => {
  document.documentElement.setAttribute("data-theme", next);
  document.documentElement.classList.remove("dark");
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", next);
  }
};

export const setBrand = (next: string) => {
  document.documentElement.setAttribute("data-brand", next);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("brand", next);
  }
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  React.useEffect(() => {
    const root = document.documentElement;
    const savedBrand = (typeof localStorage !== "undefined" && localStorage.getItem("brand")) || "muzidev";
    root.setAttribute("data-brand", savedBrand);
    const savedTheme = (typeof localStorage !== "undefined" && (localStorage.getItem("theme") as "light" | "dark" | "system" | null)) || "dark";
    const apply = (mode: "light" | "dark") => root.setAttribute("data-theme", mode);
    if (savedTheme === "system") {
      const m = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
      apply(m && m.matches ? "dark" : "light");
      const handler = () => apply(m.matches ? "dark" : "light");
      m?.addEventListener?.("change", handler);
      return () => m?.removeEventListener?.("change", handler);
    } else {
      apply(savedTheme);
    }
  }, []);
  return <>{children}</>;
};
