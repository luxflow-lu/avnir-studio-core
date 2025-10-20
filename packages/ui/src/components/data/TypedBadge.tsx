import * as React from "react";
import { cx } from "../../utils/cx";

export type BadgeType = "artist" | "studio" | "beatmaker" | "draft" | "producer" | "archived";

export interface TypedBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: BadgeType;
}

const typeClasses: Record<BadgeType, string> = {
  artist: "badge badge-artist",
  studio: "badge badge-studio", 
  beatmaker: "badge badge-beatmaker",
  draft: "badge badge-draft",
  producer: "badge badge-producer",
  archived: "badge badge-archived"
};

export const TypedBadge = React.forwardRef<HTMLSpanElement, TypedBadgeProps>(
  ({ className, type, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cx(typeClasses[type], className)}
      {...props}
    >
      {children || type}
    </span>
  )
);
TypedBadge.displayName = "TypedBadge";
