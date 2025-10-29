"use client";

import React from "react";
import { Badge, Button, Card, Layout, Marketing, Primitives } from "@avnir/ui";

// Template de section pour chaque composant
interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
  status?: 'stable' | 'beta' | 'deprecated';
  browsers?: string[];
  a11y?: 'AA' | 'AAA';
}

function ComponentSection({ name, category, description, variants, preview, status = 'stable', browsers = ['all'], a11y = 'AA' }: ComponentSectionProps) {
  const statusConfig = {
    stable: { label: 'Stable', color: 'var(--success)', emoji: '✅' },
    beta: { label: 'Beta', color: 'var(--warning)', emoji: '🧪' },
    deprecated: { label: 'Deprecated', color: 'var(--error)', emoji: '⚠️' }
  };

  const currentStatus = statusConfig[status];

  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 'var(--gap-xl)', alignItems: 'center' }}>
          {/* Left: Info */}
          <div>
            {/* Category Badge */}
            <div style={{ marginBottom: 'var(--margin-md)' }}>
              <Badge variant="primary" style={{ textTransform: 'uppercase' }}>
                {category}
              </Badge>
            </div>
            <h2 style={{ 
              fontSize: 'var(--text-h2)', 
              fontWeight: 'var(--font-bold)', 
              marginBottom: 'var(--margin-md)',
              color: 'var(--titles)'
            }}>
              {name}
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: 'var(--margin-md)', lineHeight: 1.6 }}>
              {description}
            </p>
            
            {/* Variants */}
            {variants && variants.length > 0 && (
              <div style={{ marginBottom: 'var(--margin-lg)' }}>
                <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                  {variants.length} variant{variants.length > 1 ? 's' : ''} available
                </p>
                <div style={{ display: 'flex', gap: 'var(--gap-xs)', flexWrap: 'wrap' }}>
                  {variants.map((variant, index) => (
                    <Badge key={index} variant="default">
                      {variant}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Status Badges */}
            <div style={{ marginBottom: 'var(--margin-lg)' }}>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                Status
              </p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge style={{ backgroundColor: currentStatus.color, color: '#0b0b0d' }}>
                  {currentStatus.emoji} {currentStatus.label}
                </Badge>
                
                {browsers.includes('all') ? (
                  <Badge variant="default">
                    🌐 All Browsers
                  </Badge>
                ) : (
                  <Badge variant="default">
                    🌐 {browsers.join(', ')}
                  </Badge>
                )}
                
                <Badge variant="default">
                  ♿ WCAG 2.1 {a11y}
                </Badge>
              </div>
            </div>
            
            <Button variant="outline" size="lg">
              View Full Documentation →
            </Button>
          </div>

          {/* Right: Preview */}
          <Primitives.Box style={{
            padding: 'var(--padding-xl)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)'
          }}>
            <h3 style={{ marginBottom: 'var(--margin-lg)', fontSize: 'var(--text-small)', fontWeight: 'var(--font-medium)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Preview</h3>
            {preview}
          </Primitives.Box>
        </div>
      </div>
    </section>
  );
}


export default function MarketingPage() {
  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Marketing Components"
        subtitle="Landing page sections including heroes, CTAs, testimonials, and pricing. Built to convert visitors into customers."
      />

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>12</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Total Components</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>100%</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>TypeScript</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>AA</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Accessible</p>
            </Card>
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>Stable</h2>
              <p className="text-small" style={{ color: 'var(--muted)' }}>Production Ready</p>
            </Card>
          </div>
        </div>
      </section>

      <ComponentSection
        name="Hero"
        category="Marketing"
        description="Hero section with title, subtitle, actions, and optional image. Supports center, left, and split layouts."
        variants={["center", "left", "split"]}
        preview={
          <Marketing.Hero
            eyebrow="Welcome to AVNIR"
            title="Build Better Products Faster"
            subtitle="A comprehensive design system for modern web applications"
            layout="center"
            actions={
              <div style={{ display: 'flex', gap: 'var(--gap-sm)' }}>
                <Button variant="solid">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            }
          />
        }
      />

      <ComponentSection
        name="FeatureGrid"
        category="Marketing"
        description="Grid of features with icons, titles, and descriptions. Responsive column layout."
        variants={["2-col", "3-col", "4-col"]}
        preview={
          <Marketing.FeatureGrid columns={3}>
            <Marketing.FeatureGridItem
              icon="🚀"
              title="Fast Performance"
              description="Optimized for speed and efficiency"
            />
            <Marketing.FeatureGridItem
              icon="🎨"
              title="Beautiful Design"
              description="Modern and accessible UI components"
            />
            <Marketing.FeatureGridItem
              icon="🔒"
              title="Secure by Default"
              description="Built with security best practices"
            />
          </Marketing.FeatureGrid>
        }
      />

      <ComponentSection
        name="Stats"
        category="Marketing"
        description="Statistics display with large numbers and labels. Perfect for showcasing metrics."
        variants={["2-col", "3-col", "4-col"]}
        preview={
          <Marketing.Stats
            columns={3}
            items={[
              { value: '10k+', label: 'Active Users', sublabel: 'and growing' },
              { value: '99.9%', label: 'Uptime', sublabel: 'guaranteed' },
              { value: '24/7', label: 'Support', sublabel: 'always available' }
            ]}
          />
        }
      />

      <ComponentSection
        name="Testimonials"
        category="Marketing"
        description="Customer testimonials with quotes, author info, and avatars. Grid or carousel layout."
        variants={["grid", "carousel", "with-avatars"]}
        preview={
          <Marketing.Testimonials
            variant="grid"
            items={[
              { quote: 'AVNIR has transformed how we build products. The components are top-notch!', author: 'Sarah Johnson', role: 'CEO, TechCorp' },
              { quote: 'Best design system I\'ve ever used. Saves us hours every week.', author: 'Mike Chen', role: 'Lead Developer' },
              { quote: 'The accessibility features are outstanding. Highly recommended!', author: 'Emma Davis', role: 'Product Manager' }
            ]}
          />
        }
      />

      <ComponentSection
        name="LogoCloud"
        category="Marketing"
        description="Display partner or client logos in a responsive grid. Perfect for social proof."
        variants={["default", "grayscale", "animated"]}
        preview={
          <Marketing.LogoCloud
            logos={[
              { src: '/logo-placeholder.svg', alt: 'Company 1' },
              { src: '/logo-placeholder.svg', alt: 'Company 2' },
              { src: '/logo-placeholder.svg', alt: 'Company 3' },
              { src: '/logo-placeholder.svg', alt: 'Company 4' }
            ]}
          />
        }
      />

      <ComponentSection
        name="CtaSection"
        category="Marketing"
        description="Call-to-action section with title, subtitle, and action buttons. Optional image support."
        variants={["text-only", "with-image", "reverse"]}
        preview={
          <Marketing.CtaSection
            title="Ready to Get Started?"
            subtitle="Join thousands of teams building better products with AVNIR"
            actions={
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', justifyContent: 'center' }}>
                <Button variant="solid" size="lg">Start Free Trial</Button>
                <Button variant="outline" size="lg">Contact Sales</Button>
              </div>
            }
          />
        }
      />

      <ComponentSection
        name="Steps"
        category="Marketing"
        description="Step-by-step process display with numbered items. Horizontal or vertical layout."
        variants={["horizontal", "vertical", "with-icons"]}
        preview={
          <Marketing.Steps
            title="How It Works"
            subtitle="Get started in three simple steps"
            items={[
              { title: 'Sign Up', description: 'Create your account in seconds' },
              { title: 'Customize', description: 'Configure your design system' },
              { title: 'Deploy', description: 'Ship your product faster' }
            ]}
          />
        }
      />

      <ComponentSection
        name="Faq"
        category="Marketing"
        description="Frequently asked questions with expandable answers. Accessible accordion pattern."
        variants={["default", "with-header", "multi-open"]}
        preview={
          <Marketing.Faq
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about AVNIR"
            items={[
              { q: 'What is AVNIR?', a: 'AVNIR is a comprehensive design system built for modern web applications.' },
              { q: 'How do I get started?', a: 'Install the package with npm or pnpm and import the components you need.' },
              { q: 'Is it free?', a: 'Yes, AVNIR is open source and free to use for personal and commercial projects.' }
            ]}
            defaultOpen={[0]}
          />
        }
      />

      <ComponentSection
        name="Newsletter"
        category="Marketing"
        description="Email newsletter signup form with title and description. Built-in validation."
        variants={["default", "compact", "inline"]}
        preview={
          <Marketing.Newsletter
            title="Stay Updated"
            subtitle="Get the latest updates and news delivered to your inbox"
            onSubmit={(email) => console.log('Subscribed:', email)}
          />
        }
      />

      <ComponentSection
        name="ContactBlock"
        category="Marketing"
        description="Contact form with details section. Customizable form fields and contact information."
        variants={["default", "custom-form", "custom-details"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Contact form preview - Includes form fields and contact details in a 2-column layout
            </p>
          </div>
        }
      />

      <ComponentSection
        name="PricingStrip"
        category="Marketing"
        description="Simple pricing banner with title, description, and CTA. Perfect for single-plan offerings."
        variants={["default", "with-price", "highlighted"]}
        preview={
          <Marketing.PricingStrip
            title="Start Building Today"
            subtitle="Get access to all features for just $29/month"
            cta={<Button variant="solid" size="lg">Start Free Trial</Button>}
          />
        }
      />

      <ComponentSection
        name="Comparison"
        category="Marketing"
        description="Feature comparison table for pricing plans. Shows features across Basic, Pro, and Enterprise tiers."
        variants={["default", "highlighted", "with-icons"]}
        preview={
          <Marketing.Comparison
            features={[
              { name: 'Users', basic: '5', pro: '25', enterprise: 'Unlimited' },
              { name: 'Storage', basic: '10GB', pro: '100GB', enterprise: '1TB' },
              { name: 'Support', basic: false, pro: true, enterprise: true },
              { name: 'Custom Domain', basic: false, pro: true, enterprise: true }
            ]}
          />
        }
      />

      {/* Quick Start CTA */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ready to Build Your Landing Page?"
            subtitle="Start converting visitors with our marketing components"
            align="center"
          />
          <div className="section-actions">
            <Button variant="solid" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View All Components</Button>
          </div>
        </div>
      </section>
    </>
  );
}
