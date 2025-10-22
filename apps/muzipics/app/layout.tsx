import './globals.css';
import { Navbar, Footer } from '@avnir/ui';

export const metadata = { title: 'MUZIPICS' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzipics" data-theme="dark">
      <body className="bg-bg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
