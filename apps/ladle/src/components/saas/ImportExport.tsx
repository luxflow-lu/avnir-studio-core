import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { FileUpload } from "../form/FileUpload";
import { Select } from "../form/Select";
import { Progress } from "../data/Progress";

export type ExportFormat = "csv" | "json" | "xlsx";
export type ImportStatus = "idle" | "uploading" | "processing" | "success" | "error";

export interface ImportExportProps extends React.HTMLAttributes<HTMLDivElement> {
  onExport?: (format: ExportFormat) => Promise<void>;
  onImport?: (file: File, format: ExportFormat) => Promise<void>;
  supportedFormats?: ExportFormat[];
  importStatus?: ImportStatus;
  importProgress?: number;
  exportCount?: number;
}

const formatLabels: Record<ExportFormat, string> = {
  csv: "CSV",
  json: "JSON",
  xlsx: "Excel (XLSX)",
};

export const ImportExport = React.forwardRef<HTMLDivElement, ImportExportProps>(
  (
    {
      className,
      onExport,
      onImport,
      supportedFormats = ["csv", "json", "xlsx"],
      importStatus = "idle",
      importProgress = 0,
      exportCount,
      ...props
    },
    ref,
  ) => {
    const [exportFormat, setExportFormat] = React.useState<ExportFormat>(supportedFormats[0]);
    const [importFormat, setImportFormat] = React.useState<ExportFormat>(supportedFormats[0]);
    const [isExporting, setIsExporting] = React.useState(false);

    const handleExport = async () => {
      setIsExporting(true);
      try {
        await onExport?.(exportFormat);
      } finally {
        setIsExporting(false);
      }
    };

    const handleImport = async (files: File[]) => {
      if (files.length > 0) {
        await onImport?.(files[0], importFormat);
      }
    };

    const getStatusMessage = () => {
      switch (importStatus) {
        case "uploading":
          return "Uploading file...";
        case "processing":
          return "Processing data...";
        case "success":
          return "Import completed successfully!";
        case "error":
          return "Import failed. Please check your file and try again.";
        default:
          return "";
      }
    };

    const getStatusColor = () => {
      switch (importStatus) {
        case "success":
          return "text-green-400";
        case "error":
          return "text-red-400";
        default:
          return "text-[var(--text-muted)]";
      }
    };

    return (
      <div
        ref={ref}
        className={cx("bg-[var(--surface)] rounded-[var(--radius-lg)] p-6", className)}
        {...props}
      >
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Import & Export</h3>
          <p className="text-[var(--text-muted)] text-sm">
            Import data from files or export your current data
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Export Section */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-white mb-3">Export Data</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-muted)] mb-2">
                    Format
                  </label>
                  <Select
                    value={exportFormat}
                    onChange={(e) => setExportFormat(e.target.value as ExportFormat)}
                  >
                    {supportedFormats.map((format) => (
                      <option key={format} value={format}>
                        {formatLabels[format]}
                      </option>
                    ))}
                  </Select>
                </div>

                {exportCount !== undefined && (
                  <div className="text-xs text-[var(--text-muted)]">
                    {exportCount.toLocaleString()} records will be exported
                  </div>
                )}

                <Button onClick={handleExport} loading={isExporting} className="w-full">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Export {formatLabels[exportFormat]}
                </Button>
              </div>
            </div>
          </div>

          {/* Import Section */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-white mb-3">Import Data</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-muted)] mb-2">
                    Format
                  </label>
                  <Select
                    value={importFormat}
                    onChange={(e) => setImportFormat(e.target.value as ExportFormat)}
                    disabled={importStatus === "uploading" || importStatus === "processing"}
                  >
                    {supportedFormats.map((format) => (
                      <option key={format} value={format}>
                        {formatLabels[format]}
                      </option>
                    ))}
                  </Select>
                </div>

                <FileUpload
                  onFiles={handleImport}
                  accept={
                    importFormat === "csv" ? ".csv" : importFormat === "json" ? ".json" : ".xlsx"
                  }
                  disabled={importStatus === "uploading" || importStatus === "processing"}
                />

                {(importStatus === "uploading" || importStatus === "processing") && (
                  <div className="space-y-2">
                    <Progress value={importProgress} showValue />
                    <p className={cx("text-xs", getStatusColor())}>{getStatusMessage()}</p>
                  </div>
                )}

                {(importStatus === "success" || importStatus === "error") && (
                  <div className={cx("text-xs", getStatusColor())}>{getStatusMessage()}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-4 bg-[var(--bg)] rounded-[var(--radius-sm)]">
          <h5 className="text-sm font-medium text-white mb-2">Format Guidelines</h5>
          <ul className="text-xs text-[var(--text-muted)] space-y-1">
            <li>
              • <strong>CSV:</strong> Comma-separated values with headers in first row
            </li>
            <li>
              • <strong>JSON:</strong> Array of objects with consistent property names
            </li>
            <li>
              • <strong>Excel:</strong> XLSX format with data starting from row 1
            </li>
          </ul>
        </div>
      </div>
    );
  },
);
ImportExport.displayName = "ImportExport";
