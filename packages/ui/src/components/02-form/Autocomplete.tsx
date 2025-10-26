import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "./Button";

export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps {
  options: AutocompleteOption[];
  value: string;
  onChange: (value: string) => void;
  onSelect?: (option: AutocompleteOption) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ className, options, value, onChange, onSelect, disabled, placeholder }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [filteredOptions, setFilteredOptions] = React.useState<AutocompleteOption[]>([]);
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (value) {
        const filtered = options.filter((option) =>
          option.label.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
      } else {
        setFilteredOptions(options);
      }
    }, [value, options]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: AutocompleteOption) => {
      onChange(option.label);
      onSelect?.(option);
      setIsOpen(false);
    };

    return (
      <div ref={wrapperRef} className={cx("autocomplete", disabled && "autocomplete--disabled", className)}>
        <input
          ref={ref}
          type="text"
          className="autocomplete-input"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          disabled={disabled}
          placeholder={placeholder}
        />
        {isOpen && filteredOptions.length > 0 && (
          <div className="autocomplete-dropdown">
            {filteredOptions.map((option) => (
              <Button
                key={option.value}
                type="button"
                variant="ghost"
                className="autocomplete-option"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  }
);
Autocomplete.displayName = "Autocomplete";
