import * as React from "react";

export interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  React.useEffect(() => {
    const root = document.documentElement;
    const savedBrand = (typeof localStorage !== "undefined" && localStorage.getItem("brand")) || "avnir-studio";
    root.setAttribute("data-brand", savedBrand);
    const savedTheme = (typeof localStorage !== "undefined" && (localStorage.getItem("theme") as "light" | "dark" | "system" | null)) || "system";
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
