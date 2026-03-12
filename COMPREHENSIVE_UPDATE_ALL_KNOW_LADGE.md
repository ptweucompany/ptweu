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

## 6. Recent Upgrades (March 2026 Phase 1-3)
- **Framework Migration:** Successfully migrated from Vite (React 19) to **Next.js 16.1.6 (App Router)** for enhanced SEO, SSR, and robust routing.
- **Content Expansion:** Designed and developed comprehensive `/about`, `/products`, and `/privacy` pages featuring interactive deep-dive sections (8+ per page).
- **Corporate Identity & Legal:** 
  - Standardized the Vision ("Menjadi perusahaan industri pertambangan kapur/gamping global terkemuka yang tumbuh berkelanjutan.") and the 6 core Missions across all languages.
  - Implemented a detailed "Legalitas & Formasi Perusahaan" section in `/company-profile`, showcasing 6 critical operational and environmental licenses (IUP, UKL-UPL, PKKPR Laut, etc.) in a modern grid layout.
- **Visual Overhaul:** Replaced all generic and mock images with high-resolution, industry-contextual visuals (drone shots, heavy machinery, labs) accompanied by highly descriptive, SEO-optimized `alt` tags emphasizing PT Wira Energi Utama's operations.
- **Deployment Strategy:** Configured pure static HTML export (`output: 'export'`) in `next.config.js` to guarantee seamless, error-free deployment on Cloudflare Pages.

*Last Updated: March 12, 2026*
