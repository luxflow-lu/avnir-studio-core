import * as React from "react";
import { cx } from "../../utils/cx";

export type PermissionLevel = "none" | "read" | "write" | "admin" | "owner";

export interface PermissionBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  level: PermissionLevel;
  showIcon?: boolean;
  size?: "sm" | "md";
}

const permissionConfig: Record<
  PermissionLevel,
  {
    label: string;
    color: string;
    icon: React.ReactNode;
  }
> = {
  none: {
    label: "Aucun accès",
    color: "permission-badge--none",
    icon: (
      <svg className="permission-badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"
        />
      </svg>
    ),
  },
  read: {
    label: "Lecture",
    color: "permission-badge--read",
    icon: (
      <svg className="permission-badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  write: {
    label: "Écriture",
    color: "permission-badge--write",
    icon: (
      <svg className="permission-badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  admin: {
    label: "Admin",
    color: "permission-badge--admin",
    icon: (
      <svg className="permission-badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  owner: {
    label: "Propriétaire",
    color: "permission-badge--owner",
    icon: (
      <svg className="permission-badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
};

export const PermissionBadge = React.forwardRef<HTMLSpanElement, PermissionBadgeProps>(
  ({ className, level, showIcon = true, size = "md", ...props }, ref) => {
    const config = permissionConfig[level];

    return (
      <span
        ref={ref}
        className={cx(
          "permission-badge",
          `permission-badge--${size}`,
          config.color,
          className,
        )} {...props}
      >
        {showIcon && config.icon}
        <span className="permission-badge-label">{config.label}</span>
      </span>
    );
  },
);
PermissionBadge.displayName = "PermissionBadge";
