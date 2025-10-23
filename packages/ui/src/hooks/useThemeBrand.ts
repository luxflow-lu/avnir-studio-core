"use client";

export function useThemeBrand() {
  const html = typeof document !== "undefined" ? document.documentElement : null;

  const getTheme = () => html?.getAttribute("data-theme") ?? "dark";
  const setTheme = (t: "dark" | "light") => {
    if (html) {
      if (t === "dark") {
        html.removeAttribute("data-theme");
      } else {
        html.setAttribute("data-theme", t);
      }
    }
  };

  const getBrand = () => html?.getAttribute("data-brand") ?? "avnir-studio";
  const setBrand = (b: string) => html?.setAttribute("data-brand", b);

  return { getTheme, setTheme, getBrand, setBrand };
}
