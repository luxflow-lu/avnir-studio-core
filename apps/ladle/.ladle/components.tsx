import type { GlobalProvider } from "@ladle/react";
import { useEffect } from "react";
import "../public/combined.css";

export const Provider: GlobalProvider = ({ children }) => {
  useEffect(() => {
    // Ensure HTML has the correct data attributes
    document.documentElement.setAttribute('data-brand', 'avnir');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return children;
};
