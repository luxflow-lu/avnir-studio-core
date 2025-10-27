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
      <div ref={ref} className={cx("media-gallery", className)} {...props}>
        {/* Main Media Display */}
        <div>
          <div
            className={cx(
              "media-gallery-main",
              isZoomed && "media-gallery-fullscreen"
            )}
          >
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.src}
                alt={currentMedia.alt}
                className={cx(
                  "media-gallery-main-image",
                  isZoomed && "media-gallery-fullscreen-image"
                )}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            ) : (
              <video
                src={currentMedia.src}
                className="media-gallery-main-image"
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
                  className="media-gallery-nav-btn"
                  aria-label="Previous image"
                  style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
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
                  className="media-gallery-nav-btn"
                  aria-label="Next image"
                  style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}
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
              <div className="media-gallery-nav" style={{ bottom: '1rem', right: '1rem', left: 'auto', transform: 'none' }}>
                {currentIndex + 1} / {media.length}
              </div>
            )}

            {/* Zoom Close Button */}
            {isZoomed && (
              <button
                onClick={() => setIsZoomed(false)}
                className="media-gallery-fullscreen-close"
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
          <div className="media-gallery-thumbnails">
            {media.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToIndex(index)}
                className={cx(
                  "media-gallery-thumbnail",
                  index === currentIndex && "media-gallery-thumbnail--active"
                )}
              >
                {item.type === "image" ? (
                  <img
                    src={item.thumbnail || item.src}
                    alt={item.alt}
                    className="media-gallery-thumbnail-image"
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
          <div className="media-gallery-fullscreen" onClick={() => setIsZoomed(false)} />
        )}
      </div>
    );
  },
);
MediaGallery.displayName = "MediaGallery";
