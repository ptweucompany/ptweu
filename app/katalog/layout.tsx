import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Katalog Produk Mineral Industri',
  description: 'Katalog lengkap produk mineral industri PT Wira Energi Utama dalam Bahasa Indonesia. Spesifikasi teknis Batu Kapur, CaCO3, Kapur Bakar, Kapur Padam, dan PCC.',
  keywords: ['katalog batu kapur Indonesia', 'spesifikasi CaCO3 industri', 'katalog mineral Sulawesi', 'PT WEU katalog produk'],
  alternates: {
    canonical: 'https://ptweu.company/catalog',
    languages: {
      'id': 'https://ptweu.company/katalog',
      'en': 'https://ptweu.company/catalog',
    },
  },
  openGraph: {
    title: 'Katalog Produk | PT Wira Energi Utama',
    description: 'Spesifikasi teknis Batu Kapur, CaCO3, Kapur Bakar, Kapur Padam, dan PCC dari Sulawesi Utara.',
    url: 'https://ptweu.company/katalog',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Katalog PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Katalog Mineral | PT Wira Energi Utama',
    description: 'Spesifikasi produk mineral industri lengkap dari PT Wira Energi Utama.',
    images: ['/og-image.png'],
  },
};

export default function KatalogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
