import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about PT Wira Energi Utama, our history, our commitment to sustainable mining, and our community impact in Ratatotok, North Sulawesi.',
  openGraph: {
    title: 'About Us | PT Wira Energi Utama',
    description: 'Learn about PT Wira Energi Utama, our history, our commitment to sustainable mining, and our community impact in Ratatotok, North Sulawesi.',
    url: 'https://ptweu.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
