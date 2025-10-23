import React from "react";
import { MarketingFooter } from "./Footer";

export default { title: "Marketing/Footer", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

const columns = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#" },
      { label: "Tarifs", href: "#" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Docs", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#" },
      { label: "Carrières", href: "#" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "CGU", href: "#" },
      { label: "Confidentialité", href: "#" },
    ],
  },
];

export const Default = () => (
  <Wrapper>
    <MarketingFooter columns={columns} />
  </Wrapper>
);

export const WithNote = () => (
  <Wrapper>
    <MarketingFooter columns={columns} note="2025 Avnir" />
  </Wrapper>
);

export const WithSocial = () => (
  <Wrapper>
    <MarketingFooter
      columns={columns}
      social={
        <>
          <a href="#" aria-label="Twitter">
            Tw
          </a>
          <a href="#" aria-label="GitHub">
            Gh
          </a>
        </>
      }
    />
  </Wrapper>
);
