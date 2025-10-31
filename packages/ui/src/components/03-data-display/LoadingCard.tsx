/**
 * LoadingCard Component
 * Skeleton loader for card layouts
 */

import * as React from "react";
import { cx } from "../../utils/cx";

export interface LoadingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hasImage?: boolean;
  lines?: number;
}

export const LoadingCard = React.forwardRef<HTMLDivElement, LoadingCardProps>(
  ({ className, hasImage = true, lines = 3, ...props }, ref) => {
    return (
      <div ref={ref} className={cx("loading-card", className)} {...props}>
        {hasImage && <div className="loading-card-image" />}
        <div className="loading-card-content">
          <div className="loading-card-title" />
          {Array.from({ length: lines }).map((_, i) => (
            <div key={i} className="loading-card-line" />
          ))}
        </div>
      </div>
    );
  }
);

LoadingCard.displayName = "LoadingCard";
