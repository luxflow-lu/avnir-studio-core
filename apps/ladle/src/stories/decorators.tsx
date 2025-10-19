import type { GlobalProvider } from "@ladle/react";
import "../main.css";
import { BrandToggle } from "../brand-toggle";

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <BrandToggle />
    {children}
  </>
);
