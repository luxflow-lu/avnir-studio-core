"use client";

import React from "react";
import { Badge, Button, Card, Form, Layout, Marketing, Primitives, System } from "@avnir/ui";

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

      {/* 2) Stats - Key Metrics */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="By the Numbers"
            subtitle="Production-ready design system at scale"
            align="center"
          />
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--gap-xs)' }}>144</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Production Components</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--gap-xs)' }}>8</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Multi-Brand Support</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--gap-xs)' }}>100%</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>CSS Coverage</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--gap-xs)' }}>AA</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>WCAG Compliant</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3) Logo Cloud - Brands Powered */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Powering the AVNIR Ecosystem"
            subtitle="One design system, 8 brands, infinite possibilities"
            align="center"
          />
          <Marketing.LogoCloud
            logos={[
              { alt: "AVNIR", src: "/brands/avnir.svg" },
              { alt: "MUZIDEV", src: "/brands/muzidev.svg" },
              { alt: "MUZIPICS", src: "/brands/muzipics.svg" },
              { alt: "MUZIWEB", src: "/brands/muziweb.svg" },
              { alt: "MUZITOOLS", src: "/brands/muzitools.svg" },
              { alt: "MUZISYSTEM", src: "/brands/muzisystem.svg" },
            ]}
          />
        </div>
      </section>

      {/* 4) Pourquoi MUZISYSTEM (4 Pillars) */}
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
          <div className="section-actions">
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
              <System.BrandSwatch 
                color="var(--primary)" 
                name="AVNIR" 
                description="Gold • Dark/Light" 
              />
            </Card>
            <Card>
              <System.BrandSwatch 
                color="#5cb9f2" 
                name="MUZIDEV" 
                description="Blue • Dark/Light" 
              />
            </Card>
            <Card>
              <System.BrandSwatch 
                color="#ff2d55" 
                name="MUZIPICS" 
                description="Red • Dark/Light" 
              />
            </Card>
            <Card>
              <System.BrandSwatch 
                color="#9802eb" 
                name="MUZIWEB" 
                description="Purple • Dark/Light" 
              />
            </Card>
          </div>
          <div className="section-actions">
            <Button variant="outline" onClick={() => window.location.href = '/foundations/brands'}>Explore All Brands</Button>
          </div>
        </div>
      </section>

      {/* 3.5) Brand Selector - Live Demo */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Try It Live"
            subtitle="Switch between brands to see the design system in action"
            align="center"
          />
          <Card style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ marginBottom: 'var(--margin-md)' }}>Select a Brand</h3>
            <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-lg)' }}>
              Change the active brand to see how colors, components, and styles adapt instantly across the entire site.
            </p>
            <System.BrandSelector />
            <p className="text-small" style={{ color: 'var(--muted)', marginTop: 'var(--margin-xl)', marginBottom: 'var(--margin-md)' }}>
              ✨ Watch the components below change colors in real-time
            </p>
            
            {/* Preview Components */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: 'var(--gap-lg)', 
              padding: 'var(--padding-xl)', 
              backgroundColor: 'var(--surface)', 
              borderRadius: 'var(--radius-md)',
              transition: 'all 0.3s ease'
            }}>
              {/* Button */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)', alignItems: 'center' }}>
                <Button variant="solid">Primary Button</Button>
                <span className="text-small" style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>Button</span>
              </div>
              
              {/* Badge */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)', alignItems: 'center' }}>
                <Badge variant="primary">Primary Badge</Badge>
                <span className="text-small" style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>Badge</span>
              </div>
              
              {/* Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)', alignItems: 'center', width: '100%' }}>
                <Form.Input placeholder="Type here..." style={{ width: '100%' }} />
                <span className="text-small" style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>Input</span>
              </div>
              
              {/* Color Swatch */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-sm)', alignItems: 'center' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }} title="Primary color"></div>
                <span className="text-small" style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>Primary Color</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 4) Tokens Essentiels */}
      <section className="section--xl">
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
                <System.ColorSwatch color="var(--primary)" label="Primary" />
                <System.ColorSwatch color="var(--surface)" label="Surface" />
                <System.ColorSwatch color="var(--border)" label="Border" />
              </div>
            </Card>
            <Card>
              <h3>Typography</h3>
              <p>Type scale from Display to Caption with semantic naming</p>
              <div style={{ marginTop: 'var(--gap-md)', display: 'flex', flexDirection: 'column', gap: 'var(--gap-xs)' }}>
                <p className="text-3xl font-semibold">Heading</p>
                <p className="text-base">Body text</p>
                <p className="text-sm">Small text</p>
              </div>
            </Card>
            <Card>
              <h3>Spacing & Radius</h3>
              <p>Consistent spacing scale and border radius system</p>
              <div style={{ marginTop: 'var(--gap-md)', display: 'flex', gap: 'var(--gap-sm)', alignItems: 'flex-end' }}>
                <div style={{ width: '20px', height: '20px', background: 'var(--primary)', borderRadius: 'var(--radius-sm)' }}></div>
                <div style={{ width: '20px', height: '30px', background: 'var(--primary)', borderRadius: 'var(--radius-sm)' }}></div>
                <div style={{ width: '20px', height: '40px', background: 'var(--primary)', borderRadius: 'var(--radius-sm)' }}></div>
              </div>
            </Card>
          </div>
          <div className="section-actions">
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

      {/* 6) Testimonials - Social Proof */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Trusted by Developers"
            subtitle="What teams are saying about MUZISYSTEM"
            align="center"
          />
          <Marketing.Testimonials
            variant="carousel"
            autoPlay={true}
            interval={5000}
            items={[
          {
            quote: "MUZISYSTEM a réduit notre temps de développement de 40%. Les composants sont robustes, accessibles et parfaitement documentés.",
            author: "Sarah Chen",
            role: "Lead Developer @ MUZIDEV",
    
          },
          {
            quote: "La cohérence multi-brand est exceptionnelle. On peut switcher entre 8 brands sans toucher au code. C'est exactement ce dont on avait besoin.",
            author: "Marc Dubois",
            role: "CTO @ MUZIPICS",

          },
          {
            quote: "L'approche CSS modulaire et les variables sémantiques rendent la maintenance triviale. Plus de conflits, plus de duplication.",
            author: "Emma Laurent",
            role: "Senior Frontend @ MUZIWEB",
        
          },
        ]}
          />
        </div>
      </section>

      {/* 7) Patterns Clés (Music-First) */}
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
          <div className="section-actions">
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
          <div className="section-actions">
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

      {/* 9) FAQ - Common Questions */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about MUZISYSTEM"
            align="center"
          />
          <Marketing.Faq
            items={[
          {
            q: "Quelle est la différence avec Material UI ou Chakra UI ?",
            a: "MUZISYSTEM est spécialement conçu pour le multi-brand. Contrairement aux autres design systems, nous gérons nativement 8 brands avec des thèmes dark/light, sans duplication de code. De plus, notre approche CSS modulaire (0 Tailwind) garantit une performance optimale et une maintenance simplifiée.",
          },
          {
            q: "Comment migrer depuis Tailwind ou Bootstrap ?",
            a: "La migration est progressive. Vous pouvez commencer par utiliser nos composants tout en gardant votre CSS existant. Nous fournissons un guide de migration complet avec des exemples de conversion classe par classe. La plupart des projets migrent en 2-3 semaines.",
          },
          {
            q: "Les composants sont-ils accessibles (WCAG) ?",
            a: "Oui, 100% des composants respectent WCAG 2.1 AA minimum. Nous testons avec des lecteurs d'écran (NVDA, JAWS, VoiceOver), garantissons la navigation clavier complète, et maintenons des ratios de contraste ≥4.5:1. Chaque composant inclut les attributs ARIA appropriés.",
          },
          {
            q: "Puis-je utiliser MUZISYSTEM avec Next.js, Remix ou Astro ?",
            a: "Absolument ! MUZISYSTEM est framework-agnostic. Nous fournissons des guides d'intégration pour Next.js (App Router & Pages), Remix, Astro, SvelteKit, et même Vanilla JS. Les composants sont des React components standards, compatibles avec tous les frameworks React.",
          },
          {
            q: "Comment gérer les thèmes personnalisés ?",
            a: "Vous pouvez créer votre propre brand en définissant simplement vos variables CSS (--primary, --surface, etc.). Le système de tokens est entièrement customisable. Nous fournissons un générateur de thème interactif pour visualiser vos couleurs en temps réel.",
          },
          {
            q: "Quelle est la taille du bundle final ?",
            a: "Grâce au tree-shaking, vous n'importez que ce que vous utilisez. Un projet typique avec 10-15 composants pèse ~50KB (JS) + ~15KB (CSS) gzippé. Notre CSS modulaire permet d'importer uniquement les styles nécessaires, contrairement aux frameworks monolithiques.",
          },
        ]}
          />
        </div>
      </section>

      {/* 10) CTA Final */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Start Building Today"
            subtitle="Join the AVNIR ecosystem and build better products faster"
            align="center"
          />
          <div className="section-actions">
            <Button variant="solid" size="lg" onClick={() => window.location.href = '/code/getting-started'}>Get Started</Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/overview/intro'}>View Documentation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
