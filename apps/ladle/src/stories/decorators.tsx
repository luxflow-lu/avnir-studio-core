import type { GlobalProvider } from "@ladle/react";

import "../main.css";
import { useEffect } from "react";

import { BrandToggle } from "../brand-toggle";

export const Provider: GlobalProvider = ({ children }) => {
  useEffect(() => {
    const s = getComputedStyle(document.documentElement);
    const read = (v: string) => s.getPropertyValue(v).trim();
    // eslint-disable-next-line no-console
    console.log("[tokens]", {
      brand: read("--brand"),
      brandOn: read("--brand-on"),
      bg: read("--bg"),
      surface: read("--surface"),
      textMuted: read("--text-muted"),
    });
  }, []);
  return (
    <>
      <BrandToggle />
      {children}
    </>
  );
};
