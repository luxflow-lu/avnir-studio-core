import * as React from "react";
import { cx } from "../../utils/cx";

export interface FileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  onFiles?: (files: File[]) => void;
  maxFiles?: number;
  accept?: string;
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, onFiles, maxFiles = 1, accept, ...props }, ref) => {
    const [isDragOver, setIsDragOver] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const handleFiles = (files: FileList | null) => {
      if (!files) return;
      const fileArray = Array.from(files).slice(0, maxFiles);
      onFiles?.(fileArray);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      handleFiles(e.dataTransfer.files);
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
    };

    return (
      <div
        className={cx(
          "file-upload",
          isDragOver && "file-upload--active",
          className,
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={inputRef}
          type="file"
          className="file-upload-input"
          multiple={maxFiles > 1}
          accept={accept}
          onChange={(e) => handleFiles(e.target.files)} {...props}
        />
        <div className="file-upload-content">
          <div className="file-upload-icon-container">
            <svg
              className="file-upload-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <div className="file-upload-text">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="file-upload-button"
            >
              Cliquez pour télécharger
            </button>
            <span className="file-upload-or"> ou glissez-déposez</span>
          </div>
          <p className="file-upload-info">
            {maxFiles > 1 ? `Jusqu'à ${maxFiles} fichiers` : "1 fichier maximum"}
            {accept && ` • ${accept}`}
          </p>
        </div>
      </div>
    );
  },
);
FileUpload.displayName = "FileUpload";
