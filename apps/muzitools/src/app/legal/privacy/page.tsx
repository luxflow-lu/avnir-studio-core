import { Content } from "@avnir/ui";
import { muzitoolsPrivacy } from "@avnir/content";

export default function PrivacyPage() {
  return (
    <section className="section--xl">
      <div className="container">
        <Content.LegalPage
          title="Politique de Confidentialité"
          lastUpdated={muzitoolsPrivacy.lastUpdated}
          sections={muzitoolsPrivacy.sections}
        />
      </div>
    </section>
  );
}
