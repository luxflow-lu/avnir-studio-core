import * as React from "react";

import { cx } from "../../utils/cx";
import { Badge } from "../data/Badge";

export type ProjectType = "artiste" | "beatmaker" | "studio" | "producteur";

export interface ProjectHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  type: ProjectType;
  description?: string;
  status?: "draft" | "active" | "archived";
  lastModified?: Date;
  collaborators?: number;
  onEdit?: () => void;
  onShare?: () => void;
  onArchive?: () => void;
}

const typeLabels: Record<ProjectType, string> = {
  artiste: "Artiste",
  beatmaker: "Beatmaker",
  studio: "Studio",
  producteur: "Producteur",
};

const typeColors: Record<ProjectType, string> = {
  artiste: "bg-purple-500/15 text-purple-400",
  beatmaker: "bg-blue-500/15 text-blue-400",
  studio: "bg-green-500/15 text-green-400",
  producteur: "bg-orange-500/15 text-orange-400",
};

export const ProjectHeader = React.forwardRef<HTMLDivElement, ProjectHeaderProps>(
  (
    {
      className,
      title,
      type,
      description,
      status = "active",
      lastModified,
      collaborators,
      onEdit,
      onShare,
      onArchive,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cx("bg-[var(--surface)] rounded-[var(--radius-lg)] p-6", className)}
      {...props}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Badge className={typeColors[type]}>{typeLabels[type]}</Badge>
            {status === "draft" && <Badge variant="warning">Brouillon</Badge>}
            {status === "archived" && <Badge>Archivé</Badge>}
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>

          {description && <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>}
        </div>

        <div className="flex items-center gap-2">
          {onEdit && (
            <button
              onClick={onEdit}
              className="p-2 text-[var(--text-muted)] hover:text-white hover:bg-white/5 rounded-[var(--radius-sm)] transition-colors"
              aria-label="Modifier le projet"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          )}

          {onShare && (
            <button
              onClick={onShare}
              className="p-2 text-[var(--text-muted)] hover:text-white hover:bg-white/5 rounded-[var(--radius-sm)] transition-colors"
              aria-label="Partager le projet"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            </button>
          )}

          {onArchive && (
            <button
              onClick={onArchive}
              className="p-2 text-[var(--text-muted)] hover:text-red-400 hover:bg-red-500/10 rounded-[var(--radius-sm)] transition-colors"
              aria-label="Archiver le projet"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8l4 4 4-4m6 5l-3 3-3-3"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
        {lastModified && (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Modifié le {lastModified.toLocaleDateString()}</span>
          </div>
        )}

        {collaborators !== undefined && (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            <span>
              {collaborators} collaborateur{collaborators > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>
    </div>
  ),
);
ProjectHeader.displayName = "ProjectHeader";
