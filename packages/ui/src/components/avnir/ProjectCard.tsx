import * as React from "react";

import { cx } from "../../utils/cx";
import { Badge } from "../data-display/Badge";

export type ProjectType = "artiste" | "beatmaker" | "studio" | "producteur";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  type: ProjectType;
  thumbnail?: string;
  status?: "draft" | "active" | "archived";
  lastModified?: Date;
  onEdit?: () => void;
  onDelete?: () => void;
}

const typeLabels: Record<ProjectType, string> = {
  artiste: "Artiste",
  beatmaker: "Beatmaker",
  studio: "Studio",
  producteur: "Producteur",
};

const typeColors: Record<ProjectType, string> = {
  artiste: "project-type--artiste",
  beatmaker: "project-type--beatmaker",
  studio: "project-type--studio",
  producteur: "project-type--producteur",
};

const statusColors: Record<NonNullable<ProjectCardProps["status"]>, string> = {
  draft: "project-status--draft",
  active: "project-status--active",
  archived: "project-status--archived",
};

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      title,
      description,
      type,
      thumbnail,
      status = "draft",
      lastModified,
      onEdit,
      onDelete,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cx("card-base", "project-card", className)} {...props}
      >
        {/* Thumbnail */}
        <div className="project-card-media">
          {thumbnail ? (
            <div className="project-card-thumbnail">
              <img src={thumbnail} alt={title} className="project-card-image" />
            </div>
          ) : (
            <div className="project-card-placeholder">
              <div className="project-card-icon">🎵</div>
            </div>
          )}

          {/* Status Badge */}
          <div className="project-card-status">
            <Badge className={cx("project-card-badge", statusColors[status])}>
              {status === "draft" && "Brouillon"}
              {status === "active" && "Actif"}
              {status === "archived" && "Archivé"}
            </Badge>
          </div>

          {/* Actions */}
          <div className="project-card-actions">
            <div className="project-card-actions-group">
              {onEdit && (
                <button
                  onClick={onEdit}
                  className="project-card-action project-card-action--edit"
                  title="Modifier"
                >
                  <svg className="project-card-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              )}
              {onDelete && (
                <button
                  onClick={onDelete}
                  className="project-card-action project-card-action--delete"
                  title="Supprimer"
                >
                  <svg className="project-card-action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="project-card-info">
          <div className="project-card-header">
            <h3 className="project-card-title">{title}</h3>
            <Badge className={cx("project-card-type", typeColors[type])}>
              {typeLabels[type]}
            </Badge>
          </div>

          {description && (
            <p className="project-card-description">{description}</p>
          )}

          {lastModified && (
            <div className="project-card-date">
              Modifié le {lastModified.toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    );
  },
);
ProjectCard.displayName = "ProjectCard";
