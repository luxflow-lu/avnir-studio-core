import * as React from "react";
import { cx } from "../../utils/cx";
import { Badge } from "../data-display/Badge";

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
  audio: { label: "Audio", color: "model-type--audio" },
  vocal: { label: "Vocal", color: "model-type--vocal" },
  instrumental: { label: "Instrumental", color: "model-type--instrumental" },
  mastering: { label: "Mastering", color: "model-type--mastering" },
};

const qualityConfig = {
  standard: { label: "Standard", color: "model-quality--standard" },
  premium: { label: "Premium", color: "model-quality--premium" },
  pro: { label: "Pro", color: "model-quality--pro" },
};

export const ModelSelector = React.forwardRef<HTMLDivElement, ModelSelectorProps>(
  (
    {
      className,
      models,
      selectedModel,
      onModelSelect,
      filterType = "all",
      showPricing = true,
      ...props
    },
    ref,
  ) => {
    const filteredModels = React.useMemo(() => {
      if (filterType === "all") return models;
      return models.filter((model) => model.type === filterType);
    }, [models, filterType]);

    return (
      <div ref={ref} className={cx("model-selector", className)} {...props}>
        {filteredModels.map((model) => (
          <div
            key={model.id}
            className={cx(
              "card-base",
              "model-card",
              selectedModel === model.id && "model-card--selected",
              !model.available && "model-card--disabled",
            )}
            onClick={() => model.available && onModelSelect(model.id)}
          >
            {/* Header */}
            <div className="model-card-header">
              <div className="model-card-info">
                <div className="model-card-title-row">
                  <h3 className="model-card-name">{model.name}</h3>
                  <Badge className={cx("model-card-badge", typeConfig[model.type].color)}>
                    {typeConfig[model.type].label}
                  </Badge>
                  <Badge className={cx("model-card-badge", qualityConfig[model.quality].color)}>
                    {qualityConfig[model.quality].label}
                  </Badge>
                  {model.beta && (
                    <Badge className="model-card-badge model-badge--beta">Bêta</Badge>
                  )}
                  {!model.available && (
                    <Badge className="model-card-badge model-badge--unavailable">Indisponible</Badge>
                  )}
                </div>
                <p className="model-card-description">{model.description}</p>
                <div className="model-card-meta">
                  Version {model.version} • {model.processingTime}
                </div>
              </div>

              {showPricing && (
                <div className="model-card-pricing">
                  <div className="model-card-price">
                    {model.pricing.credits} crédits
                  </div>
                  <div className="model-card-unit">
                    par {model.pricing.unit}
                  </div>
                </div>
              )}
            </div>

            {/* Capabilities */}
            {model.capabilities.length > 0 && (
              <div className="model-card-capabilities">
                <h4 className="model-card-capabilities-title">
                  Capacités
                </h4>
                <div className="model-card-capabilities-list">
                  {model.capabilities.slice(0, 3).map((capability) => (
                    <span key={capability} className="model-capability">
                      {capability}
                    </span>
                  ))}
                  {model.capabilities.length > 3 && (
                    <span className="model-capability">
                      +{model.capabilities.length - 3} autres
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Selection Indicator */}
            {selectedModel === model.id && (
              <div className="model-card-selected">
                <div className="model-card-checkmark">
                  <svg className="model-card-check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}

        {filteredModels.length === 0 && (
          <div className="model-selector-empty">
            <div className="model-selector-empty-text">
              Aucun modèle disponible pour ce type
            </div>
          </div>
        )}
      </div>
    );
  },
);
ModelSelector.displayName = "ModelSelector";
