"use client";

import { Layout } from "@avnir/ui";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout.DocLayout
      sidebar={
        <nav>
          {/* TODO: Sidebar navigation */}
          <h3>Navigation</h3>
          <ul>
            <li><a href="/overview/intro">Introduction</a></li>
            <li><a href="/overview/architecture">Architecture</a></li>
          </ul>
        </nav>
      }
    >
      {children}
    </Layout.DocLayout>
  );
}
