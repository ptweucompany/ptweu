// src/data/products.ts
// Modular product data — import individual products only

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductApplication {
  industry: string;
  use: string;
  icon?: string;
}

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductData {
  id: string;
  slug_id: string;
  slug_en: string;
  name_id: string;
  name_en: string;
  image: string;
  hero_subtitle_id: string;
  hero_subtitle_en: string;
  description_id: string;
  description_en: string;
  specs: ProductSpec[];
  size_variants: string[];
  key_features_id: string[];
  key_features_en: string[];
  applications: ProductApplication[];
  certs: string[];
  faq_id: ProductFAQ[];
  moq: string;
  packaging: string[];
  lead_time: string;
  internal_links: { label: string; href: string }[];
}

// ─── LIMESTONE ───────────────────────────────────────────────────────────────
export const limestone: ProductData = {
  id: 'limestone',
  slug_id: 'batu-kapur',
  slug_en: 'limestone',
  name_id: 'Batu Kapur (Limestone)',
  name_en: 'Limestone',
  image: '/products/limestone.png',
  hero_subtitle_id: 'Material Dasar Industri — Kualitas Tinggi dari Ratatotok',
  hero_subtitle_en: 'Industrial Base Material — High Quality from Ratatotok',
  description_id:
    'Batu kapur kami ditambang dari formasi geologi Ratatotok yang unik di Minahasa Tenggara, Sulawesi Utara. Dengan kadar CaO di atas 55% dan kandungan pengotor yang sangat rendah (SiO2 < 0.35%, MgO < 0.80%), produk ini menjadi pilihan utama industri baja, semen, dan kimia nasional.',
  description_en:
    'Our limestone is mined from the unique Ratatotok geological formation in Southeast Minahasa, North Sulawesi. With CaO above 55% and very low impurity (SiO2 < 0.35%, MgO < 0.80%), it is the primary choice for national steel, cement, and chemical industries.',
  specs: [
    { label: 'Kalsium Oksida (CaO)', value: '55.20%' },
    { label: 'Magnesium Oksida (MgO)', value: '0.80%' },
    { label: 'Silika (SiO2)', value: '0.35%' },
    { label: 'Iron Oxide (Fe2O3)', value: '0.12%' },
    { label: 'Alumina (Al2O3)', value: '0.15%' },
    { label: 'Loss on Ignition (LOI)', value: '43.30%' },
    { label: 'Kadar Air / Moisture', value: '< 3%' },
  ],
  size_variants: ['0–5 mm', '5–10 mm', '10–30 mm', '30–80 mm', 'Custom sizing tersedia'],
  key_features_id: [
    'Kadar CaO di atas rata-rata industri (>55%)',
    'Kandungan silika dan magnesium sangat rendah',
    'Reaktivitas kimia tinggi untuk proses industri',
    'Ukuran butir dapat disesuaikan sesuai kebutuhan',
    'Bersumber dari cadangan geologi Ratatotok yang proven',
  ],
  key_features_en: [
    'CaO content above industry average (>55%)',
    'Very low silica and magnesium content',
    'High chemical reactivity for industrial processes',
    'Custom grain size on request',
    'Sourced from proven Ratatotok geological reserves',
  ],
  applications: [
    { industry: 'Industri Baja & Smelter', use: 'Flux agent untuk memisahkan pengotor SiO2 dan Al2O3 dari logam cair dalam blast furnace dan EAF', icon: 'Factory' },
    { industry: 'Industri Semen', use: 'Bahan baku utama (60–70%) untuk produksi klinker semen Portland berkualitas tinggi', icon: 'Building' },
    { industry: 'Konstruksi & Infrastruktur', use: 'Agregat kasar untuk beton, fondasi jalan, dan stabilisasi tanah dasar', icon: 'Construction' },
    { industry: 'Pengolahan Air Industri', use: 'Penetral pH air limbah dan penghilang logam berat dalam sistem IPAL', icon: 'Droplets' },
    { industry: 'Pertanian', use: 'Penetral keasaman tanah (soil liming) dan sumber kalsium untuk pertumbuhan tanaman optimal', icon: 'Sprout' },
  ],
  certs: ['SNI Compliant', 'Certificate of Analysis (COA) per pesanan', 'Sucofindo / Intertek atas permintaan'],
  faq_id: [
    { q: 'Berapa kapasitas produksi bulanan batu kapur?', a: 'Kapasitas produksi kami mencapai 150.000 metrik ton per bulan dengan crusher plant 250 TPH yang beroperasi 24/7.' },
    { q: 'Apakah tersedia pengiriman via laut?', a: 'Ya. Kami memiliki dermaga khusus (private jetty) dengan draft 12 meter yang mampu menampung tongkang 300 kaki. Distribusi utama melalui Pelabuhan Bitung.' },
    { q: 'Bisakah memesan ukuran butir custom?', a: 'Tentu. Crushing plant kami dapat dikonfigurasi untuk menghasilkan ukuran spesifik mulai dari 0–5mm hingga 30–80mm sesuai spesifikasi teknis Anda.' },
    { q: 'Berapa MOQ untuk pengiriman via tongkang?', a: 'MOQ untuk pengiriman laut adalah 7.500–10.000 MT per tongkang. Untuk pengambilan darat, dapat disesuaikan per truk.' },
    { q: 'Dokumen apa saja yang disediakan per pesanan?', a: 'Setiap pesanan dilengkapi dengan Certificate of Analysis (COA), Packing List, dan Commercial Invoice. Untuk ekspor tersedia COO dan MSDS.' },
  ],
  moq: '7.500 – 10.000 MT (via laut/barge) | Negotiable (via darat)',
  packaging: ['Bulk / Curah (loose)', 'Jumbo Bag 1.000 kg', 'Bag 50 kg'],
  lead_time: '3–7 hari (Sulawesi) | 7–21 hari (luar pulau)',
  internal_links: [
    { label: 'Industri Baja & Smelter', href: '/industri/baja-smelter' },
    { label: 'Industri Semen', href: '/industri/semen' },
    { label: 'Industri Konstruksi', href: '/industri/konstruksi' },
    { label: 'Distribusi via Manado', href: '/lokasi/manado' },
  ],
};

// ─── CACO3 ───────────────────────────────────────────────────────────────────
export const caco3: ProductData = {
  id: 'caco3',
  slug_id: 'kalsium-karbonat',
  slug_en: 'caco3',
  name_id: 'CaCO3 (Kalsium Karbonat)',
  name_en: 'CaCO3 (Calcium Carbonate)',
  image: '/products/caco3.png',
  hero_subtitle_id: 'Tepung Kalsium Presisi untuk Industri Kreatif',
  hero_subtitle_en: 'Precision Calcium Powder for Creative Industry',
  description_id:
    'Kalsium karbonat kami diproses menggunakan teknologi grinding mill modern untuk menghasilkan kehalusan butir yang sangat konsisten. Dengan tingkat kecerahan (brightness) ≥ 94% dan kemurnian 98.8%, produk ini menjadi filler ideal untuk industri plastik, cat, karet, dan kertas.',
  description_en:
    'Our calcium carbonate is processed using modern grinding mill technology for highly consistent particle fineness. With brightness ≥ 94% and purity 98.8%, it is the ideal filler for plastics, paint, rubber, and paper industries.',
  specs: [
    { label: 'Kandungan CaCO3', value: '98.8%' },
    { label: 'Brightness / Kecerahan', value: '≥ 95%' },
    { label: 'Kadar Air (Moisture)', value: '0.15%' },
    { label: 'Residu 325 Mesh', value: 'min 0.05%' },
    { label: 'pH Value', value: '8.5 – 9.5' },
    { label: 'Specific Gravity', value: '2.7 g/cm³' },
  ],
  size_variants: ['400 mesh', '800 mesh', '1.250 mesh', '2.500 mesh'],
  key_features_id: [
    'Distribusi ukuran partikel sangat sempit dan konsisten',
    'Tingkat penyerapan minyak rendah — efisiensi formulasi tinggi',
    'Stabilitas kimia di berbagai rentang suhu produksi',
    'Bebas kontaminasi logam berat',
    'Tersedia berbagai mesh sesuai aplikasi industri',
  ],
  key_features_en: [
    'Very narrow, consistent particle size distribution',
    'Low oil absorption rate — high formulation efficiency',
    'Chemical stability across production temperature ranges',
    'Free from heavy metal contamination',
    'Multiple mesh sizes available per application',
  ],
  applications: [
    { industry: 'Industri Plastik', use: 'Meningkatkan rigiditas produk dan mengurangi biaya bahan baku polimer (PP, PVC)', icon: 'Layers' },
    { industry: 'Cat & Coating', use: 'Memberikan opasitas dan daya tutup optimal pada lapisan cat dan varnish', icon: 'Palette' },
    { industry: 'Industri Karet', use: 'Memperbaiki elastisitas, ketahanan aus, dan kekuatan tarik pada ban dan alas kaki', icon: 'Zap' },
    { industry: 'Industri Kertas', use: 'Mencerahkan warna kertas, meningkatkan daya serap tinta dan smoothness', icon: 'FileText' },
    { industry: 'Industri Sealant & Adhesive', use: 'Pengatur viskositas dan rheologi pada produk sealant otomotif dan konstruksi', icon: 'Wrench' },
  ],
  certs: ['Certificate of Analysis (COA) per batch', 'Material Safety Data Sheet (MSDS)', 'Analisis Lab Intertek'],
  faq_id: [
    { q: 'Mesh berapa saja yang tersedia?', a: 'Kami memproduksi ukuran mulai dari 400 mesh hingga 2.500 mesh. Konsultasikan kebutuhan mesh untuk aplikasi spesifik Anda dengan tim teknis kami.' },
    { q: 'Berapa tingkat brightness produk ini?', a: 'Produk grade premium kami memiliki tingkat kecerahan di atas 94% (R457), menjadikannya pilihan terbaik untuk aplikasi yang membutuhkan estetika warna tinggi.' },
    { q: 'Apakah CaCO3 ini bisa untuk food/pharma grade?', a: 'Saat ini kami fokus pada grade industri dan teknis. Kemurnian kami sangat tinggi namun belum memiliki sertifikasi food/pharma grade secara resmi.' },
    { q: 'Berapa minimal order untuk CaCO3?', a: 'Minimal order adalah 10 MT, tersedia dalam kemasan karung 25 kg, 50 kg, atau jumbo bag 1.000 kg.' },
  ],
  moq: '10 MT minimum',
  packaging: ['Jumbo Bag 1.000 kg', 'Bag 50 kg', 'Bag 25 kg'],
  lead_time: '7–14 hari setelah konfirmasi order',
  internal_links: [
    { label: 'Industri Plastik & Karet', href: '/industri/plastik-karet' },
    { label: 'Industri Cat & Coating', href: '/industri/cat-coating' },
    { label: 'Produk PCC (Grade Lebih Tinggi)', href: '/produk/pcc' },
  ],
};

// ─── BURN LIME ───────────────────────────────────────────────────────────────
export const burnLime: ProductData = {
  id: 'burn-lime',
  slug_id: 'kapur-bakar',
  slug_en: 'burn-lime',
  name_id: 'Kapur Bakar (Quicklime / CaO)',
  name_en: 'Burn Lime (Quicklime / CaO)',
  image: '/products/burn-lime.png',
  hero_subtitle_id: 'Kalsium Oksida Aktif Tinggi — Reaktivitas Maksimal',
  hero_subtitle_en: 'High-Active Calcium Oxide — Maximum Reactivity',
  description_id:
    'Kapur bakar (Quicklime) kami diproduksi melalui proses dekomposisi termal terkontrol dalam shaft kiln vertikal pada suhu 1.000–1.200°C. Hasilnya adalah CaO dengan porositas tinggi, available CaO mencapai 92.1%, dan reaktivitas kimia yang sangat responsif.',
  description_en:
    'Our quicklime is produced via controlled thermal decomposition in vertical shaft kilns at 1,000–1,200°C. The result is CaO with high porosity, available CaO reaching 92.1%, and highly responsive chemical reactivity.',
  specs: [
    { label: 'Available CaO (Aktif)', value: '92.1%' },
    { label: 'Magnesium Oksida (MgO)', value: '0.55%' },
    { label: 'Silika (SiO2)', value: '0.22%' },
    { label: 'Loss on Ignition (LOI)', value: '1.20%' },
    { label: 'Sulfur (S)', value: '0.04%' },
    { label: 'Reaktivitas T60', value: '< 2 menit' },
    { label: 'Ukuran Lumpy', value: '10–50 mm' },
    { label: 'Suhu Kalsinasi', value: '1.000 – 1.200°C' },
  ],
  size_variants: ['Lumpy 10–50 mm', 'Serbuk/Powder (on request)'],
  key_features_id: [
    'Available CaO aktif di atas 90% — melampaui spesifikasi industri',
    'Slaking rate sangat cepat (T60 < 2 menit)',
    'Kandungan CO2 sisa minimal pasca kalsinasi',
    'Tersedia dalam bentuk bongkahan (lumpy) atau serbuk',
    'Diproduksi dari batu kapur Ratatotok dengan CaO awal >55%',
  ],
  key_features_en: [
    'Active CaO above 90% — exceeding industry specifications',
    'Very fast slaking rate (T60 < 2 minutes)',
    'Minimal residual CO2 post-calcination',
    'Available in lumpy or powder form',
    'Produced from Ratatotok limestone with initial CaO >55%',
  ],
  applications: [
    { industry: 'Industri Smelter & Nikel', use: 'Penghilang pengotor (SiO2, Al2O3, S) dalam proses pemurnian nikel, bauksit, dan besi', icon: 'Anvil' },
    { industry: 'Industri Gula', use: 'Purifikasi nira tebu dalam proses klarifikasi (defekasi) untuk menghasilkan gula bersih', icon: 'Filter' },
    { industry: 'Pengelolaan Tailing Tambang', use: 'Stabilisasi pH tailing asam (AMD — Acid Mine Drainage) di area pascatambang', icon: 'Mountain' },
    { industry: 'Industri Kimia', use: 'Bahan baku kalsium karbida, kalsium hipoklorit, dan senyawa organik kalsium lainnya', icon: 'FlaskConical' },
    { industry: 'Pengolahan Air Limbah', use: 'Presipitasi logam berat dan netralisasi limbah asam industri secara efisien', icon: 'Droplets' },
  ],
  certs: ['Chemical Purity Certificate per batch', 'Slaking Rate Analysis', 'MSDS tersedia'],
  faq_id: [
    { q: 'Bagaimana cara penyimpanan terbaik untuk kapur bakar?', a: 'Harus disimpan di tempat kering, tertutup rapat, dan terhindar dari kelembaban. CaO bersifat sangat higroskopis — bereaksi langsung dengan uap air di udara.' },
    { q: 'Berapa reaktivitas termal kapur bakar ini?', a: 'Rata-rata kenaikan suhu mencapai 60°C dalam waktu < 2 menit (T60) saat bereaksi dengan air, menunjukkan reaktivitas yang sangat tinggi.' },
    { q: 'Apakah tersedia dalam bentuk serbuk?', a: 'Produk standar tersedia dalam bentuk lumpy (10–50mm). Bentuk serbuk tersedia atas permintaan khusus dengan konsultasi teknis terlebih dahulu.' },
    { q: 'Apakah ada persyaratan khusus untuk pengiriman kapur bakar?', a: 'Ya. Pengiriman harus menggunakan kemasan kedap udara atau truk tertutup. Hindari kontaminasi air selama proses bongkar muat.' },
  ],
  moq: '20 MT minimum',
  packaging: ['Bulk / Curah (truk tertutup)', 'Jumbo Bag 1.000 kg (sealed)', 'Big Bag kedap air'],
  lead_time: '7–14 hari setelah konfirmasi order',
  internal_links: [
    { label: 'Industri Smelter & Nikel', href: '/industri/smelter-nikel' },
    { label: 'Pengolahan Limbah Industri', href: '/industri/pengolahan-air' },
    { label: 'Produk Kapur Padam (Ca(OH)2)', href: '/produk/kapur-padam' },
  ],
};

// ─── HYDRATED LIME ───────────────────────────────────────────────────────────
export const hydratedLime: ProductData = {
  id: 'hydrated-lime',
  slug_id: 'kapur-padam',
  slug_en: 'hydrated-lime',
  name_id: 'Kapur Padam (Hydrated Lime / Ca(OH)2)',
  name_en: 'Hydrated Lime (Ca(OH)2)',
  image: '/products/hydrated-lime.png',
  hero_subtitle_id: 'Kalsium Hidroksida Halus — Solusi Murni untuk Lingkungan',
  hero_subtitle_en: 'Fine Calcium Hydroxide — Pure Environmental Solution',
  description_id:
    'Kapur padam kami adalah hasil hidrasi terkontrol dari kapur tohor (CaO) murni. Dengan tingkat kehalusan yang lolos mesh 325 di atas 95%, produk ini sangat mudah larut dan bereaksi — pilihan sempurna untuk FGD di pembangkit listrik, pengolahan air, dan stabilisasi jalan.',
  description_en:
    'Our hydrated lime is the result of controlled hydration of pure quicklime (CaO). With fineness passing 325 mesh above 95%, it is highly soluble and reactive — the perfect choice for FGD in power plants, water treatment, and road stabilization.',
  specs: [
    { label: 'Kandungan Ca(OH)2', value: '94.5%' },
    { label: 'Kalsium Oksida (CaO)', value: '71.5%' },
    { label: 'Magnesium (MgO)', value: '0.40%' },
    { label: 'Insoluble Matter', value: '0.45%' },
    { label: 'Apparent Density', value: '0.45 – 0.55 g/ml' },
    { label: 'Moisture Content', value: '< 1.0%' },
    { label: 'Kehalusan (325 Mesh Passing)', value: '> 95%' },
  ],
  size_variants: ['Serbuk halus 325 mesh (standar)', 'Ukuran lain atas permintaan'],
  key_features_id: [
    'Kehalusan partikel lolos mesh 325 — di atas 95%',
    'Kadar Ca(OH)2 sangat stabil di atas 94%',
    'Reaktivitas tinggi dalam penetralan asam kuat',
    'Penanganan lebih aman dibandingkan kapur bakar (CaO)',
    'Cocok untuk sistem injeksi kering maupun basah',
  ],
  key_features_en: [
    'Particle fineness passing 325 mesh above 95%',
    'Very stable Ca(OH)2 content above 94%',
    'High reactivity in neutralizing strong acids',
    'Safer handling compared to quicklime (CaO)',
    'Suitable for both dry injection and wet slurry systems',
  ],
  applications: [
    { industry: 'Pembangkit Listrik (PLTU) — FGD', use: 'Injeksi ke sistem FGD (Flue Gas Desulfurization) untuk menyerap SO2 dan HCl dari gas buang batu bara', icon: 'Wind' },
    { industry: 'Pengolahan Air Bersih & Limbah', use: 'Menghilangkan logam berat, menyesuaikan kesadahan air, dan mengatur pH sistem IPAL', icon: 'Droplet' },
    { industry: 'Konstruksi Jalan', use: 'Stabilisasi tanah subgrade dan meningkatkan ketahanan serta kekuatan daya dukung tanah dasar jalan', icon: 'Truck' },
    { industry: 'Pengolahan Limbah B3', use: 'Presipitasi fosfat, flokulasi partikel, dan solidifikasi limbah berbahaya', icon: 'Recycle' },
    { industry: 'Industri Pertanian', use: 'Penetral pH tanah asam dengan reaksi lebih cepat dibanding batu kapur mentah', icon: 'Sprout' },
  ],
  certs: ['Kehalusan 325 Mesh Verified', 'Purity Analysis Certificate', 'MSDS tersedia', 'Eco-Industrial Certification'],
  faq_id: [
    { q: 'Apakah kapur padam ini aman untuk digunakan di sistem FGD tipe dry injection?', a: 'Ya. Kehalusan kami di atas 95% passing 325 mesh sangat sesuai untuk sistem injeksi kering (dry sorbent injection) di PLTU.' },
    { q: 'Berapa lama masa simpan kapur padam?', a: 'Dalam kemasan yang baik, kering, dan tertutup rapat, kapur padam dapat bertahan hingga 6 bulan tanpa penurunan kualitas signifikan.' },
    { q: 'Apakah ada bahaya khusus dalam penanganan produk ini?', a: 'Produk ini bersifat kaustik (pH tinggi). Disarankan menggunakan masker debu, sarung tangan, dan kacamata pelindung saat penanganan. Lengkap dalam MSDS.' },
    { q: 'Berapa minimal order kapur padam?', a: 'Minimal order adalah 10 MT, tersedia dalam 25kg, 50kg, atau jumbo bag 1.000 kg.' },
  ],
  moq: '10 MT minimum',
  packaging: ['Jumbo Bag 1.000 kg', 'Bag 50 kg', 'Bag 25 kg'],
  lead_time: '7–14 hari setelah konfirmasi order',
  internal_links: [
    { label: 'Industri Pembangkit Listrik (PLTU)', href: '/industri/pembangkit-listrik' },
    { label: 'Pengolahan Air & Limbah', href: '/industri/pengolahan-air' },
    { label: 'Produk Kapur Bakar (CaO)', href: '/produk/kapur-bakar' },
  ],
};

// ─── PCC ─────────────────────────────────────────────────────────────────────
export const pcc: ProductData = {
  id: 'pcc',
  slug_id: 'pcc',
  slug_en: 'pcc',
  name_id: 'PCC (Precipitated Calcium Carbonate)',
  name_en: 'PCC (Precipitated Calcium Carbonate)',
  image: '/products/pcc.png',
  hero_subtitle_id: 'Kemurnian Molekuler — Standar Industri Khusus',
  hero_subtitle_en: 'Molecular Purity — Specialty Industry Standard',
  description_id:
    'PCC kami diproduksi melalui proses kimia presipitasi CO2 yang memungkinkan kontrol penuh atas bentuk kristal dan ukuran partikel. Dengan kemurnian 99.85% CaCO3, brightness 98.5%, dan ukuran butir 1.2–2.5 μm, produk ini melampaui kapabilitas kalsium karbonat alam (GCC).',
  description_en:
    'Our PCC is produced via CO2 chemical precipitation, enabling full control over crystal form and particle size. With 99.85% CaCO3 purity, 98.5% brightness, and grain size 1.2–2.5 μm, this product surpasses ground calcium carbonate (GCC) capabilities.',
  specs: [
    { label: 'Kandungan CaCO3', value: '99.85%' },
    { label: 'Brightness (R457)', value: '98.5%' },
    { label: 'Specific Surface Area', value: '12 – 15 m²/g' },
    { label: 'Ukuran Butir Rata-rata', value: '1.2 – 2.5 μm' },
    { label: 'Heavy Metals (Pb)', value: '< 1 ppm' },
    { label: 'Kelarutan dalam Asam', value: 'Sempurna' },
  ],
  size_variants: ['Scalenohedral (standard)', 'Rhombohedral (on request)', 'Prismatic (on request)'],
  key_features_id: [
    'Kemurnian kimia luar biasa — >99.9% CaCO3',
    'Bentuk kristal dapat dikustomisasi (Aragonit / Kalsit)',
    'Ukuran partikel dalam skala mikron hingga nano',
    'Nilai absorpsi minyak yang dapat dikontrol sesuai formulasi',
    'Logam berat (Pb) < 1 ppm — mendekati standar farmasi',
  ],
  key_features_en: [
    'Outstanding chemical purity — >99.9% CaCO3',
    'Customizable crystal form (Aragonite / Calcite)',
    'Particle size in micron to nano scale',
    'Controllable oil absorption value per formulation',
    'Heavy metals (Pb) < 1 ppm — near pharmaceutical standard',
  ],
  applications: [
    { industry: 'Farmasi & Suplemen', use: 'Suplemen kalsium dan bahan pengikat tablet — purity mendekati standar farmasi internasional', icon: 'Stethoscope' },
    { industry: 'Kosmetik Premium', use: 'Bahan dasar bedak wajah, foundation, dan produk perawatan pribadi premium dengan opacity tinggi', icon: 'Sparkles' },
    { industry: 'Kertas Foto & Premium', use: 'Lapisan kertas (coating) untuk hasil cetak resolusi tinggi, warna tajam, dan permukaan halus', icon: 'Printer' },
    { industry: 'Sealant & Adhesive Otomotif', use: 'Pengatur rheologi dan viskositas pada perekat dan sealant untuk industri otomotif', icon: 'Zap' },
    { industry: 'Plastik HIPS & Nylon', use: 'Filler nano untuk meningkatkan kekuatan mekanik dan kejernihan produk plastik teknik', icon: 'Layers' },
  ],
  certs: ['High Purity Lab Test', 'Pharmaceutical Analysis', 'MSDS tersedia', 'Food Grade — dalam proses sertifikasi'],
  faq_id: [
    { q: 'Apa perbedaan utama PCC dengan CaCO3 biasa (GCC)?', a: 'PCC dibuat melalui reaksi kimia terkontrol sehingga ukuran partikelnya jauh lebih kecil, lebih putih (brightness >98%), bentuk lebih seragam, dan kemurniannya jauh lebih tinggi dibanding hasil gilingan alam (GCC).' },
    { q: 'Bisakah bentuk kristal PCC dikustomisasi?', a: 'Ya. Kami dapat mengatur proses presipitasi untuk menghasilkan bentuk rhombohedral, scalenohedral, atau prismatic sesuai kebutuhan aplikasi Anda.' },
    { q: 'Apakah PCC tersedia dalam grade food atau pharma?', a: 'Fasilitas kami dirancang berstandar tinggi dan kemurnian kami mendekati standar farmasi. Proses finalisasi sertifikasi halal dan food grade sedang berjalan.' },
    { q: 'Berapa ukuran partikel minimum yang tersedia?', a: 'Ukuran butir rata-rata adalah 1.2–2.5 μm (mikron). Untuk aplikasi nano yang lebih kecil, konsultasikan kebutuhan spesifik dengan tim teknis kami.' },
  ],
  moq: '5 MT minimum',
  packaging: ['Jumbo Bag 1.000 kg', 'Bag 25 kg', 'Bag 50 kg'],
  lead_time: '14–21 hari setelah konfirmasi order',
  internal_links: [
    { label: 'Industri Farmasi & Kosmetik', href: '/industri/farmasi-kosmetik' },
    { label: 'Industri Kertas Premium', href: '/industri/kertas' },
    { label: 'Produk CaCO3 (Grade Industri)', href: '/produk/kalsium-karbonat' },
  ],
};

// ─── AGREGAT ──────────────────────────────────────────────────────────────────
export const agregat: ProductData = {
  id: 'agregat',
  slug_id: 'agregat',
  slug_en: 'aggregate',
  name_id: 'Agregat Beton SNI',
  name_en: 'Construction Aggregate',
  image: '/products/agregat-beton.png',
  hero_subtitle_id: 'Kekuatan Struktural Maksimal — Standar Infrastruktur Nasional',
  hero_subtitle_en: 'Maximum Structural Strength — National Infrastructure Standard',
  description_id:
    'Agregat beton kami diproses dari batuan andesit/basalt pilihan melalui sistem crusher tiga tahap untuk menghasilkan bentuk butiran kubikal yang ideal bagi campuran beton. Produk ini memenuhi spesifikasi SNI 1750 untuk aplikasi infrastruktur jalan raya, jembatan, dan gedung bertingkat.',
  description_en:
    'Our concrete aggregate is processed from selected andesite/basalt stone through a three-stage crusher system to produce an ideal cubical grain shape for concrete mixes. This product meets SNI 1750 specifications for highway infrastructure, bridges, and high-rise building applications.',
  specs: [
    { label: 'Berat Jenis (Specific Gravity)', value: '2.65 g/cm³' },
    { label: 'Penyerapan Air (Absorption)', value: '1.2%' },
    { label: 'Kadar Lumpur (Sludge)', value: '0.8%' },
    { label: 'Abrasi (Los Angeles Test)', value: '18% – 22%' },
    { label: 'Impact Value', value: '12%' },
    { label: 'Bentuk Butiran', value: 'Kubikal (Low Elongation Index)' },
  ],
  size_variants: ['1–2 cm (Split)', '2–3 cm (Split)', 'Base Course A & B', 'Screening 0–5 mm'],
  key_features_id: [
    'Bentuk butiran seragam (low elongation) untuk ikatan beton kuat',
    'Permukaan bersih dari material organik dan tanah',
    'Ketahanan abrasi tinggi sesuai standar Bina Marga',
    'Tersedia berbagai ukuran fraksi presisi',
    'Stabilitas gradasi yang konsisten di setiap batch',
  ],
  key_features_en: [
    'Uniform grain shape (low elongation) for strong concrete bonding',
    'Clean surfaces free from organic material and soil',
    'High abrasion resistance meeting Bina Marga standards',
    'Multiple precision fraction sizes available',
    'Consistent gradation stability across every batch',
  ],
  applications: [
    { industry: 'Beton Ready Mix', use: 'Material utama untuk beton struktural K-350 ke atas pada proyek gedung dan infrastruktur', icon: 'Building' },
    { industry: 'Konstruksi Jalan (Lapis Pondasi)', use: 'Stabilisasi jalan raya, area beban berat, dan pelapis pondasi bawah (Base Course)', icon: 'Construction' },
    { industry: 'Precast & Beton Pracetak', use: 'Pembuatan box culvert, u-ditch, tiang pancang, dan pagar panel beton', icon: 'Factory' },
    { industry: 'Pekerjaan Aspal (AC-WC)', use: 'Campuran aspal panas (Hotmix) untuk permukaan jalan dengan lalu lintas padat', icon: 'Truck' },
  ],
  certs: ['Uji Laboratorium SNI 1750', 'Sertifikat Bebas Lumpur', 'Analisis Abrasi Berkala'],
  faq_id: [
    { q: 'Ukuran agregat apa saja yang paling banyak dicari?', a: 'Ukuran 1–2 cm dan 2–3 cm (batu split) paling banyak digunakan untuk cor beton struktural. Kami juga menyediakan base course untuk pengerasan jalan.' },
    { q: 'Apakah agregat ini sudah dicuci?', a: 'Ya, sistem kami dilengkapi dengan unit washing untuk meminimalkan kadar lumpur (di bawah 1%), memastikan kekuatan rekat semen yang optimal.' },
    { q: 'Berapa kapasitas produksi harian untuk agregat?', a: 'Produksi harian kami mencapai 2.000 – 3.000 ton tergantung pada konfigurasi fraksi yang diperlukan.' },
    { q: 'Apakah ada pengujian laboratorium rutin?', a: 'Setiap batch produksi diuji gradasi dan abrasi di laboratorium internal kami dan secara berkala diverifikasi oleh laboratorium independen.' },
  ],
  moq: '100 MT (via darat) | 7.500 MT (via laut)',
  packaging: ['Bulk / Curah (Dump Truck)', 'Barge (Tongkang)'],
  lead_time: '2–5 hari kerja',
  internal_links: [
    { label: 'Aplikasi Konstruksi', href: '/industri/konstruksi' },
    { label: 'Proyek Infrastruktur', href: '/proyek' },
    { label: 'Batu Kapur (Bahan Semen)', href: '/produk/batu-kapur' },
  ],
};

// ─── REGISTRY ────────────────────────────────────────────────────────────────
export const allProducts: ProductData[] = [limestone, caco3, burnLime, hydratedLime, pcc, agregat];

export const productsBySlugID: Record<string, ProductData> = {
  'batu-kapur': limestone,
  'kalsium-karbonat': caco3,
  'kapur-bakar': burnLime,
  'kapur-padam': hydratedLime,
  pcc,
  agregat,
};

export const productsBySlugEN: Record<string, ProductData> = {
  limestone,
  caco3,
  'burn-lime': burnLime,
  'hydrated-lime': hydratedLime,
  pcc,
  aggregate: agregat,
};

export const productSlugsID = Object.keys(productsBySlugID);
export const productSlugsEN = Object.keys(productsBySlugEN);
