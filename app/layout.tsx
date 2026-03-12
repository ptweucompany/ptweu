import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../src/context/LanguageContext';
import NavbarWrapper from './NavbarWrapper';
import FooterWrapper from './FooterWrapper';
import ScrollToTopWrapper from './ScrollToTopWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PT Wira Energi Utama | Mining, General Trading & Industrial Supplier',
  description: 'Official company profile of PT Wira Energi Utama, a leading global limestone mining and industrial supplier.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen font-sans text-gray-900 bg-white`}>
        <LanguageProvider>
          <ScrollToTopWrapper />
          <NavbarWrapper />
          <main>{children}</main>
          <FooterWrapper />
        </LanguageProvider>
      </body>
    </html>
  );
}
