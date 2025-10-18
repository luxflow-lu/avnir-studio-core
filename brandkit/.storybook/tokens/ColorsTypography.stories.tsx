import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Colors & Typography',
  parameters: { options: { showPanel: false } }
};
export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => (
    <div>
      <h1>Tokens — Couleurs & Typo</h1>

      <h2 style={{ marginTop: 12 }}>Couleurs de base</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0,1fr))', gap: '12px', marginTop: '12px' }}>
        {[
          ['bg', 'var(--bg)'],
          ['surface', 'var(--surface)'],
          ['titles', 'var(--titles)'],
          ['text', 'var(--text)'],
          ['muted', 'var(--muted)'],
          ['primary', 'var(--primary)']
        ].map(([name, val]) => (
          <div key={name} style={{ border: '1px solid #2a2a2a', borderRadius: 12, padding: 12, background: 'var(--surface)' }}>
            <div style={{ height: 56, borderRadius: 8, background: String(val) }} />
            <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text)' }}>
              <strong>{name}</strong>
              <br />
              <code>{String(val)}</code>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: 16 }}>Typographie</h2>
      <div style={{ marginTop: 16 }}>
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
  )
};
