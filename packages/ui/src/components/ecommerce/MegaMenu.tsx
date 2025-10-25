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
      <div ref={ref} className={cx("relative", className)} {...props}>
        {React.cloneElement(trigger, {
          ref: triggerRef,
          onClick: () => setOpen(!isOpen),
          onMouseEnter: () => setOpen(true),
        })}

        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-screen max-w-4xl bg-surface border border-muted rounded-lg z-50 p-6"
            onMouseLeave={() => setOpen(false)}
          >
            <div className="grid-1 md:grid-3 gap-8">
              {sections.map((section) => (
                <div key={section.id}>
                  <h3 className="text-sm font-semibold text-foreground mb-4 border-b border-muted pb-2">
                    {section.title}
                  </h3>
                  <ul className="stack-3">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className="group flex-start gap-3 p-2 rounded-sm hover:bg-muted"
                        >
                          {item.icon && (
                            <div className="flex-shrink-0 icon text-brand mt-0.5">
                              {item.icon}
                            </div>
                          )}
                          <div >
                            <div className="flex-row gap-2">
                              <span className="text-sm font-medium text-foreground group-hover:text-brand">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs bg-brand-muted text-brand">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-xs text-muted mt-1">
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
            <div className="mt-8 pt-6 border-t border-muted">
              <div className="flex-between">
                <div>
                  <h4 className="text-sm font-medium text-foreground">Featured Products</h4>
                  <p className="text-xs text-muted">Discover our latest offerings</p>
                </div>
                <a href="/featured" className="text-sm text-brand hover:underline">
                  View All →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
);
MegaMenu.displayName = "MegaMenu";
