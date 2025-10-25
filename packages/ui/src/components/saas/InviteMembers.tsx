import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Input } from "../form/Input";
import { Select } from "../form/Select";
import { Badge } from "../data-display/Badge";

export interface InviteMember {
  email: string;
  role: string;
}

export interface InviteMembersProps extends React.HTMLAttributes<HTMLDivElement> {
  roles?: { value: string; label: string }[];
  onInvite?: (members: InviteMember[]) => void;
  maxInvites?: number;
}

const defaultRoles = [
  { value: "viewer", label: "Viewer" },
  { value: "editor", label: "Editor" },
  { value: "admin", label: "Admin" },
];

export const InviteMembers = React.forwardRef<HTMLDivElement, InviteMembersProps>(
  ({ className, roles = defaultRoles, onInvite, maxInvites = 10, ...props }, ref) => {
    const [invites, setInvites] = React.useState<InviteMember[]>([
      { email: "", role: roles[0]?.value || "viewer" },
    ]);
    const [isLoading, setIsLoading] = React.useState(false);

    const addInvite = () => {
      if (invites.length < maxInvites) {
        setInvites([...invites, { email: "", role: roles[0]?.value || "viewer" }]);
      }
    };

    const removeInvite = (index: number) => {
      if (invites.length > 1) {
        setInvites(invites.filter((_, i) => i !== index));
      }
    };

    const updateInvite = (index: number, field: keyof InviteMember, value: string) => {
      const updated = [...invites];
      const currentInvite = updated[index];
      if (currentInvite) {
        updated[index] = { ...currentInvite, [field]: value };
        setInvites(updated);
      }
    };

    const handleInvite = async () => {
      const validInvites = invites.filter((invite) => invite.email.trim() !== "");
      if (validInvites.length === 0) return;

      setIsLoading(true);
      try {
        await onInvite?.(validInvites);
        // Reset form on success
        setInvites([{ email: "", role: roles[0]?.value || "viewer" }]);
      } finally {
        setIsLoading(false);
      }
    };

    const validInvites = invites.filter((invite) => invite.email.trim() !== "");

    return (
      <div
        ref={ref}
        className={cx("bg-surface-lg p-6", className)} {...props}
      >
        <div className="flex-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Invite Team Members</h3>
            <p className="text-muted text-sm">
              Add people to your workspace and assign roles
            </p>
          </div>
          <Badge>
            {validInvites.length}/{maxInvites}
          </Badge>
        </div>

        <div className="stack-4 mb-6">
          {invites.map((invite, index) => (
            <div key={index} className="flex-row gap-3 items flex-start">
              <div >
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={invite.email}
                  onChange={(e) => updateInvite(index, "email", e.target.value)}
                />
              </div>
              <div className="w-32">
                <Select
                  value={invite.role}
                  onChange={(e) => updateInvite(index, "role", e.target.value)}
                >
                  {roles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </Select>
              </div>
              {invites.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeInvite(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex-between">
          <Button variant="ghost" onClick={addInvite} disabled={invites.length >= maxInvites}>
            <svg className="icon-sm mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Another
          </Button>

          <div className="flex-row gap-3">
            <Button variant="outline" disabled={isLoading}>
              Cancel
            </Button>
            <Button onClick={handleInvite} loading={isLoading} disabled={validInvites.length === 0}>
              Send Invites ({validInvites.length})
            </Button>
          </div>
        </div>
      </div>
    );
  },
);
InviteMembers.displayName = "InviteMembers";
