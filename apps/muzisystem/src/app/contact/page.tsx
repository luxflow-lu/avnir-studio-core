import { Layout, Form } from "@avnir/ui";

export default function ContactPage() {
  return (
    <main>
      <Layout.PageHeader
        title="Nous contacter"
        subtitle="Une question sur le design system ? Besoin d'aide pour l'intégration ? Contactez-nous, nous vous répondrons rapidement."
      />
      
      <section className="section--xl">
        <div className="container">
          <Form.ContactForm brand="muzisystem" />
        </div>
      </section>
    </main>
  );
}
