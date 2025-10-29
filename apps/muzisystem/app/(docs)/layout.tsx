"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout } from "@avnir/ui";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isOverview = pathname?.startsWith('/overview');
  const isFoundations = pathname?.startsWith('/foundations');
  const isGuidelines = pathname?.startsWith('/guidelines');
  const isPatterns = pathname?.startsWith('/patterns');

  return (
    <Layout.DocLayout
      sidebar={
        <nav className="doc-nav">
          {isOverview && (
            <div className="doc-nav-section">
              <Link href="/overview" className="doc-nav-title">Overview</Link>
              <ul className="doc-nav-list">
                <li><Link href="/overview/architecture" className="doc-nav-link">Architecture</Link></li>
                <li><Link href="/overview/principles" className="doc-nav-link">Principles</Link></li>
              </ul>
            </div>
          )}

          {isFoundations && (
            <div className="doc-nav-section">
              <Link href="/foundations" className="doc-nav-title">Foundations</Link>
              <ul className="doc-nav-list">
                <li><Link href="/foundations/colors" className="doc-nav-link">Colors</Link></li>
                <li><Link href="/foundations/typography" className="doc-nav-link">Typography</Link></li>
                <li><Link href="/foundations/tokens" className="doc-nav-link">Design Tokens</Link></li>
                <li><Link href="/foundations/spacing" className="doc-nav-link">Spacing</Link></li>
                <li><Link href="/foundations/shadows" className="doc-nav-link">Shadows</Link></li>
                <li><Link href="/foundations/breakpoints" className="doc-nav-link">Breakpoints</Link></li>
              </ul>
            </div>
          )}

          {isGuidelines && (
            <div className="doc-nav-section">
              <Link href="/guidelines" className="doc-nav-title">Guidelines</Link>
              <ul className="doc-nav-list">
                <li><Link href="/guidelines/accessibility" className="doc-nav-link">Accessibility</Link></li>
                <li><Link href="/guidelines/responsive" className="doc-nav-link">Responsive</Link></li>
                <li><Link href="/guidelines/writing" className="doc-nav-link">Writing</Link></li>
              </ul>
            </div>
          )}

          {isPatterns && (
            <div className="doc-nav-section">
              <Link href="/patterns" className="doc-nav-title">Patterns</Link>
              <ul className="doc-nav-list">
                <li><Link href="/patterns/authentication" className="doc-nav-link">Authentication</Link></li>
                <li><Link href="/patterns/upload" className="doc-nav-link">Upload</Link></li>
              </ul>
            </div>
          )}
        </nav>
      }
    >
      {children}
    </Layout.DocLayout>
  );
}
