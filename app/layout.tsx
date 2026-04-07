import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../src/context/LanguageContext';
import NavbarWrapper from './NavbarWrapper';
import FooterWrapper from './FooterWrapper';
import ScrollToTopWrapper from './ScrollToTopWrapper';
import Script from 'next/script';
import ScrollIntentWrapper from '../src/components/ScrollIntentWrapper';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

const BASE_URL = process.env.APP_URL || 'https://wiraenergiutama.com';

export const viewport: Viewport = {
  themeColor: '#C8A84B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'PT Wira Energi Utama | Official Company Profile | Industrial Mining Supplier',
    template: '%s | PT Wira Energi Utama'
  },
  description: 'Official portal of PT Wira Energi Utama — Indonesia\'s premium supplier for High-Purity Limestone, CaCO3, Quicklime, Hydrated Lime, and PCC. Serving global smelting, construction, and chemical industries from North Sulawesi.',
  keywords: [
    'PT Wira Energi Utama',
    'tambang batu kapur Sulawesi Utara',
    'limestone supplier Indonesia',
    'batu kapur Manado',
    'batu kapur Kotamobagu',
    'kapur bakar CaO',
    'kapur padam Ca(OH)2',
    'CaCO3 Indonesia',
    'PCC Precipitated Calcium Carbonate',
    'mining company Sulawesi',
    'perusahaan tambang Manado',
    'supplier industri batu kapur',
    'limestone mining Ratatotok',
    'gamping Sulawesi Utara',
    'industrial limestone supplier',
    'PT WEU',
    'Wira Energi Utama',
    'mining Indonesia halal',
    'batu kapur smelter',
    'limestone construction Indonesia',
    'IUP OP limestone',
    'tambang gamping legal Indonesia',
    'kapur pertanian Sulawesi',
    'limestone aggregate Indonesia',
  ],
  authors: [{ name: 'PT Wira Energi Utama', url: BASE_URL }],
  creator: 'PT Wira Energi Utama',
  publisher: 'PT Wira Energi Utama',
  classification: 'Industrial & Mining',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'id': `${BASE_URL}/`,
      'en': `${BASE_URL}/`,
    },
  },
  openGraph: {
    title: 'PT Wira Energi Utama | Tambang Batu Kapur & Supplier Mineral Industri',
    description: 'Perusahaan tambang batu kapur terkemuka di Sulawesi Utara. Produk unggulan: Limestone, CaCO3, Kapur Bakar, Kapur Padam, dan PCC. Bersertifikat IUP OP, berkomitmen pada pertumbuhan berkelanjutan.',
    url: BASE_URL,
    siteName: 'PT Wira Energi Utama',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PT Wira Energi Utama — Tambang Batu Kapur & Industrial Mineral Supplier, Sulawesi Utara',
        type: 'image/png',
      },
    ],
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    type: 'website',
    countryName: 'Indonesia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Wira Energi Utama | Tambang Batu Kapur Sulawesi Utara',
    description: 'Supplier limestone, CaCO3, kapur bakar & PCC industri dari Sulawesi Utara. Legal IUP, berkomitmen pada keberlanjutan.',
    images: ['/og-image.png'],
    site: '@ptweu',
    creator: '@ptweu',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/2.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'ID-SA',
    'geo.placename': 'Manado, Sulawesi Utara',
    'geo.position': '1.4748;124.8421',
    'ICBM': '1.4748, 124.8421',
    'apple-mobile-web-app-title': 'PT WEU',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#0A1628',
    'msapplication-TileImage': '/icon.png',
    'theme-color': '#C8A84B',
  },
  verification: {
    google: 'z_8vV9uY_kRz_6_0_7_8_9_0_1_2_3_4_5_6_7_8_9_0', // Example placeholder, actual verification should be done in GSC
  },
  category: 'Industrial',
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'PT Wira Energi Utama',
      legalName: 'PT Wira Energi Utama',
      alternateName: 'PT WEU',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon.png`,
        width: '512',
        height: '512'
      },
      image: `${BASE_URL}/og-image.png`,
      description: 'Perusahaan tambang batu kapur dan supplier mineral industri berkualitas tinggi dari Sulawesi Utara, Indonesia.',
      foundingDate: '2015',
      foundingLocation: {
        '@type': 'Place',
        name: 'Manado, Sulawesi Utara, Indonesia',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Taman Sari Cluster Lihaga, Blok H3-3, Kel. Paniki Bawah',
        addressLocality: 'Manado',
        addressRegion: 'Sulawesi Utara',
        postalCode: '95256',
        addressCountry: 'ID',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+62-434-260-3008',
          contactType: 'customer service',
          availableLanguage: ['Indonesian', 'English'],
          areaServed: 'ID',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+62-811-4344-168',
          contactType: 'sales',
          contactOption: 'TollFree',
          availableLanguage: ['Indonesian', 'English'],
        },
      ],
      email: 'contact@wiraenergiutama.com',
      sameAs: [
        'https://www.instagram.com/pt_weu',
      ],
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 50,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mineral Products Catalog',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Batu Kapur (Limestone)', description: 'Raw limestone for industrial applications' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'CaCO3 (Calcium Carbonate)', description: 'High-purity calcium carbonate in all grades' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Kapur Bakar (Burn Lime / CaO)', description: 'High-temperature calcined quicklime' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Kapur Padam (Hydrated Lime)', description: 'Premium calcium hydroxide Ca(OH)2' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'PCC (Precipitated Calcium Carbonate)', description: 'Ultra-fine pharmaceutical/industrial grade PCC' } },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#localbusiness`,
      name: 'PT Wira Energi Utama — Kantor Pusat Manado',
      image: `${BASE_URL}/og-image.png`,
      url: BASE_URL,
      telephone: '+62-434-260-3008',
      email: 'contact@wiraenergiutama.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Taman Sari Cluster Lihaga, Blok H3-3, Kel. Paniki Bawah',
        addressLocality: 'Manado',
        addressRegion: 'Sulawesi Utara',
        postalCode: '95256',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 1.4748,
        longitude: 124.8421,
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '13:00' },
      ],
      sameAs: [`${BASE_URL}/#organization`],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'PT Wira Energi Utama',
      alternateName: ['Wira Energi Utama', 'PT WEU'],
      description: 'Portal resmi PT Wira Energi Utama — tambang batu kapur dan supplier mineral industri dari Sulawesi Utara.',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/produk?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      inLanguage: ['id', 'en'],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://edxawclzktunjdxsirpv.supabase.co" />
        <link rel="dns-prefetch" href="https://edxawclzktunjdxsirpv.supabase.co" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} min-h-screen font-sans text-gray-900 bg-white`}>
        <LanguageProvider>
          <ScrollToTopWrapper />
          <NavbarWrapper />
          <main>{children}</main>
          <FooterWrapper />
        </LanguageProvider>

        {/* JSON-LD Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />

        {/* Instant.page performance */}
        <Script
          src="https://instant.page/5.2.0"
          strategy="afterInteractive"
          integrity="sha384-jnZcg0186dfqZPA01eGkkmk2i1A+Rj0/0r3eGzMwbQhZkS0c1rP1rC4v4Z+vO"
        />

        {/* 🔧 CONVERSION PRESSURE SYSTEM: SCROLL INTENT TRIGGER */}
        <ScrollIntentWrapper />
      </body>
    </html>
  );
}
