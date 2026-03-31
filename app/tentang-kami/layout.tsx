import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Perusahaan | Sejarah & Visi PT Wira Energi Utama',
  description: 'Sejarah, visi, misi, dan komitmen PT Wira Energi Utama dalam industri tambang batu kapur berkelanjutan. Beroperasi di Sulawesi Utara dengan legalitas IUP OP dan dedikasi pada lingkungan.',
  keywords: ['tentang PT Wira Energi Utama', 'sejarah perusahaan tambang', 'visi misi PT WEU', 'profil perusahaan Sulawesi Utara', 'tambang batu kapur berkelanjutan', 'IUP OP Sulawesi'],
  alternates: {
    canonical: 'https://ptweu.company/about',
    languages: {
      'id': 'https://ptweu.company/tentang-kami',
      'en': 'https://ptweu.company/about',
    },
  },
  openGraph: {
    title: 'Tentang Kami | PT Wira Energi Utama',
    description: 'Sejarah, visi, dan misi PT WEU — perusahaan tambang terkemuka dari Sulawesi Utara.',
    url: 'https://ptweu.company/tentang-kami',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Tentang PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang PT Wira Energi Utama | Sulawesi Utara',
    description: 'Sejarah dan komitmen perusahaan tambang batu kapur terkemuka dari Sulawesi Utara.',
    images: ['/og-image.png'],
  },
};

export default function TentangKamiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
