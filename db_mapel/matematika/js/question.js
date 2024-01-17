// Array dari object
const quiz = [
  // Nomer 1
  {
    q: "Gerakan DI/TII di Sulawesi Selatan dipimpin oleh:",
    options: [
      "SM. Karto Suwirjo",
      "Ibnu Hajar alias Haderi",
      "Amir Fattah",
      "Kahar Muzakkar",
      "Mayor Alfredo",
    ],
    answer: 3,
  },
  // Nomer 2
  {
    q: "Polisi yang salah satu tugas pokoknya melakukan penyidikan terhadap tindak pidana umum adalah fungsi dari",
    options: [
      "Sat-Binmas",
      "Sabhara",
      "Densus 88",
      "Polair",
      "Sat-Reskrim",
    ],
    answer: 4,
  },
  // Nomer 3
  {
    q: "Indonesia merupakan salah satu negara dengan populasi terbanyak di Dunia. Indonesia menempati urutan ke-… sebagai negara dengan jumlah penduduk terbanyak dengan perkiraan jumlah penduduk sebesar 270 Juta Penduduk.",
    options: [
      "1",
      "2",
      "3",
      "4",
      "5",
    ],
    answer: 3,
  },
  // Nomer 4
  {
    q: "Hak asasi yang diatur dalam pembukaan UUD 1945 pada Alinea pertama adalah",
    options: [
      "Hak membentuk negara",
      "Hak menjadi warga negara",
      "Hak Merdeka",
      "Hak memeluk agama dan menjalankan agama",
      "Hak pendidikan",
    ],
    answer: 2,
  },
  // Nomer 5
  {
    q: "Kapolri diangkat dan diberhentikan oleh Presiden dengan persetujuan oleh DPR. Hal ini diatur di dalam",
    options: [
      "UUD 1945",
      "UU No. 2 Tahun 2002",
      "UU No. 28 Tahun 1987",
      "UU No. 14 Tahun 2022",
      "UU No. 39 Tahun 1999",
    ],
    answer: 1,
  },
  // Nomer 6
  {
    q: "Calon Kapolri adalah Perwira Tinggi Kepolisian Negara Republik Indonesia yang masih aktif dengan mempertimbangkan:",
    options: [
      "Jenjang, kepangkatan, dan karier",
      "Usulan dari Menteri Hukum dan HAM",
      "Usulan dari Kapolri sebelumnya",
      "Opsi A, B dan C benar",
      "Opsi A, B dan C tidak ada yang benar",
    ],
    answer: 0,
  },
  // Nomer 7
  {
    q: "Markas polisi yang berkedudukan di wilayah kabupaten adalah",
    options: [
      "Polda",
      "Polres",
      "Polsek",
      "Polri",
      "Polwil",
    ],
    answer: 1,
  },
  // Nomer 8
  {
    q: "Ibu kota negara Brazil adalah",
    options: [
      "Rio De Janeiro",
      "Sao Paolo",
      "Brasilia",
      "Salvador",
      "Franca",
    ],
    answer: 2,
  },
  // Nomer 9
  {
    q: "POLRI resmi terpisah dari ABRI pada tahun",
    options: [
      "1962",
      "1998",
      "1999",
      "2000",
      "1947",
    ],
    answer: 2,
  },
  // Nomer 10
  {
    q: "Berikut adalah negara-negara pecahan dari Uni Soviet, kecuali",
    options: [
      "Kroasia",
      "Uzbekistan",
      "Turkmenistan",
      "Moldova",
      "Latvia",
    ],
    answer: 0,
  },
  // Nomer 11
  {
    q: "Pada tahun berapa Papua akhirnya sepenuhnya bergabung menjadi bagian dari wilayah NKRI",
    options: [
      "1945",
      "1949",
      "1950",
      "1962",
      "1963",
    ],
    answer: 4,
  },
  // Nomer 12
  {
    q: "Berikut yang merupakan teori-teori masuknya Kerajaan Hindu-Buddha ke Nusantara, kecuali",
    options: [
      "Teori Brahmana",
      "Teori Ksatria",
      "Teori Waisya",
      "Teori Sudra",
      "Teori Arus Balik",
    ],
    answer: 3,
  },
  // Nomer 13
  {
    q: "Berbeda dengan Kerajaan bercorak Hindu atau Buddha yang menganut bahwa raja merupakan perwujudan dari dewa, Kerajaan dengan corak islam meyakini bahwa raja merupakan wakil dari Tuhan di Dunia (bukan sebagai perwujudannya), hal ini tercermin dari gelar",
    options: [
      "Sultan",
      "Sunan",
      "Khalifatullah",
      "Panembahan",
      "Panatagama",
    ],
    answer: 0,
  },
  // Nomer 14
  {
    q: "Berikut yang merupakan tujuan diajukannya petisi Soetardjo dalam sidang Volksraad di tahun 1937 adalah",
    options: [
      "Memperjuangkan kemudahan bagi berdirinya partai-partai politik",
      "Menolak kebijakan pemerintah Belanda untuk merekrut tentara pribumi",
      "Menuntut adanya pemilihan langsung bagi anggota Volksraad dari golongan Bumiputera",
      "Menuntut Belanda agar Indonesia diberi parlemen yang mandiri",
      "Menuntut agar diperbolehkannya dikumandangkan lagu Indonesia Raya",
    ],
    answer: 3,
  },
  // Nomer 15
  {
    q: "Kerajaan di Nusantara yang pertama kali melakukan kontak dengan ekspedisi Belanda adalah Kerajaan",
    options: [
      "Gowa",
      "Banten",
      "Mataram",
      "Maluku",
      "Malaka",
    ],
    answer: 1,
  },
  // Nomer 16
  {
    q: "<br>(1) Semangat Reconquesta <br>(2) Buku Umago Mundi <br>(3) Teori Heliosentris <br>(4) Kekalahan Kekaisaran Ottoman <br>Dari peristiwa-peristiwa berikut, yang menjadi faktor penjelajahan bangsa Eropa ke benua-benua lainnya adalah:",
    options: [
      "(1) dan (3)",
      "(2) dan (4)",
      "(1), (2), dan (3)",
      "(1), (2), (3), dan (4)",
      "(3) dan (4)",
    ],
    answer: 2,
  },
  // Nomer 17
  {
    q: "Agresi militer Belanda I merupakan wujud dari pelanggaran perjanjian",
    options: [
      "Roem Royem",
      "Bongaya",
      "Linggarjati",
      "Renville",
      "KMB",
    ],
    answer: 2,
  },
  // Nomer 18
  {
    q: "Untuk pertama kalinya, lagu “Indonesia Raya” dikumandangkan di depan umum ketika",
    options: [
      "Proklamasi kemerdekaan Indonesia",
      "Peresmian BPUPKI",
      "Kongres Pemuda I",
      "Kongres Pemuda II",
      "Perjanjian Kalijati",
    ],
    answer: 3,
  },
  // Nomer 19
  {
    q: "Berikut yang merupakan hasil dari diadakannya Kongres Pemuda I adalah kecuali",
    options: [
      "Mendesak Belanda membentuk badan perwakilan rakyat",
      "Menyegerakan hubungan antar organisasi pemuda",
      "Menyatukan organisasi pemuda",
      "Merencanakan Kongres Pemuda II",
      "Mengedepankan paham persatuan",
    ],
    answer: 0,
  },
  // Nomer 20
  {
    q: "Yang merupakan sungai terpanjang di Indonesia adalah",
    options: [
      "Sungai Nil",
      "Sungai Kapuas",
      "Sungai Mahakam",
      "Sungai Barito",
      "Sungai Musi",
    ],
    answer: 1,
  },
  // Nomer 21
  {
    q: "Motif utama dari pendudukan militer Jepang di Indonesia adalah",
    options: [
      "Membebaskan bangsa Asia dari imperialism Eropa",
      "Sikap superioritas dari Jepang",
      "Keinginan memerdekakan Indonesia dari Bangsa Sekutu",
      "Melakukan perdagangan dan monopoli pasar",
      "Membentuk persemakmuran Asia Timur Raya yang dipimpin Jepang",
    ],
    answer: 4,
  },
  // Nomer 22
  {
    q: "Salah satu kebijakan sosial budaya Jepang kepada penduduk Indonesia pada masa penjajahannya adalah kewajiban untuk membungkukkan diri menghadap matahari terbit yang dikenal dengan istilah",
    options: [
      "Harakiri",
      "Seikerei",
      "Keibodan",
      "Jugun Ianfu",
      "Tonarigumi",
    ],
    answer: 1,
  },
  // Nomer 23
  {
    q: "(1) adanya wilayah <br>(2) adanya penduduk <br>(3) Adanya Konstitusi <br>(4) Adanya Pengakuan dari negara lain <br>(5) Adanya Pemerintahan <br>Berikut yang merupakan syarat konstitutif dari berdirinya suatu negara adalah",
    options: [
      "(1), (2), dan (3)",
      "(2), (4), dan (5)",
      "(1), (3), dan (5)",
      "(1), (2), dan (5)",
      "(3), (4) dan (5)",
    ],
    answer: 3,
  },
  // Nomer 24
  {
    q: "Berikut yang merupakan tuntutan-tuntutan mahasiswa pada peristiwa reformasi 1998, kecuali",
    options: [
      "Ciptakan pemerintahan yang bersih dari KKN",
      "Laksanakan otonomi daerah yang seluas-luasnya",
      "Hapuskan dwifungsi ABRI",
      "Dihapusnya Dewan Perwakilan Rakyat dan dibentuknya Dewan Perwakilan Rakyat Gotong Royong",
      "Tegakkan supremasi hukum",
    ],
    answer: 3,
  },
  // Nomer 25
  {
    q: "Hari batik nasional diperingati tiap tanggal",
    options: [
      "2 Oktober",
      "9 Desember",
      "2 Juli",
      "26 Juni",
      "2 Mei",
    ],
    answer: 0,
  },
];
