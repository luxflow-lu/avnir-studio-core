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
      <div className="fixed inset-0 z-50 flex-start justify-center pt-[20vh]">
        <div className="fixed inset-0 bg-overlay backdrop-blur-sm" onClick={onClose} />
        <div
          ref={ref}
          className="relative bg-surface-lg max-w-lg mx-4 overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex-center-b-white/10 px-4">
            <svg
              className="icon text-muted mr-3"
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
              className="flex-1 bg-transparent-none outline-none py-4 text-foreground placeholder-[var(--text-muted)]"
              autoFocus
            />
            <kbd className="hidden sm:inline-flex-center gap-1-white/20 px-2 py-1 text-xs text-muted">
              ESC
            </kbd>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="px-4 py-8 text-muted">No results found</div>
            ) : (
              <div className="py-2">
                {filteredItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      item.onSelect();
                      onClose();
                    }}
                    className={cx(
                      "w-full items-center gap-3 px-4 py-3",
                      index === selectedIndex
                        ? "bg-brand/10 text-brand"
                        : "text-on-primary hover:bg-muted",
                    )}
                  >
                    {item.icon && <span className="flex-shrink-0 icon">{item.icon}</span>}
                    <div >
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className="text-sm text-muted truncate">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);
CommandK.displayName = "CommandK";
