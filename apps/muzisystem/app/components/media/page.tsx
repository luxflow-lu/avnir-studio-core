"use client";

import React from "react";
import { Badge, Button, Layout, Media, Primitives } from "@avnir/ui";

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


export default function MediaPage() {
  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Media Components"
        subtitle="Components for managing and displaying media assets including audio, video, images, and documents. Built for music production workflows."
      />

      <ComponentSection
        name="AssetTile"
        category="Media"
        description="Tile component for displaying media assets with thumbnail, metadata, status, and actions. Perfect for asset libraries and file managers."
        variants={["audio", "video", "image", "document", "preset"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Media.AssetTile
              id="1"
              name="Summer Vibes Beat.mp3"
              type="audio"
              status="ready"
              duration="3:45"
              size="4.2 MB"
              thumbnail="/placeholder-audio.jpg"
              createdAt={new Date('2024-01-15')}
              onPlay={() => console.log('Play')}
              onDownload={() => console.log('Download')}
              onDelete={() => console.log('Delete')}
            />
            <Media.AssetTile
              id="2"
              name="Studio Session.mp4"
              type="video"
              status="processing"
              duration="12:30"
              size="156 MB"
              thumbnail="/placeholder-video.jpg"
              createdAt={new Date('2024-01-20')}
              onPlay={() => console.log('Play')}
            />
            <Media.AssetTile
              id="3"
              name="Cover Art.png"
              type="image"
              status="ready"
              size="2.1 MB"
              thumbnail="/placeholder-image.jpg"
              createdAt={new Date('2024-01-25')}
              onDownload={() => console.log('Download')}
              onDelete={() => console.log('Delete')}
            />
          </div>
        }
      />
    </>
  );
}
