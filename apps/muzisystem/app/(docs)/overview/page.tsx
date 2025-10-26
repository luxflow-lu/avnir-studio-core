"use client";

import { Layout, Content, Card, Button } from "@avnir/ui";

export default function OverviewPage() {
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
          </Content.Prose>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
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
            <h2>Explore MUZISYSTEM</h2>
          </Content.Prose>

          <div className="grid-2">
            <Card>
              <h3>🏗️ Architecture</h3>
              <p>
                Understanding MUZISYSTEM's structure, layers, and design decisions. Learn how the system 
                is organized and how components work together.
              </p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/overview/architecture'}
              >
                View Architecture
              </Button>
            </Card>

            <Card>
              <h3>🎯 Principles</h3>
              <p>
                The core principles that guide every design decision in MUZISYSTEM. Discover our 
                philosophy and approach to building great experiences.
              </p>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/overview/principles'}
              >
                View Principles
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Content.Prose>
            <h2>Next Steps</h2>
            <p>Ready to get started? Choose your path:</p>
          </Content.Prose>

          <div style={{ display: 'flex', gap: 'var(--gap-md)', flexWrap: 'wrap' }}>
            <Button variant="solid" size="lg" onClick={() => window.location.href = '/foundations/tokens'}>
              Explore Foundations
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/patterns'}>
              Browse Patterns
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/components'}>
              View Components
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
