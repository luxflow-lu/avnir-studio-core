import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";

export interface ServerError500Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  showRetryButton?: boolean;
  onRetry?: () => void;
  showReportButton?: boolean;
  onReport?: () => void;
  illustration?: React.ReactNode;
}

const DefaultIllustration = () => (
  <div className="w-64 h-64 mx-auto mb-8 text-destructive">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5-1.5M6 18.75l-1.5-1.5m.75-12l1.5-1.5M17.25 4.5l1.5-1.5m-9 15l1.5-1.5m1.5 1.5l-1.5-1.5M12 12l.01.01M12 12l.01.01M12 12l.01.01M12 12l.01.01"
      />
    </svg>
  </div>
);

export const ServerError500 = React.forwardRef<HTMLDivElement, ServerError500Props>(
  (
    {
      className,
      title = "Server Error",
      description = "Something went wrong on our end. We're working to fix it.",
      showRetryButton = true,
      onRetry,
      showReportButton = true,
      onReport,
      illustration,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cx("min-h-screen items-center justify-center bg-muted px-4", className)} {...props}
    >
      <div className="text-center max-w-md">
        {illustration || <DefaultIllustration />}

        <div className="mb-8">
          <h1 className="text-6xl font-bold text-destructive mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
          <p className="text-muted leading-relaxed mb-6">{description}</p>

          <div className="bg-red-500/10-red-500/20-lg p-4 mb-6">
            <p className="text-destructive text-sm">
              <strong>Error ID:</strong> {Math.random().toString(36).substr(2, 9)}
            </p>
            <p className="text-destructive text-sm mt-1">
              <strong>Time:</strong> {new Date().toLocaleString()}
            </p>
          </div>
        </div>

        <div className="stack-4">
          <div className="flex-col sm:flex-row gap-3 justify-center">
            {showRetryButton && <Button onClick={onRetry}>Try Again</Button>}
            {showReportButton && (
              <Button variant="outline" onClick={onReport}>
                Report Issue
              </Button>
            )}
          </div>

          <div>
            <button
              onClick={() => window.history.back()}
              className="text-muted hover:text-foreground text-sm"
            >
              ← Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
);
ServerError500.displayName = "ServerError500";
