import * as React from "react";
import { cx } from "../../utils/cx";
import { Badge } from "../data-display/Badge";

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
      <div
        ref={ref}
        className={cx("bg-[var(--surface)] rounded-[var(--radius-lg)] overflow-hidden", className)}
        {...props}
      >
        <div className="p-6 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white mb-2">Roles & Permissions</h3>
          <p className="text-[var(--text-muted)] text-sm">
            Manage what each role can do in your workspace
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--bg)]">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-white w-1/3">Permission</th>
                {roles.map((role) => (
                  <th
                    key={role.id}
                    className="text-center p-4 text-sm font-medium text-white min-w-[120px]"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <Badge className={role.color || "bg-[var(--brand)]/15 text-[var(--brand)]"}>
                        {role.name}
                      </Badge>
                      {role.description && (
                        <span className="text-xs text-[var(--text-muted)] text-center">
                          {role.description}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category}>
                  <tr>
                    <td colSpan={roles.length + 1} className="p-4 bg-white/5">
                      <div className="text-sm font-medium text-white">{category}</div>
                    </td>
                  </tr>
                  {getPermissionsByCategory(category).map((permission) => (
                    <tr key={permission.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="p-4">
                        <div>
                          <div className="text-sm font-medium text-white">{permission.name}</div>
                          {permission.description && (
                            <div className="text-xs text-[var(--text-muted)] mt-1">
                              {permission.description}
                            </div>
                          )}
                        </div>
                      </td>
                      {roles.map((role) => (
                        <td key={role.id} className="p-4 text-center">
                          <button
                            onClick={() => togglePermission(role.id, permission.id)}
                            disabled={readonly}
                            className={cx(
                              "w-5 h-5 rounded border-2 transition-colors",
                              hasPermission(role.id, permission.id)
                                ? "bg-[var(--brand)] border-[var(--brand)]"
                                : "border-white/20 hover:border-white/40",
                              readonly ? "cursor-default" : "cursor-pointer",
                              "focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]",
                            )}
                            aria-label={`${hasPermission(role.id, permission.id) ? "Remove" : "Grant"} ${permission.name} for ${role.name}`}
                          >
                            {hasPermission(role.id, permission.id) && (
                              <svg
                                className="w-3 h-3 text-[var(--brand-on)] mx-auto"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </button>
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
    );
  },
);
RolesMatrix.displayName = "RolesMatrix";
