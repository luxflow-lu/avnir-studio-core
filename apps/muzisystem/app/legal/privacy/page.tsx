import { Content } from "@avnir/ui";
import { privacyPolicy } from "@avnir/content";

export default function PrivacyPage() {
  return (
    <section className="section--xl">
      <div className="container">
        <Content.LegalPage
          title="Politique de Confidentialité"
          lastUpdated={privacyPolicy.lastUpdated}
          sections={privacyPolicy.sections}
        />
      </div>
    </section>
  );
}
