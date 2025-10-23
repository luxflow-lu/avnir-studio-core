import React, { useState } from "react";
import { AssetTile } from "./AssetTile";

export default { title: "AVNIR/AssetTile" };

const mockAssets = [
  {
    id: "1",
    name: "Beat Trap Lourd.wav",
    type: "audio" as const,
    status: "ready" as const,
    duration: "3:24",
    size: "12.5 MB",
    createdAt: new Date("2024-01-15"),
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
  },
  {
    id: "2",
    name: "Clip Officiel.mp4",
    type: "video" as const,
    status: "processing" as const,
    duration: "4:12",
    size: "245 MB",
    createdAt: new Date("2024-01-14"),
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=200&fit=crop",
  },
  {
    id: "3",
    name: "Cover Album.jpg",
    type: "image" as const,
    status: "ready" as const,
    size: "2.1 MB",
    createdAt: new Date("2024-01-13"),
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
  },
  {
    id: "4",
    name: "Contrat Label.pdf",
    type: "document" as const,
    status: "ready" as const,
    size: "856 KB",
    createdAt: new Date("2024-01-12"),
  },
  {
    id: "5",
    name: "Preset Vocal Warm",
    type: "preset" as const,
    status: "draft" as const,
    size: "45 KB",
    createdAt: new Date("2024-01-11"),
  },
  {
    id: "6",
    name: "Mix Final.wav",
    type: "audio" as const,
    status: "error" as const,
    duration: "3:45",
    size: "18.2 MB",
    createdAt: new Date("2024-01-10"),
  },
];

export const Grid = () => {
  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  const handleSelect = (assetId: string) => {
    setSelectedAssets((prev) =>
      prev.includes(assetId) ? prev.filter((id) => id !== assetId) : [...prev, assetId],
    );
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAssets.map((asset) => (
          <AssetTile
            key={asset.id}
            {...asset}
            selected={selectedAssets.includes(asset.id)}
            onSelect={() => handleSelect(asset.id)}
            onPlay={() => console.log("Play", asset.name)}
            onDownload={() => console.log("Download", asset.name)}
            onDelete={() => console.log("Delete", asset.name)}
          />
        ))}
      </div>

      {selectedAssets.length > 0 && (
        <div className="mt-6 p-4 bg-[var(--surface)] rounded-[var(--radius-lg)]">
          <h4 className="text-sm font-medium text-white mb-2">Assets sélectionnés</h4>
          <p className="text-xs text-[var(--text-muted)]">
            {selectedAssets.length} asset{selectedAssets.length > 1 ? "s" : ""} sélectionné
            {selectedAssets.length > 1 ? "s" : ""}
          </p>
        </div>
      )}
    </div>
  );
};

export const Types = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockAssets.slice(0, 5).map((asset) => (
        <AssetTile
          key={asset.id}
          {...asset}
          onPlay={() => console.log("Play", asset.name)}
          onDownload={() => console.log("Download", asset.name)}
          onDelete={() => console.log("Delete", asset.name)}
        />
      ))}
    </div>
  </div>
);

export const States = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AssetTile
        id="ready"
        name="Asset Ready"
        type="audio"
        status="ready"
        duration="2:30"
        size="8.5 MB"
        createdAt={new Date()}
        onPlay={() => console.log("Play")}
      />
      <AssetTile
        id="processing"
        name="Asset Processing"
        type="video"
        status="processing"
        duration="4:15"
        size="120 MB"
        createdAt={new Date()}
      />
      <AssetTile
        id="error"
        name="Asset Error"
        type="audio"
        status="error"
        duration="3:00"
        size="10 MB"
        createdAt={new Date()}
      />
      <AssetTile
        id="draft"
        name="Asset Draft"
        type="preset"
        status="draft"
        size="25 KB"
        createdAt={new Date()}
      />
    </div>
  </div>
);
