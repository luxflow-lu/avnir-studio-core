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
    // Read brand from HTML - no hardcoded default
    const [currentBrand, setCurrentBrand] = React.useState<string>("");

    React.useEffect(() => {
      // Read current brand from HTML
      const html = document.documentElement;
      const brand = html.getAttribute("data-brand") || "";
      setCurrentBrand(brand);
    }, []);

    const updateBrand = (brand: string) => {
      document.documentElement.setAttribute("data-brand", brand);
      setCurrentBrand(brand);
    };

    // Don't render until brand is loaded
    if (!currentBrand) return null;

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
