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
      <div ref={ref} className={cx("space-y-4", className)} {...props}>
        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setShowPresets(!showPresets)}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Presets
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setShowHistory(!showHistory)}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Historique
            </Button>

            {value.trim() && (
              <Button variant="ghost" size="sm" onClick={() => setShowSavePreset(true)}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                Sauver
              </Button>
            )}
          </div>

          <div className="text-xs text-[var(--text-muted)]">
            {wordCount} mots • {charCount}/{maxLength} caractères
          </div>
        </div>

        {/* Presets Panel */}
        {showPresets && (
          <div className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">Presets disponibles</h3>
              <button
                onClick={() => setShowPresets(false)}
                className="text-[var(--text-muted)] hover:text-white"
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
            </div>

            {presetCategories.map((category) => (
              <div key={category} className="space-y-2">
                <h4 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                  {category}
                </h4>
                <div className="space-y-2">
                  {presets
                    .filter((p) => p.category === category)
                    .map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => handlePresetSelect(preset)}
                        className="w-full text-left p-3 rounded-[var(--radius-sm)] hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="text-sm font-medium text-white">{preset.name}</h5>
                          <div className="flex flex-wrap gap-1">
                            {preset.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                          {preset.prompt}
                        </p>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* History Panel */}
        {showHistory && (
          <div className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">Historique récent</h3>
              <button
                onClick={() => setShowHistory(false)}
                className="text-[var(--text-muted)] hover:text-white"
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
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              {history.length === 0 ? (
                <p className="text-sm text-[var(--text-muted)] text-center py-4">
                  Aucun historique disponible
                </p>
              ) : (
                history.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleHistorySelect(item)}
                    className="w-full text-left p-3 rounded-[var(--radius-sm)] hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-[var(--text-muted)]">
                        {item.timestamp.toLocaleDateString()} {item.timestamp.toLocaleTimeString()}
                      </span>
                      {item.result && (
                        <Badge className="text-xs bg-green-500/15 text-green-400">Généré</Badge>
                      )}
                    </div>
                    <p className="text-sm text-white line-clamp-2">{item.prompt}</p>
                  </button>
                ))
              )}
            </div>
          </div>
        )}

        {/* Save Preset Modal */}
        {showSavePreset && (
          <div className="bg-[var(--surface)] rounded-[var(--radius-lg)] p-4 space-y-4">
            <h3 className="text-sm font-medium text-white">Sauvegarder comme preset</h3>
            <input
              type="text"
              placeholder="Nom du preset..."
              value={savePresetName}
              onChange={(e) => setSavePresetName(e.target.value)}
              className="w-full h-10 rounded-[var(--radius-sm)] bg-[color:var(--bg)/0.6] border border-white/10 px-3 placeholder:opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)/0.4]"
            />
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowSavePreset(false)}>
                Annuler
              </Button>
              <Button size="sm" onClick={handleSavePreset} disabled={!savePresetName.trim()}>
                Sauvegarder
              </Button>
            </div>
          </div>
        )}

        {/* Main Editor */}
        <div className="space-y-2">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={8}
            className="resize-none"
          />
        </div>

        {/* Generate Button */}
        {onGenerate && (
          <div className="flex justify-end">
            <Button
              onClick={() => onGenerate(value)}
              loading={loading}
              disabled={!value.trim() || loading}
              className="min-w-[120px]"
            >
              {loading ? "Génération..." : "Générer"}
            </Button>
          </div>
        )}
      </div>
    );
  },
);
PromptEditor.displayName = "PromptEditor";
