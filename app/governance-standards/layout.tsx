import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tata Kelola & Standar ISO | Governance & Standards',
  description: 'Portal tata kelola dan standar PT Wira Energi Utama. Roadmap sertifikasi ISO 9001, ISO 14001, dan ISO 45001. Data KPI keselamatan dan lingkungan serta registry legal NIB & IUP.',
  keywords: ['ISO 9001 tambang Indonesia', 'ISO 14001 perusahaan tambang', 'ISO 45001 K3', 'tata kelola perusahaan tambang', 'governance mining company', 'PT WEU ISO', 'standar tambang Sulawesi'],
  alternates: {
    canonical: 'https://ptweu.company/governance-standards',
    languages: {
      'id': 'https://ptweu.company/governansi-standar',
      'en': 'https://ptweu.company/governance-standards',
    },
  },
  openGraph: {
    title: 'Tata Kelola & Standar ISO | PT Wira Energi Utama',
    description: 'Roadmap ISO 9001/14001/45001, dashboard KPI keselamatan, dan registry legal NIB & IUP PT Wira Energi Utama.',
    url: 'https://ptweu.company/governance-standards',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Tata Kelola PT Wira Energi Utama' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Governance & ISO Standards | PT Wira Energi Utama',
    description: 'ISO 9001/14001/45001 roadmap dan KPI keselamatan industri tambang batu kapur Sulawesi Utara.',
    images: ['/og-image.png'],
  },
};

export default function GovernanceENLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
