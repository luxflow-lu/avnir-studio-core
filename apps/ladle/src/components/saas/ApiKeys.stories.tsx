import React, { useState } from "react";
import { ApiKeys } from "./ApiKeys";

export default { title: "SaaS/ApiKeys" };

const mockApiKeys = [
  {
    id: "1",
    name: "Production API",
    key: "ak_live_1234567890abcdef1234567890abcdef",
    permissions: ["read", "write"],
    createdAt: new Date("2024-01-15"),
    lastUsed: new Date("2024-01-20"),
    active: true,
  },
  {
    id: "2",
    name: "Development Key",
    key: "ak_test_abcdef1234567890abcdef1234567890",
    permissions: ["read"],
    createdAt: new Date("2024-01-10"),
    active: false,
  },
];

export const Default = () => {
  const [apiKeys, setApiKeys] = useState(mockApiKeys);

  const handleCreateKey = async (name: string, permissions: string[]) => {
    const newKey = {
      id: Date.now().toString(),
      name,
      key: `ak_${Math.random().toString(36).substr(2, 32)}`,
      permissions,
      createdAt: new Date(),
      active: true,
    };
    setApiKeys((prev) => [...prev, newKey]);
    return newKey;
  };

  const handleDeleteKey = async (id: string) => {
    setApiKeys((prev) => prev.filter((key) => key.id !== id));
  };

  const handleToggleKey = async (id: string, active: boolean) => {
    setApiKeys((prev) => prev.map((key) => (key.id === id ? { ...key, active } : key)));
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <ApiKeys
        apiKeys={apiKeys}
        onCreateKey={handleCreateKey}
        onDeleteKey={handleDeleteKey}
        onToggleKey={handleToggleKey}
        availablePermissions={["read", "write", "admin", "billing"]}
      />
    </div>
  );
};

export const Empty = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <ApiKeys
      apiKeys={[]}
      onCreateKey={async (name, permissions) => ({
        id: "1",
        name,
        key: `ak_${Math.random().toString(36).substr(2, 32)}`,
        permissions,
        createdAt: new Date(),
        active: true,
      })}
    />
  </div>
);
