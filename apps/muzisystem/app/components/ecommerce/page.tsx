"use client";

import React from "react";
import { Badge, Button, Card, Ecommerce, Layout, Primitives } from "@avnir/ui";

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


export default function EcommercePage() {
  const [wishlist, setWishlist] = React.useState(false);
  const [selectedVariants, setSelectedVariants] = React.useState<Record<string, string>>({ color: 'blue', size: 'M' });

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="E-commerce Components"
        subtitle="Shopping cart, product cards, checkout flows, and everything needed to build online stores. Optimized for conversion."
      />

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="grid-4">
            <Card>
              <h2 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-bold)', color: 'var(--primary)', marginBottom: 'var(--margin-sm)' }}>10</h2>
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
        name="ProductCard"
        category="E-commerce"
        description="Product display card with image, title, price, and add to cart button. Supports badges and sale prices."
        variants={["default", "with-badge", "on-sale", "with-cta"]}
        preview={
          <Ecommerce.ProductCard
            image="/product-placeholder.jpg"
            title="Premium Headphones"
            price="€99.99"
            originalPrice="€129.99"
            badge="Sale"
            onAddToCart={() => console.log('Added to cart')}
          />
        }
      />

      <ComponentSection
        name="Price"
        category="E-commerce"
        description="Price display with currency, original price strikethrough, and size variants."
        variants={["sm", "md", "lg", "with-discount"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Ecommerce.Price amount={99.99} currency="€" size="lg" />
            <Ecommerce.Price amount={79.99} originalAmount={99.99} currency="€" size="md" />
          </div>
        }
      />

      <ComponentSection
        name="WishlistButton"
        category="E-commerce"
        description="Toggle button for adding/removing items from wishlist. Heart icon with active state."
        variants={["sm", "md", "lg", "active", "inactive"]}
        preview={
          <div style={{ display: 'flex', gap: 'var(--gap-md)', alignItems: 'center' }}>
            <Ecommerce.WishlistButton
              isInWishlist={wishlist}
              onChange={setWishlist}
              size="md"
            />
            <p className="text-small" style={{ color: 'var(--muted)' }}>
              {wishlist ? 'In wishlist' : 'Add to wishlist'}
            </p>
          </div>
        }
      />

      <ComponentSection
        name="CheckoutSteps"
        category="E-commerce"
        description="Step indicator for checkout process. Shows progress with completed, current, and upcoming steps."
        variants={["horizontal", "vertical", "with-descriptions"]}
        preview={
          <Ecommerce.CheckoutSteps
            steps={[
              { id: 'cart', title: 'Cart', completed: true, current: false },
              { id: 'shipping', title: 'Shipping', completed: false, current: true },
              { id: 'payment', title: 'Payment', completed: false, current: false },
              { id: 'confirm', title: 'Confirm', completed: false, current: false }
            ]}
          />
        }
      />

      <ComponentSection
        name="Reviews"
        category="E-commerce"
        description="Product reviews with star ratings, author info, and verified purchase badges."
        variants={["default", "with-summary", "with-verified"]}
        preview={
          <Ecommerce.Reviews
            averageRating={4.5}
            totalReviews={127}
            reviews={[
              { id: '1', author: 'John Doe', rating: 5, date: '2024-10-15', comment: 'Excellent product! Highly recommended.', verified: true },
              { id: '2', author: 'Jane Smith', rating: 4, date: '2024-10-10', comment: 'Good quality, fast shipping.' }
            ]}
          />
        }
      />

      <ComponentSection
        name="MiniCart"
        category="E-commerce"
        description="Dropdown cart with item list, quantities, and checkout button. Controlled or uncontrolled."
        variants={["default", "with-trigger", "empty"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Mini cart preview - Dropdown with cart items, quantities, total, and checkout button
            </p>
          </div>
        }
      />

      <ComponentSection
        name="MediaGallery"
        category="E-commerce"
        description="Product image gallery with thumbnails, zoom, and navigation. Supports images and videos."
        variants={["with-thumbnails", "with-zoom", "with-video"]}
        preview={
          <Ecommerce.MediaGallery
            media={[
              { id: '1', type: 'image', src: '/product-1.jpg', alt: 'Product view 1' },
              { id: '2', type: 'image', src: '/product-2.jpg', alt: 'Product view 2' },
              { id: '3', type: 'image', src: '/product-3.jpg', alt: 'Product view 3' }
            ]}
            showThumbnails
          />
        }
      />

      <ComponentSection
        name="VariantsSwatches"
        category="E-commerce"
        description="Product variant selector with color swatches, size buttons, and availability states."
        variants={["color", "size", "style", "text"]}
        preview={
          <Ecommerce.VariantsSwatches
            variantGroups={[
              {
                id: 'color',
                name: 'Color',
                type: 'color',
                variants: [
                  { id: 'blue', name: 'Blue', value: 'blue', available: true, color: '#3b82f6' },
                  { id: 'red', name: 'Red', value: 'red', available: true, color: '#ef4444' },
                  { id: 'green', name: 'Green', value: 'green', available: false, color: '#10b981' }
                ]
              },
              {
                id: 'size',
                name: 'Size',
                type: 'size',
                variants: [
                  { id: 'S', name: 'Small', value: 'S', available: true },
                  { id: 'M', name: 'Medium', value: 'M', available: true },
                  { id: 'L', name: 'Large', value: 'L', available: false }
                ]
              }
            ]}
            selectedVariants={selectedVariants}
            onVariantChange={(groupId, variantId) => setSelectedVariants({ ...selectedVariants, [groupId]: variantId })}
          />
        }
      />

      <ComponentSection
        name="FacetedSearch"
        category="E-commerce"
        description="Advanced product filtering with checkboxes, ranges, and active filter badges. Real-time results."
        variants={["with-search", "with-ranges", "with-badges"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Faceted search preview - Filters with checkboxes, price ranges, and active filter badges
            </p>
          </div>
        }
      />

      <ComponentSection
        name="MegaMenu"
        category="E-commerce"
        description="Large dropdown menu with sections, icons, and descriptions. Perfect for category navigation."
        variants={["with-sections", "with-icons", "with-badges"]}
        preview={
          <div style={{ backgroundColor: 'var(--bg)', padding: 'var(--padding-lg)', borderRadius: 'var(--radius-md)' }}>
            <p className="text-small" style={{ color: 'var(--muted)', textAlign: 'center' }}>
              Mega menu preview - Multi-column dropdown with categorized links and descriptions
            </p>
          </div>
        }
      />

      {/* Quick Start CTA */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ready to Build Your Store?"
            subtitle="Start selling with our comprehensive e-commerce components"
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
