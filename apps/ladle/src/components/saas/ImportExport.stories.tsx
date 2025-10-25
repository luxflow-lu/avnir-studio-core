import React, { useState } from "react";

import { ImportExport } from "./ImportExport";

export default { title: "SaaS/ImportExport" };

export const Default = () => {
  const [importStatus, setImportStatus] = useState<
    "idle" | "uploading" | "processing" | "success" | "error"
  >("idle");
  const [importProgress, setImportProgress] = useState(0);

  const handleExport = async (format: "csv" | "json" | "xlsx") => {
    console.log("Exporting as", format);
    // Simulate export delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const handleImport = async (file: File, format: "csv" | "json" | "xlsx") => {
    console.log("Importing file", file.name, "as", format);

    setImportStatus("uploading");
    setImportProgress(0);

    // Simulate upload progress
    for (let i = 0; i <= 50; i += 10) {
      setImportProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    setImportStatus("processing");

    // Simulate processing progress
    for (let i = 50; i <= 100; i += 10) {
      setImportProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    // Simulate success or error
    const success = Math.random() > 0.3;
    setImportStatus(success ? "success" : "error");

    // Reset after 3 seconds
    setTimeout(() => {
      setImportStatus("idle");
      setImportProgress(0);
    }, 3000);
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <ImportExport
        onExport={handleExport}
        onImport={handleImport}
        importStatus={importStatus}
        importProgress={importProgress}
        exportCount={1234}
      />
    </div>
  );
};

export const LimitedFormats = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <ImportExport
      supportedFormats={["csv", "json"]}
      onExport={async (format) => console.log("Export", format)}
      onImport={async (file, format) => console.log("Import", file.name, format)}
      exportCount={567}
    />
  </div>
);
