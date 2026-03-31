import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profil Perusahaan | Company Profile PT Wira Energi Utama',
  description: 'Unduh profil resmi perusahaan PT Wira Energi Utama. Berisi informasi lengkap tentang tata kelola, operasional tambang, kapasitas produksi, legalitas IUP, dan standar kepatuhan industri di Sulawesi Utara.',
  keywords: ['company profile PT Wira Energi Utama', 'profil perusahaan tambang Sulawesi', 'PT WEU download PDF', 'tambang batu kapur legalitas IUP'],
  alternates: {
    canonical: 'https://ptweu.company/company-profile',
    languages: {
      'id': 'https://ptweu.company/company-profile',
      'en': 'https://ptweu.company/company-profile',
    },
  },
  openGraph: {
    title: 'Profil Perusahaan | PT Wira Energi Utama',
    description: 'Profil resmi PT Wira Energi Utama: tata kelola, kapasitas produksi, legalitas, dan standar kepatuhan industri tambang Sulawesi Utara.',
    url: 'https://ptweu.company/company-profile',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Profil Perusahaan PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Profile PT Wira Energi Utama',
    description: 'Unduh profil resmi perusahaan tambang batu kapur terkemuka dari Sulawesi Utara.',
    images: ['/og-image.png'],
  },
};

export default function CompanyProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
