import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami | PT Wira Energi Utama',
  description: 'Hubungi PT Wira Energi Utama untuk penawaran, konsultasi produk mineral, dan kemitraan bisnis. Kantor di Manado, Sulawesi Utara. Telepon: (0434) 260 3008 | WhatsApp: 0811 4344 168.',
  keywords: ['kontak PT Wira Energi Utama', 'telepon kantor tambang Manado', 'hubungi supplier batu kapur', 'penawaran mineral industri', 'PTWEU contact'],
  alternates: {
    canonical: 'https://ptweu.company/contact',
    languages: {
      'id': 'https://ptweu.company/contact',
      'en': 'https://ptweu.company/contact',
    },
  },
  openGraph: {
    title: 'Hubungi Kami | PT Wira Energi Utama',
    description: 'Telepon: (0434) 260 3008 | WhatsApp: 0811 4344 168. Kami siap melayani kebutuhan mineral industri Anda dari Manado, Sulawesi Utara.',
    url: 'https://ptweu.company/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kontak PT Wira Energi Utama Manado' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubungi PT Wira Energi Utama | Manado, Sulawesi Utara',
    description: 'Konsultasi produk mineral & penawaran: (0434) 260 3008 atau WhatsApp 0811 4344 168.',
    images: ['/og-image.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
