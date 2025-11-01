"use client";
import React from "react";
import { Layout } from "@avnir/ui";

export default function PrivacyPage() {
  return (
    <main>
      <Layout.PageHeader
        title="Politique de confidentialité"
        subtitle="Dernière mise à jour : Novembre 2024"
      />

      <section className="section--xl">
        <div className="container">
          <div className="prose">
            <h2>1. Introduction</h2>
            <p>
              MUZITOOLS est un service d'outils audio gratuits développé par AVNIR Studio. 
              Cette politique de confidentialité explique comment nous traitons vos données 
              lorsque vous utilisez notre site web.
            </p>

            <h2>2. Collecte de données</h2>
            <h3>2.1 Données que nous NE collectons PAS</h3>
            <p>
              MUZITOOLS fonctionne 100% localement dans votre navigateur. Nous ne collectons, 
              ne stockons et ne transmettons AUCUNE des données suivantes :
            </p>
            <ul>
              <li>Vos fichiers audio</li>
              <li>Les résultats d'analyse (BPM, tonalité, etc.)</li>
              <li>Votre historique d'utilisation des outils</li>
              <li>Vos données de navigation</li>
              <li>Cookies de tracking ou de publicité</li>
            </ul>

            <h3>2.2 Données techniques minimales</h3>
            <p>
              Nous collectons uniquement des données techniques anonymes via notre hébergeur 
              (Vercel) pour assurer le bon fonctionnement du service :
            </p>
            <ul>
              <li>Logs d'accès serveur (adresse IP, user agent, pages visitées)</li>
              <li>Métriques de performance (temps de chargement, erreurs)</li>
            </ul>
            <p>
              Ces données sont anonymisées et ne permettent pas de vous identifier personnellement.
            </p>

            <h2>3. Utilisation des données</h2>
            <p>
              Les données techniques collectées sont utilisées uniquement pour :
            </p>
            <ul>
              <li>Assurer la sécurité et la stabilité du service</li>
              <li>Détecter et corriger les bugs</li>
              <li>Améliorer les performances</li>
            </ul>

            <h2>4. Partage des données</h2>
            <p>
              Nous ne vendons, ne louons et ne partageons AUCUNE donnée avec des tiers, 
              sauf obligation légale.
            </p>

            <h2>5. Cookies</h2>
            <p>
              MUZITOOLS n'utilise AUCUN cookie de tracking, publicité ou analytics. 
              Les seuls cookies utilisés sont des cookies techniques essentiels au 
              fonctionnement du site (préférences de thème, langue, etc.).
            </p>
            <p>
              Pour plus d'informations, consultez notre{" "}
              <a href="/cookies">politique de cookies</a>.
            </p>

            <h2>6. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p>
              Cependant, comme nous ne collectons aucune donnée personnelle vous concernant, 
              ces droits ne s'appliquent pas dans le cadre de l'utilisation de MUZITOOLS.
            </p>

            <h2>7. Sécurité</h2>
            <p>
              Tous vos fichiers audio sont traités localement dans votre navigateur. 
              Ils ne sont jamais uploadés sur nos serveurs. La connexion au site est 
              sécurisée via HTTPS.
            </p>

            <h2>8. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité 
              à tout moment. Les modifications seront publiées sur cette page avec une 
              date de mise à jour.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, 
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
