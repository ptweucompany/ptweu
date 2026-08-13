import { translations } from '../../../src/translations';
import AdvancedBlogDetail from '../../../src/components/AdvancedBlogDetail';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const posts = translations.id.advancedBlog.posts;
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = translations.id.advancedBlog.posts.find((p) => p.id === id);
  if (!post) return { title: 'Industrial Blog | PT Wira Energi Utama' };

  const BASE = 'https://wiraenergiutama.com';

  return {
    title: `${post.title} | Wira Energi Utama Insights`,
    description: post.excerpt,
    keywords: [post.category, 'industrial mineral blog', 'mining news Indonesia', 'PT WEU updates', post.title],
    alternates: {
      canonical: `${BASE}/blog/${id}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE}/blog/${id}`,
      siteName: 'PT Wira Energi Utama',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      locale: 'id_ID',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const post = translations.id.advancedBlog.posts.find((p) => p.id === id);
  const heroT = translations.id.advancedBlog.hero;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-black text-brand-blue uppercase tracking-tight">Publication Not Found</h1>
      </div>
    );
  }

  const BASE = 'https://wiraenergiutama.com';

  // 🧭 SEO MAXIMIZE: BREADCRUMB & ARTICLE SCHEMA
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE },
      { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE}/blog` },
      { '@type': 'ListItem', 'position': 3, 'name': post.title, 'item': `${BASE}/blog/${id}` }
    ]
  };

  // Helper: konversi format "15 Maret 2024" → "2024-03-15" untuk ISO 8601
  const monthMap: Record<string, string> = {
    'Januari': '01', 'Februari': '02', 'Maret': '03', 'April': '04',
    'Mei': '05', 'Juni': '06', 'Juli': '07', 'Agustus': '08',
    'September': '09', 'Oktober': '10', 'November': '11', 'Desember': '12'
  };
  const parseDate = (dateStr: string): string => {
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${year}-${monthMap[month] || '01'}-${day.padStart(2, '0')}`;
    }
    return '2024-03-01';
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${BASE}${post.image}`,
    author: { '@type': 'Organization', name: 'PT Wira Energi Utama', url: BASE },
    publisher: { '@id': `${BASE}/#organization` },
    datePublished: parseDate(post.date),
    dateModified: parseDate(post.date),
    articleSection: post.category,
    inLanguage: 'id-ID',
    isPartOf: { '@id': `${BASE}/#website` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <AdvancedBlogDetail post={post} heroT={heroT} />
    </>
  );
}
