import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tata Kelola & Standar ISO | Governansi PT Wira Energi Utama',
  description: 'Portal governansi dan standar PT Wira Energi Utama dalam Bahasa Indonesia. Roadmap sertifikasi ISO 9001, 14001, 45001, dashboard KPI keselamatan, registry NIB dan IUP.',
  keywords: ['governansi perusahaan tambang', 'ISO 9001 Indonesia', 'ISO 14001 tambang', 'ISO 45001 K3 Indonesia', 'tata kelola PT WEU', 'sertifikasi ISO Sulawesi'],
  alternates: {
    canonical: 'https://ptweu.company/governance-standards',
    languages: {
      'id': 'https://ptweu.company/governansi-standar',
      'en': 'https://ptweu.company/governance-standards',
    },
  },
  openGraph: {
    title: 'Governansi & Standar ISO | PT Wira Energi Utama',
    description: 'Roadmap ISO 9001/14001/45001, KPI keselamatan, dan registry legal NIB & IUP PT Wira Energi Utama, Sulawesi Utara.',
    url: 'https://ptweu.company/governansi-standar',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Governansi PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Governansi & Standar ISO | PT Wira Energi Utama',
    description: 'Roadmap ISO & KPI keselamatan industri tambang batu kapur Sulawesi Utara.',
    images: ['/og-image.png'],
  },
};

export default function GovernanceIDLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
