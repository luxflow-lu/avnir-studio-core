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
  ({ className, logo, links = [], actions, ...props }, ref) => (
    <header
      ref={ref}
      className={cx(
        "sticky top-0 z-40 w-full bg-background/80 backdrop-blur border-b border-border",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {logo && (
            <div className="flex items-center">
              {logo}
            </div>
          )}
          {links.length > 0 && (
            <nav className="hidden md:flex items-center gap-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={cx(
                    "text-sm font-medium transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]",
                    link.active
                      ? "text-[var(--brand)]"
                      : "text-[var(--text-muted)] hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-4">
            {actions}
          </div>
        )}
      </div>
    </header>
  )
);
Navbar.displayName = "Navbar";
