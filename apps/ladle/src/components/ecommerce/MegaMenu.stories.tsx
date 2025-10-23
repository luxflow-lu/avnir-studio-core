import React from "react";
import { MegaMenu } from "./MegaMenu";
import { Button } from "../form/Button";

export default { title: "E-commerce/MegaMenu" };

const mockSections = [
  {
    id: "electronics",
    title: "Electronics",
    items: [
      {
        id: "smartphones",
        label: "Smartphones",
        href: "/electronics/smartphones",
        description: "Latest iPhone, Samsung, and Android devices",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
            />
          </svg>
        ),
      },
      {
        id: "laptops",
        label: "Laptops",
        href: "/electronics/laptops",
        description: "MacBooks, Windows laptops, and gaming rigs",
        badge: "Sale",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        id: "accessories",
        label: "Accessories",
        href: "/electronics/accessories",
        description: "Chargers, cases, headphones, and more",
      },
    ],
  },
  {
    id: "clothing",
    title: "Clothing",
    items: [
      {
        id: "mens",
        label: "Men's Fashion",
        href: "/clothing/mens",
        description: "Shirts, pants, jackets, and accessories",
      },
      {
        id: "womens",
        label: "Women's Fashion",
        href: "/clothing/womens",
        description: "Dresses, tops, bottoms, and more",
        badge: "New",
      },
      {
        id: "shoes",
        label: "Shoes",
        href: "/clothing/shoes",
        description: "Sneakers, boots, sandals for all occasions",
      },
    ],
  },
  {
    id: "home",
    title: "Home & Garden",
    items: [
      {
        id: "furniture",
        label: "Furniture",
        href: "/home/furniture",
        description: "Sofas, tables, chairs, and storage solutions",
      },
      {
        id: "decor",
        label: "Home Decor",
        href: "/home/decor",
        description: "Wall art, lighting, rugs, and decorative items",
      },
      {
        id: "garden",
        label: "Garden",
        href: "/home/garden",
        description: "Plants, tools, outdoor furniture",
      },
    ],
  },
];

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6 min-h-[400px]">
    <div className="flex justify-center">
      <MegaMenu
        sections={mockSections}
        trigger={
          <Button variant="ghost">
            Shop Categories
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
        }
      />
    </div>
  </div>
);

export const InNavbar = () => (
  <div className="bg-[var(--bg)] text-white">
    <nav className="flex items-center justify-between p-4 border-b border-white/10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--brand)] rounded-lg"></div>
          <span className="font-semibold">Store</span>
        </div>

        <div className="flex items-center gap-6">
          <MegaMenu
            sections={mockSections}
            trigger={
              <button className="text-[var(--text-muted)] hover:text-white transition-colors">
                Categories
              </button>
            }
          />
          <a href="/deals" className="text-[var(--text-muted)] hover:text-white transition-colors">
            Deals
          </a>
          <a href="/about" className="text-[var(--text-muted)] hover:text-white transition-colors">
            About
          </a>
        </div>
      </div>

      <Button size="sm">Sign In</Button>
    </nav>

    <div className="p-6">
      <p>Hover over "Categories" in the navbar to see the mega menu</p>
    </div>
  </div>
);
