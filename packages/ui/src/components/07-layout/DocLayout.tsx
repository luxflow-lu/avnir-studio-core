import * as React from "react";

import { cx } from "../../utils/cx";

export interface DocLayoutProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const DocLayout = React.forwardRef<HTMLDivElement, DocLayoutProps>(
  ({ sidebar, children, className }, ref) => (
    <div ref={ref} className={cx("doc-layout", className)}>
      {sidebar && (
        <aside className="doc-layout-sidebar">
          {sidebar}
        </aside>
      )}
      <main className="doc-layout-content">
        {children}
      </main>
    </div>
  )
);
DocLayout.displayName = "DocLayout";

// Sidebar component
export interface DocLayoutSidebarProps extends React.HTMLAttributes<HTMLElement> {}

export const DocLayoutSidebar = React.forwardRef<HTMLElement, DocLayoutSidebarProps>(
  ({ className, children, ...props }, ref) => (
    <aside ref={ref} className={cx("doc-layout-sidebar", className)} {...props}>
      {children}
    </aside>
  )
);
DocLayoutSidebar.displayName = "DocLayoutSidebar";

// Content component
export interface DocLayoutContentProps extends React.HTMLAttributes<HTMLElement> {}

export const DocLayoutContent = React.forwardRef<HTMLElement, DocLayoutContentProps>(
  ({ className, children, ...props }, ref) => (
    <main ref={ref} className={cx("doc-layout-content", className)} {...props}>
      {children}
    </main>
  )
);
DocLayoutContent.displayName = "DocLayoutContent";
