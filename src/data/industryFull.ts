// src/data/industryFull.ts — Full industry data for 18-section pages

export interface IndustryFull {
  id: string; slug_id: string; slug_en: string;
  name_id: string; name_en: string;
  hero_bg: string; hero_tag: string;
  overview_id: string; overview_en: string;
  limestone_role_id: string; limestone_role_en: string;
  products_used: { slug_id: string; slug_en: string; name_id: string; name_en: string; role_id: string }[];
  tech_requirements: { param: string; value: string }[];
  process_steps_id: { title: string; desc: string }[];
  pain_points_id: string[];
  weu_value_id: string; weu_value_en: string;
  case_scenario_id: string;
  faq_id: { q: string; a: string }[];
  schema_service_id: string;
}

export const industriesFull: IndustryFull[] = [
  {
    id: 'semen', slug_id: 'semen', slug_en: 'cement',
    name_id: 'Industri Semen', name_en: 'Cement Industry',
    hero_bg: '/mining-bg.webp', hero_tag: 'Bahan Baku Utama Klinker',
    overview_id: 'Industri semen adalah konsumen terbesar batu kapur global, menggunakan 60–70% batu kapur sebagai bahan baku utama klinker Portland. Indonesia sebagai salah satu produsen semen terbesar Asia Tenggara membutuhkan pasokan batu kapur CaO tinggi yang konsisten dan dapat diandalkan. PT Wira Energi Utama menyediakan batu kapur dari formasi Ratatotok, Minahasa Tenggara — salah satu deposit kualitas tertinggi di Sulawesi Utara.',
    overview_en: 'The cement industry is the largest limestone consumer globally, using 60–70% limestone as the primary raw material for Portland clinker. PT Wira Energi Utama supplies high-CaO limestone from the Ratatotok formation in Southeast Minahasa — one of the highest-quality deposits in North Sulawesi.',
    limestone_role_id: 'Batu kapur (CaCO3) adalah bahan baku esensial yang diumpankan ke rotary kiln pada suhu 1.400–1.500°C untuk menghasilkan klinker — basis semua semen Portland. Reaksi kalsinasi mengubah CaCO3 menjadi CaO dan CO2. Batu kapur dengan CaO tinggi (>55%) dan pengotor rendah menghasilkan klinker berkualitas premium dengan efisiensi bakar optimal.',
    limestone_role_en: 'Limestone (CaCO3) is the essential raw material fed into rotary kilns at 1,400–1,500°C to produce clinker. The calcination reaction converts CaCO3 to CaO and CO2. High-CaO limestone (>55%) with low impurities produces premium quality clinker with optimal kiln efficiency.',
    products_used: [
      { slug_id: 'batu-kapur', slug_en: 'limestone', name_id: 'Batu Kapur (Limestone)', name_en: 'Limestone', role_id: 'Bahan baku utama 60–70% untuk produksi klinker Portland' },
      { slug_id: 'kalsium-karbonat', slug_en: 'caco3', name_id: 'CaCO3 Halus', name_en: 'Fine CaCO3', role_id: 'Filler penyesuai komposisi semen dan additive grinding aid' },
    ],
    tech_requirements: [
      { param: 'CaO Minimum', value: '> 52%' }, { param: 'SiO2 Maksimum', value: '< 1.5%' },
      { param: 'MgO Maksimum', value: '< 2.0%' }, { param: 'Al2O3 Maksimum', value: '< 0.5%' },
      { param: 'Moisture', value: '< 5%' }, { param: 'Ukuran Umpan Kiln', value: '10–80 mm' },
    ],
    process_steps_id: [
      { title: 'Penerimaan Batu Kapur', desc: 'Batu kapur diterima dari jetty/truk, dianalisis XRF, dan disimpan di stockpile tertutup.' },
      { title: 'Pre-Crushing', desc: 'Ukuran direduksi menggunakan hammer crusher menjadi <80mm untuk umpan kiln yang konsisten.' },
      { title: 'Pre-Homogenization', desc: 'Batu kapur dicampur dengan bahan koreksi (clay, iron ore) untuk target modul kimia klinker.' },
      { title: 'Rotary Kiln Calcination', desc: 'Campuran dibakar pada 1.400–1.500°C menghasilkan klinker — produk antara semen.' },
      { title: 'Grinding & Finishing', desc: 'Klinker digiling bersama gypsum dan additive untuk menghasilkan semen Portland final.' },
    ],
    pain_points_id: [
      'Variasi kadar CaO >2% antar batch menyebabkan inkonsistensi modul kimia dan kualitas klinker',
      'Kandungan MgO tinggi (>2%) memicu free lime berlebihan yang menurunkan kekuatan semen',
      'Keterlambatan pasokan menghentikan operasi kiln — downtime >1 jam sangat merugikan',
      'Biaya logistik jarak jauh meningkatkan COGS secara signifikan bagi pabrik semen regional',
    ],
    weu_value_id: 'PT WEU menyediakan batu kapur dengan kadar CaO 55.20% dan kontrol kualitas XRF setiap jam produksi. Dengan kapasitas 250 TPH dan jetty draft 12m, kami mampu memenuhi permintaan kontinu tanpa jeda pasokan. Lokasi Sulawesi Utara dan akses Pelabuhan Bitung menekan biaya logistik dibanding pasokan dari Jawa.',
    weu_value_en: 'PT WEU provides limestone with 55.20% CaO and hourly XRF quality control. With 250 TPH capacity and 12m draft jetty, we deliver continuous supply without interruption. North Sulawesi location and Bitung Port access significantly reduce logistics costs vs Java-based supply.',
    case_scenario_id: 'Pabrik semen kapasitas 3.000 TPD dengan kebutuhan batu kapur 5.400 ton/hari dapat dipenuhi dari pasokan tongkang mingguan PT WEU (7.500 MT/tongkang, 2 tongkang/minggu). COA per batch memastikan konsistensi modul LSF, SM, dan AM tanpa downtime analisis tambahan.',
    faq_id: [
      { q: 'Apakah batu kapur PT WEU sesuai untuk target LSF cement >95?', a: 'Ya. Dengan CaO 55.20% dan SiO2 0.35%, batu kapur kami menghasilkan rasio kimia optimal untuk target LSF 95–100 dengan penyesuaian minor pada mix design.' },
      { q: 'Bisakah ukuran disesuaikan untuk conveyor kami yang berukuran spesifik?', a: 'Tentu. Crushing plant 250 TPH kami dapat dikonfigurasi untuk output 10–80mm sesuai spesifikasi teknis conveyor dan pre-crusher pabrik Anda.' },
      { q: 'Apa lead time untuk kontrak semen reguler?', a: 'Untuk kontrak reguler berbasis tongkang, lead time adalah 7–14 hari per jadwal tongkang. Kami menyediakan jadwal bulanan tetap untuk ketersediaan kiln yang terjamin.' },
      { q: 'Apakah tersedia jaminan konsistensi kualitas bulanan?', a: 'Ya. Kami menerbitkan COA per 100 MT produksi dan laporan kualitas bulanan. Untuk kontrak jangka panjang, tersedia audit kualitas bersama di lokasi tambang.' },
      { q: 'Bagaimana penanganan jika ada variasi kualitas?', a: 'Kami memiliki prosedur klaim kualitas resmi. Jika analisis penerimaan menunjukkan variasi >1% dari COA, kami akan ganti pengiriman atau berikan kompensasi sesuai kontrak.' },
    ],
    schema_service_id: 'Penyediaan Batu Kapur untuk Industri Semen',
  },
  {
    id: 'baja', slug_id: 'baja', slug_en: 'steel',
    name_id: 'Industri Baja & Smelter', name_en: 'Steel & Smelter Industry',
    hero_bg: '/mining-bg.webp', hero_tag: 'Flux Agent Utama Peleburan Logam',
    overview_id: 'Industri baja dan smelter adalah pengguna terbesar kapur bakar (CaO) dan batu kapur lumpy sebagai flux agent. Di Indonesia, pertumbuhan industri nikel dan baja sejalan dengan program hilirisasi nasional membutuhkan pasokan flux mineral berkualitas tinggi. PT WEU melayani smelter-smelter berbasis Sulawesi yang merupakan pusat pengolahan nikel terbesar dunia.',
    overview_en: 'The steel and smelter industry is the largest consumer of quicklime (CaO) and lumpy limestone as fluxing agents. Growth in Indonesia\'s nickel and steel industry — driven by the national downstreaming program — demands high-quality flux minerals. PT WEU serves Sulawesi-based smelters, the world\'s largest nickel processing hub.',
    limestone_role_id: 'Batu kapur dan kapur bakar berfungsi sebagai flux agent dalam blast furnace, EAF (Electric Arc Furnace), dan rotary kiln smelter. Pada suhu >1.200°C, CaO bereaksi dengan pengotor SiO2, Al2O3, dan S membentuk slag yang memisahkan diri dari logam cair. Kemurnian CaO yang tinggi (>90% untuk kapur bakar) mengurangi konsumsi fluks dan meningkatkan yield logam.',
    limestone_role_en: 'Limestone and quicklime function as fluxing agents in blast furnaces, EAF, and smelter rotary kilns. At >1,200°C, CaO reacts with SiO2, Al2O3, and S impurities to form slag, separating from molten metal. High CaO purity (>90% for quicklime) reduces flux consumption and improves metal yield.',
    products_used: [
      { slug_id: 'batu-kapur', slug_en: 'limestone', name_id: 'Batu Kapur Lumpy', name_en: 'Lumpy Limestone', role_id: 'Flux agent primer dalam blast furnace dan kiln smelter nikel, 30–80mm' },
      { slug_id: 'kapur-bakar', slug_en: 'burn-lime', name_id: 'Kapur Bakar (CaO)', name_en: 'Quicklime (CaO)', role_id: 'High-activity flux untuk EAF, pemurnian baja, dan pengelolaan slag' },
    ],
    tech_requirements: [
      { param: 'CaO (Batu Kapur)', value: '> 55%' }, { param: 'SiO2 Maksimum', value: '< 0.5%' },
      { param: 'CaO Aktif (Kapur Bakar)', value: '> 90%' }, { param: 'Ukuran Lumpy', value: '30–80 mm' },
      { param: 'MgO Maksimum', value: '< 1.5%' }, { param: 'Sulfur (S)', value: '< 0.05%' },
    ],
    process_steps_id: [
      { title: 'Pererimaan & Screening', desc: 'Batu kapur/kapur bakar diterima, discreen sesuai ukuran spesifikasi, dan dianalisis CaO/MgO.' },
      { title: 'Charging ke Furnace', desc: 'Flux dimasukkan ke blast furnace/EAF bersama ore untuk proses peleburan.' },
      { title: 'Reaksi Fluxing', desc: 'CaO bereaksi dengan SiO2, Al2O3, dan S pada suhu >1.200°C membentuk slag cair.' },
      { title: 'Slag Separation', desc: 'Slag mengapung di atas logam cair dan dipisahkan secara gravitasi dari molten metal.' },
      { title: 'Refining', desc: 'Logam murni diproses lebih lanjut; slag didinginkan dan dapat dimanfaatkan sebagai agregat.' },
    ],
    pain_points_id: [
      'Kandungan SiO2 >1% dalam flux meningkatkan konsumsi CaO dan menurunkan yield logam hingga 2–3%',
      'Pasokan flux terputus menyebabkan downtime furnace — setiap jam shutdownbernilai ratusan juta rupiah',
      'Kadar moisture tinggi pada kapur bakar meredam reaktivitas dan meningkatkan konsumsi energi kiln',
      'Ukuran lumpy tidak seragam menyebabkan channeling dalam blast furnace dan inefisiensi distribusi gas',
    ],
    weu_value_id: 'PT WEU menyediakan batu kapur lumpy 30–80mm dengan SiO2 hanya 0.35% — jauh di bawah toleransi industri baja. Kapur bakar dengan available CaO 92.1% dan reaktivitas T60 < 2 menit memastikan efisiensi fluxing maksimal. Dengan jetty draft 12m, pengiriman bulk langsung ke dermaga smelter Sulawesi dapat dilakukan.',
    weu_value_en: 'PT WEU provides lumpy limestone 30–80mm with only 0.35% SiO2 — far below steel industry tolerance. Quicklime with 92.1% available CaO and T60 reactivity <2 minutes ensures maximum fluxing efficiency. The 12m draft jetty enables bulk delivery directly to Sulawesi smelter docks.',
    case_scenario_id: 'Smelter nikel kapasitas 100.000 ton NPI/tahun membutuhkan ±12.000 MT flux/bulan. Dengan 2 tongkang PT WEU per bulan (7.500 MT/tongkang), kebutuhan flux terpenuhi dengan buffer stock 3.000 MT. COA per batch memastikan kadar SiO2 dan CaO sesuai target operasional tanpa analisis tambahan di smelter.',
    faq_id: [
      { q: 'Apakah batu kapur PT WEU cocok untuk smelter RKEF (Rotary Kiln Electric Furnace)?', a: 'Ya. Ukuran 30–80mm dan CaO >55% dengan SiO2 <0.5% sangat sesuai untuk spesifikasi RKEF. Kami juga dapat menyesuaikan ukuran 10–50mm sesuai kebutuhan rotary kiln Anda.' },
      { q: 'Bagaimana cara pengiriman kapur bakar untuk smelter yang hygroscopic-sensitive?', a: 'Kapur bakar dikirim dalam jumbo bag sealed atau truk tertutup untuk meminimalkan kontak dengan udara lembab. Untuk pengiriman besar, tersedia solusi bulk dengan silo tertutup di lokasi smelter.' },
      { q: 'Berapa lead time untuk pasokan regular smelter?', a: 'Untuk kontrak regular via tongkang, jadwal mingguan atau dua mingguan dapat diatur dengan lead time produksi 5–7 hari.' },
      { q: 'Apakah tersedia uji reaktivitas (slaking test) per batch?', a: 'Ya. Setiap batch kapur bakar disertai laporan slaking test yang menunjukkan T60 dan suhu reaksi maksimum.' },
      { q: 'Apakah PT WEU dapat membantu mengoptimalkan rasio flux untuk spesifikasi slag tertentu?', a: 'Tim teknis kami dapat melakukan konsultasi mix design flux berdasarkan komposisi ore nikel/besi Anda untuk mengoptimalkan basicity ratio slag.' },
    ],
    schema_service_id: 'Penyediaan Flux Agent Mineral untuk Industri Baja dan Smelter',
  },
  {
    id: 'pltu', slug_id: 'pltu', slug_en: 'power-plant',
    name_id: 'Pembangkit Listrik (PLTU)', name_en: 'Coal Power Plant (PLTU)',
    hero_bg: '/mining-bg.webp', hero_tag: 'Solusi FGD & Desulfurisasi Gas Buang',
    overview_id: 'Pembangkit listrik tenaga uap (PLTU) batu bara di Indonesia diwajibkan memasang sistem FGD (Flue Gas Desulfurization) untuk memenuhi standar emisi SO2. Kapur padam (Ca(OH)2) adalah sorbent utama dalam sistem FGD tipe dry injection, sedangkan batu kapur digunakan dalam sistem wet scrubber. PT WEU menyediakan kedua produk ini dengan spesifikasi yang memenuhi kebutuhan PLTU di Indonesia Timur.',
    overview_en: 'Coal-fired power plants (PLTU) in Indonesia are required to install FGD systems to meet SO2 emission standards. Hydrated lime (Ca(OH)2) is the primary sorbent in dry injection FGD, while limestone is used in wet scrubber systems. PT WEU supplies both products meeting PLTU specifications in Eastern Indonesia.',
    limestone_role_id: 'Dalam sistem FGD tipe dry sorbent injection (DSI), kapur padam diinjeksikan ke duct gas buang sebelum particulate collector. Ca(OH)2 bereaksi dengan SO2 membentuk CaSO3 yang tertangkap di bagpouse filter. Efisiensi removal SO2 mencapai 70–90% tergantung rasio stoikiometri. Kehalusan 325 mesh (>95% passing) adalah kunci efektivitas reaksi.',
    limestone_role_en: 'In dry sorbent injection (DSI) FGD systems, hydrated lime is injected into flue gas duct before the particulate collector. Ca(OH)2 reacts with SO2 to form CaSO3 captured in bag filters. SO2 removal efficiency reaches 70–90% depending on stoichiometric ratio. Fineness of 325 mesh (>95% passing) is key to reaction effectiveness.',
    products_used: [
      { slug_id: 'kapur-padam', slug_en: 'hydrated-lime', name_id: 'Kapur Padam (Ca(OH)2)', name_en: 'Hydrated Lime', role_id: 'Sorbent utama sistem FGD-DSI untuk absorpsi SO2 dari gas buang batu bara' },
      { slug_id: 'batu-kapur', slug_en: 'limestone', name_id: 'Batu Kapur', name_en: 'Limestone', role_id: 'Sorbent sistem FGD wet scrubber — dikonversi menjadi slurry CaCO3' },
    ],
    tech_requirements: [
      { param: 'Ca(OH)2 Minimum', value: '> 92%' }, { param: 'Kehalusan 325 Mesh', value: '> 95% passing' },
      { param: 'Moisture Content', value: '< 1%' }, { param: 'MgO Maksimum', value: '< 0.5%' },
      { param: 'Reaktivitas pH', value: 'pH slurry > 12' }, { param: 'Bulk Density', value: '0.45–0.55 g/ml' },
    ],
    process_steps_id: [
      { title: 'Penerimaan Kapur Padam', desc: 'Diterima dalam jumbo bag 1.000kg atau silo bulk, disimpan di storage kering kedap udara.' },
      { title: 'Persiapan Sistem Injeksi', desc: 'Kapur padam dimasukkan ke pneumatic conveying system menuju injection lance di duct.' },
      { title: 'Gas Conditioning', desc: 'Gas buang dikondisikan ke suhu optimal 135–150°C untuk reaksi sorbent maksimal.' },
      { title: 'Injeksi DSI', desc: 'Ca(OH)2 diinjeksikan ke gas stream dengan rasio Ca/S = 2–3 untuk efisiensi removal 70–90%.' },
      { title: 'Penangkapan Reaksi Produk', desc: 'Partikel CaSO3 dan CaSO4 ditangkap oleh baghouse filter atau ESP.' },
    ],
    pain_points_id: [
      'Regulasi KLHK mensyaratkan emisi SO2 <550 mg/Nm3 — pelanggas yang tidak comply terancam sanksi besar',
      'Kehalusan kapur padam tidak memenuhi 325 mesh menurunkan efisiensi SO2 removal dan meningkatkan konsumsi sorbent',
      'Keterlambatan pasokan menyebabkan PLTU beroperasi di bawah kapasitas atau menggunakan sorbent darurat berkualitas rendah',
      'Kapur padam dengan moisture >1% menggumpal dalam conveying system dan mengganggu sistem injeksi pneumatik',
    ],
    weu_value_id: 'Kapur padam PT WEU memiliki Ca(OH)2 94.5%, kehalusan >95% passing 325 mesh, dan moisture <1%. Dengan kapasitas 150.000 MT/bulan dan lokasi Sulawesi, kami adalah supplier terdekat untuk PLTU di Sulawesi, Maluku, dan Papua. Pengiriman via tongkang dari Jetty Ratatotok ke lokasi PLTU pesisir dapat dilakukan dalam 3–14 hari.',
    weu_value_en: 'PT WEU\'s hydrated lime has 94.5% Ca(OH)2, >95% passing 325 mesh fineness, and <1% moisture. With 150,000 MT/month capacity and Sulawesi location, we are the closest supplier for PLTUs in Sulawesi, Maluku, and Papua. Barge delivery from Ratatotok Jetty to coastal PLTU sites takes 3–14 days.',
    case_scenario_id: 'PLTU 200 MW dengan konsumsi sorbent 500 MT/bulan dapat dipenuhi dengan 1 pengiriman jumbo bag/bulan dari PT WEU. COA per batch membuktikan kehalusan 325 mesh dan Ca(OH)2 >92% untuk audit KLHK. Jadwal pengiriman bulanan tetap memastikan stok sorbent minimal 30 hari.',
    faq_id: [
      { q: 'Apakah kapur padam PT WEU cocok untuk sistem FGD-SDA (Spray Dryer Absorber)?', a: 'Ya. Dengan kehalusan >95% passing 325 mesh dan reaktivitas tinggi, produk kami sesuai untuk SDA dan system turbosorp yang membutuhkan dispersi partikel halus dalam gas buang.' },
      { q: 'Berapa rasio stoikiometri Ca/S yang direkomendasikan?', a: 'Untuk target removal SO2 >80%, rasio Ca/S = 2.0–2.5 umumnya efektif menggunakan produk kami dengan Ca(OH)2 94.5%. Konsultasikan dengan tim teknis kami untuk optimasi spesifik sistem Anda.' },
      { q: 'Apakah tersedia analisis reaktivitas untuk sistem FGD kami?', a: 'Ya. Kami menyediakan data reaktivitas pH dan surface area analysis yang diperlukan untuk verifikasi performa dalam sistem FGD spesifik Anda.' },
      { q: 'Bagaimana pengemasan yang tepat untuk menghindari penggumpalan?', a: 'Produk dikemas dalam jumbo bag liner PE berlapis dengan valve seal. Untuk storage >30 hari, disarankan silo tertutup dengan sistem deaeration untuk menjaga fluiditas powder.' },
      { q: 'Apakah PT WEU dapat menyediakan technical support untuk commissioning FGD?', a: 'Tim teknis kami dapat hadir untuk supervisi commissioning dan optimasi sistem injeksi untuk memastikan efisiensi SO2 removal sesuai target compliance KLHK.' },
    ],
    schema_service_id: 'Penyediaan Kapur Padam untuk Sistem FGD Pembangkit Listrik',
  },
  {
    id: 'kimia', slug_id: 'kimia', slug_en: 'chemical',
    name_id: 'Industri Kimia', name_en: 'Chemical Industry',
    hero_bg: '/mining-bg.webp', hero_tag: 'Bahan Baku Kimia Kalsium Berkemurnian Tinggi',
    overview_id: 'Industri kimia menggunakan berbagai produk turunan kalsium sebagai bahan baku maupun reaktan dalam proses manufaktur. CaO (kapur bakar) menjadi prekursor kalsium karbida, kalsium hipoklorit, dan senyawa organik kalsium. PCC (Precipitated Calcium Carbonate) digunakan sebagai filler fungsional berkemurnian tinggi dalam formulasi kimia specialty. PT WEU menyediakan spektrum lengkap produk kalsium dari grade industri hingga mendekati grade farmasi.',
    overview_en: 'The chemical industry uses various calcium derivatives as raw materials and reactants in manufacturing processes. CaO is a precursor for calcium carbide, calcium hypochlorite, and organic calcium compounds. PCC is used as a high-purity functional filler in specialty chemical formulations. PT WEU provides a full spectrum of calcium products from industrial to near-pharmaceutical grade.',
    limestone_role_id: 'Dalam industri kimia, kalsium berfungsi sebagai reaktan pH regulator, neutralizing agent, dan bahan baku sintesis. CaO bereaksi dengan Cl2 menghasilkan kalsium hipoklorit (bleaching powder). CaO + C(kokas) menghasilkan kalsium karbida untuk produksi asetilena. Ca(OH)2 digunakan dalam neutralisasi limbah asam dan presipitasi logam berat dalam sistem pengolahan air limbah industri kimia.',
    limestone_role_en: 'In the chemical industry, calcium functions as a pH regulator reactant, neutralizing agent, and synthesis raw material. CaO reacts with Cl2 to produce calcium hypochlorite (bleaching powder). CaO + C (coke) produces calcium carbide for acetylene production. Ca(OH)2 is used in acid waste neutralization and heavy metal precipitation.',
    products_used: [
      { slug_id: 'kapur-bakar', slug_en: 'burn-lime', name_id: 'Kapur Bakar (CaO)', name_en: 'Quicklime', role_id: 'Prekursor kalsium karbida, hipoklorit, dan agen netralisasi asam kuat' },
      { slug_id: 'pcc', slug_en: 'pcc', name_id: 'PCC (Precipitated CaCO3)', name_en: 'PCC', role_id: 'Filler fungsional grade tinggi untuk formulasi kimia, sealant, dan coating' },
      { slug_id: 'kalsium-karbonat', slug_en: 'caco3', name_id: 'CaCO3 (Grade Teknis)', name_en: 'Technical CaCO3', role_id: 'Filler dan reaktan pH dalam proses kimia industri umum' },
    ],
    tech_requirements: [
      { param: 'CaO Aktif (Kapur Bakar)', value: '> 90%' }, { param: 'Reaktivitas T60', value: '< 2 menit' },
      { param: 'Kemurnian PCC (CaCO3)', value: '> 99.85%' }, { param: 'Heavy Metals (Pb)', value: '< 1 ppm' },
      { param: 'Moisture CaO', value: '< 0.5%' }, { param: 'pH Slurry CaO', value: '> 12.5' },
    ],
    process_steps_id: [
      { title: 'Penerimaan & Verifikasi', desc: 'Analisis kemurnian dan reaktivitas CaO/PCC sebelum penerimaan menggunakan XRF dan titrasi.' },
      { title: 'Storage Terkontrol', desc: 'CaO disimpan di silo sealed; PCC dalam kondisi kering untuk mencegah karbonasi dan degradasi.' },
      { title: 'Dosing Presisi', desc: 'Penambahan CaO/Ca(OH)2 ke reaktor kimia menggunakan sistem gravimetric feeder dengan akurasi ±0.1%.' },
      { title: 'Reaksi Kimia', desc: 'CaO bereaksi dengan reagent target (asam, klorin, dll.) dalam reaktor bertemperatur terkontrol.' },
      { title: 'Quality Check Produk', desc: 'Analisis produk reaksi memastikan yield dan kemurnian produk kimia sesuai spesifikasi.' },
    ],
    pain_points_id: [
      'Kemurnian CaO yang tidak konsisten mempengaruhi yield reaksi kimia dan menghasilkan produk off-spec',
      'Kontaminasi logam berat dalam CaCO3/PCC menyebabkan kegagalan dalam aplikasi farmasi dan makanan',
      'Reaktivitas CaO yang rendah meningkatkan waktu reaksi dan menurunkan throughput reaktor',
      'Variasi ukuran partikel PCC menyebabkan masalah rheologi dalam formulasi sealant dan coating',
    ],
    weu_value_id: 'Kapur bakar PT WEU dengan CaO aktif 92.1% dan T60 <2 menit memastikan konversi reaksi kimia yang reprodusibel. PCC kami dengan kemurnian 99.85% dan heavy metals <1ppm mendekati standar farmasi. MSDS lengkap disediakan per batch untuk compliance SHE departemen industri kimia.',
    weu_value_en: 'PT WEU\'s quicklime with 92.1% active CaO and T60 <2 minutes ensures reproducible chemical reaction conversion. Our PCC with 99.85% purity and heavy metals <1ppm approaches pharmaceutical standards. Complete MSDS provided per batch for chemical industry SHE compliance.',
    case_scenario_id: 'Produsen kalsium hipoklorit membutuhkan 500 MT/bulan CaO reaktivitas tinggi. Dengan kapur bakar PT WEU (CaO aktif 92.1%, T60 1.8 menit), yield kalsium hipoklorit meningkat 3% dibanding CaO grade standar, menghasilkan penghematan bahan baku Rp 45 juta/bulan pada harga kalsium hipoklorit market.',
    faq_id: [
      { q: 'Apakah CaO PT WEU bisa digunakan untuk produksi kalsium karbida?', a: 'Ya. Kapur bakar dengan CaO aktif >90% dan kemurnian tinggi sesuai untuk produksi kalsium karbida. Kandungan SiO2 rendah (0.22%) meminimalkan pembentukan silica byproduct yang mengganggu proses.' },
      { q: 'Apakah PCC PT WEU sudah food grade?', a: 'Kemurnian PCC kami (99.85% CaCO3, Pb <1ppm) mendekati standar food grade. Proses sertifikasi food grade sedang dalam finalisasi. Saat ini produk dipasarkan sebagai industrial/technical grade.' },
      { q: 'Apakah tersedia analisis trace elements untuk PCC?', a: 'Ya. Kami menyediakan analisis ICP-MS untuk trace elements (Pb, As, Cd, Hg) per batch atas permintaan, terutama untuk aplikasi yang mendekati food/pharma grade.' },
      { q: 'Bagaimana stabilitas CaO selama masa penyimpanan?', a: 'CaO reaktivitasnya menurun 2–5% per bulan jika terekspos udara lembab. Disarankan penyimpanan dalam silo sealed dengan dry nitrogen blanket untuk menjaga CaO aktif >85% hingga 6 bulan.' },
      { q: 'Apakah PT WEU dapat menyesuaikan particle size distribution PCC untuk formulasi sealant?', a: 'Ya. PCC tersedia dengan D50 1.2–2.5 µm standar. Untuk kebutuhan viscosity dan rheologi sealant tertentu, kami dapat mengkonsultasikan surface modification dan particle size yang optimal.' },
    ],
    schema_service_id: 'Penyediaan Bahan Baku Kalsium untuk Industri Kimia',
  },
  {
    id: 'pertanian', slug_id: 'pertanian', slug_en: 'agriculture',
    name_id: 'Industri Pertanian & Pupuk', name_en: 'Agriculture & Fertilizer',
    hero_bg: '/mining-bg.webp', hero_tag: 'Penetral Tanah Asam — Pupuk Kalsium Alami',
    overview_id: 'Pertanian Indonesia menghadapi tantangan besar berupa tanah asam yang tersebar luas, terutama di Sulawesi, Maluku, dan Papua. Tanah dengan pH <5.5 menyebabkan gejala keracunan aluminium dan mangan yang menurunkan produktivitas tanaman secara dramatis. Pengapuran (liming) dengan batu kapur pertanian (aglime) atau kapur padam adalah solusi paling efektif dan ekonomis untuk meningkatkan pH dan produktivitas lahan.',
    overview_en: 'Indonesian agriculture faces a major challenge: widespread acidic soils, particularly in Sulawesi, Maluku, and Papua. Soils with pH <5.5 cause aluminum and manganese toxicity that dramatically reduces crop productivity. Liming with agricultural limestone (aglime) or hydrated lime is the most effective and economical solution to raise pH and improve land productivity.',
    limestone_role_id: 'Batu kapur pertanian (aglime) menetralkan keasaman tanah melalui reaksi: CaCO3 + H2O + CO2 → Ca2+ + 2HCO3-. Ion Ca2+ menggantikan ion H+ dan Al3+ pada permukaan koloid tanah, meningkatkan pH dan mengurangi toksisitas. Kalsium juga merupakan hara makro esensial untuk pertumbuhan dinding sel dan pembentukan biji. Reaktivitas aglime bergantung pada kehalusan — semakin halus, semakin cepat bereaksi.',
    limestone_role_en: 'Agricultural limestone (aglime) neutralizes soil acidity: CaCO3 + H2O + CO2 → Ca2+ + 2HCO3-. Ca2+ ions replace H+ and Al3+ on soil colloid surfaces, raising pH and reducing toxicity. Calcium is also an essential macro nutrient for cell wall formation and seed development. Aglime reactivity depends on fineness — finer particles react faster.',
    products_used: [
      { slug_id: 'batu-kapur', slug_en: 'limestone', name_id: 'Batu Kapur Pertanian (Aglime)', name_en: 'Agricultural Limestone (Aglime)', role_id: 'Penetral pH tanah asam, sumber kalsium, dan pembenah struktur tanah — aplikasi brodcast' },
      { slug_id: 'kapur-padam', slug_en: 'hydrated-lime', name_id: 'Kapur Padam (Ca(OH)2)', name_en: 'Hydrated Lime', role_id: 'Penetral cepat pH kritis (<5.0) dan desinfektan patogen tanah pra-tanam' },
    ],
    tech_requirements: [
      { param: 'CaCO3 Minimum (CCE)', value: '> 85%' }, { param: 'Kehalusan Aglime', value: '> 40% passing 100 mesh' },
      { param: 'Moisture Maksimum', value: '< 5%' }, { param: 'Heavy Metals (Cd)', value: '< 3 ppm' },
      { param: 'Magnesium (MgO)', value: '< 5%' }, { param: 'Ca(OH)2 (Kapur Padam)', value: '> 90%' },
    ],
    process_steps_id: [
      { title: 'Analisis Tanah', desc: 'Pengambilan sampel tanah dan analisis pH, Al3+ exchangeable, dan kebutuhan kapur (lime requirement).' },
      { title: 'Kalkulasi Dosis', desc: 'Dosis aglime dihitung berdasarkan target pH (6.5–7.0 umum crops), CEC tanah, dan CCE produk.' },
      { title: 'Aplikasi Pre-Tanam', desc: 'Aglime disebarkan merata 2–4 minggu sebelum tanam menggunakan spreader dan diinkorporasi dengan bajak.' },
      { title: 'Inkorporasi', desc: 'Pengolahan tanah memastikan kontak kapur dengan partikel tanah untuk reaksi netralisasi yang efektif.' },
      { title: 'Monitoring pH', desc: 'Uji pH tanah dilakukan 4–8 minggu setelah aplikasi untuk verifikasi efektivitas dan kebutuhan dosis lanjutan.' },
    ],
    pain_points_id: [
      'Tanah asam pH <5.5 menyebabkan penurunan produktivitas padi, jagung, dan sawit hingga 40–60%',
      'Harga aglime impor tinggi dan ketergantungan pada pasokan dari Jawa meningkatkan biaya input pertanian',
      'Kehalusan aglime tidak memadai (<20% passing 100 mesh) memperlambat reaksi netralisasi hingga 2–3 musim tanam',
      'Kontaminasi logam berat (Cd, Pb) dalam kapur pertanian kualitas rendah mengkontaminasi rantai pangan',
    ],
    weu_value_id: 'Batu kapur PT WEU dari Ratatotok memiliki CCE (Calcium Carbonate Equivalent) tinggi dengan CaO 55.20%. Lokasi Sulawesi Utara memungkinkan distribusi ke sentra pertanian Sulawesi, Maluku, dan Papua lebih efisien dan ekonomis dibanding supplier Jawa. Heavy metals rendah menjamin keamanan produksi pangan.',
    weu_value_en: 'PT WEU\'s limestone from Ratatotok has a high CCE with CaO 55.20%. North Sulawesi location enables more efficient and economical distribution to agricultural centers in Sulawesi, Maluku, and Papua compared to Java-based suppliers. Low heavy metals guarantee food production safety.',
    case_scenario_id: 'Perkebunan sawit 1.000 ha dengan pH tanah rata-rata 4.8 membutuhkan dosis aglime 2 ton/ha = 2.000 MT total. Dengan pasokan dari PT WEU via truk (Sulawesi regional), biaya logistik turun 30% vs supplier Jawa. Dalam 2 musim tanam, pH meningkat ke 5.8–6.2 dengan peningkatan yield FFB 15–25%.',
    faq_id: [
      { q: 'Berapa dosis kapur yang tepat untuk lahan sawit dengan pH 4.5?', a: 'Untuk sawit dengan pH 4.5 dan target pH 5.5, dosis aglime umumnya 2–4 ton/ha tergantung CEC tanah dan CCE produk. Tim teknis kami dapat membantu kalkulasi berdasarkan data analisis tanah Anda.' },
      { q: 'Apakah lebih baik menggunakan batu kapur atau kapur padam untuk pertanian?', a: 'Batu kapur cocok untuk aplikasi regular dan perawatan pH jangka panjang (efek bertahap 6–12 bulan). Kapur padam (Ca(OH)2) lebih cepat bereaksi (2–4 minggu) dan cocok untuk koreksi pH kritis sebelum tanam.' },
      { q: 'Apakah ada sertifikat bebas kontaminan untuk kapur pertanian PT WEU?', a: 'Ya. Analisis heavy metals (Cd, Pb, As, Hg) tersedia atas permintaan dan menunjukkan kadar jauh di bawah batas aman pertanian organik internasional.' },
      { q: 'Tersediakah pengiriman ke remote area di Sulawesi?', a: 'Untuk lokasi pesisir, distribusi via kapal kecil dari Bitung atau Kotabunan tersedia. Untuk darat, kami bermitra dengan armada ekspedisi lokal Sulawesi.' },
      { q: 'Apakah aglime PT WEU cocok untuk tanaman padi lahan gambut?', a: 'Untuk lahan gambut (pH umumnya 3.5–4.5), aplikasi kombinasi dolomit dan aglime direkomendasikan. PT WEU dapat membantu merancang program pengapuran bertahap yang efektif untuk lahan gambut.' },
    ],
    schema_service_id: 'Penyediaan Kapur Pertanian untuk Netralisasi Tanah dan Peningkatan Produktivitas',
  },
  {
    id: 'konstruksi', slug_id: 'konstruksi', slug_en: 'construction',
    name_id: 'Industri Konstruksi & Infrastruktur', name_en: 'Construction & Infrastructure',
    hero_bg: '/mining-bg.webp', hero_tag: 'Agregat & Filler Konstruksi Berkualitas SNI',
    overview_id: 'Program pembangunan infrastruktur nasional Indonesia membutuhkan pasokan agregat dan material konstruksi skala besar. Batu kapur adalah material serbaguna dalam industri konstruksi — dari base jalan, agregat beton, stabilisasi tanah hingga filler aspal. PT WEU melayani proyek infrastruktur di Sulawesi, Maluku, dan Papua dengan pasokan langsung dari tambang Ratatotok melalui jalur laut.',
    overview_en: 'Indonesia\'s national infrastructure development program requires large-scale aggregate and construction material supply. Limestone is a versatile material in the construction industry — from road base, concrete aggregate, soil stabilization to asphalt filler. PT WEU serves infrastructure projects in Sulawesi, Maluku, and Papua with direct supply from Ratatotok mine via sea routes.',
    limestone_role_id: 'Batu kapur berperan sebagai agregat struktural dan fungsional dalam berbagai aplikasi konstruksi. Sebagai sub-base jalan, limestone memberikan bearing capacity dan drainage yang baik. Dalam beton, limestone agregat meningkatkan workability dan mengurangi water cement ratio. CaCO3 halus (filler aspal) meningkatkan kepadatan campuran dan durabilitas perkerasan jalan.',
    limestone_role_en: 'Limestone serves as structural and functional aggregate in various construction applications. As road sub-base, limestone provides good bearing capacity and drainage. In concrete, limestone aggregate improves workability and reduces water-cement ratio. Fine CaCO3 (asphalt filler) increases mix density and road pavement durability.',
    products_used: [
      { slug_id: 'batu-kapur', slug_en: 'limestone', name_id: 'Batu Kapur Agregat', name_en: 'Limestone Aggregate', role_id: 'Base course jalan, agregat beton, urugan, dan sub-base infrastruktur' },
      { slug_id: 'kalsium-karbonat', slug_en: 'caco3', name_id: 'CaCO3 Halus (Filler)', name_en: 'Fine CaCO3 (Filler)', role_id: 'Filler aspal hotmix, campuran beton, dan mineral filler jalan tol' },
      { slug_id: 'kapur-padam', slug_en: 'hydrated-lime', name_id: 'Kapur Padam', name_en: 'Hydrated Lime', role_id: 'Stabilisasi tanah subgrade, peningkatan CBR tanah lunak untuk fondasi jalan' },
    ],
    tech_requirements: [
      { param: 'Agregat — Los Angeles Abrasion', value: '< 40%' }, { param: 'Agregat — Soundness', value: '< 10%' },
      { param: 'Ukuran Agregat Base Course', value: '5–40 mm (SNI 1732)' }, { param: 'Filler CaCO3 Aspal', value: '< 0.075 mm (passing No.200)' },
      { param: 'CBR Stabilisasi (Kapur)', value: '> 10% (7-hari curing)' }, { param: 'Kadar Air Agregat', value: '< 5%' },
    ],
    process_steps_id: [
      { title: 'Survey & Mix Design', desc: 'Analisis gradasi agregat dan desain campuran (AC-WC, AC-BC) sesuai spesifikasi Bina Marga.' },
      { title: 'Quarrying & Crushing', desc: 'Batu kapur ditambang dan dihancurkan ke gradasi 0–5, 5–10, 10–20, 20–40mm sesuai spesifikasi.' },
      { title: 'Quality Testing', desc: 'Uji abrasi, berat jenis, penyerapan air, dan gradasi sesuai SNI di lab terakreditasi.' },
      { title: 'Pengiriman ke Site', desc: 'Pengiriman via dump truck (darat) atau tongkang (pesisir) langsung ke stockpile proyek.' },
      { title: 'Aplikasi di Lapangan', desc: 'Hamparan, pemadatan, dan pengujian CBR/Marshall sesuai spesifikasi teknis proyek.' },
    ],
    pain_points_id: [
      'Keterlambatan pasokan agregat menghentikan progress pekerjaan dan menyebabkan denda proyek',
      'Agregat tidak memenuhi gradasi SNI menyebabkan mix design aspal tidak optimal dan reject QC',
      'Biaya pengiriman agregat dari Jawa ke Papua/Maluku sangat tinggi — 30–50% dari harga material',
      'Variasi kadar air >5% antara batch menyebabkan penyesuaian mix design berulang dan pemborosan',
    ],
    weu_value_id: 'PT WEU menyediakan agregat batu kapur sesuai gradasi SNI dari 5–40mm dengan kontrol kualitas laboratorium terakreditasi. Lokasi Sulawesi Utara dan akses Pelabuhan Bitung/Kotabunan memungkinkan pengiriman cepat ke proyek infrastruktur di Indonesia Timur dengan biaya logistik yang kompetitif.',
    weu_value_en: 'PT WEU provides limestone aggregate per SNI gradation from 5–40mm with accredited laboratory quality control. North Sulawesi location and Bitung/Kotabunan port access enable rapid delivery to infrastructure projects in Eastern Indonesia at competitive logistics costs.',
    case_scenario_id: 'Proyek jalan tol Manado–Bitung membutuhkan 50.000 MT aggregat sub-base dan 5.000 MT CaCO3 filler aspal. PT WEU memenuhi kebutuhan ini dalam 4 bulan dengan 7 tongkang (7.500 MT/tongkang) untuk sub-base dan pengiriman truk rutin untuk filler. Penghematan logistik vs supplier luar estimasi Rp 8 miliar vs supply dari Jawa.',
    faq_id: [
      { q: 'Apakah agregat PT WEU memenuhi spesifikasi Bina Marga untuk jalan nasional?', a: 'Ya. Agregat kami telah diuji di laboratorium terakreditasi sesuai SNI dan spesifikasi Bina Marga meliputi abrasi Los Angeles, berat jenis, penyerapan, dan gradasi. COA tersedia per batch pengiriman.' },
      { q: 'Bisakah PT WEU menyediakan CaCO3 filler untuk campuran aspal hotmix (AC-WC)?', a: 'Ya. CaCO3 dengan kehalusan 200–325 mesh sesuai persyaratan mineral filler dalam AC-WC dan SMA. Kadar passing saringan No.200 >85% memenuhi standar AASHTO M17.' },
      { q: 'Apakah tersedia paket supply yang mencakup agregat dan filler sekaligus?', a: 'Ya. Kami menawarkan paket supply terintegrasi — agregat kasar, agregat halus, dan filler CaCO3 dalam satu kontrak pengiriman untuk kemudahan pengelolaan proyek.' },
      { q: 'Bagaimana dengan ketepatan jadwal pengiriman untuk proyek dengan deadline ketat?', a: 'Kami menyediakan jadwal pengiriman mingguan yang terikat kontrak. Dengan kapasitas 250 TPH dan stok penyangga di stockpile, pengiriman digaransi sesuai schedule tanpa risiko stockout.' },
      { q: 'Apakah tersedia jasa supervisi QC untuk aplikasi stabilisasi tanah dengan kapur padam?', a: 'Tim teknis PT WEU dapat memberikan konsultasi teknis dan supervisi aplikasi kapur untuk stabilisasi subgrade, termasuk referensi campuran optimal dan pengujian CBR sebelum dan sesudah stabilisasi.' },
    ],
    schema_service_id: 'Penyediaan Agregat dan Material Konstruksi dari Batu Kapur',
  },
];

export const industriesFullBySlug = Object.fromEntries(industriesFull.map((i) => [i.slug_id, i]));
export const industriesFullBySlugEN = Object.fromEntries(industriesFull.map((i) => [i.slug_en, i]));
export const industrySlugsID = industriesFull.map((i) => i.slug_id);
export const industrySlugsEN = industriesFull.map((i) => i.slug_en);
