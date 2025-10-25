import * as React from "react";

import { cx } from "../../utils/cx";

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
  thumbnail?: string;
}

export interface MediaGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  media: MediaItem[];
  selectedIndex?: number;
  onMediaChange?: (index: number) => void;
  showThumbnails?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

export const MediaGallery = React.forwardRef<HTMLDivElement, MediaGalleryProps>(
  (
    {
      className,
      media,
      selectedIndex = 0,
      onMediaChange,
      showThumbnails = true,
      autoPlay = false,
      loop = true,
      ...props
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(selectedIndex);
    const [isZoomed, setIsZoomed] = React.useState(false);

    const currentMedia = media[currentIndex];

    const goToNext = () => {
      const nextIndex =
        currentIndex === media.length - 1 ? (loop ? 0 : currentIndex) : currentIndex + 1;
      setCurrentIndex(nextIndex);
      onMediaChange?.(nextIndex);
    };

    const goToPrevious = () => {
      const prevIndex = currentIndex === 0 ? (loop ? media.length - 1 : 0) : currentIndex - 1;
      setCurrentIndex(prevIndex);
      onMediaChange?.(prevIndex);
    };

    const goToIndex = (index: number) => {
      setCurrentIndex(index);
      onMediaChange?.(index);
    };

    React.useEffect(() => {
      setCurrentIndex(selectedIndex);
    }, [selectedIndex]);

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
        if (e.key === "Escape") setIsZoomed(false);
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, media.length, loop]);

    if (!currentMedia) return null;

    return (
      <div ref={ref} className={cx("space-y-4", className)} {...props}>
        {/* Main Media Display */}
        <div >
          <div
            className={cx(
              "relative aspect-square bg-muted-lg overflow-hidden",
              isZoomed && "fixed inset-4 z-50 aspect-auto",
            )}
          >
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.src}
                alt={currentMedia.alt}
                className={cx(
                  "w-full object-cover cursor-zoom-in transition-transform",
                  isZoomed && "cursor-zoom-out object-contain",
                )}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            ) : (
              <video
                src={currentMedia.src}
                className="w-full object-cover"
                controls
                autoPlay={autoPlay}
                loop={loop}
              />
            )}

            {/* Navigation Arrows */}
            {media.length > 1 && !isZoomed && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 icon-lg bg-overlay hover:bg-black/70 text-foreground rounded-full flex-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 icon-lg bg-overlay hover:bg-black/70 text-foreground rounded-full flex-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Media Counter */}
            {media.length > 1 && !isZoomed && (
              <div className="absolute bottom-4 right-4 bg-overlay text-foreground px-3 py-1-full text-sm">
                {currentIndex + 1} / {media.length}
              </div>
            )}

            {/* Zoom Close Button */}
            {isZoomed && (
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 icon-lg bg-overlay hover:bg-black/70 text-foreground rounded-full flex-center"
                aria-label="Close zoom"
              >
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Thumbnails */}
        {showThumbnails && media.length > 1 && !isZoomed && (
          <div className="flex-row gap-2 overflow-x-auto pb-2">
            {media.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToIndex(index)}
                className={cx(
                  "flex-shrink-0 w-16 h-16-sm overflow-hidden-2",
                  index === currentIndex
                    ? "border-brand"
                    : "border-muted hover:border-white/40",
                )}
              >
                {item.type === "image" ? (
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.alt}
                    className="w-full object-cover"
                  />
                ) : (
                  <div className="w-full bg-muted flex-center">
                    <svg
                      className="icon text-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Zoom Backdrop */}
        {isZoomed && (
          <div className="fixed inset-0 bg-overlay-dark z-40" onClick={() => setIsZoomed(false)} />
        )}
      </div>
    );
  },
);
MediaGallery.displayName = "MediaGallery";
