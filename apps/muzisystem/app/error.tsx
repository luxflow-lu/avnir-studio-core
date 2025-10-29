"use client";

import { Button } from "@avnir/ui";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

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
          color: 'var(--error)',
          lineHeight: 1,
          marginBottom: 'var(--margin-lg)'
        }}>
          500
        </div>
        
        <h1 style={{ 
          fontSize: 'var(--text-h1)', 
          fontWeight: 'var(--font-bold)',
          marginBottom: 'var(--margin-md)'
        }}>
          Something Went Wrong
        </h1>
        
        <p style={{ 
          color: 'var(--muted)', 
          fontSize: 'var(--text-large)',
          marginBottom: 'var(--margin-lg)',
          lineHeight: 1.6
        }}>
          We encountered an unexpected error. Our team has been notified and is working on a fix.
        </p>

        {error.digest && (
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: 'var(--padding-md)',
            borderRadius: 'var(--radius-sm)',
            marginBottom: 'var(--margin-lg)',
            border: '1px solid var(--border)'
          }}>
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--muted)' }}>
              <strong>Error ID:</strong> {error.digest}
            </p>
          </div>
        )}

        <div style={{ 
          display: 'flex', 
          gap: 'var(--gap-md)', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Button variant="solid" size="lg" onClick={reset}>
            Try Again
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </Button>
        </div>

        <div style={{ 
          marginTop: 'var(--margin-xl)',
          paddingTop: 'var(--padding-lg)',
          borderTop: '1px solid var(--border)'
        }}>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--text-small)', marginBottom: 'var(--margin-sm)' }}>
            If this problem persists, please contact support:
          </p>
          <a 
            href="mailto:support@avnir.studio" 
            style={{ color: 'var(--primary)', fontSize: 'var(--text-small)' }}
          >
            support@avnir.studio
          </a>
        </div>
      </div>
    </div>
  );
}
