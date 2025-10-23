import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Input } from "../form/Input";
import { Badge } from "../data/Badge";
import { Modal } from "../overlay/Modal";

export interface SavedView {
  id: string;
  name: string;
  filters: Record<string, any>;
  isDefault?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SavedViewsProps extends React.HTMLAttributes<HTMLDivElement> {
  views: SavedView[];
  currentView?: string;
  onSelectView?: (viewId: string) => void;
  onSaveView?: (name: string, filters: Record<string, any>) => Promise<void>;
  onDeleteView?: (viewId: string) => Promise<void>;
  onSetDefault?: (viewId: string) => Promise<void>;
  currentFilters?: Record<string, any>;
}

export const SavedViews = React.forwardRef<HTMLDivElement, SavedViewsProps>(
  (
    {
      className,
      views,
      currentView,
      onSelectView,
      onSaveView,
      onDeleteView,
      onSetDefault,
      currentFilters = {},
      ...props
    },
    ref,
  ) => {
    const [showSaveModal, setShowSaveModal] = React.useState(false);
    const [viewName, setViewName] = React.useState("");
    const [isSaving, setIsSaving] = React.useState(false);

    const handleSaveView = async () => {
      if (!viewName.trim()) return;

      setIsSaving(true);
      try {
        await onSaveView?.(viewName, currentFilters);
        setShowSaveModal(false);
        setViewName("");
      } finally {
        setIsSaving(false);
      }
    };

    const hasActiveFilters = Object.keys(currentFilters).length > 0;
    const currentViewData = views.find((v) => v.id === currentView);

    return (
      <div
        ref={ref}
        className={cx("bg-[var(--surface)] rounded-[var(--radius-lg)] p-4", className)}
        {...props}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-medium text-white">Saved Views</h3>
            <p className="text-xs text-[var(--text-muted)]">
              Save and manage your filter combinations
            </p>
          </div>
          <Button size="sm" onClick={() => setShowSaveModal(true)} disabled={!hasActiveFilters}>
            Save Current
          </Button>
        </div>

        {views.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 mx-auto mb-3 text-[var(--text-muted)]">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-3">No saved views yet</p>
            <p className="text-xs text-[var(--text-muted)]">
              Apply some filters and save them as a view
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {views.map((view) => (
              <div
                key={view.id}
                className={cx(
                  "flex items-center justify-between p-3 rounded-[var(--radius-sm)] border transition-colors cursor-pointer",
                  currentView === view.id
                    ? "border-[var(--brand)] bg-[var(--brand)]/5"
                    : "border-white/10 hover:border-white/20",
                )}
                onClick={() => onSelectView?.(view.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-white truncate">{view.name}</span>
                    {view.isDefault && <Badge className="text-xs">Default</Badge>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <span>{Object.keys(view.filters).length} filters</span>
                    <span>•</span>
                    <span>Updated {view.updatedAt.toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {!view.isDefault && onSetDefault && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSetDefault(view.id);
                      }}
                      className="text-xs"
                    >
                      Set Default
                    </Button>
                  )}
                  {onDeleteView && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteView(view.id);
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <Modal
          open={showSaveModal}
          onClose={() => setShowSaveModal(false)}
          title="Save Current View"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">View Name</label>
              <Input
                placeholder="Enter a name for this view"
                value={viewName}
                onChange={(e) => setViewName(e.target.value)}
              />
            </div>

            <div className="bg-[var(--bg)] p-3 rounded-[var(--radius-sm)]">
              <p className="text-xs text-[var(--text-muted)] mb-2">Current filters:</p>
              <div className="flex flex-wrap gap-1">
                {Object.entries(currentFilters).map(([key, value]) => (
                  <Badge key={key} className="text-xs">
                    {key}: {String(value)}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowSaveModal(false)} disabled={isSaving}>
                Cancel
              </Button>
              <Button onClick={handleSaveView} loading={isSaving} disabled={!viewName.trim()}>
                Save View
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
);
SavedViews.displayName = "SavedViews";
