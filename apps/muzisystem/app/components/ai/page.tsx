"use client";

import React from "react";
import { AI, Badge, Button, Layout, Primitives } from "@avnir/ui";

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


export default function AIPage() {
  const [prompt, setPrompt] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("gpt-4");

  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="AI Components"
        subtitle="Components for AI-powered features including prompt editors, model selectors, and generation interfaces. Built for creative AI workflows."
      />

      <ComponentSection
        name="PromptEditor"
        category="AI"
        description="Advanced prompt editor with presets, history, and template support. Includes character count, suggestions, and quick actions for AI generation."
        variants={["with-presets", "with-history", "minimal"]}
        preview={
          <AI.PromptEditor
            value={prompt}
            onChange={setPrompt}
            onGenerate={(value) => console.log('Generate:', value)}
            presets={[
              {
                id: "1",
                name: "Beat Description",
                prompt: "Create a detailed description for a hip-hop beat with...",
                category: "Music Production",
                tags: ["music", "beat"]
              },
              {
                id: "2",
                name: "Song Lyrics",
                prompt: "Write lyrics for a song about...",
                category: "Songwriting",
                tags: ["lyrics", "songwriting"]
              }
            ]}
            history={[
              {
                id: "1",
                prompt: "Generate a trap beat with 808s",
                timestamp: new Date(),
                result: "Generated"
              }
            ]}
          />
        }
      />

      <ComponentSection
        name="ModelSelector"
        category="AI"
        description="Model selector dropdown with descriptions, capabilities, and pricing info. Helps users choose the right AI model for their task."
        variants={["compact", "detailed", "with-pricing"]}
        preview={
          <AI.ModelSelector
            selectedModel={selectedModel}
            onModelSelect={setSelectedModel}
            models={[
              {
                id: "audio-gen-v2",
                name: "Audio Generator v2",
                description: "Advanced audio generation with high fidelity",
                type: "audio",
                version: "2.0",
                capabilities: ["generation", "mixing", "effects"],
                pricing: {
                  credits: 10,
                  unit: "per minute"
                },
                quality: "premium",
                processingTime: "~2 min",
                available: true
              },
              {
                id: "vocal-separator",
                name: "Vocal Separator Pro",
                description: "Separate vocals from instrumentals with AI",
                type: "vocal",
                version: "1.5",
                capabilities: ["separation", "isolation", "cleanup"],
                pricing: {
                  credits: 5,
                  unit: "per track"
                },
                quality: "pro",
                processingTime: "~1 min",
                available: true,
                beta: true
              },
              {
                id: "mastering-ai",
                name: "AI Mastering",
                description: "Professional mastering with AI algorithms",
                type: "mastering",
                version: "3.0",
                capabilities: ["mastering", "loudness", "eq"],
                pricing: {
                  credits: 15,
                  unit: "per track"
                },
                quality: "pro",
                processingTime: "~3 min",
                available: true
              }
            ]}
          />
        }
      />
    </>
  );
}
