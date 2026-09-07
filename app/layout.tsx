import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../src/context/LanguageContext';
import NavbarWrapper from './NavbarWrapper';
import FooterWrapper from './FooterWrapper';
import ScrollToTopWrapper from './ScrollToTopWrapper';
import Script from 'next/script';
import ScrollIntentWrapper from '../src/components/ScrollIntentWrapper';
import { getResolvedSiteContent } from '../src/lib/content/resolver';
import type { SiteSettings } from '../src/lib/content/types';

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
      'en': `${BASE_URL}/en`,
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
      { url: '/2.webp?v=1.0.4', sizes: 'any', type: 'image/webp' },
      { url: '/favicon.ico?v=1.0.4', sizes: 'any' },
      { url: '/icon.png?v=1.0.4', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/2.webp?v=1.0.4', sizes: '180x180', type: 'image/webp' },
      { url: '/apple-touch-icon.png?v=1.0.4', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=1.0.4',
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

function toIntlPhone(raw: string): string {
  const digits = (raw || '').replace(/[^\d+]/g, '');
  if (!digits) return '';
  if (digits.startsWith('+')) return digits;
  if (digits.startsWith('0')) return '+62-' + digits.slice(1);
  if (digits.startsWith('62')) return '+' + digits.slice(0, 2) + '-' + digits.slice(2);
  return digits;
}

function buildOrganizationSchema(s: SiteSettings) {
  const head = s.offices[0];
  const sameAs = [s.instagram_url, s.facebook_url, s.linkedin_url].filter(Boolean);
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: s.legal_name,
      legalName: s.legal_name,
      alternateName: s.short_name,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/icon.png`,
        width: '512',
        height: '512'
      },
      image: `${BASE_URL}/og-image.png`,
      description: 'Perusahaan tambang batu kapur dan supplier mineral industri berkualitas tinggi dari Sulawesi Utara, Indonesia.',
      foundingDate: s.founded,
      foundingLocation: {
        '@type': 'Place',
        name: 'Manado, Sulawesi Utara, Indonesia',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: head?.address_id || 'Taman Sari Cluster Lihaga, Blok H3-3, Kel. Paniki Bawah',
        addressLocality: head?.city || 'Manado',
        addressRegion: 'Sulawesi Utara',
        postalCode: '95256',
        addressCountry: 'ID',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: toIntlPhone(s.phone) || '+62-434-260-3008',
          contactType: 'customer service',
          availableLanguage: ['Indonesian', 'English'],
          areaServed: 'ID',
        },
        {
          '@type': 'ContactPoint',
          telephone: toIntlPhone(s.whatsapp) || '+62-813-9956-7777',
          contactType: 'sales',
          contactOption: 'TollFree',
          availableLanguage: ['Indonesian', 'English'],
        },
      ],
      email: s.email_primary,
      sameAs: sameAs.length ? sameAs : ['https://www.instagram.com/pt_weu'],
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: s.employees_approx,
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
      name: `${s.legal_name} — Kantor Pusat Manado`,
      image: `${BASE_URL}/og-image.png`,
      url: BASE_URL,
      telephone: toIntlPhone(s.phone) || '+62-434-260-3008',
      email: s.email_primary,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: head?.address_id || 'Taman Sari Cluster Lihaga, Blok H3-3, Kel. Paniki Bawah',
        addressLocality: head?.city || 'Manado',
        addressRegion: 'Sulawesi Utara',
        postalCode: '95256',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: head?.geo?.lat ?? 1.4748,
        longitude: head?.geo?.lng ?? 124.8421,
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
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings, blocks } = await getResolvedSiteContent();
  const organizationSchema = buildOrganizationSchema(settings);

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} min-h-screen font-sans text-gray-900 bg-white`}>
        <LanguageProvider initialSettings={settings} initialBlocks={blocks}>
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
