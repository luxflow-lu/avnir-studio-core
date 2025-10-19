import '../globals.css';
import '../../packages/tokens/dist/vars.css';
import { Navbar, Footer } from '../../packages/ui/src';

export const metadata = { title: 'MUZIPICS' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzipics">
      <body className="bg-bg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
