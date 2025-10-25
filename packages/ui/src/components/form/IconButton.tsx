import * as React from "react";
import { cx } from "../../utils/cx";

export type IconButtonVariant = "solid" | "outline" | "ghost";
export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  loading?: boolean;
  icon: React.ReactNode;
}

const base =
  "inline-flex-center justify-center font-medium transition-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand)] focus:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none";
const sizes: Record<IconButtonSize, string> = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
};
const variants: Record<IconButtonVariant, string> = {
  solid: "bg-brand text-[var(--brand-on)] hover:opacity-90",
  outline:
    "border-brand text-brand hover:bg-brand hover:text-[var(--brand-on)]",
  ghost: "text-brand hover:bg-muted",
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "solid", size = "md", loading = false, icon, ...props }, ref) => (
    <button
      ref={ref}
      className={cx(base, sizes[size], variants[variant], className)}
      aria-busy={loading || undefined} {...props}
    >
      {loading ? (
        <span
          className="inline-block h-4 w-4 animate-spin-2-[var(--brand-on)]-t-transparent-full"
          aria-hidden
        />
      ) : (
        <span aria-hidden>{icon}</span>
      )}
    </button>
  ),
);
IconButton.displayName = "IconButton";
