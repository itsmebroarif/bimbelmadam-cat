// Array dari object
const quiz = [
    // Nomer 1
    {
      q: "Hak prerogratif diartikan sebagai kekuasaan.",
      options: [
        "Mutlak presiden untuk membubarkan parlemen",
        "Multak presiden untuk mengesahkan RUU dan UU",
        "Relatif presiden untuk membentuk dan membubarkan kabinet",
        "Multak presiden yang tidak dapat diganggu gugat oleh pihak lain",
        "Relatif presiden untuk memberhentikan menteri",
      ],
      answer: 3,
    },
    //   Nomer 2
    {
      q: "Warga Negara Indonesia dengan sendirinya kehilangan kewarganegaraannya karena hal berikut, kecuali",
      options: [
        "Memperoleh kewarganegaraan lain atas kemauannya sendiri",
        "Tidak menolak atau tidak melepaskan kewarganegaraan lain, sedangkan orang yang bersangkutan mendapatkan kesempatan untuk itu",
        "Dinyatakan hilang kewargangeraannya oleh Presiden atas permohonan sendiri, yang bersangkutan sudah berusia 18 (delapan belas) tahun atau sudah kawin, bertempat tinggal di luar negeri dan dinyatakan hilang Kewarganegaraan Indonesia tidak menjadi tanpa kewarganegaraan ",
        "Masuk dalam dinas tentara asing tanpa izin terlebih dahulu oleh Presiden",
        "Anak yang lahir dari perkawinan yang sah dari seorang ayah Warga Negara Indonesia dan ibu warga negara asing",
      ],
      answer: 4,
    },
   // Nomer 3
    {
      q: "Hubungan pembukaan UUD NKRI Tahun 1945 dan proklamasi adalah",
      options: [
        "Pembukaan UUD 1945 merupakan sumber hukum bagi Proklamasi Indonesia",
        "Pasal-pasal UUD merupakan perjanjian luhur bangsa",
        "Proklamasi Indonesia terjadi karena UUD 1945 telah selesai dibuat",
        "Makna yang terkandung dalam pembukaan merupakan amanat dari Proklamasi Kemerdekaan",
        "Proklamasi dan Pembukaan UUD 1945 adalah sama-sama sumber hukum",
      ],
      answer: 3,
    },
  // Nomer 4
    {
      q: "Contoh sikap memaknai Proklamasi Kemerdekaan Indonesia dan UUD 1945 adalah",
      options: [
        "Rela berkorban harta agar terpilih menjadi pemimpin negara.",
        "Menaati segala bentuk peraturan yang berlaku di masyarakat",
        "Berani menentang bangsa-bangsa yang datang dari Barat",
        "Bersedia ikut membela negara apabila dibutuhkan",
        "Pantang menyerah dalam merebut jabatan di pemerintahan",
      ],
      answer: 1,
    },
  // Nomer 5
    {
      q: "Perhatikan pernyataan berikut! <br> 1)	Terciptanya integritas nasional <br> 2)	Dapat memperkaya khasanah budaya bangsa <br> 3)	Potensi dalam bidang pariwisata <br> 4)	Munculnya sikap primordialisme <br> 5)	Munculnya sikap etnosentrisme <br> 6)	Objek kajian budaya internasional",
      options: [
        "1, 2, 3, dan 4",
        "2, 3, 4, dan 5",
        "3, 4, 5, dan 6",
        "1, 2, 4, dan 5",
        "1, 2, 3, dan 6",
      ],
      answer: 4,
    },
  // Nomer 6
    {
      q: "Contoh sikap patriotisme berbangsa dan bernegara adalah",
      options: [
        "Bersedia bertugas di daerah terpencil dengan baik",
        "Selalu mengenang jasa-jasa para pahlawan bangsa",
        "Menyumbangkan harta benda untuk pembangunan",
        "Membela kebenaran sesuai dengan tugas dan kewajiban",
        "Mengerjakan tugas tepat waktu",
      ],
      answer: 0,
    },
  // Nomer 7
    {
      q: "Prinsip negara kedaulatan rakyat, memiliki hubungan yang erat dengan makna demokrasi. Berdasarkan perkembangan demokrasi di Indonesia, maka urutan pelaksanaan demokrasi di Negara Kesatuan Republik Indonesia secara berurutan",
      options: [
        "Pancasila reformasi, liberal/parlementer, terpimpin",
        "Parlementer, terpimpin, pancasila",
        "Terpimpin, pancasila, liberal/parlementer",
        "Terpimpin, pancasila, parlementer/liberal",
        "Parlementer, liberal, pancasila",
      ],
      answer: 1,
    },
  // Nomer 8
    {
      q: "Berikut ini makna dan nilai yang terkandung dalam Pancasila sila keempat, kecuali",
      options: [
        "Setiap warga negara memiliki hak dan kewajiban yang sama",
        "Mengutamakan segala kepentingan bersama dan kepentingan bangsa melebihi kepentingan diri sendiri dan golongan",
        "Melakukan musyawarah dalam mengambil keputusan yang menyangkut banyak orang",
        "Menghargai dan menyayangi sesama manusia",
        "Melakukan musyawarah untuk mencapai mufakat",
      ],
      answer: 3,
    },
  // Nomer 9
    {
      q: "Piagam Jakarta berisi perlawanan terhadap imperialisme kapitalisme, fasisme, serta memulai dasar pembentukan Republik Indonesia. Sebelumnya akhirnya dijadikan sebagai Pembukaan UUD 1945, naskah Piagam Jakarta disusun untuk dijadikan teks Proklamasi kemerdekaan Indonesia oleh panitia yang merumuskannya. Yang merumuskan Piagam Jakarta adalah",
      options: [
        "BPUPKI",
        "PPKI",
        "Muh. Yamin",
        "Panitia kecil",
        "Panitia sembilan",
      ],
      answer: 4,
    },
  // Nomer 10
    {
      q: "Dalam sidang BPUPKI 1, Ir. Soekarno mengemukakan prinsip untuk dijadikan dasar negara Indonesia adalah",
      options: [
        "Kebangsaan, Kemanusiaan, Ketuhanan, Kerakyatan, Kesejahteraan rakyat",
        "Kebangsaan Indonesia, Internasionalisme atau perikemanusiaan, mufakat, atau demokrasi, kesejahteraan sosial, ketuhanan",
        "Ketuhanan Yang Maha Esa, persatuan Indonesia, rasa kemanusiaan yang adil dan beradab, kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan perwakilan, keadilan sosial bagi seluruh rakyat Indonesia",
        "Persatuan, kekeluargaan, keseimbangan lahir batin, musyawarah, dan keadilan rakyat",
        "Persatuan, kekeluargaan, keseimbangan lahir batin, musyawarah, dan keadilan rakyat",
      ],
      answer: 1,
    },
  // Nomer 11
    {
      q: "Nilai-nilai dalam Pancasila akan tetap ada sepanjang masa dalam kehidupan bangsa Indonesia, baik dalam adat-istiadat, kebudayaan, kegiatan kenegaraan, maupun dalam keagamaan. Hal itu merupakan salah satu tanda bahwa nilai Pancasila bersifat",
      options: ["Majemuk", "Tunggal", "Objektif", "Subjektif", "Kausatif"],
      answer: 2,
    },
  // Nomer 12
    {
      q: "Dasar negara Pancasila merupakan hasil dari sidang BPUPKI. BPUPKI sendiri kemudian dibubarkan pada",
      options: [
        "11 Juli 1945",
        "16 Juli 1945",
        "27 Juli 1945",
        "7 Agustus 1945",
        "9 Agustus 1945",
      ],
      answer: 3,
    },
  // Nomer 13
    {
      q: "Persatuan, kekeluargaan, keseimbangan lahir dan batin, musyawarah, dan keadilan rakyat adalah dasar negara yang disampaikan oleh",
      options: [
        "Soepomo",
        "Ir. Soekarno",
        "Muh. Yamin",
        "Dr. Radjiman Widyodiningrat",
        "Ahmad Soebardjo",
      ],
      answer: 0,
    },
  // Nomer 14
    {
      q: "Piagam Jakarta sebagai cikal bakal Pancasila dihsilkan oleh sidang panitia sembilan pada",
      options: [
        "11 Juni 1945",
        "17 Juni 1945",
        "22 Juni 1945",
        "26 Juni 1945",
        "29 Juni 1945",
      ],
      answer: 2,
    },
  // Nomer 15
    {
      q: "Sikap pengorbanan untuk bangsa lebih diutamakan daripada kepentingan individu maupun golongan merupakan pengamalan pancasila sila ke",
      options: ["1", "2", "3", "4", "5"],
      answer: 2,
    },
  // Nomer 16
    {
      q: "Pancasila adalah suatu kesatuan yang majemuk tunggal. Artinya ",
      options: [
        "Seluruh lima sila pancasila yang ada adalah satu kesatuan yang utuh/semua sila tak dapat berdiri sendiri dan tidak dapat berselisih",
        "Urutan sila-sila dalam pancasila menunjukkan suatu rangkaian tingkat dalam luas dan isi sifatnya",
        "Sila-sila dalam pancasila bersifat saling mengisi antara satu dengan yang lainnya",
        "Sila-sila dalam pancasila bersifat saling mengkualifikasi antara satu dengan yang lainnya",
        "Sila 1 meliputi sila 2 sampai 5. Sila 2 meliputi sila 3 sampai 5 dan seterusnya. Sila-sila dalam pancasila berjenjang (bertingkat). Sila pertama mendasari sila berikutnya (2-5) dan seterusnya",
      ],
      answer: 0,
    },
  // Nomer 17
    {
      q: "Berdasarkan UU No. 12 Tahun 2011 yang menjadi urutan tertinggi perundangan Republik Indonesia adalah",
      options: [
        "Pancasila",
        "UUD 1945",
        "Undang-Undang",
        "Ketetapan MPR",
        "Peraturan Presiden",
      ],
      answer: 1,
    },
  // Nomer 18
    {
      q: "Hak dan kewajiban warga negara untuk ikut serta dalam usaha pertahanan dan keamanan negara diatur melalui UUD 1945 pasal",
      options: ["26 ayat 1", "27 ayat 1", "27 ayat 2", "30 ayat 1", "30 ayat 2"],
      answer: 3,
    },
  // Nomer 19
    {
      q: "Uud 1945 sudah mengalami amandemen sebanyak 4 kali. Amandemen UUD 1945 yang kedua dilangsungkan pada tanggal",
      options: [
        "12-21 Oktober 1998",
        "14-21 Oktober 1999",
        "7-18 Agustus 2000",
        "19-26 Agustus 2000",
        "1-9 November 2001",
      ],
      answer: 2,
    },
  // Nomer 20
    {
      q: "Undang-Undang yang mengatur tentang pertahanan negara adalah Undang-Undang nomor",
      options: [
        "7 tahun 2000",
        "2 tahun 2001",
        "3 tahun 2002",
        "3 tahun 2004",
        "7 tahun 2012",
      ],
      answer: 2,
    },
  // Nomer 21
    {
      q: "Pemberian grasi, amnesti, abolisi, dan rehabilitasi oleh Presiden diatur secara lengkap dalam UUD 1945 pasal",
      options: ["11", "12", "13", "14", "15"],
      answer: 3,
    },
  // Nomer 22
    {
      q: "Pasal 23 UUD 1945 secara khusus mengatur tentang segala macam",
      options: [
        "Keuangan",
        "Dewan Perwakilan Rakyat",
        "Kekuasaan Kehakiman",
        "Wilayah Negara",
        "Wilayah Negara dan Penduduk",
      ],
      answer: 0,
    },
  // Nomer 23
    {
      q: "Jumlah bab dalam UUD 1945 yang mengalami amandemen sebanyak",
      options: ["16 bab", "17 bab", "19 bab", "20 bab", "25 bab"],
      answer: 0,
    },
  // Nomer 24
    {
      q: "Salah satu hak asasi yang dilindungi adalah hak setiap orang untuk mendapatkan status kewarganegaraan. Hal ini diatur dalam UUD 1945 pasal",
      options: ["28A", "28D ayat 4", "28E ayat 1", "28E ayat 3", "28E ayat 2"],
      answer: 1,
    },
  // Nomer 25
    {
      q: "UUD 1945 secara resmi dinyatakan sah digunakan sebagai dasar negara Indonesia pada tanggal ??",
      options: [
        //  Ini Array Pertama = 0
        "1 Juni 1945",
        // Ini Array kedua = 1
        "16 Agustus 1945",
        // Ini Array Ketiga = 2
        "18 Agustus 1945",
        // Ini Array Keempat = 3
        "19 Agustus 1945",
        // Ini Array Kelima = 4
        "20 Agustus 1945",
      ],
      answer: 2,
    },
  // Nomer 26
    {
      q:"Negara Indonesia adalah negara hukum. Hal ini dijelaskan pada pasal",
      options:[
          "1 ayat 1",
          "1 ayat 3",
          "28",
          "35",
          "36"
      ],
      answer: 1,
    },
  // Nomer 27
    {
      q:"Pemeliharaan negara terhadap fakir miskin dan anak terlantar dijelaskan pada pasal",
      options:[
          "23 ayat 1",
          "34 ayat 1",
          "35",
          "35",
          "36A"
      ],
      answer:1,
    },
  // Nomer 28
    {
      q:"Anggota DPR mempunyai hak interpelasi, yaitu hak untuk",
      options:[
          "Bertanya kepada pemerintah",
          "Ikut menetapkan APBN",
          "Melakukan penyelidikan",
          "Melakukan perubahan terhadap RUU",
          "Mengawasi jalannya pemerintahan"
      ],
      answer: 0,
    },
  // Nomer 29
    {
      q:"Kasus yang menimpa seseorang ketika tidak memiliki kewarganegaraan (apatriade) terjadi ketika",
      options:[
          "Berasal dari negara yang menganut ius soli dan melahirkan di negara yang menganut ius sanguinis",
          "Berasal dari negara yang menganut ius sangunis dan melahirkan di negara yang menganut ius soli",
          "Lahir di negara yang menganut ius sanguinis bertempat tinggal dan melahirkan di negara yang menganut ius sanguinis",
          "Lahir di negara yang menganut ius soli bertempat tinggal dan melahirkan di negara yang menganut ius soli",
          "Memiliki status tidak memiliki kewarganageraan dan melahirkan serta bertempat tinggal di negara yang menganut ius soli"
      ],
      answer: 0,
    },
  // Nomer 30 
    {
      q:"Budi Utomo sebagai organisasi pergerakan nasional pertama didirikan pada tanggal",
      options:[
          "2 Mei 1908",
          "20 Mei 1908",
          "22 Mei 1908",
          "2 Mei 1928",
          "20 Mei 1928"
      ],
      answer: 1,
    },
  // Nomer 31
    {
      q:"Sebelum diangkat sebagai anggota Kepolisian Negara Republik Indonesia, seorang calon anggota yang telah lulus pendidikan pembentukan wajib mengucapkan atau janji menurut agamanya. Lafal sumpah atau janji sebagaimana tersebut diatur pada pasal",
      options:[
          "22",
          "23",
          "24",
          "25",
          "26"
      ],
      answer: 0,
    },
  // Nomer 32
    {
      q:"Dalam ketentuan pasal 28 ayat 2 UU No. 2 Tahun 2002 kaitannya dengan Pemilihan Umum adalah",
      options:[
          "Anggota Kepolisian Negara Republik Indonesia dapat menggunakan hak memilih dan dipilih",
          "Anggota Kepolisian Negara Republik Indonesia dapat menggunakan hak memilih tetapi tidak untuk dipilih",
          "Anggota Kepolisian Negara Republik Indonesia tidak menggunakan hak memilih dan dipilih",
          "Anggota Kepolisian Negara Republik Indonesia berhak menggunakan hak memilih dan dipilih",
          "Anggota Kepolisian Negara Republik Indonesia tidak menggunakan hak memilih dan dipilih kecuali dengan keadaan tertentu menurut Undang-Undang"
      ],
      answer: 2,
    },
  // Nomer 33
    {
      q:"Setiap anggota Kepolisian Negara Republik Indonesia diberi pangkat yang mencerminkan peran, fungsi, dan kemampuan. Serta sebagai keabsahan wewenang dan tanggung jawab dalam penugasannya. Hal tersebut diatur dalam UU kepolisian pada pasal",
      options:[
          "24",
          "25",
          "26",
          "27",
          "28"
      ],
      answer: 1,
    },
  // Nomer 34
    {
      q:"Penyelidik adalah pejabat Kepolisian Negara Republik Indonesia yang diberi wewenang oleh undang-undang untuk melakukan penyelidikan. Hal tersebut tertuang dalam UU Kepolisian pada pasal",
      options:[
          "Pasal 1 ayat 7",
          "Pasal 1 ayat 8",
          "Pasal 1 ayat 9",
          "Pasal 1 ayat 10",
          "Pasal 1 ayat 11"
      ],
      answer: 1,
    },
  // Nomer 35
    {
      q:"Untuk membina persatuan dan kesatuan serta meningkatkan semangat kerja dan moril, diadakan peraturan disiplin anggota Kepolisian Negara Republik Indonesia. Hal tersebut diatur dalam UU Kepolisian pada pasal",
      options : [
          "24",
          "25",
          "26",
          "27",
          "28"
      ],
      answer : 3,
    },
  // Nomer 36
    {
      q:"Sikap dan perilaku pejabat Kepolisian Negara Republik Indonesia terikat pada Kode Etik Profesi Kepolisian Negara Republik Indonesia. Hal tersebut diatur dalam UU Kepolisian pada pasal",
      options: [
          "33",
          "34",
          "35",
          "36",
          "37"
      ],
      answer: 1,
    },
  // Nomer 37
    {
      q:"Tugas Komisi Kepolisian Nasional adalah membantu Presiden dalam menetapkan arah kebijakan Kepolisian Negara Republik Indonesia. Hal tersebut diatur dalam UU Kepolisian pada pasal",
      options :[
          "34",
          "35",
          "36",
          "37",
          "38"
      ],
      answer: 4,
    },
  // Nomer 38
    {
      q:"Pada hakikatnya manusia adalah sebagai zoon politicon, yaitu manusia sosial yang tidak dapat dipisahkan satu dengan yang lainnya. Hal ini dikemukakan oelh seorang filsuf yaitu",
      options:[
          "Karl Marx",
          "Kranenburg",
          "Aristoteles",
          "Plato",
          "Socrates"
      ],
      answer:2,
    },
  // Nomer 39
    {
      q:"Kerajaan ini merupakan kerajaan maritim karena mempunyai angkatan laut yang kuat dan wilayah perairan yang luas sehingga disebut kerajaan nusantara pertama di Indonesia. Kerajaan yang dimaksud adalah",
      options:[
          "Kutai",
          "Pajajaran",
          "Sriwijaya",
          "Bali",
          "Majapahit"    
      ],
      answer: 2,
    },
  // Nomer 40
    {
      q:"Sebelum Indonesia mendapatkan kemerdekaan, banyak dibentuk organisasi maupun badan-badan yang bertugas untuk mempersiapkan Indonesia merdeka. Badan yang bertugas untuk menyelidiki serta menyampaikan pendapat untuk disampaikan kepada pemerintah Jepang sebagai bahan pertimbangan Indonesia merdeka adalah",
      options:[
          "PPKI",
          "Budi Utomo",
          "Budi Utomo",
          "BPUPKI",
          "Heiho"
      ],
      answer: 3,
    },
  // Nomer 41
    {
      q:"BPUPKI membentuk panitia kecil yang beranggotakan 9 orang pada tanggal 22 Juni 1945. Berikut termasuk anggota panitia sembilan, kecuali",
      options:[
          "Achmad Soebardjo",
          "Moh. Yamin",
          "Agus Salim",
          "Abikoesno Tjokrosoejoso",
          "Soepomo"
      ],
      answer: 4,
    },
  // Nomer 42
    {
      q:"Setelah Indoneisa merdeka, PPKI mengadakan beberapa kali sidang. Salah satunya memutuskan memilih dan mengangkat presiden dan wakil presiden. Pemilihan presiden dan wakil presiden merupakan hasil sidang PPKI tanggal",
      options:[
          "9 Agustus 1945",
          "10 Agustus 1945",
          "18 Agustus 1945",
          "19 Agustus 1945",
          "20 Agustus 1945"
      ],
      answer: 2,
    },
  // Nomer 43
    {
      q:"Suku Mentawai mendiami daerah",
      options:[
          "Sumatera Barat",
          "Riau",
          "Sumatera Selatan",
          "Kalimantan Timur",
          "Kalimantan Barat"
      ],
      answer:0, 
    },
  // Nomer 44
    {
      q:"Kepala pemerintahan dipegang oleh perdana menteri, sedangkan kepala negara dipegang oleh presiden atau raja. Hal ini merupakan ciri-ciri sistem pemerintahan",
      options: [
          "Monarki",
          "Monarki absolut",
          "Parlementer",
          "Presidensial",
          "Aristokrasi "
      ],
      answer: 2,
    },
  // Nomer 45
    {
      q:"Sistem pemerintahan Indonesia pada masa RIS yang dipimpin oleh perdana menteri, menunjukkan sistem pemerintahannya adalah",
      options:[
          "Presidensial",
          "Parlementer",
          "Perdana Menteri",
          "Ekstra Parlementer",
          "Konstitusional"
      ],
      answer: 1,
    },
  // Nomer 46
    {
      q:"Kekurangan sistem pemerintahan presidensial adalah",
      options : [
          "Keputusan tidak tegas karena pembuatan keputusan atau kebijakan publik secara tawar-menawar antara eksekutif dan legislatif",
          "Kedudukan badan eksekutif sangat tergantung pada mayoritas dukungan parlemen",
          "Kabinet dapat bubar sewaktu-waktu karena kedudukan badan eksekutif atau kabinet berakhir sesuai masa jabatannya",
          "Parlemen dikendalikan oleh kabinet",
          "Konflik vertikal dan horizontal, misalnya pelaksanaan Pilkada"
      ],
      answer : 0,
    }, 
  // Nomer 47 
    {
      q:"Jika dibandingkan dengan kabinet parlementer, kelebihan kabinet presidensiil adalah dalam hal",
      options:[
          "Pembentukan kabinet sangat demokrasi",
          "Jalannya pemerintahan lebih stabil",
          "Para menteri dapat diganti sewaktu-waktu",
          "Para menteri bertanggung jawab secara kolektif",
          "Pemerintahan lebih mencerminkan aspirasi rakyat"
      ],
      answer:1, 
    },
  // Nomer 48
    {
      q:"Presiden dan wakil presiden merupakan satu institusi penyelenggara kekuasaan eksekutif negara yang tertinggi dibawah UUD 1945. Dalam sistem ini tidak dikenal dan tidak perlu dibedakan adanya",
      options:[
          "Kepala negara dan kepala pemerintahan",
          "Kepala negara dan kepala militer",
          "Kepala pemerintahan dan kepala militer",
          "Kepala negara dan kepala agama",
          "Kepala pemerintahan dan kepala agama"
      ],
      answer: 0,
    },
  // Nomer 49 
    {
      q:"Dibawah ini yang bukan merupakan pahlawan pergerakan nasional Indonesia adalah",
      options:[
          "Dewi Sartika",
          "Hasyim Asy’ari",
          "Untung Surapati",
          "Cipto Mangunkusumo",
          "e.	Danudirja Setiabudi"
      ],
      answer: 2,
    },
  // Nomer 50
    {
      q:"Perjanjian yang berisi penyerahan Hindia Belanda kepada Jepang adalah ",
      options:[
          "Kapitulasi Tuntang",
          "Perjanjian Linggarjati",
          "Perjanjian Renville",
          "Perjanjian San Fransisco",
          "Perjanjian Kalijati"
      ],
      answer: 4,
    },
  
  ];
  