import { Content } from "@avnir/ui";
import { muzitoolsTerms } from "@avnir/content";

export default function TermsPage() {
  return (
    <section className="section--xl">
      <div className="container">
        <Content.LegalPage
          title="Conditions d'Utilisation"
          lastUpdated={muzitoolsTerms.lastUpdated}
          sections={muzitoolsTerms.sections}
        />
      </div>
    </section>
  );
}
