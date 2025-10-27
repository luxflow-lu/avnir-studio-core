import * as React from "react";

import { cx } from "../../utils/cx";
import { Spinner } from "../03-data-display/Spinner";

export interface LoadingBoundaryProps {
  children: React.ReactNode;
  loading?: boolean;
  fallback?: React.ReactNode;
  className?: string;
}

const DefaultLoadingFallback = () => (
  <div className="loading-page">
    <div className="loading-page-content">
      <Spinner size="lg" />
      <p className="loading-page-text">Loading...</p>
    </div>
  </div>
);

export const LoadingBoundary = React.forwardRef<HTMLDivElement, LoadingBoundaryProps>(
  ({ children, loading = false, fallback, className }, ref) => {
    if (loading) {
      return (
        <div ref={ref} className={cx("loading-boundary", className)}>
          {fallback || <DefaultLoadingFallback />}
        </div>
      );
    }

    return <>{children}</>;
  },
);
LoadingBoundary.displayName = "LoadingBoundary";
