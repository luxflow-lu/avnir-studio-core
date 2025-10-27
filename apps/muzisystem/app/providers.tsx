"use client";

import { Layout, System } from "@avnir/ui";
import { BrandLogo } from "@avnir/brandkit";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout.Navbar
        logo={<BrandLogo size="md" />}
        links={[
          { label: "Home", href: "/" },
          { label: "Overview", href: "/overview" },
          { label: "Foundations", href: "/foundations/tokens" },
          { label: "Components", href: "/components" },
          { label: "Patterns", href: "/patterns" },
        ]}
        actions={<System.BrandThemeSelector />}
      />
      <main>{children}</main>
      <Layout.Footer>
        <Layout.Footer.Top>
          <Layout.Footer.Newsletter>
            <Layout.Footer.Logo>
              <BrandLogo size="lg" />
            </Layout.Footer.Logo>
            <Layout.Footer.Text>
              Join our newsletter to stay up to date on features and releases.
            </Layout.Footer.Text>
            <Layout.Footer.Form>
              <Layout.Footer.Input placeholder="Enter your email" />
              <Layout.Footer.Button>Subscribe</Layout.Footer.Button>
            </Layout.Footer.Form>
            <Layout.Footer.Disclaimer>
              By subscribing you agree to with our <a href="/privacy">Privacy Policy</a> and provide consent to receive updates from our company.
            </Layout.Footer.Disclaimer>
          </Layout.Footer.Newsletter>
          <Layout.Footer.Links>
            <Layout.Footer.Column title="Product">
              <Layout.Footer.Link href="/components">Components</Layout.Footer.Link>
              <Layout.Footer.Link href="/foundations/tokens">Foundations</Layout.Footer.Link>
              <Layout.Footer.Link href="/patterns">Patterns</Layout.Footer.Link>
              <Layout.Footer.Link href="/templates">Templates</Layout.Footer.Link>
            </Layout.Footer.Column>
            <Layout.Footer.Column title="Resources">
              <Layout.Footer.Link href="/overview">Documentation</Layout.Footer.Link>
              <Layout.Footer.Link href="/code/getting-started">Code</Layout.Footer.Link>
              <Layout.Footer.Link href="/tools/figma">Figma</Layout.Footer.Link>
              <Layout.Footer.Link href="/tools/playground">Playground</Layout.Footer.Link>
            </Layout.Footer.Column>
            <Layout.Footer.Column title="Governance">
              <Layout.Footer.Link href="/governance/contribute">Contribute</Layout.Footer.Link>
              <Layout.Footer.Link href="/governance/roadmap">Roadmap</Layout.Footer.Link>
              <Layout.Footer.Link href="/governance/changelog">Changelog</Layout.Footer.Link>
              <Layout.Footer.Link href="/quality/audits">Quality</Layout.Footer.Link>
            </Layout.Footer.Column>
            <Layout.Footer.Column title="Company">
              <Layout.Footer.Link href="https://avnir.studio">About AVNIR</Layout.Footer.Link>
              <Layout.Footer.Link href="/foundations/brands">Brands</Layout.Footer.Link>
              <Layout.Footer.Link href="/legal/licenses">Legal</Layout.Footer.Link>
              <Layout.Footer.Link href="/governance/support">Support</Layout.Footer.Link>
            </Layout.Footer.Column>
          </Layout.Footer.Links>
        </Layout.Footer.Top>
        <Layout.Footer.Separator />
        <Layout.Footer.Bottom>
          <Layout.Footer.Copyright>
            © 2024 AVNIR Studio. Built with MUZISYSTEM Design System.
          </Layout.Footer.Copyright>
        </Layout.Footer.Bottom>
      </Layout.Footer>
    </>
  );
}
