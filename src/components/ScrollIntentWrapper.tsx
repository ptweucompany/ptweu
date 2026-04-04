'use client';

import { usePathname } from 'next/navigation';
import ScrollIntentCTA from './ScrollIntentCTA';

/**
 * 🔧 CONVERSION PRESSURE SYSTEM: CLIENT-SIDE WRAPPER
 * This component is required because layouts in the App Router are Server Components by default.
 * usePathname() can only be used in a Client Component (marked with "use client").
 */
export default function ScrollIntentWrapper() {
  const pathname = usePathname();
  const lang = pathname?.startsWith('/en') ? 'en' : 'id';
  return <ScrollIntentCTA lang={lang} />;
}
