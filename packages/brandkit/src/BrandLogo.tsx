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
  // Read brand from HTML - no hardcoded default
  const [brand, setBrand] = React.useState<string>("");
  const [theme, setTheme] = React.useState<string>("dark");

  React.useEffect(() => {
    if (typeof document === "undefined") return;

    const updateBrandAndTheme = () => {
      const html = document.documentElement;
      setBrand(html.getAttribute("data-brand") || "muzisystem");
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

  // Don't render until brand is loaded
  if (!brand) return null;

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

  // MUZISYSTEM Logo Component
  const MuzisystemLogo = () => (
    <svg 
      width="150" 
      height="20" 
      viewBox="0 0 150 20" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} w-auto ${className}`}
    >
      <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#ededed">
        MUZI<tspan fill="var(--primary)">SYSTEM</tspan>
      </text>
    </svg>
  );

  // MUZIPICS Logo SVG Component
  const MuzipicsLogo = () => (
    <svg 
      viewBox="0 0 113.19 14.22" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} w-auto ${className}`}
    >
      <g>
        <path fill="#ededed" d="M0,13.98V.23h5.19l3.12,9.38L11.39.23h5.2v13.74h-3.22V3.16l-3.41,10.82h-3.34L3.22,3.16v10.82H0Z"/>
        <path fill="#ededed" d="M20.02.23h3.47v7.44c0,1.18.04,1.95.13,2.3.15.56.5,1.01,1.06,1.35s1.32.51,2.29.51,1.73-.16,2.23-.48c.5-.32.8-.72.9-1.19s.15-1.25.15-2.33V.23h3.47v7.22c0,1.65-.09,2.82-.28,3.5-.19.68-.53,1.26-1.04,1.73s-1.18.84-2.02,1.12-1.95.42-3.3.42c-1.64,0-2.88-.15-3.73-.46-.85-.3-1.52-.7-2.01-1.18s-.82-.99-.97-1.52c-.23-.79-.34-1.95-.34-3.49V.23Z"/>
        <path fill="#ededed" d="M35.88,13.98v-2.5l9.02-8.92h-8V.23h12.57v2.16l-9.41,9.27h9.77v2.32h-13.96Z"/>
        <path fill="#ededed" d="M51.93,13.98V.23h3.47v13.74h-3.47Z"/>
        <path fill="#ff2d55" d="M61.46,13.98h-3.54L61.52.23h6.98c1.24,0,2.22.12,2.95.35s1.29.62,1.72,1.16c.42.54.63,1.19.63,1.94,0,.69-.17,1.37-.5,2.03s-.75,1.18-1.24,1.58c-.49.39-1.01.69-1.58.89s-1.32.36-2.27.46c-.55.06-1.59.09-3.12.09h-2.26l-1.37,5.24ZM63.42,6.46h1.09c1.87,0,3.11-.09,3.74-.28s1.12-.49,1.48-.9c.36-.41.54-.87.54-1.36,0-.33-.09-.6-.28-.82s-.44-.37-.77-.46-1.07-.15-2.22-.15h-2.53l-1.04,3.97Z"/>
        <path fill="#ff2d55" d="M73.79,13.98L77.39.23h3.53l-3.59,13.74h-3.54Z"/>
        <path fill="#ff2d55" d="M93.06,9.03l3.56.43c-.7,1.54-1.74,2.72-3.13,3.54s-3.02,1.22-4.89,1.22c-2.1,0-3.74-.51-4.93-1.52-1.18-1.01-1.78-2.48-1.78-4.41,0-1.56.4-2.99,1.19-4.29s1.89-2.29,3.3-2.98,2.94-1.03,4.59-1.03c1.86,0,3.36.4,4.51,1.2s1.82,1.88,2.03,3.26l-3.39.26c-.19-.8-.55-1.38-1.08-1.74s-1.25-.54-2.14-.54c-.98,0-1.89.24-2.74.71s-1.53,1.22-2.03,2.23-.76,2.02-.76,3.02c0,1.1.33,1.95.99,2.55.66.6,1.48.9,2.47.9.91,0,1.75-.24,2.51-.71.76-.47,1.33-1.18,1.71-2.11Z"/>
        <path fill="#ff2d55" d="M98.48,9.53l3.36-.14c.05.86.23,1.43.55,1.73.52.49,1.47.73,2.86.73,1.16,0,1.99-.17,2.51-.5s.77-.73.77-1.2c0-.41-.21-.75-.63-1.03-.3-.21-1.11-.54-2.44-1s-2.3-.85-2.92-1.16c-.61-.31-1.1-.71-1.45-1.2-.35-.49-.53-1.07-.53-1.73,0-1.16.52-2.12,1.57-2.88,1.05-.76,2.56-1.14,4.55-1.14s3.58.38,4.68,1.13,1.71,1.76,1.82,3.02l-3.39.12c-.09-.66-.38-1.16-.89-1.51-.51-.35-1.26-.52-2.25-.52s-1.67.14-2.09.41c-.42.28-.63.62-.63,1.04,0,.39.19.72.57.97.38.26,1.23.62,2.54,1.08,1.98.68,3.23,1.23,3.77,1.66.8.62,1.21,1.43,1.21,2.41,0,1.21-.6,2.25-1.8,3.11s-2.87,1.29-5.01,1.29c-1.48,0-2.76-.2-3.84-.6-1.08-.4-1.85-.95-2.29-1.65s-.65-1.52-.62-2.44Z"/>
      </g>
    </svg>
  );

  // MUZIBASE Logo SVG Component
  const MuzibaseLogo = () => (
    <svg 
      viewBox="0 0 124.93 14.21" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} w-auto ${className}`}
    >
      <g>
        <path fill="#ededed" d="M0,13.98V.23h5.19l3.12,9.38L11.39.23h5.2v13.74h-3.22V3.16l-3.41,10.82h-3.34L3.22,3.16v10.82H0Z"/>
        <path fill="#ededed" d="M20.02.23h3.47v7.44c0,1.18.04,1.95.13,2.3.15.56.5,1.01,1.06,1.35s1.32.51,2.29.51,1.73-.16,2.23-.48c.5-.32.8-.72.9-1.19s.15-1.25.15-2.33V.23h3.47v7.22c0,1.65-.09,2.82-.28,3.5-.19.68-.53,1.26-1.04,1.73s-1.18.84-2.02,1.12-1.95.42-3.3.42c-1.64,0-2.88-.15-3.73-.46-.85-.3-1.52-.7-2.01-1.18s-.82-.99-.97-1.52c-.23-.79-.34-1.95-.34-3.49V.23Z"/>
        <path fill="#ededed" d="M35.88,13.98v-2.5l9.02-8.92h-8V.23h12.57v2.16l-9.41,9.27h9.77v2.32h-13.96Z"/>
        <path fill="#ededed" d="M51.93,13.98V.23h3.47v13.74h-3.47Z"/>
        <path fill="#2fad66" d="M57.91,13.98L61.51.23h5.87c1.27,0,2.16.03,2.67.09.84.09,1.56.28,2.14.56s1.03.66,1.34,1.12.46.99.46,1.56c0,.76-.27,1.42-.8,1.98-.53.56-1.35.98-2.46,1.27.88.19,1.57.54,2.07,1.04s.74,1.06.74,1.68c0,.83-.29,1.61-.88,2.35s-1.39,1.27-2.43,1.6-2.44.49-4.23.49h-8.1ZM62.03,11.77h3.41c1.43,0,2.39-.07,2.88-.22.49-.15.88-.39,1.17-.73.29-.34.44-.69.44-1.07,0-.46-.21-.83-.63-1.13s-1.12-.45-2.11-.45h-4.22l-.94,3.59ZM63.59,5.79h2.7c1.21,0,2.08-.07,2.61-.21.53-.14.93-.36,1.2-.67s.4-.65.4-1-.12-.64-.38-.86c-.25-.23-.61-.38-1.07-.45-.26-.04-.88-.06-1.86-.06h-2.74l-.86,3.25Z"/>
        <path fill="#2fad66" d="M86.52,10.94h-6.81l-2.06,3.04h-3.63L83.73.23h3.93l2.79,13.74h-3.35l-.57-3.04ZM86.09,8.65l-1-5.53-4.15,5.53h5.14Z"/>
        <path fill="#2fad66" d="M93.14,9.53l3.36-.14c.05.86.23,1.43.55,1.73.52.49,1.47.73,2.86.73,1.16,0,1.99-.17,2.51-.5s.77-.73.77-1.2c0-.41-.21-.75-.63-1.03-.3-.21-1.11-.54-2.44-1s-2.3-.85-2.92-1.16c-.61-.31-1.1-.71-1.45-1.2-.35-.49-.53-1.07-.53-1.73,0-1.16.52-2.12,1.57-2.88,1.05-.76,2.56-1.14,4.55-1.14s3.58.38,4.68,1.13,1.71,1.76,1.82,3.02l-3.39.12c-.09-.66-.38-1.16-.89-1.51-.51-.35-1.26-.52-2.25-.52s-1.67.14-2.09.41c-.42.28-.63.62-.63,1.04,0,.39.19.72.57.97.38.26,1.23.62,2.54,1.08,1.98.68,3.23,1.23,3.77,1.66.8.62,1.21,1.43,1.21,2.41,0,1.21-.6,2.25-1.8,3.11s-2.87,1.29-5.01,1.29c-1.48,0-2.76-.2-3.84-.6-1.08-.4-1.85-.95-2.29-1.65s-.65-1.52-.62-2.44Z"/>
        <path fill="#2fad66" d="M108.61,13.98L112.2.23h12.74l-.6,2.3h-9.2l-.82,3.12h8.89l-.6,2.3h-8.89l-1.08,3.73h10l-.61,2.3h-13.42Z"/>
      </g>
    </svg>
  );

  // MUZIWEB Logo SVG Component
  const MuziwebLogo = () => (
    <svg 
      viewBox="0 0 112.65 13.98" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} w-auto ${className}`}
    >
      <g>
        <path fill="#ededed" d="M0,13.74V0h5.19l3.12,9.38L11.39,0h5.2v13.74h-3.22V2.93l-3.41,10.82h-3.34L3.22,2.93v10.82H0Z"/>
        <path fill="#ededed" d="M20.02,0h3.47v7.44c0,1.18.04,1.95.13,2.3.15.56.5,1.01,1.06,1.35s1.32.51,2.29.51,1.73-.16,2.23-.48c.5-.32.8-.72.9-1.19s.15-1.25.15-2.33V0h3.47v7.22c0,1.65-.09,2.82-.28,3.5-.19.68-.53,1.26-1.04,1.73s-1.18.84-2.02,1.12-1.95.42-3.3.42c-1.64,0-2.88-.15-3.73-.46-.85-.3-1.52-.7-2.01-1.18s-.82-.99-.97-1.52c-.23-.79-.34-1.95-.34-3.49V0Z"/>
        <path fill="#ededed" d="M35.88,13.74v-2.5l9.02-8.92h-8V0h12.57v2.16l-9.41,9.27h9.77v2.32h-13.96Z"/>
        <path fill="#ededed" d="M51.93,13.74V0h3.47v13.74h-3.47Z"/>
        <path fill="#9800eb" d="M74.27,13.74h-3.57l-.39-10.05-6.26,10.05h-3.64l-.64-13.74h3.46l.15,9.62,5.89-9.62h3.83l.4,9.52,5.66-9.52h3.42l-8.31,13.74Z"/>
        <path fill="#9800eb" d="M80.59,13.74l3.59-13.74h12.74l-.6,2.3h-9.2l-.82,3.12h8.89l-.6,2.3h-8.89l-1.08,3.73h10l-.61,2.3h-13.42Z"/>
        <path fill="#9800eb" d="M96.57,13.74l3.6-13.74h5.87c1.27,0,2.16.03,2.67.09.84.09,1.56.28,2.14.56s1.03.66,1.34,1.12.46.99.46,1.56c0,.76-.27,1.42-.8,1.98-.53.56-1.35.98-2.46,1.27.88.19,1.57.54,2.07,1.04s.74,1.06.74,1.68c0,.83-.29,1.61-.88,2.35s-1.39,1.27-2.43,1.6-2.44.49-4.23.49h-8.1ZM100.69,11.53h3.41c1.43,0,2.39-.07,2.88-.22.49-.15.88-.39,1.17-.73.29-.34.44-.69.44-1.07,0-.46-.21-.83-.63-1.13s-1.12-.45-2.11-.45h-4.22l-.94,3.59ZM102.25,5.55h2.7c1.21,0,2.08-.07,2.61-.21.53-.14.93-.36,1.2-.67s.4-.65.4-1-.12-.64-.38-.86c-.25-.23-.61-.38-1.07-.45-.26-.04-.88-.06-1.86-.06h-2.74l-.86,3.25Z"/>
      </g>
    </svg>
  );

  // MUZIMERCH Logo SVG Component
  const MuzimerchLogo = () => (
    <svg 
      viewBox="0 0 145.97 14.22" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} w-auto ${className}`}
    >
      <g>
        <path fill="#ededed" d="M0,13.98V.23h5.19l3.12,9.38L11.39.23h5.2v13.74h-3.22V3.16l-3.41,10.82h-3.34L3.22,3.16v10.82H0Z"/>
        <path fill="#ededed" d="M20.02.23h3.47v7.44c0,1.18.04,1.95.13,2.3.15.56.5,1.01,1.06,1.35s1.32.51,2.29.51,1.73-.16,2.23-.48c.5-.32.8-.72.9-1.19s.15-1.25.15-2.33V.23h3.47v7.22c0,1.65-.09,2.82-.28,3.5-.19.68-.53,1.26-1.04,1.73s-1.18.84-2.02,1.12-1.95.42-3.3.42c-1.64,0-2.88-.15-3.73-.46-.85-.3-1.52-.7-2.01-1.18s-.82-.99-.97-1.52c-.23-.79-.34-1.95-.34-3.49V.23Z"/>
        <path fill="#ededed" d="M35.88,13.98v-2.5l9.02-8.92h-8V.23h12.57v2.16l-9.41,9.27h9.77v2.32h-13.96Z"/>
        <path fill="#ededed" d="M51.93,13.98V.23h3.47v13.74h-3.47Z"/>
        <path fill="#f7931e" d="M67.82,13.98h-3.35l-.62-11.48-2.73,11.48h-3.19L61.51.23h5.04l.53,9.63L72.94.23h5.1l-3.6,13.74h-3.22l3.39-11.4-6.79,11.4Z"/>
        <path fill="#f7931e" d="M77.93,13.98L81.52.23h12.74l-.6,2.3h-9.2l-.82,3.12h8.89l-.6,2.3h-8.89l-1.08,3.73h10l-.61,2.3h-13.42Z"/>
        <path fill="#f7931e" d="M97.55,13.98h-3.54L97.61.23h7.63c1.31,0,2.33.11,3.06.32.73.21,1.32.61,1.77,1.19s.67,1.27.67,2.09c0,1.17-.44,2.13-1.31,2.89-.88.76-2.2,1.23-3.97,1.41.45.33.88.75,1.28,1.28.79,1.08,1.67,2.59,2.64,4.56h-3.8c-.3-.78-.9-1.98-1.79-3.63-.48-.89-1-1.48-1.55-1.79-.34-.18-.92-.27-1.76-.27h-1.44l-1.49,5.69ZM99.57,6.23h1.88c1.9,0,3.16-.09,3.78-.27.62-.18,1.11-.46,1.46-.85s.53-.79.53-1.22c0-.5-.25-.88-.76-1.12-.31-.15-.99-.23-2.03-.23h-3.89l-.96,3.69Z"/>
        <path fill="#f7931e" d="M123.71,9.03l3.56.43c-.7,1.54-1.74,2.72-3.13,3.54s-3.02,1.22-4.89,1.22c-2.1,0-3.74-.51-4.93-1.52-1.18-1.01-1.78-2.48-1.78-4.41,0-1.56.4-2.99,1.19-4.29s1.89-2.29,3.3-2.98,2.94-1.03,4.59-1.03c1.86,0,3.36.4,4.51,1.2s1.82,1.88,2.03,3.26l-3.39.26c-.19-.8-.55-1.38-1.08-1.74s-1.25-.54-2.14-.54c-.98,0-1.89.24-2.74.71s-1.53,1.22-2.03,2.23-.76,2.02-.76,3.02c0,1.1.33,1.95.99,2.55.66.6,1.48.9,2.47.9.91,0,1.75-.24,2.51-.71.76-.47,1.33-1.18,1.71-2.11Z"/>
        <path fill="#f7931e" d="M140.45,7.84h-6.64l-1.61,6.14h-3.54l3.6-13.74h3.53l-1.38,5.31h6.64l1.39-5.31h3.53l-3.59,13.74h-3.54l1.61-6.14Z"/>
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
    muzisystem: "MUZISYSTEM",
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
    muzisystem: "#ededed",
  };

  const brandName = brandNames[brand] || brand.toUpperCase();
  const brandColor = brandColors[brand] || "currentColor";

  // Return the appropriate logo based on brand
  if (brand === "muzidev") {
    return <MuzidevLogo />;
  }

  if (brand === "muzisystem") {
    return <MuzisystemLogo />;
  }

  if (brand === "muzipics") {
    return <MuzipicsLogo />;
  }

  if (brand === "muzibase") {
    return <MuzibaseLogo />;
  }

  if (brand === "muziweb") {
    return <MuziwebLogo />;
  }

  if (brand === "muzimerch") {
    return <MuzimerchLogo />;
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
