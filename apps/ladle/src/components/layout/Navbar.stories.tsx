import React from "react";
import { Navbar } from "./Navbar";
import { Button } from "../form/Button";

export default { title: "Layout/Navbar" };

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-[var(--brand)] rounded-lg"></div>
    <span className="font-semibold text-white">Brand</span>
  </div>
);

const links = [
  { label: "Home", href: "/", active: true },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const Default = () => (
  <div className="bg-[var(--bg)] min-h-screen">
    <Navbar 
      logo={<Logo />}
      links={links}
      actions={
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      }
    />
    <div className="p-6 text-white">
      <p>Page content below navbar</p>
    </div>
  </div>
);

export const Minimal = () => (
  <div className="bg-[var(--bg)] min-h-screen">
    <Navbar logo={<Logo />} />
    <div className="p-6 text-white">
      <p>Minimal navbar with logo only</p>
    </div>
  </div>
);
