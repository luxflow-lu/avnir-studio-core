import * as React from "react";

import { cx } from "../../utils/cx";
import { Spinner } from "../03-data-display/Spinner";

export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  message?: string;
}

export const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ className, visible, message, ...props }, ref) => {
    if (!visible) return null;

    return (
      <div ref={ref} className={cx("loading-overlay", className)} {...props}>
        <div className="loading-overlay-content">
          <Spinner size="lg" />
          {message && <div className="loading-overlay-message">{message}</div>}
        </div>
      </div>
    );
  }
);
LoadingOverlay.displayName = "LoadingOverlay";
