"use client";

import { 
  // Direct imports
  Card,
  Section,
  Button,
  Input,
  Textarea,
  // Namespaced imports
  Layout,
  Navigation,
  Form,
  DataDisplay,
  Feedback,
  Marketing,
  Ecommerce,
  Saas,
  System,
  Overlay,
  Primitives,
  Avnir
} from "@avnir/ui";

import { useEffect, useState } from "react";

export default function AllComponentsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Layout.PageHeader
        title="All Components Showcase"
        subtitle="Tous les composants du design system @avnir/ui dans leur état par défaut. Utilisez cette page pour ajuster le rendu dans themes.css."
      />
      
      <section className="section">
        <div className="container">


        {/* Banner Component */}
        <div className="mb-16">
          <h2 className="content-title">Banner Component</h2>
          
          <div className="mb-8">
            <h3 className="content-subtitle">System Banners</h3>
            <div className="space-y-4">
              <div className="banner banner--info">
                <div className="banner-icon">ℹ️</div>
                <div className="banner-content">
                  <h4 className="banner-title">System Update</h4>
                  <p className="banner-message">New features have been added to improve your experience.</p>
                </div>
                <Button variant="ghost" className="banner-close">×</Button>
              </div>
              
              <div className="banner banner--warning">
                <div className="banner-icon">⚠️</div>
                <div className="banner-content">
                  <h4 className="banner-title">Maintenance Notice</h4>
                  <p className="banner-message">Scheduled maintenance will occur tonight from 2-4 AM UTC.</p>
                </div>
                <Button variant="ghost" className="banner-close">×</Button>
              </div>
              
              <div className="banner banner--success">
                <div className="banner-icon">✅</div>
                <div className="banner-content">
                  <h4 className="banner-title">Update Complete</h4>
                  <p className="banner-message">Your profile has been successfully updated.</p>
                </div>
                <Button variant="ghost" className="banner-close">×</Button>
              </div>
              
              <div className="banner banner--error">
                <div className="banner-icon">❌</div>
                <div className="banner-content">
                  <h4 className="banner-title">Connection Error</h4>
                  <p className="banner-message">Unable to connect to the server. Please try again.</p>
                </div>
                <Button variant="ghost" className="banner-close">×</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">Form Components</h2>
          
          {/* Login Form Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">Login Form Example</h3>
            <form className="max-w-md space-y-4">
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Password" type="password" />
              <div className="flex items-center justify-between">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Button variant="ghost" className="text-small">Forgot password?</Button>
              </div>
              <Button variant="solid" className="w-full">Sign In</Button>
            </form>
          </div>

          {/* Contact Form Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">Contact Form Example</h3>
            {isClient ? (
              <form className="max-w-md space-y-4">
                <Form.Field label="Full Name" required>
                  <Input placeholder="Your name" />
                </Form.Field>
                <Form.Field label="Email Address" required>
                  <Input placeholder="Email address" type="email" />
                </Form.Field>
                <Form.Field label="Message">
                  <Textarea placeholder="Your message" rows={4} />
                </Form.Field>
                <div className="flex items-center gap-3">
                  <Form.Checkbox id="newsletter" />
                  <label htmlFor="newsletter" className="text-small">Subscribe to newsletter</label>
                </div>
                <Button variant="solid" className="w-full">Send Message</Button>
              </form>
            ) : (
              <div className="max-w-md space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Full Name *</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Email Address *</label>
                  <Input placeholder="Email address" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Message</label>
                  <Textarea placeholder="Your message" rows={4} />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="checkbox" />
                  <label className="text-small">Subscribe to newsletter</label>
                </div>
                <Button variant="solid" className="w-full">Send Message</Button>
              </div>
            )}
          </div>

          {/* Advanced Form Controls */}
          <div className="mb-8">
            <h3 className="content-subtitle">Advanced Form Controls</h3>
            {isClient ? (
              <div className="max-w-md space-y-6">
                <Form.Field label="File Upload">
                  <Form.FileUpload 
                    accept="image/*"
                    placeholder="Drop your image here or click to browse"
                  />
                </Form.Field>
                
                <Form.Field label="Preferences">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Form.Radio name="plan" value="basic" id="basic" />
                      <label htmlFor="basic">Basic Plan</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Form.Radio name="plan" value="pro" id="pro" />
                      <label htmlFor="pro">Pro Plan</label>
                    </div>
                  </div>
                </Form.Field>

                <Form.Field label="Notifications">
                  <div className="flex items-center justify-between">
                    <span className="text-small">Email notifications</span>
                    <Form.Switch />
                  </div>
                </Form.Field>
              </div>
            ) : (
              <div className="max-w-md space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">File Upload</label>
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                    <p className="text-muted">Drop your image here or click to browse</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Preferences</label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="plan" value="basic" className="radio" />
                      <label>Basic Plan</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="plan" value="pro" className="radio" />
                      <label>Pro Plan</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-white">Notifications</label>
                  <div className="flex items-center justify-between">
                    <span className="text-small">Email notifications</span>
                    <div className="switch">
                      <input type="checkbox" className="switch-input" />
                      <span className="switch-slider"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Icon Buttons */}
          <div className="mb-8">
            <h3 className="content-subtitle">Icon Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Form.IconButton size="sm" icon="📝" />
              <Form.IconButton size="md" icon="🗑️" />
              <Form.IconButton size="lg" icon="⚙️" />
              <Form.IconButton variant="solid" icon="💾" />
              <Form.IconButton variant="outline" icon="📤" />
              <Form.IconButton variant="ghost" icon="🔍" />
            </div>
          </div>

          {/* Select Components */}
          <div className="mb-8">
            <h3 className="content-subtitle">Select Components</h3>
            <div className="grid-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="label">Country</label>
                  <select className="select">
                    <option>Select country</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Spain</option>
                    <option>Italy</option>
                  </select>
                </div>
                
                <div>
                  <label className="label">Language</label>
                  <select className="select select--sm">
                    <option>English</option>
                    <option>Français</option>
                    <option>Deutsch</option>
                    <option>Español</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="label">Priority</label>
                  <select className="select select--lg">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
                
                <div>
                  <label className="label">Status</label>
                  <select className="select" disabled>
                    <option>Disabled select</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Form Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">Settings Form Example</h3>
            <form className="max-w-lg space-y-6">
              <div className="space-y-4">
                <Input placeholder="Display name" defaultValue="John Doe" />
                <Textarea placeholder="Bio" rows={3} />
                <select className="select">
                  <option>Select timezone</option>
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Notifications</h4>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="switch-slider"></span>
                  <span>Email notifications</span>
                </label>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="switch-slider"></span>
                  <span>Push notifications</span>
                </label>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Privacy</h4>
                <div className="space-y-2">
                  <label className="radio">
                    <input type="radio" name="privacy" defaultChecked />
                    <span>Public profile</span>
                  </label>
                  <label className="radio">
                    <input type="radio" name="privacy" />
                    <span>Private profile</span>
                  </label>
                </div>
              </div>

              <div className="file-upload">
                <input type="file" className="file-input" accept="image/*" />
                <div className="file-upload-area">
                  <div className="file-upload-icon">📁</div>
                  <p>Upload profile picture</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="solid">Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </form>
          </div>

          {/* Button Variants Showcase */}
          <div className="mb-8">
            <h3 className="content-subtitle">Button Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="solid">Primary</Button>
              <Button variant="outline">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>

          {/* Input States */}
          <div className="mb-8">
            <h3 className="content-subtitle">Input States</h3>
            <div className="max-w-md space-y-3">
              <Input placeholder="Normal input" />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Error state" className="input--error" />
            </div>
          </div>
        </div>

        {/* Data Display Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">Data Display Components</h2>
          
          {/* User Profile Card */}
          <div className="mb-8">
            <h3 className="content-subtitle">User Profile Card</h3>
            <div className="max-w-sm profile-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="avatar avatar--lg">JD</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">John Doe</h4>
                    <span className="badge badge--success">Active</span>
                  </div>
                  <p className="text-small text-muted">john@example.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Profile completion</span>
                  <span>75%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Table */}
          <div className="mb-8">
            <h3 className="content-subtitle">Team Members</h3>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar avatar--sm">JD</div>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-small text-muted">john@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge badge--warning">Admin</span></td>
                    <td><span className="badge badge--success">Active</span></td>
                    <td className="text-muted">2 min ago</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar avatar--sm">JS</div>
                        <div>
                          <div className="font-medium">Jane Smith</div>
                          <div className="text-small text-muted">jane@example.com</div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge badge--primary">Editor</span></td>
                    <td><span className="badge badge--error">Inactive</span></td>
                    <td className="text-muted">1 hour ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Loading States */}
          <div className="mb-8">
            <h3 className="content-subtitle">Loading States</h3>
            <div className="grid-2">
              <div>
                <h4 className="font-medium mb-3">Loading Content</h4>
                <div className="space-y-3">
                  <div className="skeleton skeleton--line"></div>
                  <div className="skeleton skeleton--line" style={{width: '80%'}}></div>
                  <div className="skeleton skeleton--line" style={{width: '60%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Loading Spinner</h4>
                <div className="flex items-center gap-4">
                  <div className="spinner w-6 h-6"></div>
                  <span className="text-small text-muted">Loading...</span>
                </div>
              </div>
            </div>
          </div>

          {/* DataDisplay Components */}
          <div className="mb-8">
            <h3 className="content-subtitle">DataDisplay Components</h3>
            <div className="space-y-6">
              {/* Avatars */}
              <div>
                <h4 className="font-medium mb-3">Avatars</h4>
                <div className="flex items-center gap-4">
                  <div className="avatar avatar--sm">JD</div>
                  <div className="avatar avatar--md">JS</div>
                  <div className="avatar avatar--lg">MJ</div>
                  <div className="avatar avatar--xl">SW</div>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h4 className="font-medium mb-3">Badges</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="badge badge--default">Default</span>
                  <span className="badge badge--primary">Primary</span>
                  <span className="badge badge--success">Success</span>
                  <span className="badge badge--warning">Warning</span>
                  <span className="badge badge--error">Error</span>
                </div>
              </div>

              {/* Typed Badges */}
              <div>
                <h4 className="font-medium mb-3">Typed Badges</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="badge-typed badge-typed--user">
                    <span className="badge-typed-icon">👤</span>
                    <span className="badge-typed-label">User</span>
                  </span>
                  <span className="badge-typed badge-typed--admin">
                    <span className="badge-typed-icon">👑</span>
                    <span className="badge-typed-label">Admin</span>
                  </span>
                  <span className="badge-typed badge-typed--premium">
                    <span className="badge-typed-icon">⭐</span>
                    <span className="badge-typed-label">Premium</span>
                  </span>
                  <span className="badge-typed badge-typed--enterprise">
                    <span className="badge-typed-icon">🏢</span>
                    <span className="badge-typed-label">Enterprise</span>
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div>
                <h4 className="font-medium mb-3">Progress Bars</h4>
                <div className="space-y-3">
                  <div className="progress">
                    <div className="progress-bar" style={{width: '25%'}}></div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '50%'}}></div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '75%'}}></div>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div>
                <h4 className="font-medium mb-3">Data Table</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td><span className="badge badge--warning">Admin</span></td>
                      <td><span className="badge badge--success">Active</span></td>
                    </tr>
                    <tr>
                      <td>Jane Smith</td>
                      <td><span className="badge badge--primary">Editor</span></td>
                      <td><span className="badge badge--success">Active</span></td>
                    </tr>
                    <tr>
                      <td>Mike Johnson</td>
                      <td><span className="badge badge--default">Viewer</span></td>
                      <td><span className="badge badge--error">Inactive</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="mb-8">
            <h3 className="content-subtitle">Empty State</h3>
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <h4 className="empty-state-title">No projects yet</h4>
              <p className="empty-state-description">Get started by creating your first project</p>
              <Button variant="solid">Create Project</Button>
            </div>
          </div>

          {/* Badge Variants */}
          <div className="mb-8">
            <h3 className="content-subtitle">Status Badges</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge--default">Draft</span>
              <span className="badge badge--success">Published</span>
              <span className="badge badge--warning">Pending</span>
              <span className="badge badge--error">Failed</span>
            </div>
          </div>
        </div>

        {/* Navigation Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">Navigation Components</h2>
          
          {/* App Navigation Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">App Navigation</h3>
            <nav className="breadcrumb mb-4">
              <a href="/">Dashboard</a>
              <span className="breadcrumb-separator">/</span>
              <a href="/projects">Projects</a>
              <span className="breadcrumb-separator">/</span>
              <span>My Project</span>
            </nav>
            
            {Navigation?.Tabs ? (
              <Navigation.Tabs
                tabs={[
                  { id: "overview", label: "Overview", content: <div className="p-4">Project overview content</div> },
                  { id: "files", label: "Files", content: <div className="p-4">Files content</div> },
                  { id: "settings", label: "Settings", content: <div className="p-4">Settings content</div> }
                ]}
              />
            ) : (
              <div className="tabs">
                <div className="tab tab--active">Overview</div>
                <div className="tab">Files</div>
                <div className="tab">Settings</div>
              </div>
            )}
          </div>

          {/* Pagination Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">Table with Pagination</h3>
            <div className="space-y-4">
              <div className="text-small text-muted">Showing 1-10 of 247 results</div>
              <div className="pagination">
                <Button variant="ghost" className="pagination-btn pagination-btn--prev">‹</Button>
                <Button variant="ghost" className="pagination-btn">1</Button>
                <Button variant="ghost" className="pagination-btn pagination-btn--active">2</Button>
                <Button variant="ghost" className="pagination-btn">3</Button>
                <span className="pagination-dots">...</span>
                <Button variant="ghost" className="pagination-btn">25</Button>
                <Button variant="ghost" className="pagination-btn pagination-btn--next">›</Button>
              </div>
            </div>
          </div>

          {/* Stepper Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">Checkout Process</h3>
            <div className="stepper">
              <div className="step step--completed">
                <div className="step-indicator">✓</div>
                <div className="step-title">Cart</div>
              </div>
              <div className="step step--current">
                <div className="step-indicator">2</div>
                <div className="step-title">Shipping</div>
              </div>
              <div className="step step--upcoming">
                <div className="step-indicator">3</div>
                <div className="step-title">Payment</div>
              </div>
              <div className="step step--upcoming">
                <div className="step-indicator">4</div>
                <div className="step-title">Confirmation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Components */}
        <div className="mb-16">
          <h2 className="content-title">Layout Components</h2>
          
          {/* Sidebar */}
          <div className="mb-8">
            <h3 className="content-subtitle">Sidebar Navigation</h3>
            <div className="grid-4 min-h-400">
              <div className="sidebar">
                <nav className="sidebar-nav">
                  <a href="#" className="sidebar-item sidebar-item--active">
                    <span className="sidebar-icon">📊</span>
                    <span>Dashboard</span>
                  </a>
                  <a href="#" className="sidebar-item">
                    <span className="sidebar-icon">📁</span>
                    <span>Projects</span>
                  </a>
                  <a href="#" className="sidebar-item">
                    <span className="sidebar-icon">👥</span>
                    <span>Team</span>
                  </a>
                  <a href="#" className="sidebar-item">
                    <span className="sidebar-icon">⚙️</span>
                    <span>Settings</span>
                  </a>
                </nav>
              </div>
              <div className="col-span-3 surface p-6">
                <h4 className="font-medium mb-2">Main Content Area</h4>
                <p className="text-muted">This is where the main content would be displayed when using the sidebar layout.</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mb-8">
            <h3 className="content-subtitle">Footer</h3>
            <footer className="footer">
              <div className="footer-content">
                <div className="footer-links">
                  <a href="/about" className="footer-link">About</a>
                  <a href="/privacy" className="footer-link">Privacy</a>
                  <a href="/terms" className="footer-link">Terms</a>
                  <a href="/contact" className="footer-link">Contact</a>
                </div>
                <div className="footer-social">
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">GitHub</a>
                  <a href="#" className="social-link">LinkedIn</a>
                </div>
                <div className="footer-copyright">
                  © 2024 AVNIR Studio. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
        </div>

        {/* Marketing Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">Marketing Components</h2>
          
          {/* Landing Page Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">Landing Page Layout</h3>
            <Marketing.Hero
              title="Transform Your Business"
              subtitle="Powerful tools and insights to help your business grow faster than ever before"
              actions={
                <div className="hero-actions">
                  <Button variant="solid">Start Free Trial</Button>
                  <Button variant="outline">Watch Demo</Button>
                </div>
              }
            />
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <Marketing.Features
              title="Why Choose Our Platform"
              subtitle="Everything you need to succeed in one place"
              items={[
                { title: "Lightning Fast", description: "Optimized for speed and performance" },
                { title: "Secure & Reliable", description: "Enterprise-grade security you can trust" },
                { title: "Easy Integration", description: "Connect with your existing tools seamlessly" },
                { title: "24/7 Support", description: "Get help whenever you need it" }
              ]}
              columns={2}
            />
          </div>

          {/* Social Proof */}
          <div className="mb-8">
            <Marketing.Testimonials
              items={[
                { quote: "This platform transformed how we work. Highly recommended!", author: "Sarah Johnson", role: "CEO, TechCorp" },
                { quote: "The best investment we've made for our business growth.", author: "Mike Chen", role: "Founder, StartupXYZ" }
              ]}
            />
          </div>

          {/* Call to Action */}
          <div className="mb-8">
            <Marketing.CtaSection
              title="Ready to Get Started?"
              subtitle="Join thousands of satisfied customers and transform your business today"
              actions={<Button variant="solid">Start Your Free Trial</Button>}
            />
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h3 className="content-subtitle">FAQ Section</h3>
            <Marketing.Faq
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our service"
              items={[
                { q: "How long is the free trial?", a: "You get 14 days completely free with full access to all features." },
                { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time with no questions asked." },
                { q: "Do you offer customer support?", a: "We provide 24/7 customer support via chat, email, and phone." }
              ]}
            />
          </div>

          {/* Contact Block */}
          <div className="mb-8">
            <h3 className="content-subtitle">Contact Block</h3>
            <div className="contact-block">
              <div className="contact-block-content">
                <h4 className="contact-block-title">Get in Touch</h4>
                <p className="contact-block-description">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <div className="contact-block-info">
                  <div className="contact-info-item">
                    <span className="contact-info-icon">📧</span>
                    <span className="contact-info-text">hello@avnir.studio</span>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-info-icon">📞</span>
                    <span className="contact-info-text">+33 1 23 45 67 89</span>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-info-icon">📍</span>
                    <span className="contact-info-text">Paris, France</span>
                  </div>
                </div>
                <div className="contact-block-actions">
                  <Button variant="solid">Contact Us</Button>
                  <Button variant="outline">Schedule Call</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-8">
            <Marketing.Newsletter
              title="Stay Updated"
              subtitle="Get the latest product updates and industry insights delivered to your inbox"
              onSubmit={(email) => console.log("Newsletter signup:", email)}
            />
          </div>
        </div>

        {/* Overlay Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">Overlay Components</h2>
          
          {/* Modal Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">Modal Dialog</h3>
            <div className="flex gap-3 mb-4">
              <Button>Open Modal</Button>
              <Button variant="outline">Delete Item</Button>
            </div>
            <div className="modal-demo">
              <div className="modal-backdrop"></div>
              <div className="modal">
                <div className="modal-header">
                  <h4>Confirm Delete</h4>
                  <Button variant="ghost" className="modal-close">×</Button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                  <div className="flex gap-3 mt-4">
                    <Button variant="solid" className="btn-danger">Delete</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay Components */}
          <div className="mb-8">
            <h3 className="content-subtitle">Overlay Components</h3>
            <div className="flex flex-wrap gap-4">
              <div className="tooltip-demo">
                <Button variant="outline">Hover for tooltip</Button>
                <div className="tooltip">This is a helpful tooltip</div>
              </div>
              
              <div className="popover-demo">
                <Button variant="outline">Click for popover</Button>
                <div className="popover">
                  <div className="p-4">
                    <h4 className="font-medium mb-2">Popover Content</h4>
                    <p className="text-small text-muted">This is additional information in a popover.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notifications */}
          <div className="mb-8">
            <h3 className="content-subtitle">Toast Notifications</h3>
            <div className="flex gap-3 mb-4">
              <Button variant="outline">Show Success Toast</Button>
              <Button variant="outline">Show Warning Toast</Button>
            </div>
            <div className="space-y-3">
              <div className="toast toast--success">
                <span>✅ Success! Operation completed.</span>
                <button className="toast-close">×</button>
              </div>
              <div className="toast toast--warning">
                <span>⚠️ Warning: Please check your input.</span>
                <button className="toast-close">×</button>
              </div>
            </div>
          </div>

          {/* Tooltip Example */}
          <div className="mb-8">
            <h3 className="content-subtitle">Tooltips</h3>
            <div className="flex gap-4">
              <div className="tooltip-demo">
                <Button>Hover for tooltip</Button>
                <div className="tooltip">This explains what the button does</div>
              </div>
              <div className="tooltip-demo">
                <span className="badge badge--warning">Status</span>
                <div className="tooltip">Current processing status</div>
              </div>
            </div>
          </div>

          {/* Toast Notifications */}
          <div className="mb-8">
            <h3 className="content-subtitle">Toast Notifications</h3>
            <div className="space-y-3">
              <div className="toast toast--success">
                <span>✓ Changes saved successfully!</span>
                <button className="toast-close">×</button>
              </div>
              <div className="alert alert--warning">
                <span>⚠ Your session will expire in 5 minutes</span>
              </div>
              <div className="alert alert--error">
                <span>✗ Failed to upload file. Please try again.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ecommerce Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">Ecommerce Components</h2>
          
          {/* Mega Menu */}
          <div className="mb-8">
            <h3 className="content-subtitle">Mega Menu Navigation</h3>
            <div className="mega-menu">
              <div className="mega-menu-trigger">
                <button className="mega-menu-button">
                  Categories
                  <span className="mega-menu-arrow">▼</span>
                </button>
              </div>
              <div className="mega-menu-content">
                <div className="mega-menu-grid">
                  <div className="mega-menu-section">
                    <h4 className="mega-menu-title">Electronics</h4>
                    <ul className="mega-menu-list">
                      <li><a href="#" className="mega-menu-link">Smartphones</a></li>
                      <li><a href="#" className="mega-menu-link">Laptops</a></li>
                      <li><a href="#" className="mega-menu-link">Tablets</a></li>
                      <li><a href="#" className="mega-menu-link">Accessories</a></li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h4 className="mega-menu-title">Clothing</h4>
                    <ul className="mega-menu-list">
                      <li><a href="#" className="mega-menu-link">Men's</a></li>
                      <li><a href="#" className="mega-menu-link">Women's</a></li>
                      <li><a href="#" className="mega-menu-link">Kids</a></li>
                      <li><a href="#" className="mega-menu-link">Shoes</a></li>
                    </ul>
                  </div>
                  <div className="mega-menu-section">
                    <h4 className="mega-menu-title">Home & Garden</h4>
                    <ul className="mega-menu-list">
                      <li><a href="#" className="mega-menu-link">Furniture</a></li>
                      <li><a href="#" className="mega-menu-link">Decor</a></li>
                      <li><a href="#" className="mega-menu-link">Kitchen</a></li>
                      <li><a href="#" className="mega-menu-link">Garden</a></li>
                    </ul>
                  </div>
                  <div className="mega-menu-featured">
                    <div className="mega-menu-promo">
                      <h4 className="mega-menu-promo-title">Featured Deal</h4>
                      <p className="mega-menu-promo-text">Up to 50% off selected items</p>
                      <button className="btn btn--sm btn--primary">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Display */}
          <div className="mb-8">
            <h3 className="content-subtitle">Price Components</h3>
            <div className="grid-3 gap-6">
              <div className="surface p-4">
                <div className="price price--lg">€29.99</div>
              </div>
              <div className="surface p-4">
                <div className="price-group">
                  <span className="price price--md">€49.99</span>
                  <span className="price-original">€69.99</span>
                </div>
              </div>
              <div className="surface p-4">
                <div className="price price--sm price--premium">€199.99</div>
              </div>
            </div>
          </div>

          {/* Mini Cart */}
          <div className="mb-8">
            <h3 className="content-subtitle">Mini Cart</h3>
            <div className="max-w-sm">
              <div className="cart-mini">
                <div className="cart-items">
                  <div className="cart-item">
                    <div className="cart-item-image">🎧</div>
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">Wireless Headphones</h4>
                      <div className="cart-item-price">€99.99 × 1</div>
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="cart-item-image">📱</div>
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">Smartphone Case</h4>
                      <div className="cart-item-price">€24.99 × 2</div>
                    </div>
                  </div>
                </div>
                <div className="cart-total">
                  <div className="cart-total-amount">Total: €149.97</div>
                  <Button variant="solid" className="w-full">Checkout</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Steps */}
          <div className="mb-8">
            <h3 className="content-subtitle">Checkout Process</h3>
            <div className="checkout-steps">
              <div className="step step--completed">
                <div className="step-indicator">1</div>
                <div className="step-title">Cart</div>
              </div>
              <div className="step step--active">
                <div className="step-indicator">2</div>
                <div className="step-title">Shipping</div>
              </div>
              <div className="step step--upcoming">
                <div className="step-indicator">3</div>
                <div className="step-title">Payment</div>
              </div>
              <div className="step step--upcoming">
                <div className="step-indicator">4</div>
                <div className="step-title">Confirmation</div>
              </div>
            </div>
          </div>

          {/* Variant Swatches */}
          <div className="mb-8">
            <h3 className="content-subtitle">Product Variants</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Color</h4>
                <div className="variant-swatches">
                  <button className="swatch swatch--color" style={{backgroundColor: 'var(--red)'}} aria-label="Red"></button>
                  <button className="swatch swatch--color swatch--selected" style={{backgroundColor: 'var(--blue)'}} aria-label="Blue"></button>
                  <button className="swatch swatch--color" style={{backgroundColor: 'var(--green)'}} aria-label="Green"></button>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Size</h4>
                <div className="variant-swatches">
                  <button className="swatch swatch--size">XS</button>
                  <button className="swatch swatch--size">S</button>
                  <button className="swatch swatch--size swatch--selected">M</button>
                  <button className="swatch swatch--size">L</button>
                  <button className="swatch swatch--size">XL</button>
                </div>
              </div>
            </div>
          </div>

          {/* Media Gallery */}
          <div className="mb-8">
            <h3 className="content-subtitle">Product Gallery</h3>
            <div className="media-gallery">
              <div className="gallery-main">
                <img src="/placeholder.jpg" alt="Product main view" className="gallery-image" />
              </div>
              <div className="gallery-thumbs">
                <img src="/placeholder.jpg" alt="Product view 1" className="gallery-thumb gallery-thumb--active" />
                <img src="/placeholder.jpg" alt="Product view 2" className="gallery-thumb" />
                <img src="/placeholder.jpg" alt="Product view 3" className="gallery-thumb" />
              </div>
            </div>
          </div>

          {/* Product Filters */}
          <div className="mb-8">
            <h3 className="content-subtitle">Product Filters</h3>
            <div className="filters">
              <div className="filter-group">
                <h4 className="filter-title">Category</h4>
                <div className="filter-options">
                  <label className="filter-option">
                    <input type="checkbox" className="filter-checkbox" />
                    <span>Electronics (24)</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" className="filter-checkbox" />
                    <span>Clothing (18)</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" className="filter-checkbox" />
                    <span>Books (12)</span>
                  </label>
                </div>
              </div>
              <div className="filter-group">
                <h4 className="filter-title">Price Range</h4>
                <div className="filter-range">
                  <input type="range" min="0" max="500" className="range-slider" />
                  <div className="range-values">€0 - €500</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Catalog */}
          <div className="mb-8">
            <h3 className="content-subtitle">Product Catalog</h3>
            <div className="grid-3">
              <div className="product-card">
                <div className="product-image">💻</div>
                <h4 className="product-title">MacBook Pro</h4>
                <p className="product-description">Powerful laptop for professionals</p>
                <div className="product-price">
                  <span className="price price--lg">$1,999</span>
                </div>
                <Button variant="solid" className="w-full mt-3">Add to Cart</Button>
              </div>
              <div className="product-card">
                <div className="product-image">📱</div>
                <h4 className="product-title">iPhone 15</h4>
                <p className="product-description">Latest smartphone technology</p>
                <div className="product-price">
                  <span className="price price--lg">
                    <span className="price-current">$899</span>
                    <span className="price-original">$999</span>
                  </span>
                </div>
                <Button variant="solid" className="w-full mt-3">Add to Cart</Button>
              </div>
              <div className="product-card">
                <div className="product-image">🎧</div>
                <h4 className="product-title">AirPods Pro</h4>
                <p className="product-description">Premium wireless earbuds</p>
                <div className="product-price">
                  <span className="price price--md">$249</span>
                </div>
                <Button variant="solid" className="w-full mt-3">Add to Cart</Button>
              </div>
            </div>
          </div>

          {/* Price Variants */}
          <div className="mb-8">
            <h3 className="content-subtitle">Pricing Display</h3>
            <div className="flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-small text-muted mb-1">Small</div>
                <div className="price price--sm">$19.99</div>
              </div>
              <div className="text-center">
                <div className="text-small text-muted mb-1">Medium</div>
                <div className="price price--md">$49.99</div>
              </div>
              <div className="text-center">
                <div className="text-small text-muted mb-1">Large with Sale</div>
                <div className="price price--lg">
                  <span className="price-current">$79.99</span>
                  <span className="price-original">$99.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SaaS Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">SaaS Components</h2>
          
          {/* Subscription Plans */}
          <div className="mb-8">
            <h3 className="content-subtitle">Choose Your Plan</h3>
            {Saas?.PricingTable ? (
              <Saas.PricingTable
                plans={[
                  {
                    id: "starter",
                    name: "Starter",
                    price: "Free",
                    features: ["Up to 3 projects", "Basic analytics", "Community support", "1GB storage"],
                    cta: { label: "Get Started" }
                  },
                  {
                    id: "professional",
                    name: "Professional", 
                    price: "$29/month",
                    features: ["Unlimited projects", "Advanced analytics", "Priority support", "100GB storage", "Team collaboration", "Custom integrations"],
                    cta: { label: "Start Free Trial" },
                    popular: true
                  },
                  {
                    id: "enterprise",
                    name: "Enterprise",
                    price: "Custom", 
                    features: ["Everything in Pro", "Dedicated support", "Custom deployment", "Unlimited storage", "Advanced security"],
                    cta: { label: "Contact Sales" }
                  }
                ]}
              />
            ) : (
              <div className="pricing-table">
                <div className="pricing-plan">
                  <h4 className="plan-name">Starter</h4>
                  <div className="plan-price">Free</div>
                  <ul className="plan-features">
                    <li>Up to 3 projects</li>
                    <li>Basic analytics</li>
                    <li>Community support</li>
                    <li>1GB storage</li>
                  </ul>
                  <Button variant="outline" className="w-full">Get Started</Button>
                </div>
                <div className="pricing-plan pricing-plan--popular">
                  <div className="plan-badge">Most Popular</div>
                  <h4 className="plan-name">Professional</h4>
                  <div className="plan-price">$29/month</div>
                  <ul className="plan-features">
                    <li>Unlimited projects</li>
                    <li>Advanced analytics</li>
                    <li>Priority support</li>
                    <li>100GB storage</li>
                    <li>Team collaboration</li>
                    <li>Custom integrations</li>
                  </ul>
                  <Button variant="solid" className="w-full">Start Free Trial</Button>
                </div>
                <div className="pricing-plan">
                  <h4 className="plan-name">Enterprise</h4>
                  <div className="plan-price">Custom</div>
                  <ul className="plan-features">
                    <li>Everything in Pro</li>
                    <li>Dedicated support</li>
                    <li>Custom deployment</li>
                    <li>Unlimited storage</li>
                    <li>Advanced security</li>
                  </ul>
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* System Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">System Components</h2>
          
          {/* Theme Controls */}
          <div className="mb-8">
            <h3 className="content-subtitle">Theme Controls</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-small">Theme:</span>
                <System.ThemeToggle />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-small">Brand:</span>
                <System.BrandThemeSelector />
              </div>
            </div>
          </div>

          {/* Error States */}
          <div className="mb-8">
            <h3 className="content-subtitle">Error Handling</h3>
            <div className="error-boundary">
              <div className="error-icon">⚠️</div>
              <h4>Something went wrong</h4>
              <p>An error occurred while rendering this component.</p>
              <Button variant="outline">Try again</Button>
            </div>
          </div>

          {/* Loading States */}
          <div className="mb-8">
            <h3 className="content-subtitle">Loading States</h3>
            <div className="loading-boundary">
              <div className="spinner spinner--md"></div>
              <p>Loading your content...</p>
            </div>
          </div>
        </div>

        {/* AVNIR Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">AVNIR Components</h2>
          
          {/* Project Dashboard */}
          <div className="mb-8">
            <h3 className="content-subtitle">Project Dashboard</h3>
            <div className="grid-2">
              <div className="project-card">
                <div className="project-thumbnail">🎨</div>
                <div className="project-info">
                  <h4 className="project-title">Website Redesign</h4>
                  <p className="project-description">Modern redesign of company website</p>
                  <div className="project-meta">
                    <span className="project-status">Active</span>
                    <span className="project-date">2 hours ago</span>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-thumbnail">📱</div>
                <div className="project-info">
                  <h4 className="project-title">Mobile App</h4>
                  <p className="project-description">iOS and Android application</p>
                  <div className="project-meta">
                    <span className="project-status">In Review</span>
                    <span className="project-date">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="mb-8">
            <h3 className="content-subtitle">Account Status</h3>
            <div className="flex gap-6">
              <div className="credit-balance">
                <div className="credit-icon">💎</div>
                <div className="credit-amount">150</div>
                <div className="credit-label">Credits</div>
              </div>
              <div className="render-status">
                <div className="render-progress">
                  <div className="render-progress-bar" style={{width: '65%'}}></div>
                </div>
                <div className="render-info">
                  <span className="render-status-text">Processing...</span>
                  <span className="render-percentage">65%</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Model Selection */}
          <div className="mb-8">
            <h3 className="content-subtitle">AI Model Selection</h3>
            <div className="model-selector">
              <select className="select">
                <option>GPT-4 - Most capable model</option>
                <option>GPT-3.5 - Fast and efficient</option>
                <option>Claude - Anthropic model</option>
              </select>
            </div>
          </div>
        </div>


        {/* Feedback Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">Feedback Components</h2>
          
          {/* Notification Center */}
          <div className="mb-8">
            <h3 className="content-subtitle">System Notifications</h3>
            <div className="space-y-3">
              <div className="alert alert--success">
                ✓ Your profile has been updated successfully
              </div>
              <div className="alert alert--warning">
                ⚠ Your subscription expires in 3 days. Renew now to avoid interruption.
              </div>
              <div className="alert alert--error">
                ✗ Failed to save changes. Please check your connection and try again.
              </div>
              <div className="alert alert--info">
                ℹ New features are available! Check out our latest updates.
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mb-8">
            <h3 className="content-subtitle">Task Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Project Setup</span>
                  <span>25%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{width: '25%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Development</span>
                  <span>50%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{width: '50%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Testing</span>
                  <span>75%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Deployment</span>
                  <span>100%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Primitives Components - Real Usage Context */}
        <div className="mb-16">
          <h2 className="content-title">Primitive Components</h2>
          
          {/* Layout Structure */}
          <div className="mb-8">
            <h3 className="content-subtitle">Layout Structure</h3>
            <div className="container">
              <p className="text-lg mb-4">This content is inside a container with max-width and centering</p>
              
              <div className="space-y-4">
                <p className="text-lg">Large heading text for titles and important content</p>
                <p className="text-md">Medium body text for regular paragraphs and descriptions</p>
                <p className="text-small text-muted">Small text for captions, metadata, and secondary information</p>
              </div>
              
              <hr className="separator" />
              
              <p className="text-md">Content below the separator shows visual division between sections</p>
            </div>
          </div>

          {/* Typography Scale */}
          <div className="mb-8">
            <h3 className="content-subtitle">Typography in Context</h3>
            <article className="max-w-2xl">
              <h1 className="text-lg font-bold mb-4">Article Title</h1>
              <p className="text-md mb-4">This is the main body text that would be used for article content, descriptions, and general reading material. It provides good readability and comfortable line spacing.</p>
              <p className="text-small text-muted mb-4">Published on March 15, 2024 • 5 min read</p>
              <hr className="separator" />
              <p className="text-small">Tags: Design System, Components, Typography</p>
            </article>
          </div>
        </div>

        {/* AVNIR Specific Components */}
        <div className="mb-16">
          <h2 className="content-title">AVNIR Specific Components</h2>
          
          {/* Project Cards */}
          <div className="mb-8">
            <h3 className="content-subtitle">Project Components</h3>
            <div className="grid-2 gap-6">
              <div className="project-card">
                <div className="project-thumbnail">🎨</div>
                <div className="project-content">
                  <h4 className="project-title">AI Portrait Generator</h4>
                  <p className="project-description">Create stunning AI-powered portraits with advanced customization options</p>
                  <div className="project-meta">
                    <span className="project-status project-status--active">Active</span>
                    <span className="project-progress">75% complete</span>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-thumbnail">🏞️</div>
                <div className="project-content">
                  <h4 className="project-title">Landscape Collection</h4>
                  <p className="project-description">Beautiful landscape scenes generated with our latest AI models</p>
                  <div className="project-meta">
                    <span className="project-status project-status--completed">Completed</span>
                    <span className="project-progress">100% complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asset Gallery */}
          <div className="mb-8">
            <h3 className="content-subtitle">Asset Gallery</h3>
            <div className="asset-grid">
              <div className="asset-tile">
                <div className="asset-image">🖼️</div>
                <div className="asset-overlay">
                  <button className="asset-select">Select</button>
                </div>
              </div>
              <div className="asset-tile asset-tile--selected">
                <div className="asset-image">🎭</div>
                <div className="asset-overlay">
                  <button className="asset-select">Selected</button>
                </div>
              </div>
              <div className="asset-tile">
                <div className="asset-image">🌟</div>
                <div className="asset-overlay">
                  <button className="asset-select">Select</button>
                </div>
              </div>
              <div className="asset-tile">
                <div className="asset-image">✨</div>
                <div className="asset-overlay">
                  <button className="asset-select">Select</button>
                </div>
              </div>
            </div>
          </div>

          {/* AI Tools Interface */}
          <div className="mb-8">
            <h3 className="content-subtitle">AI Generation Interface</h3>
            <div className="ai-interface">
              <div className="ai-model-selector">
                <h4 className="font-medium mb-3">AI Model</h4>
                <select className="select">
                  <option>Stable Diffusion</option>
                  <option>Midjourney</option>
                  <option>DALL-E</option>
                </select>
              </div>
              
              <div className="ai-prompt-editor">
                <h4 className="font-medium mb-3">Prompt</h4>
                <Textarea 
                  placeholder="A beautiful sunset over mountains, digital art style"
                  rows={3}
                />
                <div className="prompt-suggestions">
                  <button className="suggestion-tag">digital art</button>
                  <button className="suggestion-tag">photorealistic</button>
                  <button className="suggestion-tag">oil painting</button>
                </div>
              </div>
            </div>
          </div>

          {/* Status Components */}
          <div className="mb-8">
            <h3 className="content-subtitle">Status & Credits</h3>
            <div className="status-grid">
              <div className="status-item">
                <span>Credit Balance</span>
                <div className="credit-balance">150 credits</div>
              </div>
              
              <div className="status-item">
                <span>Render Status</span>
                <div className="render-status render-status--processing">
                  <span>Processing (45%)</span>
                  <div className="render-progress">
                    <div className="render-progress-bar" style={{width: '45%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="status-item">
                <span>Permission Level</span>
                <div className="permission-badge permission-badge--premium">Premium</div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="font-semibold mb-4">📝 Instructions</h3>
          <div className="space-y-2 text-sm">
            <p>• <strong>Composants dans leur contexte naturel</strong> - Plus de cards artificielles !</p>
            <p>• <strong>Identifiez les ajustements</strong> nécessaires dans le rendu réel</p>
            <p>• <strong>Demandez-moi de modifier</strong> themes.css pour les corrections</p>
            <p>• <strong>Une fois finalisé</strong>, vous pourrez créer n'importe quelle app avec des consignes simples</p>
            <p>• <strong>Exemple</strong> : "Fais-moi une page avec Hero + FeatureGrid + PricingTable + FAQ"</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
