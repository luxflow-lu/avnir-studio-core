import React from "react";
import { Footer } from "./Footer";

export default { title: "Layout/Footer" };

const sections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "API", href: "/api" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact", href: "/contact" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export const Default = () => (
  <div className="bg-[var(--bg)] min-h-screen flex flex-col">
    <div className="flex-1 p-6 text-white">
      <p>Page content</p>
    </div>
    <Footer
      sections={sections}
      bottomContent={
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-muted)]">
          <p>© 2024 Company Name. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      }
    />
  </div>
);

export const Minimal = () => (
  <div className="bg-[var(--bg)] min-h-screen flex flex-col">
    <div className="flex-1 p-6 text-white">
      <p>Page content</p>
    </div>
    <Footer
      bottomContent={
        <div className="text-center text-sm text-[var(--text-muted)]">
          © 2024 Company Name. All rights reserved.
        </div>
      }
    />
  </div>
);
