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
        className={cx("api-keys-container", className)} {...props}
      >
        <div className="api-keys-header">
          <div className="api-keys-header-content">
            <h3>API Keys</h3>
            <p>
              Manage API keys for programmatic access
            </p>
          </div>
          <Button onClick={() => setShowCreateModal(true)}>Create API Key</Button>
        </div>

        {apiKeys.length === 0 ? (
          <div className="api-keys-empty">
            <div className="api-keys-empty-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            <h4>No API Keys</h4>
            <p>
              Create your first API key to get started
            </p>
            <Button onClick={() => setShowCreateModal(true)}>Create API Key</Button>
          </div>
        ) : (
          <div className="api-keys-list">
            {apiKeys.map((apiKey) => (
              <div
                key={apiKey.id}
                className="api-key-item"
              >
                <div className="api-key-content">
                  <div className="api-key-info">
                    <div className="api-key-header">
                      <h4 className="api-key-name">{apiKey.name}</h4>
                      <Badge variant={apiKey.active ? "success" : "warning"}>
                        {apiKey.active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                    <div className="api-key-code-wrapper">
                      <code className="api-key-code">
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
                    <div className="api-key-permissions">
                      {apiKey.permissions.map((permission) => (
                        <Badge key={permission}>
                          {permission}
                        </Badge>
                      ))}
                    </div>
                    <div className="api-key-meta">
                      Created {apiKey.createdAt.toLocaleDateString()}
                      {apiKey.lastUsed && (
                        <span> • Last used {apiKey.lastUsed.toLocaleDateString()}</span>
                      )}
                    </div>
                  </div>
                  <div className="api-key-actions">
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
                      className="btn-destructive"
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
          <div className="api-keys-form">
            <div className="api-keys-form-field">
              <label>Key Name</label>
              <Input
                placeholder="Enter a name for this API key"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>

            <div className="api-keys-form-field">
              <label>Permissions</label>
              <div className="api-keys-permissions-list">
                {availablePermissions.map((permission) => (
                  <label key={permission} className="api-keys-permission-item">
                    <input
                      type="checkbox"
                      checked={selectedPermissions.includes(permission)}
                      onChange={() => togglePermission(permission)}
                    />
                    <span>{permission}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="api-keys-form-actions">
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
