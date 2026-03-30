import ProductPageClient from '../../../src/components/ProductPageClient';

const slugMap: Record<string, string> = {
  'limestone': 'limestone',
  'caco3': 'caco3',
  'burn-lime': 'burnLime',
  'hydrated-lime': 'hydratedLime',
  'pcc': 'pcc'
};

export async function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({
    slug,
  }));
}

export default async function EnglishProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <ProductPageClient 
      slug={slug} 
      langCode="en" 
      slugMap={slugMap} 
    />
  );
}
