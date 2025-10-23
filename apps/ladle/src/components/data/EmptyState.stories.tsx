import React from "react";
import { EmptyState } from "./EmptyState";
import { Button } from "../form/Button";

export default { title: "Data/EmptyState" };

const FolderIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

export const Default = () => (
  <div className="bg-[var(--bg)] text-white">
    <EmptyState
      icon={<FolderIcon />}
      title="No files found"
      description="Get started by uploading your first file"
      action={<Button>Upload File</Button>}
    />
  </div>
);

export const WithoutAction = () => (
  <div className="bg-[var(--bg)] text-white">
    <EmptyState
      icon={<FolderIcon />}
      title="No results"
      description="Try adjusting your search criteria"
    />
  </div>
);
