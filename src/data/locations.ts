// src/data/locations.ts — Location + Export destination data

export interface LocationData {
  id: string; slug: string;
  name_id: string; name_en: string;
  region_id: string; region_en: string;
  overview_id: string; overview_en: string;
  geo: { lat: number; lng: number } | null;
  geological_advantage_id: string;
  iup_area_ha: number;
  production_mt_month: number;
  key_ports: string[];
  industries_served: string[];
  lead_time_local: string;
  lead_time_regional: string;
  competitive_advantage_id: string;
  faq_id: { q: string; a: string }[];
  related_products: { slug_id: string; name_id: string }[];
  related_industries: { slug_id: string; name_id: string }[];
}

export interface ExportDestination {
  id: string; slug: string;
  country_en: string; region_en: string;
  overview_en: string;
  distance_nm: number;
  vessel_days: number;
  port_of_loading: string;
  port_of_discharge: string;
  moq_mt: string;
  incoterms: string[];
  products_in_demand: { name_en: string; spec: string; demand_reason: string }[];
  industry_demand_en: string;
  export_docs: string[];
  compliance_notes: string;
  trade_route_steps: string[];
  faq_en: { q: string; a: string }[];
}

// ── ID LOCATION PAGES ─────────────────────────────────────────────────────────

export const locations: LocationData[] = [
  {
    id: 'manado', slug: 'manado',
    name_id: 'Manado', name_en: 'Manado',
    region_id: 'Sulawesi Utara', region_en: 'North Sulawesi',
    overview_id: 'Manado adalah ibu kota Sulawesi Utara dan pusat operasional utama PT Wira Energi Utama. Dari kantor pusat di Taman Sari, Manado, kami mengelola operasional tambang Ratatotok, koordinasi logistik pelabuhan Bitung, dan layanan teknis untuk seluruh wilayah Indonesia Timur. Manado berfungsi sebagai pintu gerbang distribusi mineral industri ke Sulawesi, Maluku, Papua, dan ekspor internasional.',
    overview_en: 'Manado is the capital of North Sulawesi and the main operational hub of PT Wira Energi Utama. From our head office in Taman Sari, Manado, we manage Ratatotok mine operations, Bitung port logistics coordination, and technical services for all of Eastern Indonesia. Manado serves as the distribution gateway for industrial minerals to Sulawesi, Maluku, Papua, and export markets.',
    geo: { lat: 1.4748, lng: 124.8421 },
    geological_advantage_id: 'Manado terletak 120 km dari lokasi tambang Ratatotok, Minahasa Tenggara — salah satu deposit batu kapur CaO tertinggi di Sulawesi. Formasi karst Ratatotok dengan CaO >55% dan pengotor SiO2 hanya 0.35% adalah keunggulan геологis yang tidak dimiliki daerah lain di Indonesia Timur.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Pelabuhan Bitung (60 km) — Internasional', 'Kotabunan (Regional)', 'Belang (Pesisir Lokal)'],
    industries_served: ['Semen', 'Baja & Smelter', 'PLTU', 'Kimia', 'Pertanian', 'Konstruksi'],
    lead_time_local: '1–3 hari (Manado & sekitarnya)',
    lead_time_regional: '3–14 hari (Sulawesi & Indonesia Timur)',
    competitive_advantage_id: 'Dari Manado, PT WEU dapat menjangkau seluruh pasar Indonesia Timur dengan biaya logistik 20–35% lebih rendah dibanding supplier berbasis Jawa atau Kalimantan. Infrastruktur jalan tol Manado-Bitung dan koneksi jaringan distribusi pesisir menjadikan Manado hub ideal untuk mineral industri skala besar.',
    faq_id: [
      { q: 'Di mana kantor PT WEU di Manado?', a: 'Kantor utama kami di Taman Sari Cluster Lihaga, Blok H3-3, Kelurahan Paniki Bawah, Manado 95256. Dapat dikunjungi untuk konsultasi teknis dan penandatanganan kontrak.' },
      { q: 'Apakah PT WEU melayani pengiriman darat dari Manado?', a: 'Ya. Armada dump truck Isuzu Giga kami melayani pengiriman regional Sulawesi Utara dari Manado. Untuk volume besar, distribusi via Pelabuhan Bitung lebih efisien.' },
      { q: 'Bagaimana cara menghubungi tim sales dari Manado?', a: 'Hubungi WhatsApp 0811 4344 168 atau telepon (0434) 260 3008. Tim kami merespons dalam 2 jam kerja untuk permintaan penawaran.' },
    ],
    related_products: [{ slug_id: 'batu-kapur', name_id: 'Batu Kapur' }, { slug_id: 'kalsium-karbonat', name_id: 'CaCO3' }, { slug_id: 'kapur-bakar', name_id: 'Kapur Bakar' }],
    related_industries: [{ slug_id: 'semen', name_id: 'Industri Semen' }, { slug_id: 'konstruksi', name_id: 'Konstruksi' }],
  },
  {
    id: 'sulawesi-utara', slug: 'sulawesi-utara',
    name_id: 'Sulawesi Utara', name_en: 'North Sulawesi',
    region_id: 'Indonesia Timur', region_en: 'Eastern Indonesia',
    overview_id: 'Sulawesi Utara adalah pusat pertambangan dan pengolahan mineral terpenting di Indonesia Timur. Dengan cadangan nikel, emas, dan batu kapur yang melimpah, provinsi ini menjadi episentrum industri smelter dan mineral nasional. PT WEU beroperasi di Kabupaten Minahasa Tenggara (Ratatotok) dengan IUP OP seluas 97.05 Ha — menghasilkan batu kapur berkualitas tertinggi di kawasan ini.',
    overview_en: 'North Sulawesi is the most important mining and mineral processing center in Eastern Indonesia. With abundant reserves of nickel, gold, and limestone, the province has become the epicenter of the national smelter and mineral industry. PT WEU operates in Southeast Minahasa Regency (Ratatotok) with an IUP OP of 97.05 Ha.',
    geo: { lat: 1.4748, lng: 124.8421 },
    geological_advantage_id: 'Formasi geologi Sulawesi Utara terbentuk dari aktivitas vulkanik-tektonik yang menghasilkan deposit mineral berkualitas exceptional. Batu kapur Ratatotok terbentuk dari pembentukan karang kuno Miosen yang termetamorf sempurna — menghasilkan CaO >55% dengan struktur kristal padat dan reaktivitas tinggi. Cadangan diestimasi lebih dari 50 juta ton di area IUP saat ini.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Pelabuhan Bitung (Internasional, KEK Bitung)', 'Kotabunan', 'Belang', 'Manado (penumpang + kargo)'],
    industries_served: ['Smelter Nikel (dominan)', 'Semen', 'Baja', 'PLTU', 'Konstruksi Infrastruktur', 'Pertanian'],
    lead_time_local: '3–7 hari (intra-Sulawesi)',
    lead_time_regional: '7–21 hari (luar Sulawesi)',
    competitive_advantage_id: 'Sulawesi Utara memiliki ekosistem industri mineral terintegrasi: tambang batu kapur (PT WEU), smelter nikel (Morowali-Sulsel, sekitar), pembangkit listrik, dan infrastruktur pelabuhan internasional. Kombinasi ini menciptakan demand captive yang besar dan biaya logistik antar-unit yang minimal.',
    faq_id: [
      { q: 'Mengapa Sulawesi Utara menjadi pusat mineral industri Indonesia Timur?', a: 'Kombinasi cadangan mineral yang kaya, infrastruktur Pelabuhan Bitung (KEK), dan akses ke pasar Asia Pasifik menjadikan Sulawesi Utara hub mineral strategis. Ditambah program hilirisasi nasional yang mendorong pengolahan lokal.' },
      { q: 'Apa saja industri besar yang ada di Sulawesi Utara yang membutuhkan produk PT WEU?', a: 'Smelter nikel, pabrik semen (Conch, Holcim), PLTU Amurang dan Gorontalo, proyek infrastruktur jalan tol dan kawasan industri KEK Bitung, serta sektor pertanian Minahasa.' },
      { q: 'Apakah PT WEU dapat melayani pertambangan nikel di Morowali atau Konawe?', a: 'Ya. Meskipun secara administrasi di Sulawesi Tengah/Tenggara, distribusi via tongkang dari Pelabuhan Bitung ke dermaga smelter di Morowali/Konawe parfaitement feasible dalam 2–5 hari pelayaran.' },
    ],
    related_products: [{ slug_id: 'batu-kapur', name_id: 'Batu Kapur' }, { slug_id: 'kapur-bakar', name_id: 'Kapur Bakar' }, { slug_id: 'kapur-padam', name_id: 'Kapur Padam' }],
    related_industries: [{ slug_id: 'baja', name_id: 'Baja & Smelter' }, { slug_id: 'pltu', name_id: 'PLTU' }, { slug_id: 'semen', name_id: 'Semen' }],
  },
  {
    id: 'bitung', slug: 'bitung',
    name_id: 'Bitung — Hub Distribusi Internasional', name_en: 'Bitung — International Distribution Hub',
    region_id: 'Sulawesi Utara', region_en: 'North Sulawesi',
    overview_id: 'Pelabuhan Bitung adalah pintu gerbang internasional utama Sulawesi Utara dan hub distribusi mineral industri PT Wira Energi Utama. Sebagai Kawasan Ekonomi Khusus (KEK), Bitung menawarkan fasilitas bea cukai ekspor yang dipermudah, pergudangan modern, dan koneksi langsung ke jaringan shipping Asia Pasifik. Bitung menjadi titik muat utama untuk semua ekspor PT WEU.',
    overview_en: 'Bitung Port is the main international gateway of North Sulawesi and the distribution hub for PT Wira Energi Utama industrial minerals. As a Special Economic Zone (KEK), Bitung offers streamlined export customs, modern warehousing, and direct connection to Asia Pacific shipping networks. Bitung is PT WEU\'s primary loading point for all exports.',
    geo: { lat: 1.4404, lng: 125.1984 },
    geological_advantage_id: 'Bitung terletak 60 km dari Manado dan dapat dicapai dalam 45 menit melalui jalan tol. Dari Jetty Ratatotok, tongkang membawa muatan ke Bitung dalam 12–18 jam pelayaran. Kedalaman kolam Pelabuhan Bitung >10 meter memungkinkan sandar kapal kargo hingga 20.000 DWT.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Terminal Peti Kemas Bitung', 'Terminal Curah Bitung', 'Dermaga KEK Bitung'],
    industries_served: ['Ekspor Regional Asia Tenggara', 'Distribusi nasional', 'Smelter lokal Sulawesi'],
    lead_time_local: '12–18 jam (dari Jetty Ratatotok via tongkang)',
    lead_time_regional: '2–14 hari (ke seluruh Indonesia via Bitung)',
    competitive_advantage_id: 'KEK Bitung memberikan insentif fiskal ekspor (PPN 0%, kemudahan kepabeanan) yang secara langsung meningkatkan competitiveness harga mineral PT WEU di pasar ekspor. Frekuensi kapal kontainer dan bulk carrier dari Bitung ke Singapura, Manila, dan pelabuhan Asia lainnya memastikan jadwal pengiriman yang fleksibel.',
    faq_id: [
      { q: 'Berapa lama waktu dari tambang Ratatotok ke Pelabuhan Bitung?', a: 'Via tongkang dari Jetty Ratatotok: 12–18 jam. Via truk darat (jika volume kecil): ±4 jam melalui rute Kotamobagu–Manado–Bitung.' },
      { q: 'Apakah PT WEU menggunakan fasilitas KEK Bitung untuk ekspor?', a: 'Ya. Ekspor mineral PT WEU melalui fasilitas Terminal Curah Bitung dengan manfaat KEK berupa kemudahan kepabeanan dan efisiensi biaya dokumen ekspor.' },
      { q: 'Kapal ukuran berapa yang bisa dimuat di Bitung untuk produk PT WEU?', a: 'Pelabuhan Bitung dapat menangani bulk carrier hingga 20.000 DWT. Untuk muatan PT WEU, pengiriman biasanya menggunakan kapal 3.000–10.000 DWT atau tongkang 300 kaki.' },
    ],
    related_products: [{ slug_id: 'batu-kapur', name_id: 'Batu Kapur' }, { slug_id: 'pcc', name_id: 'PCC' }],
    related_industries: [{ slug_id: 'baja', name_id: 'Baja & Smelter' }, { slug_id: 'kimia', name_id: 'Kimia' }],
  },
  {
    id: 'indonesia', slug: 'indonesia',
    name_id: 'Distribusi Nasional Indonesia', name_en: 'National Indonesia Distribution',
    region_id: 'Indonesia', region_en: 'Indonesia',
    overview_id: 'PT Wira Energi Utama melayani kebutuhan mineral industri di seluruh kepulauan Indonesia. Dengan kapasitas produksi 150.000 MT/bulan dan jaringan distribusi laut via Pelabuhan Bitung, Kotabunan, dan Belang, kami mampu menjangkau sentra industri dari Sabang hingga Merauke. Fokus distribusi nasional adalah wilayah Indonesia Timur — Sulawesi, Maluku, dan Papua — di mana kami memiliki keunggulan logistik signifikan.',
    overview_en: 'PT Wira Energi Utama serves industrial mineral needs across the Indonesian archipelago. With 150,000 MT/month production capacity and sea distribution via Bitung, Kotabunan, and Belang ports, we can reach industrial centers from Sabang to Merauke. National distribution focus is Eastern Indonesia — Sulawesi, Maluku, and Papua — where we hold significant logistics advantages.',
    geo: { lat: -2.5489, lng: 118.0149 },
    geological_advantage_id: 'Indonesia adalah salah satu produsen mineral terbesar dunia. Deposit batu kapur Ratatotok berada di posisi strategis — pusat kepulauan Indonesia Timur — memberikan akses laut ke semua pasar industri utama di wilayah ini tanpa transit pelabuhan utama Jawa yang sering congested.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Bitung (hub utama ekspor & nasional)', 'Kotabunan (distribusi regional)', 'Belang (distribusi pesisir)', 'Tanjung Priok via re-export (Jawa)'],
    industries_served: ['Seluruh sektor industri nasional', 'Prioritas: Sulawesi, Maluku, Papua, Kalimantan'],
    lead_time_local: '3–7 hari (Sulawesi)',
    lead_time_regional: '7–21 hari (seluruh Indonesia)',
    competitive_advantage_id: 'Posisi geografis Sulawesi Utara di tengah kepulauan Indonesia menjadikan PT WEU supplier paling kompetitif untuk pasar Indonesia Timur. Dibanding supplier Jawa, biaya freight laut ke Makassar, Ambon, Sorong, dan Jayapura 25–40% lebih rendah dari Bitung vs Surabaya/Jakarta.',
    faq_id: [
      { q: 'Apakah PT WEU dapat mengirim ke Papua dan Maluku?', a: 'Ya. Distribusi ke Papua (Sorong, Manokwari, Jayapura) dan Maluku (Ambon, Ternate) dilakukan via tongkang dari Pelabuhan Bitung dengan estimasi 5–14 hari tergantung tujuan.' },
      { q: 'Bagaimana dengan pengiriman ke Kalimantan?', a: 'Distribusi ke Balikpapan, Samarinda, dan Banjarmasin via jalur laut dari Bitung feasible dalam 4–7 hari. Ini lebih kompetitif dari supply Jawa untuk wilayah Kaltim dan Kaltara.' },
      { q: 'Berapa volume minimum untuk pengiriman antar pulau?', a: 'Minimal 1 tongkang = 7.500–10.000 MT untuk efisiensi biaya shipping. Untuk volume lebih kecil, pengiriman bergabung (groupage) dengan pelanggan lain dapat diatur atas permintaan.' },
    ],
    related_products: [{ slug_id: 'batu-kapur', name_id: 'Batu Kapur' }, { slug_id: 'kalsium-karbonat', name_id: 'CaCO3' }, { slug_id: 'kapur-bakar', name_id: 'Kapur Bakar' }],
    related_industries: [{ slug_id: 'pertanian', name_id: 'Pertanian' }, { slug_id: 'konstruksi', name_id: 'Konstruksi' }, { slug_id: 'semen', name_id: 'Semen' }],
  },
];

export const locationsBySlug = Object.fromEntries(locations.map((l) => [l.slug, l]));
export const locationSlugs = locations.map((l) => l.slug);

// ── EN EXPORT DESTINATION PAGES ───────────────────────────────────────────────

export const exportDestinations: ExportDestination[] = [
  {
    id: 'australia', slug: 'australia', country_en: 'Australia', region_en: 'Oceania',
    overview_en: 'Australia is a major industrial mineral importer with significant demand for high-CaO limestone, quicklime, and specialty calcium carbonate. PT Wira Energi Utama ships from Port Bitung, North Sulawesi to Australian ports (Darwin, Brisbane, Geraldton). The proximity of Sulawesi to northern Australia (≈2,200 nautical miles) enables competitive shipping versus traditional European or South African sources.',
    distance_nm: 2200, vessel_days: 7,
    port_of_loading: 'Port of Bitung, North Sulawesi (KEK Bitung)',
    port_of_discharge: 'Darwin, NT / Brisbane, QLD / Geraldton, WA',
    moq_mt: '7,500 – 10,000 MT per shipment',
    incoterms: ['FOB Port Bitung', 'CIF Port of Discharge'],
    products_in_demand: [
      { name_en: 'High-CaO Limestone (>55%)', spec: 'CaO >55%, SiO2 <0.5%, 10–80mm', demand_reason: 'Mining industry flux demand in WA; cement industry NSW, VIC' },
      { name_en: 'Quicklime (CaO 92%)', spec: 'CaO Active >92%, T60 <2min', demand_reason: 'Gold and nickel processing in Western Australia — major flux consumer' },
      { name_en: 'Agricultural Lime (Aglime)', spec: 'CCE >85%, fine grind', demand_reason: 'Acidic soil correction in WA wheat belt and QLD sugarcane regions' },
    ],
    industry_demand_en: 'Australian mining (gold, iron ore, nickel laterite), cement manufacturing, agricultural liming, and water treatment sectors are primary demand drivers. WA mining corridor has particularly strong CaO demand for heap leach processes and gold processing.',
    export_docs: ['Certificate of Origin (COO) — issued by Chamber of Commerce Indonesia', 'Certificate of Analysis (COA) per batch', 'Material Safety Data Sheet (MSDS)', 'Packing List & Commercial Invoice', 'Bill of Lading (B/L)', 'Australian Biosecurity Import Compliance documentation'],
    compliance_notes: 'All exports to Australia require compliance with Australian Biosecurity Act 2015. Mineral products are generally classified as low biosecurity risk. DAFF pre-clearance documentation recommended for first shipment. Chemical analysis must confirm conformity with ASNZ standards for industrial minerals.',
    trade_route_steps: ['Inquiry & technical qualification by buyer lab', 'Sample shipment (50–100 kg) with COA & MSDS', 'Buyer technical approval and contract negotiation', 'Production and XRF quality verification per 100 MT batch', 'Loading at Jetty Ratatotok → transfer to Bitung', 'Container/bulk vessel loading at Port Bitung with export documentation', 'Vessel transit ≈7 days to Australian port of discharge'],
    faq_en: [
      { q: 'What shipping frequency is available for Australia?', a: 'Bulk vessel departures from Bitung to Australian ports occur 2–4 times monthly depending on vessel availability. For dedicated charters, we can arrange on-demand loading with 14 days notice.' },
      { q: 'Are there import duties on limestone from Indonesia to Australia?', a: 'Under IACEPA (Indonesia-Australia Comprehensive Economic Partnership Agreement), qualifying Indonesian limestone exports receive preferential tariff rates. Consult with your customs broker for exact HS code classification.' },
      { q: 'What is the minimum COA standard required for Australian buyers?', a: 'Most Australian industrial buyers require COA with XRF analysis (CaO, MgO, SiO2, Al2O3, Fe2O3, LOI) plus slaking test for quicklime. Third-party verification by Intertek or SGS is available on request.' },
    ],
  },
  {
    id: 'china', slug: 'china', country_en: 'China', region_en: 'East Asia',
    overview_en: 'China is the world\'s largest consumer of limestone and calcium derivatives, driven by its massive steel, cement, chemical, and agricultural sectors. Despite having domestic production, quality-specific import demand for high-purity CaO (>55%), ultra-fine PCC, and specialty hydrated lime continues to grow. PT Wira Energi Utama exports from Port Bitung to major Chinese ports (Guangzhou, Tianjin, Qingdao) with competitive transit times of 5–8 days.',
    distance_nm: 2800, vessel_days: 8,
    port_of_loading: 'Port of Bitung, North Sulawesi (KEK Bitung)',
    port_of_discharge: 'Guangzhou / Tianjin / Qingdao / Shenzhen',
    moq_mt: '7,500 – 10,000 MT per bulk shipment',
    incoterms: ['FOB Port Bitung', 'CIF Guangzhou / Tianjin'],
    products_in_demand: [
      { name_en: 'High-CaO Limestone (>55%)', spec: 'CaO >55%, SiO2 <0.35%, low MgO', demand_reason: 'Flux stone demand for Chinese steel mills and EAF furnaces in Guangdong, Hebei provinces' },
      { name_en: 'PCC (>99.8% CaCO3)', spec: 'CaCO3 >99.85%, brightness >98.5%, D50 1.2–2.5µm', demand_reason: 'High-purity PCC for specialty paper, plastics modification, and pharmaceutical applications' },
      { name_en: 'Hydrated Lime (Ca(OH)2 94.5%)', spec: 'Ca(OH)2 >94%, 325 mesh >95%', demand_reason: 'FGD sorbent demand from coal power plants in Central and Northern China' },
    ],
    industry_demand_en: 'China\'s steel industry is the dominant consumer, requiring flux stone for blast furnace and EAF operations. Chemical sector demands high-purity PCC. Power generation requires hydrated lime for FGD systems. Agricultural sector imports aglime for acidic soil regions in South China.',
    export_docs: ['Certificate of Origin (COO) — Form E (ASEAN-China FTA)', 'Certificate of Analysis (COA)', 'Material Safety Data Sheet (MSDS)', 'China CIQ (Customs Inspection) compliant packing list', 'Commercial Invoice & Packing List', 'Bill of Lading (B/L)', 'Fumigation Certificate (if required)'],
    compliance_notes: 'Exports to China benefit from ASEAN-China FTA (ACFTA) using Form E COO for preferential tariff. Chinese GB standards apply for quality — we provide GB-standard XRF analysis on request. Copper-free packaging requirement for bulk mineral imports must be observed.',
    trade_route_steps: ['Chinese buyer issues inquiry with GB standard specifications', 'Sample + COA + MSDS sent for CNAS-accredited lab verification', 'Price negotiation (CNF/CIF Guangzhou basis typical)', 'LC (Letter of Credit) or TT arrangement per buyer preference', 'Production, QC verification, and port pre-clearance', 'Loading at Port Bitung with ACFTA Form E documentation', 'Vessel transit 5–8 days to Chinese port'],
    faq_en: [
      { q: 'Does PT WEU hold Form E certification for ACFTA benefits?', a: 'Yes. We issue Form E through the Indonesian Chamber of Commerce (KADIN) which qualifies our limestone and calcium products for preferential tariff under ASEAN-China FTA.' },
      { q: 'What GB standard does your limestone conform to?', a: 'Our limestone conforms to GB/T 3286 for metallurgical limestone (class I). XRF analysis reports in GB format are available alongside standard COA for Chinese customs compliance.' },
      { q: 'Can you supply via container or only bulk vessel?', a: 'Both options available. Fine products (CaCO3, PCC, hydrated lime) ship in 20/40\' containers in jumbo bags. Limestone and quicklime ship as bulk in 5,000–10,000 MT vessel parcels.' },
    ],
  },
  {
    id: 'singapore', slug: 'singapore', country_en: 'Singapore', region_en: 'Southeast Asia',
    overview_en: 'Singapore serves as a critical regional trading and trans-shipment hub for industrial minerals flowing between Indonesia and global markets. While Singapore\'s domestic industrial mineral consumption is modest, it acts as a re-export and commodities trading center. PT Wira Energi Utama works with Singapore-based traders and commodity houses to distribute products across Southeast Asia. Transit time from Bitung to Singapore is approximately 3 days.',
    distance_nm: 1200, vessel_days: 3,
    port_of_loading: 'Port of Bitung, North Sulawesi',
    port_of_discharge: 'Port of Singapore (PSA)',
    moq_mt: '2,000 – 5,000 MT (containerized) | 7,500–10,000 MT (bulk)',
    incoterms: ['FOB Port Bitung', 'CIF Singapore', 'CFR Singapore'],
    products_in_demand: [
      { name_en: 'PCC Premium Grade (>99.85%)', spec: 'CaCO3 >99.85%, brightness 98.5%, D50 1.5µm', demand_reason: 'Singapore specialty chemicals industry and re-export to regional pharma and F&B sectors' },
      { name_en: 'Fine CaCO3 (400–1250 mesh)', spec: 'CaCO3 >98.8%, brightness >95%, mesh 400–1250', demand_reason: 'Paints, coatings, polymer compounding industries in Singapore industrial parks' },
      { name_en: 'Quicklime (CaO 92%)', spec: 'CaO Active >90%, T60 <3min', demand_reason: 'Water treatment and chemical processing at petrochemical facilities on Jurong Island' },
    ],
    industry_demand_en: 'Singapore\'s Jurong Island petrochemical and chemical cluster demands high-purity CaO and Ca(OH)2 for industrial water treatment, effluent neutralization, and chemical manufacturing. Specialty paper and coating industries require premium CaCO3 and PCC. The commodity trading sector facilitates regional distribution.',
    export_docs: ['Certificate of Origin (COO) — ASEAN Form D for AFTA preferential tariff', 'Certificate of Analysis (COA)', 'MSDS (English)', 'SGS / Intertek inspection certificate (recommended)', 'Packing List & Commercial Invoice', 'Bill of Lading', 'MAS-compliant export declaration if required'],
    compliance_notes: 'ASEAN Free Trade Area (AFTA) Agreement under Form D eliminates most tariff barriers for Indonesian mineral exports to Singapore. Singapore NEA environmental regulations apply for chemical products. Products must include English-language MSDS meeting GHS/REACH standards for distribution within Singapore.',
    trade_route_steps: ['Singapore trader/buyer submits RFQ with product specifications', 'Sample + CoA + MSDS sent via courier within 5 business days', 'Price negotiation — Singapore buyers typically prefer CIF Singapore terms', 'Trade finance arrangement (LC or open account per relationship)', 'Production and third-party inspection (SGS/Intertek) if required', 'Loading at Port Bitung — direct vessel or feeder via Batam', 'Arrival Singapore PSA within 3 days with full export docs'],
    faq_en: [
      { q: 'Does PT WEU have established Singapore trading relationships?', a: 'Yes. We work with Singapore-based commodity traders for distribution in the region. Direct supply arrangements with Singapore industrial end-users are also available.' },
      { q: 'Can Singapore be used as a hub for further distribution to Vietnam or Thailand?', a: 'Yes. Products can be transshipped via Singapore to Vietnam (Ho Chi Minh City), Thailand (Laem Chabang), and other SEA ports. Our Singapore partners facilitate trans-shipment logistics.' },
      { q: 'What are typical payment terms for Singapore buyers?', a: 'For established relationships: T/T 30 days after B/L. For first-time buyers: 30% advance + 70% against B/L copy, or confirmed irrevocable LC at sight.' },
    ],
  },
  {
    id: 'asia', slug: 'asia', country_en: 'Asia (Regional)', region_en: 'Asia Pacific',
    overview_en: 'PT Wira Energi Utama is positioned to serve the broader Asia Pacific market as a competitive limestone and calcium mineral supplier from Indonesia\'s strategic North Sulawesi gateway. With Port Bitung (KEK) as the export base, our products reach Japan, South Korea, Taiwan, Vietnam, Philippines, Malaysia, and India. The Asia Pacific region represents the fastest-growing industrial mineral market globally, driven by infrastructure expansion, steel production, and tightening environmental regulations.',
    distance_nm: 3500, vessel_days: 12,
    port_of_loading: 'Port of Bitung, North Sulawesi (KEK Bitung)',
    port_of_discharge: 'Multiple — Tokyo, Busan, Kaohsiung, Ho Chi Minh City, Manila, Port Klang, Mumbai',
    moq_mt: '7,500 – 20,000 MT per bulk shipment',
    incoterms: ['FOB Port Bitung', 'CFR Port of Discharge', 'CIF (negotiable)'],
    products_in_demand: [
      { name_en: 'High-CaO Limestone (>55%)', spec: 'CaO >55%, SiO2 <0.5%, lumpy 30–80mm', demand_reason: 'Steel industry flux stone in Japan, Korea, Taiwan, Vietnam — all major steel producers' },
      { name_en: 'Hydrated Lime FGD Grade', spec: 'Ca(OH)2 >92%, 325 mesh >95%', demand_reason: 'FGD sorbent demand in coal power plants across Vietnam, Philippines, India' },
      { name_en: 'PCC Specialty Grade', spec: 'CaCO3 >99.85%, brightness 98.5%, scalenohedral', demand_reason: 'Japan and Korean specialty paper, pharma, and automotive sealant industries' },
    ],
    industry_demand_en: 'Asia Pacific industrial mineral demand is driven by: Japan/Korea/Taiwan steel industry flux (highest CaO purity requirements); Southeast Asian power plant FGD compliance (Vietnam, Philippines, Thailand rapidly expanding coal fleets); Indian cement and construction boom (world\'s 2nd largest cement market); and specialty chemical/pharmaceutical sectors in Japan and Korea.',
    export_docs: ['Certificate of Origin (COO) — Form AIFTA/AKFTA/standard COO per destination', 'Certificate of Analysis (COA) with destination-country standard conformity', 'MSDS in English (GHS format)', 'Third-party inspection by SGS/Intertek/Bureau Veritas', 'Commercial Invoice & Packing List', 'Bill of Lading (Ocean B/L)', 'Phytosanitary/Health certificate per destination requirement'],
    compliance_notes: 'Indonesia has bilateral FTAs with Japan (IJEPA), Korea (IK-CEPA), ASEAN members (AFTA), and India (IACEPA). Each provides preferential tariff access. Country-specific GB, JIS, or KS standards apply for structural applications. Environmental compliance documentation (MSDS, safety certificates) must meet destination country GHS implementation level.',
    trade_route_steps: ['Regional buyer submits technical specifications and quantity requirement', 'PT WEU provides technical quotation with sample + COA within 5 business days', 'Technical and commercial negotiation (price, Incoterm, payment)', 'L/C issuance or payment security arrangement', 'Production scheduling, XRF batch verification, and pre-export inspection', 'Export clearance at KEK Bitung with preferential origin documentation (COO)', 'Ocean transit via scheduled bulk carrier or chartered vessel to port of discharge'],
    faq_en: [
      { q: 'Which Asian countries does PT WEU currently export to?', a: 'We have export capability established for all Asia Pacific destinations via Port Bitung\'s KEK export facilitation. Active market development is ongoing in Japan, South Korea, Vietnam, Philippines, and India.' },
      { q: 'How does PT WEU handle different quality standards across Asian markets?', a: 'We maintain master COA templates conforming to major standards (JIS for Japan, KS for Korea, GB for China, ASTM for general). Custom analysis reports per destination standard are available at no extra cost.' },
      { q: 'What is the typical price basis — FOB or CIF?', a: 'Most Asia Pacific buyers prefer CIF terms for budgeting certainty. We quote both FOB Bitung and CIF destination. For long-term contracts, FOB is often preferred as buyers have established freight relationships.' },
    ],
  },
];

export const exportDestBySlug = Object.fromEntries(exportDestinations.map((e) => [e.slug, e]));
export const exportSlugs = exportDestinations.map((e) => e.slug);
