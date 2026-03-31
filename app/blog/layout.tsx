import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Berita Industri Tambang',
  description: 'Ikuti berita terbaru, artikel teknis, dan wawasan industri dari PT Wira Energi Utama. Topik: pertambangan batu kapur, inovasi mineral, regulasi lingkungan, dan lebih.',
  keywords: ['blog tambang Indonesia', 'berita industri batu kapur', 'artikel mineral industri', 'PT WEU news', 'pertambangan Sulawesi Utara'],
  alternates: {
    canonical: 'https://ptweu.company/blog',
    languages: {
      'id': 'https://ptweu.company/blog',
      'en': 'https://ptweu.company/blog',
    },
  },
  openGraph: {
    title: 'Blog & Berita | PT Wira Energi Utama',
    description: 'Berita dan artikel terbaru dari industri pertambangan batu kapur dan mineral Indonesia.',
    url: 'https://ptweu.company/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Blog PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Industri Tambang | PT Wira Energi Utama',
    description: 'Berita terbaru industri pertambangan, batu kapur, dan mineral dari Sulawesi Utara.',
    images: ['/og-image.png'],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
