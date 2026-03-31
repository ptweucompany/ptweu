import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produk & Solusi Mineral Industri',
  description: 'Eksplorasi produk mineral industri PT Wira Energi Utama: Batu Kapur (Limestone), CaCO3, Kapur Bakar (CaO), Kapur Padam, dan PCC. Kualitas tinggi untuk smelter, konstruksi, dan manufaktur.',
  keywords: ['produk batu kapur industri', 'limestone supplier Indonesia', 'CaCO3 kualitas tinggi', 'kapur bakar CaO', 'kapur padam hydrated lime', 'PCC Indonesia', 'mineral industri Sulawesi'],
  alternates: {
    canonical: 'https://ptweu.company/products',
    languages: {
      'id': 'https://ptweu.company/produk',
      'en': 'https://ptweu.company/products',
    },
  },
  openGraph: {
    title: 'Produk Mineral Industri | PT Wira Energi Utama',
    description: 'Limestone, CaCO3, Kapur Bakar, Kapur Padam, dan PCC berkualitas tinggi dari Sulawesi Utara untuk industri nasional.',
    url: 'https://ptweu.company/products',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Produk Mineral PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produk Mineral PT Wira Energi Utama',
    description: 'Limestone, CaCO3, Kapur Bakar, Kapur Padam & PCC — kualitas industri dari Sulawesi Utara.',
    images: ['/og-image.png'],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
