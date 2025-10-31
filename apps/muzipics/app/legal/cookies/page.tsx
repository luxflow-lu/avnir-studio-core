import { Content } from "@avnir/ui";
import { cookiesPolicy } from "@avnir/content";

export const metadata = {
  title: "Politique des cookies - MUZIPICS",
  description: "Politique d'utilisation des cookies de MUZIPICS",
};

export default function CookiesPage() {
  return (
    <section className="section--xl">
      <div className="container">
        <Content.LegalPage
          title="Politique des Cookies"
          lastUpdated={cookiesPolicy.lastUpdated}
          sections={cookiesPolicy.sections}
        />
      </div>
    </section>
  );
}
