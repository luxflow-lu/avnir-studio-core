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
        <div className="relative group">
          <div
            className={cx(
              "relative aspect-square bg-white/5 rounded-[var(--radius-lg)] overflow-hidden",
              isZoomed && "fixed inset-4 z-50 aspect-auto",
            )}
          >
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.src}
                alt={currentMedia.alt}
                className={cx(
                  "w-full h-full object-cover cursor-zoom-in transition-transform",
                  isZoomed && "cursor-zoom-out object-contain",
                )}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            ) : (
              <video
                src={currentMedia.src}
                className="w-full h-full object-cover"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {media.length}
              </div>
            )}

            {/* Zoom Close Button */}
            {isZoomed && (
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center"
                aria-label="Close zoom"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="flex gap-2 overflow-x-auto pb-2">
            {media.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToIndex(index)}
                className={cx(
                  "flex-shrink-0 w-16 h-16 rounded-[var(--radius-sm)] overflow-hidden border-2 transition-all",
                  index === currentIndex
                    ? "border-[var(--brand)]"
                    : "border-white/20 hover:border-white/40",
                )}
              >
                {item.type === "image" ? (
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[var(--text-muted)]"
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
          <div className="fixed inset-0 bg-black/80 z-40" onClick={() => setIsZoomed(false)} />
        )}
      </div>
    );
  },
);
MediaGallery.displayName = "MediaGallery";
