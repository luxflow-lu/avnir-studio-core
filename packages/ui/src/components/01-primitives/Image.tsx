import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const imageVariants = cva("image", {
  variants: {
    variant: {
      default: "",
      rounded: "image--rounded",
      circle: "image--circle",
      square: "image--square",
      portrait: "image--portrait",
      landscape: "image--landscape",
      widescreen: "image--widescreen",
      ultrawide: "image--ultrawide",
      video: "image--video",
    },
    fit: {
      cover: "image--cover",
      contain: "image--contain",
      fill: "image--fill",
    },
  },
  defaultVariants: {
    variant: "default",
    fit: "cover",
  },
});

export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "size">,
    VariantProps<typeof imageVariants> {
  fallback?: React.ReactNode;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, variant, fit, src, alt = "", fallback, onError, onLoad, ...props }, ref) => {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setLoading(false);
      onLoad?.(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setError(true);
      setLoading(false);
      onError?.(e);
    };

    if (error && fallback) {
      return <>{fallback}</>;
    }

    if (error) {
      return (
        <div
          className={cx(imageVariants({ variant }), "image--error", className)}
          role="img"
          aria-label={alt || "Image failed to load"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      );
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cx(
          imageVariants({ variant, fit }),
          loading && "image--loading",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    );
  },
);
Image.displayName = "Image";
