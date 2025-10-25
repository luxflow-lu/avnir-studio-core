"use client";

import { useEffect } from "react";

export function DesignSystemStyles() {
  useEffect(() => {
    // Injecter le CSS du design system
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/design-system.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return null;
}
