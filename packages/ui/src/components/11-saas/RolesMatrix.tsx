import * as React from "react";

import { cx } from "../../utils/cx";
import { Badge } from "../03-data-display/Badge";

export interface Permission {
  id: string;
  name: string;
  description?: string;
  category?: string;
}

export interface Role {
  id: string;
  name: string;
  description?: string;
  color?: string;
  permissions: string[];
}

export interface RolesMatrixProps extends React.HTMLAttributes<HTMLDivElement> {
  roles: Role[];
  permissions: Permission[];
  onPermissionChange?: (roleId: string, permissionId: string, granted: boolean) => void;
  readonly?: boolean;
}

export const RolesMatrix = React.forwardRef<HTMLDivElement, RolesMatrixProps>(
  ({ className, roles, permissions, onPermissionChange, readonly = false, ...props }, ref) => {
    const categories = React.useMemo(() => {
      const cats = new Set(permissions.map((p) => p.category || "General"));
      return Array.from(cats).sort();
    }, [permissions]);

    const getPermissionsByCategory = (category: string) => {
      return permissions.filter((p) => (p.category || "General") === category);
    };

    const hasPermission = (roleId: string, permissionId: string) => {
      const role = roles.find((r) => r.id === roleId);
      return role?.permissions.includes(permissionId) || false;
    };

    const togglePermission = (roleId: string, permissionId: string) => {
      if (readonly) return;
      const granted = hasPermission(roleId, permissionId);
      onPermissionChange?.(roleId, permissionId, !granted);
    };

    return (
      <div ref={ref} className={cx("card", className)} {...props}>
        <div className="card-header">
          <div>
            <h3 className="card-title">Roles & Permissions</h3>
            <p className="card-description">Manage what each role can do in your workspace</p>
          </div>
        </div>

        <div className="card-content">
          <div className="roles-matrix">
            <table className="roles-matrix-table">
              <thead>
                <tr>
                  <th className="roles-matrix-header">Permission</th>
                  {roles.map((role) => (
                    <th key={role.id} className="roles-matrix-header">
                      <Badge>{role.name}</Badge>
                      {role.description && (
                        <div className="text-xs text-muted">{role.description}</div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <React.Fragment key={category}>
                    <tr>
                      <td colSpan={roles.length + 1} className="roles-matrix-header">
                        {category}
                      </td>
                    </tr>
                    {getPermissionsByCategory(category).map((permission) => (
                      <tr key={permission.id}>
                        <td className="roles-matrix-permission">
                          <div>{permission.name}</div>
                          {permission.description && (
                            <div className="text-xs text-muted">{permission.description}</div>
                          )}
                        </td>
                        {roles.map((role) => (
                          <td key={role.id} className="roles-matrix-cell">
                            <input
                              type="checkbox"
                              checked={hasPermission(role.id, permission.id)}
                              onChange={() => togglePermission(role.id, permission.id)}
                              disabled={readonly}
                              className="checkbox"
                              aria-label={`${hasPermission(role.id, permission.id) ? "Remove" : "Grant"} ${permission.name} for ${role.name}`}
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },
);
RolesMatrix.displayName = "RolesMatrix";
