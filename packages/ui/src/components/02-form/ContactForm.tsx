"use client";

/**
 * ContactForm Component
 * Standardized contact form for all AVNIR sites
 */

import * as React from "react";
import { cx } from "../../utils/cx";
import { Button } from "./Button";

export interface ContactFormProps extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  brand: string;
  title?: string;
  description?: string;
  onSubmitData?: (data: ContactFormData) => Promise<void>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = React.forwardRef<HTMLFormElement, ContactFormProps>(
  ({ className, brand, title = "Nous contacter", description = "Une question ? Besoin d'aide ? Envoyez-nous un message, nous vous répondrons dans les plus brefs délais.", onSubmitData, ...props }, ref) => {
    const [formData, setFormData] = React.useState<ContactFormData>({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      // Clear error when user types
      if (errors[name as keyof ContactFormData]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
      }
    };

    const validate = (): boolean => {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

      if (!formData.name.trim()) {
        newErrors.name = "Le nom est requis";
      }

      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Email invalide";
      }

      if (!formData.subject.trim()) {
        newErrors.subject = "Le sujet est requis";
      }

      if (!formData.message.trim()) {
        newErrors.message = "Le message est requis";
      } else if (formData.message.trim().length < 10) {
        newErrors.message = "Le message doit contenir au moins 10 caractères";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validate()) return;

      setIsSubmitting(true);
      setSubmitStatus("idle");

      try {
        if (onSubmitData) {
          await onSubmitData(formData);
        } else {
          // Default: send to API route
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, brand }),
          });

          if (!response.ok) {
            throw new Error("Erreur lors de l'envoi");
          }
        }

        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <form
        ref={ref}
        className={cx("contact-form", className)}
        onSubmit={handleSubmit}
        {...props}
      >
        {/* Header */}
        <div className="contact-form-header">
          <h2 className="contact-form-title">{title}</h2>
          <p className="contact-form-description">{description}</p>
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="contact-form-success">
            ✓ Message envoyé avec succès ! Nous vous répondrons rapidement.
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="contact-form-error-message">
            ✗ Une erreur est survenue. Veuillez réessayer.
          </div>
        )}

        {/* Fields */}
        <div className="contact-form-fields">
          {/* Name */}
          <div className="contact-form-field">
            <label htmlFor="name" className="contact-form-label">
              Nom <span className="contact-form-label-required">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="contact-form-input"
              placeholder="Votre nom"
              disabled={isSubmitting}
            />
            {errors.name && <span className="contact-form-error">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="contact-form-field">
            <label htmlFor="email" className="contact-form-label">
              Email <span className="contact-form-label-required">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-form-input"
              placeholder="votre@email.com"
              disabled={isSubmitting}
            />
            {errors.email && <span className="contact-form-error">{errors.email}</span>}
          </div>

          {/* Subject */}
          <div className="contact-form-field">
            <label htmlFor="subject" className="contact-form-label">
              Sujet <span className="contact-form-label-required">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="contact-form-input"
              placeholder="Sujet de votre message"
              disabled={isSubmitting}
            />
            {errors.subject && <span className="contact-form-error">{errors.subject}</span>}
          </div>

          {/* Message */}
          <div className="contact-form-field">
            <label htmlFor="message" className="contact-form-label">
              Message <span className="contact-form-label-required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-form-textarea"
              placeholder="Votre message..."
              disabled={isSubmitting}
            />
            {errors.message && <span className="contact-form-error">{errors.message}</span>}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="solid"
          size="lg"
          className="contact-form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </Button>
      </form>
    );
  }
);

ContactForm.displayName = "ContactForm";
