"use client";

import { Layout } from "@avnir/ui";
import { BrandLogo } from "@avnir/brandkit";

export function ClientFooter() {
  return (
    <Layout.Footer>
      <div className="container">
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
              <Layout.Footer.Link href="/foundations">Foundations</Layout.Footer.Link>
              <Layout.Footer.Link href="/guidelines">Guidelines</Layout.Footer.Link>
              <Layout.Footer.Link href="/tokens">Tokens</Layout.Footer.Link>
            </Layout.Footer.Column>
            <Layout.Footer.Column title="Resources">
              <Layout.Footer.Link href="/docs">Documentation</Layout.Footer.Link>
              <Layout.Footer.Link href="/changelog">Changelog</Layout.Footer.Link>
              <Layout.Footer.Link href="/github">GitHub</Layout.Footer.Link>
              <Layout.Footer.Link href="/figma">Figma Kit</Layout.Footer.Link>
            </Layout.Footer.Column>
            <Layout.Footer.Column title="Company">
              <Layout.Footer.Link href="/about">About AVNIR</Layout.Footer.Link>
              <Layout.Footer.Link href="/careers">Careers</Layout.Footer.Link>
              <Layout.Footer.Link href="/privacy">Privacy</Layout.Footer.Link>
              <Layout.Footer.Link href="/terms">Terms</Layout.Footer.Link>
            </Layout.Footer.Column>
          </Layout.Footer.Links>
        </Layout.Footer.Top>
        <Layout.Footer.Separator />
        <Layout.Footer.Bottom>
          <Layout.Footer.Copyright>
            © 2024 AVNIR Studio. Built with MUZISYSTEM Design System.
          </Layout.Footer.Copyright>
        </Layout.Footer.Bottom>
      </div>
    </Layout.Footer>
  );
}
