import React from "react";
import { PermissionBadge } from "./PermissionBadge";

export default { title: "AVNIR/PermissionBadge" };

export const AllLevels = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <div className="flex flex-wrap gap-3">
      <PermissionBadge level="none" />
      <PermissionBadge level="read" />
      <PermissionBadge level="write" />
      <PermissionBadge level="admin" />
      <PermissionBadge level="owner" />
    </div>
  </div>
);

export const Sizes = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <div className="flex items-center gap-3">
      <PermissionBadge level="admin" size="sm" />
      <PermissionBadge level="admin" size="md" />
    </div>
  </div>
);

export const WithoutIcons = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <div className="flex flex-wrap gap-3">
      <PermissionBadge level="read" showIcon={false} />
      <PermissionBadge level="write" showIcon={false} />
      <PermissionBadge level="admin" showIcon={false} />
      <PermissionBadge level="owner" showIcon={false} />
    </div>
  </div>
);

export const InContext = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-4 space-y-4">
      <h3 className="text-lg font-semibold text-white">Membres du projet</h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
            <div>
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-[var(--text-muted)]">john@example.com</div>
            </div>
          </div>
          <PermissionBadge level="owner" size="sm" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              JS
            </div>
            <div>
              <div className="text-sm font-medium text-white">Jane Smith</div>
              <div className="text-xs text-[var(--text-muted)]">jane@example.com</div>
            </div>
          </div>
          <PermissionBadge level="admin" size="sm" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              BJ
            </div>
            <div>
              <div className="text-sm font-medium text-white">Bob Johnson</div>
              <div className="text-xs text-[var(--text-muted)]">bob@example.com</div>
            </div>
          </div>
          <PermissionBadge level="write" size="sm" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              AW
            </div>
            <div>
              <div className="text-sm font-medium text-white">Alice Wilson</div>
              <div className="text-xs text-[var(--text-muted)]">alice@example.com</div>
            </div>
          </div>
          <PermissionBadge level="read" size="sm" />
        </div>
      </div>
    </div>
  </div>
);
