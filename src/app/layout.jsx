import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { ModalProvider } from '@/context/ModalContext';
import AsociateModal from '@/components/ui/AsociateModal';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Mar & Sierras',
  description: 'Estudio contable con más de 20 años de experiencia en asesoramiento impositivo, laboral y societario.',
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Mar & Sierras',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <ModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AsociateModal />
        </ModalProvider>
      </body>
    </html>
  );
}