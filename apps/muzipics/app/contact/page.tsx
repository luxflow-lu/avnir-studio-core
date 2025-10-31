import { Layout, Form } from "@avnir/ui";

export const metadata = {
  title: "Contact - MUZIPICS",
  description: "Contactez l'équipe MUZIPICS pour toute question ou demande",
};

export default function ContactPage() {
  return (
    <main>
      <Layout.PageHeader
        title="Contactez-nous"
        subtitle="Une question ? Un projet ? N'hésite pas à nous contacter, nous te répondrons dans les plus brefs délais."
      />
      
      <section className="section--xl">
        <div className="container">
          <Form.ContactForm brand="muzipics" />
        </div>
      </section>
    </main>
  );
}
