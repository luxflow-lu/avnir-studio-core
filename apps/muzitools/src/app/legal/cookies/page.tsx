"use client";
import React from "react";
import { Layout } from "@avnir/ui";

export default function CookiesPage() {
  return (
    <main>
      <Layout.PageHeader
        title="Politique de cookies"
        subtitle="Dernière mise à jour : Novembre 2024"
      />

      <section className="section--xl">
        <div className="container">
          <div className="prose">
            <h2>1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte stocké sur votre appareil lorsque 
              vous visitez un site web. Les cookies permettent au site de mémoriser 
              vos actions et préférences.
            </p>

            <h2>2. Notre engagement</h2>
            <p>
              <strong>MUZITOOLS n'utilise AUCUN cookie de tracking, publicité ou analytics.</strong>
            </p>
            <p>
              Nous respectons votre vie privée et ne suivons pas votre comportement 
              sur le web. Pas de Google Analytics, pas de Facebook Pixel, pas de 
              cookies tiers.
            </p>

            <h2>3. Cookies utilisés</h2>
            <h3>3.1 Cookies strictement nécessaires</h3>
            <p>
              Nous utilisons uniquement des cookies techniques essentiels au 
              fonctionnement du site :
            </p>
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Durée</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>theme</td>
                  <td>1 an</td>
                  <td>Mémorise votre préférence de thème (clair/sombre)</td>
                </tr>
                <tr>
                  <td>locale</td>
                  <td>1 an</td>
                  <td>Mémorise votre langue préférée</td>
                </tr>
              </tbody>
            </table>

            <h3>3.2 Stockage local (localStorage)</h3>
            <p>
              MUZITOOLS utilise le stockage local de votre navigateur pour :
            </p>
            <ul>
              <li>Mémoriser vos préférences d'interface</li>
              <li>Sauvegarder temporairement vos paramètres d'outils</li>
            </ul>
            <p>
              Ces données restent sur votre appareil et ne sont jamais transmises 
              à nos serveurs.
            </p>

            <h2>4. Cookies tiers</h2>
            <p>
              MUZITOOLS n'utilise AUCUN cookie tiers. Nous n'intégrons pas de 
              services externes qui pourraient déposer des cookies (Google, 
              Facebook, etc.).
            </p>

            <h2>5. Gestion des cookies</h2>
            <h3>5.1 Désactivation des cookies</h3>
            <p>
              Vous pouvez désactiver les cookies dans les paramètres de votre 
              navigateur. Cependant, cela peut affecter certaines fonctionnalités 
              du site (thème, langue).
            </p>

            <h3>5.2 Instructions par navigateur</h3>
            <ul>
              <li>
                <strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → 
                Cookies et autres données de sites
              </li>
              <li>
                <strong>Firefox :</strong> Paramètres → Vie privée et sécurité → 
                Cookies et données de sites
              </li>
              <li>
                <strong>Safari :</strong> Préférences → Confidentialité → 
                Gérer les données de sites web
              </li>
              <li>
                <strong>Edge :</strong> Paramètres → Confidentialité, recherche et 
                services → Cookies et autorisations de site
              </li>
            </ul>

            <h2>6. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de cookies 
              à tout moment. Les modifications seront publiées sur cette page avec 
              une date de mise à jour.
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question concernant notre utilisation des cookies, 
              contactez-nous à :{" "}
              <a href="mailto:privacy@avnir-studio.com">privacy@avnir-studio.com</a>
            </p>

            <hr />

            <p>
              <strong>AVNIR Studio</strong>
              <br />
              Luxembourg
              <br />
              Email : <a href="mailto:contact@avnir-studio.com">contact@avnir-studio.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
