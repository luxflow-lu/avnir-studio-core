import type { Metadata } from "next";
import "./globals.css";
import { ClientNavbar } from "./components/ClientNavbar";
import { ClientFooter } from "./components/ClientFooter";

export const metadata: Metadata = {
  title: "MUZISYSTEM - Design System Showcase",
  description: "Comprehensive design system documentation and component showcase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzisystem" data-theme="dark">
      <body className="min-h-screen">
        <ClientNavbar />
        <main>{children}</main>
        <ClientFooter />
      </body>
    </html>
  );
}
