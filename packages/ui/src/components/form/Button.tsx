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

const base = "btn";
const sizes: Record<ButtonSize, string> = {
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
};
const variants: Record<ButtonVariant, string> = {
  solid: "btn-primary",
  outline: "btn-secondary",
  ghost: "btn-ghost",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={cx(base, sizes[size], variants[variant], className)}
      aria-busy={loading || undefined} {...props}
    >
      {leftIcon && (
        <span className="btn-icon-left" aria-hidden>
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span className="btn-icon-right" aria-hidden>
          {rightIcon}
        </span>
      )}
      {loading && (
        <span className="spinner" aria-hidden />
      )}
    </button>
  ),
);
Button.displayName = "Button";
