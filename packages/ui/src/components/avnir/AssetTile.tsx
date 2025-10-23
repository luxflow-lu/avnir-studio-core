import * as React from "react";
import { cx } from "../../utils/cx";
import { Badge } from "../data-display/Badge";

export type AssetType = "audio" | "video" | "image" | "document" | "preset";
export type AssetStatus = "processing" | "ready" | "error" | "draft";

export interface AssetTileProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  type: AssetType;
  status: AssetStatus;
  thumbnail?: string;
  duration?: string;
  size?: string;
  createdAt: Date;
  onPlay?: () => void;
  onDownload?: () => void;
  onDelete?: () => void;
  onSelect?: () => void;
  selected?: boolean;
}

const typeConfig: Record<
  AssetType,
  {
    icon: React.ReactNode;
    color: string;
    label: string;
  }
> = {
  audio: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
    color: "text-blue-400",
    label: "Audio",
  },
  video: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "text-purple-400",
    label: "Vidéo",
  },
  image: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "text-green-400",
    label: "Image",
  },
  document: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "text-orange-400",
    label: "Document",
  },
  preset: {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: "text-yellow-400",
    label: "Preset",
  },
};

const statusConfig: Record<
  AssetStatus,
  {
    color: string;
    label: string;
  }
> = {
  processing: { color: "bg-blue-500/15 text-blue-400", label: "En cours" },
  ready: { color: "bg-green-500/15 text-green-400", label: "Prêt" },
  error: { color: "bg-red-500/15 text-red-400", label: "Erreur" },
  draft: { color: "bg-yellow-500/15 text-yellow-400", label: "Brouillon" },
};

export const AssetTile = React.forwardRef<HTMLDivElement, AssetTileProps>(
  (
    {
      className,
      id,
      name,
      type,
      status,
      thumbnail,
      duration,
      size,
      createdAt,
      onPlay,
      onDownload,
      onDelete,
      onSelect,
      selected = false,
      ...props
    },
    ref,
  ) => {
    const typeInfo = typeConfig[type];
    const statusInfo = statusConfig[status];

    return (
      <div
        ref={ref}
        className={cx(
          "group relative bg-[var(--surface)] rounded-[var(--radius-lg)] p-4 border transition-all hover:shadow-lg",
          selected
            ? "border-[var(--brand)] ring-2 ring-[var(--brand)]/20"
            : "border-white/5 hover:border-white/10",
          onSelect && "cursor-pointer",
          className,
        )}
        onClick={onSelect}
        {...props}
      >
        {/* Thumbnail/Icon */}
        <div className="relative mb-3">
          {thumbnail ? (
            <div className="aspect-video rounded-[var(--radius-sm)] overflow-hidden bg-white/5">
              <img src={thumbnail} alt={name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="aspect-video rounded-[var(--radius-sm)] bg-white/5 flex items-center justify-center">
              <div className={cx("text-2xl", typeInfo.color)}>{typeInfo.icon}</div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-2 right-2">
            <Badge className={cx("text-xs", statusInfo.color)}>{statusInfo.label}</Badge>
          </div>

          {/* Play Button Overlay */}
          {(type === "audio" || type === "video") && onPlay && status === "ready" && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPlay();
              }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-[var(--radius-sm)]"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Asset Info */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-medium text-white truncate pr-2">{name}</h3>
            <div className={cx("flex-shrink-0 text-xs", typeInfo.color)}>{typeInfo.label}</div>
          </div>

          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              {duration && <span>{duration}</span>}
              {size && <span>{size}</span>}
            </div>
            <span>{createdAt.toLocaleDateString()}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1">
            {onDownload && status === "ready" && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDownload();
                }}
                className="w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
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
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
                className="w-8 h-8 bg-black/50 hover:bg-red-500/70 text-white rounded-full flex items-center justify-center"
                title="Supprimer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    );
  },
);
AssetTile.displayName = "AssetTile";
