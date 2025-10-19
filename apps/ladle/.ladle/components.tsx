import "../src/main.css";
import React from "react";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-brand", "avnir");
  }
  return <>{children}</>;
};
