import { Card, Layout } from "@avnir/ui";
import Link from "next/link";

const categories = [
  {
    name: "Form",
    slug: "form",
    description: "Input, Button, Checkbox, Radio, Select, Textarea, etc.",
    count: 12,
  },
  {
    name: "Layout",
    slug: "layout",
    description: "Container, Section, Grid, Stack, Navbar, Footer, etc.",
    count: 8,
  },
  {
    name: "Navigation",
    slug: "navigation",
    description: "Breadcrumbs, Tabs, Pagination, Menu, etc.",
    count: 6,
  },
  {
    name: "Data Display",
    slug: "data-display",
    description: "Table, List, Card, Badge, Avatar, etc.",
    count: 10,
  },
  {
    name: "Feedback",
    slug: "feedback",
    description: "Alert, Toast, Progress, Spinner, etc.",
    count: 7,
  },
  {
    name: "Overlay",
    slug: "overlay",
    description: "Modal, Drawer, Popover, Tooltip, etc.",
    count: 5,
  },
  {
    name: "Marketing",
    slug: "marketing",
    description: "Hero, Features, Testimonials, CTA, FAQ, etc.",
    count: 9,
  },
  {
    name: "E-commerce",
    slug: "ecommerce",
    description: "Product Card, Cart, Checkout, Filters, etc.",
    count: 8,
  },
  {
    name: "SaaS",
    slug: "saas",
    description: "Dashboard, Pricing, API Keys, Team, etc.",
    count: 6,
  },
  {
    name: "Primitives",
    slug: "primitives",
    description: "Low-level building blocks",
    count: 5,
  },
];

export default function ComponentsPage() {
  return (
    <>
      <Layout.PageHeader
        title="Components"
        subtitle="Browse our comprehensive collection of production-ready components organized by category"
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {categories.map((category) => (
              <Link key={category.slug} href={`/components/${category.slug}`}>
                <Card>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="component-count">{category.count} components</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
