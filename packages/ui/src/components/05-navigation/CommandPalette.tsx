import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

export interface Command {
  id: string;
  label: string;
  shortcut?: string;
  icon?: React.ReactNode;
  onExecute: () => void;
}

export interface CommandPaletteProps {
  commands: Command[];
  open: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  commands,
  open,
  onClose,
}) => {
  const [search, setSearch] = React.useState("");
  const [filteredCommands, setFilteredCommands] = React.useState(commands);

  React.useEffect(() => {
    if (search) {
      const filtered = commands.filter((cmd) =>
        cmd.label.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCommands(filtered);
    } else {
      setFilteredCommands(commands);
    }
  }, [search, commands]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleExecute = (command: Command) => {
    command.onExecute();
    onClose();
    setSearch("");
  };

  return (
    <div className="command-palette-overlay" onClick={onClose}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          className="command-palette-input"
          placeholder="Type a command or search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
        <div className="command-palette-list">
          {filteredCommands.length === 0 ? (
            <div className="command-palette-empty">No commands found</div>
          ) : (
            filteredCommands.map((command) => (
              <Button
                key={command.id}
                type="button"
                variant="ghost"
                className="command-palette-item"
                onClick={() => handleExecute(command)}
              >
                {command.icon && (
                  <span className="command-palette-icon">{command.icon}</span>
                )}
                <span className="command-palette-label">{command.label}</span>
                {command.shortcut && (
                  <span className="command-palette-shortcut">{command.shortcut}</span>
                )}
              </Button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
