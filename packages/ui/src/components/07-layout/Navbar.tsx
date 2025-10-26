"use client";

import * as React from "react";

import { cx } from "../../utils/cx";

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  links?: NavLink[];
  actions?: React.ReactNode;
}


export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, logo, links = [], actions, ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [brand, setBrand] = React.useState("avnir-studio");

    React.useEffect(() => {
      if (typeof document === "undefined") return;

      const updateBrand = () => {
        const html = document.documentElement;
        setBrand(html.getAttribute("data-brand") || "avnir-studio");
      };

      // Initial update
      updateBrand();

      // Watch for changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "data-brand"
          ) {
            updateBrand();
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-brand"],
      });

      return () => observer.disconnect();
    }, []);

    // Brand colors for hamburger menu
    const brandColors: Record<string, string> = {
      "avnir-studio": "#ededed",
      muzidev: "#5CB9F2",
      muzipics: "#FF2D55",
      muziweb: "#9802EB",
      muzimerch: "#FF9D00",
      muzibase: "#2FAD66",
      muzimanager: "#FFD700",
    };

    const brandColor = brandColors[brand] || "#ededed";

    return (
      <header
        ref={ref}
        className={cx("navbar", className)} {...props}
      >
        <div className="navbar-container">
          {/* Brand Logo - Left */}
          {logo && (
            <div className="navbar-brand">
              <a href="/" className="navbar-brand">
                {logo}
              </a>
            </div>
          )}

          {/* Desktop Navigation - Right */}
          <div className="navbar-nav">
            {links.length > 0 && (
              <>
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cx(
                      "navbar-link",
                      link.active && "navbar-link--active"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </>
            )}
            {actions && <div className="navbar-actions">{actions}</div>}
          </div>

          {/* Mobile/Tablet Menu Button - Right */}
          <div className="navbar-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-toggle"
              aria-label="Toggle menu"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                {isMenuOpen ? (
                  <>
                    <path d="M18 6L6 18" stroke={brandColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6l12 12" stroke={brandColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </>
                ) : (
                  <>
                    <path d="M3 12h18" stroke={brandColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6h18" stroke={brandColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 18h18" stroke={brandColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="navbar-menu">
            <nav className="navbar-menu-nav">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={cx(
                    "navbar-menu-link",
                    link.active && "navbar-menu-link--active"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            {actions && (
              <div className="navbar-menu-actions">
                {actions}
              </div>
            )}
          </div>
        )}
      </header>
    );
  },
);
Navbar.displayName = "Navbar";
