import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const styles = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary hover:opacity-90",
        surface: "bg-surface text-on-surface border border-[color:var(--border)]",
        ghost:
          "bg-transparent text-on-surface hover:bg-[color:color-mix(in_oklab,var(--surface),#000_6%)]",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },
    },
    defaultVariants: { variant: "surface", size: "md" },
  },
);

export type BannerProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles>;

export const Banner: React.FC<BannerProps> = ({ className = "", variant, size, ...props }) => {
  return <div className={twMerge(styles({ variant, size }), className)} {...props} />;
};
Banner.displayName = "Banner";
