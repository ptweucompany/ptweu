import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy of PT Wira Energi Utama to understand how we protect and manage your data.',
  openGraph: {
    title: 'Privacy Policy | PT Wira Energi Utama',
    description: 'Read the privacy policy of PT Wira Energi Utama to understand how we protect and manage your data.',
    url: 'https://ptweu.com/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
