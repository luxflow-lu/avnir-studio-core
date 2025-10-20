import * as React from "react";

const brands = [
  { id: "avnir", name: "AVNIR", color: "#EDEDED" },
  { id: "muzidev", name: "MUZIDEV", color: "#5CB9F2" },
  { id: "muzipics", name: "MUZIPICS", color: "#FF2D55" },
  { id: "muziweb", name: "MUZIWEB", color: "#9802EB" },
  { id: "muzimerch", name: "MUZIMERCH", color: "#FF9D00" },
  { id: "muzibase", name: "MUZIBASE", color: "#2FAD66" },
  { id: "muzimanager", name: "MUZIMANAGER", color: "#FFD700" },
  { id: "promozic", name: "PROMOZIC", color: "#FFD700" },
];

export const BrandSelector: React.FC = () => {
  const [brand, setBrand] = React.useState(() => 
    (typeof localStorage !== "undefined" && localStorage.getItem("brand")) || "avnir"
  );

  React.useEffect(() => {
    document.documentElement.setAttribute("data-brand", brand);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("brand", brand);
    }
  }, [brand]);

  return (
    <div className="flex flex-col gap-2 p-4 bg-card border border-border rounded-lg shadow-lg">
      <label className="text-sm font-medium text-foreground">Brand</label>
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="px-3 py-2 bg-background text-foreground border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {brands.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <div 
          className="w-4 h-4 rounded-full border border-border"
          style={{ backgroundColor: brands.find(b => b.id === brand)?.color }}
        />
        <span>{brands.find(b => b.id === brand)?.color}</span>
      </div>
    </div>
  );
};
