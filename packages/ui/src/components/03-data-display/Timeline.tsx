import * as React from "react";

import { cx } from "../../utils/cx";

export interface TimelineItemProps {
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  date,
  icon,
}) => (
  <div className="timeline-item">
    <div className="timeline-marker">
      {icon || <div className="timeline-dot" />}
    </div>
    <div className="timeline-content">
      {date && <div className="timeline-date">{date}</div>}
      <div className="timeline-title">{title}</div>
      {description && <div className="timeline-description">{description}</div>}
    </div>
  </div>
);

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cx("timeline", className)} {...props}>
      {children}
    </div>
  )
);
Timeline.displayName = "Timeline";
