import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, autoPlay = false, interval = 3000, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const items = React.Children.toArray(children);
    const totalItems = items.length;

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const goToPrev = () => {
      setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    React.useEffect(() => {
      if (autoPlay) {
        const timer = setInterval(goToNext, interval);
        return () => clearInterval(timer);
      }
    }, [autoPlay, interval, currentIndex]);

    return (
      <div ref={ref} className={cx("carousel", className)} {...props}>
        <div className="carousel-viewport">
          <div
            className="carousel-container"
            style={{ "--carousel-index": currentIndex } as React.CSSProperties}
          >
            {items.map((item, index) => (
              <div key={index} className="carousel-item">
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <Button
          variant="ghost"
          className="carousel-button carousel-button--prev"
          onClick={goToPrev}
          aria-label="Previous slide"
        >
          ‹
        </Button>
        
        <Button
          variant="ghost"
          className="carousel-button carousel-button--next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          ›
        </Button>

        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={cx(
                "carousel-indicator",
                index === currentIndex && "carousel-indicator--active"
              )}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
);
Carousel.displayName = "Carousel";
