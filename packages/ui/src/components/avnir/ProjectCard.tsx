import * as React from "react";
import { cx } from "../../utils/cx";
import { Badge } from "../data/Badge";

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
  producteur: "Producteur"
};

const typeColors: Record<ProjectType, string> = {
  artiste: "bg-purple-500/15 text-purple-400",
  beatmaker: "bg-blue-500/15 text-blue-400",
  studio: "bg-green-500/15 text-green-400",
  producteur: "bg-orange-500/15 text-orange-400"
};

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, title, description, type, thumbnail, status = "active", lastModified, onEdit, onDelete, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(
        "bg-[var(--surface)] rounded-[var(--radius-lg)] p-6 shadow-md hover:shadow-lg transition-shadow",
        "border border-white/5 hover:border-white/10",
        className
      )}
      {...props}
    >
      {thumbnail && (
        <div className="aspect-video bg-gradient-to-br from-[var(--brand)]/20 to-purple-600/20 rounded-[var(--radius-md)] mb-4 overflow-hidden">
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Badge className={typeColors[type]}>
            {typeLabels[type]}
          </Badge>
          {status === "draft" && <Badge variant="warning">Brouillon</Badge>}
          {status === "archived" && <Badge>Archivé</Badge>}
        </div>
        
        {(onEdit || onDelete) && (
          <div className="flex gap-1">
            {onEdit && (
              <button
                onClick={onEdit}
                className="p-1 text-[var(--text-muted)] hover:text-white rounded"
                aria-label="Modifier"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            )}
            {onDelete && (
              <button
                onClick={onDelete}
                className="p-1 text-[var(--text-muted)] hover:text-red-400 rounded"
                aria-label="Supprimer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {description && (
        <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">{description}</p>
      )}
      
      {lastModified && (
        <div className="text-xs text-[var(--text-muted)]">
          Modifié le {lastModified.toLocaleDateString()}
        </div>
      )}
    </div>
  )
);
ProjectCard.displayName = "ProjectCard";
