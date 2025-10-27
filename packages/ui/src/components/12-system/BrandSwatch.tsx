import React from 'react';

export interface BrandSwatchProps {
  /** Brand color (hex, rgb, var, etc.) */
  color: string;
  /** Brand name */
  name: string;
  /** Brand description */
  description?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * BrandSwatch - Display a brand color swatch for design system showcase
 * Used in MUZISYSTEM to display brand colors
 */
export const BrandSwatch = React.forwardRef<HTMLDivElement, BrandSwatchProps>(
  ({ color, name, description, className = '' }, ref) => {
    return (
      <div ref={ref} className={className}>
        <div
          style={{ 
            backgroundColor: color,
            width: '100%',
            height: '60px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 'var(--gap-md)'
          }}
          aria-label={`${name} brand color`}
        />
        <h4>{name}</h4>
        {description && (
          <p className="text-small">{description}</p>
        )}
      </div>
    );
  }
);

BrandSwatch.displayName = 'BrandSwatch';
