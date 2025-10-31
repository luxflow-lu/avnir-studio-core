import { Content } from "@avnir/ui";
import { getMentionsLegales } from "@avnir/content";

export const metadata = {
  title: "Mentions légales - MUZIPICS",
  description: "Mentions légales de MUZIPICS",
};

export default function MentionsPage() {
  const mentions = getMentionsLegales("MUZIPICS");
  
  return (
    <section className="section--xl">
      <div className="container">
        <Content.LegalPage
          title="Mentions Légales"
          lastUpdated={mentions.lastUpdated}
          sections={mentions.sections}
        />
      </div>
    </section>
  );
}
