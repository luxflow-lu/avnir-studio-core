import React from 'react';

export interface ColorSwatchProps {
  /** CSS color value (hex, rgb, var, etc.) */
  color: string;
  /** Size of the swatch */
  size?: 'sm' | 'md' | 'lg';
  /** Optional label */
  label?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * ColorSwatch - Display a color swatch for design system showcase
 * Used in MUZISYSTEM to display color tokens
 */
export const ColorSwatch = React.forwardRef<HTMLDivElement, ColorSwatchProps>(
  ({ color, size = 'md', label, className = '' }, ref) => {
    const sizeMap = {
      sm: '32px',
      md: '40px',
      lg: '48px',
    };

    return (
      <div 
        ref={ref} 
        className={className}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 'var(--gap-xs)' 
        }}
      >
        <div
          style={{ 
            width: sizeMap[size],
            height: sizeMap[size],
            backgroundColor: color,
            borderRadius: 'var(--radius-xs)',
            border: '1px solid var(--border)',
            flexShrink: 0
          }}
          aria-label={label || `Color swatch: ${color}`}
        />
        {label && (
          <span className="text-small" style={{ color: 'var(--muted)' }}>{label}</span>
        )}
      </div>
    );
  }
);

ColorSwatch.displayName = 'ColorSwatch';
