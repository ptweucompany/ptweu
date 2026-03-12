import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Profile',
  description: 'Download the official PT Wira Energi Utama company profile and discover our industry-leading governance, operations, and compliance standards.',
  openGraph: {
    title: 'Company Profile | PT Wira Energi Utama',
    description: 'Download the official PT Wira Energi Utama company profile and discover our industry-leading governance, operations, and compliance standards.',
    url: 'https://ptweu.com/company-profile',
  },
};

export default function CompanyProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
