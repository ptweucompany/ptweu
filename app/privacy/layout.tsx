import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Privacy Policy',
  description: 'Baca kebijakan privasi PT Wira Energi Utama untuk memahami bagaimana kami melindungi dan mengelola data pribadi pengguna website ptweu.company.',
  keywords: ['kebijakan privasi PT WEU', 'privacy policy tambang Indonesia', 'GDPR PT Wira Energi Utama'],
  alternates: {
    canonical: 'https://ptweu.company/privacy',
  },
  openGraph: {
    title: 'Kebijakan Privasi | PT Wira Energi Utama',
    description: 'Kebijakan privasi resmi PT Wira Energi Utama untuk website ptweu.company.',
    url: 'https://ptweu.company/privacy',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kebijakan Privasi PT Wira Energi Utama' }],
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
