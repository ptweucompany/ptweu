import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../src/context/LanguageContext';
import NavbarWrapper from './NavbarWrapper';
import FooterWrapper from './FooterWrapper';
import ScrollToTopWrapper from './ScrollToTopWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ptweu.com'), // Replace with actual domain if known
  title: {
    default: 'PT Wira Energi Utama | Mining & Industrial Supplier',
    template: '%s | PT Wira Energi Utama'
  },
  description: 'Official company profile of PT Wira Energi Utama, a leading global limestone mining and industrial supplier based in Indonesia.',
  keywords: ['Mining', 'Limestone', 'Batu Kapur', 'PT Wira Energi Utama', 'Industrial Supplier', 'Ratatotok', 'Mining Company Indonesia'],
  authors: [{ name: 'PT Wira Energi Utama' }],
  creator: 'PT Wira Energi Utama',
  publisher: 'PT Wira Energi Utama',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'PT Wira Energi Utama | Mining & Industrial Supplier',
    description: 'Official company profile of PT Wira Energi Utama, a leading global limestone mining and industrial supplier.',
    url: 'https://ptweu.com',
    siteName: 'PT Wira Energi Utama',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'PT Wira Energi Utama - Sustainable Mining & Industrial Supplier',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Wira Energi Utama | Mining & Industrial Supplier',
    description: 'Official company profile of PT Wira Energi Utama, a leading global limestone mining and industrial supplier.',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
