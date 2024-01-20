// Array dari object
const quiz = [
  // Nomer 1
  {
    q: "Apa yang menjadi ciri utama masyarakat pra aksara? ",
    options: [
      "Pemerintahan sentral",
      "Tulisan dan literasi ",
      "Pertukaran mata uang",
      "Tidak memiliki sistem tulisan ",
    ],
    answer: 3,
  },
  // Nomer 2
  {
    q: "Kegiatan utama masyarakat pra aksara yang berkaitan dengan menangkap hewan liar disebut sebagai:",
    options: [
      "Pertanian",
      "Perburuan",
      "Pertukaran",
      "Pemukiman ",
    ],
    answer: 1,
  },
  // Nomer 3
  {
    q: "Apa yang menjadi faktor utama dalam pemilihan lokasi pemukiman masyarakat pra aksara? ",
    options: [
      "Pusat perdagangan ",
      "Ketinggian tempat",
      "Sumber air",
      "Jumlah penduduk ",
    ],
    answer: 2,
  },
  // Nomer 4
  {
    q: "Alat pertanian yang digunakan untuk membajak tanah pada zaman pra aksara adalah:",
    options: [
      "Cangkul",
      "Sabit",
      "Arit",
      "Peralatan pertukangan",
      "Algiers",
    ],
    answer: 2,
  },
  // Nomer 5
  {
    q: "Apa yang menjadi tujuan utama pertukaran barang dalam masyarakat pra aksara?",
    options: [
      "Meningkatkan kemakmuran",
      "Membentuk aliansi politik",
      "Menjaga perdamaian",
      "Memahami budaya",
    ],
    answer: 0,
  },
  // Nomer 6
  {
    q: "Kelangkaan dalam konteks ekonomi terjadi karena:",
    options: [
      "Keterbatasan kebutuhan",
      "Keterbatasan sumber daya",
      "Harga barang yang tinggi ",
      "Permintaan yang rendah",
    ],
    answer: 1,
  },
  // Nomer 7
  {
    q: "Contoh barang yang termasuk kebutuhan sekunder adalah:",
    options: [
      "Smartphone",
      "Pendidikan ",
      "Pakaian sehari-hari",
      "Mobil mewah "
    ],
    answer: 2,
  },
  // Nomer 8
  {
    q: "Apa yang membedakan antara kebutuhan dan keinginan",
    options: [
      "Kebutuhan lebih penting dari keinginan",
      "Kebutuhan dapat dipenuhi, sedangkan keinginan tidak ",
      "Kebutuhan bersifat subjektif, sedangkan keinginan bersifat objektif",
      "Semua jawaban salah",
    ],
    answer: 2,
  },
  // Nomer 9
  {
    q: "Kegiatan ekonomi yang bertujuan untuk memenuhi kebutuhan dan keinginan masyarakat disebut sebagai:",
    options: [
      "Produksi ",
      "Konsumsi",
      "Distribusi",
      "Investasi",
    ],
    answer: 1,
  },
  // Nomer 10
  {
    q: "Apa yang dimaksud dengan kelangkaan relatif?",
    options: [
      "Barang langka di pasaran",
      "Ketersediaan sumber daya lebih dari cukup",
      "Keterbatasan sumber daya dibandingkan dengan kebutuhan",
      "Tidak ada kebutuhan yang terpenuhi",
    ],
    answer: 2,
  },
  // Nomer 11
  {
    q: "Bagaimana peran media massa dalam proses sosialisasi? ",
    options: [
      "Hanya memberikan hiburan",
      "Memiliki dampak kecil pada pembentukan nilai dan norma",
      "Memberikan informasi yang netral",
      "Memainkan peran penting dalam mentransmisikan nilai dan norma sosial",
    ],
    answer: 3,
  },
  // Nomer 12
  {
    q: "Proses sosialisasi berlangsung sepanjang:",
    options: [
      "Masa kanak-kanak saja",
      "Seluruh siklus kehidupan",
      "Masa remaja",
      "Saat individu bekerja",
    ],
    answer: 1,
  },
  // Nomer 13
  {
    q: "Bagaimana peran individu dalam proses sosialisasi?",
    options: [
      "Hanya menerima pengaruh ",
      "Tidak memiliki peran, semua berasal dari agensi sosialisasi",
      "Aktif berpartisipasi dan menafsirkan pesan sosial",
      "Panembahan Hanya terjadi dalam konteks keluarga",
      "Panatagama",
    ],
    answer: 2,
  },
  // Nomer 14
  {
    q: "Teori interaksionisme simbolik menekankan pentingnya: ",
    options: [
      "Struktur sosial",
      "Interaksi langsung antara individu",
      "Konflik kelas",
      "Peran media massa",
    ],
    answer: 1,
  },
  // Nomer 15
  {
    q: "Bagaimana peran sekolah dalam proses sosialisasi?",
    options: [
      "Hanya memberikan pengetahuan akademis",
      "Mengajarkan norma dan nilai sosial ",
      "Tidak memiliki pengaruh signifikan",
      "Hanya berfokus pada kegiatan olahraga ",
    ],
    answer: 1,
  },
  // Nomer 16
  {
    q: "Apa yang menjadi dampak pertumbuhan penduduk yang tinggi di negara berkembang?",
    options: [
      "Penurunan tingkat pengangguran ",
      "Meningkatnya tingkat melek huruf",
      "Tantangan dalam penyediaan layanan kesehatan dan pendidikan ",
      " Penurunan tingkat urbanisasi ",
    ],
    answer: 2,
  },
  // Nomer 17
  {
    q: "Indeks Pembangunan Manusia (IPM) mencakup pengukuran terhadap:",
    options: [
      "Produk Domestik Bruto (PDB) per kapita",
      "Kesejahteraan sosial dan ekonomi ",
      " Kepadatan penduduk",
      " Ketergantungan pada sektor pertanian",
    ],
    answer: 1,
  },
  // Nomer 18
  {
    q: "Apa yang menjadi karakteristik negara berkembang dalam perdagangan internasional?",
    options: [
      "Ekspor komoditas primer",
      "Dominasi pasar teknologi tinggi",
      "Ketergantungan pada impor",
      "Persaingan ekonomi internal yang rendah",
    ],
    answer: 0,
  },
  // Nomer 19
  {
    q: "Faktor apa yang dapat menyebabkan ketidaksetaraan ekonomi di negara berkembang?",
    options: [
      "Investasi dalam pendidikan",
      "Ketergantungan pada sektor industri",
      "Distribusi pendapatan yang adil ",
      "Korupsi dan ketidaksetaraan dalam akses ke sumber daya",
    ],
    answer: 3,
  },
  // Nomer 20
  {
    q: "Faktor apa yang dapat mendorong perkembangan ekonomi negara berkembang?",
    options: [
      " Terisolasi dari perdagangan internasional",
      " Dukungan kebijakan pemerintah yang lemah ",
      "Investasi dalam infrastruktur dan pendidikan ",
      "Pertumbuhan penduduk yang tinggi",
    ],
    answer: 2,
  },
  // Nomer 21
  {
    q: "Faktor apa yang dapat menyebabkan pergeseran kurva permintaan ke kanan? ",
    options: [
      "Peningkatan harga barang",
      "Peningkatan pendapatan konsumen",
      "Penurunan harga barang",
      " Penurunan tingkat pendapatan konsumen",
    ],
    answer: 1,
  },
  // Nomer 22
  {
    q: "Bagaimana perubahan dalam teknologi produksi dapat mempengaruhi penawaran suatu barang?",
    options: [
      "Tidak berpengaruh ",
      "Menyebabkan pergeseran ke kiri pada kurva penawaran ",
      " Menyebabkan pergeseran ke kanan pada kurva penawaran",
      " Membuat kurva penawaran menjadi vertikal ",
    ],
    answer: 2,
  },
  // Nomer 23
  {
    q: "Apa yang dimaksud dengan pasar persaingan sempurna?",
    options: [
      "Hanya ada satu produsen di pasar",
      "Banyak produsen dan konsumen dengan produk yang serupa ",
      "Pemerintah mengontrol seluruh produksi ",
      "Tidak ada produsen atau konsumen ",
    ],
    answer: 1,
  },
  // Nomer 24
  {
    q: "Bagaimana pajak pada suatu barang dapat mempengaruhi pasar? ",
    options: [
      "Menyebabkan penurunan harga barang",
      "Membuat kurva penawaran bergeser ke kiri",
      "Meningkatkan kuantitas yang ditawarkan ",
      "Membuat harga keseimbangan lebih rendah ",
    ],
    answer: 1,
  },
  // Nomer 25
  {
    q: "Faktor apa yang dapat menyebabkan pergeseran kurva penawaran ke kiri?",
    options: [
      " Peningkatan harga barang",
      "Penurunan harga faktor produksi ",
      "Penurunan biaya produksi ",
      "Peningkatan teknologi produksi ",
    ],
    answer: 2,
  },
];