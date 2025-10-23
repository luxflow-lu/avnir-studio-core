import * as React from "react";

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}
const sizes = { xs: "h-2", sm: "h-3", md: "h-4", lg: "h-6", xl: "h-8", "2xl": "h-12" } as const;
export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ size = "md", className = "", ...props }, ref) => (
    <div ref={ref} className={`${sizes[size]} ${className}`} aria-hidden {...props} />
  ),
);
Spacer.displayName = "Spacer";
