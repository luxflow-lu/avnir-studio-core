import * as React from "react";
import { cx } from "../../utils/cx";

export type AvatarSize = "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  fallback?: string;
}

const sizes: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = "md", fallback, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    const initials =
      fallback ||
      alt
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase() ||
      "?";

    return (
      <div
        ref={ref}
        className={cx(
          "relative inline-flex items-center justify-center rounded-full bg-[var(--surface)] text-white font-medium overflow-hidden",
          sizes[size],
          className,
        )}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>
    );
  },
);
Avatar.displayName = "Avatar";
