'use client';

import { usePathname } from 'next/navigation';
import { useLanguage } from '../src/context/LanguageContext';
import Footer from '../src/components/Footer';

export default function FooterWrapper() {
  const { t, tc, settings } = useLanguage();
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) return null;

  return (
    <Footer
      t={t.contact}
      footerT={t.footer}
      profileT={t.profile}
      cms={{
        description: tc('footer.description'),
        contactHeading: tc('footer.contact_heading', 'Contact Info'),
        quickLinksHeading: tc('footer.quicklinks_heading', 'Quick Links'),
        rights: tc('footer.rights', t.footer.rights),
        legalName: settings.legal_name,
        phone: settings.phone,
        emailPrimary: settings.email_primary,
        emailSecondary: settings.email_secondary,
        address: settings.offices[0]?.address_id ?? '',
        instagramUrl: settings.instagram_url,
        facebookUrl: settings.facebook_url,
        linkedinUrl: settings.linkedin_url,
      }}
    />
  );
}
