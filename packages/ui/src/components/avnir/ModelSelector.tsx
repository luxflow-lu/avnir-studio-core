import * as React from "react";
import { cx } from "../../utils/cx";
import { Badge } from "../data/Badge";

export interface AIModel {
  id: string;
  name: string;
  description: string;
  type: "audio" | "vocal" | "instrumental" | "mastering";
  version: string;
  capabilities: string[];
  pricing: {
    credits: number;
    unit: string;
  };
  quality: "standard" | "premium" | "pro";
  processingTime: string;
  available: boolean;
  beta?: boolean;
}

export interface ModelSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  models: AIModel[];
  selectedModel?: string;
  onModelSelect: (modelId: string) => void;
  filterType?: "audio" | "vocal" | "instrumental" | "mastering" | "all";
  showPricing?: boolean;
}

const typeConfig = {
  audio: { label: "Audio", color: "bg-blue-500/15 text-blue-400" },
  vocal: { label: "Vocal", color: "bg-purple-500/15 text-purple-400" },
  instrumental: { label: "Instrumental", color: "bg-green-500/15 text-green-400" },
  mastering: { label: "Mastering", color: "bg-orange-500/15 text-orange-400" }
};

const qualityConfig = {
  standard: { label: "Standard", color: "bg-gray-500/15 text-gray-400" },
  premium: { label: "Premium", color: "bg-yellow-500/15 text-yellow-400" },
  pro: { label: "Pro", color: "bg-red-500/15 text-red-400" }
};

export const ModelSelector = React.forwardRef<HTMLDivElement, ModelSelectorProps>(
  ({ 
    className, 
    models, 
    selectedModel, 
    onModelSelect, 
    filterType = "all",
    showPricing = true,
    ...props 
  }, ref) => {
    const filteredModels = React.useMemo(() => {
      if (filterType === "all") return models;
      return models.filter(model => model.type === filterType);
    }, [models, filterType]);

    const groupedModels = React.useMemo(() => {
      const groups: Record<string, AIModel[]> = {};
      filteredModels.forEach(model => {
        if (!groups[model.type]) {
          groups[model.type] = [];
        }
        groups[model.type].push(model);
      });
      return groups;
    }, [filteredModels]);

    return (
      <div ref={ref} className={cx("space-y-6", className)} {...props}>
        {Object.entries(groupedModels).map(([type, typeModels]) => (
          <div key={type} className="space-y-3">
            <h3 className="text-sm font-medium text-white border-b border-white/10 pb-2">
              {typeConfig[type as keyof typeof typeConfig]?.label || type}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {typeModels.map((model) => {
                const isSelected = selectedModel === model.id;
                const typeInfo = typeConfig[model.type];
                const qualityInfo = qualityConfig[model.quality];
                
                return (
                  <button
                    key={model.id}
                    onClick={() => model.available && onModelSelect(model.id)}
                    disabled={!model.available}
                    className={cx(
                      "text-left p-4 rounded-[var(--radius-lg)] border-2 transition-all",
                      isSelected
                        ? "border-[var(--brand)] bg-[var(--brand)]/5"
                        : model.available
                        ? "border-white/10 hover:border-white/20 hover:bg-white/5"
                        : "border-white/5 opacity-50 cursor-not-allowed",
                      "focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
                    )}
                  >
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-white">{model.name}</h4>
                            <span className="text-xs text-[var(--text-muted)]">v{model.version}</span>
                            {model.beta && (
                              <Badge className="text-xs bg-blue-500/15 text-blue-400">
                                Beta
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-[var(--text-muted)] line-clamp-2">
                            {model.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-end gap-1">
                          <Badge className={cx("text-xs", typeInfo.color)}>
                            {typeInfo.label}
                          </Badge>
                          <Badge className={cx("text-xs", qualityInfo.color)}>
                            {qualityInfo.label}
                          </Badge>
                        </div>
                      </div>

                      {/* Capabilities */}
                      <div className="flex flex-wrap gap-1">
                        {model.capabilities.slice(0, 3).map((capability) => (
                          <span
                            key={capability}
                            className="px-2 py-0.5 text-xs bg-white/5 text-[var(--text-muted)] rounded"
                          >
                            {capability}
                          </span>
                        ))}
                        {model.capabilities.length > 3 && (
                          <span className="px-2 py-0.5 text-xs bg-white/5 text-[var(--text-muted)] rounded">
                            +{model.capabilities.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                        <div className="flex items-center gap-3">
                          <span>⏱️ {model.processingTime}</span>
                          {!model.available && (
                            <Badge className="text-xs bg-red-500/15 text-red-400">
                              Indisponible
                            </Badge>
                          )}
                        </div>
                        
                        {showPricing && (
                          <div className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            <span>{model.pricing.credits} crédits/{model.pricing.unit}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        
        {filteredModels.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 text-[var(--text-muted)]">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-[var(--text-muted)]">Aucun modèle disponible pour ce type</p>
          </div>
        )}
      </div>
    );
  }
);
ModelSelector.displayName = "ModelSelector";
