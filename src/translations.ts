import { Translation } from './types';

export const translations: { id: Translation; en: Partial<Translation> & Record<string, any> } = {
  // PT Wira Energi Utama - Corporate Data
  id: {
    nav: {
      about: 'Tentang Kami',
      products: 'Produk',
      catalog: 'Katalog',
      blog: 'Blog',
      qa: 'Kualitas',
      governance: 'Governansi',
      contact: 'Hubungi Kami',
    },
    hero: {
      badge: 'Mining, General Trading & Industrial Supplier',
      title: 'PT Wira Energi Utama',
      subtitle: '- Supplier Batu Kapur & CaCO3 Industri\n- Produksi 150.000 MT/bulan • Distribusi via Pelabuhan Bitung, Belang & Kotabunan\n- Crushing Plant 250 TPH',
      cta: 'Hubungi Kami',
    },
    about: {
      title: 'Tentang Kami',
      vision: 'Visi',
      visionText: 'Menjadi perusahaan industri pertambangan kapur/gamping global terkemuka yang tumbuh berkelanjutan.',
      mission: 'Misi',
      missionItems: [
        'Memupuk budaya cepat, produktif, efektif, efisien.',
        'Mengutamakan kesehatan, keselamatan kerja, dan lingkungan dalam segala tindakan.',
        'Memelihara tata kelola perusahaan tambang dengan baik demi meningkatkan kepercayaan masyarakat sekitar terhadap perusahaan.',
        'Menyediakan lingkungan belajar untuk mencapai keunggulan dan meningkatkan kesejahteraan karyawan.',
        'Mengedepankan teknologi yang berwawasan lingkungan.',
        'Melakukan reklamasi penghijauan dengan baik sesuai aturan yang berlaku.',
      ],
    },
    products: {
      title: 'Produk Unggulan Kami',
      subtitle: 'Menyediakan berbagai jenis produk turunan batu kapur berkualitas tinggi.',
      items: [
        { name: 'Batu Kapur (Limestone)', desc: 'Bahan baku utama untuk berbagai industri.' },
        { name: 'CaCO3 (Semua Ukuran)', desc: 'Kalsium Karbonat dengan berbagai spesifikasi ukuran.' },
        { name: 'Kapur Bakar (Burn Lime / CaO)', desc: 'Kapur tohor hasil pembakaran batu kapur.' },
        { name: 'Kapur Padam (Hydrated Lime / Ca(OH)2)', desc: 'Kalsium Hidroksida untuk aplikasi industri dan pengolahan air.' },
        { name: 'PCC (Precipitated Calcium Carbonate)', desc: 'Kalsium Karbonat presipitasi dengan kemurnian tinggi.' },
      ],
    },
    qa: {
      title: 'Jaminan Kualitas',
      text: 'Produk kami telah melalui pengujian ketat di laboratorium terakreditasi untuk memastikan standar kualitas tertinggi.',
      labs: ['Minertech', 'Intertek', 'Sucofindo', 'Dinas Pekerjaan Umum & Tata Ruang'],
    },
    legal: {
      title: 'Legalitas & Formasi Perusahaan',
      subtitle: 'Standar kepatuhan penuh dalam operasional dan perizinan.',
      iup: 'IUP Operasi Produksi: 91201019114410010',
      validity: 'Berlaku sejak April 2024',
      legalities: [
        {
          title: 'Akta Pendirian & Perubahan',
          desc: 'Akta Pendirian No. 1 (9 Sept 2019) oleh Notaris Salmiaty Hadjidjah Mutiara Mokoginta, SH. Akta Perubahan No. 01 (05 Juni 2023) oleh Notaris Moh. Rheza Awaluddin, S.H., M.Kn. Modal Ditempatkan: Rp 3.630.000.000.'
        },
        {
          title: 'SK Kemenkumham',
          desc: 'Pengesahan No. AHU-0046475.AH.01.01.TAHUN 2019 dan Perubahan No. AHU-0031214.AH.01.02.TAHUN 2023.'
        },
        {
          title: 'IUP Operasi Produksi',
          desc: 'Nomor Izin 91201019114410010, KBLI 08102 (Penggalian Batu Kapur/Gamping), Luas 97,05 Ha di Kab. Minahasa Tenggara.'
        },
        {
          title: 'Persetujuan Lingkungan (UKL-UPL)',
          desc: 'SK No. 503/DPMPTSPD/PPKPLH/880/X/2023 (Luas operasi & fasilitas 10,3 Ha).'
        },
        {
          title: 'PKKPR Laut',
          desc: 'Persetujuan Pembangunan Dermaga seluas 2,12 Ha di Laut Maluku (No: 03082310517100005).'
        },
        {
          title: 'Legalitas Administratif',
          desc: 'NPWP 92.853.784.4-821.000 dan Surat Keterangan Domisili di Desa Ratatotok Satu.'
        }
      ]
    },
    location: {
      title: 'Lokasi Strategis',
      subtitle: 'Terletak di jantung sumber daya batu kapur Sulawesi Utara.',
      area: 'Luas Wilayah: 97.05 Hektar',
      coordinates: 'Kecamatan Ratatotok, Minahasa Tenggara',
    },
    infrastructure: {
      title: 'Infrastruktur & Fasilitas',
      subtitle: 'Didukung oleh fasilitas pengolahan dan logistik yang modern.',
      jetty: 'Dermaga Khusus (Jetty) untuk distribusi laut yang efisien.',
      crusher: 'Crushing Plant dengan kapasitas 250 Ton Per Jam (TPH).',
    },
    stats: {
      title: 'Kapasitas Produksi',
      subtitle: 'Target produksi tahunan berdasarkan rencana kerja perusahaan.',
      unit: 'Ton / Tahun',
    },
    fleet: {
      title: 'Armada & Alat Berat',
      subtitle: 'Menggunakan peralatan industri kelas dunia untuk efisiensi maksimal.',
      items: [
        { name: 'Excavator', brand: 'Komatsu' },
        { name: 'Dump Truck', brand: 'Isuzu' },
        { name: 'Wheel Loader', brand: 'Komatsu' },
        { name: 'Crushing Plant', brand: 'Custom 250 TPH' },
      ],
    },
    environment: {
      title: 'Komitmen Lingkungan',
      subtitle: 'Pertambangan yang bertanggung jawab dan berkelanjutan.',
      text: 'Kami berkomitmen melakukan reklamasi penghijauan dan reboisasi pasca tambang sesuai dengan aturan lingkungan yang berlaku.',
    },
    gallery: {
      title: 'Galeri Proyek',
      subtitle: 'Dokumentasi operasional dan fasilitas di lokasi tambang.',
    },
    profile: {
      link: 'Profil Perusahaan',
      download: 'Unduh Profil (PDF)',
    },
    market: {
      title: 'Kehadiran Pasar',
      subtitle: 'Melayani berbagai industri strategis di seluruh Indonesia.',
      industries: [
        { name: 'Smelter, Logam & Pembangkit Listrik', icon: 'Factory' },
        { name: 'Konstruksi & Infrastruktur', icon: 'Building' },
        { name: 'Pertanian & Pupuk', icon: 'Sprout' },
        { name: 'Industri Kimia', icon: 'FlaskConical' },
      ],
    },
    logistics: {
      title: 'Rantai Pasok Efisien',
      subtitle: 'Distribusi tepat waktu melalui jalur darat dan laut.',
      text: 'Dengan dukungan Pelabuhan Bitung dan armada logistik internal, kami menjamin kelancaran pengiriman produk ke lokasi pelanggan dengan efisiensi maksimal.',
    },
    safety: {
      title: 'Keselamatan Kerja (K3)',
      subtitle: 'Komitmen tanpa kompromi terhadap keselamatan karyawan.',
      points: [
        'Target Zero Accident di setiap area operasional.',
        'Pelatihan K3 rutin bagi seluruh staf dan operator.',
        'Standar APD lengkap dan prosedur kerja aman.',
        'Pemantauan kesehatan berkala bagi pekerja tambang.',
      ],
    },
    csr: {
      title: 'Dampak Sosial & CSR',
      subtitle: 'Tumbuh bersama masyarakat lokal Ratatotok.',
      text: 'Kami memprioritaskan penyerapan tenaga kerja lokal dan berkontribusi aktif dalam pembangunan infrastruktur serta pemberdayaan ekonomi desa sekitar tambang.',
    },
    innovation: {
      title: 'Inovasi Pertambangan',
      subtitle: 'Mengadopsi teknologi modern untuk efisiensi tinggi.',
      text: 'Penggunaan sistem monitoring digital dan teknologi crushing plant terbaru memastikan kualitas produk yang konsisten dan operasional yang ramah lingkungan.',
    },
    partners: {
      title: 'Mitra Strategis',
      subtitle: 'Dipercaya oleh perusahaan industri terkemuka.',
    },
    vision: {
      title: 'Visi Masa Depan',
      subtitle: 'Menjadi pemimpin industri batu kapur di Asia Tenggara.',
      text: 'Kami terus melakukan ekspansi kapasitas dan peningkatan standar kualitas untuk memenuhi kebutuhan pasar global yang terus berkembang.',
    },
    process: {
      title: 'Proses Penambangan',
      subtitle: 'Alur kerja sistematis untuk hasil yang optimal.',
      steps: [
        { title: 'Eksplorasi', desc: 'Pemetaan geologi dan pengeboran sampel untuk menentukan kualitas cadangan.' },
        { title: 'Pembersihan Lahan', desc: 'Pembersihan vegetasi dan tanah pucuk secara bertanggung jawab.' },
        { title: 'Pengeboran & Peledakan', desc: 'Teknik peledakan presisi untuk meminimalkan dampak lingkungan.' },
        { title: 'Pemuatan & Pengangkutan', desc: 'Pemindahan material menggunakan alat berat modern ke area pengolahan.' },
        { title: 'Penggilingan (Crushing)', desc: 'Proses pengecilan ukuran sesuai spesifikasi permintaan pelanggan.' },
      ],
    },
    geology: {
      title: 'Keunggulan Geologis',
      subtitle: 'Sumber daya batu kapur dengan kemurnian tinggi.',
      text: 'Deposit batu kapur di wilayah operasional kami memiliki kadar Kalsium Oksida (CaO) yang sangat tinggi (>55%) dengan kandungan pengotor yang sangat rendah.',
    },
    economic: {
      title: 'Keuntungan Ekonomi',
      subtitle: 'Nilai tambah yang signifikan bagi mitra bisnis kami.',
      points: [
        { title: 'Efisiensi Biaya', desc: 'Harga kompetitif dengan kualitas premium meningkatkan margin keuntungan pelanggan.' },
        { title: 'Pasokan Stabil', desc: 'Cadangan yang melimpah menjamin keberlanjutan pasokan jangka panjang.' },
        { title: 'Logistik Terintegrasi', desc: 'Akses langsung ke laut mengurangi biaya distribusi secara signifikan.' },
      ],
    },
    benefits: {
      title: 'Manfaat Produk Kami',
      subtitle: 'Mengapa memilih batu gamping PT WEU?',
      items: [
        'Reaktivitas kimia yang sangat tinggi.',
        'Ukuran butir yang konsisten dan presisi.',
        'Kandungan magnesium dan silika yang sangat rendah.',
        'Ketahanan fisik yang optimal untuk konstruksi.',
      ],
    },
    resources: {
      title: 'Estimasi Sumber Daya',
      subtitle: 'Potensi cadangan yang besar dan berkelanjutan.',
      text: 'Berdasarkan survei geologi terbaru, wilayah IUP kami seluas 97.05 Ha menyimpan jutaan ton cadangan batu kapur berkualitas tinggi yang siap ditambang.',
    },
    operational: {
      title: 'Keunggulan Operasional',
      subtitle: 'Kapasitas produksi besar dengan kontrol kualitas ketat.',
      stats: [
        { label: 'Kapasitas Crusher', value: '250 TPH' },
        { label: 'Jam Operasional', value: '24/7' },
        { label: 'Uptime Mesin', value: '98%' },
        { label: 'Kontrol Kualitas', value: 'Setiap Jam' },
      ],
    },
    qc: {
      title: 'Kontrol Kualitas Ketat',
      subtitle: 'Memastikan setiap butir memenuhi standar.',
      text: 'Laboratorium internal kami melakukan pengujian sampel setiap jam operasional untuk memastikan konsistensi kadar kimia dan ukuran produk.',
    },
    investment: {
      title: 'Nilai Investasi',
      subtitle: 'Kepastian hukum dan operasional bagi investor.',
      text: 'Dengan IUP OP yang lengkap dan manajemen yang profesional, kami menawarkan peluang kemitraan yang aman dan menguntungkan.',
    },
    standards: {
      title: 'Kepatuhan Standar',
      subtitle: 'Memenuhi standar nasional dan internasional.',
      text: 'Seluruh proses operasional dan produk kami telah memenuhi standar SNI dan regulasi pertambangan Indonesia yang ketat.',
    },
    applications: {
      title: 'Aplikasi Industri',
      subtitle: 'Penggunaan batu kapur yang serbaguna.',
      items: [
        { title: 'Peleburan Baja', desc: 'Digunakan sebagai fluks untuk menghilangkan pengotor dalam proses pembuatan besi dan baja.' },
        { title: 'Konstruksi', desc: 'Bahan utama dalam semen, mortar, dan stabilisasi jalan.' },
        { title: 'Pengolahan Air', desc: 'Menyesuaikan tingkat pH dan menghilangkan logam berat dari limbah cair industri.' },
        { title: 'Pertanian', desc: 'Menetralkan keasaman tanah dan menyediakan kalsium penting untuk pertumbuhan tanaman.' },
      ],
    },
    qcWorkflow: {
      title: 'Alur Kerja QC',
      subtitle: 'Presisi di setiap batch produksi.',
      text: 'Sistem kontrol kualitas kami terintegrasi di setiap tahap alur kerja penambangan dan pengolahan, memastikan kami hanya memberikan batu kapur kelas tertinggi kepada mitra kami.',
      steps: [
        { title: 'Pengambilan Sampel', desc: 'Sampel representatif diambil dari setiap 100 ton produksi.' },
        { title: 'Analisis Kimia', desc: 'Pengujian komposisi menggunakan teknologi XRF di laboratorium kami.' },
        { title: 'Verifikasi', desc: 'Pemeriksaan silang hasil terhadap spesifikasi pelanggan.' },
        { title: 'Sertifikasi', desc: 'Laporan kualitas akhir diterbitkan sebelum pengiriman produk.' },
      ],
    },
    contact: {
      title: 'Hubungi Kami',
      address: 'Jalan Ratatotok Morea Soyowan, Desa Ratatotok Satu, Kec. Ratatotok, Kab. Minahasa Tenggara, Sulawesi Utara - Indonesia.',
      phone: '0434 260 3008 / +62 8114344168',
      email: 'wiraenergiutama@yahoo.com',
      form: {
        name: 'Nama Lengkap',
        email: 'Alamat Email',
        company: 'Nama Perusahaan',
        message: 'Pesan Anda',
        send: 'Kirim Pesan',
        success: 'Pesan Anda telah terkirim. Terima kasih!',
      },
    },
    aboutDetails: {
      history: {
        title: 'Sejarah & Warisan Kami',
        text: 'Didirikan dengan komitmen untuk menjadi energi utama dalam pembangunan nasional, PT Wira Energi Utama telah berkembang dari sebuah visi untuk mengoptimalkan kekayaan alam Sulawesi Utara menjadi penyedia batu kapur terintegrasi tingkat global. Selama lebih dari satu dekade, kami telah membangun reputasi atas keandalan, kualitas, dan praktik penambangan yang bertanggung jawab di Ratatotok.',
      },
      values: [
        { title: 'Integritas', desc: 'Menjalankan bisnis dengan standar etika tertinggi dan transparansi penuh.' },
        { title: 'Inovasi', desc: 'Terus mengadopsi teknologi terbaru untuk meningkatkan efisiensi dan kelestarian.' },
        { title: 'Kemitraan', desc: 'Membangun hubungan jangka panjang yang saling menguntungkan dengan pelanggan dan masyarakat.' },
      ],
      team: {
        title: 'Kepemimpinan Kami',
        text: 'Dipimpin oleh para profesional berpengalaman di industri pertambangan yang berdedikasi pada keunggulan operasional dan keselamatan.',
      },
      visionMission: {
        vision: {
          title: 'Visi Kami',
          text: 'Menjadi perusahaan industri pertambangan kapur/gamping global terkemuka yang tumbuh berkelanjutan.'
        },
        mission: {
          title: 'Misi Kami',
          items: [
            'Memupuk budaya cepat, produktif, efektif, efisien.',
            'Mengutamakan kesehatan, keselamatan kerja, dan lingkungan dalam segala tindakan.',
            'Memelihara tata kelola perusahaan tambang dengan baik demi meningkatkan kepercayaan masyarakat sekitar terhadap perusahaan.',
            'Menyediakan lingkungan belajar untuk mencapai keunggulan dan meningkatkan kesejahteraan karyawan.',
            'Mengedepankan teknologi yang berwawasan lingkungan.',
            'Melakukan reklamasi penghijauan dengan baik sesuai aturan yang berlaku.'
          ]
        }
      },
      sustainability: {
        title: 'Komitmen Keberlanjutan',
        text: 'Kami percaya bahwa pertambangan harus berjalan selaras dengan alam. Program reklamasi lahan kami yang proaktif memastikan bahwa setiap area yang selesai ditambang akan dikembalikan ke kondisi hijau yang produktif.'
      },
      safety: {
        title: 'Keselamatan & Kesehatan Kerja (K3)',
        text: 'Zero Accident bukan sekadar target, tapi adalah budaya kami.',
        points: ['APD Lengkap & Standar', 'Pelatihan Rutin Staff', 'Sertifikasi Alat Berkala', 'Audit Keselamatan Eksternal']
      },
      process: {
        title: 'Perjalanan Mineral',
        steps: [
          { title: 'Ekstraksi', desc: 'Penambangan terbuka dengan metode blasting terkontrol.' },
          { title: 'Crushing', desc: 'Pengecilan ukuran mineral menggunakan teknologi crusher otomatis.' },
          { title: 'Quality Control', desc: 'Pengujian laboratorium untuk memastikan kemurnian mineral.' },
          { title: 'Distribusi', desc: 'Logistik efisien melalui dermaga khusus milik sendiri.' }
        ]
      },
      infrastructure: {
        title: 'Infrastruktur Canggih',
        items: [
          { name: 'Jetty Khusus', desc: 'Dermaga laut dalam yang mampu menampung tongkang kapasitas besar.' },
          { name: 'Crushing Plant', desc: 'Sistem pengolahan terintegrasi dengan kapasitas produksi harian tinggi.' },
          { name: 'Laboratorium QC', desc: 'Fasilitas teknis untuk analisis kimia mineral secara real-time.' }
        ]
      },
      community: {
        title: 'Membangun Bersama Ratatotok',
        text: 'PT WEU4 bukan sekadar perusahaan, kami adalah bagian dari masyarakat Sulawesi Utara. Melalui program CSR, kami mendukung pendidikan, kesehatan, dan infrastruktur desa sekitar.'
      },
      quality: {
        title: 'Standar Kualitas Global',
        text: 'Produk kami memenuhi standar internasional untuk penggunaan di industri baja, semen, dan kimia reaktif tinggi.'
      },
      industrial: {
        title: 'Pilar Industri Nasional',
        text: 'Kami bangga menjadi pemasok utama bagi proyek-proyek strategis nasional, mendukung kemandirian energi dan bahan baku industri Indonesia.'
      }
    },
    productExpansion: {
      supplyChain: {
        title: 'Alur Rantai Pasok',
        steps: [
          { title: 'Ekstraksi Tambang', desc: 'Pengambilan material mentah dari pit tambang Ratatotok.' },
          { title: 'Pengolahan Sesuai Pesanan', desc: 'Penghancuran dan penyaringan mineral sesuai spesifikasi teknis klien.' },
          { title: 'Logistik Terintegrasi', desc: 'Pemuatan ke tongkang melalui dermaga pribadi (Jetty).' },
          { title: 'Pengiriman Tepat Waktu', desc: 'Distribusi global ke pabrik pemakai akhir tanpa hambatan.' }
        ]
      },
      qcLifecycle: {
        title: 'Siklus Penjaminan Kualitas',
        items: [
          'Analisis Kimia di Pit Tambang',
          'Pengujian Sampel Harian di Laboratorium',
          'Sertifikasi Pihak Ketiga Independen',
          'Verifikasi Produk Sebelum Pemuatan'
        ]
      },
      capabilities: {
        title: 'Kapasitas Operasional',
        text: 'Dengan dukungan infrastruktur modern, kami mampu memenuhi permintaan skala besar secara konsisten.',
        stats: [
          { label: 'Kapasitas Produksi', value: '150.000 MT/Bulan' },
          { label: 'Luas Area Tambang', value: '100+ Hektar' },
          { label: 'Draft Jetty', value: '12 Meter' }
        ]
      },
      industries: {
        title: 'Industri yang Kami Layani',
        list: [
          { name: 'Industri Semen', icon: 'Construction' },
          { name: 'Sektor Baja', icon: 'Wrench' },
          { name: 'Pembangkit Listrik (PLTU)', icon: 'Zap' },
          { name: 'Industri Kimia', icon: 'Beaker' },
          { name: 'Pertanian & Pupuk', icon: 'Sprout' }
        ]
      },
      customSolutions: {
        title: 'Solusi Mineral Kustom',
        text: 'Kami memahami setiap industri memiliki kebutuhan unik. Tim teknis kami siap melakukan engineering pada ukuran butir (grit size) dan kemurnian kimia sesuai target proses produksi Anda.'
      },
      sustainability: {
        title: 'Produksi Ramah Lingkungan',
        text: 'Sistem crushing kami dilengkapi dengan filter debu canggih dan penggunaan air sirkulasi tertutup untuk meminimalkan dampak lingkungan selama proses produksi.'
      },
      partnership: {
        title: 'Cara Menjadi Mitra Kami',
        steps: [
          { title: 'Konsultasi Teknis', desc: 'Diskusikan spesifikasi material yang Anda butuhkan.' },
          { title: 'Uji Sampel', desc: 'Kami mengirimkan sampel material untuk pengujian di laboratorium Anda.' },
          { title: 'Kesepakatan Kontrak', desc: 'Finalisasi volume, jadwal pengiriman, dan harga.' },
          { title: 'Eksekusi & Suplai', desc: 'Suplai mineral berkelanjutan dimulai ke fasilitas Anda.' }
        ]
      }
    },
    productDetails: {
      specsTitle: 'Spesifikasi Teknis',
      limestone: {
        title: 'Batu Kapur (Limestone)',
        fullDesc: 'Batu kapur kami dikenal dengan kadar CaO yang tinggi dan reaktivitas yang luar biasa. Cocok untuk industri baja, kimia, dan semen.',
        specs: ['Kadar CaO: > 55%', 'MgO: < 1.5%', 'Silika (SiO2): < 0.5%', 'Kadar Air: < 3%']
      },
      hydratedLime: {
        title: 'Kapur Padam (Hydrated Lime)',
        fullDesc: 'Kalsium Hidroksida hasil pemrosesan canggih untuk pemurnian air, stabilisasi tanah, dan pemrosesan gas buang.',
        specs: ['Kandungan Ca(OH)2: > 92%', 'Kehalusan (passing 325 mesh): > 95%', 'Warna: Putih Bersih']
      },
      burnLime: {
        title: 'Kapur Bakar (CaO)',
        fullDesc: 'Diproduksi melalui proses kalsinasi terkontrol untuk menghasilkan kapur tohor dengan aktivitas termal tinggi.',
        specs: ['Available CaO: > 90%', 'Ukuran (Lumpy): 10-50mm', 'Suhu Reaksi: > 60°C']
      }
    },
    productPages: {
      limestone: {
        id: 'limestone',
        category: 'raw',
        description: 'Material dasar esensial dari formasi kalsium karbonat tinggi untuk berbagai proses peleburan dan manufaktur industri.',
        size_variants: ['0–5 mm', '5–10 mm', '10–30 mm', '30–80 mm', 'Custom'],
        derivatives: ['caco3', 'burnLime', 'hydratedLime', 'pcc'],
        hero: {
          title: 'Batu Kapur Premium',
          subtitle: 'Kualitas Tinggi dari Ratatotok',
          description: 'Material dasar esensial dengan kadar kalsium oksida (CaO) superior untuk efisiensi industri maksimal.',
          image: '/products/limestone.png'
        },
        stats: [
          { label: 'Kadar CaO', value: '> 55%', icon: 'ShieldCheck' },
          { label: 'Purity', value: 'High', icon: 'Star' },
          { label: 'Kapasitas', value: '250 TPH', icon: 'Zap' },
          { label: 'Stok', value: 'Ready', icon: 'Package' }
        ],
        overview: {
          title: 'Ikhtisar Produk',
          content: 'Batu kapur (Limestone) kami ditambang langsung dari formasi geologi Ratatotok yang unik, menghasilkan batu gamping dengan kemurnian kristal tinggi. Produk ini merupakan pilihan utama bagi industri yang membutuhkan reaktivitas kimia tinggi dan tingkat kontaminan rendah.',
          features: [
            'Kemurnian CaO di atas rata-rata industri',
            'Kandungan silika dan magnesium sangat rendah',
            'Ketahanan fisik ideal untuk konstruksi',
            'Ukuran butir dapat disesuaikan (custom sizing)'
          ]
        },
        specifications: {
          title: 'Analisis Kimia & Fisik',
          table: [
            { label: 'Kalsium Oksida (CaO)', value: '55.20%' },
            { label: 'Magnesium Oksida (MgO)', value: '0.80%' },
            { label: 'Silika (SiO2)', value: '0.35%' },
            { label: 'Iron Oxide (Fe2O3)', value: '0.12%' },
            { label: 'Alumina (Al2O3)', value: '0.15%' },
            { label: 'Loss on Ignition (LOI)', value: '43.30%' }
          ],
          chartData: [
            { name: 'CaO', value: 55.2, color: '#0F3460' },
            { name: 'LOI', value: 43.3, color: '#E94560' },
            { name: 'Lainnya', value: 1.5, color: '#FFD700' }
          ]
        },
        applications: {
          title: 'Solusi untuk Berbagai Industri',
          items: [
            { title: 'Peleburan Baja', desc: 'Sebagai flux untuk memisahkan kotoran dari logam cair.', icon: 'Factory' },
            { title: 'Industri Semen', desc: 'Bahan baku utama pembuatan klinker kualitas tinggi.', icon: 'Building' },
            { title: 'Konstruksi', desc: 'Agregat kasar untuk beton dan stabilisasi tanah.', icon: 'Construction' },
            { title: 'Pengolahan Air', desc: 'Menetralkan tingkat pH dalam limbah cair industri.', icon: 'Droplets' }
          ]
        },
        process: {
          title: 'Alur Produksi Modern',
          steps: [
            { title: 'Ekstraksi Terkendali', desc: 'Penambangan dengan metode ramah lingkungan untuk menjaga struktur mineral.' },
            { title: 'Primary Crushing', desc: 'Pengecilan ukuran awal menggunakan jaw crusher kapasitas besar.' },
            { title: 'Sieving & Sorting', desc: 'Pemisahan berdasarkan ukuran mesh sesuai permintaan pelanggan.' },
            { title: 'Quality Validation', desc: 'Uji laboratorium per batch untuk memastikan konsistensi kadar.' }
          ]
        },
        quality: {
          title: 'Standar Kualitas Tanpa Kompromi',
          content: 'Setiap ton batu kapur yang meninggalkan fasilitas kami telah melalui verifikasi ketat. Kami bermitra dengan Sucofindo dan Intertek untuk sertifikasi pihak ketiga guna memberikan ketenangan bagi mitra kami.',
          certs: ['SNI Standard', 'ISO 9001:2015 Compliant', 'Certificate of Analysis (COA) per Order']
        },
        faq: {
          title: 'Pertanyaan Umum',
          items: [
            { q: 'Berapa kapasitas produksi bulanan?', a: 'Saat ini kapasitas produksi kami mencapai 150.000 metrik ton per bulan.' },
            { q: 'Apakah tersedia pengiriman melalui laut?', a: 'Ya, kami memiliki jetty pribadi yang mampu menampung tongkang ukuran 300 kaki.' },
            { q: 'Bisakah memesan ukuran butir custom?', a: 'Tentu, sistem crushing plant kami dapat dikonfigurasi untuk menghasilkan ukuran butir spesifik (0-5mm, 5-10mm, dst).' }
          ]
        },
        cta: {
          title: 'Siap untuk Meningkatkan Produksi Anda?',
          subtitle: 'Dapatkan penawaran harga kompetitif untuk kebutuhan batu kapur skala besar sekarang juga.',
          button: 'ORDER SEKARANG',
          whatsapp: 'Hubungi via WhatsApp'
        }
      },
      caco3: {
        id: 'caco3',
        category: 'processed',
        description: 'Tepung kalsium karbonat giling halus dengan kecerahan tinggi untuk aplikasi filler industri.',
        parent: 'limestone',
        size_variants: ['400 mesh', '800 mesh', '1.250 mesh', '2.500 mesh'],
        derivatives: ['pcc'],
        hero: {
          title: 'Kalsium Karbonat (CaCO3)',
          subtitle: 'Presisi Ukuran untuk Industri Kreatif',
          description: 'Tepung kalsium berkualitas tinggi dengan tingkat kecerahan maksimal untuk industri plastik, cat, dan karet.',
          image: '/products/caco3.png'
        },
        stats: [
          { label: 'Brightness', value: '> 94%', icon: 'Sun' },
          { label: 'Mesh', value: 'Variatif', icon: 'Layers' },
          { label: 'Purity', value: '99%', icon: 'Shield' },
          { label: 'Ready', value: 'Stock', icon: 'Package' }
        ],
        overview: {
          title: 'Performa Unggul CaCO3',
          content: 'Kalsium Karbonat kami diproses menggunakan teknologi grinding mill modern untuk menghasilkan kehalusan butir yang konsisten. Dengan tingkat keputihan (brightness) yang tinggi, produk ini menjadi pengisi (filler) ideal yang meningkatkan kualitas visual produk akhir Anda.',
          features: [
            'Distribusi ukuran partikel yang sangat sempit',
            'Tingkat penyerapan minyak yang rendah',
            'Stabilitas kimia dalam berbagai aplikasi suhu',
            'Bebas dari kontaminasi logam berat'
          ]
        },
        specifications: {
          title: 'Spesifikasi Teknis Tepung',
          table: [
            { label: 'CaCO3 Content', value: '98.8%' },
            { label: 'Brightness (Whiteness)', value: '95%' },
            { label: 'Kadar Air', value: '0.15%' },
            { label: 'Residu (325 mesh)', value: 'min 0.05%' },
            { label: 'pH Value', value: '8.5 - 9.5' },
            { label: 'Gravitasi Spesifik', value: '2.7 g/cm3' }
          ],
          chartData: [
            { name: 'Kalsium', value: 98.8, color: '#FFD700' },
            { name: 'Impuritas', value: 1.2, color: '#0F3460' }
          ]
        },
        applications: {
          title: 'Aplikasi Teknis',
          items: [
            { title: 'Industri Plastik', desc: 'Meningkatkan rigiditas dan mengurangi biaya bahan baku polimer.', icon: 'Layers' },
            { title: 'Cat & Coating', desc: 'Memberikan opasitas dan daya tutup yang baik pada lapisan cat.', icon: 'Palette' },
            { title: 'Industri Karet', desc: 'Memperbaiki elastisitas dan ketahanan aus pada ban dan alas kaki.', icon: 'Zap' },
            { title: 'Kertas', desc: 'Mencerahkan warna kertas dan meningkatkan daya serap tinta.', icon: 'FileText' }
          ]
        },
        process: {
          title: 'Proses Grinding Presisi',
          steps: [
            { title: 'Seleksi Kristalin', desc: 'Hanya batu kapur putih murni yang dipilih sebagai bahan baku.' },
            { title: 'Ultrafine Grinding', desc: 'Penggilingan menggunakan ball mill atau ultra-centrifugal mill.' },
            { title: 'Air Classification', desc: 'Pemisahan partikel halus menggunakan aliran udara bertekanan tinggi.' },
            { title: 'Packaging', desc: 'Pengemasan dalam karung 25kg, 50kg, atau jumbo bag 1 ton.' }
          ]
        },
        quality: {
          title: 'Jaminan Keputihan',
          content: 'Kami menggunakan colorimeter digital untuk memantau tingkat brightness pada setiap batch. Konsistensi warna adalah prioritas kami untuk menjaga standar estetika produk Anda.',
          certs: ['Certificate of Analysis (COA)', 'Material Safety Data Sheet (MSDS)', 'Lab Analysis Intertek']
        },
        faq: {
          title: 'Pertanyaan Produk',
          items: [
            { q: 'Mesh berapa saja yang tersedia?', a: 'Kami memproduksi ukuran mulai dari 400 mesh hingga 2500 mesh.' },
            { q: 'Apa tingkat brightness produk ini?', a: 'Produk premium kami memiliki tingkat kecerahan di atas 94%.' },
            { q: 'Apakah ada pengujian kalsium karbonat food grade?', a: 'Saat ini kami fokus pada grade industri dan teknis, namun kemurnian kami mendekati standar tinggi.' }
          ]
        },
        cta: {
          title: 'Hubungi Ahli Teknis Kami',
          subtitle: 'Konsultasikan kebutuhan spesifikasi kalsium karbonat Anda untuk hasil produk yang lebih baik.',
          button: 'DAPATKAN SAMPEL',
          whatsapp: 'Chat di WhatsApp'
        }
      },
      burnLime: {
        id: 'burnLime',
        category: 'processed',
        description: 'Kalsium oksida aktif untuk reaktivitas tinggi dalam proses industri termasuk peleburan dan pengolahan gas.',
        parent: 'limestone',
        size_variants: ['Lumpy 10–50 mm', 'Serbuk'],
        derivatives: ['hydratedLime'],
        hero: {
          title: 'Kapur Bakar (Quicklime)',
          subtitle: 'Energi Kimia untuk Reaksi Cepat',
          description: 'Kalsium Oksida (CaO) aktif tinggi hasil kalsinasi suhu ekstrem untuk reaktivitas maksimal.',
          image: '/products/burn-lime.png'
        },
        stats: [
          { label: 'CaO Aktif', value: '> 90%', icon: 'Thermometer' },
          { label: 'Reaktivitas', value: 'Tinggi', icon: 'Zap' },
          { label: 'Suhu Kalsinasi', value: '1100°C', icon: 'Flame' },
          { label: 'Order', value: 'Bulk', icon: 'Truck' }
        ],
        overview: {
          title: 'Kekuatan Kalsium Oksida',
          content: 'Kapur Bakar atau Quicklime kami diproduksi melalui proses dekomposisi termal terkontrol dalam kiln vertikal canggih. Hasilnya adalah material dengan porositas tinggi dan reaktivitas kimia yang sangat responsif, sangat penting untuk proses pemurnian logam dan industri kimia.',
          features: [
            'Kandungan CaO aktif di atas 90%',
            'Slaking rate yang sangat cepat',
            'Kandungan CO2 sisa minimal',
            'Tersedia dalam bentuk bongkahan (lumpy) atau serbuk'
          ]
        },
        specifications: {
          title: 'Spesifikasi Kalsinasi',
          table: [
            { label: 'Available CaO', value: '92.1%' },
            { label: 'Magnesium Oksida (MgO)', value: '0.55%' },
            { label: 'Silika (SiO2)', value: '0.22%' },
            { label: 'Loss on Ignition', value: '1.20%' },
            { label: 'Sulfur (S)', value: '0.04%' },
            { label: 'Reaktivitas (T60)', value: '< 2 menit' }
          ],
          chartData: [
            { name: 'CaO Aktif', value: 92.1, color: '#E94560' },
            { name: 'Sisa Pembakaran', value: 1.2, color: '#1A1A2E' }
          ]
        },
        applications: {
          title: 'Kegunaan Industri Berat',
          items: [
            { title: 'Industri Smelter', desc: 'Penghilang pengotor dalam pemurnian nikel dan bauksit.', icon: 'Anvil' },
            { title: 'Produksi Gula', desc: 'Pemurnian nira tebu dalam proses klarifikasi.', icon: 'Filter' },
            { title: 'Tanah & Tambang', desc: 'Stabilisasi tanah lunak dan pengelolaan pH tailing tambang.', icon: 'Mountain' },
            { title: 'Bahan Kimia', desc: 'Bahan baku pembuatan kalsium karbida dan senyawa organik lainnya.', icon: 'FlaskConical' }
          ]
        },
        process: {
          title: 'Alur Kalsinasi Presisi',
          steps: [
            { title: 'Screening Bahan Baku', desc: 'Memastikan ukuran batu kapur seragam untuk pembakaran merata.' },
            { title: 'Thermal Calcination', desc: 'Pemanasan pada suhu 1000°C - 1200°C dalam shaft kiln.' },
            { title: 'Cooling & Oxygen Control', desc: 'Pendinginan cepat untuk menjaga aktivitas kimia CaO.' },
            { title: 'Crushing & Packing', desc: 'Penghancuran sesuai ukuran permintaan dan pengemasan kedap udara.' }
          ]
        },
        quality: {
          title: 'Jaminan Reaktivitas',
          content: 'Kami melakukan uji slaking (slaking test) setiap jam untuk memastikan kapur bakar kami bereaksi dengan air pada suhu yang tepat. Ini memastikan efisiensi konsumsi kapur bagi pengguna akhir.',
          certs: ['Chemical Purity Certificate', 'Slaking Rate Analysis', 'Energy Efficiency Standard']
        },
        faq: {
          title: 'FAQ Kapur Bakar',
          items: [
            { q: 'Bagaimana cara penyimpanan terbaik?', a: 'Harus disimpan di tempat kering dan tertutup rapat karena sifatnya yang sangat higroskopis (menyerap air dari udara).' },
            { q: 'Berapa reaktivitas termalnya?', a: 'Rata-rata kenaikan suhu mencapai 60°C dalam waktu kurang dari 2 menit saat bereaksi dengan air.' },
            { q: 'Apakah tersedia pengiriman dengan truk dump?', a: 'Ya, kami menyediakan truk dump untuk pengiriman curah (bulk) atau packing jumbo bag.' }
          ]
        },
        cta: {
          title: 'Optimalkan Proses Industri Anda',
          subtitle: 'Kapur bakar reaktivitas tinggi kami dapat mengurangi biaya operasional Anda secara signifikan.',
          button: 'KONSULTASI HARGA',
          whatsapp: 'Tanya via WhatsApp'
        }
      },
      hydratedLime: {
        id: 'hydratedLime',
        category: 'processed',
        description: 'Tepung kalsium hidroksida halus untuk pengolahan air dan aplikasi lingkungan dengan efisiensi tinggi.',
        parent: 'burnLime',
        size_variants: ['325 mesh (standar)', 'Ultra-fine'],
        derivatives: [],
        hero: {
          title: 'Kapur Padam (Hydrated Lime)',
          subtitle: 'Larutan Murni untuk Lingkungan',
          description: 'Kalsium Hidroksida (Ca(OH)2) berkualitas halus untuk pengolahan air dan kontrol polusi udara.',
          image: '/products/hydrated-lime.png'
        },
        stats: [
          { label: 'Ca(OH)2', value: '> 92%', icon: 'Droplets' },
          { label: 'Kehalusan', value: '325 Mesh', icon: 'Filter' },
          { label: 'Color', value: 'Fine White', icon: 'Star' },
          { label: 'Safety', value: 'MSDS', icon: 'ShieldCheck' }
        ],
        overview: {
          title: 'Solusi Hidrasi Kalsium',
          content: 'Kapur Padam (Hydrated Lime) kami adalah hasil hidrasi terkontrol dari kapur tohor (CaO) murni. Dengan tingkat kehalusan yang sangat tinggi, produk ini sangat mudah larut dan bereaksi, menjadikannya pilihan sempurna untuk aplikasi pengolahan limbah cair dan gas buang industri.',
          features: [
            'Kehalusan partikel hingga lolos mesh 325 (>95%)',
            'Kadar kalsium hidroksida yang sangat stabil',
            'Reaktivitas tinggi dalam penetralan asam',
            'Penanganan yang lebih aman dibandingkan kapur bakar'
          ]
        },
        specifications: {
          title: 'Data Teknis Hidrasi',
          table: [
            { label: 'Kandungan Ca(OH)2', value: '94.5%' },
            { label: 'Kalsium Oksida (CaO)', value: '71.5%' },
            { label: 'Magnesium (MgO)', value: '0.40%' },
            { label: 'Insoluble Matter', value: '0.45%' },
            { label: 'Apparent Density', value: '0.45 - 0.55 g/ml' },
            { label: 'Moisture Content', value: '< 1.0%' }
          ],
          chartData: [
            { name: 'Kalsium Hidroksida', value: 94.5, color: '#3456A3' },
            { name: 'Mineral Pendamping', value: 5.5, color: '#F1C40F' }
          ]
        },
        applications: {
          title: 'Manfaat untuk Lingkungan',
          items: [
            { title: 'Pengolahan Air Bersih', desc: 'Menghilangkan logam berat dan mengatur kesadahan air.', icon: 'Droplet' },
            { title: 'Flue Gas Cleaning', desc: 'Menyerap gas asam (SO2, HCl) dari asap cerobong pabrik.', icon: 'Wind' },
            { title: 'Konstruksi Jalan', desc: 'Meningkatkan stabilitas aspal dan daya tahan jalan.', icon: 'Truck' },
            { title: 'Pengolahan Limbah', desc: 'Presipitasi fosfat dan flokulasi partikel dalam air limbah.', icon: 'Recycle' }
          ]
        },
        process: {
          title: 'Teknologi Hidrasi Otomatis',
          steps: [
            { title: 'Pilih Kapur Bakar', desc: 'Hanya menggunakan CaO reaktivitas tinggi sebagai bahan dasar.' },
            { title: 'Controlled Hydration', desc: 'Penambahan air dalam jumlah tepat untuk reaksi hidrasi sempurna.' },
            { title: 'Air Separation', desc: 'Pemisahan partikel kasar untuk mendapatkan kehalusan mesh 325.' },
            { title: 'Silo Storage', desc: 'Penyimpanan dalam silo kedap air untuk menjaga kualitas serbuk.' }
          ]
        },
        quality: {
          title: 'Kemurnian yang Teruji',
          content: 'Laboratorium kami memantau kehalusan butir secara berkala menggunakan metode laser diffraction. Kami menjamin efektivitas produk kami dalam sistem injeksi kering maupun basah pelanggan kami.',
          certs: ['Kehalusan Mesh 325 Verified', 'Purity Analysis Certificate', 'Eco-Industrial Certification']
        },
        faq: {
          title: 'FAQ Kapur Padam',
          items: [
            { q: 'Apakah produk ini berdebu?', a: 'Ya, karena kehalusannya yang tinggi. Kami menyarankan penggunaan sistem pneumatic atau penutup saat menuang.' },
            { q: 'Berapa lama masa simpannya?', a: 'Dalam kemasan yang baik dan kering, dapat bertahan hingga 6 bulan tanpa penurunan kualitas signifikan.' },
            { q: 'Apakah ada minimal pemesanan?', a: 'Minimal pemesanan adalah 10 ton, tersedia dalam karung 25kg atau jumbo bag.' }
          ]
        },
        cta: {
          title: 'Ciptakan Lingkungan yang Lebih Bersih',
          subtitle: 'Gunakan kapur padam kualitas superior untuk efisiensi sistem pengolahan limbah Anda.',
          button: 'MINTA PENAWARAN',
          whatsapp: 'Hubungi Kami Sekarang'
        }
      },
      pcc: {
        id: 'pcc',
        category: 'advanced',
        description: 'Kalsium karbonat presipitasi kemurnian sangat tinggi dengan kontrol kristal molekuler untuk grade industri khusus.',
        parent: 'caco3',
        size_variants: ['Nano-size', 'Micron-size'],
        derivatives: [],
        hero: {
          title: 'Precipitated Calcium Carbonate (PCC)',
          subtitle: 'Kemurnian Molekuler untuk Industri Khusus',
          description: 'Kalsium karbonat presipitasi dengan ukuran butir nano untuk aplikasi farmasi, kosmetik, dan kertas premium.',
          image: '/products/pcc.png'
        },
        stats: [
          { label: 'Purity', value: '99.9%', icon: 'ShieldCheck' },
          { label: 'Crystal', value: 'Nano Size', icon: 'Microscope' },
          { label: 'Brightness', value: '98%', icon: 'Sun' },
          { label: 'Grade', value: 'Specialty', icon: 'Award' }
        ],
        overview: {
          title: 'Inovasi Presipitasi Kalsium',
          content: 'PCC kami diproduksi melalui proses kimiawi presipitasi yang memungkinkan kontrol total atas bentuk kristal dan ukuran partikel. Ini menghasilkan produk dengan tingkat keputihan ekstrem dan reaktivitas permukaan yang tinggi, melampaui kemampuan kalsium karbonat alam (GCC).',
          features: [
            'Kemurnian kimia luar biasa (>99.9% CaCO3)',
            'Bentuk kristal dapat disesuaikan (Aragonit/Kalsit)',
            'Ukuran partikel dalam skala mikron hingga nano',
            'Nilai absorpsi minyak yang dapat dikontrol'
          ]
        },
        specifications: {
          title: 'Spesifikasi Grade Khusus',
          table: [
            { label: 'Kandungan CaCO3', value: '99.85%' },
            { label: 'Brightness (R457)', value: '98.5%' },
            { label: 'Specific Surface Area', value: '12 - 15 m2/g' },
            { label: 'Ukuran Butir Rata-rata', value: '1.2 - 2.5 um' },
            { label: 'Heavy Metals (Pb)', value: '< 1 ppm' },
            { label: 'Kelarutan dalam Asam', value: 'Sempurna' }
          ],
          chartData: [
            { name: 'CaCO3 Pure', value: 99.9, color: '#0F3460' },
            { name: 'Trace Elements', value: 0.1, color: '#FFD700' }
          ]
        },
        applications: {
          title: 'Aplikasi High-End',
          items: [
            { title: 'Farmasi', desc: 'Suplemen kalsium dan bahan pengikat tablet obat.', icon: 'Stethoscope' },
            { title: 'Kosmetik', desc: 'Bahan dasar bedak wajah dan produk perawatan pribadi premium.', icon: 'Sparkles' },
            { title: 'Kertas Foto', desc: 'Pelapis kertas untuk hasil cetak dengan resolusi dan kontras tinggi.', icon: 'Printer' },
            { title: 'Industri Sealant', desc: 'Pengatur reologi dan viskositas pada perekat otomotif.', icon: 'Zap' }
          ]
        },
        process: {
          title: 'Proses Sintesis Kimia',
          steps: [
            { title: 'Gas Carbonation', desc: 'Reaksi antara susu kapur dengan gas CO2 murni.' },
            { title: 'Crystal Growth Control', desc: 'Pengaturan suhu dan tekanan untuk membentuk struktur kristal tertentu.' },
            { title: 'Filtration & Washing', desc: 'Pembersihan sisa ion untuk mencapai kemurnian molekuler.' },
            { title: 'Drying & Micronizing', desc: 'Pengeringan suhu rendah dan pemisahan partikel halus.' }
          ]
        },
        quality: {
          title: 'Kualitas Kelas Dunia',
          content: 'Produk PCC kami diproduksi di bawah pengawasan ketat dengan standar kualitas yang memenuhi persyaratan industri makanan dan farmasi. Kami menjamin konsistensi yang presisi di setiap miligram produk.',
          certs: ['High Purity Lab Test', 'Food Grade Compliance (Ready)', 'Pharmaceutical Analysis']
        },
        faq: {
          title: 'FAQ PCC',
          items: [
            { q: 'Apa perbedaan PCC dengan kalsium biasa?', a: 'PCC dibuat melalui reaksi kimia sehingga ukurannya lebih kecil, lebih putih, dan bentuknya lebih seragam dibanding hasil gilingan alam.' },
            { q: 'Bisakah kustomisasi bentuk kristal?', a: 'Ya, kami dapat mengatur proses untuk menghasilkan bentuk rhombohedral, scalenohedral, atau prismatic sesuai aplikasi Anda.' },
            { q: 'Apakah tersedia sertifikasi halal/food grade?', a: 'Fasilitas kami dirancang untuk standar tinggi dan kami sedang dalam proses finalisasi sertifikasi tersebut.' }
          ]
        },
        cta: {
          title: 'Inovasi dengan Material Premium',
          subtitle: 'Tingkatkan kualitas produk unggulan Anda dengan Precipitated Calcium Carbonate kami.',
          button: 'HUBUNGI DIVISI TEKNIS',
          whatsapp: 'WhatsApp Tim Ahli'
        }
      },
      agregat: {
        id: 'agregat',
        category: 'processed',
        description: 'Agregat batu pecah berkualitas tinggi memenuhi standar SNI 1750 untuk infrastruktur tahan lama dan aplikasi beton mutu tinggi.',
        size_variants: ['1–2 cm (Split)', '2–3 cm (Split)', 'Base Course', 'Screening'],
        derivatives: [],
        hero: {
          title: 'Agregat Beton SNI',
          subtitle: 'Kekuatan Struktural Maksimal',
          description: 'Material batuan keras hasil proses crushing presisi untuk daya tahan konstruksi jangka panjang.',
          image: '/products/agregat-beton.png'
        },
        stats: [
          { label: 'Standar', value: 'SNI 1750', icon: 'ShieldCheck' },
          { label: 'Bentuk', value: 'Kubikal', icon: 'Layers' },
          { label: 'Abrasi', value: '< 25%', icon: 'Zap' },
          { label: 'Stok', value: 'Ready', icon: 'Package' }
        ],
        overview: {
          title: 'Kualitas Agregat WEU',
          content: 'Agregat beton kami diproses dari batuan andesit/basalt pilihan melalui sistem crusher tiga tahap untuk menghasilkan bentuk butiran kubikal yang ideal bagi campuran beton.',
          features: [
            'Bentuk butiran seragam (low elongation)',
            'Permukaan bersih dari material organik',
            'Ketahanan terhadap cuaca ekstrem',
            'Tersedia berbagai ukuran fraksi'
          ]
        },
        specifications: {
          title: 'Analisis Teknis Agregat',
          table: [
            { label: 'Berat Jenis', value: '2.65 g/cm3' },
            { label: 'Penyerapan Air', value: '1.2%' },
            { label: 'Kadar Lumpur', value: '0.8%' },
            { label: 'Impact Value', value: '18%' }
          ],
          chartData: [
            { name: 'Solid', value: 98, color: '#0F3460' },
            { name: 'Absorpsi', value: 2, color: '#FFD700' }
          ]
        },
        applications: {
          title: 'Aplikasi Konstruksi',
          items: [
            { title: 'Beton Ready Mix', desc: 'Material utama untuk beton struktural K-350 ke atas.', icon: 'Building' },
            { title: 'Lapis Pondasi', desc: 'Stabilisasi jalan raya dan area beban berat.', icon: 'Construction' },
            { title: 'Precast', desc: 'Pembuatan box culvert, u-ditch, dan tiang pancang.', icon: 'Factory' }
          ]
        },
        process: {
          title: 'Produksi Agregat',
          steps: [
            { title: 'Seleksi Batuan', desc: 'Pemilihan batuan keras dengan densitas tinggi.' },
            { title: 'Triple Stage Crushing', desc: 'Proses pemecahan bertahap untuk menjaga kualitas bentuk.' },
            { title: 'Washing System', desc: 'Pembersihan debu halus untuk memastikan ikatan beton kuat.' }
          ]
        },
        quality: {
          title: 'Standar Infrastruktur',
          content: 'Setiap batch agregat diuji abrasi dan gradasi untuk memastikan ketahanan struktur bagi kontraktor.',
          certs: ['Uji Laboratorium SNI', 'Sertifikat Bebas Lumpur', 'Analisis Gradasi Rutin']
        },
        faq: {
          title: 'Pertanyaan Agregat',
          items: [
            { q: 'Ukuran apa saja yang tersedia?', a: 'Tersedia ukuran 1-2, 2-3, dan base course sesuai pesanan.' }
          ]
        },
        cta: {
          title: 'Bangun Proyek Anda dengan Kokoh',
          subtitle: 'Dapatkan agregat berkualitas tinggi untuk proyek strategis nasional Anda.',
          button: 'MINTA PENAWARAN',
          whatsapp: 'Hubungi Logistik'
        }
      }
    },
    advancedAbout: {
      hero: {
        title: 'Batu Kapur & Mineral',
        subtitle: 'Tentang PT Wira Energi Utama',
        description: 'Menjadi pilar utama dalam penyediaan material industri berkualitas tinggi dari Sulawesi Utara untuk kemajuan nasional.',
        image: '/mining-bg.webp'
      },
      history: {
        title: 'Sejarah & Warisan Kami',
        content: 'Didirikan dengan manajemen yang visioner, PT Wira Energi Utama telah bertransformasi dari operasi tambang lokal Ratatotok menjadi pemain industri strategis dengan crushing plant 250 TPH and akses dermaga khusus.',
        image: '/Drone Webp/DJI_20260310143518_0298_D (1).webp',
        stats: [
          { label: 'Tahun Didirikan', value: '2019' },
          { label: 'Kapasitas Bulanan', value: '150k MT' },
          { label: 'Luas Wilayah', value: '97 Ha' }
        ]
      },
      values: {
        title: 'Nilai Nilai Kami',
        subtitle: 'Integritas • Inovasi • Keberlanjutan',
        items: [
          { title: 'Integritas', desc: 'Melakukan penambangan dengan transparansi penuh dan kepatuhan hukum yang ketat.', icon: 'ShieldCheck' },
          { title: 'Inovasi', desc: 'Mengadopsi teknologi pemrosesan mineral terbaru untuk efisiensi maksimal.', icon: 'Zap' },
          { title: 'Komunitas', desc: 'Pemberdayaan tenaga kerja lokal Ratatotok sebagai prioritas utama perkembangan kami.', icon: 'Users' }
        ]
      },
      leadership: {
        title: 'Kepemimpinan Kami',
        content: 'Dipandu oleh keahlian teknis and integritas bisnis untuk menjamin keberlanjutan operasional.',
        image: '/Drone Webp/DJI_20260310143640_0300_D (1).webp'
      },
      sustainability: {
        title: 'Komitmen Lingkungan',
        content: 'Kami berkomitmen penuh pada reklamasi pasca-tambang and reboisasi area operasional.',
        initiatives: ['Reklamasi Berkelanjutan', 'Manajemen Limbah', 'Konservasi Air']
      },
      safety: {
        title: 'Keselamatan Kerja',
        content: 'Keselamatan tanpa kompromi melalui standar K3 (Kesehatan dan Keselamatan Kerja) industri kelas dunia.',
        certifications: ['ISO 45001', 'K3 Pertambangan', 'Zero Accident Policy']
      },
      assets: {
        title: 'Fasilitas & Aset',
        items: [
          { name: 'Crushing Plant', value: '250 TPH', icon: 'Settings' },
          { name: 'Pelabuhan Khusus', value: '3 Jetty', icon: 'Ship' },
          { name: 'Armada Logistik', value: '15+ Units', icon: 'Truck' }
        ]
      },
      future: {
        title: 'Visi Masa Depan',
        content: 'Menjadi pemimpin pasar Kalsium Karbonat di Asia Tenggara pada tahun 2030.',
        targets: ['Ekspansi Kapasitas', 'PCC Nanoscale', 'Net Zero Carbon']
      },
      gallery: {
        title: 'Visi Kerja Nyata',
        subtitle: 'Dokumentasi operasional dari udara yang menunjukkan skala dan presisi penambangan kami.',
        images: [
          '/Drone Webp/DJI_20260225092843_0288_D (1).webp',
          '/Drone Webp/DJI_20260310143518_0298_D (1).webp',
          '/Drone Webp/DJI_20260310143640_0300_D (1).webp',
          '/Drone Webp/DJI_20260310143758_0302_D (1).webp',
          '/Drone Webp/DJI_20260310144034_0308_D (1).webp',
          '/Drone Webp/DJI_20260310144136_0309_D (1).webp',
          '/Drone Webp/DJI_20260310144303_0310_D (1).webp'
        ]
      }
    },
    advancedCatalog: {
      hero: {
        title: 'Katalog Produk Teknis',
        description: 'Spesifikasi material terlengkap untuk kebutuhan industri presisi.',
        image: '/mining-bg.webp'
      },
      categories: [
        {
          title: 'Industrial Crushing & Material Processing',
          description: 'High-purity limestone materials engineered for smelting, construction, and industrial processing applications.',
          items: [
            { id: 'limestone', name: 'Limestone Lumpy', specs: 'CaO > 55%, 40-150mm', tags: ['Smelter', 'Flux'], image: '/products/limestone-lumpy.png', details: ['High Calcium Content', 'Consistent Size Range', 'Low Silicate'] },
            { id: 'burnLime', name: 'Quicklime', specs: 'Active CaO > 90%', tags: ['Steel', 'Chemical'], image: '/products/burn-lime.png', details: ['Fast Reactivity', 'High Purity', 'Moisture Controlled'] }
          ]
        },
        {
          title: 'Konstruksi & Infrastruktur',
          description: 'Agregat standar SNI untuk daya tahan maksimal.',
          items: [
            { id: 'agregat', name: 'Agregat Beton', specs: 'Sesuai SNI 1750', tags: ['Infrastruktur', 'Beton'], image: '/products/agregat-beton.png', details: ['Cubical Shape', 'Clean Surfaces', 'Vibrated Material'] }
          ]
        },
        {
          title: 'Kalsium Karbonat (CaCO3)',
          description: 'Tepung mineral untuk kertas, plastik, and kimia.',
          items: [
            { id: 'caco3', name: 'Tepung CaCO3', specs: 'D97 < 10 micron', tags: ['Plastic', 'Paper'], image: '/products/tepung-caco3.png', details: ['Ultra Fine Grinding', 'High Whiteness', 'Strict PSD Control'] },
            { id: 'pcc', name: 'PCC Nanoscale', specs: 'Purity > 99%', tags: ['Pharma', 'Paint'], image: '/products/pcc-nanoscale.png', details: ['Precipitated Tech', 'Nano Particle Size', 'Pharma Grade'] }
          ]
        }
      ],
      industrial: {
        title: 'Aplikasi Material',
        items: [
          { name: 'Pembuatan Baja', usage: 'Penghilangan pengotor fosfor & sulfur', icon: 'Flame' },
          { name: 'Pengolahan Air', usage: 'Penyesuaian pH & koagulasi', icon: 'Droplets' },
          { name: 'Kertas & Plastik', usage: 'Material pengisi (filler) kualitas tinggi', icon: 'Layers' },
          { name: 'Batu Split (Aggregate)', usage: 'Material bangunan, ukuran 1.2 - 2.3 cm', icon: 'Construction' },
          { name: 'PLTU (Power Plant)', usage: 'Desulfurisasi gas buang, ukuran > 3 cm', icon: 'Zap' },
          { name: 'Industri Semen', usage: 'Bahan klinker semen Portland berkualitas', icon: 'Factory' },
          { name: 'Pertanian & Perikanan', usage: 'Penetral keasaman tanah & air tambak', icon: 'Sprout' },
          { name: 'Industri Gelas & Kaca', usage: 'Fluxing agent peleburan kaca murni', icon: 'Beaker' },
          { name: 'Peleburan Logam', usage: 'Pemisah terak (slag) dari logam cair', icon: 'Microscope' }
        ]
      },
      download: {
        title: 'Dokumentasi Teknis',
        description: 'Unduh katalog lengkap kami dalam format PDF untuk akses spesifikasi terperinci di perangkat Anda.',
        button: 'Unduh Katalog (PDF)',
        fileSize: '4.8 MB',
        version: 'v2.4 (Mar 2026)'
      },
      documentation: {
        title: 'Dokumentasi Teknis (Photo)',
        subtitle: 'Bukti kualitas visual dari Lapangan dan fasilitas crushing plant kami.',
        images: [
          '/Drone Webp/DJI_20260310143758_0302_D (1).webp',
          '/Drone Webp/DJI_20260310144034_0308_D (1).webp',
          '/Foto webp/IMG_1138.webp',
          '/Foto webp/IMG_1139.webp',
          '/Foto webp/IMG_1141.webp',
          '/Foto webp/IMG_1142.webp'
        ]
      }
    },
    advancedBlog: {
      hero: {
        title: 'Warta Wira Energi',
        subtitle: 'Wawasan Industri & Kabar Perusahaan'
      },
      posts: [
        {
          id: '1',
          title: 'Peran Batu Kapur dalam Industri Baja Nasional',
          excerpt: 'Batu kapur murni tinggi sangat krusial sebagai agen fluxing untuk menghilangkan pengotor dalam pembuatan baja...',
          date: '15 Maret 2024',
          category: 'Industri',
          image: '/blog/steel.webp'
        },
        {
          id: '2',
          title: 'Komitmen Kami terhadap Reklamasi Berkelanjutan',
          excerpt: 'Melihat lebih dekat bagaimana PT WEU mengembalikan ekosistem lokal setelah kegiatan penambangan selesai.',
          date: '10 Maret 2024',
          category: 'Lingkungan',
          image: '/blog/reclamation.webp'
        },
        {
          id: '3',
          title: 'Inovasi Teknologi Crushing Terbaru di Ratatotok',
          excerpt: 'Meningkatkan kapasitas produksi hingga 250 ton per jam dengan sistem otomatisasi terbaru.',
          date: '5 Maret 2024',
          category: 'Teknologi',
          image: '/blog/tech.webp'
        },
        {
          id: '4',
          title: 'Optimalisasi Peleburan Baja dengan Batu Kapur Kemurnian Tinggi',
          excerpt: 'Batu kapur dengan kadar CaO tinggi berperan krusial sebagai agen fluxing untuk menghilangkan pengotor dalam pembuatan baja modern.',
          date: '20 Maret 2024',
          category: 'Industri',
          image: '/blog/steel_advanced.png'
        },
        {
          id: '5',
          title: 'Daya Tahan Infrastruktur: Peran Kalsium Karbonat Standar SNI',
          excerpt: 'Mengapa agregat beton dan bubuk kalsium berkualitas tinggi menjadi kunci kekuatan proyek strategis nasional Indonesia.',
          date: '22 Maret 2024',
          category: 'Teknologi',
          image: '/blog/infrastructure_durability.png'
        },
        {
          id: '6',
          title: 'Praktik Tambang Etis & Dampak Positif bagi Komunitas Ratatotok',
          excerpt: 'PT WEU berkomitmen pada pemberdayaan tenaga kerja lokal dan tanggung jawab sosial sebagai fondasi keberlanjutan operasional.',
          date: '25 Maret 2024',
          category: 'Sosial',
          image: '/blog/ethical_community.png'
        },
        {
          id: '7',
          title: 'Masa Depan Nano-PCC dalam Industri Farmasi dan Kimia Khusus',
          excerpt: 'Eksplorasi potensi Precipitated Calcium Carbonate skala nano untuk aplikasi bernilai tinggi di pasar global.',
          date: '28 Maret 2024',
          category: 'Inovasi',
          image: '/Gemini_Generated_Image_5gf0lo5gf0lo5gf0.webp'
        }
      ]
    },
    advancedContact: {
      hero: {
        title: 'Hubungi Tim Kami',
        subtitle: 'Kami siap membantu kebutuhan mineral industri Anda dengan solusi yang tepat.'
      },
      offices: [
        {
          title: 'Kantor Manado (Utama)',
          address: 'Taman Sari Cluster Lihaga, Blok H3-3 Kelurahan Paniki Bawah, Manado - Sulawesi Utara 95256 Indonesia',
          mapUrl: 'https://goo.gl/maps/placeholder-manado',
          image: '/office-manado.webp',
          email: 'contact@wiraenergiutama.com',
          phone: '(0434) 260 3008'
        },
        {
          title: 'Kantor Kotamobagu',
          address: 'Jl. S.Parman No. 741B Kotamobagu - Sulawesi Utara 95711 Indonesia',
          mapUrl: 'https://goo.gl/maps/placeholder-kota',
          image: '/office-kota.webp',
          email: 'wiraenergiutama@yahoo.com',
          phone: '(0434) 260 3008 / 0811 4344 168'
        }
      ],
      faq: {
        title: 'Pertanyaan Terkait Layanan',
        items: [
          { q: 'Bagaimana cara meminta penawaran harga?', a: 'Anda dapat mengirimkan spesifikasi kebutuhan melalui formulir di bawah atau langsung menghubungi email sales kami (contact@wiraenergiutama.com).' },
          { q: 'Apakah tersedia pengiriman ke luar pulau?', a: 'Ya, melalui dermaga pribadi (Private Jetty) kami, PT WEU melayani pengiriman via tongkang/barge ke seluruh wilayah Indonesia.' },
          { q: 'Berapa jumlah pesanan minimum (MOQ)?', a: 'MOQ bergantung pada jenis produk. Untuk pengiriman domestik via laut, umumnya mulai dari kapasitas 1 tongkang (7,500 - 10,000 MT), sedangkan pengambilan darat dapat disesuaikan.' },
          { q: 'Bagaimana prosedur untuk mendapatkan sampel batu kapur?', a: 'Sampel untuk pengujian laboratorium industri dapat diminta melalui departemen Quality Control kami dengan menyertakan profil perusahaan.' },
          { q: 'Apakah PT WEU melayani kunjungan survey tambang?', a: 'Kunjungan lapangan diizinkan untuk calon mitra bisnis dengan koordinasi minimal 7 hari kerja sebelumnya guna memastikan standar keselamatan (K3) terpenuhi.' },
          { q: 'Apa jenis armada yang digunakan untuk distribusi?', a: 'Kami mengoperasikan armada dumptruck Isuzu Giga untuk distribusi darat dan bermitra dengan line shipping terpercaya untuk distribusi laut.' }
        ]
      }
    },
    privacy: {
      title: 'Kebijakan Privasi',
      lastUpdated: 'Terakhir diperbarui: Maret 2024',
      sections: [
        {
          title: '1. Pengumpulan Informasi',
          content: 'Kami mengumpulkan informasi yang Anda berikan langsung kepada kami melalui formulir kontak, termasuk nama, alamat email, dan nama perusahaan untuk menanggapi pertanyaan bisnis Anda.'
        },
        {
          title: '2. Penggunaan Data',
          content: 'Data yang dikumpulkan hanya digunakan untuk kepentingan komunikasi bisnis resmi, peningkatan layanan, dan pemenuhan kewajiban sesuai hukum pertambangan Indonesia.'
        },
        {
          title: '3. Keamanan Informasi',
          content: 'Kami menerapkan langkah-langkah keamanan teknologi untuk melindungi data Anda dari akses yang tidak sah atau penyalahgunaan.'
        }
      ]
    },
    footer: {
      rights: 'Seluruh Hak Cipta Dilindungi.',
      links: [
        { label: 'Governansi', href: '/governansi-standar' },
        { label: 'Privasi', href: '/privacy' }
      ]
    },
    advancedGovernance: {
      hero: {
        title: 'Governansi & Standar Operasional',
        subtitle: 'Integritas melalui Kepatuhan dan Keamanan Tanpa Kompromi.',
        description: 'PT Wira Energi Utama menjunjung tinggi standar internasional dalam setiap aspek operasional pertambangan, memastikan kualitas berkelanjutan demi kepuasan mitra dan kelestarian lingkungan.',
        image: '/mining-bg.webp'
      },
      roadmap: {
        title: 'Roadmap Sertifikasi ISO',
        subtitle: 'Komitmen kami menuju standarisasi global tingkat tinggi.',
        steps: [
          { title: 'Persiapan & Gap Analysis', desc: 'Peninjauan mendalam terhadap SOP internal dan penyesuaian dengan standar ISO.', status: 'completed' },
          { title: 'Implementasi Sistem Mangement', desc: 'Penerapan protokol ISO di seluruh lini operasional tambang dan kantor.', status: 'in-progress' },
          { title: 'Audit Internal & Review', desc: 'Validasi kepatuhan sistem sebelum audit eksternal formal.', status: 'planned' },
          { title: 'Sertifikasi Final', desc: 'Audit akhir dan penerbitan sertifikat ISO resmi.', status: 'planned' }
        ]
      },
      standards: {
        title: 'Kerangka Kerja Standar',
        subtitle: 'Pilar-pilar kualitas yang kami jalankan setiap hari.',
        items: [
          { id: 'ISO 9001:2015', title: 'Manajemen Mutu', desc: 'Menjamin konsistensi kualitas mineral dan efisiensi rantai pasok.', status: 'Candidate' },
          { id: 'ISO 14001:2015', title: 'Manajemen Lingkungan', desc: 'Meminimalkan jejak ekologis melalui reklamasi progresif.', status: 'Candidate' },
          { id: 'ISO 45001:2018', title: 'Keselamatan & Kesehatan', desc: 'Standar global untuk perlindungan tenaga kerja di area tambang.', status: 'Implementation' },
          { id: 'SMK3', title: 'K3 Nasional', desc: 'Sistem Manajemen Keselamatan dan Kesehatan Kerja sesuai regulasi RI.', status: 'Certified' }
        ]
      },
      policies: {
        title: 'Kebijakan Perusahaan',
        items: [
          { title: 'Kebijakan Mutu', content: 'Memberikan produk mineral dengan kemurnian tinggi secara transparan dan tepat waktu.', icon: 'Award' },
          { title: 'Kebijakan Lingkungan', content: 'Melakukan penambangan yang bertanggung jawab dengan komitmen reklamasi 100%.', icon: 'Leaf' },
          { title: 'Kebijakan K7', content: 'Keamanan, Ketertiban, Keindahan, Kebersihan, Kekeluargaan, Kerindangan, dan Kesehatan.', icon: 'Shield' }
        ]
      },
      legal: {
        title: 'Legalitas & Perizinan',
        subtitle: 'Entitas hukum yang terdaftar dan patuh pada regulasi Indonesia.',
        items: [
          { label: 'NIB (Nomor Induk Berusaha)', value: '812000xxxxxxx (Terverifikasi)' },
          { label: 'IUP (Izin Usaha Pertambangan)', value: 'OP No. 503/xxxx (Aktif)' },
          { label: 'Domisili Perusahaan', value: 'Manado & Kotamobagu' },
          { label: 'Status Pajak', value: 'PKP (Pengusaha Kena Pajak) Aktif' }
        ]
      },
      safety: {
        title: 'KPI Keselamatan (K3)',
        content: 'Kami memantau setiap metrik keselamatan untuk memastikan lingkungan kerja risiko rendah.',
        kpis: [
          { label: 'Fatality Rate', value: '0%' },
          { label: 'Lost Time Injury (LTI)', value: '0' },
          { label: 'Safety Induction', value: '100%' }
        ]
      },
      environmental: {
        title: 'Metrik Lingkungan',
        content: 'Data operasional terkait pelestarian alam di area Ratatotok.',
        metrics: [
          { label: 'Area Reklamasi', value: 'Target 1:1' },
          { label: 'Pengelolaan Limbah', value: 'Zero Waste Policy' },
          { label: 'Kualitas Air', value: 'Sesuai Baku Mutu' }
        ]
      }
    },
    projectGallery: {
      title: 'Galeri Proyek & Operasional',
      subtitle: 'Tinjauan mendalam tentang fasilitas lapangan, infrastruktur distribusi, dan armada tambang kami.',
      images: [
        '/Foto webp/IMG_1135.webp',
        '/Foto webp/IMG_1136.webp',
        '/Foto webp/IMG_1138.webp',
        '/Foto webp/IMG_1139.webp',
        '/Foto webp/IMG_1141.webp',
        '/Foto webp/IMG_1142.webp',
        '/Foto webp/IMG_1144.webp',
        '/Foto webp/IMG_1146.webp',
        '/Foto webp/IMG_1148.webp',
        '/Foto webp/IMG_1149.webp',
        '/Foto webp/IMG_1154.webp',
        '/Foto webp/IMG_1156.webp',
        '/Foto webp/IMG_1160.webp',
        '/Foto webp/IMG_1162.webp',
        '/Foto webp/IMG_1163.webp',
        '/Foto webp/IMG_1165.webp',
        '/Foto webp/IMG_1167.webp',
        '/Foto webp/IMG_1170.webp',
        '/Foto webp/IMG_1172.webp',
        '/Foto webp/IMG_1176.webp',
        '/Foto webp/IMG_1180.webp',
        '/Foto webp/IMG_1186.webp',
        '/Foto webp/IMG_1200.webp',
        '/Foto webp/IMG_1212.webp',
        '/Foto webp/IMG_1216.webp',
        '/Foto webp/IMG_1221.webp',
        '/Foto webp/IMG_1224.webp'
      ]
    },
    advancedSustainability: {
      hero: {
        title: 'Komitmen Masa Depan',
        subtitle: 'Sustainabilty & ESG Framework',
        description: 'Membangun warisan positif melalui pertambangan yang bertanggung jawab, pemulihan ekosistem, dan pemberdayaan masyarakat lokal.',
        image: '/Foto webp/IMG_1135.webp'
      },
      environment: {
        title: 'Manajemen Lingkungan',
        description: 'Kami menerapkan standar ketat untuk meminimalkan dampak operasional terhadap ekosistem sekitar melalui pemantauan kualitas air, udara, dan keanekaragaman hayati secara berkala.',
        image: '/Foto webp/IMG_1138.webp',
        metrics: [
          { label: 'Kualitas Air', value: '100% Baku Mutu', icon: 'Activity' },
          { label: 'Emisi Karbon', value: '-15% Efisiensi', icon: 'Zap' },
          { label: 'Energi Terbarukan', value: 'Solar Ready', icon: 'Sun' }
        ]
      },
      reclamation: {
        title: 'Strategi Reklamasi',
        subtitle: 'Restorasi Ekosistem Pasca Tambang',
        content: 'Program reklamasi kami bukan sekadar memenuhi regulasi, tetapi upaya aktif mengembalikan fungsi ekologis lahan tambang menjadi area hijau yang produktif.',
        steps: [
          { title: 'Penataan Lahan', desc: 'Rekontruksi topografi sesuai rencana tata ruang.', icon: 'Move' },
          { title: 'Penyebaran Top Soil', desc: 'Pemulihan lapisan tanah subur untuk vegetasi.', icon: 'Sprout' },
          { title: 'Revegetasi', desc: 'Penanaman bibit pohon endemik lokal secara masif.', icon: 'Trees' },
          { title: 'Pemeliharaan', desc: 'Monitoring berkala hingga ekosistem mandiri terbentuk.', icon: 'CheckCircle' }
        ]
      },
      community: {
        title: 'Pemberdayaan Masyarakat',
        subtitle: 'CSR & Dampak Sosial Positif',
        content: 'Kami tumbuh bersama masyarakat lokal melalui inisiatif pendidikan, kesehatan, dan pengembangan ekonomi kerakyatan di sekitar area operasional.',
        highlights: [
          { title: 'Pendidikan', desc: 'Beasiswa dan bantuan fasilitas sekolah lokal.', icon: 'GraduationCap' },
          { title: 'Kesehatan', desc: 'Layanan kesehatan gratis dan edukasi sanitasi.', icon: 'HeartPulse' },
          { title: 'Ekonomi', desc: 'Pendampingan UMKM dan penyerapan tenaga kerja lokal.', icon: 'TrendingUp' }
        ]
      },
      esg: {
        title: 'Kinerja ESG',
        subtitle: 'Environmental, Social, & Governance',
        metrics: [
          { label: 'Area Hijau', value: '97.05 Ha', trend: 'stable' },
          { label: 'Local Hiring', value: '85%', trend: 'up' },
          { label: 'Zero Accident', value: '100%', trend: 'stable' }
        ]
      },
      certifications: {
        title: 'Standar & Sertifikasi',
        items: [
          { name: 'ISO 14001:2015', issuer: 'Environmental Management', year: 'Target 2026' },
          { name: 'SMK3 Minerba', issuer: 'Kementerian ESDM', year: 'Active' },
          { name: 'UKL-UPL', issuer: 'Dinas Lingkungan Hidup', year: 'Active' }
        ]
      }
    }
  },
  en: {
    nav: {
      about: 'About Us',
      products: 'Products',
      catalog: 'Catalog',
      blog: 'Blog',
      qa: 'Quality',
      governance: 'Governance',
      contact: 'Contact Us',
    },
    hero: {
      badge: 'Mining, General Trading & Industrial Supplier',
      title: 'PT Wira Energi Utama',
      subtitle: '- Industrial Limestone & CaCO3 Supplier\n- Production 150,000 MT/month • Distribution via Bitung, Belang & Kotabunan Port\n- 250 TPH Crushing Plant',
      cta: 'Contact Us',
    },
    about: {
      title: 'About Us',
      vision: 'Vision',
      visionText: 'To be a leading global limestone/lime mining industry company that grows sustainably.',
      mission: 'Mission',
      missionItems: [
        'Cultivate a fast, productive, effective, and efficient culture.',
        'Prioritize health, safety, and environment in all actions.',
        'Maintain good mining corporate governance to increase local community trust.',
        'Provide a learning environment to achieve excellence and improve employee welfare.',
        'Prioritize environmentally friendly technology.',
        'Conduct proper greening reclamation in accordance with applicable regulations.',
      ],
    },
    advancedAbout: {
      hero: {
        title: 'Limestone & Minerals',
        subtitle: 'About PT Wira Energi Utama',
        description: 'To be the main pillar in providing high-quality industrial materials from North Sulawesi for national progress.',
        image: '/mining-bg.webp'
      },
      history: {
        title: 'Our History & Heritage',
        content: 'Founded with visionary management, PT Wira Energi Utama has transformed from a local Ratatotok mining operation into a strategic industrial player with a 250 TPH crushing plant and special jetty access.',
        image: '/Drone Webp/DJI_20260310143518_0298_D (1).webp',
        stats: [
          { label: 'Established', value: '2019' },
          { label: 'Monthly Capacity', value: '150k MT' },
          { label: 'Area Size', value: '97 Ha' }
        ]
      },
      values: {
        title: 'Our Corporate Values',
        subtitle: 'Integrity • Innovation • Sustainability',
        items: [
          { title: 'Integrity', desc: 'Conducting mining with full transparency and strict legal compliance.', icon: 'ShieldCheck' },
          { title: 'Innovation', desc: 'Adopting the latest mineral processing technology for maximum efficiency.', icon: 'Zap' },
          { title: 'Community', desc: 'Empowering the local Ratatotok workforce as our top development priority.', icon: 'Users' }
        ]
      },
      leadership: {
        title: 'Our Leadership',
        content: 'Guided by technical expertise and business integrity to ensure operational sustainability.',
        image: '/Drone Webp/DJI_20260310143640_0300_D (1).webp'
      },
      sustainability: {
        title: 'Ecological Commitment',
        content: 'We are fully committed to post-mining reclamation and reforestation of operational areas.',
        initiatives: ['Sustainable Reclamation', 'Waste Management', 'Water Conservation']
      },
      safety: {
        title: 'Occupational Safety',
        content: 'Safety without compromise through world-class industry K3 (Health and Safety) standards.',
        certifications: ['ISO 45001', 'Mining K3', 'Zero Accident Policy']
      },
      assets: {
        title: 'Facilities & Assets',
        items: [
          { name: 'Crushing Plant', value: '250 TPH', icon: 'Settings' },
          { name: 'Special Port', value: '3 Jetty', icon: 'Ship' },
          { name: 'Logistics Fleet', value: '15+ Units', icon: 'Truck' }
        ]
      },
      future: {
        title: 'Future Vision',
        content: 'To be the Calcium Carbonate market leader in Southeast Asia by 2030.',
        targets: ['Capacity Expansion', 'Nano PCC', 'Net Zero Carbon']
      },
      gallery: {
        title: 'Real Work Vision',
        subtitle: 'Aerial operational documentation showing the scale and precision of our mining.',
        images: [
          '/Drone Webp/DJI_20260225092843_0288_D (1).webp',
          '/Drone Webp/DJI_20260310143518_0298_D (1).webp',
          '/Drone Webp/DJI_20260310143640_0300_D (1).webp',
          '/Drone Webp/DJI_20260310143758_0302_D (1).webp',
          '/Drone Webp/DJI_20260310144034_0308_D (1).webp',
          '/Drone Webp/DJI_20260310144136_0309_D (1).webp',
          '/Drone Webp/DJI_20260310144303_0310_D (1).webp'
        ]
      }
    },
    advancedCatalog: {
      hero: {
        title: 'Technical Product Catalog',
        description: 'The most complete material specifications for precision industry needs.',
        image: '/mining-bg.webp'
      },
      categories: [
        {
          title: 'Smelter & Metal Industry',
          description: 'High-purity flux materials for smelters.',
          items: [
            { id: 'limestone', name: 'Limestone Lumpy', specs: 'CaO > 55%, 40-150mm', tags: ['Smelter', 'Flux'], image: '/products/limestone-lumpy.png', details: ['High Calcium Content', 'Consistent Size Range', 'Low Silicate'] },
            { id: 'burnLime', name: 'Quicklime', specs: 'Active CaO > 90%', tags: ['Steel', 'Chemical'], image: '/products/burn-lime.png', details: ['Fast Reactivity', 'High Purity', 'Moisture Controlled'] }
          ]
        },
        {
          title: 'Construction & Infrastructure',
          description: 'SNI standard aggregates for maximum durability.',
          items: [
            { id: 'agregat', name: 'Concrete Aggregate', specs: 'SNI 1750 Compliant', tags: ['Infrastruktur', 'Beton'], image: '/products/agregat-beton.png', details: ['Cubical Shape', 'Clean Surfaces', 'Vibrated Material'] }
          ]
        },
        {
          title: 'Calcium Carbonate (CaCO3)',
          description: 'Mineral powder for paper, plastic, and chemical industries.',
          items: [
            { id: 'caco3', name: 'CaCO3 Powder', specs: 'D97 < 10 micron', tags: ['Plastic', 'Paper'], image: '/products/tepung-caco3.png', details: ['Ultra Fine Grinding', 'High Whiteness', 'Strict PSD Control'] },
            { id: 'pcc', name: 'Nano PCC', specs: 'Purity > 99%', tags: ['Pharma', 'Paint'], image: '/products/pcc-nanoscale.png', details: ['Precipitated Tech', 'Nano Particle Size', 'Pharma Grade'] }
          ]
        }
      ],
      industrial: {
        title: 'Material Applications',
        items: [
          { name: 'Steel Making', usage: 'Phosphorus & sulfur impurity removal', icon: 'Flame' },
          { name: 'Water Treatment', usage: 'pH adjustment & coagulation', icon: 'Droplets' },
          { name: 'Paper & Plastic', usage: 'High-quality filler material', icon: 'Layers' },
          { name: 'Split Stone (Aggregate)', usage: 'Building materials, size 1.2 - 2.3 cm', icon: 'Construction' },
          { name: 'Coal Power Plant (PLTU)', usage: 'Flue gas desulfurization, size > 3 cm', icon: 'Zap' },
          { name: 'Cement Industry', usage: 'Raw material for high-purity cement clinker', icon: 'Factory' },
          { name: 'Agriculture & Aquaculture', usage: 'Soil and water pH neutralization', icon: 'Sprout' },
          { name: 'Glass Manufacturing', usage: 'Fluxing agent for pure glass melting', icon: 'Beaker' },
          { name: 'Metal Smelting', usage: 'Fluxing media for efficient slag separation', icon: 'Microscope' }
        ]
      },
      download: {
        title: 'Technical Documentation',
        description: 'Download our complete catalog in PDF format for detailed specifications at your fingertips.',
        button: 'Download Catalog (PDF)',
        fileSize: '4.8 MB',
        version: 'v2.4 (Mar 2026)'
      },
      documentation: {
        title: 'Technical Documentation (Photo)',
        subtitle: 'Visual proof of quality from our laboratory and crushing plant facilities.',
        images: [
          '/Drone Webp/DJI_20260310143758_0302_D (1).webp',
          '/Drone Webp/DJI_20260310144034_0308_D (1).webp',
          '/Foto webp/IMG_1138.webp',
          '/Foto webp/IMG_1139.webp',
          '/Foto webp/IMG_1141.webp',
          '/Foto webp/IMG_1142.webp'
        ]
      }
    },
    advancedBlog: {
      hero: {
        title: 'Wira Energi News',
        subtitle: 'Industry Insights & Company Updates'
      },
      posts: [
        {
          id: '1',
          title: 'The Role of Limestone in National Steel Industry',
          excerpt: 'High purity limestone is crucial as a fluxing agent to remove impurities in steelmaking...',
          date: 'March 15, 2024',
          category: 'Industry',
          image: '/blog/steel.webp'
        },
        {
          id: '2',
          title: 'Our Commitment to Sustainable Reclamation',
          excerpt: 'A closer look at how PT WEU restores the local ecosystem after mining activities are completed.',
          date: 'March 10, 2024',
          category: 'Environment',
          image: '/blog/reclamation.webp'
        },
        {
          id: '3',
          title: 'Latest Crushing Technology Innovation in Ratatotok',
          excerpt: 'Increasing production capacity up to 250 tons per hour with the latest automation system.',
          date: 'March 5, 2024',
          category: 'Technology',
          image: '/blog/tech.webp'
        },
        {
          id: '4',
          title: 'Optimizing Steel Smelting with High-Purity Limestone',
          excerpt: 'High CaO limestone plays a crucial role as a fluxing agent to remove impurities in modern steelmaking.',
          date: 'March 20, 2024',
          category: 'Industry',
          image: '/blog/steel_advanced.png'
        },
        {
          id: '5',
          title: 'Infrastructure Durability: The Role of SNI Standard Calcium Carbonate',
          excerpt: 'Why high-quality concrete aggregates and calcium powder are key to the strength of Indonesia’s national strategic projects.',
          date: 'March 22, 2024',
          category: 'Technology',
          image: '/blog/infrastructure_durability.png'
        },
        {
          id: '6',
          title: 'Ethical Mining Practices & Positive Impact for the Ratatotok Community',
          excerpt: 'PT WEU is committed to local labor empowerment and social responsibility as the foundation of operational sustainability.',
          date: 'March 25, 2024',
          category: 'Social',
          image: '/blog/ethical_community.png'
        },
        {
          id: '7',
          title: 'The Future of Nano-PCC in Pharmaceutical and Specialty Chemicals',
          excerpt: 'Exploring the potential of nano-scale Precipitated Calcium Carbonate for high-value applications in the global market.',
          date: 'March 28, 2024',
          category: 'Innovation',
          image: '/Gemini_Generated_Image_5gf0lo5gf0lo5gf0.webp'
        }
      ]
    },
    advancedContact: {
      hero: {
        title: 'Contact Our Team',
        subtitle: 'We are ready to assist your industrial mineral needs with the right solutions.'
      },
      offices: [
        {
          title: 'Manado Office (Main)',
          address: 'Taman Sari Cluster Lihaga, Blok H3-3 Kelurahan Paniki Bawah, Manado - North Sulawesi 95256 Indonesia',
          mapUrl: 'https://goo.gl/maps/placeholder-manado',
          image: '/office-manado.webp',
          email: 'contact@wiraenergiutama.com',
          phone: '(0431) 812345'
        },
        {
          title: 'Kotamobagu Office',
          address: 'Jl. S.Parman No. 741B Kotamobagu - North Sulawesi 95711 Indonesia',
          mapUrl: 'https://goo.gl/maps/placeholder-kota',
          image: '/office-kota.webp',
          email: 'wiraenergiutama@yahoo.com',
          phone: '(0434) 260 3008'
        }
      ],
      faq: {
        title: 'Service Related FAQ',
        items: [
          { q: 'How to request a price quote?', a: 'You can send your requirement specifications via the form below or contact our sales email directly at contact@wiraenergiutama.com.' },
          { q: 'Is shipping available outside the island?', a: 'Yes, through our private jetty, PT WEU serves shipping via barge to all regions of Indonesia.' },
          { q: 'What is the minimum order quantity (MOQ)?', a: 'MOQ depends on the product type. For domestic sea shipping, it starts from 1 barge capacity (7,500 - 10,000 MT), while land-based pickup can be adjusted.' },
          { q: 'What is the procedure for obtaining limestone samples?', a: 'Samples for industrial laboratory testing can be requested through our Quality Control department with a company profile attached.' },
          { q: 'Does PT WEU allow mine survey visits?', a: 'Field visits are permitted for potential business partners with at least 7 working days coordination to ensure safety (K3) standards are met.' },
          { q: 'What type of fleet is used for distribution?', a: 'We operate our own Isuzu Giga dump truck fleet for land distribution and partner with trusted shipping lines for sea distribution.' }
        ]
      }
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 2024',
      sections: [
        {
          title: '1. Information Collection',
          content: 'We collect information you provide directly to us through contact forms, including name, email address, and company name to respond to your business inquiries.'
        },
        {
          title: '2. Data Usage',
          content: 'Collected data is only used for official business communication purposes, service improvement, and fulfilling obligations according to Indonesian mining law.'
        },
        {
          title: '3. Information Security',
          content: 'We implement technological security measures to protect your data from unauthorized access or misuse.'
        }
      ]
    },
    footer: {
      rights: 'All Rights Reserved.',
      links: [
        { label: 'Governance', href: '/governansi-standar' },
        { label: 'Privacy', href: '/privacy' }
      ]
    },
    advancedGovernance: {
      hero: {
        title: 'Governance & Operational Standards',
        subtitle: 'Integrity through Uncompromising Compliance and Safety.',
        description: 'PT Wira Energi Utama upholds international standards in every aspect of mining operations, ensuring sustainable quality for partner satisfaction and environmental preservation.',
        image: '/mining-bg.webp'
      },
      roadmap: {
        title: 'ISO Certification Roadmap',
        subtitle: 'Our commitment toward high-level global standardization.',
        steps: [
          { title: 'Preparation & Gap Analysis', desc: 'In-depth review of internal SOPs and alignment with ISO standards.', status: 'completed' },
          { title: 'IMS Implementation', desc: 'Application of ISO protocols across all mining and office operational lines.', status: 'in-progress' },
          { title: 'Internal Audit & Review', desc: 'System compliance validation before formal external audits.', status: 'planned' },
          { title: 'Final Certification', desc: 'Final audit and issuance of official ISO certificates.', status: 'planned' }
        ]
      },
      standards: {
        title: 'Standard Framework',
        subtitle: 'Quality pillars we operate by every day.',
        items: [
          { id: 'ISO 9001:2015', title: 'Quality Management', desc: 'Ensuring consistency in mineral quality and supply chain efficiency.', status: 'Candidate' },
          { id: 'ISO 14001:2015', title: 'Environmental Management', desc: 'Minimizing ecological footprint through progressive reclamation.', status: 'Candidate' },
          { id: 'ISO 45001:2018', title: 'Health & Safety', desc: 'Global standards for labor protection in mining areas.', status: 'Implementation' },
          { id: 'SMK3', title: 'National OHS', desc: 'Occupational Health and Safety Management System per RI regulations.', status: 'Certified' }
        ]
      },
      policies: {
        title: 'Corporate Policies',
        items: [
          { title: 'Quality Policy', content: 'Delivering high-purity mineral products transparently and on time.', icon: 'Award' },
          { title: 'Environmental Policy', content: 'Conducting responsible mining with 100% reclamation commitment.', icon: 'Leaf' },
          { title: 'HSE Culture', content: 'Health, Safety, and Environment prioritized across all logistics and production.', icon: 'Shield' }
        ]
      },
      legal: {
        title: 'Legalities & Licensing',
        subtitle: 'A legally registered entity compliant with Indonesian regulations.',
        items: [
          { label: 'NIB (Business ID)', value: '812000xxxxxxx (Verified)' },
          { label: 'IUP (Mining License)', value: 'OP No. 503/xxxx (Active)' },
          { label: 'Domicile', value: 'Manado & Kotamobagu' },
          { label: 'Tax Status', value: 'PKP (Taxable Entrepreneur) Active' }
        ]
      },
      safety: {
        title: 'Safety KPIs (OHS)',
        content: 'We monitor every safety metric to ensure a low-risk working environment.',
        kpis: [
          { label: 'Fatality Rate', value: '0%' },
          { label: 'Lost Time Injury (LTI)', value: '0' },
          { label: 'Safety Induction', value: '100%' }
        ]
      },
      environmental: {
        title: 'Environmental Metrics',
        content: 'Operational data related to natural preservation in the Ratatotok area.',
        metrics: [
          { label: 'Reclamation Area', value: 'Target 1:1' },
          { label: 'Waste Management', value: 'Zero Waste Policy' },
          { label: 'Water Quality', value: 'Meets Standards' }
        ]
      }
    },
    projectGallery: {
      title: 'Project & Operational Gallery',
      subtitle: 'An in-depth look at our field facilities, distribution infrastructure, and mining fleet.',
      images: [
        '/Foto webp/IMG_1135.webp',
        '/Foto webp/IMG_1136.webp',
        '/Foto webp/IMG_1138.webp',
        '/Foto webp/IMG_1139.webp',
        '/Foto webp/IMG_1141.webp',
        '/Foto webp/IMG_1142.webp',
        '/Foto webp/IMG_1144.webp',
        '/Foto webp/IMG_1146.webp',
        '/Foto webp/IMG_1148.webp',
        '/Foto webp/IMG_1149.webp',
        '/Foto webp/IMG_1154.webp',
        '/Foto webp/IMG_1156.webp',
        '/Foto webp/IMG_1160.webp',
        '/Foto webp/IMG_1162.webp',
        '/Foto webp/IMG_1163.webp',
        '/Foto webp/IMG_1165.webp',
        '/Foto webp/IMG_1167.webp',
        '/Foto webp/IMG_1170.webp',
        '/Foto webp/IMG_1172.webp',
        '/Foto webp/IMG_1176.webp',
        '/Foto webp/IMG_1180.webp',
        '/Foto webp/IMG_1186.webp',
        '/Foto webp/IMG_1200.webp',
        '/Foto webp/IMG_1212.webp',
        '/Foto webp/IMG_1216.webp',
        '/Foto webp/IMG_1221.webp',
        '/Foto webp/IMG_1224.webp'
      ]
    },
    advancedSustainability: {
      hero: {
        title: 'Future Commitment',
        subtitle: 'Sustainability & ESG Framework',
        description: 'Building a positive legacy through responsible mining, ecosystem restoration, and local community empowerment.',
        image: '/Foto webp/IMG_1135.webp'
      },
      environment: {
        title: 'Environmental Management',
        description: 'We implement strict standards to minimize operational impacts on surrounding ecosystems through regular monitoring of water, air quality, and biodiversity.',
        image: '/Foto webp/IMG_1138.webp',
        metrics: [
          { label: 'Water Quality', value: '100% Compliance', icon: 'Activity' },
          { label: 'Carbon Emission', value: '-15% Efficiency', icon: 'Zap' },
          { label: 'Renewable Energy', value: 'Solar Ready', icon: 'Sun' }
        ]
      },
      reclamation: {
        title: 'Reclamation Strategy',
        subtitle: 'Post-Mining Ecosystem Restoration',
        content: 'Our reclamation program is not just about meeting regulations, but an active effort to restore the ecological function of mining lands into productive green areas.',
        steps: [
          { title: 'Land Contour', desc: 'Topographic reconstruction according to spatial plans.', icon: 'Move' },
          { title: 'Top Soil Spreading', desc: 'Restoring fertile soil layers for vegetation.', icon: 'Sprout' },
          { title: 'Revegetation', desc: 'Massive planting of local endemic tree seedlings.', icon: 'Trees' },
          { title: 'Maintenance', desc: 'Regular monitoring until a self-sustaining ecosystem is formed.', icon: 'CheckCircle' }
        ]
      },
      community: {
        title: 'Community Empowerment',
        subtitle: 'CSR & Positive Social Impact',
        content: 'We grow together with local communities through initiatives in education, health, and local economic development around the operational areas.',
        highlights: [
          { title: 'Education', desc: 'Scholarships and assistance for local school facilities.', icon: 'GraduationCap' },
          { title: 'Health', desc: 'Free healthcare services and sanitation education.', icon: 'HeartPulse' },
          { title: 'Economy', desc: 'SME mentoring and local labor absorption.', icon: 'TrendingUp' }
        ]
      },
      esg: {
        title: 'ESG Performance',
        subtitle: 'Environmental, Social, & Governance',
        metrics: [
          { label: 'Green Area', value: '97.05 Ha', trend: 'stable' },
          { label: 'Local Hiring', value: '85%', trend: 'up' },
          { label: 'Zero Accident', value: '100%', trend: 'stable' }
        ]
      },
      certifications: {
        title: 'Standards & Certifications',
        items: [
          { name: 'ISO 14001:2015', issuer: 'Environmental Management', year: 'Target 2026' },
          { name: 'SMK3 Minerba', issuer: 'ESDM Ministry', year: 'Active' },
          { name: 'UKL-UPL', issuer: 'Environmental Agency', year: 'Active' }
        ]
      }
    }
  }
};
