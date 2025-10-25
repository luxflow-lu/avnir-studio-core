import * as React from "react";
import { cx } from "../../utils/cx";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  active?: boolean;
  children?: SidebarItem[];
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarItem[];
  collapsed?: boolean;
  onToggle?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, items, collapsed = false, onToggle, header, footer, ...props }, ref) => {
    const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set());

    const toggleExpanded = (id: string) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
        return newSet;
      });
    };

    const renderItem = (item: SidebarItem, level = 0) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = expandedItems.has(item.id);

      return (
        <div key={item.id}>
          <div
            className={cx(
              "flex-center gap-3 px-3 py-2-sm",
              item.active
                ? "bg-brand/10 text-brand"
                : "text-muted hover:text-white hover:bg-muted",
              level > 0 && "ml-6",
            )}
            onClick={hasChildren ? () => toggleExpanded(item.id) : undefined}
          >
            {item.icon && (
              <span
                className={cx("flex-shrink-0", collapsed && level === 0 ? "w-5 h-5" : "w-4 h-4")}
              >
                {item.icon}
              </span>
            )}
            {(!collapsed || level > 0) && (
              <>
                <span className="flex-1 truncate">{item.label}</span>
                {hasChildren && (
                  <svg
                    className={cx("w-4 h-4 transition-transform", isExpanded && "rotate-90")}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </>
            )}
          </div>
          {hasChildren && isExpanded && !collapsed && (
            <div className="mt-1 space-y-1">
              {item.children!.map((child) => renderItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cx(
          "flex-col bg-surface-r-white/10 duration-300",
          collapsed ? "w-16" : "w-64",
          className,
        )} {...props}
      >
        {header && <div className="p-4-b-white/10">{header}</div>}

        <div className="flex-1 p-4 stack-2 overflow-y-auto">
          {items.map((item) => renderItem(item))}
        </div>

        {footer && <div className="p-4-t-white/10">{footer}</div>}

        {onToggle && (
          <button
            onClick={onToggle}
            className="absolute -right-3 top-6 bg-surface-white/10-full p-1 text-muted hover:text-foreground"
          >
            <svg
              className={cx("w-4 h-4 transition-transform", collapsed && "rotate-180")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";
