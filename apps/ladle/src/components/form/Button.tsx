import * as React from "react";
import { cx } from "../../utils/cx";

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean; // reserved for future use
}

const base = "inline-flex items-center justify-center font-medium transition rounded-[var(--radius-sm)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand)] focus:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none";
const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};
const variants: Record<ButtonVariant, string> = {
  solid: "bg-[var(--brand)] text-[var(--brand-on)] hover:opacity-90 shadow-sm",
  outline: "border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--brand-on)]",
  ghost: "text-[var(--brand)] hover:bg-white/5"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", loading = false, leftIcon, rightIcon, children, ...props }, ref) => (
    <button ref={ref} className={cx(base, sizes[size], variants[variant], className)} aria-busy={loading || undefined} {...props}>
      {leftIcon && <span className="mr-2 inline-flex" aria-hidden>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2 inline-flex" aria-hidden>{rightIcon}</span>}
      {loading && <span className="ml-2 inline-block h-4 w-4 animate-spin border-2 border-[var(--brand-on)] border-t-transparent rounded-full" aria-hidden />}
    </button>
  )
);
Button.displayName = "Button";
