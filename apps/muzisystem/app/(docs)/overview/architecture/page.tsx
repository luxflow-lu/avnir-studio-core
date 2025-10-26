"use client";

import { Layout, Content, Card } from "@avnir/ui";

export default function ArchitecturePage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Architecture"
            subtitle="Understanding MUZISYSTEM's structure, layers, and design decisions"
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>System Architecture</h2>
            <p>
              MUZISYSTEM follows a layered architecture that separates concerns and enables 
              scalability across multiple brands and products. The system is built on three 
              core layers: Design Tokens, Components, and Patterns.
            </p>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Core Layers</h2>
          </Content.Prose>

          <div className="grid-3">
            <Card>
              <h3>1. Design Layer</h3>
              <p><strong>@avnir/design</strong></p>
              <p>Design tokens, CSS variables, and base styles. The foundation of the visual language.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Colors & themes</li>
                <li>Typography scale</li>
                <li>Spacing system</li>
                <li>Border radius</li>
                <li>Shadows & effects</li>
              </ul>
            </Card>

            <Card>
              <h3>2. Component Layer</h3>
              <p><strong>@avnir/ui</strong></p>
              <p>React components built with TypeScript. Reusable, accessible, and performant.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Primitives (Button, Input)</li>
                <li>Layout components</li>
                <li>Data display</li>
                <li>Navigation</li>
                <li>Feedback & overlays</li>
              </ul>
            </Card>

            <Card>
              <h3>3. Pattern Layer</h3>
              <p><strong>Apps & Templates</strong></p>
              <p>Common UI patterns and page templates for rapid development.</p>
              <ul style={{ fontSize: 'var(--text-small)', marginTop: 'var(--gap-md)' }}>
                <li>Authentication flows</li>
                <li>Upload workflows</li>
                <li>Data tables</li>
                <li>Form patterns</li>
                <li>Page templates</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Package Structure</h2>
            <p>MUZISYSTEM is organized as a monorepo with clear separation of concerns:</p>

            <h3>Core Packages</h3>
            <ul>
              <li><strong>@avnir/design</strong> - Design tokens and CSS foundation</li>
              <li><strong>@avnir/ui</strong> - React component library</li>
              <li><strong>@avnir/brandkit</strong> - Brand assets and logos</li>
              <li><strong>@avnir/icons</strong> - Icon library</li>
            </ul>

            <h3>Applications</h3>
            <ul>
              <li><strong>apps/muzisystem</strong> - This documentation site</li>
              <li><strong>apps/ladle</strong> - Component playground and stories</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Design Principles</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>🎯 Separation of Concerns</h3>
              <p>Clear boundaries between design tokens, components, and applications. Each layer has a single responsibility.</p>
            </Card>

            <Card>
              <h3>🔄 Unidirectional Flow</h3>
              <p>Apps depend on UI, UI depends on Design. No circular dependencies. Clean dependency graph.</p>
            </Card>

            <Card>
              <h3>📦 Tree-Shakeable</h3>
              <p>Import only what you need. Unused components are automatically removed from your bundle.</p>
            </Card>

            <Card>
              <h3>🎨 Theme-Agnostic</h3>
              <p>Components work with any brand theme. Switch themes without changing component code.</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Multi-Brand Strategy</h2>
            <p>
              MUZISYSTEM supports multiple brands through a token-based theming system. 
              Each brand defines its primary color, and the system automatically generates 
              all necessary variants and states.
            </p>

            <h3>How It Works</h3>
            <ol>
              <li><strong>Brand Selection</strong> - Set <code>data-brand</code> attribute on HTML element</li>
              <li><strong>Token Override</strong> - Brand-specific tokens override base tokens</li>
              <li><strong>Component Rendering</strong> - Components use tokens, automatically styled</li>
              <li><strong>Theme Switching</strong> - Change <code>data-theme</code> for light/dark mode</li>
            </ol>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Performance Considerations</h2>
            <ul>
              <li><strong>CSS Variables</strong> - Runtime theme switching without JavaScript</li>
              <li><strong>Code Splitting</strong> - Load only what's needed per page</li>
              <li><strong>Minimal Bundle</strong> - Optimized component size and dependencies</li>
              <li><strong>Server Components</strong> - Next.js RSC support for optimal performance</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Accessibility Architecture</h2>
            <p>
              Accessibility is built into the architecture, not added as an afterthought:
            </p>
            <ul>
              <li><strong>Semantic HTML</strong> - Proper heading hierarchy and landmarks</li>
              <li><strong>ARIA Attributes</strong> - Automatically added where needed</li>
              <li><strong>Keyboard Navigation</strong> - Focus management and keyboard shortcuts</li>
              <li><strong>Screen Reader</strong> - Tested with NVDA, JAWS, and VoiceOver</li>
              <li><strong>Color Contrast</strong> - WCAG 2.2 AA compliant by default</li>
            </ul>
          </Content.Prose>
        </div>
      </div>
    </>
  );
}
