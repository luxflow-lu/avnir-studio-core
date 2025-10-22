'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const brands = [
  'avnir', 'muzidev', 'muzipics', 'muziweb', 'muzimerch', 
  'muzibase', 'muzimanager', 'muzitools', 'promozic', 'paradisebeats', 'lyrix'
];

const themes = ['light', 'dark'];

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/foundations', label: 'Foundations' },
  { href: '/colors', label: 'Colors' },
  { href: '/components', label: 'Components' },
  { href: '/guidelines', label: 'Guidelines' },
];

export function Navigation() {
  const pathname = usePathname();
  const [currentBrand, setCurrentBrand] = useState('avnir');
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    // Read current values from HTML
    const html = document.documentElement;
    setCurrentBrand(html.getAttribute('data-brand') || 'avnir');
    setCurrentTheme(html.getAttribute('data-theme') || 'dark');
  }, []);

  const updateBrand = (brand: string) => {
    document.documentElement.setAttribute('data-brand', brand);
    setCurrentBrand(brand);
  };

  const updateTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    setCurrentTheme(theme);
  };

  return (
    <nav className="border-b border-border bg-bg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-titles">
              MUZISYSTEM
            </Link>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname === item.href
                      ? 'text-primary font-medium'
                      : 'text-text hover:text-titles'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={currentBrand}
              onChange={(e) => updateBrand(e.target.value)}
              className="text-sm bg-surface border border-border rounded px-2 py-1"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand.toUpperCase()}
                </option>
              ))}
            </select>
            
            <select
              value={currentTheme}
              onChange={(e) => updateTheme(e.target.value)}
              className="text-sm bg-surface border border-border rounded px-2 py-1"
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
