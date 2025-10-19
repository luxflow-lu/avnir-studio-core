import * as React from "react";
import { cx } from "../../utils/cx";

export type SpinnerSize = "sm" | "md" | "lg";
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
}

const sizes: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-4"
};

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => (
    <div
      ref={ref}
      className={cx(
        "animate-spin rounded-full border-[var(--brand)] border-t-transparent",
        sizes[size],
        className
      )}
      role="status"
      aria-label="Loading"
      {...props}
    />
  )
);
Spinner.displayName = "Spinner";
