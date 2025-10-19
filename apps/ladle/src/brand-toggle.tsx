import { useEffect, useState } from "react";
const brands = ["avnir","muzidev","muzipics","muziweb","muzimerch","muzibase","muzimanager","promozic"];
export function BrandToggle() {
  const [brand, setBrand] = useState("avnir");
  useEffect(()=>{ document.documentElement.setAttribute("data-brand", brand); },[brand]);
  return (
    <div style={{ position:"fixed", right:16, bottom:16, zIndex:50, background:"var(--surface)", padding:8, borderRadius:12 }}>
      <select value={brand} onChange={e=>setBrand(e.target.value)}>
        {brands.map(b=>
          <option key={b} value={b}>{b}</option>
        )}
      </select>
    </div>
  );
}
