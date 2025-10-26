import { Layout, Content } from "@avnir/ui";

export default function OverviewIntroPage() {
  return (
    <div className="section">
      <div className="container">
        <Layout.PageHeader
          title="Introduction to MUZISYSTEM"
          subtitle="Production-ready components and design tokens for building consistent, accessible, and scalable user interfaces across the AVNIR ecosystem."
        />

        <Content.Prose>
          <h2>Mission</h2>
          <p>
            MUZISYSTEM is the official design system for AVNIR Studio's multi-brand ecosystem. 
            It provides a comprehensive set of design tokens, components, patterns, and guidelines 
            to ensure consistency across all products while maintaining brand identity.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li><strong>Multi-brand support</strong> - 8+ brands with seamless theme switching</li>
            <li><strong>Accessibility first</strong> - WCAG 2.2 AA compliant by default</li>
            <li><strong>TypeScript native</strong> - Full type safety and IntelliSense</li>
            <li><strong>Performance optimized</strong> - Tree-shakeable, minimal bundle size</li>
            <li><strong>Music-centric</strong> - Specialized components for audio workflows</li>
          </ul>

          <h2>Audiences</h2>
          <p>MUZISYSTEM serves multiple audiences:</p>
          <ul>
            <li><strong>Designers</strong> - Figma libraries, design tokens, visual guidelines</li>
            <li><strong>Developers</strong> - React components, Tailwind preset, code examples</li>
            <li><strong>Product Managers</strong> - Patterns, templates, best practices</li>
            <li><strong>Content Writers</strong> - Voice & tone, microcopy guidelines</li>
          </ul>

          <div className="section--sm">
            <a href="/overview/architecture" className="btn btn-primary">
              Explore Architecture
            </a>
            <a href="/code/getting-started" className="btn btn-outline">
              Get Started
            </a>
          </div>
        </Content.Prose>
      </div>
    </div>
  );
}
