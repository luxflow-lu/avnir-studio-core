"use client";
import { Layout, Button } from "@avnir/ui";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main>
      <Layout.PageHeader
        title="Contactez-nous"
        subtitle="Une question ? Un projet ? N'hésite pas à nous contacter, nous te répondrons dans les plus brefs délais."
      />
      
      <section className="section--xl">
        <div className="container">
          
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <form 
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "var(--gap-lg)" }}
            >
              <div>
                <label htmlFor="name" style={{ display: "block", marginBottom: "var(--gap-sm)", fontWeight: "var(--font-medium)", color: "var(--titles)" }}>
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "var(--gap-md)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text)",
                    fontSize: "var(--text-body)"
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", marginBottom: "var(--gap-sm)", fontWeight: "var(--font-medium)", color: "var(--titles)" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "var(--gap-md)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text)",
                    fontSize: "var(--text-body)"
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: "block", marginBottom: "var(--gap-sm)", fontWeight: "var(--font-medium)", color: "var(--titles)" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "var(--gap-md)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text)",
                    fontSize: "var(--text-body)",
                    resize: "vertical"
                  }}
                />
              </div>

              {status === "success" && (
                <div style={{ padding: "var(--gap-md)", background: "var(--success)", color: "var(--bg)", borderRadius: "var(--radius-sm)" }}>
                  Message envoyé avec succès ! Nous te répondrons rapidement.
                </div>
              )}

              {status === "error" && (
                <div style={{ padding: "var(--gap-md)", background: "var(--error)", color: "var(--bg)", borderRadius: "var(--radius-sm)" }}>
                  Une erreur est survenue. Réessaie ou contacte-nous directement par email.
                </div>
              )}

              <Button type="submit" variant="solid" size="lg" disabled={status === "loading"}>
                {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>

            <div style={{ marginTop: "var(--gap-xl)", textAlign: "center", color: "var(--muted)" }}>
              <p>Ou contactez-nous directement par email :</p>
              <a 
                href="mailto:contact@avnir-studio.com"
                style={{ color: "var(--primary)", fontSize: "var(--text-body-lg)", fontWeight: "var(--font-semibold)" }}
              >
                contact@avnir-studio.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
