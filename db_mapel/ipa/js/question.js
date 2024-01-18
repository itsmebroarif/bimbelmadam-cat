// Array dari object
const quiz = [
  // Nomer 1
  {
    q: "Perhatikan pernyataan berikut: <br>1.	Keluarnya cairan dari ujung daun jambu <br>2.	Menguncupnya daun putri malu saat disentuh <br>3.	Adanya bunga pada tanaman padi <br>4.	Terdapatnya duri pada tanaman Kaktus <br> Ciri makhluk hidup yang menunjukan kemampuan berkembang, beradaptasi, dan peka terhadap rangsangan secara berurutan adalah",
    options: [
      "1, 2, 3",
      "2, 3, 4",
      "3, 4, 2",
      "4, 1, 2"
    ],
    answer: 2,
  },
  //   Nomer 2
  {
    q: "Jelaskan bagaimana konsep keanekaragaman hayati berkontribusi pada kestabilan ekosistem",
    options: [
      "Semakin tinggi keanekaragaman, semakin rendah stabilitas",
      "Semakin tinggi keanekaragaman, semakin tinggi stabilitas",
      "Keanekaragaman tidak berpengaruh pada stabilitas",
      "Kestabilan ekosistem tidak terkait dengan keanekaragaman hayati"
    ],
    answer: 1,
  },
 // Nomer 3
  {
    q: "Apa yang dimaksud dengan fertilisasi dan di mana proses ini terjadi dalam sistem reproduksi manusia?",
    options: [
      "Penggabungan sel telur dan sperma; saluran tuba ",
      "Pembelahan sel telur menjadi dua sel anak; rahim ",
      "Pembentukan sel kelamin pada ovarium; rahim ",
      "Pelepasan sel telur dari ovarium; saluran tuba",
    ],
    answer: 0,
  },
// Nomer 4
  {
    q: "Apakah peran estrogen dalam siklus menstruasi?",
    options: [
      "Merangsang pertumbuhan rambut pada Wanita",
      "Merangsang pertumbuhan sel telur di ovarium",
      "Memelihara lapisan rahim untuk kehamilan",
      "Merangsang produksi sperma pada pria"
    ],
    answer: 2,
  },
// Nomer 5
  {
    q: "Bagaimana tumbuhan dapat beradaptasi dengan kondisi lingkungan yang kering? Jelaskan dua mekanisme adaptasi.",
    options: [
      "Fotosintesis dan respirasi",
      "Stomata yang tertutup dan akar yang dalam ",
      "Daun lebar dan penyerapan air melalui stomata ",
      "Daun berbulu dan produksi banyak buah"
    ],
    answer: 1,
  },
// Nomer 6
  {
    q: "Apa fungsi utama dari floem dalam sistem vaskular tumbuhan?",
    options: [
      "Mengangkut air dan mineral dari akar ke daun ",
      "Mengangkut makanan hasil fotosintesis dari daun ke seluruh tumbuhan",
      "Memberikan dukungan struktural pada batang ",
      "Mentransfer energi dari matahari ke sel tumbuhan",
    ],
    answer: 1,
  },
// Nomer 7
  {
    q: "7.	Sebuah benda bergerak dengan percepatan 2 m/s². Jika gaya yang bekerja pada benda adalah 4 N, berapakah massa benda tersebut?",
    options: [
      "0.5 kg ",
      "2 kg ",
      "8 kg ",
      "16 kg"
    ],
    answer: 1,
  },
// Nomer 8
  {
    q: "Apa yang akan terjadi pada gerak sebuah benda jika gaya yang bekerja pada benda itu nol?",
    options: [
      "Benda akan berhenti",
      "Benda akan bergerak dengan kecepatan konstan",
      "Benda akan bergerak dengan percepatan konstan",
      "Benda akan bergerak dengan kecepatan bervariasi"
    ],
    answer: 1,
  },
// Nomer 9
  {
    q: "Sebuah benda diangkat setinggi 5 meter dari tanah. Berapa usaha yang diperlukan untuk mengangkat benda tersebut jika gaya adalah 10 N",
    options: [
      "25 J",
      "50 J",
      "100 J",
      "250 J"
    ],
    answer: 1,
  },
// Nomer 10
  {
    q: "Mengapa keberlanjutan sumber daya alam penting bagi ekosistem? Jelaskan dampaknya jika keberlanjutan tersebut terancam.",
    options: [
      "Keseimbangan ekosistem terganggu ",
      "Penurunan keanekaragaman hayati ",
      "Peningkatan kualitas air ",
      "D.	Perubahan iklim global"
    ],
    answer: 0,
  },
// Nomer 11
  {
    q: "Bagaimana hormon reproduksi pada manusia berperan dalam mengatur siklus menstruasi.",
    options: [
      "Hormon estrogen merangsang pertumbuhan rambut ",
      "Hormon progesteron memicu ovulasi ",
      "Hormon FSH merangsang produksi sperma ",
      "Hormon LH memelihara lapisan Rahim"
    ],
    answer: 3,
  },
// Nomer 12
  {
    q: "Apakah peran sel telur dan sperma dalam pembentukan individu baru? Jelaskan kontribusi keduanya.",
    options: [
      "Sperma menyediakan materi genetik, sedangkan sel telur menyediakan nutrisi ",
      "Sel telur menyediakan materi genetik, sedangkan sperma menyediakan nutrisi",
      "Keduanya menyediakan materi genetik dan nutrisi ",
      "Keduanya tidak berkontribusi pada pembentukan individu baru"
    ],
    answer: 0,
  },
// Nomer 13
  {
    q: "Mengapa stomata pada daun tumbuhan sering ditemukan di bagian bawah daripada bagian atas daun?",
    options: [
      "Untuk mencegah penguapan air",
      "Untuk meningkatkan penyerapan sinar matahari",
      "Agar dapat berinteraksi dengan hewan yang lewat",
      "Untuk mempercepat transpirasi"
    ],
    answer: 0,
  },
// Nomer 14
  {
    q: "Berikut ini yang dimaksud dengan konsep energi potensial adalah",
    options: [
      "Energi potensial yang berkaitan dengan tinggi suatu objek",
      "Energi potensial yang dimiliki oleh objek yang bergerak",
      "Energi yang tersimpan dalam pegas",
      "Energi yang dihasilkan dari reaksi kimia"
    ],
    answer: 0,
  },
// Nomer 15
  {
    q: "Apa yang menjadi ciri-ciri makhluk hidup?",
    options: [
      "Tidak berubah dari waktu ke waktu",
      "Mampu tumbuh dan berkembang",
      "Tidak memerlukan energi",
      "Tidak dapat bereproduksi"
      ],
    answer: 1,
  },
// Nomer 16
  {
    q: "Hukum Newton yang menyatakan bahwa setiap tindakan memiliki reaksi yang sama besar, tetapi berlawanan arah, adalah.",
    options: [
      "Hukum Pertama Newton ",
      "Hukum Kedua Newton ",
      "Hukum Ketiga Newton ",
      "Hukum Keempat Newton"
    ],
    answer: 2,
  },
// Nomer 17 (Update Soal)
  {
    q: "Jika sebuah benda ditarik sejauh 200 cm dengan gaya seperti pada gambar di bawah, maka usaha yang dilakukan adalah <br> Jika sebuah benda ditarik sejauh 200cm dengan gaya kekanan 30N dan kekiri masing-masing 10 N dan 5 N. Maka usaha yang dilakukan benda tersebut adalah? ",
    options: [
      "20 Joule",
      "25 Joule",
      "30 Joule ",
      "35 Joule"
    ],
    answer: 2,
  },
// Nomer 18
  {
    q: "Apa dampak keberlanjutan sumber daya alam jika keberlanjutan tersebut terancam?",
    options: [
      "Keseimbangan ekosistem terganggu ",
      "Penurunan keanekaragaman hayati ",
      "Peningkatan kualitas air",
      "Perubahan iklim global"
    ],
    answer: 0,
  },
// Nomer 19
  {
    q: "Bentuk interaksi antarorganisme yang melibatkan kerugian satu pihak dan keuntungan pihak lain disebut",
    options: [
      "Mutualisme",
      "Parasitisme",
      "Komensalisme",
      "Amensalisme"
    ],
    answer: 1,
  },
// Nomer 20
  {
    q: "Jika gaya yang bekerja pada benda tetap, tetapi massa benda meningkat, apa yang terjadi pada percepatannya?",
    options: [
      "Percepatan meningkat ",
      "Percepatan tetap ",
      "Percepatan berkurang",
      "Tidak dapat ditentukan"
    ],
    answer: 2,
  },
// Nomer 21
  {
    q: "Energi yang dimiliki oleh benda karena geraknya disebut",
    options: [
      "Energi Potensial",
      "Energi Kinetik",
      "Energi Mekanik",
      "Energi Termal"
    ],
    answer: 0,
  },
// Nomer 22
  {
    q: "Proses alami yang menghasilkan adaptasi dalam suatu populasi seiring waktu disebut",
    options: [
      "Rekombinasi genetik",
      "Seleksi alam",
      "Mutasi",
      "Isolasi reproduksi"
    ],
    answer: 1,
  },
// Nomer 23
  {
    q: "Sel telur manusia disebut juga dengan",
    options: [
      "Ovarium",
      "Ovum",
      "Oosit",
      "Ovulasi"
      ],
    answer: 1,
  },
// Nomer 24
  {
    q: "Struktur tumbuhan yang memiliki fungsi untuk sistem pernapasan dalam batang tumbuhan adalah",
    options: [
      "Lentisel",
      "Trakeid",
      "Stomata",
      "Epidermi"
      ],
    answer: 0,
  },
// Nomer 25
  {
    q: "25.	Perhatikan beberapa kelenjar di bawah ini : <br> 1.	Kelenjar submaksila <br> 2.	Kelenjar parotis <br> 3.	Kelenjar submandibular <br> 4.	Kelenjar sublingual <br> Saliva yang terllibat dalam sistem pencernaan dihasilkan oleh kelenjar",
    options: [
      //  Ini Array Pertama = 0
      "1, 2, 3",
      // Ini Array kedua = 1
      "2, 3, 4",
      // Ini Array Ketiga = 2
      "3, 4, 1",
      // Ini Array Keempat = 3
      "4, 1, 2",
    ],
    answer: 1,
  },


];

