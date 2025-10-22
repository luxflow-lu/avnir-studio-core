import * as React from "react";
import { useThemeBrand, type Theme, type Brand } from "./ThemeBrandProvider";

const brands = [
  { id: "avnir" as Brand, name: "AVNIR", color: "#EDEDED" },
  { id: "muzidev" as Brand, name: "MUZIDEV", color: "#5CB9F2" },
  { id: "muzipics" as Brand, name: "MUZIPICS", color: "#FF2D55" },
  { id: "muziweb" as Brand, name: "MUZIWEB", color: "#9802EB" },
  { id: "muzimerch" as Brand, name: "MUZIMERCH", color: "#FF9D00" },
  { id: "muzibase" as Brand, name: "MUZIBASE", color: "#2FAD66" },
  { id: "muzimanager" as Brand, name: "MUZIMANAGER", color: "#FFD700" },
];

const themes: { id: Theme; name: string; icon: string }[] = [
  { id: "dark", name: "Dark", icon: "🌙" },
  { id: "light", name: "Light", icon: "☀️" },
  { id: "system", name: "System", icon: "💻" },
];

export const ThemeBrandSwitcher: React.FC = () => {
  const { theme, brand, setTheme, setBrand, resolvedTheme } = useThemeBrand();
  const currentBrand = brands.find(b => b.id === brand);

  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col gap-4">
      {/* Theme Switcher */}
      <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm">
        <label className="text-sm font-medium text-foreground">Theme</label>
        <div className="inline-flex rounded-md border border-border bg-background overflow-hidden">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`px-3 py-2 text-sm transition-colors ${
                theme === t.id
                  ? "bg-primary text-on-primary font-medium"
                  : "text-muted hover:bg-surface hover:text-foreground"
              }`}
              onClick={() => setTheme(t.id)}
              title={t.name}
            >
              <span className="mr-1">{t.icon}</span>
              {t.name}
            </button>
          ))}
        </div>
        <div className="text-xs text-muted">
          Resolved: {resolvedTheme} {resolvedTheme === "light" && "(semi-light)"}
        </div>
      </div>

      {/* Brand Switcher */}
      <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm">
        <label className="text-sm font-medium text-foreground">Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value as Brand)}
          className="px-3 py-2 bg-background text-foreground border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
        >
          {brands.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-2 text-xs text-muted">
          <div 
            className="w-4 h-4 rounded-full border border-border"
            style={{ backgroundColor: currentBrand?.color }}
          />
          <span>{currentBrand?.color}</span>
        </div>
      </div>

      {/* Live Preview */}
      <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-lg shadow-lg backdrop-blur-sm">
        <div className="text-sm font-medium text-foreground">Live Preview</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: "var(--bg)" }}></div>
            <span className="text-xs text-muted">Background</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: "var(--surface)" }}></div>
            <span className="text-xs text-muted">Surface</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: "var(--primary)" }}></div>
            <span className="text-xs text-muted">Primary</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: "var(--accent)" }}></div>
            <span className="text-xs text-muted">Accent</span>
          </div>
        </div>
      </div>
    </div>
  );
};
