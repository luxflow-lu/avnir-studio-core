import * as React from "react";

import { cx } from "../../utils/cx";

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  onSelect: () => void;
}

export interface CommandKProps {
  items: CommandItem[];
  placeholder?: string;
  open: boolean;
  onClose: () => void;
}

export const CommandK = React.forwardRef<HTMLDivElement, CommandKProps>(
  ({ items, placeholder = "Type a command or search...", open, onClose }, ref) => {
    const [query, setQuery] = React.useState("");
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const filteredItems = React.useMemo(() => {
      if (!query) return items;
      return items.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.description?.toLowerCase().includes(query.toLowerCase()),
      );
    }, [items, query]);

    React.useEffect(() => {
      setSelectedIndex(0);
    }, [filteredItems]);

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!open) {
          if ((e.metaKey || e.ctrlKey) && e.key === "k") {
            e.preventDefault();
            // This would be handled by parent component
          }
          return;
        }

        switch (e.key) {
          case "Escape":
            onClose();
            break;
          case "ArrowDown":
            e.preventDefault();
            setSelectedIndex((i) => Math.min(i + 1, filteredItems.length - 1));
            break;
          case "ArrowUp":
            e.preventDefault();
            setSelectedIndex((i) => Math.max(i - 1, 0));
            break;
          case "Enter":
            e.preventDefault();
            if (filteredItems[selectedIndex]) {
              filteredItems[selectedIndex].onSelect();
              onClose();
            }
            break;
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose, filteredItems, selectedIndex]);

    React.useEffect(() => {
      if (open) {
        setQuery("");
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    if (!open) return null;

    return (
      <>
        <div className="command-k-overlay" onClick={onClose} />
        <div ref={ref} className="command-k" role="dialog" aria-modal="true">
          <div className="command-k-input-wrapper">
            <svg
              className="command-k-item-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="command-k-input"
              autoFocus
            />
            <kbd className="command-k-item-shortcut">ESC</kbd>
          </div>

          <div className="command-k-list">
            {filteredItems.length === 0 ? (
              <div className="command-k-item">No results found</div>
            ) : (
              <>
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      item.onSelect();
                      onClose();
                    }}
                    className={cx(
                      "command-k-item",
                      index === selectedIndex && "command-k-item--selected"
                    )}
                  >
                    {item.icon && <span className="command-k-item-icon">{item.icon}</span>}
                    <div className="command-k-item-content">
                      <div className="command-k-item-title">{item.label}</div>
                      {item.description && (
                        <div className="command-k-item-subtitle">{item.description}</div>
                      )}
                    </div>
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </>
    );
  },
);
CommandK.displayName = "CommandK";
