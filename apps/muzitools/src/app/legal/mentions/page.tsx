"use client";
import React from "react";
import { Layout } from "@avnir/ui";

export default function MentionsPage() {
  return (
    <main>
      <Layout.PageHeader
        title="Mentions légales"
        subtitle="Informations légales et éditoriales"
      />

      <section className="section--xl">
        <div className="container">
          <div className="prose">
            <h2>1. Éditeur du site</h2>
            <p>
              <strong>Raison sociale :</strong> AVNIR Studio
              <br />
              <strong>Forme juridique :</strong> Société à responsabilité limitée (SARL)
              <br />
              <strong>Siège social :</strong> Luxembourg
              <br />
              <strong>Email :</strong>{" "}
              <a href="mailto:contact@avnir-studio.com">contact@avnir-studio.com</a>
              <br />
              <strong>Directeur de la publication :</strong> Maxime Zaoui
            </p>

            <h2>2. Hébergement</h2>
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.
              <br />
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
              <br />
              <strong>Site web :</strong>{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                https://vercel.com
              </a>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, 
              code source) est la propriété exclusive d'AVNIR Studio, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission 
              ou publication de ces différents éléments est strictement interdite sans 
              l'accord exprès par écrit d'AVNIR Studio.
            </p>

            <h2>4. Marques</h2>
            <p>
              Les marques suivantes sont la propriété d'AVNIR Studio :
            </p>
            <ul>
              <li>AVNIR Studio</li>
              <li>MUZITOOLS</li>
              <li>MUZIDEV</li>
              <li>MUZIPICS</li>
              <li>MUZIWEB</li>
              <li>MUZIBASE</li>
              <li>MUZIMERCH</li>
              <li>MUZISYSTEM</li>
            </ul>

            <h2>5. Données personnelles</h2>
            <p>
              Pour plus d'informations sur le traitement de vos données personnelles, 
              consultez notre{" "}
              <a href="/legal/privacy">politique de confidentialité</a>.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Pour plus d'informations sur l'utilisation des cookies, consultez notre{" "}
              <a href="/legal/cookies">politique de cookies</a>.
            </p>

            <h2>7. Crédits</h2>
            <p>
              <strong>Design et développement :</strong> AVNIR Studio
              <br />
              <strong>Technologies utilisées :</strong> Next.js, React, TypeScript, Vercel
              <br />
              <strong>Algorithmes audio :</strong> Essentia.js, Web Audio API
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question ou réclamation concernant le site, vous pouvez nous 
              contacter :
            </p>
            <ul>
              <li>
                Par email :{" "}
                <a href="mailto:contact@avnir-studio.com">contact@avnir-studio.com</a>
              </li>
              <li>
                Via le formulaire de contact :{" "}
                <a href="/contact">https://muzitools.com/contact</a>
              </li>
            </ul>

            <h2>9. Médiation</h2>
            <p>
              Conformément à l'article L.612-1 du Code de la consommation, nous proposons 
              un dispositif de médiation de la consommation. L'entité de médiation retenue 
              est : Centre de Médiation de la Consommation de Conciliateurs de Justice (CM2C).
            </p>
            <p>
              En cas de litige, vous pouvez déposer votre réclamation sur le site :{" "}
              <a href="https://cm2c.net" target="_blank" rel="noopener noreferrer">
                https://cm2c.net
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
