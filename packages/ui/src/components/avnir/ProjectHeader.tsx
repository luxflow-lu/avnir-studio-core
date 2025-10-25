import * as React from "react";
import { cx } from "../../utils/cx";
import { Badge } from "../data-display/Badge";

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
  artiste: "project-header-type--artiste",
  beatmaker: "project-header-type--beatmaker",
  studio: "project-header-type--studio",
  producteur: "project-header-type--producteur",
};

const statusColors: Record<NonNullable<ProjectHeaderProps["status"]>, string> = {
  draft: "project-header-status--draft",
  active: "project-header-status--active",
  archived: "project-header-status--archived",
};

export const ProjectHeader = React.forwardRef<HTMLDivElement, ProjectHeaderProps>(
  (
    {
      className,
      title,
      type,
      description,
      status = "draft",
      lastModified,
      collaborators,
      onEdit,
      onShare,
      onArchive,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cx("card-base", "project-header", className)} {...props}
      >
        {/* Header */}
        <div className="project-header-content">
          <div className="project-header-info">
            <div className="project-header-title-row">
              <h1 className="project-header-title">{title}</h1>
              <Badge className={cx("project-header-badge", typeColors[type])}>{typeLabels[type]}</Badge>
              {status && (
                <Badge className={cx("project-header-badge", statusColors[status])}>
                  {status === "draft" && "Brouillon"}
                  {status === "active" && "Actif"}
                  {status === "archived" && "Archivé"}
                </Badge>
              )}
            </div>
            {description && (
              <p className="project-header-description">{description}</p>
            )}
            <div className="project-header-meta">
              {lastModified && (
                <span className="project-header-meta-item">Modifié le {lastModified.toLocaleDateString()}</span>
              )}
              {collaborators !== undefined && (
                <span className="project-header-meta-item">{collaborators} collaborateur{collaborators > 1 ? "s" : ""}</span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="project-header-actions">
            {onShare && (
              <button
                onClick={onShare}
                className="project-header-action"
                title="Partager"
              >
                <svg className="project-header-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
              </button>
            )}
            {onEdit && (
              <button
                onClick={onEdit}
                className="project-header-action"
                title="Modifier"
              >
                <svg className="project-header-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            )}
            {onArchive && (
              <button
                onClick={onArchive}
                className="project-header-action"
                title="Archiver"
              >
                <svg className="project-header-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8l4 4 4-4m0 5l-4 4-4-4"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  },
);
ProjectHeader.displayName = "ProjectHeader";
