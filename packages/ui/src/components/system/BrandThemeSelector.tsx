"use client";

import * as React from "react";
import { cx } from "../../utils/cx";

const brands = [
  "avnir-studio",
  "muzidev", 
  "muzipics",
  "muziweb",
  "muzimerch",
  "muzibase",
  "muzimanager",
];

const themes = ["dark", "light"];

export interface BrandThemeSelectorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BrandThemeSelector = React.forwardRef<HTMLDivElement, BrandThemeSelectorProps>(
  ({ className, ...props }, ref) => {
    const [currentBrand, setCurrentBrand] = React.useState("avnir-studio");
    const [currentTheme, setCurrentTheme] = React.useState("dark");

    React.useEffect(() => {
      // Read current values from HTML
      const html = document.documentElement;
      setCurrentBrand(html.getAttribute("data-brand") || "avnir-studio");
      setCurrentTheme(html.getAttribute("data-theme") || "dark");
    }, []);

    const updateBrand = (brand: string) => {
      document.documentElement.setAttribute("data-brand", brand);
      setCurrentBrand(brand);
    };

    const updateTheme = (theme: string) => {
      document.documentElement.setAttribute("data-theme", theme);
      setCurrentTheme(theme);
    };

    return (
      <div ref={ref} className={cx("flex items-center gap-4", className)} {...props}>
        <select
          value={currentBrand}
          onChange={(e) => updateBrand(e.target.value)}
          className="select text-sm"
        >
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand.toUpperCase()}
            </option>
          ))}
        </select>

        <select
          value={currentTheme}
          onChange={(e) => updateTheme(e.target.value)}
          className="select text-sm"
        >
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </div>
    );
  },
);
BrandThemeSelector.displayName = "BrandThemeSelector";
