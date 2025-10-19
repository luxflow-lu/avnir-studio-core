import React from "react";

export default { title: "Sandbox/Tokens" };

export const SpacingAndRadius = () => (
  <div className="p-6 rounded-2xl shadow-lg bg-background text-foreground space-y-4">
    <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground">
      Bouton padding & radius
    </button>
    <div className="p-4 rounded-md border border-border">Bloc avec border token</div>
    <div className="h-2 w-full rounded-full bg-muted">
      <div className="h-2 w-1/2 rounded-full bg-ring" />
    </div>
  </div>
);
