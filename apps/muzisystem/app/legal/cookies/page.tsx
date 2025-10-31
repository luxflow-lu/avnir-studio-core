import { Content } from "@avnir/ui";
import { cookiesPolicy } from "@avnir/content";

export default function CookiesPage() {
  return (
    <section className="section">
      <div className="container">
        <Content.LegalPage
          title="Politique de Cookies"
          lastUpdated={cookiesPolicy.lastUpdated}
          sections={cookiesPolicy.sections}
        />
      </div>
    </section>
  );
}
