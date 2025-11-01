"use client";
import React from "react";
import { Layout } from "@avnir/ui";

export default function TermsPage() {
  return (
    <main>
      <Layout.PageHeader
        title="Conditions d'utilisation"
        subtitle="Dernière mise à jour : Novembre 2024"
      />

      <section className="section--xl">
        <div className="container">
          <div className="prose">
            <h2>1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant MUZITOOLS, vous acceptez d'être lié par ces 
              conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez 
              ne pas utiliser le service.
            </p>

            <h2>2. Description du service</h2>
            <p>
              MUZITOOLS est une plateforme gratuite d'outils audio pour créateurs musicaux, 
              développée par AVNIR Studio. Le service inclut actuellement :
            </p>
            <ul>
              <li>Key & BPM Finder : Analyse de tonalité et tempo</li>
              <li>AutoCut : Éditeur audio avec waveform interactif</li>
              <li>D'autres outils à venir</li>
            </ul>

            <h2>3. Utilisation du service</h2>
            <h3>3.1 Licence d'utilisation</h3>
            <p>
              MUZITOOLS vous accorde une licence non exclusive, non transférable et 
              révocable pour utiliser le service à des fins personnelles ou commerciales.
            </p>

            <h3>3.2 Restrictions</h3>
            <p>Vous vous engagez à NE PAS :</p>
            <ul>
              <li>Utiliser le service à des fins illégales</li>
              <li>Tenter de contourner les mesures de sécurité</li>
              <li>Surcharger ou perturber le service</li>
              <li>Copier, modifier ou distribuer le code source</li>
              <li>Utiliser le service pour créer un service concurrent</li>
            </ul>

            <h2>4. Propriété intellectuelle</h2>
            <h3>4.1 Contenu du service</h3>
            <p>
              Tous les droits de propriété intellectuelle sur MUZITOOLS (code, design, 
              marques, logos) appartiennent à AVNIR Studio.
            </p>

            <h3>4.2 Vos fichiers</h3>
            <p>
              Vous conservez tous les droits sur vos fichiers audio. MUZITOOLS ne 
              revendique aucun droit sur vos créations. Vos fichiers sont traités 
              localement et ne sont jamais uploadés sur nos serveurs.
            </p>

            <h2>5. Gratuité du service</h2>
            <p>
              MUZITOOLS est actuellement gratuit et le restera. Nous nous réservons 
              le droit d'ajouter des fonctionnalités premium à l'avenir, mais les 
              outils actuels resteront gratuits.
            </p>

            <h2>6. Disponibilité du service</h2>
            <p>
              Nous nous efforçons de maintenir MUZITOOLS disponible 24/7, mais nous 
              ne garantissons pas une disponibilité ininterrompue. Le service peut 
              être temporairement indisponible pour maintenance ou mise à jour.
            </p>

            <h2>7. Limitation de responsabilité</h2>
            <p>
              MUZITOOLS est fourni "tel quel" sans garantie d'aucune sorte. Nous ne 
              sommes pas responsables :
            </p>
            <ul>
              <li>Des erreurs d'analyse (BPM, tonalité incorrects)</li>
              <li>De la perte de données</li>
              <li>Des dommages directs ou indirects liés à l'utilisation du service</li>
              <li>De l'utilisation que vous faites des résultats</li>
            </ul>

            <h2>8. Modifications du service</h2>
            <p>
              Nous nous réservons le droit de modifier, suspendre ou arrêter tout ou 
              partie du service à tout moment, avec ou sans préavis.
            </p>

            <h2>9. Modifications des conditions</h2>
            <p>
              Nous pouvons modifier ces conditions à tout moment. Les modifications 
              seront publiées sur cette page avec une date de mise à jour. Votre 
              utilisation continue du service après modification constitue votre 
              acceptation des nouvelles conditions.
            </p>

            <h2>10. Résiliation</h2>
            <p>
              Nous nous réservons le droit de suspendre ou résilier votre accès au 
              service en cas de violation de ces conditions.
            </p>

            <h2>11. Droit applicable</h2>
            <p>
              Ces conditions sont régies par le droit luxembourgeois. Tout litige 
              sera soumis à la juridiction exclusive des tribunaux du Luxembourg.
            </p>

            <h2>12. Contact</h2>
            <p>
              Pour toute question concernant ces conditions d'utilisation, 
              contactez-nous à :{" "}
              <a href="mailto:legal@avnir-studio.com">legal@avnir-studio.com</a>
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
