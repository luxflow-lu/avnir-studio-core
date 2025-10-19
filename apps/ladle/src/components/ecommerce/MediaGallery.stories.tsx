import React, { useState } from "react";
import { MediaGallery } from "./MediaGallery";

export default { title: "E-commerce/MediaGallery" };

const mockMedia = [
  {
    id: "1",
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop",
    alt: "Red sneakers"
  },
  {
    id: "2",
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop",
    alt: "Blue sneakers"
  },
  {
    id: "3",
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop",
    alt: "White sneakers"
  },
  {
    id: "4",
    type: "image" as const,
    src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop",
    alt: "Black sneakers"
  }
];

export const Default = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="max-w-lg mx-auto">
        <MediaGallery
          media={mockMedia}
          selectedIndex={selectedIndex}
          onMediaChange={setSelectedIndex}
        />
        
        <div className="mt-6 p-4 bg-[var(--surface)] rounded-[var(--radius-lg)]">
          <h4 className="text-sm font-medium text-white mb-2">Controls</h4>
          <p className="text-xs text-[var(--text-muted)] mb-2">
            • Click image to zoom • Use arrow keys to navigate • Click thumbnails to jump
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Current: {selectedIndex + 1} / {mockMedia.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export const WithoutThumbnails = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-lg mx-auto">
      <MediaGallery
        media={mockMedia}
        showThumbnails={false}
      />
    </div>
  </div>
);

export const SingleImage = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="max-w-lg mx-auto">
      <MediaGallery
        media={[mockMedia[0]]}
      />
    </div>
  </div>
);
