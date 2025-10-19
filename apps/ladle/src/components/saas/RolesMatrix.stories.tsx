import React, { useState } from "react";
import { RolesMatrix } from "./RolesMatrix";

export default { title: "SaaS/RolesMatrix" };

const mockRoles = [
  {
    id: "viewer",
    name: "Viewer",
    description: "Can view content",
    color: "bg-blue-500/15 text-blue-400",
    permissions: ["read_projects", "read_files"]
  },
  {
    id: "editor",
    name: "Editor", 
    description: "Can edit content",
    color: "bg-green-500/15 text-green-400",
    permissions: ["read_projects", "read_files", "write_files", "create_projects"]
  },
  {
    id: "admin",
    name: "Admin",
    description: "Full access",
    color: "bg-red-500/15 text-red-400",
    permissions: ["read_projects", "read_files", "write_files", "create_projects", "delete_projects", "manage_users", "manage_billing"]
  }
];

const mockPermissions = [
  { id: "read_projects", name: "View Projects", description: "Can view all projects", category: "Projects" },
  { id: "create_projects", name: "Create Projects", description: "Can create new projects", category: "Projects" },
  { id: "delete_projects", name: "Delete Projects", description: "Can delete projects", category: "Projects" },
  { id: "read_files", name: "View Files", description: "Can view files in projects", category: "Files" },
  { id: "write_files", name: "Edit Files", description: "Can edit and upload files", category: "Files" },
  { id: "manage_users", name: "Manage Users", description: "Can invite and remove users", category: "Administration" },
  { id: "manage_billing", name: "Manage Billing", description: "Can view and edit billing", category: "Administration" }
];

export const Default = () => {
  const [roles, setRoles] = useState(mockRoles);

  const handlePermissionChange = (roleId: string, permissionId: string, granted: boolean) => {
    setRoles(prevRoles => 
      prevRoles.map(role => {
        if (role.id === roleId) {
          const permissions = granted 
            ? [...role.permissions, permissionId]
            : role.permissions.filter(p => p !== permissionId);
          return { ...role, permissions };
        }
        return role;
      })
    );
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <RolesMatrix
        roles={roles}
        permissions={mockPermissions}
        onPermissionChange={handlePermissionChange}
      />
    </div>
  );
};

export const Readonly = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <RolesMatrix
      roles={mockRoles}
      permissions={mockPermissions}
      readonly
    />
  </div>
);
