"use client";

import React from "react";
import { Badge, Button, Content, Layout, Primitives } from "@avnir/ui";

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


export default function ContentPage() {
  return (
    <>
      {/* Page Header */}
      <Layout.PageHeader
        title="Content Components"
        subtitle="Components for rich text content including prose, markdown, and code blocks. Built for documentation and content-heavy pages."
      />

      <ComponentSection
        name="Prose"
        category="Content"
        description="Wrapper component for rich text content with consistent typography and spacing. Perfect for blog posts, articles, and documentation."
        variants={["default", "compact", "wide"]}
        preview={
          <Content.Prose>
            <h3>Welcome to MUZISYSTEM</h3>
            <p>
              This is a prose component that automatically styles your content with consistent typography, spacing, and colors.
            </p>
            <p>
              It handles headings, paragraphs, lists, links, and more without any additional styling needed.
            </p>
            <ul>
              <li>Automatic typography scaling</li>
              <li>Consistent spacing between elements</li>
              <li>Dark mode support</li>
            </ul>
          </Content.Prose>
        }
      />

      <ComponentSection
        name="Markdown"
        category="Content"
        description="Markdown renderer with syntax highlighting and custom components. Converts markdown to beautifully styled HTML."
        variants={["default", "with-toc", "github-flavored"]}
        preview={
          <Content.Markdown>
            {`# Markdown Example

This is a **bold** text and this is *italic*.

## Features

- Syntax highlighting
- Custom components
- GitHub Flavored Markdown

\`\`\`javascript
const greeting = "Hello World";
console.log(greeting);
\`\`\`
`}
          </Content.Markdown>
        }
      />

      <ComponentSection
        name="CodeBlock"
        category="Content"
        description="Syntax-highlighted code block with copy button and language indicator. Supports multiple programming languages."
        variants={["javascript", "typescript", "python", "css", "json"]}
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap-md)' }}>
            <Content.CodeBlock
              language="typescript"
              code={`import { Button } from "@avnir/ui";

export default function App() {
  return (
    <Button variant="solid" size="lg">
      Click me
    </Button>
  );
}`}
            />
            <Content.CodeBlock
              language="css"
              code={`.button {
  padding: var(--padding-md);
  background: var(--primary);
  border-radius: var(--radius-sm);
}`}
            />
          </div>
        }
      />
    </>
  );
}
