import * as React from "react";
import { cx } from "../../utils/cx";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLNavElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, items, separator = <ChevronRightIcon />, ...props }, ref) => (
    <nav ref={ref} className={cx("flex items-center space-x-2", className)} aria-label="Breadcrumb" {...props}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="text-[var(--text-muted)] mx-2" aria-hidden="true">
                {separator}
              </span>
            )}
            {item.current ? (
              <span className="text-white font-medium" aria-current="page">
                {item.label}
              </span>
            ) : item.href ? (
              <a
                href={item.href}
                className="text-[var(--text-muted)] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-[var(--text-muted)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
);
Breadcrumbs.displayName = "Breadcrumbs";
