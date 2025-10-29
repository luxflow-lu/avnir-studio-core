import "./globals.css";
import { Layout } from "@avnir/ui";

export const metadata = { title: "MUZIPICS" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzipics" data-theme="dark">
      <body className="bg-bg">
        <Layout.Navbar />
        {children}
        <Layout.Footer />
      </body>
    </html>
  );
}
