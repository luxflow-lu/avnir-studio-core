import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Input } from "../form/Input";
import { Badge } from "../data-display/Badge";
import { Modal } from "../overlay/Modal";

export interface ApiKey {
  id: string;
  name: string;
  key: string;
  permissions: string[];
  createdAt: Date;
  lastUsed?: Date;
  active: boolean;
}

export interface ApiKeysProps extends React.HTMLAttributes<HTMLDivElement> {
  apiKeys: ApiKey[];
  onCreateKey?: (name: string, permissions: string[]) => Promise<ApiKey>;
  onDeleteKey?: (id: string) => Promise<void>;
  onToggleKey?: (id: string, active: boolean) => Promise<void>;
  availablePermissions?: string[];
}

const defaultPermissions = ["read", "write", "admin"];

export const ApiKeys = React.forwardRef<HTMLDivElement, ApiKeysProps>(
  (
    {
      className,
      apiKeys,
      onCreateKey,
      onDeleteKey,
      onToggleKey,
      availablePermissions = defaultPermissions,
      ...props
    },
    ref,
  ) => {
    const [showCreateModal, setShowCreateModal] = React.useState(false);
    const [newKeyName, setNewKeyName] = React.useState("");
    const [selectedPermissions, setSelectedPermissions] = React.useState<string[]>([]);
    const [isCreating, setIsCreating] = React.useState(false);
    const [copiedKey, setCopiedKey] = React.useState<string | null>(null);

    const handleCreateKey = async () => {
      if (!newKeyName.trim() || selectedPermissions.length === 0) return;

      setIsCreating(true);
      try {
        const newKey = await onCreateKey?.(newKeyName, selectedPermissions);
        if (newKey) {
          setShowCreateModal(false);
          setNewKeyName("");
          setSelectedPermissions([]);
          // Auto-copy the new key
          navigator.clipboard.writeText(newKey.key);
          setCopiedKey(newKey.id);
          setTimeout(() => setCopiedKey(null), 3000);
        }
      } finally {
        setIsCreating(false);
      }
    };

    const copyToClipboard = (key: string, keyId: string) => {
      navigator.clipboard.writeText(key);
      setCopiedKey(keyId);
      setTimeout(() => setCopiedKey(null), 2000);
    };

    const togglePermission = (permission: string) => {
      setSelectedPermissions((prev) =>
        prev.includes(permission) ? prev.filter((p) => p !== permission) : [...prev, permission],
      );
    };

    const maskKey = (key: string) => {
      return key.slice(0, 8) + "..." + key.slice(-4);
    };

    return (
      <div
        ref={ref}
        className={cx("bg-[var(--surface)] rounded-[var(--radius-lg)] p-6", className)}
        {...props}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">API Keys</h3>
            <p className="text-[var(--text-muted)] text-sm">
              Manage API keys for programmatic access
            </p>
          </div>
          <Button onClick={() => setShowCreateModal(true)}>Create API Key</Button>
        </div>

        {apiKeys.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 text-[var(--text-muted)]">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            <h4 className="text-white font-medium mb-2">No API Keys</h4>
            <p className="text-[var(--text-muted)] text-sm mb-4">
              Create your first API key to get started
            </p>
            <Button onClick={() => setShowCreateModal(true)}>Create API Key</Button>
          </div>
        ) : (
          <div className="space-y-4">
            {apiKeys.map((apiKey) => (
              <div
                key={apiKey.id}
                className="border border-white/10 rounded-[var(--radius-lg)] p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-medium text-white">{apiKey.name}</h4>
                      <Badge variant={apiKey.active ? "success" : "warning"}>
                        {apiKey.active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-sm bg-[var(--bg)] px-2 py-1 rounded text-[var(--text-muted)]">
                        {maskKey(apiKey.key)}
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(apiKey.key, apiKey.id)}
                      >
                        {copiedKey === apiKey.id ? "Copied!" : "Copy"}
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {apiKey.permissions.map((permission) => (
                        <Badge key={permission} className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      Created {apiKey.createdAt.toLocaleDateString()}
                      {apiKey.lastUsed && (
                        <span> • Last used {apiKey.lastUsed.toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onToggleKey?.(apiKey.id, !apiKey.active)}
                    >
                      {apiKey.active ? "Disable" : "Enable"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDeleteKey?.(apiKey.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Modal
          open={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          title="Create API Key"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Key Name</label>
              <Input
                placeholder="Enter a name for this API key"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Permissions</label>
              <div className="space-y-2">
                {availablePermissions.map((permission) => (
                  <label key={permission} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedPermissions.includes(permission)}
                      onChange={() => togglePermission(permission)}
                      className="rounded border-white/20 bg-transparent"
                    />
                    <span className="text-sm text-white capitalize">{permission}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowCreateModal(false)}
                disabled={isCreating}
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateKey}
                loading={isCreating}
                disabled={!newKeyName.trim() || selectedPermissions.length === 0}
              >
                Create Key
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
);
ApiKeys.displayName = "ApiKeys";
