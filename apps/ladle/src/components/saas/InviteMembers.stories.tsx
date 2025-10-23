import React from "react";
import { InviteMembers } from "./InviteMembers";

export default { title: "SaaS/InviteMembers" };

const customRoles = [
  { value: "viewer", label: "Viewer" },
  { value: "editor", label: "Editor" },
  { value: "admin", label: "Admin" },
  { value: "owner", label: "Owner" },
];

export const Default = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <InviteMembers
      onInvite={(members) => {
        console.log("Inviting members:", members);
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }}
    />
  </div>
);

export const CustomRoles = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <InviteMembers
      roles={customRoles}
      onInvite={(members) => {
        console.log("Inviting members:", members);
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }}
    />
  </div>
);

export const LimitedInvites = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <InviteMembers
      maxInvites={3}
      onInvite={(members) => {
        console.log("Inviting members:", members);
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }}
    />
  </div>
);
