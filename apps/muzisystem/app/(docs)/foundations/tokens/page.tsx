"use client";

import { Layout, Content, Card } from "@avnir/ui";

export default function TokensPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Design Tokens"
            subtitle="The foundation of MUZISYSTEM's visual language. Design tokens are the atomic values that define colors, typography, spacing, and more."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>What are Design Tokens?</h2>
            <p>
              Design tokens are the visual design atoms of the design system — specifically, they are named entities 
              that store visual design attributes. We use them in place of hard-coded values to ensure consistency 
              and maintainability across all products.
            </p>
            <p>
              Tokens are stored as CSS custom properties (variables) in our design system, making them easy to 
              reference and update across the entire codebase.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Token Categories</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>🎨 Colors</h3>
              <p>Semantic color tokens for consistent theming across brands.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Primary & brand colors</li>
                <li>Background & surface colors</li>
                <li>Text & border colors</li>
                <li>State colors (hover, active, disabled)</li>
              </ul>
            </Card>

            <Card>
              <h3>📝 Typography</h3>
              <p>Type scale and font properties for consistent text hierarchy.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Font families (sans, mono)</li>
                <li>Font sizes (display, heading, body)</li>
                <li>Font weights (light to bold)</li>
                <li>Line heights & letter spacing</li>
              </ul>
            </Card>

            <Card>
              <h3>📏 Spacing</h3>
              <p>Consistent spacing scale for layouts and components.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Gap tokens (xs to xl)</li>
                <li>Padding tokens (section, container)</li>
                <li>Margin tokens</li>
                <li>Layout spacing</li>
              </ul>
            </Card>

            <Card>
              <h3>🔲 Border Radius</h3>
              <p>Rounded corners for consistent component shapes.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Radius scale (xs to xl)</li>
                <li>Component-specific radius</li>
                <li>Full radius for circles</li>
              </ul>
            </Card>

            <Card>
              <h3>🌑 Shadows</h3>
              <p>Elevation system for depth and hierarchy.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Shadow scale (sm to xl)</li>
                <li>Focus rings</li>
                <li>Elevation levels</li>
              </ul>
            </Card>

            <Card>
              <h3>⚡ Transitions</h3>
              <p>Animation timing for smooth interactions.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Duration tokens</li>
                <li>Easing functions</li>
                <li>Transition presets</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Using Tokens</h2>
            <p>
              Tokens are accessed via CSS custom properties. Always use tokens instead of hard-coded values 
              to ensure consistency and enable easy theming.
            </p>

            <h3>In CSS</h3>
            <pre><code>{`.my-component {
  color: var(--text);
  background: var(--surface);
  padding: var(--gap-md);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
}`}</code></pre>

            <h3>In React Components</h3>
            <pre><code>{`<div style={{
  color: 'var(--text)',
  background: 'var(--surface)',
  padding: 'var(--gap-md)',
  borderRadius: 'var(--radius-sm)'
}}>
  Content
</div>`}</code></pre>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Token Naming Convention</h2>
            <p>Our tokens follow a consistent naming pattern:</p>
            <ul>
              <li><strong>Category prefix</strong> - Identifies the token type (text-, gap-, radius-, etc.)</li>
              <li><strong>Semantic name</strong> - Describes the purpose or scale (primary, md, body, etc.)</li>
              <li><strong>Kebab-case</strong> - All lowercase with hyphens</li>
            </ul>

            <h3>Examples</h3>
            <ul>
              <li><code>--text-body</code> - Body text size</li>
              <li><code>--gap-md</code> - Medium gap spacing</li>
              <li><code>--radius-sm</code> - Small border radius</li>
              <li><code>--shadow-lg</code> - Large shadow</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Benefits of Tokens</h2>
            <ul>
              <li><strong>Consistency</strong> - Same values used everywhere</li>
              <li><strong>Maintainability</strong> - Update once, change everywhere</li>
              <li><strong>Theming</strong> - Easy to switch between brands and themes</li>
              <li><strong>Scalability</strong> - Add new tokens without breaking existing code</li>
              <li><strong>Documentation</strong> - Self-documenting through semantic names</li>
            </ul>
          </Content.Prose>
        </div>
      </div>
    </>
  );
}
