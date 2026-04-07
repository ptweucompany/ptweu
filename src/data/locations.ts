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

export const locations: LocationData[] = [
  {
    id: 'manado', slug: 'manado',
    name_id: 'Manado', name_en: 'Manado',
    region_id: 'Sulawesi Utara', region_en: 'North Sulawesi',
    overview_id: 'Manado adalah pusat komando operasional PT Wira Energi Utama. Sebagai gerbang ekonomi Sulawesi Utara, Manado menjadi titik koordinasi vital untuk distribusi mineral industri ke seluruh Indonesia Timur. Kami mengelola rantai pasok batu kapur dari Ratatotok untuk mendukung proyek infrastruktur dan kebutuhan pabrikasi di wilayah perkotaan Manado dan sekitarnya.',
    overview_en: 'Manado is the operational command center for PT Wira Energi Utama. As the economic gateway of North Sulawesi, Manado is a vital coordination point for industrial mineral distribution throughout Eastern Indonesia.',
    geo: { lat: 1.4748, lng: 124.8421 },
    geological_advantage_id: 'Akses langsung ke cadangan Ratatotok dengan kadar CaO >55%. Lokasi strategis yang memangkas biaya distribusi infrastruktur perkotaan di Sulawesi Utara.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Pelabuhan Bitung', 'Kotabunan', 'Pelabuhan Manado'],
    industries_served: ['Konstruksi', 'Semen', 'Pengolahan Air', 'Pangan'],
    lead_time_local: '1–2 Hari', lead_time_regional: '3–7 Hari',
    competitive_advantage_id: 'Keunggulan logistik darat yang cepat dan dukungan teknis langsung dari kantor pusat Manado menjamin stabilitas pasokan untuk proyek mendesak.',
    faq_id: [
      { q: 'Apakah PT WEU melayani pengiriman retail di Manado?', a: 'Kami melayani kebutuhan industri skala menengah hingga besar. Untuk proyek infrastruktur di Manado, kami menyediakan armada dump truck khusus.' },
      { q: 'Di mana lokasi gudang penyimpanan di Manado?', a: 'Titik distribusi utama kami berada di Bitung dan Ratatotok untuk menjamin kesegaran material (freshly mined).' }
    ],
    related_products: [{ slug_id: 'batu-kapur', name_id: 'Batu Kapur' }, { slug_id: 'agregat', name_id: 'Agregat Beton' }],
    related_industries: [{ slug_id: 'konstruksi', name_id: 'Konstruksi' }, { slug_id: 'semen', name_id: 'Industri Semen' }],
  },
  {
    id: 'jakarta', slug: 'jakarta',
    name_id: 'DKI Jakarta & Jabodetabek', name_en: 'Jakarta Metropolitan',
    region_id: 'Jawa', region_en: 'Java',
    overview_id: 'Jakarta sebagai pusat ekonomi nasional membutuhkan pasokan mineral industri dengan standar kemurnian tertinggi untuk sektor kimia dan konstruksi Grade A. PT Wira Energi Utama melayani pasar Jakarta melalui distribusi laut via Pelabuhan Tanjung Priok dan Marunda. Produk kami menjadi komponen kritis dalam proyek strategis nasional dan pemurnian air untuk populasi megapolitan.',
    overview_en: 'Jakarta as the national economic center requires industrial mineral supply with the highest purity standards for chemical and Grade A construction sectors.',
    geo: { lat: -6.2088, lng: 106.8456 },
    geological_advantage_id: 'Batu kapur kristalin dari Ratatotok menawarkan stabilitas kimia yang lebih baik untuk industri polimer dan cat di Jabodetabek dibandingkan sumber lokal Jawa.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Tanjung Priok', 'Marunda', 'Bitung (Loading)'],
    industries_served: ['Kimia', 'Plastik', 'Konstruksi High-Rise', 'FGD PLTU'],
    lead_time_local: '7–12 Hari (Lintas Pulau)', lead_time_regional: '10–14 Hari',
    competitive_advantage_id: 'Kemurnian CaO >55% kami memungkinkan efisiensi reaktor kimia hingga 15% lebih tinggi bagi pabrik di wilayah industri Jakarta.',
    faq_id: [
      { q: 'Bagaimana prosedur suplai untuk industri di Jakarta?', a: 'Kami menggunakan sistem kontrak tahunan dengan jadwal sandar tongkang rutin di Tanjung Priok atau Marunda.' },
      { q: 'Apakah kapur bakar PT WEU tersedia dalam kemasan jumbo bag untuk area Jakarta?', a: 'Ya, kami menyediakan kemasan sealed jumbo bag 1 ton untuk mencegah hidrasi selama perjalanan laut.' }
    ],
    related_products: [{ slug_id: 'pcc', name_id: 'PCC' }, { slug_id: 'kapur-bakar', name_id: 'Kapur Bakar' }],
    related_industries: [{ slug_id: 'kimia', name_id: 'Industri Kimia' }, { slug_id: 'pembangkit-listrik', name_id: 'PLTU' }],
  },
  {
    id: 'surabaya', slug: 'surabaya',
    name_id: 'Surabaya & Kawasan Industri Jawa Timur', name_en: 'Surabaya Industrial Hub',
    region_id: 'Jawa Timur', region_en: 'East Java',
    overview_id: 'Surabaya merupakan hub logistik terpenting untuk Jawa Timur. PT Wira Energi Utama memasok mineral industri untuk kawasan industri Gresik, Sidoarjo, dan Surabaya melalui Pelabuhan Tanjung Perak. Kami fokus pada penyediaan Calcium Carbonate dan Kapur Padam dengan reaktivitas tinggi untuk industri kertas dan baja di wilayah ini.',
    overview_en: 'Surabaya is the most important logistics hub for East Java. PT Wira Energi Utama supplies industrial minerals for Gresik, Sidoarjo, and Surabaya.',
    geo: { lat: -7.2575, lng: 112.7521 },
    geological_advantage_id: 'Ketersediaan volume besar via jalur laut Bitung-Surabaya dengan biaya freight yang kompetitif untuk skala industri berat.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Tanjung Perak', 'Gresik (Manyar)', 'Bitung'],
    industries_served: ['Baja', 'Kertas', 'Pakan Ternak', 'Semen'],
    lead_time_local: '5–8 Hari', lead_time_regional: '7–10 Hari',
    competitive_advantage_id: 'Lokasi tambang kami yang dekat dengan laut (private jetty) memudahkan pengiriman bulk ke Pelabuhan Surabaya dengan lead time yang presisi.',
    faq_id: [
      { q: 'Apakah ada stok buffer di wilayah Surabaya?', a: 'Kami bekerja sama dengan gudang regional di Gresik untuk menjamin ketersediaan stok mendesak bagi mitra industri kami.' }
    ],
    related_products: [{ slug_id: 'kalsium-karbonat', name_id: 'CaCO3' }, { slug_id: 'batu-kapur', name_id: 'Batu Kapur' }],
    related_industries: [{ slug_id: 'semen', name_id: 'Industri Semen' }, { slug_id: 'pertanian', name_id: 'Pakan Ternak' }],
  },
  {
    id: 'makassar', slug: 'makassar',
    name_id: 'Makassar — Gerbang Smelter Sulawesi', name_en: 'Makassar — Smelter Gateway',
    region_id: 'Sulawesi Selatan', region_en: 'South Sulawesi',
    overview_id: 'Makassar berdiri sebagai pusat logistik strategis yang menghubungkan tambang kami di Ratatotok dengan kawasan industri berkembang di Sulawesi Selatan. PT Wira Energi Utama mendukung pertumbuhan infrastruktur Makassar dan kebutuhan industri pengolahan mineral di wilayah sekitarnya dengan pasokan batu kapur murni tinggi.',
    overview_en: 'Makassar stands as a strategic logistics center connecting our mine in Ratatotok with developing industrial areas in South Sulawesi.',
    geo: { lat: -5.1476, lng: 119.4327 },
    geological_advantage_id: 'Proksimitas geofisika yang memungkinkan pengiriman tongkang cepat dari Sulawesi Utara ke Makassar dengan biaya logistik intra-Sulawesi yang minim.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Soekarno-Hatta Makassar', 'Bitung'],
    industries_served: ['Smelter Nikel', 'Infrastruktur', 'Semen'],
    lead_time_local: '3–5 Hari', lead_time_regional: '5–7 Hari',
    competitive_advantage_id: 'Kapasitas produksi 150.000 MT/bulan menjamin kebutuhan material dasar untuk proyek reklamasi dan pembangunan di Makassar.',
    faq_id: [
      { q: 'Berapa kapasitas angkut per tongkang ke Makassar?', a: 'Standar pengiriman kami menggunakan tongkang 300 kaki dengan kapasitas 7.500 hingga 10.000 MT per trip.' }
    ],
    related_products: [{ slug_id: 'batu-kapur', name_id: 'Batu Kapur' }, { slug_id: 'agregat', name_id: 'Agregat Beton' }],
    related_industries: [{ slug_id: 'baja', name_id: 'Smelter & Logam' }],
  },
  {
    id: 'cilegon', slug: 'cilegon',
    name_id: 'Cilegon — Pusat Industri Baja', name_en: 'Cilegon — Steel Industrial Center',
    region_id: 'Banten', region_en: 'Banten',
    overview_id: 'Sebagai "Kota Baja", Cilegon merupakan pasar kritis bagi Kapur Bakar (Quicklime) PT Wira Energi Utama. Industri metallurgical baja membutuhkan flux agent dengan kadar Silika (SiO2) sangat rendah untuk menjamin kualitas output baja. Mineral kami dari Ratatotok memenuhi standar ketat JIS dan ASTM yang diperlukan oleh pabrik baja di Cilegon.',
    overview_en: 'As the "Steel City", Cilegon is a critical market for PT WEU Quicklime. The steel industry requires flux agents with extremely low Silica content.',
    geo: { lat: -6.012, lng: 106.019 },
    geological_advantage_id: 'Kadar SiO2 < 0.35% pada batu kapur kami adalah nilai ideal untuk proses fluxing di Blast Furnace baja Cilegon.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Cigading', 'Merak Mas', 'Bitung'],
    industries_served: ['Baja', 'Kimia', 'Pembangkit Listrik'],
    lead_time_local: '8–14 Hari', lead_time_regional: '12–18 Hari',
    competitive_advantage_id: 'Kemurnian CaO aktif >92% pada kapur bakar kami mempercepat proses desulfurisasi dalam peleburan besi di Cilegon.',
    faq_id: [
      { q: 'Apakah tersedia pengiriman ke Pelabuhan Cigading?', a: 'Ya, kami melayani bongkar muat di Pelabuhan Cigading khusus untuk supply industri baja di Cilegon.' }
    ],
    related_products: [{ slug_id: 'kapur-bakar', name_id: 'Kapur Bakar' }, { slug_id: 'batu-kapur', name_id: 'Batu Kapur' }],
    related_industries: [{ slug_id: 'baja', name_id: 'Industri Baja' }],
  },
  {
    id: 'karawang', slug: 'karawang',
    name_id: 'Karawang — Kawasan Industri Terpadu', name_en: 'Karawang — Integrated Industrial Area',
    region_id: 'Jawa Barat', region_en: 'West Java',
    overview_id: 'Karawang merupakan pusat manufaktur otomotif dan elektronik dunia di Indonesia. PT Wira Energi Utama hadir memasok kalsium karbonat (CaCO3) ultra-halus untuk industri otomotif (sealant) dan polymer compounding yang beroperasi di KIIC, Suryacipta, dan Jababeka.',
    overview_en: 'Karawang is the world’s automotive and electronic manufacturing center in Indonesia. PT WEU supplies ultra-fine CaCO3 for automotive and polymer industries.',
    geo: { lat: -6.3073, lng: 107.2872 },
    geological_advantage_id: 'Tingkat brightness ≥ 94% pada CaCO3 kami memenuhi standar estetika tinggi untuk komponen plastik otomotif di Karawang.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Patimban', 'Tanjung Priok'],
    industries_served: ['Automotive', 'Plastik', 'Elektronik'],
    lead_time_local: '10–15 Hari', lead_time_regional: '12–18 Hari',
    competitive_advantage_id: 'Spesifikasi mesh 1.250 hingga 2.500 kami memberikan tekstur permukaan yang unggul untuk produsen suku cadang di Karawang.',
    faq_id: [
      { q: 'Dapatkah PT WEU mengirim ke area industri KIIC?', a: 'Ya, kami menyediakan layanan distribusi darat (LTL/FTL) dari Pelabuhan Tanjung Priok langsung ke gerbang industri Karawang.' }
    ],
    related_products: [{ slug_id: 'kalsium-karbonat', name_id: 'CaCO3' }, { slug_id: 'pcc', name_id: 'PCC' }],
    related_industries: [{ slug_id: 'plastik-karet', name_id: 'Plastik & Karet' }],
  },
  {
    id: 'bekasi', slug: 'bekasi',
    name_id: 'Bekasi — Hub Manufaktur Nasional', name_en: 'Bekasi — National Manufacturing Hub',
    region_id: 'Jawa Barat', region_en: 'West Java',
    overview_id: 'Kawasan industri Bekasi merupakan rumah bagi ribuan pabrik pakan ternak, makanan, dan barang konsumsi. PT Wira Energi Utama menyediakan kalsium karbonat grade industri untuk menjamin kualitas pengolahan pakan ternak dan aplikasi pengemasan di Cikarang dan sekitarnya.',
    overview_en: 'Bekasi industrial area is home to thousands of factories. PT WEU provides industrial grade calcium carbonate to ensure animal feed quality and packaging applications.',
    geo: { lat: -6.2383, lng: 106.9756 },
    geological_advantage_id: 'Kandungan Logam Berat (Pb) < 1 ppm pada mineral kami menjamin keamanan untuk aplikasi pakan ternak skala besar di Bekasi.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Tanjung Priok', 'Cikarang Dry Port'],
    industries_served: ['Pakan Ternak', 'Consumer Goods', 'Konstruksi'],
    lead_time_local: '10–12 Hari', lead_time_regional: '12–15 Hari',
    competitive_advantage_id: 'Layanan jumbo bag yang higienis dan sistem pengiriman terjadwal membantu efisiensi inventory pabrik di Bekasi.',
    faq_id: [
      { q: 'Apakah produk Kakao PT WEU bersertifikat untuk pakan ternak?', a: 'Produk kami memiliki hasil uji Sucofindo yang mengonfirmasi kadar kalsium tinggi dan keamanan logam berat untuk campuran pakan.' }
    ],
    related_products: [{ slug_id: 'kalsium-karbonat', name_id: 'CaCO3' }, { slug_id: 'agregat', name_id: 'Agregat Beton' }],
    related_industries: [{ slug_id: 'pertanian', name_id: 'Pakan Ternak' }],
  },
  {
    id: 'kek-bitung', slug: 'kek-bitung',
    name_id: 'KEK Bitung — Kawasan Ekonomi Khusus', name_en: 'Bitung Special Economic Zone',
    region_id: 'Sulawesi Utara', region_en: 'North Sulawesi',
    overview_id: 'Kawasan Ekonomi Khusus (KEK) Bitung merupakan prioritas strategis bagi PT Wira Energi Utama dalam mendukung hilirisasi industri di Sulawesi. Kami menyediakan mineral dasar untuk mendukung pembangunan infrastruktur KEK dan operasional pabrik yang memanfaatkan fasilitas insentif ekonomi di Bitung.',
    overview_en: 'The Bitung SEZ is a strategic priority for PT WEU in supporting industrial downstreaming in Sulawesi.',
    geo: { lat: 1.4404, lng: 125.1984 },
    geological_advantage_id: 'Terletak tepat di jalur logistik utama ekspor. Efisiensi fiskal KEK Bitung dikombinasikan dengan kemurnian mineral Ratatotok menciptakan value proposition ekspor yang tak tertandingi.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Terminal Hub Internasional Bitung'],
    industries_served: ['Hilirisasi Mineral', 'Food Processing', 'Logistik'],
    lead_time_local: '1 Hari', lead_time_regional: '3–5 Hari',
    competitive_advantage_id: 'Status KEK mempercepat proses administrasi ekspor-impor, memberikan harga yang lebih kompetitif bagi pembeli internasional di kawasan Asia Pasifik.',
    faq_id: [
      { q: 'Apa manfaat membeli dari PT WEU via KEK Bitung?', a: 'Kemudahan logistik internasional dan jaminan ketersediaan volume besar (bulk) karena kedekatan lokasi tambang.' }
    ],
    related_products: [{ slug_id: 'batu-kapur', name_id: 'Batu Kapur' }, { slug_id: 'kapur-bakar', name_id: 'Kapur Bakar' }],
    related_industries: [{ slug_id: 'baja', name_id: 'Hilirisasi Logam' }],
  },
  {
    id: 'maluku', slug: 'maluku',
    name_id: 'Maluku — Hub Smelter Nikel', name_en: 'Maluku — Nickel Smelter Hub',
    region_id: 'Kepulauan Maluku', region_en: 'Maluku Islands',
    overview_id: 'Kepulauan Maluku (khususnya Halmahera/Weda Bay) merupakan episentrum nikel dunia. PT Wira Energi Utama adalah pemasok utama Batu Kapur dan Kapur Bakar untuk proses pemurnian nikel (smelter) di wilayah Maluku. Kedekatan geografis Pelabuhan Bitung dengan Maluku Utara menjamin lead time logistik yang lebih cepat dibanding supplier dari Jawa.',
    overview_en: 'Maluku Islands (Weda Bay) is the world’s nickel epicenter. PT WEU is a major supplier of Limestone and Quicklime for nickel smelters in Maluku.',
    geo: { lat: 0.735, lng: 127.55 },
    geological_advantage_id: 'Stabilitas CaO >55% kami menjamin yield nikel yang lebih tinggi dan konsistensi slag dalam reaktor smelter di Weda Bay.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Pelabuhan Weda', 'Pelabuhan Tanjung Buli', 'Bitung'],
    industries_served: ['Smelter Nikel', 'PLTU', 'Infrastruktur'],
    lead_time_local: '2–4 Hari', lead_time_regional: '4–7 Hari',
    competitive_advantage_id: 'Distribusi laut langsung dari Sulawesi Utara ke Maluku Utara menggunakan tongkang internal kami meminimalkan risiko keterlambatan rantai pasok smelter.',
    faq_id: [
      { q: 'Apakah PT WEU mampu melokasi ke site remote di Halmahera?', a: 'Ya, kami berpengalaman mengirim ke site-site pertambangan nikel di area terpencil menggunakan LCT atau tongkang kecil jika dermaga terbatas.' }
    ],
    related_products: [{ slug_id: 'kapur-bakar', name_id: 'Kapur Bakar' }, { slug_id: 'batu-kapur', name_id: 'Batu Kapur' }],
    related_industries: [{ slug_id: 'baja', name_id: 'Smelter & Nikel' }],
  },
  {
    id: 'serang', slug: 'serang',
    name_id: 'Serang — Kawasan Industri Pesisir', name_en: 'Serang — Coastal Industrial Zone',
    region_id: 'Banten', region_en: 'Banten',
    overview_id: 'Wilayah Serang, Banten, memiliki konsentrasi industri pengolahan air (IPAM) dan pabrik kimia yang tinggi. PT Wira Energi Utama melayani kebutuhan Kapur Padam (Ca(OH)2) untuk proses netralisasi air limbah industri di kawasan Bojonegara dan sekitarnya.',
    overview_en: 'Serang, Banten, has a high concentration of water treatment and chemical plants. PT WEU serves Hydrated Lime needs for industrial wastewater neutralization.',
    geo: { lat: -6.115, lng: 106.15 },
    geological_advantage_id: 'Sesuai untuk sistem FGD (Flue Gas Desulfurization) PLTU di sepanjang pesisir Banten karena kadar reaktivitas kalsium hidroksida yang tinggi.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Banten (Bojonegara)', 'Merak'],
    industries_served: ['Water Treatment', 'PLTU', 'Kimia'],
    lead_time_local: '9–14 Hari', lead_time_regional: '12–18 Hari',
    competitive_advantage_id: 'Mesh size 325 kami yang presisi memastikan pelarutan kapur padam yang sempurna (low residue) untuk sistem otomatisasi IPAL pabrik di Serang.',
    faq_id: [
      { q: 'Berapa reaktivitas kapur padam PT WEU?', a: 'Kandungan Ca(OH)2 mencapai 94.5% dengan reaktivitas netralisasi asam yang sangat responsif.' }
    ],
    related_products: [{ slug_id: 'kapur-padam', name_id: 'Kapur Padam' }, { slug_id: 'kapur-bakar', name_id: 'Kapur Bakar' }],
    related_industries: [{ slug_id: 'pengolahan-air', name_id: 'Water Treatment' }],
  },
  {
    id: 'kotamobagu', slug: 'kotamobagu',
    name_id: 'Kotamobagu — Hub Logistik BMR', name_en: 'Kotamobagu — BMR Logistics Hub',
    region_id: 'Sulawesi Utara', region_en: 'North Sulawesi',
    overview_id: 'Kotamobagu adalah pusat ekonomi untuk wilayah Bolaang Mongondow Raya (BMR) dan gerbang darat utama menuju tambang Ratatotok. PT Wira Energi Utama memanfaatkan posisi strategis Kotamobagu sebagai basis koordinasi armada dump truck dan pemeliharaan alat berat untuk memastikan kelancaran operasional tambang.',
    overview_en: 'Kotamobagu is the economic center for the BMR region and the primary land gateway to the Ratatotok mine.',
    geo: { lat: 0.7306, lng: 124.3125 },
    geological_advantage_id: 'Terletak di jantung sabuk mineral Sulawesi Utara, memberikan akses darat tercepat ke wilayah konsesi tambang PT WEU.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Pelabuhan Kotabunan (45 km)', 'Bitung'],
    industries_served: ['Pertanian', 'Konstruksi', 'Logistik Tambang'],
    lead_time_local: '1 Hari', lead_time_regional: '3–5 Hari',
    competitive_advantage_id: 'Dukungan tenaga kerja lokal dan bengkel alat berat terpadu di Kotamobagu menjamin uptime operasional tambang yang sangat tinggi.',
    faq_id: [
      { q: 'Apakah PT WEU memiliki kantor di Kotamobagu?', a: 'Kami memiliki kantor perwakilan untuk koordinasi operasional lapangan dan logistik darat di wilayah Kotamobagu.' }
    ],
    related_products: [{ slug_id: 'agregat', name_id: 'Agregat Beton' }, { slug_id: 'batu-kapur', name_id: 'Batu Kapur' }],
    related_industries: [{ slug_id: 'konstruksi', name_id: 'Konstruksi' }],
  },
  {
    id: 'tangerang', slug: 'tangerang',
    name_id: 'Tangerang — Kawasan Industri Kimia', name_en: 'Tangerang — Chemical Industrial Zone',
    region_id: 'Banten', region_en: 'Banten',
    overview_id: 'Tangerang merupakan rumah bagi industri kimia hulu dan hilir yang membutuhkan Calcium Carbonate dengan kemurnian molekuler tinggi. PT Wira Energi Utama memasok PCC dan CaCO3 halus untuk produsen cat, perekat, dan barang plastik di kawasan industri Cikupa dan Bitung (Tangerang).',
    overview_en: 'Tangerang is home to upstream and downstream chemical industries requiring high molecular purity Calcium Carbonate.',
    geo: { lat: -6.1783, lng: 106.63 },
    geological_advantage_id: 'Kemurnian CaCO3 98.8% dari Ratatotok memberikan profil rheologi yang unggul untuk formulasi polymer di Tangerang.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Tanjung Priok', 'Merak Mas'],
    industries_served: ['Kimia', 'Polimer', 'Cat & Coating'],
    lead_time_local: '10–14 Hari', lead_time_regional: '12–15 Hari',
    competitive_advantage_id: 'Ketersediaan berbagai varian mesh (400–2.500) memungkinkan produsen di Tangerang mendapatkan spesifikasi yang tepat untuk satu lini produksi.',
    faq_id: [
      { q: 'Apakah kapur PT WEU kompatibel dengan resin impor?', a: 'Ya, kalsium karbonat kami memiliki pH stabil 8.5–9.5 yang sangat kompatibel dengan berbagai jenis resin polimer standar industri.' }
    ],
    related_products: [{ slug_id: 'kalsium-karbonat', name_id: 'CaCO3' }, { slug_id: 'pcc', name_id: 'PCC' }],
    related_industries: [{ slug_id: 'cat-coating', name_id: 'Cat & Coating' }],
  },
  {
    id: 'kudus', slug: 'kudus',
    name_id: 'Kudus — Industri Kertas & Pangan', name_en: 'Kudus — Paper & Food Industry',
    region_id: 'Jawa Tengah', region_en: 'Central Java',
    overview_id: 'Kudus dikenal dengan industri kertas dan pengolahan tembakau/pangan skala besar. PT Wira Energi Utama menyediakan kalsium karbonat sebagai filler kertas untuk meningkatkan brightness dan opacity kertas produk kebanggaan Kudus.',
    overview_en: 'Kudus is known for large-scale paper and food processing industries.',
    geo: { lat: -6.8048, lng: 110.8413 },
    geological_advantage_id: 'Logistik via Pelabuhan Tanjung Emas (Semarang) yang efisien untuk menjangkau kawasan industri di Kudus.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Tanjung Emas (Semarang)', 'Bitung'],
    industries_served: ['Kertas', 'Pangan', 'Logistik'],
    lead_time_local: '9–12 Hari', lead_time_regional: '12–15 Hari',
    competitive_advantage_id: 'Brightness ≥ 95% pada CaCO3 kami membantu pabrik kertas di Kudus mengurangi penggunaan pemutih kimia (optical brighteners).',
    faq_id: [
      { q: 'Bagaimana rute pengiriman ke Kudus?', a: 'Muatan dikirim via laut ke Semarang (Tanjung Emas), kemudian diteruskan via truk kontainer ke lokasi pabrik di Kudus.' }
    ],
    related_products: [{ slug_id: 'kalsium-karbonat', name_id: 'CaCO3' }, { slug_id: 'kapur-padam', name_id: 'Kapur Padam' }],
    related_industries: [{ slug_id: 'kertas', name_id: 'Industri Kertas' }],
  },
  {
    id: 'kek-gresik', slug: 'kek-gresik',
    name_id: 'KEK Gresik — Kawasan Industri Java Integrated', name_en: 'Gresik SEZ — Java Integrated Industrial Estate',
    region_id: 'Jawa Timur', region_en: 'East Java',
    overview_id: 'Kawasan Ekonomi Khusus (KEK) Gresik (JIIPE) merupakan pusat industri terintegrasi yang membutuhkan mineral industri dalam volume masif untuk konstruksi pabrik dan operasional smelter tembaga. PT Wira Energi Utama siap mendukung ekosistem KEK Gresik dengan pasokan batu kapur metallurgical grade.',
    overview_en: 'The Gresik SEZ (JIIPE) is an integrated industrial center requiring massive industrial minerals for factory construction and copper smelter operations.',
    geo: { lat: -7.159, lng: 112.651 },
    geological_advantage_id: 'Kemampuan menyuplai volume bulk hingga 150.000 MT/bulan sangat sesuai dengan skala mega-project di KEK Gresik.',
    iup_area_ha: 97.05, production_mt_month: 150000,
    key_ports: ['Pelabuhan Manyar (JIIPE)', 'Tanjung Perak'],
    industries_served: ['Smelter Tembaga', 'Konstruksi Gedung', 'Kimia'],
    lead_time_local: '6–9 Hari', lead_time_regional: '10–14 Hari',
    competitive_advantage_id: 'Akses langsung ke dermaga Manyar memudahkan pembongkaran tongkang PT WEU langsung di dalam kawasan KEK Gresik.',
    faq_id: [
      { q: 'Apakah PT WEU bisa menyuplai batu kapur untuk reklamasi KEK?', a: 'Ya, kami memiliki kapasitas besar untuk mendukung tahap awal reklamasi maupun tahap operasional industri di KEK.' }
    ],
    related_products: [{ slug_id: 'batu-kapur', name_id: 'Batu Kapur' }, { slug_id: 'agregat', name_id: 'Agregat Beton' }],
    related_industries: [{ slug_id: 'baja', name_id: 'Smelter & Logam' }],
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
