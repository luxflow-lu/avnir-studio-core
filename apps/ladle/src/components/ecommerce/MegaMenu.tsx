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
            className="absolute top-full left-0 w-screen max-w-4xl bg-[var(--surface)] border border-white/10 rounded-[var(--radius-lg)] shadow-lg z-50 p-6"
            onMouseLeave={() => setOpen(false)}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sections.map((section) => (
                <div key={section.id}>
                  <h3 className="text-sm font-semibold text-white mb-4 border-b border-white/10 pb-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          className="group flex items-start gap-3 p-2 rounded-[var(--radius-sm)] hover:bg-white/5 transition-colors"
                        >
                          {item.icon && (
                            <div className="flex-shrink-0 w-5 h-5 text-[var(--brand)] mt-0.5">
                              {item.icon}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-white group-hover:text-[var(--brand)] transition-colors">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className="px-1.5 py-0.5 text-xs bg-[var(--brand)]/15 text-[var(--brand)] rounded">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-xs text-[var(--text-muted)] mt-1 line-clamp-2">
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
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white">Featured Products</h4>
                  <p className="text-xs text-[var(--text-muted)]">Discover our latest offerings</p>
                </div>
                <a href="/featured" className="text-sm text-[var(--brand)] hover:underline">
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
