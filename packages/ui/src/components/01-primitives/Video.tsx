import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cx } from "../../utils/cx";

const videoVariants = cva("video", {
  variants: {
    variant: {
      default: "",
      rounded: "video--rounded",
      square: "video--square",
      video: "video--video",
      widescreen: "video--widescreen",
      ultrawide: "video--ultrawide",
      vertical: "video--vertical",
    },
    fit: {
      cover: "video--cover",
      contain: "video--contain",
      fill: "video--fill",
    },
  },
  defaultVariants: {
    variant: "video",
    fit: "contain",
  },
});

export interface VideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement>,
    VariantProps<typeof videoVariants> {}

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  ({ className, variant, fit, children, ...props }, ref) => {
    return (
      <video
        ref={ref}
        className={cx(videoVariants({ variant, fit }), className)}
        {...props}
      >
        {children}
      </video>
    );
  },
);
Video.displayName = "Video";
