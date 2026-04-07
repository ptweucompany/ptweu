import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produk Mineral Industri (Bahasa Indonesia)',
  description: 'Jelajahi produk mineral industri PT Wira Energi Utama: Batu Kapur, CaCO3, Kapur Bakar, Kapur Padam, dan PCC. Kualitas tinggi dari Sulawesi Utara untuk kebutuhan smelter, konstruksi, dan manufaktur.',
  keywords: ['produk batu kapur Indonesia', 'batu kapur Sulawesi', 'CaCO3 kualitas tinggi', 'kapur bakar CaO Manado', 'kapur padam hydrated lime', 'PCC Indonesia'],
  alternates: {
    canonical: 'https://wiraenergiutama.com/products',
    languages: {
      'id': 'https://wiraenergiutama.com/produk',
      'en': 'https://wiraenergiutama.com/products',
    },
  },
  openGraph: {
    title: 'Produk Mineral | PT Wira Energi Utama',
    description: 'Batu Kapur, CaCO3, Kapur Bakar, Kapur Padam & PCC dari Sulawesi Utara untuk industri nasional.',
    url: 'https://wiraenergiutama.com/produk',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Produk Mineral PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produk PT Wira Energi Utama | Sulawesi Utara',
    description: 'Batu Kapur, CaCO3, Kapur Bakar & PCC berkualitas industri dari Sulawesi Utara.',
    images: ['/og-image.png'],
  },
};

export default function ProdukLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
