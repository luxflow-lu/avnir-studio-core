import "./globals.css";
import { Layout } from "@avnir/ui";

export const metadata = { title: "AVNIR-Studio" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="avnir" data-theme="dark">
      <body className="bg-background text-foreground">
        <Layout.Navbar />
        {children}
        <Layout.Footer />
      </body>
    </html>
  );
}
