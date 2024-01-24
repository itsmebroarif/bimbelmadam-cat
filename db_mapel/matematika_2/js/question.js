// Array dari object
const quiz = [
  // Nomer 1
  {
    q: "Adit menabung setiap bulan di sebuah bank. Pada bulan pertama Adit menabung sebesar Rp80.000,00 dan pada bulan-bulan berikutnya uang yang ditabung selalu Rp5.000,00 lebih besar dari uang yang ditabung pada bulan sebelumnya. Jumlah uang tabungan Adit selama satu tahun adalah ",
    options: [
      "Rp1.015.000,00 ",
      "Rp1.290.000,00",
      "Rp1.340.000,00",
      "Rp1.150.000,00",
      "Rp1.320.000,00",
    ],

    answer: 1,
  },
  // Nomer 2 
    {
      q: "Suku ketiga dari barisan aritmetika adalah 14. Jumlah suku kedua dan suku keenam adalah 34. Maka suku ke 10 dari barisan aritmetika tersebut adalah...",
      options: [
        "34",
        "24",
        "25",
        "44",
        "35",
      ],
  
      answer: 4,
    },
  // Nomer 3 
    {
      q: "Suatu barisan aritmetika memiliki suku kedua adalah 8, suku keempat adalah 14, dan suku terakhir 23. Jumlah semua suku barisan tersebut adalah …. ",
      options: [
        "56",
        "77",
        "98",
        "105",
        "12",
      ],
  
      answer: 2,
    },
  // Nomer 4
  {
    q: "Hasil produksi pakaian seragam sekolah putih abu-abu yang dibuat oleh siswa-siswa SMK Jurusan Tata Busana pada bulan pertama menghasilkan 80 setel. Setiap bulan berikutnya, hasil produksi meningkat sebanyak 10 setel sehingga membentuk deret aritmetika. Banyak hasil produksi selama 6 bulan pertama adalah ⋯ setel.",
    options: [
      "630",
      "260",
      "660",
      "230",
      "700",
    ],

    answer: 0,
  },
  // Nomer 5
  {
    q: "Harningsih bekerja di perusahaan dengan kontrak selama 10 tahun dengan gaji awal Rp 1.600.000,00. Setiap tahun Harningsih mendapat kenaikan gaji berkala sebesar Rp 200.000,00. Total seluruh gaji yang diterima Harningsih hingga menyelesaikan kontrak kerja adalah…. ",
    options: [
      "Rp 25.800.000,00 ",
      "Rp 25.000.000,00 ",
      "Rp 18.800.000,00 ",
      "Rp 25.200.000,00 ",
      "Rp 18.000.000,00 ",
    ],

    answer: 1,
  },
  // Nomer 6
  {
    q: "Sebuah pabrik memproduksi barang jenis A pada tahum pertama sebesar 1.960 unit. Tiap tahun produksi turun sebesar 120 unit sampai tahun ke-16. Total seluruh produksi yang dicapai sampai tahun ke-16 adalah…. ",
    options: [
      "45.760",
      "45.000",
      "16.960",
      "16.000",
      "9.760",
    ],

    answer: 2,
  },
  // Nomer 7
  {
    q: "Keuntungan seorang pedagang bertambah setiap bulan dengan jumlah yang sama. Jika keuntungan pada bulan pertama sebesar Rp46.000,00 dan pertambahan keuntungan setiap bulan Rp18.000,00, maka jumlah keuntungan sampai bulan ke-12 adalah ⋯",
    options: [
      "Rp1.740.000,00",
      "Rp1.750.000,00",
      "Rp1.840.000,00",
      "Rp1.950.000,00",
      "Rp2.000.000,00",
    ],

    answer: 0,
  },
  // Nomer 8
  {
    q: "Hasil produksi kerajinan seorang pengusaha setiap bulannya meningkat mengikuti aturan barisan geometri. Produksi pada bulan pertama sebanyak 20 unit kerajinan dan pada bulan keempat sebanyak  540 kerajinan. Hasil produksi selama 4 bulan adalah ⋯ unit kerajinan.",
    options: [
      "600",
      "800",
      "1.000",
      "1.200",
      "1.400",
    ],

    answer: 1,
  },
  // Nomer 9
  {
    q: "Seutas tali dipotong menjadi 5 bagian sehingga panjang potongan-potongan tali tersebut membentuk barisan geometri. Jika panjang tali terpendek 6 cm dan potongan tali terpanjang 96 cm, maka panjang tali semula adalah.... ",
    options: [
      "96 cm",
      "185 cm",
      "186 cm",
      "191 cm",
      "192 cm",
    ],

    answer: 2,
  },
  // Nomer 10
  {
    q: "Seorang peneliti ingin mengeksplorasi pembelahan bakteri X yang dihitung per menit. Awal mula bakteri dengan jumlah 6. Pembelahan menit berikutnya selalu 3 kali lebih banyak dibandingkan menit sebelumnya. Total bakteri X yang dapat diamati oleh peneliti pada menit ke-6 adalah..",
    options: [
      "240",
      "726",
      "2184",
      "6532",
      "1276",
    ],

    answer: 2,
  },
  // Nomer 11
  {
    q: "Jumlah konsumsi gula pasir oleh keluarga Pak Bintang pada tahun 2019 sebesar 10 kg, dan selalu meningkat dua kali lipat setiap tahun. Total konsumsi gula keluarga tersebut pada tahun 2019 sampai dengan tahun 2023 adalah....",
    options: [
      "310 kg",
      "320 kg",
      "330 kg",
      "340 kg",
      "350 kg",
    ],

    answer: 0,
  },
  // Nomer 12
  {
    q: "Pertambahan penduduk setiap tahun di Depok mengikuti barisan geometri. Pertambahan penduduk pada tahun 2018 sebesar 12 orang dan pada tahun 2020 sebesar 48 orang. Maka pertambahan penduduk pada tahun 2022 adalah...",
    options: [
      "96",
      "144",
      "192",
      "288",
      "384",
    ],

    answer: 2,
  },
  // Nomer 13
  {
    q: "Seutas kawat dipotong menjadi 5 bagian, yang panjangnya membentuk barisan geometri. Panjang kawat terpendek 16 cm dan terpanjang 81 cm. Panjang kawat semula adalah.... ",
    options: [
      "121 cm",
      "130 cm",
      "133 cm",
      "211 cm",
      "242 cm",
    ],

    answer: 3,
  },
  // Nomer 14
  {
    q: "Suatu bola dijatuhkan dari ketinggian 5 meter dan memantul kembali dengan 2/3 kali tinggi sebelumnya. Panjang lintasan gerak bola sampai berhenti adalah ….",
    options: [
      "10 m",
      "15 m",
      "20 m",
      "25 m",
      "30 m",
    ],

    answer: 3,
  },
  // Nomer 15
  {
    q: "Diberikan angka 2,4, 5, 6, 8, 9 akan dibentuk bilangan ganjil terdiri dari 3 digit angka yang berbeda. Maka banyak bilangan yang terbentuk nilainya kurang dari 500 adalah...",
    options: [
      "144",
      "72",
      "24",
      "20",
      "26",
    ],

    answer: 4,
  },
  // Nomer 16
  {
    q: "Dari angka 0, 1, 2, 3, dan 4 akan dibuat bilangan tiga angka yang kurang dari 400 dan tidak ada angka yang berulang. Banyak kemungkinan bilangan berbeda yang dapat dibuat adalah..",
    options: [
      "64",
      "48",
      "36",
      "27",
      "24",
    ],

    answer: 2,
  },
  // Nomer 17
  {
    q: "Diberikan sekumpulan angka, yaitu: 0, 1, 2, 3, 5, 6, dan 9. Banyaknya bilangan ribuan yang dapat disusun berbeda adalah ....",
    options: [
      "88",
      "154",
      "216",
      "312",
      "480",
    ],

    answer: 4,
  },
  // Nomer 18
  {
    q: "Diberikan angka 1, 3, 4, 6, 7, 8, dan 9 yang akan disusun bilangan genap empat angka yang lebih besar dari 4000. Banyaknya susunan bilangan yang dapat dibuat adalah ....",
    options: [
      "360",
      "240",
      "120",
      "80",
      "60",
    ],

    answer: 1,
  },
  // Nomer 19
  {
    q: "Lionel berencana mengikuti les tambahan matematika, bahasa Inggris, dan Kimia. Hari Minggu, Lionel menggunakan khusus untuk latihan sepak bola. Banyaknya cara menyusun jadwal les tambahan Lionel dalam seminggu dengan syarat dalam sehari tidak boleh lebih dari satu kali les adalah ....",
    options: [
      "20",
      "35",
      "120",
      "210",
      "840",
    ],

    answer: 2,
  },
  // Nomer 20
  {
    q: "Tia membuat email dan menyusun kata sandi yang terdiri 4 huruf yang diikuti oleh 3 angka yang berbeda. Jose menyusun huruf berdasarkan dari namanya sehingga banyaknya kata sandi yang dapat dibuat sebanyak ....",
    options: [
      "18",
      "432",
      "540",
      "720",
      "4.320",
    ],

    answer: 4,
  },
  // Nomer 21
  {
    q: "Abed melakukan tryout esay yang harus mengerjakan 8 dari 10 soal yang disediakan. Jika terdapat syarat soal awal dan akhir harus dikerjakan, maka kemungkinan Abed untuk memilih sisa soal untuk dikerjakan?",
    options: [
      "5",
      "10",
      "15",
      "20",
      "25",
    ],

    answer: 1,
  },
  // Nomer 22
  {
    q: "Pembentukan kata yang dapat disusun dari kata “BINTARA” adalah ....",
    options: [
      "5.040",
      "4.050",
      "2.520",
      "2.250",
      "1.680",
    ],

    answer: 2,
  },
  // Nomer 23
  {
    q: "Dalam meja bundar, delapan orang duduk posisi melingkar, di antaranya ada Neymar dan Suarez. Susunan banyaknya cara mereka duduk dengan syarat Neymar dan Suarez selalu berdampingan adalah ....",
    options: [
      "5.040",
      "2.520",
      "1.440",
      "1.080",
      "720",
    ],

    answer: 2,
  },
  // Nomer 24
  {
    q: "Dalam suatu akademi atlet sepak bola terdiri dari 12 anggota yang dilatih oleh Shin Tae-Yong. Kemudian, Shin Tae-Yong memilih 3 kandidat terbaik untuk bergabung ke timnas utama. Banyaknya kemungkinan dalam pemilihan 3 kandidat terbaik adalah ....",
    options: [
      "60",
      "220",
      "990",
      "1320",
      "1470",
    ],

    answer: 1,
  },
  // Nomer 25
  {
    q: "Kenzo mempunyai misteri box yang berisi 6 dadu warna merah, 4 dadu warna putih, dan 3 dadu warna biru. Kenzo ingin mengambil 6 dadu, terdiri dari 3 dadu merah, 2 dadu putih, dan 1 dadu warna biru. Banyaknya susunan Kenzo untuk mendapatkan dadu-dadu tersebut adalah ....",
    options: [
      "60",
      "120",
      "180",
      "240",
      "360",
    ],

    answer: 4,
  },
  // Nomer 26
  {
    q: "Terdapat dua buah dadu yang diundi secara bersamaan, maka peluang mata dadu tersebut muncul berjumlah 2 atau 6 adalah ....",
    options: [
      "3/72",
      "1/36",
      "1/72",
      "2/9",
      "1/6",
    ],

    answer: 4,
  },
  // Nomer 27
  {
    q: "Dua buah dadu dilambungkan secara bersamaan sebanyak 180 kali. Frekuensi harapan munculnya mata dadu berjumlah 5 atau 10 adalah ....",
    options: [
      "15 kali",
      "21 kali",
      "28 kali",
      "35 kali",
      "42 kali",
    ],

    answer: 3,
  },
  // Nomer 28
  {
    q: "Suatu hari diadakan survei terhadap 100 orang tentang transportasi yang digunakan untuk pergi ke tempat kerja. Hasil survei berupa:10 orang menggunakan mobil pribadi, 25 orang menggunakan motor pribadi, 40 orang menggunakan kereta (Seperti KRL/LRT), 25 orang menggunakan bus umum Apabila dari 100 orang yang disurvei tersebut dipilih 1 orang secara acak, maka peluang terpilih orang yang menggunakan bus umum ke tempat kerja adalah ....",
    options: [
      "2/5",
      "1/3",
      "1/4",
      "3/4",
      "1/2",
    ],

    answer: 2,
  },
  // Nomer 29
  {
    q: "Jose membawa sebuah keranjang yang berisi 5 bola warna merah dan 6 bola warna putih. Jose mengambil 6 bola sekaligus secara acak. Peluang terambilnya 4 bola warna merah dan 2 bola warna putih adalah ....",
    options: [
      "20/77",
      "25/77",
      "30/77",
      "55/77",
      "65/77",
    ],

    answer: 1,
  },
  // Nomer 30
  {
    q: "Shata mempunyai box yang berisi 6 kartu warna hitam dan 4 kartu warna putih. Lalu diambil secara acak dua kali secara berturut-turut dengan masing-masing satu kelereng per box. Peluang kedua kelereng yang terambil adalah warna hitam adalah ....",
    options: [
      "3/5",
      "5/9",
      "1/2",
      "1/3",
      "1/6",
    ],

    answer: 3,
  },
]
