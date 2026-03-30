import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../src/context/LanguageContext';
import NavbarWrapper from './NavbarWrapper';
import FooterWrapper from './FooterWrapper';
import ScrollToTopWrapper from './ScrollToTopWrapper';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ptweu.company'),
  title: {
    default: 'PT Wira Energi Utama | Mining & Industrial Supplier',
    template: '%s | PT Wira Energi Utama'
  },
  description: 'Official corporate portal of PT Wira Energi Utama. High-purity limestone mining, industrial mineral supply, and sustainable energy solutions from Sulawesi Utara.',
  keywords: ['Mining', 'Limestone', 'Batu Kapur', 'PT Wira Energi Utama', 'Industrial Supplier', 'Ratatotok', 'Mining Company Indonesia', 'Manado Mining', 'CaO', 'CaCO3', 'Quicklime'],
  authors: [{ name: 'PT Wira Energi Utama' }],
  creator: 'PT Wira Energi Utama',
  publisher: 'PT Wira Energi Utama',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PT Wira Energi Utama | Leading Mining & Industrial Supplier',
    description: 'Premier limestone mining operations and industrial mineral supply in Indonesia. Committed to sustainable growth and premium quality.',
    url: 'https://ptweu.company',
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
    description: 'Leading global limestone mining and industrial supplier based in Indonesia.',
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
  other: {
    'geo.region': 'ID-SA',
    'geo.placename': 'Manado',
    'geo.position': '1.4748;124.8421',
    'ICBM': '1.4748, 124.8421',
    'apple-mobile-web-app-title': 'PT WEU',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen font-sans text-gray-900 bg-white`}>
        <LanguageProvider>
          <ScrollToTopWrapper />
          <NavbarWrapper />
          <main>{children}</main>
          <FooterWrapper />
        </LanguageProvider>
        <Script 
          src="https://instant.page/5.2.0" 
          strategy="afterInteractive" 
          integrity="sha384-jnZcg0186dfqZPA01eGkkmk2i1A+Rj0/0r3eGzMwbQhZkS0c1rP1rC4v4Z+vO" 
        />
      </body>
    </html>
  );
}
