import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Tokens/Colors & Typography',
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj;

const Swatch = ({ name, varName }: { name: string; varName: string }) => (
  <div style={{ border: '1px solid #2a2a2a', borderRadius: 12, padding: 12, background: 'var(--surface)' }}>
    <div style={{ height: 56, borderRadius: 8, background: `var(${varName})` }} />
    <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text)' }}>
      <strong>{name}</strong>
      <br />
      <code>{varName}</code>
    </div>
  </div>
);

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {/* Couleurs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0,1fr))', gap: 12 }}>
        {[
          ['bg', '--bg'],
          ['surface', '--surface'],
          ['titles', '--titles'],
          ['text', '--text'],
          ['muted', '--muted'],
          ['primary', '--primary'],
        ].map(([name, v]) => (
          <Swatch key={name as string} name={name as string} varName={v as string} />
        ))}
      </div>

      {/* Typographie */}
      <div>
        <div className="h1">Heading 1 — The quick brown fox</div>
        <div className="h2" style={{ marginTop: 8 }}>
          Heading 2 — The quick brown fox
        </div>
        <div className="h3" style={{ marginTop: 8 }}>
          Heading 3 — The quick brown fox
        </div>
        <p className="body" style={{ marginTop: 12 }}>
          Body — The quick brown fox jumps over the lazy dog.
        </p>
        <p className="small" style={{ marginTop: 8 }}>
          Small — The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </div>
  ),
};
