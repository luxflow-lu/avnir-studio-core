import * as React from "react";
import { cx } from "../../utils/cx";

export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  assignee?: string;
  priority?: "low" | "medium" | "high";
}

export interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
}

export interface KanbanProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: KanbanColumn[];
}

export const Kanban = React.forwardRef<HTMLDivElement, KanbanProps>(
  ({ className, columns, ...props }, ref) => (
    <div ref={ref} className={cx("kanban", className)} {...props}>
      {columns.map((column) => (
        <div key={column.id} className="kanban-column">
          <div className="kanban-column-header">
            <h3 className="kanban-column-title">{column.title}</h3>
            <span className="kanban-column-count">{column.cards.length}</span>
          </div>
          <div className="kanban-column-content">
            {column.cards.map((card) => (
              <div key={card.id} className="kanban-card">
                <div className="kanban-card-header">
                  <h4 className="kanban-card-title">{card.title}</h4>
                  {card.priority && (
                    <span className={cx("kanban-card-priority", `kanban-card-priority--${card.priority}`)}>
                      {card.priority}
                    </span>
                  )}
                </div>
                {card.description && (
                  <p className="kanban-card-description">{card.description}</p>
                )}
                {card.assignee && (
                  <div className="kanban-card-assignee">{card.assignee}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
);
Kanban.displayName = "Kanban";
