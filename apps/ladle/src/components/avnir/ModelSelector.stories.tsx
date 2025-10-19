import React, { useState } from "react";
import { ModelSelector } from "./ModelSelector";

export default { title: "AVNIR/ModelSelector" };

const mockModels = [
  {
    id: "beatmaker-pro",
    name: "BeatMaker Pro",
    description: "Générateur de beats avancé avec intelligence artificielle. Capable de créer des rythmes complexes dans tous les styles.",
    type: "audio" as const,
    version: "2.1",
    capabilities: ["Trap", "Drill", "Boom Bap", "Afrobeat", "Lo-Fi"],
    pricing: { credits: 5, unit: "beat" },
    quality: "pro" as const,
    processingTime: "30-60s",
    available: true
  },
  {
    id: "vocal-synth",
    name: "Vocal Synthesizer",
    description: "Synthèse vocale réaliste avec contrôle émotionnel et styles multiples.",
    type: "vocal" as const,
    version: "1.8",
    capabilities: ["R&B", "Pop", "Rap", "Soul"],
    pricing: { credits: 8, unit: "ligne" },
    quality: "premium" as const,
    processingTime: "45-90s",
    available: true,
    beta: true
  },
  {
    id: "melody-gen",
    name: "Melody Generator",
    description: "Création de mélodies instrumentales avec harmonies automatiques.",
    type: "instrumental" as const,
    version: "1.5",
    capabilities: ["Piano", "Guitare", "Synthé", "Cordes"],
    pricing: { credits: 3, unit: "mélodie" },
    quality: "standard" as const,
    processingTime: "20-40s",
    available: true
  },
  {
    id: "master-ai",
    name: "Master AI",
    description: "Mastering automatique professionnel avec analyse spectrale avancée.",
    type: "mastering" as const,
    version: "3.0",
    capabilities: ["EQ", "Compression", "Limiting", "Stereo Enhancement"],
    pricing: { credits: 10, unit: "track" },
    quality: "pro" as const,
    processingTime: "60-120s",
    available: false
  },
  {
    id: "bass-synth",
    name: "Bass Synthesizer",
    description: "Générateur de lignes de basse puissantes et percutantes.",
    type: "instrumental" as const,
    version: "1.2",
    capabilities: ["808", "Sub Bass", "Synth Bass", "Slap Bass"],
    pricing: { credits: 4, unit: "ligne" },
    quality: "premium" as const,
    processingTime: "25-45s",
    available: true
  },
  {
    id: "harmony-ai",
    name: "Harmony AI",
    description: "Création d'harmonies vocales complexes et arrangements choeurs.",
    type: "vocal" as const,
    version: "2.0",
    capabilities: ["Choeurs", "Harmonies", "Backing Vocals", "Gospel"],
    pricing: { credits: 6, unit: "arrangement" },
    quality: "standard" as const,
    processingTime: "40-70s",
    available: true
  }
];

export const Default = () => {
  const [selectedModel, setSelectedModel] = useState("beatmaker-pro");

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Sélection de Modèle IA</h2>
          <p className="text-[var(--text-muted)]">
            Choisissez le modèle d'intelligence artificielle adapté à votre création
          </p>
        </div>
        
        <ModelSelector
          models={mockModels}
          selectedModel={selectedModel}
          onModelSelect={setSelectedModel}
        />
        
        {selectedModel && (
          <div className="mt-6 p-4 bg-[var(--surface)] rounded-[var(--radius-lg)]">
            <h4 className="text-sm font-medium text-white mb-2">Modèle sélectionné</h4>
            <p className="text-xs text-[var(--text-muted)]">
              {mockModels.find(m => m.id === selectedModel)?.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const FilteredByType = () => {
  const [selectedModel, setSelectedModel] = useState("");

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Modèles Vocaux</h2>
          <p className="text-[var(--text-muted)]">
            Modèles spécialisés dans la génération vocale
          </p>
        </div>
        
        <ModelSelector
          models={mockModels}
          selectedModel={selectedModel}
          onModelSelect={setSelectedModel}
          filterType="vocal"
        />
      </div>
    </div>
  );
};

export const WithoutPricing = () => {
  const [selectedModel, setSelectedModel] = useState("");

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <ModelSelector
          models={mockModels}
          selectedModel={selectedModel}
          onModelSelect={setSelectedModel}
          showPricing={false}
        />
      </div>
    </div>
  );
};
