"use client";

import React from "react";
import { Button, Card, Layout } from "@avnir/ui";

export default function ComponentsIndexPage() {
  const categories = [
    { name: "Primitives", description: "Base components for layouts and content structure", count: 22, href: "/components/primitives", icon: "📦", status: "ready" },
    { name: "Form", description: "Inputs, selects, checkboxes, and form controls", count: 15, href: "/components/form", icon: "📝", status: "ready" },
    { name: "Data Display", description: "Tables, badges, avatars, and data visualization", count: 16, href: "/components/data-display", icon: "📊", status: "ready" },
    { name: "Feedback", description: "Alerts, notifications, loading states, and dialogs", count: 9, href: "/components/feedback", icon: "💬", status: "ready" },
    { name: "Navigation", description: "Menus, breadcrumbs, tabs, and navigation patterns", count: 8, href: "/components/navigation", icon: "🧭", status: "ready" },
    { name: "Overlay", description: "Modals, drawers, tooltips, and popovers", count: 6, href: "/components/overlay", icon: "🪟", status: "ready" },
    { name: "Layout", description: "Navbar, footer, sidebar, and page layouts", count: 10, href: "/components/layout", icon: "🏗️", status: "ready" },
    { name: "Content", description: "Prose, markdown, and code blocks", count: 3, href: "/components/content", icon: "📄", status: "ready" },
    { name: "Marketing", description: "Hero, features, testimonials, and landing sections", count: 12, href: "/components/marketing", icon: "🎯", status: "ready" },
    { name: "E-commerce", description: "Products, cart, checkout, and shopping components", count: 10, href: "/components/ecommerce", icon: "🛒", status: "ready" },
    { name: "SaaS", description: "Dashboard, metrics, pricing, and SaaS patterns", count: 14, href: "/components/saas", icon: "💼", status: "ready" },
    { name: "System", description: "Error pages, theme switcher, and system utilities", count: 11, href: "/components/system", icon: "⚙️", status: "ready" },
    { name: "AI", description: "AI-powered components for creative workflows", count: 2, href: "/components/ai", icon: "🤖", status: "ready" },
    { name: "Media", description: "Asset management and media display", count: 1, href: "/components/media", icon: "🎵", status: "ready" },
    { name: "Authentication", description: "Login, registration, and security components", count: 5, href: "/components/auth", icon: "🔐", status: "ready" }
  ];

  const totalComponents = categories.reduce((sum, cat) => sum + cat.count, 0);
  const readyCategories = categories.filter(c => c.status === "ready").length;

  return (
    <>
      <Layout.PageHeader
        title="Component Library"
        subtitle="Browse all 150+ production-ready components organized by category. Built with TypeScript, accessibility, and performance in mind."
      />

      {/* Stats Section */}
      <section className="section--lg">
        <div className="container">
          <Layout.SectionHeader
            title="By the Numbers"
            subtitle="Production-ready design system at scale"
            align="center"
          />
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--gap-xs)' }}>142</h2>
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

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <Layout.SectionHeader
            title="Browse by Category"
            subtitle="Explore components organized by their primary use case"
            align="center"
          />
          <div className="grid-3">
            {categories.map((category) => (
              <Card key={category.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--margin-md)' }}>
                  <div style={{ fontSize: '3rem' }}>
                    {category.icon}
                  </div>
                  {category.status === "ready" && (
                    <span style={{ 
                      padding: 'var(--padding-xs) var(--padding-sm)', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: 'var(--success)', 
                      color: 'var(--bg)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-bold)',
                      textTransform: 'uppercase'
                    }}>
                      Ready
                    </span>
                  )}
                  {category.status === "coming" && (
                    <span style={{ 
                      padding: 'var(--padding-xs) var(--padding-sm)', 
                      borderRadius: 'var(--radius-sm)', 
                      backgroundColor: 'var(--surface)', 
                      color: 'var(--muted)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 'var(--font-medium)',
                      textTransform: 'uppercase'
                    }}>
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 style={{ marginBottom: 'var(--margin-sm)' }}>{category.name}</h3>
                <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)' }}>
                  {category.description}
                </p>
                <p className="text-small" style={{ color: 'var(--primary)', fontWeight: 'var(--font-medium)', marginBottom: 'var(--margin-md)' }}>
                  {category.count} components
                </p>
                <Button 
                  variant={category.status === "ready" ? "outline" : "ghost"} 
                  onClick={() => category.status === "ready" && (window.location.href = category.href)}
                  disabled={category.status === "coming"}
                >
                  {category.status === "ready" ? "View Components →" : "Coming Soon"}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
