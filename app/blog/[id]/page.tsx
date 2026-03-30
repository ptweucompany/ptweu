import { translations } from '../../../src/translations';
import AdvancedBlogDetail from '../../../src/components/AdvancedBlogDetail';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const ids = ['1', '2', '3'];
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = translations.id.advancedBlog.posts.find((p) => p.id === id);
  
  if (!post) return { title: 'Blog | PT Wira Energi Utama' };

  return {
    title: `${post.title} | Blog PT Wira Energi Utama`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  
  // For dynamic pages, we often need to fetch based on current language,
  // but since we're in a server component with no context, we default to ID
  // or use a custom logic. Here we'll default to the ID translation for the static build.
  // In a real app, you might use middleware or a language prefix in the URL.
  
  const post = translations.id.advancedBlog.posts.find((p) => p.id === id);
  const heroT = translations.id.advancedBlog.hero;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-black text-brand-blue uppercase tracking-tight">Publication Not Found</h1>
      </div>
    );
  }

  return <AdvancedBlogDetail post={post} heroT={heroT} />;
}
