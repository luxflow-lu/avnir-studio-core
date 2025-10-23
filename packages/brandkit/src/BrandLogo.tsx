"use client";

import * as React from "react";

export interface BrandLogoProps {
  variant?: "full" | "icon";
  contrast?: "auto" | "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-6",
  md: "h-8",
  lg: "h-12",
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "full",
  contrast = "auto",
  className = "",
  size = "md",
}) => {
  const [brand, setBrand] = React.useState("avnir-studio");
  const [theme, setTheme] = React.useState("dark");

  React.useEffect(() => {
    if (typeof document === "undefined") return;

    const updateBrandAndTheme = () => {
      const html = document.documentElement;
      setBrand(html.getAttribute("data-brand") || "avnir-studio");
      setTheme(html.getAttribute("data-theme") || "dark");
    };

    // Initial update
    updateBrandAndTheme();

    // Watch for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "data-brand" || mutation.attributeName === "data-theme")
        ) {
          updateBrandAndTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-brand", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Determine contrast based on theme if auto
  const effectiveContrast = contrast === "auto" ? (theme === "light" ? "dark" : "light") : contrast;

  // Brand display names
  const brandNames: Record<string, string> = {
    "avnir-studio": "AVNIR STUDIO",
    muzidev: "MUZIDEV",
    muzipics: "MUZIPICS",
    muziweb: "MUZIWEB",
    muzimerch: "MUZIMERCH",
    muzibase: "MUZIBASE",
    muzimanager: "MUZIMANAGER",
  };

  // Brand colors
  const brandColors: Record<string, string> = {
    "avnir-studio": "currentColor",
    muzidev: "#5CB9F2",
    muzipics: "#FF2D55",
    muziweb: "#9802EB",
    muzimerch: "#FF9D00",
    muzibase: "#2FAD66",
    muzimanager: "#FFD700",
  };

  const brandName = brandNames[brand] || brand.toUpperCase();
  const brandColor = brandColors[brand] || "currentColor";

  if (variant === "icon") {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-lg ${sizeClasses[size]} aspect-square ${className}`}
        style={{ backgroundColor: brandColor }}
      >
        <span className="text-white font-bold text-sm">{brandName.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        className={`inline-flex items-center justify-center rounded-lg ${sizeClasses[size]} aspect-square`}
        style={{ backgroundColor: brandColor }}
      >
        <span className="text-white font-bold text-sm">{brandName.charAt(0)}</span>
      </div>
      <span
        className={`font-semibold text-sm ${effectiveContrast === "light" ? "text-white" : "text-gray-900"}`}
      >
        {brandName}
      </span>
    </div>
  );
};
