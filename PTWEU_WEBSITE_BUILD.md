# PT Wira Energi Utama: Ultimate Build Documentation
**Document Version**: 2.0 (Comprehensive)
**Project Status**: Production Hardened
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

### Backend & AI Intelligence
- **Database Layer**: Supabase (PostgreSQL)
    - **Transaction Pooler**: `aws-1-ap-southeast-1.pooler.supabase.com:6543`
    - **Security**: Hardened `.env` credentials with URL-encoded connectivity.
- **AI Brain**: Google Generative AI (Gemini 1.5 Flash)
    - Integrated for B2B industrial intelligence and technical parameter validation.
- **Deployment Strategy**: **100% Static HTML Export**
    - `output: 'export'` configuration in `next.config.js`.
    - Guarantees zero-latency, zero-server-side-vulnerability, and instant global delivery.

---

## 📁 2. Project Folder Topology

| Directory | Purpose | Contents |
| :--- | :--- | :--- |
| `/app` | Routing Layer | localized pages, layouts, sitemaps, and robots.tsx. |
| `/src/components` | UI Logic | 40+ reusable industrial components and page fragments. |
| `/src/context` | State Management | `LanguageContext` handling global ID/EN switching. |
| `/src/data` | Static Data Store | Technical parameters for Products, Industries, and Locations. |
| `/src/styles` | Global CSS | Tailwind directives and base HSL color system. |
| `/public` | Asset Hub | High-resolution drone shots, product macro photography, and fonts. |

---

## 🧭 3. Exhaustive Sitemap (69+ Prerendered Routes)

The application features a bidirectional bilingual mapping system. Every Indonesian (ID) route has a corresponding English (EN) partner.

### Primary Authority Pages
- **Home**: `/` (ID) / `/en` (EN)
- **Corporate Profile**: `/company-profile`
- **About Us**: `/tentang-kami` (ID) / `/about` (EN)
- **Governance**: `/governansi-standar` (ID) / `/governance-standards` (EN)
- **Sustainability**: `/berkelanjutan` (ID) / `/sustainability` (EN)
- **Catalog Hub**: `/katalog` (ID) / `/catalog` (EN)

### Industrial Deep-Dives (Industri & Products)
- **Products**: `/produk` & `/en/products`
    - Slugs: `batu-kapur`, `kalsium-karbonat`, `kapur-bakar`, `kapur-padam`, `pcc`, `agregat`.
- **Industries**: `/industri` & `/en/industries`
    - 15+ Slugs: `semen`, `baja`, `pltu`, `kimia`, `pertanian`, `konstruksi`, `pengolahan-air`, `kertas-plastik`, `gula`, `kaca`, `kulit`, `pakan-ternak`, `cat-coating`, `emas`, `keramik`.

### Geographic Presence (Lokasi)
- **Regional Hubs**: 14+ ID Slugs (Manado, Bitung, Jakarta, Surabaya, Makassar, Cilegon, etc.)
- **Global Export Hubs**: Australia, China, Singapore, Asia Hub.

---

## 🛠️ 4. Component Inventory (The Industrial UI System)

### Landing & Conversion
- `Hero`: High-impact landing with CTA transition.
- `InquiryForm`: 4-step B2B qualification engine.
- `ScrollIntentCTA`: Smart trigger for lead acquisition.
- `TrustBar`: Industrial partnership visualizer.

### Technical & Operational
- `PhotoSlider`: HD Operational Documentation (27-image array).
- `ProductionStats`: Recharts-powered capacity visualizer.
- `AdvancedSustainability`: ESG & Reclamation metrics dashboard.
- `AdvancedGovernance`: ISO readiness and legal transparency portal.
- `TechnicalDocumentationSection`: Laboratory and QC verification grid.

### UI Infrastructure
- `Navbar` & `Footer`: Synchronized bilingual navigation.
- `PDFProductCatalog`: Dynamic A4 technical synthesis engine.
- `LeadScrollButton`: Sticky mobile conversion pressured bar.

---

## 💾 5. Data Architecture & Localization

### The Single Source of Truth
The platform is entirely content-driven by **`src/translations.ts`**. This dictionary contains 10,000+ words across both locations, allowing for instant site-wide updates by editing a single file.

### Internal SEO Link Mapping
Managed via **`src/data/internalLinks.ts`**, this layer provides:
- Bidirectional INDUSTRY-PRODUCT association.
- Search Engine crawler path optimization.
- Contextual related-page recommendations for b2b users.

---

## ⚡ 6. Advanced Industrial Engines

### B2B Inquiry Workflow
1. **Contact Identification**: Validates name and corporate email.
2. **Product Selection**: Maps industry interest to specific mineral grades.
3. **Logistics Engine**: Captures shipping requirements (FOB/CNF/CIF).
4. **Parameter Validation**: Final technical notes for the sales team.

### Hardened PDF Engine
Utilizes `html2canvas` and `jsPDF` with advanced **CSS Sanitization (Hex-Fallback Mode)** to ensure accurate technical documentation exports without browser-side crashes.

---

## ⚙️ 7. Environmental Configuration (.env)

The project is governed by a secure environment architecture:
- `APP_URL`: Drives SEO canonical links and sitemap absolute paths.
- `GEMINI_API_KEY`: Industrial AI integration.
- `SUPABASE_URL` & `ANON_KEY`: Database handshake variables.
- `DATABASE_URL`: Direct PostgreSQL connectivity for scaling.

---

## 🚀 8. Build & Maintenance Commands

### Development
- `npm run dev`: Starts Turbopack development server.

### Production
- `npm run build`: Executes full static export logic.
- Result: **`dist/`** folder containing production-ready minified HTML/JS/CSS assets.

---
**Official Build Documentation - April 2026**
*Standardizing Industrial Digital Excellence.*
