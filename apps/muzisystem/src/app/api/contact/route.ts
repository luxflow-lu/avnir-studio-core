import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactConfig } from "@avnir/content";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, brand } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // Get brand config
    const config = contactConfig[brand || "muzisystem"];
    if (!config) {
      return NextResponse.json(
        { error: "Configuration invalide" },
        { status: 400 }
      );
    }

    // Configuration du transporteur Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: config.recipient,
      subject: `${config.subject} - ${subject}`,
      text: `
${config.subject}

Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
      `,
      html: `
        <h2>${config.subject}</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
