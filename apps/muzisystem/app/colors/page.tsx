"use client";

import { Card, Layout } from "@avnir/ui";
import { useState, useEffect } from "react";

const colorTokens = [
  { name: "Primary", var: "--primary" },
  { name: "Background", var: "--bg" },
  { name: "Surface", var: "--surface" },
  { name: "Text", var: "--text" },
  { name: "Titles", var: "--titles" },
  { name: "Muted", var: "--muted" },
  { name: "Border", var: "--border" },
  { name: "Success", var: "--success" },
  { name: "Warning", var: "--warning" },
  { name: "Error", var: "--error" },
];

export default function ColorsPage() {
  const [currentBrand, setCurrentBrand] = useState("muzisystem");

  useEffect(() => {
    const brand = document.documentElement.getAttribute("data-brand") || "muzisystem";
    setCurrentBrand(brand);
  }, []);

  return (
    <>
      <Layout.PageHeader
        title="Colors"
        subtitle="Palettes de couleurs par brand avec ratios de contraste AA"
      />

      <section className="section">
        <div className="container">
          
          <Card>
            <h2>Brand actuelle</h2>
            <p>{currentBrand.toUpperCase()}</p>
          </Card>

          <Layout.SectionHeader 
            title="Semantic Colors"
            align="left"
          />
          <div className="grid-3">
            {colorTokens.map((token) => (
              <Card key={token.name}>
                <div style={{ 
                  width: "100%", 
                  height: "5rem", 
                  backgroundColor: `var(${token.var})`,
                  borderRadius: "var(--radius-lg)",
                  marginBottom: "var(--space-12)"
                }}></div>
                <h3>{token.name}</h3>
                <code>{token.var}</code>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
