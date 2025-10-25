import * as React from "react";

import { cx } from "../../utils/cx";
import { Spinner } from "../data/Spinner";

export interface LoadingBoundaryProps {
  children: React.ReactNode;
  loading?: boolean;
  fallback?: React.ReactNode;
  className?: string;
}

const DefaultLoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="text-center">
      <Spinner size="lg" className="mb-4" />
      <p className="text-[var(--text-muted)]">Loading...</p>
    </div>
  </div>
);

export const LoadingBoundary = React.forwardRef<HTMLDivElement, LoadingBoundaryProps>(
  ({ children, loading = false, fallback, className }, ref) => {
    if (loading) {
      return (
        <div ref={ref} className={cx("bg-[var(--bg)]", className)}>
          {fallback || <DefaultLoadingFallback />}
        </div>
      );
    }

    return <>{children}</>;
  },
);
LoadingBoundary.displayName = "LoadingBoundary";
