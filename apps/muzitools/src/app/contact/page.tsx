import { Layout, Form } from "@avnir/ui";

export const metadata = {
  title: "Contact - MUZITOOLS",
  description: "Contactez l'équipe MUZITOOLS pour toute question, suggestion d'outil ou demande",
};

export default function ContactPage() {
  return (
    <main>
      <Layout.PageHeader
        title="Contactez-nous"
        subtitle="Une question ? Une suggestion d'outil ? N'hésite pas à nous contacter, nous te répondrons dans les plus brefs délais."
      />
      
      <section className="section--xl">
        <div className="container">
          <Form.ContactForm brand="muzitools" />
        </div>
      </section>
    </main>
  );
}
