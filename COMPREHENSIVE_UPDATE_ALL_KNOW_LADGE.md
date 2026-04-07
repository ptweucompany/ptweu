# Comprehensive Update: Project Knowledge Base

This document provides a detailed overview of the current state of the PT Wira Energi Utama website to assist in the planned data renewal and potential framework upgrade.

## 1. Technical Stack
- **Framework:** React 19.0.0
- **Build Tool:** Vite 6.0.0+ (Current: ^6.2.0)
- **Styling:** Tailwind CSS 4.x
- **Routing:** React Router 7 (using `BrowserRouter`)
- **Animation:** Motion (framer-motion updated)
- **Icons:** Lucide React
- **Charts:** Recharts
- **Backend/API (Partial):** Express 4.21.2, Better-SQLite3, Google Generative AI (GenAI)

## 2. Project Structure
The project follows a standard Vite-React structure:
- `/src/components`: 30 functional components (Hero, Navbar, Footer, etc.)
- `/src/pages`: `Home.tsx` and `CompanyProfile.tsx`
- `/src/translations.ts`: Centralized dictionary for Multi-language support (ID & EN).
- `/src/types.ts`: TypeScript definitions for translations and application state.
- `/src/App.tsx`: Main entry point handling routing and language state.

## 3. Core Features
- **Multi-language Support:** Switching between Indonesian and English via a state provider in `App.tsx`.
- **Responsive Design:** Optimized for mobile (sm) and desktop (md+) using Tailwind.
- **Corporate Branding:** Using a "Brand Blue" and "Brand Gold" color palette.
- **Dynamic Content:** Content is almost entirely driven by the `translations.ts` file, making it easy to renew data by editing one file.

## 4. Components Inventory
Detailed list of components currently in use:
1. `AboutUs`: Company history and overview.
2. `CommunityImpact`: CSR and local community involvement.
3. `ComplianceQuality`: Legal and quality compliance details.
4. `ContactModal`: Appointment/contact form popup.
5. `CorporateGovernance`: Management and GCG standards.
6. `EconomicBenefits`: Value proposition for partners.
7. `EnvironmentCommitment`: Sustainability and reclamation.
8. `FleetEquipment`: List of heavy equipment (Komatsu, Isuzu).
9. `Footer`: Contact info and copyright.
10. `FutureVision`: Strategic goals.
11. `GeologicalAdvantage`: Soil and mineral data (Ratatotok area).
12. `Hero`: Main landing section with CTA.
13. `IndustrialApplications`: Use cases for limestone products.
14. `Infrastructure`: Jetty and crushing plant details.
15. `LaboratoryDetail`: Testing labs (Sucofindo, Intertek, etc.).
16. `LegalStanding`: IUP OP license info.
17. `MappingLocation`: Geographical mapping.
18. `MarketPresence`: Industry segments served (Smelter, Construction).
19. `MiningInnovation`: Digital monitoring and tech adoption.
20. `MiningProcess`: Step-by-step workflow (Exploration to Crushing).
21. `Navbar`: Navigation and language switcher.
22. `OperationalExcellence`: Production stats (250 TPH).
23. `ProductionStats`: Capacity charts.
24. `Products`: List of limestone derivatives (CaO, CaCO3, PCC).
25. `ProjectGallery`: Visual documentation.
26. `QualityAssurance`: Testing protocols.
27. `QualityControlWorkflow`: QC sampling and analysis steps.
28. `SafetyStandards`: K3 (HSE) targets and protocols.
29. `ScrollToTop`: Navigation helper.
30. `SupplyChain`: Logistics and distribution (Sea/Land).

## 5. Potential Upgrade to Next.js 16.1.6
Moving to Next.js 16.1.6 would provide:
- **Server-Side Rendering (SSR):** Faster initial load and better SEO for the landing page.
- **App Router:** A more robust file-system based routing system.
- **Image Optimization:** Automated handled via `next/image`.
- **Turbopack:** Faster development build times.

---

## 6. Recent Upgrades (March 2026 Phase 1-5)
- **Framework Migration:** Successfully migrated from Vite (React 19) to **Next.js 16.1.6 (App Router)** for enhanced SEO, SSR, and robust routing.
- **Content Expansion:** Designed and developed comprehensive `/about`, `/products`, and `/privacy` pages featuring interactive deep-dive sections (8+ per page).
- **Corporate Identity & Legal:** 
  - Standardized the Vision ("Menjadi perusahaan industri pertambangan kapur/gamping global terkemuka yang tumbuh berkelanjutan.") and the 6 core Missions across all languages.
  - Implemented a detailed "Legalitas & Formasi Perusahaan" section in `/company-profile`, showcasing 6 critical operational and environmental licenses (IUP, UKL-UPL, PKKPR Laut, etc.) in a modern grid layout.
- **Visual Overhaul:** Replaced all generic and mock AI images with high-resolution, industry-contextual visuals (drone shots, heavy machinery, labs) accompanied by highly descriptive, SEO-optimized `alt` tags emphasizing PT Wira Energi Utama's operations.
- **PDF Generation:** Implemented a robust A4 PDF exporter for the `/company-profile` utilizing `html2canvas` and `jsPDF`, complete with UX loading states.
- **SEO Mastery:** Structured global and route-specific metadata across the Next.js App Router (OG, Twitter, Keywords), leveraging `og-image.webp`, and programmatically generating `sitemap.xml` and `robots.txt` for absolute crawler optimization.
- **Deployment Strategy:** Configured pure static HTML export (`output: 'export'`) in `next.config.js` to guarantee seamless, error-free deployment on Cloudflare Pages or Vercel.

---

## 7. Recent Upgrades (March 2026 Phase 6 - Governance & Visuals)
- **Governance & ISO Readiness**: 
  - Implemented the **Governance & Standards** portal (`/governansi-standar` & `/governance-standards`) to support ISO 9001, 14001, and 45001 certification.
  - Features an interactive **ISO Certification Roadmap** and live **Safety/Environmental Dashboards** (LTI, Fatality, Reclamation rates).
  - Explicitly indexed official legal registry data (NIB, IUP) to demonstrate corporate transparency to auditors.
- **UI/UX Modernization**:
  - **Navbar Optimization**: Removed the "Home" icon and "Blog" link from the top navigation for a text-first, high-end professional aesthetic.
  - **Material-Focused Visuals**: Redesigned the Landing Page product cards to use **High-Resolution Macro Imagery** of actual minerals (Limestone, CaCO3, Burn Lime, Hydrated Lime, PCC) with 700ms zoom-in hover effects.
- **Asset Reorganization**: Optimized the `public/products/` directory with clean, descriptive naming conventions to resolve 404 indexing issues and improve asset management.

## 9. Recent Upgrades (March 2026 Phase 3 — Lead Engine & Conversion)
- **Smart Inquiry System**: Implemented a professional **4-step B2B multi-step form** (`InquiryForm.tsx`) featuring per-step validation (Contact → Product → Logistics → Details).
- **Deep Parameter Integration**: The system now supports **URL pre-filling** (`?product`, `?industry`, `?delivery`), allowing users from specific SEO clusters to skip selection steps and jump directly into the qualification flow.
- **Lead Qualification Flow**: Redesigned `/kontak` and `/en/contact` as high-trust lead acquisition hubs, incorporating office maps, FAQ, and real-time WhatsApp structured message generation.
- **Contextual CTA Architecture**: Deployed a high-conversion `CTASection.tsx` with three specialized variants:
  - **Quote**: Focused on direct mineral pricing (Products & Landing).
  - **Consult**: Focused on industrial specifications (Industry Clusters).
  - **Availability**: Focused on shipping lead times and FOB/CIF (Location/Export Clusters).
- **Conversion-Optimized UX**:
  - **Mobile Sticky Bar**: Persistent "Mulai Penawaran" bars on product pages for maximum thumb-reach conversion.
  - **Navbar Lead Highlight**: Shimmer and pulsate effects on the Navbar "Kontak" button to guide users toward the primary business objective.
- **Technical Resilience**: Resolved Next.js static prerendering issues by modularizing interactive scroll handlers into the `LeadScrollButton.tsx` client component.

## 10. Build & Route Topology
The application is optimized for **Static Site Generation (SSG)** via Next.js 16.1.6 (Turbopack).

### Build Metrics (Phase 3 Final)
- **Total Prerendered Pages:** 63+
- **Compilation Time:** 22.9s
- **TypeScript Verification:** 12.6s
- **Page Data Collection:** 1339.8ms

### Application Sitemap (Updated)
```text
Route (app)
┌ ○ /                           (Home)
├ ○ /_not-found                 (404)
├ ○ /about                      (About Us)
├ ○ /api/status                 (Health Check)
├ ○ /blog                       (News Archive)
├ ● /blog/[id]                  (Dynamic Article: 1, 2, 3)
├ ○ /catalog                    (Product Catalog)
├ ○ /company-profile            (Corporate Hub)
├ ○ /en/contact                 (EN Inquiry Hub)
├ ● /en/industries/[slug]       (EN Industries: Steel, PLTU, etc.)
├ ● /en/locations/[slug]        (EN Export: Global, Australia, etc.)
├ ● /en/products/[slug]         (EN Products: Limestone, etc.)
├ ○ /governance-standards       (EN Governance)
├ ○ /governansi-standar         (ID Governansi)
├ ○ /html-sitemap               (SEO Sitemap)
├ ○ /industri                   (ID Industri Hub)
├ ● /industri/[slug]            (ID Industri: Semen, Baja, etc.)
├ ○ /katalog                    (ID Katalog)
├ ○ /kontak                     (ID Inquiry Hub)
├ ○ /lokasi                     (ID Lokasi Hub)
├ ● /lokasi/[slug]              (ID Lokasi: Manado, Bitung, etc.)
├ ○ /privacy                    (Legal Privacy)
├ ○ /products                   (Product Overview)
├ ○ /produk                     (ID Produk Summary)
├ ● /produk/[slug]              (ID Produk Deep-dive)
├ ○ /robots.txt                 (Crawler Policy)
├ ○ /sitemap.xml                (Search Index Index)
├ ○ /sustainability             (EN Sustainability)
├ ○ /berkelanjutan              (ID Keberlanjutan)
└ ○ /tentang-kami               (ID Tentang Kami)
```

## 11. Recent Upgrades (April 2026 Phase: Final Hardening & B2B Leads)
- **Interactive "Mini Page" Modal System**:
  - Implemented a motion-powered modal system in `AdvancedCatalog.tsx` to provide deep technical insights without page transitions.
  - Deployed premium macro product photography for *Limestone Lumpy, Concrete Aggregate, CaCO3 Powder, and PCC Nanoscale*.
  - Enhanced B2B trust by integrating catalog download metadata (File Size, Versioning) into the primary PDF CTA.
- **Structural SEO Authority Engine**:
  - Refactored `src/data/internalLinks.ts` to provide a robust, multi-language bidirectional mapping between Industries and Products.
  - Standardized URL pairs (`id` and `en`) for all major route clusters, ensuring 100% crawl integrity for search engines.
- **Technical Softening & Build Reliability**:
  - Resolved critical Next.js 16 static export errors triggered by undefined property access (`auth` destructuring errors) during prerendering.
  - Eliminated build-time blockers by optimizing component imports and ensuring all data schemas are strictly validated against the App Router.
- **Conversion Pressure Integration**:
  - Successfully deployed `ScrollIntentWrapper`, `ScrollIntentCTA`, and `TrustMicroSection` as global layout components to capture and qualify B2B traffic.
  - Finalized the **InstaPage Performance** baseline with optimized `.webp` hero assets and zero client-side routing latency.

## 12. Recent Upgrades (April 4, 2026 - Corporate Visual & Content Expansion)
- **High-Resolution Drone Imagery Integration**:
  - Replaced the primary Landing Page background (`mining-bg.webp`) with high-resolution drone photography from the Ratatotok site.
  - Implemented `PhotoSlider.tsx`, a premium motion-driven slider component for operational documentation ("Gambaran Kerja Nyata").
- **Comprehensive Corporate Data Enrichment**:
  - Injected 4+ new corporate sections into `/tentang-kami` and the company profile, including **Leadership & Management**, **Mining History**, and **Asset/Equipment Inventory**.
  - Expanded the B2B Technical documentation section in `/katalog` ("Dokumentasi Teknis") with high-resolution laboratory and operational grids.
- **Interactive Visual Storytelling**:
  - Deployed the `PhotoSlider` across both the About page and the Corporate Profile to showcase real-world operational facilities.
  - Implemented `TechnicalDocumentationSection.tsx` as a reusable component for showcasing transparency in quality control and laboratory processes.
- **Localization Synchronicity**:
  - Fully synchronized Indonesian and English locales for all new sections within `translations.ts`.
  - Maintained 100% build stability with `output: 'export'` ensuring low-latency static delivery.

### Build Metrics (Final Expansion Release)
- **Total Prerendered Pages:** 65+
- **Build Outcome:** **SUCCESSFUL** ✅ 
- **Static Export Status:** Production Grade Optimized.

## 13. Recent Upgrades (April 4, 2026 - Production-Grade Hardening & Optimization)
- **Footer Navigation & Hierarchy Cleanup**:
  - Deprecated the "Tentang" and "Governansi" localized pathways from the quick links footer to streamline user journey directly toward B2B conversion assets.
- **Landing Page Performance Enhancements ("Instant Page" Architecture)**:
  - Enforced strict static generation directives (`export const dynamic = 'force-static'`) across the primary application entry points (`app/page.tsx` and `app/en/page.tsx`).
  - Maximized Lighthouse scores utilizing eager-loaded Hero images combined with programmatic prerendering and next/dynamic namespace resolution.
- **Data Architecture & Type Safety Remediation**:
  - Resolved `next/dynamic` import namespace collisions at the route-segment level.
  - Rectified structural JSON object inconsistencies in `translations.ts` by decoupling the `projectGallery` namespace from within the `advancedGovernance` object, restoring `tsc` build integrity.

## 14. Recent Upgrades (April 7, 2026 - Production Hardening & PDF Intelligence)
- **Advanced PDF Catalog Engine (Hardened)**:
    - **Crash-Proof Rendering**: Resolved critical `html2canvas` parsing errors related to modern CSS color functions (`lab()`, `oklch()`) by implementing aggressive Hex-code sanitization in the `onclone` callback.
    - **Architectural Reliability**: Refactored the catalog system with `React.forwardRef` and `'use client'` directives, ensuring 100% interactive hydration and accurate DOM capture for export.
    - **Professional Multi-Page Export**: Upgraded to a multi-page A4 synthesis engine rendering at 2x scale for high-definition, print-ready technical documentation.
- **Supabase & Database Infrastructure**:
    - **Secure Environment Management**: Populated production-ready Supabase credentials (`URL`, `ANON_KEY`, `PUBLISHABLE_KEY`) within a hardened `.env` architecture.
    - **Connection String Optimization**: Configured both Transaction Pooler (for serverless/Next.js) and Direct Connection (for migrations) with URL-encoded passwords to ensure protocol compatibility.
- **Industrial Intelligence Expansion**:
    - **6 New Strategic Applications**: Injected high-value technical usage data for *Split Stone (Building Material), PLTU (Power Plant), Cement, Paper, Chemicals, and Agriculture*.
    - **Bidirectional Data Mapping**: Synchronized Indonesian (ID) and English (EN) technical specifications within `translations.ts` to maintain global data parity across all localized routes.
- **"Instant Page" Speed Optimization**:
    - **DNS Pre-resolution**: Implemented `preconnect` and `dns-prefetch` for the Supabase infrastructure in the global `layout.tsx`, shaving critical milliseconds off initial database handshake times.
    - **Static-First Baseline**: Verified the performance of 65+ prerendered pages utilizing Next.js `output: 'export'`, guaranteeing zero-latency delivery.

### Build Metrics (Production Final)
- **Total Prerendered Pages:** 69+
- **Build Outcome:** **SUCCESSFUL** ✅
- **Database Status:** Connected (Supabase)
- **PDF Reliability Status:** 100% Stable (Hex-Fallback Mode)

## 15. Recent Upgrades (April 7, 2026 - Sustainability & Gallery Refinement)
- **Sustainability Web Portal (ESG Hub)**:
    - Implemented a dedicated Sustainability architecture featuring **AdvancedSustainability.tsx**.
    - Sections include: **Ecosystem Restoration (Reclamation Strategy)**, **Community Empowerment (CSR)**, and **Environmental Management Dashboard**.
    - Integrated with `translations.ts` for full ID/EN parity across `/sustainability` and `/berkelanjutan`.
- **Operational Gallery Hardening**:
    - Replaced existing gallery assets with a high-definition set of 27 images from the `/public/Foto webp` directory.
    - Optimized the `PhotoSlider.tsx` component to handle the expanded image array across the Corporate Profile and About pages.
- **Project Documentation Integrity**:
    - Updated `COMPREHENSIVE_UPDATE_ALL_KNOW_LADGE.md` to reflect the latest 69+ page routing topology and internal link mapping.

*Last Updated: April 7, 2026 (Completion of Sustainability Portal & Gallery Refresh)*
