import React, { useState } from "react";
import { PromptEditor } from "./PromptEditor";

export default { title: "AVNIR/PromptEditor" };

const mockPresets = [
  {
    id: "1",
    name: "Beat Trap Moderne",
    prompt:
      "Crée un beat trap moderne avec des 808 puissants, des hi-hats rapides et une mélodie sombre. Style Atlanta, tempo 140 BPM.",
    category: "Beats",
    tags: ["trap", "808", "moderne"],
  },
  {
    id: "2",
    name: "Voix R&B Smooth",
    prompt:
      "Génère une ligne vocale R&B smooth avec des harmonies riches, style années 90, ambiance romantique et sensuelle.",
    category: "Vocals",
    tags: ["r&b", "smooth", "harmonies"],
  },
  {
    id: "3",
    name: "Ambiance Lo-Fi",
    prompt:
      "Crée une ambiance lo-fi chill avec des samples vinyle, des drums doux et une mélodie nostalgique au piano.",
    category: "Ambiance",
    tags: ["lo-fi", "chill", "vinyle"],
  },
  {
    id: "4",
    name: "Hook Accrocheur",
    prompt:
      "Compose un hook accrocheur pour un titre commercial, mélodie simple et répétitive, facile à retenir.",
    category: "Composition",
    tags: ["hook", "commercial", "mélodie"],
  },
];

const mockHistory = [
  {
    id: "1",
    prompt: "Crée un beat drill UK avec des patterns de batterie agressifs et une basse lourde",
    timestamp: new Date(Date.now() - 3600000),
    result: "generated",
  },
  {
    id: "2",
    prompt: "Génère une mélodie de piano émotionnelle pour une ballade",
    timestamp: new Date(Date.now() - 7200000),
  },
  {
    id: "3",
    prompt: "Beat afrobeat moderne avec des percussions traditionnelles",
    timestamp: new Date(Date.now() - 86400000),
    result: "generated",
  },
];

export const Default = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (promptText: string) => {
    setLoading(true);
    // Simulate generation
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    console.log("Generated:", promptText);
  };

  const handleSavePreset = (name: string, promptText: string) => {
    console.log("Save preset:", name, promptText);
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Éditeur de Prompts</h2>
          <p className="text-[var(--text-muted)]">
            Décrivez votre création musicale pour générer du contenu IA
          </p>
        </div>

        <PromptEditor
          value={prompt}
          onChange={setPrompt}
          presets={mockPresets}
          history={mockHistory}
          onGenerate={handleGenerate}
          onSavePreset={handleSavePreset}
          loading={loading}
        />
      </div>
    </div>
  );
};

export const WithContent = () => {
  const [prompt, setPrompt] = useState(
    "Crée un beat trap lourd avec des 808 qui claquent, des hi-hats rapides en double-time et une mélodie sombre au synthé. Le tout dans un style Atlanta moderne, tempo 140 BPM, avec des breaks pour laisser respirer le flow.",
  );

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <PromptEditor
          value={prompt}
          onChange={setPrompt}
          presets={mockPresets}
          history={mockHistory}
          onGenerate={(p) => console.log("Generate:", p)}
          onSavePreset={(name, p) => console.log("Save:", name, p)}
        />
      </div>
    </div>
  );
};

export const Minimal = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-2xl mx-auto">
        <PromptEditor
          value={prompt}
          onChange={setPrompt}
          placeholder="Décrivez votre idée musicale..."
        />
      </div>
    </div>
  );
};
