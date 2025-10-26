"use client";

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
  sm: "avatar--sm",
  md: "avatar--md",
  lg: "avatar--lg",
  xl: "avatar--xl",
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
          "avatar",
          sizes[size],
          className,
        )} {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            className="avatar img"
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
