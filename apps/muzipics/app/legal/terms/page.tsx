import { Content } from "@avnir/ui";
import { commonTermsSections } from "@avnir/content";

export const metadata = {
  title: "Conditions générales d'utilisation - MUZIPICS",
  description: "Conditions générales d'utilisation de MUZIPICS",
};

export default function TermsPage() {
  return (
    <section className="section--xl">
      <div className="container">
        <Content.LegalPage
          title="Conditions Générales d'Utilisation"
          lastUpdated="2025-01-31"
          sections={commonTermsSections}
        />
      </div>
    </section>
  );
}
