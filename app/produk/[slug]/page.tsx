import ProductPageClient from '../../../src/components/ProductPageClient';

const slugMap: Record<string, string> = {
  'batu-kapur': 'limestone',
  'kalsium-karbonat': 'caco3',
  'kapur-bakar': 'burnLime',
  'kapur-padam': 'hydratedLime',
  'pcc': 'pcc'
};

export async function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({
    slug,
  }));
}

export default async function IndonesianProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <ProductPageClient 
      slug={slug} 
      langCode="id" 
      slugMap={slugMap} 
    />
  );
}
