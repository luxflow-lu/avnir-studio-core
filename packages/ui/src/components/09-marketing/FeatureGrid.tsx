import * as React from "react";

import { cx } from "../../utils/cx";

export interface FeatureGridItemProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureGridItem: React.FC<FeatureGridItemProps> = ({ icon, title, description }) => (
  <div className="feature-grid-item">
    {icon && <div className="feature-grid-icon">{icon}</div>}
    <h3 className="feature-grid-title">{title}</h3>
    <p className="feature-grid-description">{description}</p>
  </div>
);

export interface FeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export const FeatureGrid = React.forwardRef<HTMLDivElement, FeatureGridProps>(
  ({ className, children, columns = 3, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("feature-grid", `feature-grid--cols-${columns}`, className)}
      {...props}
    >
      {children}
    </div>
  )
);
FeatureGrid.displayName = "FeatureGrid";
