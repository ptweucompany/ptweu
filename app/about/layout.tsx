import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | Sejarah & Visi PT Wira Energi Utama',
  description: 'Pelajari sejarah, visi, misi, dan komitmen PT Wira Energi Utama dalam industri tambang batu kapur berkelanjutan di Sulawesi Utara sejak berdiri hingga kini.',
  keywords: ['tentang PT Wira Energi Utama', 'sejarah perusahaan tambang', 'visi misi PT WEU', 'profil perusahaan Sulawesi Utara', 'tambang batu kapur berkelanjutan'],
  alternates: {
    canonical: 'https://ptweu.company/about',
    languages: {
      'id': 'https://ptweu.company/tentang-kami',
      'en': 'https://ptweu.company/about',
    },
  },
  openGraph: {
    title: 'Tentang Kami | PT Wira Energi Utama',
    description: 'Pelajari sejarah, visi, misi, dan komitmen PT Wira Energi Utama dalam industri tambang batu kapur berkelanjutan di Sulawesi Utara.',
    url: 'https://ptweu.company/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PT Wira Energi Utama - About Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang PT Wira Energi Utama | Tambang Batu Kapur Sulawesi Utara',
    description: 'Sejarah, visi, dan misi PT Wira Energi Utama — perusahaan tambang terkemuka dari Sulawesi Utara.',
    images: ['/og-image.png'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
