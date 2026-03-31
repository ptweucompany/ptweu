import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Katalog Produk Mineral Industri',
  description: 'Unduh dan jelajahi katalog lengkap produk mineral industri PT Wira Energi Utama. Spesifikasi teknis Limestone, CaCO3, Kapur Bakar, Kapur Padam, dan PCC tersedia.',
  keywords: ['katalog batu kapur Indonesia', 'spesifikasi CaCO3 industri', 'download katalog mineral', 'PT WEU product catalog', 'brosur tambang batu kapur Sulawesi'],
  alternates: {
    canonical: 'https://ptweu.company/catalog',
    languages: {
      'id': 'https://ptweu.company/katalog',
      'en': 'https://ptweu.company/catalog',
    },
  },
  openGraph: {
    title: 'Katalog Produk | PT Wira Energi Utama',
    description: 'Spesifikasi teknis lengkap produk mineral industri: Limestone, CaCO3, Kapur Bakar, Kapur Padam, dan PCC dari Sulawesi Utara.',
    url: 'https://ptweu.company/catalog',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Katalog Produk PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katalog Produk Mineral | PT Wira Energi Utama',
    description: 'Download spesifikasi teknis produk mineral industri lengkap dari PT Wira Energi Utama.',
    images: ['/og-image.png'],
  },
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
