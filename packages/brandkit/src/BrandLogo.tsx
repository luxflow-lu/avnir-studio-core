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

  // MUZIDEV Logo SVG Component
  const MuzidevLogo = () => (
    <svg 
      width="109" 
      height="14" 
      viewBox="0 0 109.34 13.98" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} w-auto`}
    >
      <g>
        <path 
          fill="#ededed" 
          d="M0,13.74V0h5.19l3.12,9.38L11.39,0h5.2v13.74h-3.22V2.93l-3.41,10.82h-3.34L3.22,2.93v10.82H0Z"
        />
        <path 
          fill="#ededed" 
          d="M20.02,0h3.47v7.44c0,1.18.04,1.95.13,2.3.15.56.5,1.01,1.06,1.35s1.32.51,2.29.51,1.73-.16,2.23-.48c.5-.32.8-.72.9-1.19s.15-1.25.15-2.33V0h3.47v7.22c0,1.65-.09,2.82-.28,3.5-.19.68-.53,1.26-1.04,1.73s-1.18.84-2.02,1.12-1.95.42-3.3.42c-1.64,0-2.88-.15-3.73-.46-.85-.3-1.52-.7-2.01-1.18s-.82-.99-.97-1.52c-.23-.79-.34-1.95-.34-3.49V0Z"
        />
        <path 
          fill="#ededed" 
          d="M35.88,13.74v-2.5l9.02-8.92h-8V0h12.57v2.16l-9.41,9.27h9.77v2.32h-13.96Z"
        />
        <path 
          fill="#ededed" 
          d="M51.93,13.74V0h3.47v13.74h-3.47Z"
        />
        <path 
          fill="#5cb9f2" 
          d="M58,13.74l3.6-13.74h4.63c1.29,0,2.11.02,2.47.05.71.06,1.35.17,1.9.35.56.17,1.07.42,1.52.74s.85.7,1.18,1.14c.33.44.59.95.77,1.53s.27,1.21.27,1.9c0,1.48-.35,2.8-1.06,3.94s-1.6,2.06-2.67,2.73c-.82.53-1.88.91-3.18,1.16-.73.14-1.86.21-3.39.21h-6.06ZM62.11,11.53h1.79c1.3,0,2.24-.06,2.82-.19.58-.13,1.12-.37,1.6-.72.7-.51,1.28-1.18,1.76-2.02s.71-1.84.71-2.98c0-.98-.2-1.71-.59-2.2-.39-.49-.88-.82-1.46-.98-.41-.11-1.13-.17-2.17-.17h-2.05l-2.41,9.26Z"
        />
        <path 
          fill="#5cb9f2" 
          d="M75.27,13.74l3.59-13.74h12.74l-.6,2.3h-9.2l-.82,3.12h8.89l-.6,2.3h-8.89l-1.08,3.73h10l-.61,2.3h-13.42Z"
        />
        <path 
          fill="#5cb9f2" 
          d="M99.87,13.74h-3.77l-3.08-13.74h3.53l2.18,10.4,7.11-10.4h3.5l-9.47,13.74Z"
        />
      </g>
    </svg>
  );

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

  // Return the appropriate logo based on brand
  if (brand === "muzidev") {
    return <MuzidevLogo />;
  }

  // Fallback for other brands (icon variant)
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

  // Fallback for other brands (full variant)
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
