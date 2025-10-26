import * as React from "react";
import { cx } from "../../utils/cx";

export interface Activity {
  id: string;
  user: string;
  action: string;
  target?: string;
  timestamp: string;
  icon?: React.ReactNode;
}

export interface ActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
  activities: Activity[];
}

export const ActivityFeed = React.forwardRef<HTMLDivElement, ActivityFeedProps>(
  ({ className, activities, ...props }, ref) => (
    <div ref={ref} className={cx("activity-feed", className)} {...props}>
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          {activity.icon && (
            <div className="activity-icon">{activity.icon}</div>
          )}
          <div className="activity-content">
            <div className="activity-text">
              <span className="activity-user">{activity.user}</span>
              {" "}
              <span className="activity-action">{activity.action}</span>
              {activity.target && (
                <>
                  {" "}
                  <span className="activity-target">{activity.target}</span>
                </>
              )}
            </div>
            <div className="activity-timestamp">{activity.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  )
);
ActivityFeed.displayName = "ActivityFeed";
