import Link from 'next/link';
import Image from 'next/image';

interface ProductSummary {
  name: string;
  slug: string;
  image: string;
  subtitle: string;
}

interface ProductPreviewProps {
  products: ProductSummary[];
}

export default function ProductPreview({ products }: ProductPreviewProps) {
  return (
    <section
      id="produk"
      className="bg-gray-50 py-20"
      aria-label="Preview produk unggulan PT Wira Energi Utama"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[#0A1628] text-2xl sm:text-3xl font-bold mb-2">
          Produk Mineral Industri Kami
        </h2>
        <p className="text-gray-500 mb-10">
          5 produk turunan batu kapur berkualitas tinggi — tersedia dalam berbagai spesifikasi teknis sesuai kebutuhan industri Anda.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/produk/${product.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#C8A84B]/40 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={`${product.name} — PT Wira Energi Utama`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[#0A1628] font-bold text-lg leading-snug">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.subtitle}</p>
                <span className="mt-4 inline-flex items-center text-[#C8A84B] font-semibold text-sm">
                  Lihat Spesifikasi
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/produk"
            className="inline-flex items-center px-8 py-3 border-2 border-[#0A1628] text-[#0A1628] font-bold rounded-lg hover:bg-[#0A1628] hover:text-white transition-colors duration-200"
          >
            Lihat Semua Produk &amp; Spesifikasi Teknis
          </Link>
        </div>
      </div>
    </section>
  );
}
