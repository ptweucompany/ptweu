import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://ptweu.company/en',
    languages: {
      en: 'https://ptweu.company/en',
      id: 'https://ptweu.company',
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
