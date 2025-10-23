import * as React from "react";
import clsx from "clsx";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-medium transition rounded-[var(--radius-sm)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--brand)] focus:ring-offset-[var(--bg)] disabled:opacity-50 disabled:pointer-events-none";
const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};
const variants: Record<Variant, string> = {
  solid: "bg-[var(--brand)] text-[var(--brand-on)] hover:opacity-90 shadow-sm",
  outline:
    "border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--brand-on)]",
  ghost: "text-[var(--brand)] hover:bg-white/5",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(base, sizes[size], variants[variant], className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
