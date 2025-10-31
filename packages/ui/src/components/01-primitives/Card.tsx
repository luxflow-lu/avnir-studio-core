import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const cardVariants = cva("card", {
  variants: {
    variant: {
      default: "",
      elevated: "card--elevated",
      outline: "card--outline",
      ghost: "card--ghost",
    },
    size: {
      sm: "card--sm",
      md: "",
      lg: "card--lg",
    },
    interactive: {
      true: "card--interactive",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    interactive: false,
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(cardVariants({ variant, size, interactive }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Card Header
export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("card-header", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

// Card Title
export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cx("card-title", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

// Card Description
export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cx("card-description", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

// Card Content
export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("card-content", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

// Card Image
export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
export const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, ...props }, ref) => (
    <img ref={ref} className={cx("card-image", className)} {...props} />
  )
);
CardImage.displayName = "CardImage";

// Card Footer
export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cx("card-footer", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";
