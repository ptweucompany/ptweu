import { Translation } from './types';

export const translations: Record<'id' | 'en', Translation> = {
  id: {
    nav: {
      about: 'Tentang Kami',
      products: 'Produk',
      catalog: 'Katalog',
      blog: 'Blog',
      qa: 'Kualitas',
      contact: 'Hubungi Kami',
    },
    hero: {
      title: 'PT Wira Energi Utama',
      subtitle: 'General Trade, Mining & Supplier.',
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
      phone: '0434 260 3008',
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
      }
    },
    advancedAbout: {
      hero: {
        title: 'Membangun Masa Depan Berkelanjutan',
        subtitle: 'PT Wira Energi Utama',
        description: 'Kami adalah pemimpin dalam industri pertambangan batu kapur yang berkomitmen pada inovasi, keselamatan, dan keberlanjutan lingkungan di setiap operasional kami di Sulawesi Utara.',
        image: '/about-hero.webp'
      },
      history: {
        title: 'Sejarah & Warisan Kami',
        content: 'Didirikan pada tahun 2019, PT Wira Energi Utama telah bertransformasi dari operasi tambang lokal di Ratatotok menjadi penyedia mineral industri terintegrasi yang melayani pasar nasional dan regional. Dengan cadangan mineral yang melimpah dan tim yang berdedikasi, kami terus membangun fondasi yang kuat bagi kemajuan industri Indonesia.',
        image: '/history.webp',
        stats: [
          { label: 'Tahun Pendirian', value: '2019' },
          { label: 'Total Hektar', value: '97.05' },
          { label: 'Kapasitas Crusher', value: '250 TPH' }
        ]
      },
      values: {
        title: 'Nilai-Nilai Inti Kami',
        subtitle: 'Prinsip yang membimbing setiap langkah kami menuju keunggulan.',
        items: [
          { title: 'Integritas', desc: 'Menjalankan bisnis dengan transparansi penuh dan standar etika tertinggi.', icon: 'Shield' },
          { title: 'Inovasi', desc: 'Terus mengadopsi teknologi terbaru untuk efisiensi dan keamanan maksimal.', icon: 'Zap' },
          { title: 'Keamanan', desc: 'Nol kecelakaan adalah prioritas utama bagi seluruh tim operasional kami.', icon: 'ShieldCheck' }
        ]
      },
      leadership: {
        title: 'Kepemimpinan Strategis',
        content: 'Dipandu oleh dewan direksi yang memiliki pengalaman puluhan tahun di industri sumber daya alam, kami menggabungkan visi strategis dengan eksekusi operasional yang presisi.',
        image: '/leadership.webp'
      },
      sustainability: {
        title: 'Komitmen Hijau',
        content: 'Kami percaya bahwa pertambangan dapat berjalan selaras dengan alam. Program reklamasi progresif kami memastikan setiap lahan yang selesai ditambang akan dikembalikan ke kondisi ekosistem yang produktif.',
        initiatives: ['Sistem Sirkulasi Air Tertutup', 'Filtrasi Debu Multi-tahap', 'Penghijauan Padat Vegetasi']
      },
      safety: {
        title: 'Kesehatan & Keselamatan Kerja',
        content: 'Budaya keselamatan kami melampaui kepatuhan administratif. Setiap karyawan memiliki hak dan kewajiban untuk memastikan lingkungan kerja tetap aman bagi semua.',
        certifications: ['Sertifikasi SMK3', 'Standar APD Lengkap', 'Audit Keselamatan Berkala']
      },
      assets: {
        title: 'Aset Strategis',
        items: [
          { name: 'Dermaga Pribadi (Jetty)', value: 'Draft 12m', icon: 'Ship' },
          { name: 'Crushing Plant', value: 'Otomatisasi Penuh', icon: 'Settings' },
          { name: 'Armada Logistik', value: 'Isuzu Giga Series', icon: 'Truck' }
        ]
      },
      future: {
        title: 'Visi 2030',
        content: 'Kami sedang mempersiapkan ekspansi besar-besaran untuk menjadi pusat mineral industri terlengkap di Asia Tenggara Selatan.',
        targets: ['Digitalisasi Tambang 4.0', 'Kapasitas Ekspor Global', 'Nol Emisi Karbon']
      }
    },
    advancedCatalog: {
      hero: {
        title: 'Katalog Produk Premium',
        description: 'Jelajahi portofolio mineral industri berkualitas tinggi yang dirancang untuk performa maksimun di berbagai sektor industri.',
        image: '/catalog-hero.webp'
      },
      categories: [
        {
          title: 'Batuan & Agregat',
          description: 'Material dasar untuk konstruksi dan infrastruktur.',
          items: [
            { name: 'Limestone Lumpy', specs: '10-80mm, CaO >55%', tags: ['Fluxing', 'Construction'] },
            { name: 'Agregat Beton', specs: 'Sesuai SNI', tags: ['Paving', 'Infrastruktur'] }
          ]
        },
        {
          title: 'Bubuk Kalsium',
          description: 'Kalsium karbonat halus untuk filler dan reaktan.',
          items: [
            { name: 'Tepung CaCO3', specs: '325-2500 Mesh', tags: ['Paint', 'Plastic', 'Rubber'] },
            { name: 'PCC Nanoscale', specs: 'High Purity', tags: ['Pharma', 'Paper'] }
          ]
        }
      ],
      download: {
        title: 'Dokumentasi Teknis',
        description: 'Unduh katalog lengkap kami dalam format PDF untuk akses spesifikasi terperinci di perangkat Anda.',
        button: 'UNDUH KATALOG (PDF)'
      },
      industrial: {
        title: 'Aplikasi Lintas Sektor',
        items: [
          { name: 'Industri Baja', usage: 'Fluxing agent utama', icon: 'Factory' },
          { name: 'Pengolahan Air', usage: 'Penyesuaian pH & Purifikasi', icon: 'Droplets' },
          { name: 'Agrikultur', usage: 'Pembenah tanah & penetral asam', icon: 'Sprout' }
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
          email: 'contact@ptweu.company',
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
          { q: 'Bagaimana cara meminta penawaran harga?', a: 'Anda dapat mengirimkan spesifikasi kebutuhan melalui formulir di bawah atau langsung menghubungi email sales kami.' },
          { q: 'Apakah tersedia pengiriman ke luar pulau?', a: 'Ya, melalui dermaga pribadi kami, kami melayani pengiriman via tongkang ke seluruh wilayah Indonesia.' }
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
      rights: 'Hak Cipta Terpelihara.',
      links: [
        { label: 'Tentang', href: '/about' },
        { label: 'Produk', href: '/products' },
        { label: 'Privasi', href: '/privacy' }
      ]
    },
  },
  en: {
    nav: {
      about: 'About Us',
      products: 'Products',
      catalog: 'Catalog',
      blog: 'Blog',
      qa: 'Quality',
      contact: 'Contact Us',
    },
    hero: {
      title: 'PT Wira Energi Utama',
      subtitle: 'Leading Global Limestone & Lime Mining Industry.',
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
    products: {
      title: 'Our Featured Products',
      subtitle: 'Providing various types of high-quality limestone derivative products.',
      items: [
        { name: 'Limestone', desc: 'Main raw material for various industries.' },
        { name: 'CaCO3 (All Sizes)', desc: 'Calcium Carbonate with various size specifications.' },
        { name: 'Burn Lime (CaO)', desc: 'Quicklime produced from limestone calcination.' },
        { name: 'Hydrated Lime (Ca(OH)2)', desc: 'Calcium Hydroxide for industrial and water treatment applications.' },
        { name: 'PCC (Precipitated Calcium Carbonate)', desc: 'High purity precipitated calcium carbonate.' },
      ],
    },
    qa: {
      title: 'Quality Assurance',
      text: 'Our products have undergone rigorous testing in accredited laboratories to ensure the highest quality standards.',
      labs: ['Minertech', 'Intertek', 'Sucofindo', 'Public Works & Spatial Planning Department'],
    },
    legal: {
      title: 'Legality & Formation',
      subtitle: 'Full compliance standards in operations and licensing.',
      iup: 'Production Operation IUP: 91201019114410010',
      validity: 'Valid since April 2024',
      legalities: [
        {
          title: 'Deed of Establishment & Amendment',
          desc: 'Deed of Establishment No. 1 (Sept 9, 2019) by Notary Salmiaty Hadjidjah Mutiara Mokoginta, SH. Deed of Amendment No. 01 (June 5, 2023) by Notary Moh. Rheza Awaluddin, S.H., M.Kn. Issued Capital: Rp 3,630,000,000.'
        },
        {
          title: 'Ministry of Law and Human Rights Decree',
          desc: 'Ratification No. AHU-0046475.AH.01.01.TAHUN 2019 and Amendment No. AHU-0031214.AH.01.02.TAHUN 2023.'
        },
        {
          title: 'Production Operation Mining License (IUP)',
          desc: 'License Number 91201019114410010, KBLI 08102 (Limestone Excavation), Area 97.05 Ha in Southeast Minahasa Regency.'
        },
        {
          title: 'Environmental Approval (UKL-UPL)',
          desc: 'Decree No. 503/DPMPTSPD/PPKPLH/880/X/2023 (Operation & facility area 10.3 Ha).'
        },
        {
          title: 'Marine PKKPR',
          desc: 'Approval for Pier Construction covering 2.12 Ha in the Maluku Sea (No: 03082310517100005).'
        },
        {
          title: 'Administrative Legality',
          desc: 'NPWP 92.853.784.4-821.000 and Certificate of Domicile in Ratatotok Satu Village.'
        }
      ]
    },
    location: {
      title: 'Strategic Location',
      subtitle: 'Located in the heart of North Sulawesi\'s limestone resources.',
      area: 'Total Area: 97.05 Hectares',
      coordinates: 'Ratatotok District, Southeast Minahasa',
    },
    infrastructure: {
      title: 'Infrastructure & Facilities',
      subtitle: 'Supported by modern processing and logistics facilities.',
      jetty: 'Specialized Jetty for efficient maritime distribution.',
      crusher: 'Crushing Plant with a capacity of 250 Tons Per Hour (TPH).',
    },
    stats: {
      title: 'Production Capacity',
      subtitle: 'Annual production targets based on the company\'s work plan.',
      unit: 'Tons / Year',
    },
    fleet: {
      title: 'Fleet & Heavy Equipment',
      subtitle: 'Utilizing world-class industrial equipment for maximum efficiency.',
      items: [
        { name: 'Excavator', brand: 'Komatsu' },
        { name: 'Dump Truck', brand: 'Isuzu' },
        { name: 'Wheel Loader', brand: 'Komatsu' },
        { name: 'Crushing Plant', brand: 'Custom 250 TPH' },
      ],
    },
    environment: {
      title: 'Environmental Commitment',
      subtitle: 'Responsible and sustainable mining.',
      text: 'We are committed to post-mining greening reclamation and reforestation in accordance with applicable environmental regulations.',
    },
    gallery: {
      title: 'Project Gallery',
      subtitle: 'Operational documentation and facilities at the mining site.',
    },
    profile: {
      link: 'Company Profile',
      download: 'Download Profile (PDF)',
    },
    market: {
      title: 'Market Presence',
      subtitle: 'Serving various strategic industries across Indonesia.',
      industries: [
        { name: 'Smelter & Metals', icon: 'Factory' },
        { name: 'Construction & Infrastructure', icon: 'Building' },
        { name: 'Agriculture & Fertilizer', icon: 'Sprout' },
        { name: 'Chemical Industry', icon: 'FlaskConical' },
      ],
    },
    logistics: {
      title: 'Efficient Supply Chain',
      subtitle: 'Timely distribution through land and sea routes.',
      text: 'With the support of a specialized jetty and internal logistics fleet, we guarantee smooth product delivery to customer locations with maximum efficiency.',
    },
    safety: {
      title: 'Occupational Safety (HSE)',
      subtitle: 'Uncompromising commitment to employee safety.',
      points: [
        'Zero Accident target in every operational area.',
        'Routine HSE training for all staff and operators.',
        'Complete PPE standards and safe work procedures.',
        'Periodic health monitoring for mining workers.',
      ],
    },
    csr: {
      title: 'Social Impact & CSR',
      subtitle: 'Growing together with the local Ratatotok community.',
      text: 'We prioritize local labor absorption and actively contribute to infrastructure development and economic empowerment of villages around the mine.',
    },
    innovation: {
      title: 'Mining Innovation',
      subtitle: 'Adopting modern technology for high efficiency.',
      text: 'The use of digital monitoring systems and the latest crushing plant technology ensures consistent product quality and environmentally friendly operations.',
    },
    partners: {
      title: 'Strategic Partners',
      subtitle: 'Trusted by leading industrial companies.',
    },
    vision: {
      title: 'Future Vision',
      subtitle: 'Becoming the leading limestone industry leader in Southeast Asia.',
      text: 'We continue to expand capacity and improve quality standards to meet the ever-evolving needs of the global market.',
    },
    process: {
      title: 'Mining Process',
      subtitle: 'Systematic workflow for optimal results.',
      steps: [
        { title: 'Exploration', desc: 'Geological mapping and sample drilling to determine reserve quality.' },
        { title: 'Land Clearing', desc: 'Responsible clearing of vegetation and topsoil.' },
        { title: 'Drilling & Blasting', desc: 'Precision blasting techniques to minimize environmental impact.' },
        { title: 'Loading & Hauling', desc: 'Moving material using modern heavy equipment to the processing area.' },
        { title: 'Crushing', desc: 'Size reduction process according to customer request specifications.' },
      ],
    },
    geology: {
      title: 'Geological Advantage',
      subtitle: 'High-purity limestone resources.',
      text: 'The limestone deposits in our operational area have very high Calcium Oxide (CaO) content (>55%) with very low impurity content.',
    },
    economic: {
      title: 'Economic Benefits',
      subtitle: 'Significant added value for our business partners.',
      points: [
        { title: 'Cost Efficiency', desc: 'Competitive prices with premium quality increase customer profit margins.' },
        { title: 'Stable Supply', desc: 'Abundant reserves guarantee long-term supply sustainability.' },
        { title: 'Integrated Logistics', desc: 'Direct access to the sea significantly reduces distribution costs.' },
      ],
    },
    benefits: {
      title: 'Benefits of Our Products',
      subtitle: 'Why choose PT WEU limestone?',
      items: [
        'Very high chemical reactivity.',
        'Consistent and precise grain size.',
        'Very low magnesium and silica content.',
        'Optimal physical durability for construction.',
      ],
    },
    resources: {
      title: 'Resource Estimation',
      subtitle: 'Large and sustainable reserve potential.',
      text: 'Based on the latest geological survey, our 97.05 Ha IUP area holds millions of tons of high-quality limestone reserves ready for mining.',
    },
    operational: {
      title: 'Operational Excellence',
      subtitle: 'Large production capacity with strict quality control.',
      stats: [
        { label: 'Crusher Capacity', value: '250 TPH' },
        { label: 'Operational Hours', value: '24/7' },
        { label: 'Machine Uptime', value: '98%' },
        { label: 'Quality Control', value: 'Every Hour' },
      ],
    },
    qc: {
      title: 'Strict Quality Control',
      subtitle: 'Ensuring every grain meets the standard.',
      text: 'Our internal laboratory performs sample testing every operational hour to ensure consistency in chemical content and product size.',
    },
    investment: {
      title: 'Investment Value',
      subtitle: 'Legal and operational certainty for investors.',
      text: 'With complete IUP OP and professional management, we offer secure and profitable partnership opportunities.',
    },
    standards: {
      title: 'Standard Compliance',
      subtitle: 'Meeting national and international standards.',
      text: 'All our operational processes and products meet SNI standards and strict Indonesian mining regulations.',
    },
    applications: {
      title: 'Industrial Applications',
      subtitle: 'Versatile use of limestone.',
      items: [
        { title: 'Steel Smelting', desc: 'Used as a flux to remove impurities during the iron and steel making process.' },
        { title: 'Construction', desc: 'Key ingredient in cement, mortar, and road base stabilization.' },
        { title: 'Water Treatment', desc: 'Adjusts pH levels and removes heavy metals from industrial wastewater.' },
        { title: 'Agriculture', desc: 'Neutralizes soil acidity and provides essential calcium for crop growth.' },
      ],
    },
    qcWorkflow: {
      title: 'QC Workflow',
      subtitle: 'Precision in every production batch.',
      text: 'Our quality control system is integrated into every stage of the mining and processing workflow, ensuring that we deliver only the highest grade limestone to our partners.',
      steps: [
        { title: 'Sampling', desc: 'Representative samples collected from every 100 tons of production.' },
        { title: 'Chemical Analysis', desc: 'Chemical composition testing using XRF technology in our lab.' },
        { title: 'Verification', desc: 'Cross-checking results against customer specifications.' },
        { title: 'Certification', desc: 'Final quality report issued before product dispatch.' },
      ],
    },
    contact: {
      title: 'Contact Us',
      address: 'Ratatotok Morea Soyowan Street, Ratatotok Satu Village, Ratatotok District, Southeast Minahasa Regency, North Sulawesi - Indonesia.',
      phone: '0811-4344-168',
      email: 'wiraenergiutama@yahoo.com',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Your message has been sent. Thank you!',
      },
    },
    aboutDetails: {
      history: {
        title: 'Our History & Heritage',
        text: 'Founded with a commitment to being the primary energy in national development, PT Wira Energi Utama has evolved from a vision to optimize North Sulawesi\'s natural wealth into a globally integrated limestone provider. For over a decade, we have built a reputation for reliability, quality, and responsible mining practices in Ratatotok.',
      },
      values: [
        { title: 'Integrity', desc: 'Conducting business with the highest ethical standards and full transparency.' },
        { title: 'Innovation', desc: 'Continuously adopting the latest technology to improve efficiency and sustainability.' },
        { title: 'Partnership', desc: 'Building long-term, mutually beneficial relationships with customers and the community.' },
      ],
      team: {
        title: 'Our Leadership',
        text: 'Led by experienced professionals in the mining industry dedicated to operational excellence and safety.',
      },
      visionMission: {
        vision: {
          title: 'Our Vision',
          text: 'To be a leading global limestone/lime mining industry company that grows sustainably.'
        },
        mission: {
          title: 'Our Mission',
          items: [
            'Cultivate a fast, productive, effective, and efficient culture.',
            'Prioritize occupational health, safety, and environment in all actions.',
            'Maintain good mining corporate governance to increase the trust of the surrounding community in the company.',
            'Provide a learning environment to achieve excellence and improve employee welfare.',
            'Prioritize environmentally friendly technology.',
            'Conduct proper greening reclamation in accordance with applicable regulations.'
          ]
        }
      },
      sustainability: {
        title: 'Sustainability Commitment',
        text: 'We believe that mining must run in harmony with nature. Our proactive land reclamation program ensures that every mined-out area is returned to a productive green state.'
      },
      safety: {
        title: 'Health & Safety (K3)',
        text: 'Zero Accident is not just a target, it is our culture.',
        points: ['Standard Safety Gear', 'Regular Staff Training', 'Periodic Equipment Certification', 'External Safety Audits']
      },
      process: {
        title: 'The Mineral Journey',
        steps: [
          { title: 'Extraction', desc: 'Open-pit mining with controlled blasting methods.' },
          { title: 'Crushing', desc: 'Mineral size reduction using automated crusher technology.' },
          { title: 'Quality Control', desc: 'Laboratory testing to ensure mineral purity.' },
          { title: 'Distribution', desc: 'Efficient logistics via our own specialized jetty.' }
        ]
      },
      infrastructure: {
        title: 'Advanced Infrastructure',
        items: [
          { name: 'Private Jetty', desc: 'Deep-water port capable of accommodating large-capacity barges.' },
          { name: 'Crushing Plant', desc: 'Integrated processing system with high daily production capacity.' },
          { name: 'QC Laboratory', desc: 'Technical facilities for real-time mineral chemical analysis.' }
        ]
      },
      community: {
        title: 'Building with Ratatotok',
        text: 'PT WEU4 is not just a company; we are part of the North Sulawesi community. Through CSR programs, we support education, health, and local village infrastructure.'
      },
      quality: {
        title: 'Global Quality Standards',
        text: 'Our products meet international standards for use in the steel, cement, and high-reactivity chemical industries.'
      },
      industrial: {
        title: 'Pillar of National Industry',
        text: 'We are proud to be a major supplier for national strategic projects, supporting Indonesia\'s energy independence and industrial raw materials.'
      }
    },
    productExpansion: {
      supplyChain: {
        title: 'Supply Chain Flow',
        steps: [
          { title: 'Mine Extraction', desc: 'Raw material collection from the Ratatotok mining pit.' },
          { title: 'Custom Processing', desc: 'Mineral crushing and screening according to client technical specifications.' },
          { title: 'Integrated Logistics', desc: 'Loading onto barges via our private deep-water jetty.' },
          { title: 'On-Time Delivery', desc: 'Seamless global distribution to end-user factories.' }
        ]
      },
      qcLifecycle: {
        title: 'Quality Assurance Lifecycle',
        items: [
          'In-Pit Chemical Analysis',
          'Daily Laboratory Sample Testing',
          'Independent Third-Party Certification',
          'Pre-Loading Product Verification'
        ]
      },
      capabilities: {
        title: 'Operational Capabilities',
        text: 'Supported by modern infrastructure, we are able to meet large-scale demands consistently.',
        stats: [
          { label: 'Production Capacity', value: '150,000 MT/Month' },
          { label: 'Mining Area', value: '100+ Hectares' },
          { label: 'Jetty Draft', value: '12 Meters' }
        ]
      },
      industries: {
        title: 'Industries We Serve',
        list: [
          { name: 'Cement Industry', icon: 'Construction' },
          { name: 'Steel Sector', icon: 'Wrench' },
          { name: 'Power Plants (PLTU)', icon: 'Zap' },
          { name: 'Chemical Industry', icon: 'Beaker' },
          { name: 'Agriculture & Fertilizer', icon: 'Sprout' }
        ]
      },
      customSolutions: {
        title: 'Custom Mineral Solutions',
        text: 'We understand that every industry has unique requirements. Our technical team is ready to engineer grit size and chemical purity to meet your production targets.'
      },
      sustainability: {
        title: 'Eco-Friendly Production',
        text: 'Our crushing systems are equipped with advanced dust filters and closed-circuit water systems to minimize environmental impact during production.'
      },
      partnership: {
        title: 'How to Become Our Partner',
        steps: [
          { title: 'Technical Consultation', desc: 'Discuss the material specifications you need.' },
          { title: 'Sample Testing', desc: 'We send material samples for testing in your laboratory.' },
          { title: 'Contract Agreement', desc: 'Finalize volume, delivery schedule, and pricing.' },
          { title: 'Execution & Supply', desc: 'Sustainable mineral supply begins to your facility.' }
        ]
      }
    },
    productDetails: {
      specsTitle: 'Technical Specifications',
      limestone: {
        title: 'Limestone',
        fullDesc: 'Our limestone is known for its high CaO content and extraordinary reactivity. Suitable for the steel, chemical, and cement industries.',
        specs: ['CaO Content: > 55%', 'MgO: < 1.5%', 'Silica (SiO2): < 0.5%', 'Moisture: < 3%']
      },
      hydratedLime: {
        title: 'Hydrated Lime',
        fullDesc: 'Calcium Hydroxide from advanced processing for water purification, soil stabilization, and flue gas processing.',
        specs: ['Ca(OH)2 Content: > 92%', 'Fineness (passing 325 mesh): > 95%', 'Color: Pure White']
      },
      burnLime: {
        title: 'Burn Lime (CaO)',
        fullDesc: 'Produced through controlled calcination processes to produce quicklime with high thermal activity.',
        specs: ['Available CaO: > 90%', 'Size (Lumpy): 10-50mm', 'Reaction Temperature: > 60°C']
      }
    },
    productPages: {
      limestone: {
        hero: {
          title: 'Premium Limestone',
          subtitle: 'High-Purity from Ratatotok',
          description: 'Essential base material with superior Calcium Oxide (CaO) content for maximum industrial efficiency.',
          image: '/products/limestone.png'
        },
        stats: [
          { label: 'CaO Content', value: '> 55%', icon: 'ShieldCheck' },
          { label: 'Purity', value: 'High', icon: 'Star' },
          { label: 'Capacity', value: '250 TPH', icon: 'Zap' },
          { label: 'Stock', value: 'Ready', icon: 'Package' }
        ],
        overview: {
          title: 'Product Overview',
          content: 'Our Limestone is mined directly from the unique Ratatotok geological formation, producing limestone with high crystalline purity. This product is the primary choice for industries requiring high chemical reactivity and low contaminant levels.',
          features: [
            'CaO purity above industry average',
            'Extremely low silica and magnesium content',
            'Ideal physical durability for construction',
            'Customizable grain sizes'
          ]
        },
        specifications: {
          title: 'Chemical & Physical Analysis',
          table: [
            { label: 'Calcium Oxide (CaO)', value: '55.20%' },
            { label: 'Magnesium Oxide (MgO)', value: '0.80%' },
            { label: 'Silica (SiO2)', value: '0.35%' },
            { label: 'Iron Oxide (Fe2O3)', value: '0.12%' },
            { label: 'Alumina (Al2O3)', value: '0.15%' },
            { label: 'Loss on Ignition (LOI)', value: '43.30%' }
          ],
          chartData: [
            { name: 'CaO', value: 55.2, color: '#0F3460' },
            { name: 'LOI', value: 43.3, color: '#E94560' },
            { name: 'Others', value: 1.5, color: '#FFD700' }
          ]
        },
        applications: {
          title: 'Solutions for Various Industries',
          items: [
            { title: 'Steel Smelting', desc: 'As a flux to separate impurities from molten metal.', icon: 'Factory' },
            { title: 'Cement Industry', desc: 'Primary raw material for high-quality clinker production.', icon: 'Building' },
            { title: 'Construction', desc: 'Coarse aggregate for concrete and soil stabilization.', icon: 'Construction' },
            { title: 'Water Treatment', desc: 'Neutralizing pH levels in industrial wastewater.', icon: 'Droplets' }
          ]
        },
        process: {
          title: 'Modern Production Workflow',
          steps: [
            { title: 'Controlled Extraction', desc: 'Mining with environmentally friendly methods to preserve mineral structure.' },
            { title: 'Primary Crushing', desc: 'Initial size reduction using large-capacity jaw crushers.' },
            { title: 'Sieving & Sorting', desc: 'Separation by mesh size according to customer requirements.' },
            { title: 'Quality Validation', desc: 'Per-batch laboratory testing to ensure grade consistency.' }
          ]
        },
        quality: {
          title: 'Uncompromising Quality Standards',
          content: 'Every ton of limestone leaving our facility has undergone rigorous verification. We partner with Sucofindo and Intertek for third-party certification to provide peace of mind for our partners.',
          certs: ['SNI Standard', 'ISO 9001:2015 Compliant', 'Certificate of Analysis (COA) per Order']
        },
        faq: {
          title: 'Frequently Asked Questions',
          items: [
            { q: 'What is the monthly production capacity?', a: 'Currently, our production capacity reaches 150,000 metric tons per month.' },
            { q: 'Is sea delivery available?', a: 'Yes, we have a private jetty capable of accommodating 300ft barges.' },
            { q: 'Can I order custom grain sizes?', a: 'Certainly, our crushing plant system can be configured to produce specific grain sizes (0-5mm, 5-10mm, etc.).' }
          ]
        },
        cta: {
          title: 'Ready to Scale Your Production?',
          subtitle: 'Get a competitive price quote for your large-scale limestone needs today.',
          button: 'ORDER NOW',
          whatsapp: 'Contact via WhatsApp'
        }
      },
      caco3: {
        hero: {
          title: 'Calcium Carbonate (CaCO3)',
          subtitle: 'Sizing Precision for Creative Industries',
          description: 'High-quality calcium powder with maximum brightness for the plastic, paint, and rubber industries.',
          image: '/products/caco3.png'
        },
        stats: [
          { label: 'Brightness', value: '> 94%', icon: 'Sun' },
          { label: 'Mesh', value: 'Varied', icon: 'Layers' },
          { label: 'Purity', value: '99%', icon: 'Shield' },
          { label: 'Ready', value: 'Stock', icon: 'Package' }
        ],
        overview: {
          title: 'Superior CaCO3 Performance',
          content: 'Our Calcium Carbonate is processed using modern grinding mill technology to produce consistent grain fineness. With high whiteness (brightness), this product is an ideal filler that enhances the visual quality of your final products.',
          features: [
            'Very narrow particle size distribution',
            'Low oil absorption rate',
            'Chemical stability across various temperature applications',
            'Free from heavy metal contamination'
          ]
        },
        specifications: {
          title: 'Powder Technical Specifications',
          table: [
            { label: 'CaCO3 Content', value: '98.8%' },
            { label: 'Brightness (Whiteness)', value: '95%' },
            { label: 'Moisture Content', value: '0.15%' },
            { label: 'Residue (325 mesh)', value: 'min 0.05%' },
            { label: 'pH Value', value: '8.5 - 9.5' },
            { label: 'Specific Gravity', value: '2.7 g/cm3' }
          ],
          chartData: [
            { name: 'Calcium', value: 98.8, color: '#FFD700' },
            { name: 'Impurities', value: 1.2, color: '#0F3460' }
          ]
        },
        applications: {
          title: 'Technical Applications',
          items: [
            { title: 'Plastic Industry', desc: 'Increasing rigidity and reducing polymer raw material costs.', icon: 'Layers' },
            { title: 'Paint & Coating', desc: 'Providing good opacity and hiding power in paint layers.', icon: 'Palette' },
            { title: 'Rubber Industry', desc: 'Improving elasticity and wear resistance in tires and footwear.', icon: 'Zap' },
            { title: 'Paper', desc: 'Brightening paper color and improving ink absorption.', icon: 'FileText' }
          ]
        },
        process: {
          title: 'Precision Grinding Process',
          steps: [
            { title: 'Crystalline Selection', desc: 'Only pure white limestone is selected as raw material.' },
            { title: 'Ultrafine Grinding', desc: 'Grinding using ball mills or ultra-centrifugal mills.' },
            { title: 'Air Classification', desc: 'Particle separation using high-pressure air flow.' },
            { title: 'Packaging', desc: 'Packing in 25kg, 50kg bags, or 1-ton jumbo bags.' }
          ]
        },
        quality: {
          title: 'Whiteness Guarantee',
          content: 'We use digital colorimeters to monitor brightness levels in every batch. Color consistency is our priority to maintain your product aesthetic standards.',
          certs: ['Certificate of Analysis (COA)', 'Material Safety Data Sheet (MSDS)', 'Lab Analysis Intertek']
        },
        faq: {
          title: 'Product FAQ',
          items: [
            { q: 'What mesh sizes are available?', a: 'We produce sizes ranging from 400 mesh to 2500 mesh.' },
            { q: 'What is the brightness level?', a: 'Our premium products have a brightness level above 94%.' },
            { q: 'Is there food grade testing?', a: 'Currently we focus on industrial and technical grades, but our purity levels approach high standards.' }
          ]
        },
        cta: {
          title: 'Talk to Our Technical Experts',
          subtitle: 'Consult your calcium carbonate specification needs for better product results.',
          button: 'GET SAMPLES',
          whatsapp: 'Chat on WhatsApp'
        }
      },
      burnLime: {
        hero: {
          title: 'Quicklime (CaO)',
          subtitle: 'Chemical Energy for Fast Reaction',
          description: 'High-activity Calcium Oxide (CaO) from extreme temperature calcination for maximum reactivity.',
          image: '/products/burn-lime.png'
        },
        stats: [
          { label: 'Active CaO', value: '> 90%', icon: 'Thermometer' },
          { label: 'Reactivity', value: 'High', icon: 'Zap' },
          { label: 'Calcination Temp', value: '1100°C', icon: 'Flame' },
          { label: 'Order', value: 'Bulk', icon: 'Truck' }
        ],
        overview: {
          title: 'The Power of Calcium Oxide',
          content: 'Our Quicklime is produced through controlled thermal decomposition processes in advanced vertical kilns. The result is a material with high porosity and highly responsive chemical reactivity, essential for metal refining and chemical industries.',
          features: [
            'Active CaO content above 90%',
            'Extremely fast slaking rate',
            'Minimal residual CO2 content',
            'Available in lumpy or powder form'
          ]
        },
        specifications: {
          title: 'Calcination Specifications',
          table: [
            { label: 'Available CaO', value: '92.1%' },
            { label: 'Magnesium Oxide (MgO)', value: '0.55%' },
            { label: 'Silica (SiO2)', value: '0.22%' },
            { label: 'Loss on Ignition', value: '1.20%' },
            { label: 'Sulfur (S)', value: '0.04%' },
            { label: 'Reactivity (T60)', value: '< 2 minutes' }
          ],
          chartData: [
            { name: 'Active CaO', value: 92.1, color: '#E94560' },
            { name: 'Calcination Residue', value: 1.2, color: '#1A1A2E' }
          ]
        },
        applications: {
          title: 'Heavy Industrial Usage',
          items: [
            { title: 'Smelter Industry', desc: 'Impurity remover in nickel and bauxite refining.', icon: 'Anvil' },
            { title: 'Sugar Production', desc: 'Sugarcane juice purification in the clarification process.', icon: 'Filter' },
            { title: 'Soil & Mining', desc: 'Soft soil stabilization and mine tailing pH management.', icon: 'Mountain' },
            { title: 'Chemicals', desc: 'Raw material for calcium carbide and other organic compounds.', icon: 'FlaskConical' }
          ]
        },
        process: {
          title: 'Precision Calcination Workflow',
          steps: [
            { title: 'Raw Material Screening', desc: 'Ensuring uniform limestone size for even combustion.' },
            { title: 'Thermal Calcination', desc: 'Heating at 1000°C - 1200°C in shaft kilns.' },
            { title: 'Cooling & Oxygen Control', desc: 'Fast cooling to maintain CaO chemical activity.' },
            { title: 'Crushing & Packing', desc: 'Size reduction and air-tight packaging.' }
          ]
        },
        quality: {
          title: 'Reactivity Assurance',
          content: 'We perform slaking tests every hour to ensure our quicklime reacts with water at the correct temperature. This ensures lime consumption efficiency for end users.',
          certs: ['Chemical Purity Certificate', 'Slaking Rate Analysis', 'Energy Efficiency Standard']
        },
        faq: {
          title: 'Quicklime FAQ',
          items: [
            { q: 'What is the best storage method?', a: 'Must be stored in a dry, tightly closed place due to its highly hygroscopic nature (absorbing water from the air).' },
            { q: 'What is the thermal reactivity?', a: 'Average temperature rise reaches 60°C in less than 2 minutes when reacting with water.' },
            { q: 'Is dump truck delivery available?', a: 'Yes, we provide dump trucks for bulk delivery or jumbo bag packing.' }
          ]
        },
        cta: {
          title: 'Optimize Your Industrial Process',
          subtitle: 'Our high-reactivity quicklime can significantly reduce your operational costs.',
          button: 'PRICING CONSULTATION',
          whatsapp: 'Inquiry via WhatsApp'
        }
      },
      hydratedLime: {
        hero: {
          title: 'Hydrated Lime',
          subtitle: 'Pure Solution for the Environment',
          description: 'Fine-grade Calcium Hydroxide (Ca(OH)2) for water treatment and air pollution control.',
          image: '/products/hydrated-lime.png'
        },
        stats: [
          { label: 'Ca(OH)2', value: '> 92%', icon: 'Droplets' },
          { label: 'Fineness', value: '325 Mesh', icon: 'Filter' },
          { label: 'Color', value: 'Fine White', icon: 'Star' },
          { label: 'Safety', value: 'MSDS', icon: 'ShieldCheck' }
        ],
        overview: {
          title: 'Calcium Hydration Solution',
          content: 'Our Hydrated Lime is the result of controlled hydration of pure quicklime (CaO). With extremely high fineness, this product is very easy to dissolve and react, making it the perfect choice for industrial wastewater and flue gas treatment.',
          features: [
            'Particle fineness passing 325 mesh (>95%)',
            'Very stable calcium hydroxide content',
            'High reactivity in acid neutralization',
            'Safer handling compared to quicklime'
          ]
        },
        specifications: {
          title: 'Hydration Technical Data',
          table: [
            { label: 'Ca(OH)2 Content', value: '94.5%' },
            { label: 'Calcium Oxide (CaO)', value: '71.5%' },
            { label: 'Magnesium (MgO)', value: '0.40%' },
            { label: 'Insoluble Matter', value: '0.45%' },
            { label: 'Apparent Density', value: '0.45 - 0.55 g/ml' },
            { label: 'Moisture Content', value: '< 1.0%' }
          ],
          chartData: [
            { name: 'Calcium Hydroxide', value: 94.5, color: '#3456A3' },
            { name: 'Associated Minerals', value: 5.5, color: '#F1C40F' }
          ]
        },
        applications: {
          title: 'Environmental Benefits',
          items: [
            { title: 'Clean Water Treatment', desc: 'Removing heavy metals and adjusting water hardness.', icon: 'Droplet' },
            { title: 'Flue Gas Cleaning', desc: 'Absorbing acid gases (SO2, HCl) from factory stacks.', icon: 'Wind' },
            { title: 'Road Construction', desc: 'Improving asphalt stability and road durability.', icon: 'Truck' },
            { title: 'Waste Management', desc: 'Phosphate precipitation and particle flocculation in wastewater.', icon: 'Recycle' }
          ]
        },
        process: {
          title: 'Automated Hydration Technology',
          steps: [
            { title: 'Select Quicklime', desc: 'Only using high-reactivity CaO as base material.' },
            { title: 'Controlled Hydration', desc: 'Precise water addition for perfect hydration reaction.' },
            { title: 'Air Separation', desc: 'Separating coarse particles to achieve 325 mesh fineness.' },
            { title: 'Silo Storage', desc: 'Stored in water-tight silos to maintain powder quality.' }
          ]
        },
        quality: {
          title: 'Proven Purity',
          content: 'Our laboratory monitors grain fineness periodically using laser diffraction methods. We guarantee our product effectiveness in both dry and wet injection systems.',
          certs: ['325 Mesh Fineness Verified', 'Purity Analysis Certificate', 'Eco-Industrial Certification']
        },
        faq: {
          title: 'Hydrated Lime FAQ',
          items: [
            { q: 'Is this product dusty?', a: 'Yes, due to its high fineness. We recommend pneumatic systems or enclosures during pouring.' },
            { q: 'What is the shelf life?', a: 'In good, dry packaging, it can last up to 6 months without significant quality degradation.' },
            { q: 'Is there a minimum order?', a: 'Minimum order is 10 tons, available in 25kg bags or jumbo bags.' }
          ]
        },
        cta: {
          title: 'Create a Cleaner Environment',
          subtitle: 'Use superior quality hydrated lime for your waste treatment system efficiency.',
          button: 'REQUEST QUOTE',
          whatsapp: 'Contact Us Now'
        }
      },
      pcc: {
        hero: {
          title: 'Precipitated Calcium Carbonate (PCC)',
          subtitle: 'Molecular Purity for Specialty Industries',
          description: 'Nanoscale precipitated calcium carbonate for pharmaceutical, cosmetic, and premium paper applications.',
          image: '/products/pcc.png'
        },
        stats: [
          { label: 'Purity', value: '99.9%', icon: 'ShieldCheck' },
          { label: 'Crystal', value: 'Nano Size', icon: 'Microscope' },
          { label: 'Brightness', value: '98%', icon: 'Sun' },
          { label: 'Grade', value: 'Specialty', icon: 'Award' }
        ],
        overview: {
          title: 'Calcium Precipitation Innovation',
          content: 'Our PCC is produced through a chemical precipitation process that allows total control over crystal form and particle size. This produces a product with extreme whiteness and high surface reactivity, surpassing natural calcium carbonate (GCC) capabilities.',
          features: [
            'Exceptional chemical purity (>99.9% CaCO3)',
            'Customizable crystal forms (Aragonite/Calcite)',
            'Particle sizes in micron to nano scales',
            'Controllable oil absorption values'
          ]
        },
        specifications: {
          title: 'Specialty Grade Specifications',
          table: [
            { label: 'CaCO3 Content', value: '99.85%' },
            { label: 'Brightness (R457)', value: '98.5%' },
            { label: 'Specific Surface Area', value: '12 - 15 m2/g' },
            { label: 'Average Grain Size', value: '1.2 - 2.5 um' },
            { label: 'Heavy Metals (Pb)', value: '< 1 ppm' },
            { label: 'Acid Solubility', value: 'Perfect' }
          ],
          chartData: [
            { name: 'CaCO3 Pure', value: 99.9, color: '#0F3460' },
            { name: 'Trace Elements', value: 0.1, color: '#FFD700' }
          ]
        },
        applications: {
          title: 'High-End Applications',
          items: [
            { title: 'Pharmaceuticals', desc: 'Calcium supplements and tablet binders.', icon: 'Stethoscope' },
            { title: 'Cosmetics', desc: 'Base material for face powder and premium personal care products.', icon: 'Sparkles' },
            { title: 'Photo Paper', desc: 'Paper coating for high resolution and contrast printing.', icon: 'Printer' },
            { title: 'Sealant Industry', desc: 'Rheology and viscosity regulator in automotive adhesives.', icon: 'Zap' }
          ]
        },
        process: {
          title: 'Chemical Synthesis Workflow',
          steps: [
            { title: 'Gas Carbonation', desc: 'Reaction between milk of lime and pure CO2 gas.' },
            { title: 'Crystal Growth Control', desc: 'Adjusting temperature and pressure to form specific crystal structures.' },
            { title: 'Filtration & Washing', desc: 'Cleaning residual ions to achieve molecular purity.' },
            { title: 'Drying & Micronizing', desc: 'Low-temperature drying and fine particle separation.' }
          ]
        },
        quality: {
          title: 'World-Class Quality',
          content: 'Our PCC products are produced under strict supervision with quality standards meeting food and pharmaceutical industry requirements. We guarantee precise consistency in every milligram.',
          certs: ['High Purity Lab Test', 'Food Grade Compliance (Ready)', 'Pharmaceutical Analysis']
        },
        faq: {
          title: 'PCC FAQ',
          items: [
            { q: 'What is the difference between PCC and regular calcium?', a: 'PCC is made through chemical reaction, so its size is smaller, whiter, and more uniform than natural ground results.' },
            { q: 'Can I customize the crystal shape?', a: 'Yes, we can adjust the process to produce rhombohedral, scalenohedral, or prismatic shapes according to your application.' },
            { q: 'Is halal/food grade certification available?', a: 'Our facility is designed for high standards and we are in the process of finalizing such certifications.' }
          ]
        },
        cta: {
          title: 'Innovate with Premium Materials',
          subtitle: 'Enhance your flagship product quality with our Precipitated Calcium Carbonate.',
          button: 'CONTACT TECHNICAL DIVISION',
          whatsapp: 'WhatsApp Team Expert'
        }
      }
    },
    advancedAbout: {
      hero: {
        title: 'Building a Sustainable Future',
        subtitle: 'PT Wira Energi Utama',
        description: 'We are a leader in the limestone mining industry committed to innovation, safety, and environmental sustainability in every operation in North Sulawesi.',
        image: '/about-hero.webp'
      },
      history: {
        title: 'Our History & Heritage',
        content: 'Founded in 2019, PT Wira Energi Utama has transformed from a local mining operation in Ratatotok into an integrated industrial mineral provider serving national and regional markets. With abundant mineral reserves and a dedicated team, we continue to build a strong foundation for Indonesia industrial progress.',
        image: '/history.webp',
        stats: [
          { label: 'Year Founded', value: '2019' },
          { label: 'Total Hectares', value: '97.05' },
          { label: 'Crusher Capacity', value: '250 TPH' }
        ]
      },
      values: {
        title: 'Our Core Values',
        subtitle: 'Principles that guide every step we take toward excellence.',
        items: [
          { title: 'Integrity', desc: 'Conducting business with full transparency and the highest ethical standards.', icon: 'Shield' },
          { title: 'Innovation', desc: 'Continuously adopting the latest technology for maximum efficiency and safety.', icon: 'Zap' },
          { title: 'Safety', desc: 'Zero accidents is the top priority for our entire operational team.', icon: 'ShieldCheck' }
        ]
      },
      leadership: {
        title: 'Strategic Leadership',
        content: 'Guided by a board of directors with decades of experience in the natural resources industry, we combine strategic vision with precise operational execution.',
        image: '/leadership.webp'
      },
      sustainability: {
        title: 'Green Commitment',
        content: 'We believe that mining can go hand in hand with nature. Our progressive reclamation program ensures each finished mining area will be returned to a productive ecosystem state.',
        initiatives: ['Closed-Loop Water Circulation', 'Multi-stage Dust Filtration', 'Dense Vegetation Greening']
      },
      safety: {
        title: 'Occupational Health & Safety',
        content: 'Our safety culture goes beyond administrative compliance. Every employee has the right and obligation to ensure the work environment remains safe for all.',
        certifications: ['SMK3 Certification', 'Full PPE Standards', 'Periodic Safety Audits']
      },
      assets: {
        title: 'Strategic Assets',
        items: [
          { name: 'Private Jetty', value: 'Draft 12m', icon: 'Ship' },
          { name: 'Crushing Plant', value: 'Full Automation', icon: 'Settings' },
          { name: 'Logistics Fleet', value: 'Isuzu Giga Series', icon: 'Truck' }
        ]
      },
      future: {
        title: 'Vision 2030',
        content: 'We are preparing for a massive expansion to become the most comprehensive industrial mineral hub in South East Asia.',
        targets: ['Mine 4.0 Digitalization', 'Global Export Capacity', 'Zero Carbon Emission']
      }
    },
    advancedCatalog: {
      hero: {
        title: 'Premium Product Catalog',
        description: 'Explore our portfolio of high-quality industrial minerals designed for maximum performance across various industrial sectors.',
        image: '/catalog-hero.webp'
      },
      categories: [
        {
          title: 'Rocks & Aggregates',
          description: 'Basic materials for construction and infrastructure.',
          items: [
            { name: 'Limestone Lumpy', specs: '10-80mm, CaO >55%', tags: ['Fluxing', 'Construction'] },
            { name: 'Concrete Aggregate', specs: 'According to SNI', tags: ['Paving', 'Infrastructure'] }
          ]
        },
        {
          title: 'Calcium Powder',
          description: 'Fine calcium carbonate for fillers and reactants.',
          items: [
            { name: 'CaCO3 Powder', specs: '325-2500 Mesh', tags: ['Paint', 'Plastic', 'Rubber'] },
            { name: 'PCC Nanoscale', specs: 'High Purity', tags: ['Pharma', 'Paper'] }
          ]
        }
      ],
      download: {
        title: 'Technical Documentation',
        description: 'Download our complete catalog in PDF format for detailed specification access on your device.',
        button: 'DOWNLOAD CATALOG (PDF)'
      },
      industrial: {
        title: 'Cross-Sector Applications',
        items: [
          { name: 'Steel Industry', usage: 'Major fluxing agent', icon: 'Factory' },
          { name: 'Water Treatment', usage: 'pH Adjustment & Purification', icon: 'Droplets' },
          { name: 'Agriculture', usage: 'Soil conditioner & acid neutralizer', icon: 'Sprout' }
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
          email: 'contact@ptweu.company',
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
          { q: 'How to request a price quote?', a: 'You can send your requirement specifications via the form below or contact our sales email directly.' },
          { q: 'Is shipping available outside the island?', a: 'Yes, through our private jetty, we serve shipping via barge to all regions of Indonesia.' }
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
          content: 'The collected data is only used for official business communication, service improvement, and fulfillment of obligations according to Indonesian mining law.'
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
        { label: 'About', href: '/about' },
        { label: 'Products', href: '/products' },
        { label: 'Privacy', href: '/privacy' }
      ]
    },
  },
};
