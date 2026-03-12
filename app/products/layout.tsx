import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Solutions',
  description: 'Explore our industrial-grade limestone products, advanced mineral processing capabilities, and end-to-end supply chain logistics.',
  openGraph: {
    title: 'Products & Solutions | PT Wira Energi Utama',
    description: 'Explore our industrial-grade limestone products, advanced mineral processing capabilities, and end-to-end supply chain logistics.',
    url: 'https://ptweu.com/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
