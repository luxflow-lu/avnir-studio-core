import * as React from "react";

export type Theme = "light" | "dark" | "system";
export type Brand = "avnir" | "muzidev" | "muzipics" | "muziweb" | "muzimerch" | "muzibase" | "muzimanager";

interface ThemeBrandContextValue {
  theme: Theme;
  brand: Brand;
  setTheme: (theme: Theme) => void;
  setBrand: (brand: Brand) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeBrandContext = React.createContext<ThemeBrandContextValue | undefined>(undefined);

export const useThemeBrand = () => {
  const context = React.useContext(ThemeBrandContext);
  if (!context) {
    throw new Error("useThemeBrand must be used within a ThemeBrandProvider");
  }
  return context;
};

interface ThemeBrandProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultBrand?: Brand;
}

export const ThemeBrandProvider: React.FC<ThemeBrandProviderProps> = ({
  children,
  defaultTheme = "dark",
  defaultBrand = "avnir",
}) => {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof localStorage !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [brand, setBrandState] = React.useState<Brand>(() => {
    if (typeof localStorage !== "undefined") {
      return (localStorage.getItem("brand") as Brand) || defaultBrand;
    }
    return defaultBrand;
  });

  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">("dark");

  const setTheme = React.useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  }, []);

  const setBrand = React.useCallback((newBrand: Brand) => {
    setBrandState(newBrand);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("brand", newBrand);
    }
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    
    const applyTheme = (themeToApply: Theme) => {
      const resolved: "light" | "dark" = themeToApply === "system"
        ? (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : themeToApply;
      
      root.setAttribute("data-theme", resolved);
      setResolvedTheme(resolved);
      
      // Gestion du semi-light : header/footer restent dark en mode light
      if (resolved === "light") {
        // Les éléments avec data-force-dark gardent le thème dark
        const forceDarkElements = document.querySelectorAll('[data-force-dark]');
        forceDarkElements.forEach(el => {
          (el as HTMLElement).style.setProperty('--bg', '#0B0B0D');
          (el as HTMLElement).style.setProperty('--surface', '#141317');
          (el as HTMLElement).style.setProperty('--text', '#C5CCD6');
          (el as HTMLElement).style.setProperty('--titles', '#F4F4F4');
          (el as HTMLElement).style.setProperty('--muted', '#9CA3AF');
        });
      }
    };

    applyTheme(theme);

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-brand", brand);
  }, [brand]);

  const value = React.useMemo(() => ({
    theme,
    brand,
    setTheme,
    setBrand,
    resolvedTheme,
  }), [theme, brand, setTheme, setBrand, resolvedTheme]);

  return (
    <ThemeBrandContext.Provider value={value}>
      {children}
    </ThemeBrandContext.Provider>
  );
};
