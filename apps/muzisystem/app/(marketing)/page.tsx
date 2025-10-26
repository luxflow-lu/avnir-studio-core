"use client";

import { Button, Card, Layout, Marketing } from "@avnir/ui";

export default function HomePage() {
  return (
    <>
      {/* 1) Hero Section */}
      <Marketing.Hero
        title="MUZISYSTEM Official Design System"
        subtitle="Production-ready components and design tokens for building consistent, accessible, and scalable user interfaces across the AVNIR ecosystem."
        layout="center"
        actions={
          <>
            <Button variant="solid" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View Components</Button>
          </>
        }
      />

      {/* 2) Pourquoi MUZISYSTEM (4 Pillars) */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Why MUZISYSTEM"
            subtitle="Enterprise-grade design system built for scale"
            align="center"
          />
          <div className="grid-4">
            <Card>
              <h3>🎯 Multi-Brand Consistency</h3>
              <p>Unified visual language across 8+ brands with seamless theme switching</p>
            </Card>
            <Card>
              <h3>♿ Accessibility AA</h3>
              <p>WCAG 2.2 AA compliant by default with comprehensive testing</p>
            </Card>
            <Card>
              <h3>⚡ Performance & DX</h3>
              <p>Tree-shakeable, TypeScript-first, optimized for modern workflows</p>
            </Card>
            <Card>
              <h3>🎵 Music-Centric</h3>
              <p>Specialized components for audio workflows and creative tools</p>
            </Card>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--gap-xl)' }}>
            <Button variant="outline" onClick={() => window.location.href = '/overview/architecture'}>View Architecture</Button>
          </div>
        </div>
      </section>

      {/* 3) Brands & Themes - Live Preview */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Brands & Themes"
            subtitle="8 brands, 3 themes, infinite possibilities"
            align="center"
          />
          <div className="grid-4">
            <Card>
              <div style={{ width: '100%', height: '60px', background: 'var(--primary)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--gap-md)' }}></div>
              <h4>AVNIR</h4>
              <p className="text-small">Gold • Dark/Light</p>
            </Card>
            <Card>
              <div style={{ width: '100%', height: '60px', background: '#5cb9f2', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--gap-md)' }}></div>
              <h4>MUZIDEV</h4>
              <p className="text-small">Blue • Dark/Light</p>
            </Card>
            <Card>
              <div style={{ width: '100%', height: '60px', background: '#ff2d55', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--gap-md)' }}></div>
              <h4>MUZIPICS</h4>
              <p className="text-small">Red • Dark/Light</p>
            </Card>
            <Card>
              <div style={{ width: '100%', height: '60px', background: '#9802eb', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--gap-md)' }}></div>
              <h4>MUZIWEB</h4>
              <p className="text-small">Purple • Dark/Light</p>
            </Card>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--gap-xl)' }}>
            <Button variant="outline" onClick={() => window.location.href = '/foundations/brands'}>Explore All Brands</Button>
          </div>
        </div>
      </section>

      {/* 4) Tokens Essentiels */}
      <section className="section--lg">
        <div className="container">
          <Layout.SectionHeader
            title="Design Tokens"
            subtitle="Consistent design decisions across all platforms"
            align="center"
          />
          <div className="grid-3">
            <Card>
              <h3>Colors</h3>
              <p>Semantic color system with states (hover/focus/disabled)</p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', marginTop: 'var(--gap-md)' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: 'var(--radius-xs)' }}></div>
                <div style={{ width: '40px', height: '40px', background: 'var(--surface)', borderRadius: 'var(--radius-xs)' }}></div>
                <div style={{ width: '40px', height: '40px', background: 'var(--border)', borderRadius: 'var(--radius-xs)' }}></div>
              </div>
            </Card>
            <Card>
              <h3>Typography</h3>
              <p>Type scale from Display to Caption with semantic naming</p>
              <div style={{ marginTop: 'var(--gap-md)' }}>
                <p style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--font-semibold)' }}>Heading</p>
                <p style={{ fontSize: 'var(--text-body)' }}>Body text</p>
                <p style={{ fontSize: 'var(--text-small)' }}>Small text</p>
              </div>
            </Card>
            <Card>
              <h3>Spacing & Radius</h3>
              <p>Consistent spacing scale and border radius system</p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', marginTop: 'var(--gap-md)', alignItems: 'flex-end' }}>
                <div style={{ width: '20px', height: '20px', background: 'var(--primary)' }}></div>
                <div style={{ width: '20px', height: '30px', background: 'var(--primary)' }}></div>
                <div style={{ width: '20px', height: '40px', background: 'var(--primary)' }}></div>
              </div>
            </Card>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--gap-xl)', display: 'flex', gap: 'var(--gap-md)', justifyContent: 'center' }}>
            <Button variant="solid" onClick={() => window.location.href = '/foundations/tokens'}>View All Tokens</Button>
            <Button variant="outline" onClick={() => window.location.href = '/foundations/tokens'}>Download JSON</Button>
          </div>
        </div>
      </section>

      {/* 5) Composants Phares (Spotlight) */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Featured Components"
            subtitle="Production-ready components for every use case"
            align="center"
          />
          <div className="grid-4">
            <Card>
              <h3>🎵 Audio Player</h3>
              <p>Waveform, controls, a11y support</p>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/components/audio-player'}>View Docs</Button>
            </Card>
            <Card>
              <h3>🔘 Button</h3>
              <p>Variants, states, icons, loading</p>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/components/button'}>View Docs</Button>
            </Card>
            <Card>
              <h3>📊 DataGrid</h3>
              <p>Sort, filter, inline edit, density</p>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/components/data-grid'}>View Docs</Button>
            </Card>
            <Card>
              <h3>📝 Form Inputs</h3>
              <p>TextField, Select, FileUpload</p>
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/components/input'}>View Docs</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 6) Patterns Clés (Music-First) */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Music-First Patterns"
            subtitle="Specialized patterns for audio workflows"
            align="center"
          />
          <div className="grid-3">
            <Card>
              <h3>🎤 Upload & Asset Pipeline</h3>
              <p>Audio/image upload, validation, transcoding, feedback</p>
            </Card>
            <Card>
              <h3>🎹 Key & BPM Detection</h3>
              <p>Analyzing/ready states, chips UI, metadata display</p>
            </Card>
            <Card>
              <h3>👥 Collaboratif & Rôles</h3>
              <p>Artiste, Beatmaker, Studio, Producteur workflows</p>
            </Card>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--gap-xl)' }}>
            <Button variant="outline" onClick={() => window.location.href = '/patterns'}>View All Patterns</Button>
          </div>
        </div>
      </section>

      {/* 7) Accessibilité & Qualité */}
      <section className="section--lg">
        <div className="container">
          <Layout.SectionHeader
            title="Accessibility & Quality"
            subtitle="Built with accessibility and performance in mind"
            align="center"
          />
          <div className="grid-4">
            <Card>
              <h3>WCAG 2.2 AA</h3>
              <p>Baseline compliance</p>
            </Card>
            <Card>
              <h3>Keyboard First</h3>
              <p>Full navigation support</p>
            </Card>
            <Card>
              <h3>Screen Reader</h3>
              <p>Tested & optimized</p>
            </Card>
            <Card>
              <h3>Performance</h3>
              <p>LCP &lt;2.5s, CLS &lt;0.1</p>
            </Card>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--gap-xl)' }}>
            <Button variant="outline" onClick={() => window.location.href = '/accessibility/standards'}>View A11y Matrix</Button>
          </div>
        </div>
      </section>

      {/* 8) Onboarding Ultra-Rapide */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Get Started in Minutes"
            subtitle="Quick onboarding for designers and developers"
            align="center"
          />
          <div className="grid-2">
            <Card>
              <h3>👨‍🎨 For Designers</h3>
              <p>Install Figma library, tokens, and styles in 3 minutes</p>
              <Button variant="solid" onClick={() => window.location.href = '/tools/figma'}>Figma Guide</Button>
            </Card>
            <Card>
              <h3>👨‍💻 For Developers</h3>
              <p>Install npm, configure Tailwind preset, and start building in 5 minutes</p>
              <Button variant="solid" onClick={() => window.location.href = '/code/getting-started'}>Dev Guide</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 9) CTA Final */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Start Building Today"
            subtitle="Join the AVNIR ecosystem and build better products faster"
            align="center"
          />
          <div style={{ display: 'flex', gap: 'var(--gap-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="solid" size="lg" onClick={() => window.location.href = '/code/getting-started'}>Get Started</Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/overview/intro'}>View Documentation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
