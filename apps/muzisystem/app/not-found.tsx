"use client";

import Link from "next/link";
import { Button } from "@avnir/ui";

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 'var(--padding-xl)'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <div style={{ 
          fontSize: '120px', 
          fontWeight: 'var(--font-bold)', 
          color: 'var(--primary)',
          lineHeight: 1,
          marginBottom: 'var(--margin-lg)'
        }}>
          404
        </div>
        
        <h1 style={{ 
          fontSize: 'var(--text-h1)', 
          fontWeight: 'var(--font-bold)',
          marginBottom: 'var(--margin-md)'
        }}>
          Page Not Found
        </h1>
        
        <p style={{ 
          color: 'var(--muted)', 
          fontSize: 'var(--text-large)',
          marginBottom: 'var(--margin-xl)',
          lineHeight: 1.6
        }}>
          Sorry, we couldn't find the page you're looking for. The page may have been moved, 
          deleted, or the URL might be incorrect.
        </p>

        <div style={{ 
          display: 'flex', 
          gap: 'var(--gap-md)', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/">
            <Button variant="solid" size="lg">
              Go Home
            </Button>
          </Link>
          <Link href="/components">
            <Button variant="outline" size="lg">
              Browse Components
            </Button>
          </Link>
        </div>

        <div style={{ 
          marginTop: 'var(--margin-xl)',
          paddingTop: 'var(--padding-lg)',
          borderTop: '1px solid var(--border)'
        }}>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)' }}>
            Looking for something specific?
          </p>
          <div style={{ 
            display: 'flex', 
            gap: 'var(--gap-md)', 
            justifyContent: 'center',
            marginTop: 'var(--margin-md)',
            flexWrap: 'wrap'
          }}>
            <Link href="/overview" style={{ color: 'var(--primary)', fontSize: 'var(--text-small)' }}>
              Overview
            </Link>
            <span style={{ color: 'var(--border)' }}>•</span>
            <Link href="/foundations/colors" style={{ color: 'var(--primary)', fontSize: 'var(--text-small)' }}>
              Foundations
            </Link>
            <span style={{ color: 'var(--border)' }}>•</span>
            <Link href="/guidelines" style={{ color: 'var(--primary)', fontSize: 'var(--text-small)' }}>
              Guidelines
            </Link>
            <span style={{ color: 'var(--border)' }}>•</span>
            <Link href="/patterns" style={{ color: 'var(--primary)', fontSize: 'var(--text-small)' }}>
              Patterns
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
