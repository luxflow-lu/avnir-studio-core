import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { Input } from "../02-form/Input";
import { Badge } from "../03-data-display/Badge";
import { Modal } from "../06-overlay/Modal";

export interface SavedView {
  id: string;
  name: string;
  filters: Record<string, unknown>;
  isDefault?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SavedViewsProps extends React.HTMLAttributes<HTMLDivElement> {
  views: SavedView[];
  currentView?: string;
  onSelectView?: (viewId: string) => void;
  onSaveView?: (name: string, filters: Record<string, unknown>) => Promise<void>;
  onDeleteView?: (viewId: string) => Promise<void>;
  onSetDefault?: (viewId: string) => Promise<void>;
  currentFilters?: Record<string, unknown>;
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

    return (
      <div
        ref={ref}
        className={cx("saved-views-container", className)} {...props}
      >
        <div className="saved-views-header">
          <div>
            <h3>Saved Views</h3>
            <p>
              Save and manage your filter combinations
            </p>
          </div>
          <Button size="sm" onClick={() => setShowSaveModal(true)} disabled={!hasActiveFilters}>
            Save Current
          </Button>
        </div>

        {views.length === 0 ? (
          <div className="saved-views-empty">
            <div className="saved-views-empty-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p>No saved views yet</p>
            <p>
              Apply some filters and save them as a view
            </p>
          </div>
        ) : (
          <div className="saved-views-list">
            {views.map((view) => (
              <div
                key={view.id}
                className={cx(
                  "saved-view-card",
                  currentView === view.id && "saved-view-card--active",
                )}
                onClick={() => onSelectView?.(view.id)}
              >
                <div className="saved-view-content">
                  <div className="saved-view-header">
                    <span className="saved-view-name">{view.name}</span>
                    {view.isDefault && <Badge>Default</Badge>}
                  </div>
                  <div className="saved-view-meta">
                    <span>{Object.keys(view.filters).length} filters</span>
                    <span>•</span>
                    <span>Updated {view.updatedAt.toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="saved-view-actions">
                  {!view.isDefault && onSetDefault && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSetDefault(view.id);
                      }}
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
                      className="btn-destructive"
                    >
                      <svg
                        className="icon-sm"
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
          <div className="saved-views-form">
            <div className="saved-views-form-field">
              <label>View Name</label>
              <Input
                placeholder="Enter a name for this view"
                value={viewName}
                onChange={(e) => setViewName(e.target.value)}
              />
            </div>

            <div className="saved-views-filters-preview">
              <p>Current filters:</p>
              <div className="saved-views-filters-list">
                {Object.entries(currentFilters).map(([key, value]) => (
                  <Badge key={key}>
                    {key}: {String(value)}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="saved-views-form-actions">
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
