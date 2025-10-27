import * as React from "react";

import { cx } from "../../utils/cx";
import { IconButton } from "../02-form/IconButton";

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
              "sidebar-nav-item",
              item.active && "sidebar-nav-item--active",
              level > 0 && "ml-6"
            )}
            onClick={hasChildren ? () => toggleExpanded(item.id) : undefined}
          >
            {item.icon && <span className="sidebar-nav-icon">{item.icon}</span>}
            {(!collapsed || level > 0) && (
              <>
                <span className="flex-1 truncate">{item.label}</span>
                {hasChildren && (
                  <svg
                    className={cx("sidebar-nav-icon transition-transform", isExpanded && "rotate-90")}
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
            <div className="sidebar-nav">
              {item.children!.map((child) => renderItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cx("sidebar", collapsed && "sidebar--collapsed", className)}
        {...props}
      >
        {header && <div className="sidebar-header">{header}</div>}

        <div className="sidebar-content">
          <div className="sidebar-nav">{items.map((item) => renderItem(item))}</div>
        </div>

        {footer && <div className="sidebar-footer">{footer}</div>}

        {onToggle && (
          <IconButton
            variant="ghost"
            size="sm"
            onClick={onToggle}
            icon={
              <svg
                className={cx("transition-transform", collapsed && "rotate-180")}
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
            }
          />
        )}
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";
