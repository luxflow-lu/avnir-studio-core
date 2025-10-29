"use client";

import React from "react";
import { Badge, Button, Card, Layout, Primitives, Saas } from "@avnir/ui";

// Template de section pour chaque composant
interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
}

function ComponentSection({ name, category, description, variants, preview }: ComponentSectionProps) {
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


export default function SaasPage() {
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="SaaS Components"
        subtitle="Dashboard widgets, billing, team management, and everything needed to build SaaS applications. Enterprise-ready."
      />

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>14</h2>
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
        name="DashboardKPI"
        category="SaaS"
        description="Key performance indicator cards for dashboards. Shows metrics with trends, changes, and icons."
        variants={["default", "with-trend", "with-icon", "loading"]}
        preview={
          <Saas.DashboardKPI
            kpis={[
              { id: '1', title: 'Total Revenue', value: '$45,231', change: { value: 12.5, period: 'vs last month', trend: 'up' } },
              { id: '2', title: 'Active Users', value: '2,345', change: { value: -3.2, period: 'vs last week', trend: 'down' } }
            ]}
          />
        }
      />

      <ComponentSection
        name="PricingTable"
        category="SaaS"
        description="Pricing plans display with features list and CTA buttons. Supports popular badge."
        variants={["monthly", "annual", "with-popular"]}
        preview={
          <Saas.PricingTable
            plans={[
              {
                id: 'starter',
                name: 'Starter',
                price: '€29',
                period: '/month',
                features: ['10 Projects', '5 Team Members', 'Basic Support'],
                cta: { label: 'Get Started', onClick: () => console.log('Starter') }
              },
              {
                id: 'pro',
                name: 'Pro',
                price: '€99',
                period: '/month',
                features: ['Unlimited Projects', '25 Team Members', 'Priority Support', 'Advanced Analytics'],
                popular: true,
                cta: { label: 'Get Started', onClick: () => console.log('Pro') }
              }
            ]}
          />
        }
      />

      <ComponentSection
        name="PlanPicker"
        category="SaaS"
        description="Interactive plan selector with monthly/yearly toggle and discount badge."
        variants={["monthly", "yearly", "with-discount"]}
        preview={
          <Saas.PlanPicker
            plans={[
              {
                id: 'basic',
                name: 'Basic',
                price: { monthly: 29, yearly: 290 },
                features: ['10 Projects', '5 GB Storage'],
                cta: 'Select Basic'
              },
              {
                id: 'pro',
                name: 'Pro',
                price: { monthly: 99, yearly: 990 },
                features: ['Unlimited Projects', '100 GB Storage', 'Priority Support'],
                popular: true,
                cta: 'Select Pro'
              }
            ]}
            billing={billing}
            onBillingChange={setBilling}
            onSelectPlan={(id) => console.log('Selected:', id)}
          />
        }
      />

      <ComponentSection
        name="ActivityFeed"
        category="SaaS"
        description="Timeline of user activities and system events. Shows who did what and when."
        variants={["default", "with-icons", "compact"]}
        preview={
          <Saas.ActivityFeed
            activities={[
              { id: '1', user: 'John Doe', action: 'created', target: 'New Project', timestamp: '2 hours ago' },
              { id: '2', user: 'Jane Smith', action: 'updated', target: 'Settings', timestamp: '5 hours ago' },
              { id: '3', user: 'Bob Johnson', action: 'deleted', target: 'Old File', timestamp: '1 day ago' }
            ]}
          />
        }
      />

      <ComponentSection
        name="UsageMetrics"
        category="SaaS"
        description="Usage bars showing current consumption vs limits. Color-coded warnings for near-limit usage."
        variants={["default", "near-limit", "over-limit"]}
        preview={
          <Saas.UsageMetrics
            metrics={[
              { label: 'API Calls', current: 8500, limit: 10000, unit: 'calls' },
              { label: 'Storage', current: 45, limit: 100, unit: 'GB' },
              { label: 'Team Members', current: 12, limit: 25, unit: 'users' }
            ]}
          />
        }
      />

      <ComponentSection
        name="BillingHistory"
        category="SaaS"
        description="Invoice history table with status badges and download actions."
        variants={["default", "with-download", "with-status"]}
        preview={
          <Saas.BillingHistory
            invoices={[
              { id: '1', date: '2024-10-01', amount: '€99.00', status: 'paid', description: 'Pro Plan - October' },
              { id: '2', date: '2024-09-01', amount: '€99.00', status: 'paid', description: 'Pro Plan - September' },
              { id: '3', date: '2024-08-01', amount: '€99.00', status: 'paid', description: 'Pro Plan - August' }
            ]}
            onDownload={(invoice) => console.log('Download:', invoice.id)}
          />
        }
      />

      <ComponentSection
        name="ApiKeys"
        category="SaaS"
        description="API key management with create, copy, toggle, and delete actions. Permissions support."
        variants={["default", "with-permissions", "with-last-used"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              API Keys preview - Table with keys, permissions, creation date, and actions (copy, toggle, delete)
            </p>
          </div>
        }
      />

      <ComponentSection
        name="InviteMembers"
        category="SaaS"
        description="Team member invitation form with email inputs and role selection. Supports multiple invites."
        variants={["single", "multiple", "with-roles"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Invite Members preview - Form with email inputs, role dropdowns, and add/remove buttons
            </p>
          </div>
        }
      />

      <ComponentSection
        name="NotificationCenter"
        category="SaaS"
        description="Notification list with unread badges, mark as read, and clear actions."
        variants={["default", "with-types", "empty"]}
        preview={
          <Saas.NotificationCenter
            notifications={[
              { id: '1', title: 'New Feature', message: 'Check out our new dashboard!', timestamp: '5 min ago', read: false, type: 'info' },
              { id: '2', title: 'Payment Successful', message: 'Your payment was processed.', timestamp: '1 hour ago', read: true, type: 'success' },
              { id: '3', title: 'Usage Warning', message: 'You are approaching your limit.', timestamp: '2 hours ago', read: false, type: 'warning' }
            ]}
            onMarkAsRead={(id) => console.log('Mark as read:', id)}
            onMarkAllAsRead={() => console.log('Mark all as read')}
          />
        }
      />

      <ComponentSection
        name="RolesMatrix"
        category="SaaS"
        description="Permission matrix showing roles and their access levels. Interactive checkboxes for editing."
        variants={["default", "readonly", "with-categories"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Roles Matrix preview - Table with roles as columns, permissions as rows, and checkboxes
            </p>
          </div>
        }
      />

      <ComponentSection
        name="SavedViews"
        category="SaaS"
        description="Saved filter presets for data tables and lists. Create, edit, and delete custom views."
        variants={["default", "with-sharing", "with-default"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Saved Views preview - Dropdown with saved filter presets and actions
            </p>
          </div>
        }
      />

      <ComponentSection
        name="ImportExport"
        category="SaaS"
        description="Data import/export interface with file upload, format selection, and progress tracking."
        variants={["import", "export", "with-progress"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Import/Export preview - File upload area, format selector, and progress bar
            </p>
          </div>
        }
      />

      <ComponentSection
        name="Kanban"
        category="SaaS"
        description="Kanban board with drag-and-drop cards between columns. Perfect for task management."
        variants={["default", "with-wip-limits", "with-avatars"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Kanban preview - Columns with draggable cards (To Do, In Progress, Done)
            </p>
          </div>
        }
      />

      <ComponentSection
        name="CreditBalance"
        category="SaaS"
        description="Credit balance display with usage history and top-up button. Shows remaining credits."
        variants={["default", "with-history", "low-balance"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Credit Balance preview - Balance card with usage chart and top-up action
            </p>
          </div>
        }
      />

      {/* Quick Start CTA */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ready to Build Your SaaS?"
            subtitle="Start building enterprise-grade applications with our SaaS components"
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
