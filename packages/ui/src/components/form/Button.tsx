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

const base = "btn"; // Use our CSS class with correct border-radius: 0.25rem
const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-10 px-4 py-2 text-sm", 
  lg: "h-11 px-8 text-base"
};
const variants: Record<ButtonVariant, string> = {
  solid: "btn-primary", // Uses our CSS class
  outline: "btn-secondary", // Uses our CSS class  
  ghost: "hover:bg-accent hover:text-accent-foreground"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", loading = false, leftIcon, rightIcon, children, ...props }, ref) => (
    <button ref={ref} className={cx(base, sizes[size], variants[variant], className)} aria-busy={loading || undefined} {...props}>
      {leftIcon && <span className="mr-2 inline-flex" aria-hidden>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="ml-2 inline-flex" aria-hidden>{rightIcon}</span>}
      {loading && <span className="ml-2 inline-block h-4 w-4 animate-spin border-2 border-primary-foreground border-t-transparent rounded-full" aria-hidden />}
    </button>
  )
);
Button.displayName = "Button";
