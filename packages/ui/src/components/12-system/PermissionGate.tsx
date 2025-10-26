import * as React from "react";

export interface PermissionGateProps {
  permissions: string[];
  requiredPermissions: string | string[];
  requireAll?: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const PermissionGate: React.FC<PermissionGateProps> = ({
  permissions,
  requiredPermissions,
  requireAll = false,
  children,
  fallback = null,
}) => {
  const required = Array.isArray(requiredPermissions)
    ? requiredPermissions
    : [requiredPermissions];

  const hasPermission = requireAll
    ? required.every((perm) => permissions.includes(perm))
    : required.some((perm) => permissions.includes(perm));

  if (!hasPermission) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
