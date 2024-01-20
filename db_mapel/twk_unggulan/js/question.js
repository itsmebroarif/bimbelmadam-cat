// Array dari object
const quiz = [
  {
    q:
      "1. Peraturan yang dianggap sebagai suara hati manusia. Aturan yang hidup tentang perilaku baik dan buruk berdasarkan kebenaran dan keadailan, disebut:",
    options: [
      "Norma Agama",
      "Norma Kesusilaan",
      "Norma Kesopanan",
      "Norma Keadilan",
      "Norma Hukum",
    ],
    answer: 1,
  },
  {
    q: "2. Secara harfiah, Pancasila diartikan…",
    options: [
      "Lima pedoman kebangsaan",
      "Dasar yang memiliki lima unsur",
      "Lima komponen penting",
      "Lima unsur hidup manusia",
      "Falsafah yang memiliki lima pedoman bernegara",
    ],
    answer: 0,
  },
  {
    q:
      "3. Dalam penjelasan UUD 1945 dinyatakan bahwa “negara Indonesia berdasarkan atas hukum (rechstaat) dan tidak berdasarkan kekuasaan belaka (machstaat). Oleh karena itu, negara dalam menjalankan aktivitasnya harus…",
    options: [
      "Berdasarkan pemerintah",
      "Berdasarkan hukum",
      "Mengacu pada kebutuhan",
      "Merujuk pada kepentingan",
      "Menuruti keinginan parlemen",
    ],
    answer: 1,
  },

  {
    q:
      "4. Segala suatu permasalahan yang terjadi yang menyangkut tindakan beserta hukuman pidana harus diselesaikan secara hukum, hal ini sesuai dengan amanat UUD 1945 Pasal…",
    options: ["1", "2", "3", "4", "5"],
    answer: 2,
  },
  {
    q:
      "5. Pancasila bukanlah ideologi yang memaksa kebebsan dan tanggung jawab masyarakat, melainkan menghargai kebebasan dan tanggung jawab masyarakat. Pernyataan berikut mencerminkan bahwa Pancasila adalah sebagai…",
    options: [
      "Ideologi tertutup",
      "Ideologi terbuka",
      "Dasar negara",
      "Sumber nilai",
      "Paradigma pembangunan",
    ],
    answer: 1,
  },
  {
    q:
      "6. Mana dari pernyataan berikut yang menggambarkan keberlakuan UUD 1945 pada masa RIS",
    options: [
      "UUD 1945 tidak berlaku sama sekali di Indonesia",
      "UUD 1945 menjadi pedoman kebangsaan secara diam-diam",
      "UUD 1945 berlaku secara sebagian pada pasal-pasal tertentu",
      "UUD 1945 berlaku di seluruh wilayah RIS",
      "UUD 1945 berlaku hanya di wilayah RI yang merupakan bagian dari RIS",
    ],
    answer: 3,
  },
  {
    q:
      "7. Sikap kritis dan inovatif sangat dominan pada era perkembangan zaman seperti dewasa ini, tetapi cara penyampaiannya harus tetap pada karakteristik dan budaya bangsa yang bersumber pada norma…",
    options: ["Hukum", "Susila", "Kesopanan", "Filsafat", "Adat istiadat"],
    answer: 1,
  },
  {
    q:
      "8. Dikeluarkannya surat perintah 11 Maret 1966 atau biasa dikenal dengan sebutan Supersemar, merupakan awal dimulainya masa …",
    options: [
      "Orde lama",
      "Orde baru",
      "Reformasi",
      "Pembangunan",
      "Indonesia Serikat",
    ],
    answer: 1,
  },
  {
    q:
      "9. Alasan kembalinya UUD 1945 berlaku setelah sebelumnya sempat digantikan dengan UUDS adalah karena UUD 1945 dianggap sebagai…",
    options: [
      "Konstitusi pertama yang berlaku",
      "Warisan budaya nenek moyang",
      "Konstitusi yang mampu menjaga kesatuan dan persatuan bangsa",
      "Konstitusi yang paling baik",
      "Konstitusi yang cocok untuk bangsa Indonesia",
    ],
    answer: 2,
  },
  {
    q:
      "10. Jika kita membicarakan mengenai konsep ideologi, maka Pancasila sebagai ideologi bangsa Indonesia tidak mengenal fasisme, hal ini beritik tolak pada bahwa fasisme…",
    options: [
      "Mengedepankan materialism modern dan individualisme",
      "Mengutamakan individualisme dan sikap radikal",
      "Memaksakan praktik sikap kebebasan tanpa batas",
      "Mengedepankan sikap revolusioner radikal terhadap tatanan sosial akibat ekonomi terbuka",
      "Memusatkan kekuasaan kepada satu orang",
    ],
    answer: 4,
  },
  {
    q: "11. Berikut yang merupakan hak-hak yang dimiliki DPR, kecuali?",
    options: [
      "Interpelasi",
      "Angket",
      "Menyatakan pendapat",
      "Imunitas",
      "Hak Constitutional Review",
    ],
    answer: 4,
  },
  {
    q:
      "12. Bhineka Tunggal Ika merupakan semboyan negara Indonesia yang menjadi dasar dalam mewujudkan persatuan dan kesatuan Indonesia, dimana kita harus dapat menerapkan dalam kehidupan sehari-hari. Mana dari perbuatan-perbuatan berikut yang tidak mencerminkan Bhineka Tunggal Ika",
    options: [
      "Bahasa Indonesia menjadi bahasa pengantar resmi di sekolah",
      "Pernikahan antara Siti yang bersuku Jawa dan Theo yang bersuku Karo",
      "Umat agama lain menghormati ibadah natalan yang diselenggarakan umat kristiani",
      "Menghargai perbedaan kepercayaan agama lain dengan ikut merayakan semua perayaan keagamaan semua agama di Nusantara.",
      "Mendengarkan pendapat dari anggota dewan dari partai lain pada rapat DPR",
    ],
    answer: 4,
  },
  {
    q:
      "13. Mana dari pernyataan berikut yang menggambarkan tugas dan fungsi dari lembaga Mahkamah Agung",
    options: [
      "Mengadili peninjauan kembali pada suatu perkara",
      "Menguji norma Undang-Undang terhadap UUD 1945",
      "Menyelesaikan sengketa antar lembaga negara",
      "Mengadili perkara pembubaran partai politik",
      "Menjaga dan menegakkan kehormatan, keluhuran, martabat, serta perilaku hakim",
    ],
    answer: 0,
  },
  {
    q:
      "14. Peraturan berikut merupakan peraturan perundang-undangan yang dikeluarkan oleh Presiden yang tingkatannya setara dengan UU adalah",
    options: ["Keppres", "Perpu", "PP", "Inpres", "Perpres"],
    answer: 4,
  },
  {
    q:
      "15. Proses amandemen yang telah dilakukan terhadap UUD 1945 dilakukan sudah sesuai dengan ketentuan sebagaimana mestinya yang diatur pada UUD 1945 tepatnya Pasal…",
    options: ["34", "35", "36", "37", "38"],
    answer: 3,
  },
  {
    q:
      "16. Seluruh warga negara memiliki hak dan kewajiban dalam ikut serta dalam upaya bela negara. Hal ini diatur dalam Pasal…",
    options: ["26 ayat (1)", "27 ayat (3)", "28", "30 ayat (1)", "31"],
    answer: 2,
  },
  {
    q:
      "17. MPR merupakan salah satu lembaga negara Indonesia yang diatur di dalam UUD 1945. MPR bersidang sedikitnya satu kali dalam",
    options: ["1 tahun", "2 tahun", "3 tahun", "4 tahun", "5 tahun"],
    answer: 4,
  },
  {
    q:
      "18. Pernyataan berikut yang tidak sesuai dengan prinsip politik luar negeri yang bebas aktif adalah, kecuali",
    options: [
      "Mengimpor barang dari negara lain",
      "Memutus hubungan diplomatic dengan negara lain",
      "Membantu salah satu pihak yang dirugikan sistem politik nasionalnya",
      "Mengirim pasukan ke luar negeri dalam urusan perdamaian",
      "Melakukan kerjasama politik dengan negara-negara besar",
    ],
    answer: 1,
  },
  {
    q:
      "19. Pada hakikatnya, Rakyat sebagai salah satu unsur dari negara adalah…",
    options: [
      "Penduduk pribumi wilayah negara",
      "Penduduk asli yang yang datang dari luar negeri",
      "Sekumpulan orang yang memiliki pandangan serta pemikiran yang sama",
      "Sekumpulan orang yang menurut hukum dikatakan sebagai warga negara",
      "Sekumpulan orang dengan latar belakang bangsa yang sama",
    ],
    answer: 3,
  },
  {
    q:
      "20. Mana dari pernyataan berikut yang merupakan pemerintahan pusat:",
    options: [
      "Presiden, wakil presiden, Polri, TNI, DPR, MPR",
      "Presiden, wakil presiden, DPR, MPR",
      "Presiden, wakil presiden, Menteri-menteri, DPR, MPR",
      "Presiden, wakil presiden, Menteri-menteri, TNI, Polri, DPR, MPR",
      "Presiden wakil presiden, Menteri-menteri.",
    ],
    answer: 2,
  },
  {
    q:
      "21. Pengeluaran negara yang menggunakan anggaran belanja negara untuk membiayai sekolah gratis merupakan salah satu contoh peneraan kebijakan…",
    options: [
      "Regulatif",
      "Redistributif",
      "Distributif",
      "Konstituen",
      "Regional",
    ],
    answer: 1,
  },
  {
    q:
      "22. Indonesia adalah negara yang di dalamnya terdapat enam agama yang diakui oleh negara. Hubungan agama dengan negara yaitu:",
    options: [
      "Hukum agama adalah hukum tertulis di Indonesia",
      "Indonesia memperhatikan kehidupan agama",
      "Indonesia tidak mengakui kepercayaan di luar enam agama yang diakui",
      "Indonesia menolak agama lain yang masuk",
      "Kehidupan bernegara menjadi tolak ukur berlakunya agama di Indonesia",
    ],
    answer: 4,
  },
  {
    q:
      "23. Bhineka tunggal ika terwjudu apabila dilandasi oleh sikap toleran, non-sektarian, inklusif, akomodatif, dan rukun. Hal ini menunjukan sifat Bhineka Tunggal Ika yang…",
    options: ["Divergen", "Konvergen", "Formalistis", "Sektarian", "Enklusif"],
    answer: 1,
  },
  {
    q:
      "24. Lambang negara berupa Garuda Pancasila dengan semboyan Sbhineka Tunggal Ika diatur dalam UUD 1945 Pasal …",
    options: ["33 ayat (1)", "33 ayat (2)", "35", "36A", "36B"],
    answer: 0,
  },
  {
    q:
      "25. Diantara tokoh berikut, yang bukan merupakan tokoh pendiri ASEAN adalah",
    options: [
      "Kwiek Gien Lie",
      "Thanat Khoman",
      "Narsisco Ramos",
      "Tun Abdul Razak",
      "S. Rajaratnam",
    ],
    answer: 0,
  },
  {
    q:
      "26. Dalam kacamata sejarah, Indonesia pada akhirnya memroklamasikan kemerdekaan Bangsa Indonesia pada 17 Agustus 1945 setelah sekian lama dijajah oleh Bangsa lain. Kemerdekaan yang diraih Indonesia sendiri bukanlah semerta-merta hadiah dari bangsa lain namun merupakan hasin perjuangan bangsa. Kemerdekaan juga bukanlah merupakan tujuan akhir namun merupakan titik awal dari Negara Indonesia itu sendiri. Gambaran tersebut tercermin tidak hanya dari catatan sejarah saja, melainkan juga dituangkan ke dalam bentuk tertulis dalam Undang-Undang Dasar, tepatnya pada…",
    options: [
      "Pembukaan UUD 1945 alinea I",
      "Pembukaan UUD 1945 alinea II",
      "Batang Tubuh UUD 1945 Pasal 36C",
      "Batang Tubuh UUD 1945 Pasal 23",
      "Batang Tubuh UUD 1945 Pasal 33 ayat (3)",
    ],
    answer: 4,
  },

  {
    q:
      "27. MPR merupakan salah satu lembaga negara yang diatur di dalam UUD 1945, tepatnya pada Pasal 2 dan 3. Anggota MPR terdiri dari…",
    options: [
      "Anggota DPR, DPD, dan DPRD terpilih",
      "Anggota DPR, DPD, DPRD terpilih serta perwakilan dari TNI dan Polri",
      "Anggota DPR dan DPD yang terpilih",
      "Anggota DPR, DPD, serta perwakilan dari TNI dan Polri",
      "Anggota DPR, DPRD, serta perwakilan dari TNI dan Polri",
    ],
    answer: 1,
  },
  {
    q:
      "28. BPUPKI dilantik pada 28 Mei 1945, kemudian mengadakan sidang pertamanya pada tanggal…",
    options: [
      "29 Mei – 1 Juni 1945",
      "1 Juni – 4 Juni 1945",
      "22 Juni 1945",
      "10 – 16 Juli 1945",
      "7 Agustus 1945",
    ],
    answer: 0,
  },
  {
    q:
      "29. Bergotong royong dan saling menjaga kerukunan hidup bermasyarakat merupakan salah satu contoh bahwa Pancasila mengandung nilai…",
    options: ["Dasar", "Instrumental", "Praksis", "Dinamis", "Pragmatis"],
    answer: 2,
  },
  {
    q:
      "30. Menjalankan program-program pemerintahan yang termuat dalam Rancangan Kerja Pemerintah (RKP) merupakan contoh bahwa Pancasila mengandung nilai…",
    options: ["Dasar", "Instrumental", "Praksis", "Dinamis", "Pragmatis"],
    answer: 2,
  },


];