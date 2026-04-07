# PT Wira Energi Utama: Ultimate Build Documentation
**Document Version**: 3.0 (Final Handover)
**Project Status**: Production Hardened & Optimized
**Build Reference**: Next.js Static Export (April 2026)

---

## 🏗️ 1. Technical Core & Infrastructure

### Frontend Architecture
- **Framework**: Next.js 16.1.6 (App Router)
- **Engine**: React 19.0.0 (Global State via `LanguageProvider`)
- **Build Tool**: Turbopack (Optimized Dev Speed) / Static Export (Production)
- **Styling Engine**: Tailwind CSS 4.x (Utility-first, Custom HSL Color Tokens)
- **Animation Framework**: Motion (formerly Framer Motion) for scroll-locked and trigger-based micro-interactions.
- **Icons**: Lucide React (Industrial subset)
- **Performance**: Integrated `instant.page` for 65ms pre-hover navigation speed.

### Backend & AI Intelligence
- **Database Layer**: Supabase (PostgreSQL)
    - **Transaction Pooler**: `aws-1-ap-southeast-1.pooler.supabase.com:6543`
    - **Security**: Hardened `.env` credentials with URL-encoded connectivity.
- **AI Brain**: Google Generative AI (Gemini 1.5 Flash)
    - Integrated for B2B industrial intelligence and technical parameter validation.
- **Deployment Strategy**: **100% Static HTML Export**
    - `output: 'export'` configuration in `next.config.js`.
    - Guarantees zero-latency, zero-server-side-vulnerability, and instant global delivery.
- **Lead Management**: **Formspree Integration**
    - Inquiry forms are routed to `https://formspree.io/f/xykbeevg`.
    - Primary business email: `contact@ptweu.company` (Forwarded via Cloudflare).

---

## 📁 2. Project Folder Topology (The Build Structure)

| Directory | Purpose | Detailed Contents |
| :--- | :--- | :--- |
| `/app` | Routing & Metadata | `page.tsx`, `layout.tsx`, `robots.ts`, `sitemap.ts`. Handles the core URL structure. |
| `/src/components` | UI Logic Hub | Atomic components (Button, Input) to complex blocks (Hero, InquiryForm). |
| `/src/context` | Application State | `LanguageContext.tsx`: Manages the ID/EN toggle across the entire tree. |
| `/src/data` | Structured Intelligence | `products.ts`, `industries.ts`, `internalLinks.ts`. Defines the site's knowledge base. |
| `/src/lib` | Core Utilities | `gemini.ts` (AI logic), `utils.ts` (Tailwind merging). |
| `/src/styles` | Design System | `globals.css`: Contains CSS variables for brand colors and global resets. |
| `/public` | Static Assets | Favicons, optimized WebP images, and fonts. |

---

## 🧭 3. Exhaustive Sitemap & Route Architecture

The application uses dynamic segment generation for products, industries, and locations, resulting in **69+ unique pages**.

### Authority Core
- **Home (ID/EN)**: `/` | `/en`
- **Corporate Profile**: `/company-profile` | `/en/company-profile`
- **Sustainability**: `/keberlanjutan` | `/sustainability`
- **Governance**: `/governansi-standar` | `/governance-standards`
- **About Us**: `/tentang-kami` | `/about`
- **Technical Catalog**: `/katalog` | `/catalog`

### The Industrial Matrix (Slugs)
- **Product Depth**: `batu-kapur`, `kalsium-karbonat`, `kapur-bakar`, `kapur-padam`, `pcc`, `agregat`.
- **Market Segments**: 15 industries including `semen`, `baja`, `pltu`, `kimia`, `pertanian`, `emas`, and `konstruksi`.
- **Regional Footprint**: 25+ locations mapping the Indonesian mining landscape (Manado, Jakarta, Surabaya, etc.) and global hubs.

---

## 🛠️ 4. Premium Component Inventory

### Conversion & Engagement
- **`InquiryForm`**: A sophisticated 4-step B2B gateway that qualifies leads by technical requirement.
- **`LeadScrollButton`**: A conversion-optimized floating action bar for mobile users.
- **`Hero`**: Next-gen visual landing with performance-prioritized imagery.

### Data Visualization
- **`ProductionStats`**: Real-time capacity charts for production transparency.
- **`AdvancedSustainability`**: Interactive ESG component demonstrating environmental stewardship.
- **`AdvancedAbout`**: Storytelling component with integrated Sustainability CTAs.

### Document Generation
- **`PDFProductCatalog` / `PDFCompanyProfile`**: High-fidelity HTML-to-Canvas engines for technical PDF generation without page reloads.

---

## ⚡ 5. Performance Hardening (100/100 Strategy)

The platform is engineered for **instant-open** capabilities:
1. **Asset Optimization**: Transitioned from heavy SVGs/PNGs to next-gen **WebP** formats (e.g., `2.webp` logo transition).
2. **Metadata Hygiene**: Removed redundant preconnects (Google Fonts, Supabase) to minimize DNS lookups.
3. **LCP Priority**: Hero images use `priority` and `fetchPriority="high"` to render instantly.
4. **Bypass Hydration**: Strategic use of `suppressHydrationWarning` and `next/dynamic` to handle bilingual switching without layout shift.

---

## ⚙️ 6. Environment & Configuration (.env)

The current production environment is managed via the following variables:
- `APP_URL`: The canonical domain for SEO indexation (`https://wiraenergiutama.com`).
- `GEMINI_API_KEY`: Secure key for industrial AI queries.
- `NEXT_PUBLIC_FORMSPREE_ID`: `xykbeevg` (Routes inquiry data).
- `SUPABASE_URL` / `ANON_KEY`: Database handshake for real-time syncing.
- `DATABASE_URL`: PostgreSQL connection string for heavy data operations.

---

## 🚀 7. Operations & Maintenance

### Daily Development
- `npm run dev`: High-speed development mode with Turbopack.

### Deployment Cycle
1. `npm run build`: Generates the static production bundle.
2. `dist/`: The resulting folder is ready for direct deployment to Cloudflare Pages or any static host.

---
**Official Build Documentation - Final Release v3.0**
*PT Wira Energi Utama: Standardizing Industrial Digital Excellence.*
*Last System Audit: April 2026*
