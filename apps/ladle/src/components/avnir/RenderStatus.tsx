import * as React from "react";
import { cx } from "../../utils/cx";
import { Badge } from "../data/Badge";
import { Progress } from "../data/Progress";

export type RenderStatus = "queued" | "processing" | "completed" | "failed" | "cancelled";

export interface RenderJob {
  id: string;
  name: string;
  type: "audio" | "video" | "image";
  status: RenderStatus;
  progress?: number;
  startTime?: Date;
  endTime?: Date;
  estimatedTime?: number;
  errorMessage?: string;
  outputUrl?: string;
  modelUsed?: string;
  creditsUsed?: number;
}

export interface RenderStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  job: RenderJob;
  onCancel?: (jobId: string) => void;
  onRetry?: (jobId: string) => void;
  onDownload?: (jobId: string) => void;
  showDetails?: boolean;
}

const statusConfig: Record<
  RenderStatus,
  {
    label: string;
    color: string;
    icon: React.ReactNode;
  }
> = {
  queued: {
    label: "En attente",
    color: "bg-gray-500/15 text-gray-400",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  processing: {
    label: "En cours",
    color: "bg-blue-500/15 text-blue-400",
    icon: (
      <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
    ),
  },
  completed: {
    label: "Terminé",
    color: "bg-green-500/15 text-green-400",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  failed: {
    label: "Échec",
    color: "bg-red-500/15 text-red-400",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  },
  cancelled: {
    label: "Annulé",
    color: "bg-orange-500/15 text-orange-400",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"
        />
      </svg>
    ),
  },
};

const typeIcons = {
  audio: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
      />
    </svg>
  ),
  video: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  ),
  image: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
};

export const RenderStatus = React.forwardRef<HTMLDivElement, RenderStatusProps>(
  ({ className, job, onCancel, onRetry, onDownload, showDetails = true, ...props }, ref) => {
    const statusInfo = statusConfig[job.status];

    const formatDuration = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const getProcessingTime = () => {
      if (!job.startTime) return null;
      const endTime = job.endTime || new Date();
      const diffMs = endTime.getTime() - job.startTime.getTime();
      return Math.floor(diffMs / 1000);
    };

    const processingTime = getProcessingTime();

    return (
      <div
        ref={ref}
        className={cx(
          "bg-[var(--surface)] rounded-[var(--radius-lg)] p-4 border border-white/5",
          className,
        )}
        {...props}
      >
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              <div className="text-[var(--text-muted)] mt-0.5">{typeIcons[job.type]}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-white truncate">{job.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className={cx("text-xs flex items-center gap-1", statusInfo.color)}>
                    {statusInfo.icon}
                    {statusInfo.label}
                  </Badge>
                  {job.modelUsed && (
                    <span className="text-xs text-[var(--text-muted)]">{job.modelUsed}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              {job.status === "processing" && onCancel && (
                <button
                  onClick={() => onCancel(job.id)}
                  className="p-1 text-[var(--text-muted)] hover:text-red-400 rounded"
                  title="Annuler"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}

              {job.status === "failed" && onRetry && (
                <button
                  onClick={() => onRetry(job.id)}
                  className="p-1 text-[var(--text-muted)] hover:text-white rounded"
                  title="Réessayer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              )}

              {job.status === "completed" && job.outputUrl && onDownload && (
                <button
                  onClick={() => onDownload(job.id)}
                  className="p-1 text-[var(--text-muted)] hover:text-[var(--brand)] rounded"
                  title="Télécharger"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          {job.status === "processing" && job.progress !== undefined && (
            <div className="space-y-2">
              <Progress value={job.progress} showValue />
              {job.estimatedTime && (
                <div className="flex justify-between text-xs text-[var(--text-muted)]">
                  <span>{processingTime ? formatDuration(processingTime) : "0:00"} écoulé</span>
                  <span>~{formatDuration(job.estimatedTime)} restant</span>
                </div>
              )}
            </div>
          )}

          {/* Error Message */}
          {job.status === "failed" && job.errorMessage && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-[var(--radius-sm)]">
              <p className="text-xs text-red-400">{job.errorMessage}</p>
            </div>
          )}

          {/* Details */}
          {showDetails && (
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
              <div className="flex items-center gap-4">
                {job.startTime && <span>Démarré: {job.startTime.toLocaleTimeString()}</span>}
                {job.endTime && <span>Terminé: {job.endTime.toLocaleTimeString()}</span>}
              </div>

              {job.creditsUsed && (
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  <span>{job.creditsUsed} crédits</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);
RenderStatus.displayName = "RenderStatus";
