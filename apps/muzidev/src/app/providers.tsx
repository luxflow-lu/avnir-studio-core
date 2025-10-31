"use client";
import React from "react";
import { Layout } from "@avnir/ui";
import { BrandLogo } from "@avnir/brandkit";
import { Button } from "@avnir/ui";
import { Instagram, Youtube } from "@avnir/icons";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout.Navbar
        logo={<BrandLogo size="md" />}
        links={[
          { label: "Accueil", href: "/" },
          { label: "Formation", href: "/formation" },
          { label: "Tarifs", href: "/pricing" },
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
        ]}
        actions={
          <>
            <Button variant="solid" size="md" onClick={() => window.location.href = '/signup'}>
              S'inscrire
            </Button>
            <Button variant="outline" size="md" onClick={() => window.location.href = '/login'}>
              Se connecter
            </Button>
          </>
        }
      />
      <main>{children}</main>
      <Layout.Footer>
        <Layout.Footer.Top>
          <Layout.Footer.Newsletter>
            <Layout.Footer.Logo>
              <BrandLogo size="lg" />
            </Layout.Footer.Logo>
            <Layout.Footer.Text>
              Rejoins notre newsletter pour recevoir les dernières actualités et contenus exclusifs.
            </Layout.Footer.Text>
            <Layout.Footer.Form action="mailto:contact@avnir-studio.com?subject=Inscription Newsletter MUZIDEV" method="GET">
              <Layout.Footer.Input type="email" name="body" placeholder="Ton email" required />
              <Layout.Footer.Button type="submit">S'inscrire</Layout.Footer.Button>
            </Layout.Footer.Form>
            <Layout.Footer.Disclaimer>
              En t'inscrivant, tu acceptes notre <a href="/legal/privacy">Politique de confidentialité</a>.
            </Layout.Footer.Disclaimer>
          </Layout.Footer.Newsletter>
          <Layout.Footer.Links>
            <Layout.Footer.Column title="Explore">
              <Layout.Footer.Link href="/">Accueil</Layout.Footer.Link>
              <Layout.Footer.Link href="/formation">Formation</Layout.Footer.Link>
              <Layout.Footer.Link href="/pricing">Tarifs</Layout.Footer.Link>
              <Layout.Footer.Link href="/faq">FAQ</Layout.Footer.Link>
              <Layout.Footer.Link href="/contact">Contact</Layout.Footer.Link>
            </Layout.Footer.Column>
            <Layout.Footer.Column title="Services">
              <Layout.Footer.Link href="https://muzipics.com" target="_blank" rel="noopener noreferrer">MUZIPICS</Layout.Footer.Link>
              <Layout.Footer.Link href="https://muzimerch.com" target="_blank" rel="noopener noreferrer">MUZIMERCH</Layout.Footer.Link>
              <Layout.Footer.Link href="https://muziweb.com" target="_blank" rel="noopener noreferrer">MUZIWEB</Layout.Footer.Link>
              <Layout.Footer.Link href="https://muzibase.com" target="_blank" rel="noopener noreferrer">MUZIBASE</Layout.Footer.Link>
              <Layout.Footer.Link href="https://muzitools.com" target="_blank" rel="noopener noreferrer">MUZITOOLS</Layout.Footer.Link>
            </Layout.Footer.Column>
            <Layout.Footer.Column title="Company">
              <Layout.Footer.Link href="https://avnir-studio.com" target="_blank" rel="noopener noreferrer">AVNIR-Studio</Layout.Footer.Link>
              <Layout.Footer.Link href="https://avnir.studio/jacque" target="_blank" rel="noopener noreferrer">Jacque</Layout.Footer.Link>
            </Layout.Footer.Column>
            <Layout.Footer.Column title="Legals">
              <Layout.Footer.Link href="/legal/mentions">Mentions légales</Layout.Footer.Link>
              <Layout.Footer.Link href="/legal/privacy">Confidentialité</Layout.Footer.Link>
              <Layout.Footer.Link href="/legal/cookies">Cookies</Layout.Footer.Link>
            </Layout.Footer.Column>
          </Layout.Footer.Links>
        </Layout.Footer.Top>
        <Layout.Footer.Separator />
        <Layout.Footer.Bottom>
          <Layout.Footer.Copyright>
            © 2025 MUZIDEV. Powered by AVNIR-Studio.
          </Layout.Footer.Copyright>
          <Layout.Footer.Social>
            <Layout.Footer.SocialLink href="https://www.instagram.com/avnir_studio/" target="_blank" rel="noopener noreferrer">
              <Instagram className="footer-social-icon" />
              Instagram
            </Layout.Footer.SocialLink>
            <Layout.Footer.SocialLink href="https://www.youtube.com/@avnirstudio/" target="_blank" rel="noopener noreferrer">
              <Youtube className="footer-social-icon" />
              Youtube
            </Layout.Footer.SocialLink>
          </Layout.Footer.Social>
        </Layout.Footer.Bottom>
      </Layout.Footer>
    </>
  );
}
