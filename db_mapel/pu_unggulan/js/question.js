// Array dari object
const quiz = [
  // Nomer 1
  {
    q: "Dalam kehidupan, seorang pemimpin yang baik harus berani mendorong bawahannya untuk semangat bekerja, agar berani mengambil keputusan yang kreatif dan sanggup mempertanggungjawabkannya. Pola kepemimpinan ini dikenal dengan istilah",
    options: [
      "a. Ing Ngarso Sung Tulodo",
      "b. Ing Madya Mangun Karso",
      "c. Tut Wuri Handayani",
      "d. Demokrasi Pancasila",
      "e. Bhineka tunggal ika",
    ],
    answer: 2,
  },
  // Nomer 2
  {
    q: "ASEAN didirikan di kota",
    options: [
      "a. Jakarta",
      "b. Kuala Lumpur",
      "c. Bangkok",
      "d. Singapura",
      "e. Bandung",
    ],
    answer: 2,
  },
  // Nomer 3
  {
    q: "Pernanan PBB bagi Indonesia setelah merdeka sangat besar, yaitu membantu menyelesaikan permasalahan yang terjadi antara Indonesia dengan Belanda. Berikut yang bukan peranan PBB terhadap Indonesia adalah…",
    options: [
      "a. Pembahasan di sidang umum mengenai agresi militer I",
      "b. Pengiriman Pasukan Garuda II",
      "c. Membentuk UNCI",
      "d. Membentuk Komisi Tiga Negara",
      "e. Memberikan perwakilannya saat terjadi Pepera",
    ],
    answer: 1,
  },
  // Nomer 4
  {
    q: "Ketegangan di Berlin dan Kuba merupakan salah satu faktor yang mendorong terbentuknya GNB. Konferensi Tingkat Tinggi pertama dari GNB diselenggarakan di…",
    options: [
      "a. Jakarta",
      "b. Kairo",
      "c. Beograd",
      "d. Lusaka",
      "e. Algiers",
    ],
    answer: 2,
  },
  // Nomer 5
  {
    q: "Sidang Umum MPR 1999, pada 14-21 Oktober 1999 merupakan perubahan … yang dilakukan terhadap konstitusi Indonesia",
    options: [
      "a. Pertama",
      "b. Kedua",
      "c. Ketiga",
      "d. Keempat",
      "e. Kelima",
    ],
    answer: 0,
  },
  // Nomer 6
  {
    q: "Bab IX dalam Batang Tubuh UUD 1945 membahas mengenai…",
    options: [
      "a. Agama",
      "b. Warga Negara",
      "c. Kekuasaan kehakiman",
      "d. Keuangan",
      "e. Pertahanan Negara",
    ],
    answer: 2,
  },
  // Nomer 7
  {
    q: "Untuk mengatasi, menanggulangi, serta memberantas korupsi di Indonesia, pemerintah membentuk Komisi Pemberantasan Korupsi pada tahun",
    options: [
      "a. 2001",
      "b. 2002",
      "c. 2003",
      "d. 2004",
      "e. 2000",
    ],
    answer: 1,
  },
  // Nomer 8
  {
    q: "Kerjasma yang dilakukan oleh Indonesia dan jerman dalam bidang ekspor dan impor disebut dengan Kerjasama…",
    options: [
      "a. Regional",
      "b. Bilateral",
      "c. Multilateral",
      "d. Internasional",
      "e. Intercontinental",
    ],
    answer: 1,
  },
  // Nomer 9
  {
    q: "Kekalahan Raja Kertajaya dalam Perang Ganter tahun 1222 menandai peristiwa",
    options: [
      "a. Naiknya Raden Wijaya menjadi penguasa baru atas tanah Jawa",
      "b. Runtuhnya Dinasti Sanjaya, digantikan Dinasti Rajasa",
      "c. Berakhirnya Kerajaan Kediri dan munculnya Kerajaan Singosari",
      "d. Berakhirnya era Kerajaan Hindu-Buddha, digantikan dengan era Kerajaan Islam",
      "e. Dikuasainya kerajaan-kerajaan di Jawa oleh Sriwijaya dari Sumatera",
    ],
    answer: 2,
  },
  // Nomer 10
  {
    q: "Max Havelaar adalah buku yang menceritakan penderitaan rakyat selama 31 tahun akibat diberlakukannya sistem tanam paksa. Buku tersebut ditulis oleh…",
    options: [
      "a. Soerjono Soekanto",
      "b. Suwardi Suryaningrat",
      "c. Cipto Mangunkusumo",
      "d. Multatuli",
      "e. Moh. Yamin",
    ],
    answer: 3,
  },
  // Nomer 11
  {
    q: "Pembangunan jalan-jalan utama yang menghubungkan kota-kota di Pantai utara Jawa merupakan salah satu kebijakan pemerintah jajahan pada masa…",
    options: [
      "a. H. Williem Deandels",
      "b. Jan Pieterzoon Coen",
      "c. Pieter Both",
      "d. Cornelis de Houtman",
      "e. Lauren Ralph",
    ],
    answer: 0,
  },
  // Nomer 12
  {
    q: "Kebijakan penjajah Belanda di Indonesia salah satunya adalah kebijakan dalam mencegah adanya penggelapan pasar lewat perairan Indonesia. Kebijakan ini dilakukan dengan kapal-kapal Belanda yang berlayar (berpatroli) di laut sekitar Maluku. Kebijakan ini disebut juga dengan kebijakan…",
    options: [
      "a. Culturstelsel",
      "b. Ekstirpasi",
      "c. Hongi Tochten",
      "d. Agrarische Wet",
      "e. Landrent",
    ],
    answer: 2,
  },
  // Nomer 13
  {
    q: "Ekspedisi Pamalayu dikenal pada masa Kerajaan Singasari. Apa yang dimaksud dengan ekspedisi Pamalayu?",
    options: [
      "a. Pengiriman tantara ke Melayu untuk usaha memperluas wilayah",
      "b. Penyerangan ke Melayu untuk membebaskan tawanan",
      "c. Ekspedisi yang dilakukan prajurit Singasari untuk menghancurkan Kerajaan Kediri",
      "d. Ekspedisi yang dilakukan oleh Portugis ke seluruh bagian Indonesia",
      "e. Penundukan Sriwijaya",
    ],
    answer: 0,
  },
  // Nomer 14
  {
    q: "Belanda pada akhirnya mengakui kemerdekaan Indonesia secara nyata dan penuh dengan bentuk Republik Indonesia Serikat pada perjanjian…",
    options: [
      "a. Renville",
      "b. Linggarjati",
      "c. Roem Royen",
      "d. Giyanti",
      "e. Konferensi Meja Bundar",
    ],
    answer: 1,
  },
  // Nomer 15
  {
    q: "Pernyataan berikut yang tidak tepat terkait dengan organisasi Sarekat Islam adalah",
    options: [
      "a. Awalnya bukan organisasi politik",
      "b. Berhaluan moderat dan kooperatif",
      "c. Disusup oleh aliran komunis",
      "d. Banyak mengkritik keras pemerintah Belanda",
      "e. Berlandaskan pada ajaran Islam",
    ],
    answer: 3,
  },
    // Nomer 16
  {
    q: "PBB adalah lembaga internasional yang memfasilitasi dalam hal perlindugnan sosial, pengembangan ekonomi, serta segala hal yang berhubungan untuk terwujudnya perdamaian dunia. Indonesia adalah salah satu anggota yang bergabung pada tanggal…",
    options: [
      "a. 28 September 1950",
      "b. 5 Juli 1950",
      "c. 28 Oktober 1945",
      "d. 3 Oktober 1947",
      "e. 5 Juli 1959",
    ],
    answer: 0,
  },
  // Nomer 17
  {
    q: "Mana dari tempat berikut yang tidak termasuk ke dalam Warisan Budaya Dunia UNESCO yang ada di Indonesia…",
    options: [
      "a. Candi Prambanan",
      "b. Gedung Pancasila",
      "c. Candi Borobudur",
      "d. Taman Nasional Komodo",
      "e. Hutan Tropis Sumatera",
    ],
    answer: 1,
  },
  // Nomer 18
  {
    q: "Pemberontakan yang terjadi pada 18 September 1948 di Madiun adalah pemberontakan yang dilakukan untuk menggantikan Pancasila dengan ideologi…",
    options: [
      "a. Liberalis",
      "b. Islamis",
      "c. Demokratis",
      "d. Fasis",
      "e. Komunis",
    ],
    answer: 4,
  },
  // Nomer 19
  {
    q: "Ideologi Pancasila, meski merupakan tujuan serta dasar dari negara Indonesia, pada praktiknya beberapa kali disimpangi. Berikut yang merupakan penyimpangan yang terjadi pada masa Orde Baru adalah…",
    options: [
      "a. Ideologi NASAKOM",
      "b. Pembubaran DPR",
      "c. Konfrontasi Indonesia Malaysia",
      "d. Presiden tanpa batas masa jabatan",
      "e. Penyalahgunaan kekuasaan legislatif",
    ],
    answer: 0,
  },
  // Nomer 20
  {
    q: "Indonesia merupakan negara demokrasi. Hal ini sesuai dengan cita-cita bangsa yang dicantumkan dalam Pancasila dari awal Indonesia merdeka. Dalam perjalanannya sendiri, demokrasi beberapa kali mengalami beberapa pergantian pelaksanaan. Mana dari pernyataan berikut yang bukan merupakan penerapan Demokrasi di Indonesia:",
    options: [
      "a. Demokrasi Pancasila",
      "b. Demokrasi Pancasila Reformasi",
      "c. Demokrasi sosialis",
      "d. Demokrasi terpimpin",
      "e. Demokrasi liberal",
    ],
    answer: 2,
  },
  // Nomer 21
  {
    q: "“My Heart Will Go On” merupakan salah satu lagu ikonik sepanjang masa yang merupakan soundtrack dari Film Titanic, 1997. Lagu ini dinyanyikan oleh…",
    options: [
      "a. Whitney Houston",
      "b. Celine Dion",
      "c. SZA",
      "d. Tina Turner",
      "e. Aretha Franklin",
    ],
    answer: 1,
  },
  // Nomer 22
  {
    q: "Mana dari perbuatan berikut yang termasuk dalam ranah hukum privat dan tidak menjadi wewenang kepolisian dalam penegakan hukum…",
    options: [
      "a. Hubungan antar pejabat daerah dalam administrasi negara",
      "b. Surat Keputusan pemecatan ASN",
      "c. Perjanjian pinjaman uang",
      "d. Penjualan hewan eksotis",
      "e. Konflik kekerasan di masyarakat",
    ],
    answer: 2,
  },
  // Nomer 23
  {
    q: "Dalam melakukan penyidikan, polisi harus mematuhi tata cara penyidikan yang diatur di dalam:",
    options: [
      "a. Instruksi Presiden 1/1976",
      "b. UU 2/2002",
      "c. UU 8/1981",
      "d. UU 39/1999",
      "e. Perpol 8/2012",
    ],
    answer: 2,
  },
  // Nomer 24
  {
    q: "Tari Cokek merupakan salah satu tarian yang berasal dari budaya Indonesia, tepatnya dari budaya…",
    options: [
      "a. Jawa",
      "b. Betawi",
      "c. Minang",
      "d. Dayak",
      "e. Flores",
    ],
    answer: 1,
  },
  // Nomer 25
  {
    q: "Kapan RIS secara resmi berakhir dan Indonesia kembali kepada bentuk NKRI",
    options: [
      "a. 15 Agustus 1950",
      "b. 22 April 1950",
      "c. 19 Mei 1950",
      "d. 17 Agustus 1950",
      "e. 20 Agustus 1950",
    ],
    answer: 3,
  },
];
