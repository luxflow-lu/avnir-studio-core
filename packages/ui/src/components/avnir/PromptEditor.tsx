import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../form/Button";
import { Textarea } from "../form/Textarea";
import { Badge } from "../data-display/Badge";

export interface PromptPreset {
  id: string;
  name: string;
  prompt: string;
  category: string;
  tags: string[];
}

export interface PromptHistory {
  id: string;
  prompt: string;
  timestamp: Date;
  result?: string;
}

export interface PromptEditorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  presets?: PromptPreset[];
  history?: PromptHistory[];
  onGenerate?: (prompt: string) => void;
  onSavePreset?: (name: string, prompt: string) => void;
  loading?: boolean;
  maxLength?: number;
  placeholder?: string;
}

export const PromptEditor = React.forwardRef<HTMLDivElement, PromptEditorProps>(
  (
    {
      className,
      value,
      onChange,
      presets = [],
      history = [],
      onGenerate,
      onSavePreset,
      loading = false,
      maxLength = 2000,
      placeholder = "Décrivez votre création musicale...",
      ...props
    },
    ref,
  ) => {
    const [showPresets, setShowPresets] = React.useState(false);
    const [showHistory, setShowHistory] = React.useState(false);
    const [savePresetName, setSavePresetName] = React.useState("");
    const [showSavePreset, setShowSavePreset] = React.useState(false);

    const presetCategories = React.useMemo(() => {
      const categories = new Set(presets.map((p) => p.category));
      return Array.from(categories);
    }, [presets]);

    const handlePresetSelect = (preset: PromptPreset) => {
      onChange(preset.prompt);
      setShowPresets(false);
    };

    const handleHistorySelect = (historyItem: PromptHistory) => {
      onChange(historyItem.prompt);
      setShowHistory(false);
    };

    const handleSavePreset = () => {
      if (savePresetName.trim() && value.trim()) {
        onSavePreset?.(savePresetName, value);
        setSavePresetName("");
        setShowSavePreset(false);
      }
    };

    const wordCount = value
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    const charCount = value.length;

    return (
      <div ref={ref} className={cx("prompt-editor", className)} {...props}>
        <div className="prompt-editor-toolbar">
          <div className="prompt-editor-actions">
            <Button variant="outline" size="sm" onClick={() => setShowPresets(!showPresets)} className="prompt-editor-button">
              <svg className="prompt-editor-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-4H3m16 8H7m14 4H3" />
              </svg>
              Presets ({presets.length})
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowHistory(!showHistory)} className="prompt-editor-button">
              <svg className="prompt-editor-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Historique ({history.length})
            </Button>
            {onSavePreset && value.trim() && (
              <Button variant="outline" size="sm" onClick={() => setShowSavePreset(!showSavePreset)} className="prompt-editor-button">
                <svg className="prompt-editor-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Sauvegarder
              </Button>
            )}
          </div>
          <div className="prompt-editor-stats">
            {wordCount} mots • {charCount}/{maxLength} caractères
          </div>
        </div>

        {/* Presets Panel */}
        {showPresets && presets.length > 0 && (
          <div className="card-base prompt-editor-presets">
            <h3 className="prompt-editor-panel-title">Presets disponibles</h3>
            {presetCategories.map((category) => (
              <div key={category} className="prompt-editor-category">
                <h4 className="prompt-editor-category-title">{category}</h4>
                <div className="prompt-editor-preset-list">
                  {presets.filter((preset) => preset.category === category).map((preset) => (
                    <button key={preset.id} onClick={() => handlePresetSelect(preset)} className="prompt-editor-preset">
                      <div className="prompt-editor-preset-header">
                        <h5 className="prompt-editor-preset-name">{preset.name}</h5>
                        <div className="prompt-editor-preset-tags">
                          {preset.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} className="prompt-editor-tag">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <p className="prompt-editor-preset-text">{preset.prompt}</p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* History Panel */}
        {showHistory && history.length > 0 && (
          <div className="card-base prompt-editor-history">
            <h3 className="prompt-editor-panel-title">Historique récent</h3>
            <div className="prompt-editor-history-list">
              {history.slice(0, 10).map((item) => (
                <button key={item.id} onClick={() => handleHistorySelect(item)} className="prompt-editor-history-item">
                  <div className="prompt-editor-history-header">
                    <span className="prompt-editor-history-date">
                      {item.timestamp.toLocaleDateString()} à {item.timestamp.toLocaleTimeString()}
                    </span>
                    {item.result && <Badge className="prompt-editor-history-badge">Généré</Badge>}
                  </div>
                  <p className="prompt-editor-history-text">{item.prompt}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Save Preset Modal */}
        {showSavePreset && (
          <div className="card-base prompt-editor-save-modal">
            <h3 className="prompt-editor-save-title">Sauvegarder comme preset</h3>
            <div className="prompt-editor-save-form">
              <input
                type="text"
                value={savePresetName}
                onChange={(e) => setSavePresetName(e.target.value)}
                placeholder="Nom du preset..."
                className="prompt-editor-save-input"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSavePreset();
                  else if (e.key === "Escape") setShowSavePreset(false);
                }}
              />
              <Button variant="solid" size="sm" onClick={handleSavePreset}>Sauvegarder</Button>
              <Button variant="outline" size="sm" onClick={() => setShowSavePreset(false)}>Annuler</Button>
            </div>
          </div>
        )}

        <div className="prompt-editor-main">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="prompt-editor-textarea"
            maxLength={maxLength}
          />
          {onGenerate && (
            <div className="prompt-editor-generate">
              <Button
                variant="solid"
                size="sm"
                onClick={() => onGenerate(value)}
                disabled={loading || !value.trim()}
                className="prompt-editor-generate-button"
              >
                {loading ? (
                  <>
                    <svg className="prompt-editor-spinner" fill="none" viewBox="0 0 24 24">
                      <circle className="prompt-editor-spinner-track" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="prompt-editor-spinner-fill" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Génération...
                  </>
                ) : (
                  <>
                    <svg className="prompt-editor-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Générer
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  },
);
PromptEditor.displayName = "PromptEditor";
