import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peta Situs | HTML Sitemap',
  description: 'Daftar lengkap semua halaman PT Wira Energi Utama untuk memudahkan navigasi dan pengindeksan mesin pencari.',
  keywords: ['sitemap PT WEU', 'peta situs PT Wira Energi Utama', 'daftar halaman website'],
  alternates: {
    canonical: 'https://ptweu.company/site-map',
  },
  openGraph: {
    title: 'Peta Situs | PT Wira Energi Utama',
    description: 'Daftar lengkap semua halaman website PT Wira Energi Utama.',
    url: 'https://ptweu.company/site-map',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PT Wira Energi Utama Sitemap' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HtmlSitemapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
