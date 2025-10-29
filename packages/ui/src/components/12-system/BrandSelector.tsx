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
  "muzisystem",
];

export interface BrandSelectorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BrandSelector = React.forwardRef<HTMLDivElement, BrandSelectorProps>(
  ({ className, ...props }, ref) => {
    const [currentBrand, setCurrentBrand] = React.useState("muzisystem");

    React.useEffect(() => {
      // Always reset to muzisystem on page load
      const html = document.documentElement;
      const defaultBrand = "muzisystem";
      
      // Only update if different from default
      if (html.getAttribute("data-brand") !== defaultBrand) {
        html.setAttribute("data-brand", defaultBrand);
      }
      setCurrentBrand(defaultBrand);
    }, []);

    const updateBrand = (brand: string) => {
      document.documentElement.setAttribute("data-brand", brand);
      setCurrentBrand(brand);
    };

    return (
      <div ref={ref} className={cx("flex gap-4", className)} {...props}>
        <select
          value={currentBrand}
          onChange={(e) => updateBrand(e.target.value)}
          className="select"
        >
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    );
  },
);
BrandSelector.displayName = "BrandSelector";
