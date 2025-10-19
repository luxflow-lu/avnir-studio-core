import "../src/main.css";
import React, { useEffect } from "react";
import { BrandToggle } from "../src/brand-toggle";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const initial = typeof localStorage !== "undefined" && localStorage.getItem("brand") || "avnir";
      document.documentElement.setAttribute("data-brand", initial);
    }
  }, []);
  return <>
    {children}
    <BrandToggle />
  </>;
};
