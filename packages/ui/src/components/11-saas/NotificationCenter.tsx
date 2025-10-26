import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type?: "info" | "success" | "warning" | "error";
}

export interface NotificationCenterProps extends React.HTMLAttributes<HTMLDivElement> {
  notifications: Notification[];
  onMarkAsRead?: (id: string) => void;
  onMarkAllAsRead?: () => void;
  onClear?: (id: string) => void;
}

export const NotificationCenter = React.forwardRef<HTMLDivElement, NotificationCenterProps>(
  ({ className, notifications, onMarkAsRead, onMarkAllAsRead, onClear, ...props }, ref) => {
    const unreadCount = notifications.filter((n) => !n.read).length;

    return (
      <div ref={ref} className={cx("notification-center", className)} {...props}>
        <div className="notification-center-header">
          <h3 className="notification-center-title">
            Notifications {unreadCount > 0 && `(${unreadCount})`}
          </h3>
          {unreadCount > 0 && onMarkAllAsRead && (
            <Button variant="ghost" size="sm" onClick={onMarkAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        <div className="notification-center-list">
          {notifications.length === 0 ? (
            <div className="notification-center-empty">No notifications</div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={cx(
                  "notification-item",
                  !notification.read && "notification-item--unread",
                  notification.type && `notification-item--${notification.type}`
                )}
                onClick={() => !notification.read && onMarkAsRead?.(notification.id)}
              >
                <div className="notification-content">
                  <div className="notification-title">{notification.title}</div>
                  <div className="notification-message">{notification.message}</div>
                  <div className="notification-timestamp">{notification.timestamp}</div>
                </div>
                {onClear && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="notification-close"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClear(notification.id);
                    }}
                  >
                    ×
                  </Button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
);
NotificationCenter.displayName = "NotificationCenter";
