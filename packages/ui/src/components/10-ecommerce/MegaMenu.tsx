import * as React from "react";

import { cx } from "../../utils/cx";

export interface MegaMenuItem {
  id: string;
  label: string;
  href?: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
}

export interface MegaMenuSection {
  id: string;
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  sections: MegaMenuSection[];
  trigger: React.ReactElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const MegaMenu = React.forwardRef<HTMLDivElement, MegaMenuProps>(
  ({ className, sections, trigger, open: controlledOpen, onOpenChange, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLElement>(null);

    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setOpen = onOpenChange || setInternalOpen;

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          menuRef.current &&
          triggerRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, setOpen]);

    return (
      <div ref={ref} className={cx("mega-menu", className)} {...props}>
        {React.cloneElement(trigger, {
          ref: triggerRef,
          onClick: () => setOpen(!isOpen),
          onMouseEnter: () => setOpen(true),
        })}

        {isOpen && (
          <div
            ref={menuRef}
            className="mega-menu-panel"
            onMouseLeave={() => setOpen(false)}
          >
            <div className="mega-menu-content">
              {sections.map((section) => (
                <div key={section.id} className="mega-menu-section">
                  <h3 className="mega-menu-section-title">
                    {section.title}
                  </h3>
                  <ul className="mega-menu-links">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a href={item.href} className="mega-menu-link">
                          {item.icon && (
                            <div className="mega-menu-link-icon">
                              {item.icon}
                            </div>
                          )}
                          <div className="mega-menu-link-content">
                            <div className="mega-menu-link-title">
                              {item.label}
                              {item.badge && (
                                <span className="badge badge--sm">{item.badge}</span>
                              )}
                            </div>
                            {item.description && (
                              <p className="mega-menu-link-description">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <div className="mega-menu-featured">
              <h4 className="mega-menu-featured-title">Featured Products</h4>
              <p className="mega-menu-featured-description">Discover our latest offerings</p>
              <a href="/featured" className="mega-menu-link">
                View All →
              </a>
            </div>
          </div>
        )}
      </div>
    );
  },
);
MegaMenu.displayName = "MegaMenu";
