import * as React from "react";
import { cx } from "../../utils/cx";

export type PermissionLevel = "none" | "read" | "write" | "admin" | "owner";

export interface PermissionBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  level: PermissionLevel;
  showIcon?: boolean;
  size?: "sm" | "md";
}

const permissionConfig: Record<PermissionLevel, {
  label: string;
  color: string;
  icon: React.ReactNode;
}> = {
  none: {
    label: "Aucun accès",
    color: "bg-gray-500/15 text-gray-400",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
      </svg>
    )
  },
  read: {
    label: "Lecture",
    color: "bg-blue-500/15 text-blue-400",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  write: {
    label: "Écriture",
    color: "bg-green-500/15 text-green-400",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  admin: {
    label: "Admin",
    color: "bg-orange-500/15 text-orange-400",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  owner: {
    label: "Propriétaire",
    color: "bg-purple-500/15 text-purple-400",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
      </svg>
    )
  }
};

export const PermissionBadge = React.forwardRef<HTMLSpanElement, PermissionBadgeProps>(
  ({ className, level, showIcon = true, size = "md", ...props }, ref) => {
    const config = permissionConfig[level];
    
    return (
      <span
        ref={ref}
        className={cx(
          "inline-flex items-center gap-1 rounded-full font-medium",
          size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs",
          config.color,
          className
        )}
        title={`Permission: ${config.label}`}
        {...props}
      >
        {showIcon && config.icon}
        <span>{config.label}</span>
      </span>
    );
  }
);
PermissionBadge.displayName = "PermissionBadge";
