import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";

export interface NotFound404Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  showHomeButton?: boolean;
  onHomeClick?: () => void;
  illustration?: React.ReactNode;
}

const DefaultIllustration = () => (
  <div className="w-64 h-64 mx-auto mb-8 text-muted">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.881-6.08 2.33l-.147.15C4.688 18.644 5.312 20 6.5 20h11c1.188 0 1.812-1.356.727-2.52l-.147-.15A7.962 7.962 0 0112 15z"
      />
    </svg>
  </div>
);

export const NotFound404 = React.forwardRef<HTMLDivElement, NotFound404Props>(
  (
    {
      className,
      title = "Page not found",
      description = "Sorry, we couldn't find the page you're looking for.",
      showHomeButton = true,
      onHomeClick,
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
          <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
          <p className="text-muted leading-relaxed">{description}</p>
        </div>

        {showHomeButton && (
          <div className="stack-4">
            <Button onClick={onHomeClick} className="w-full sm:w-auto">
              Go back home
            </Button>
            <div>
              <button
                onClick={() => window.history.back()}
                className="text-muted hover:text-foreground text-sm"
              >
                ← Go back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  ),
);
NotFound404.displayName = "NotFound404";
