/**
 * StandardFooter - Standardized footer using @avnir/content configuration
 * 
 * Usage:
 * <StandardFooter 
 *   brand="muzidev"
 *   logo={<img src="/logo.svg" alt="MUZIDEV" />}
 *   exploreLinks={[{ label: "Formation", href: "/formation" }]}
 * />
 */

import * as React from "react";
import { Footer } from "./Footer";
import { Instagram, Youtube } from "@avnir/icons";

export interface StandardFooterProps {
  brand: "muzidev" | "muzipics" | "muziweb" | "muzibase" | "muzimerch" | "muzitools" | "muzisystem" | "avnir-studio";
  logo: React.ReactNode;
  exploreLinks?: Array<{ label: string; href: string; external?: boolean }>;
  newsletterAction?: string;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  hideNewsletter?: boolean;
}

// Import config from @avnir/content (will be added as dependency)
// For now, we'll inline the logic and move to @avnir/content later
const socialLinks = {
  instagram: "https://www.instagram.com/avnir_studio/",
  youtube: "https://www.youtube.com/@avnirstudio/",
};

const avnirSites = {
  "avnir-studio": { name: "AVNIR-Studio", url: "https://avnir-studio.com" },
  "muzidev": { name: "MUZIDEV", url: "https://muzidev.com" },
  "muzipics": { name: "MUZIPICS", url: "https://muzipics.com" },
  "muziweb": { name: "MUZIWEB", url: "https://muziweb.com" },
  "muzibase": { name: "MUZIBASE", url: "https://muzibase.com" },
  "muzimerch": { name: "MUZIMERCH", url: "https://muzimerch.com" },
  "muzitools": { name: "MUZITOOLS", url: "https://muzitools.com" },
  "muzisystem": { name: "MUZISYSTEM", url: "https://muzisystem.com" },
};

const companyLinks = [
  { label: "AVNIR-Studio", href: "https://avnir-studio.com", external: true },
  { label: "Jacques (IA)", href: "https://jacques.avnir-studio.com", external: true },
  { label: "MUZISYSTEM", href: "https://muzisystem.com", external: true },
];

const legalLinks = [
  { label: "Mentions légales", href: "/legal/mentions" },
  { label: "Confidentialité", href: "/legal/privacy" },
  { label: "Cookies", href: "/legal/cookies" },
];

function getServicesLinks(currentBrand: string) {
  return Object.entries(avnirSites)
    .filter(([key]) => key !== currentBrand && key !== "avnir-studio" && key !== "muzisystem")
    .map(([_, site]) => ({
      label: site.name,
      href: site.url,
      external: true,
    }));
}

function getCopyright(brandName: string): string {
  const year = new Date().getFullYear();
  return `© ${year} ${brandName}. Powered by AVNIR-Studio.`;
}

export const StandardFooter: React.FC<StandardFooterProps> = ({
  brand,
  logo,
  exploreLinks = [],
  newsletterAction = "mailto:contact@avnir-studio.com?subject=Inscription Newsletter",
  newsletterPlaceholder = "Ton email",
  newsletterButtonText = "S'inscrire",
  hideNewsletter = false,
}) => {
  const brandName = avnirSites[brand].name;
  const servicesLinks = getServicesLinks(brand);
  const copyright = getCopyright(brandName);

  return (
    <Footer>
      <Footer.Top>
        {/* Logo + Newsletter */}
        {!hideNewsletter && (
          <Footer.Newsletter>
            <Footer.Logo>{logo}</Footer.Logo>
            <Footer.Text>Rejoins notre newsletter pour recevoir les dernières actualités et contenus exclusifs.</Footer.Text>
            <Footer.Form action={newsletterAction} method="GET">
              <Footer.Input type="email" name="body" placeholder={newsletterPlaceholder} required />
              <Footer.Button type="submit">{newsletterButtonText}</Footer.Button>
            </Footer.Form>
            <Footer.Disclaimer>
              En t'inscrivant, tu acceptes notre <a href="/legal/privacy">Politique de confidentialité</a>.
            </Footer.Disclaimer>
          </Footer.Newsletter>
        )}

        {/* Links Grid */}
        <Footer.Links>
          {/* Explore (optional) */}
          {exploreLinks.length > 0 && (
            <Footer.Column title="Explorer">
              {exploreLinks.map((link, i) => (
                <Footer.Link key={i} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                  {link.label}
                </Footer.Link>
              ))}
            </Footer.Column>
          )}

          {/* Services */}
          <Footer.Column title="Services">
            {servicesLinks.map((link, i) => (
              <Footer.Link key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </Footer.Link>
            ))}
          </Footer.Column>

          {/* Company */}
          <Footer.Column title="Company">
            {companyLinks.map((link, i) => (
              <Footer.Link key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </Footer.Link>
            ))}
          </Footer.Column>

          {/* Legal */}
          <Footer.Column title="Légal">
            {legalLinks.map((link, i) => (
              <Footer.Link key={i} href={link.href}>
                {link.label}
              </Footer.Link>
            ))}
          </Footer.Column>
        </Footer.Links>
      </Footer.Top>
      <Footer.Separator />

      {/* Footer Bottom */}
      <Footer.Bottom>
        <Footer.Copyright>{copyright}</Footer.Copyright>
        <Footer.Social>
          <Footer.SocialLink href={socialLinks.instagram}>
            <Instagram className="footer-social-icon" />
            Instagram
          </Footer.SocialLink>
          <Footer.SocialLink href={socialLinks.youtube}>
            <Youtube className="footer-social-icon" />
            YouTube
          </Footer.SocialLink>
        </Footer.Social>
      </Footer.Bottom>
    </Footer>
  );
};

StandardFooter.displayName = "StandardFooter";
