import * as React from "react";
import { ThemeBrandProvider } from "./components/ThemeBrandProvider";

export interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeBrandProvider defaultTheme="dark" defaultBrand="avnir">
      {children}
    </ThemeBrandProvider>
  );
};
