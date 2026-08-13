import { redirect } from 'next/navigation';

/**
 * Route /id — redirect ke / (bahasa Indonesia default)
 * Dibuat untuk mencegah 404 saat ada request ke /id
 * yang muncul dari hreflang/alternates di metadata.
 */
export default function IdPage() {
  redirect('/');
}
