"use client";

import { Layout, Content, Button, Card } from "@avnir/ui";

export default function OverviewIntroPage() {
  return (
    <>
      <div className="section">
        <div className="container">
          <Layout.PageHeader
            title="Introduction to MUZISYSTEM"
            subtitle="Production-ready components and design tokens for building consistent, accessible, and scalable user interfaces across the AVNIR ecosystem."
          />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>What is MUZISYSTEM?</h2>
            <p>
              MUZISYSTEM is the official design system for AVNIR Studio's multi-brand ecosystem. 
              It provides a comprehensive set of design tokens, components, patterns, and guidelines 
              to ensure consistency across all products while maintaining brand identity.
            </p>

            <p>
              Built with React, TypeScript, and modern web standards, MUZISYSTEM enables teams to 
              build high-quality user interfaces faster and with confidence.
            </p>

            <h2>Core Principles</h2>
            <ul>
              <li><strong>Consistency</strong> - Unified visual language across all touchpoints</li>
              <li><strong>Accessibility</strong> - WCAG 2.2 AA compliant by default</li>
              <li><strong>Performance</strong> - Optimized for speed and efficiency</li>
              <li><strong>Flexibility</strong> - Adaptable to multiple brands and contexts</li>
              <li><strong>Developer Experience</strong> - TypeScript-first with excellent DX</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Key Features</h2>
          </Content.Prose>

          <div className="grid-3">
            <Card>
              <h3>🎨 Multi-Brand Support</h3>
              <p>8+ brands with seamless theme switching. Each brand maintains its unique identity while sharing core patterns.</p>
            </Card>
            <Card>
              <h3>♿ Accessibility First</h3>
              <p>WCAG 2.2 AA compliant by default. Keyboard navigation, screen reader support, and proper ARIA attributes.</p>
            </Card>
            <Card>
              <h3>⚡ Performance</h3>
              <p>Tree-shakeable components, minimal bundle size, optimized CSS. Built for production.</p>
            </Card>
            <Card>
              <h3>🎵 Music-Centric</h3>
              <p>Specialized components for audio workflows: waveforms, players, metadata displays.</p>
            </Card>
            <Card>
              <h3>📦 TypeScript Native</h3>
              <p>Full type safety, IntelliSense support, and comprehensive prop definitions.</p>
            </Card>
            <Card>
              <h3>🎯 Production Ready</h3>
              <p>Battle-tested components used across multiple AVNIR products in production.</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Who is MUZISYSTEM for?</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>👨‍🎨 Designers</h3>
              <p>Access Figma libraries, design tokens, visual guidelines, and component specifications.</p>
              <Button variant="outline" onClick={() => window.location.href = '/tools/figma'}>Figma Resources</Button>
            </Card>
            <Card>
              <h3>👨‍💻 Developers</h3>
              <p>React components, TypeScript definitions, code examples, and integration guides.</p>
              <Button variant="outline" onClick={() => window.location.href = '/code/getting-started'}>Developer Docs</Button>
            </Card>
            <Card>
              <h3>📋 Product Managers</h3>
              <p>Patterns, templates, best practices, and guidelines for consistent product experiences.</p>
              <Button variant="outline" onClick={() => window.location.href = '/patterns'}>View Patterns</Button>
            </Card>
            <Card>
              <h3>✍️ Content Writers</h3>
              <p>Voice & tone guidelines, microcopy examples, and content patterns.</p>
              <Button variant="outline" onClick={() => window.location.href = '/content/voice-tone'}>Content Guide</Button>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>What's Included</h2>
            <ul>
              <li><strong>150+ Components</strong> - From basic buttons to complex data grids</li>
              <li><strong>Design Tokens</strong> - Colors, typography, spacing, and more</li>
              <li><strong>Patterns</strong> - Common UI patterns and workflows</li>
              <li><strong>Templates</strong> - Pre-built page layouts and sections</li>
              <li><strong>Documentation</strong> - Comprehensive guides and examples</li>
              <li><strong>Figma Library</strong> - Design files with all components</li>
            </ul>
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Next Steps</h2>
            <p>Ready to get started? Choose your path:</p>
          </Content.Prose>

          <div style={{ display: 'flex', gap: 'var(--gap-md)', flexWrap: 'wrap' }}>
            <Button variant="solid" size="lg" onClick={() => window.location.href = '/overview/architecture'}>
              Explore Architecture
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/code/getting-started'}>
              Quick Start Guide
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/components'}>
              Browse Components
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
