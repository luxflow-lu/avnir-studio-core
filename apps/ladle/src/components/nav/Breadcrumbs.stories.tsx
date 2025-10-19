import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export default { title: "Nav/Breadcrumbs" };

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Laptops", href: "/products/laptops" },
  { label: "MacBook Pro", current: true }
];

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Breadcrumbs items={items} />
  </div>
);

export const Simple = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Breadcrumbs items={[
      { label: "Dashboard", href: "/dashboard" },
      { label: "Settings", current: true }
    ]} />
  </div>
);

export const CustomSeparator = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Breadcrumbs 
      items={items}
      separator={<span>/</span>}
    />
  </div>
);
