// Array dari object
/* Maksud dari array dalam objek penjelasannya sebagai berikut */
/* 
Dalam konteks soal yang telah diberikan, nilai pada properti "answer" pada setiap objek dalam array "quiz" menunjukkan indeks dari opsi jawaban yang benar. Berikut penjelasan untuk setiap nilai "answer" yang disebutkan:

    answer: 0: Ini berarti jawaban yang benar adalah opsi yang memiliki indeks 0 dalam array opsi jawaban. Dalam banyak kasus JavaScript, indeks dimulai dari 0, jadi ini mengacu pada opsi pertama.

    answer: 11: Dalam konteks ini, sepertinya ada kekeliruan karena nilai "answer" tidak boleh melebihi jumlah opsi jawaban yang ada. Nilai 11 tidak sesuai dengan jumlah opsi pada pertanyaan yang diberikan. Sebaiknya periksa kembali dan pastikan nilai "answer" sesuai dengan indeks yang benar.

    answer: 2: Ini berarti jawaban yang benar adalah opsi yang memiliki indeks 2 dalam array opsi jawaban. Sama seperti penjelasan untuk poin pertama, ini mengacu pada opsi ketiga.

    answer: 3: Ini berarti jawaban yang benar adalah opsi yang memiliki indeks 3 dalam array opsi jawaban. Ini mengacu pada opsi keempat.
*/
const quiz = [
    {
        q: 'Ketika melihat kode JavaScript yang sulit dimengerti, sebaiknya kamu ?',
        options: [
            //  Ini Array Pertama = 0
            "Berhenti mencoba",
            // Ini Array kedua = 1
            "Berteriak kesal",
            // Ini Array Ketiga = 2
            "Mencari bantuan",
            // Ini Array Keempat = 3
            "Ubah profesi jadi tukang kebun",
        ],
        answer: 2,
    },
    {
        q: 'Lengkapilah Pribahasa berikut! <br><b>"Rumput tetangga selalu lebih...."</b></br>',
        options: ["Hijau", "Panjang", "Indah", "Berisik"],
        answer: 0,
    },
    
    {
        q: "Sebuah array dimulai dari index ke-",
        options: ["0", "1", "-1", "10"],
        answer: 0,
    },
    
    {
        q: "Ketika bekerja dengan array, method yang digunakan untuk menambahkan elemen di akhir array adalah?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0,
    },
    
    {
        q: "Jika kamu ingin mengambil subarray dari index 2 hingga 5 dari sebuah array, kamu akan menggunakan metode?",
        options: ["slice()", "splice()", "concat()", "map()"],
        answer: 0,
    },
    
    {
        q: 'Dalam JavaScript, apa yang akan muncul jika kita mencetak nilai dari <code>undefined + 5</code>?',
        options: ["5", "undefined", "NaN", "0"],
        answer: 2,
    },
    
    {
        q: "Apa output dari <code>console.log(2 + '2')</code>?",
        options: ["22", "4", "NaN", "Error"],
        answer: 0,
    },
    
    {
        q: "Berapa nilai dari <code>true + 3</code>?",
        options: ["4", "true3", "Error", "NaN"],
        answer: 0,
    },
    
    {
        q: "Apa hasil dari <code>'5' - 3</code>?",
        options: ["2", "8", "53", "Error"],
        answer: 0,
    },
    
    {
        q: "Berapa panjang dari array <code>['apel', 'mangga', 'jeruk']</code>?",
        options: ["3", "4", "2", "5"],
        answer: 0,
    },
    
    {
        q: 'Apakah yang dimaksud dengan <code>Array.isArray()</code> dalam JavaScript?',
        options: [
            "Mengecek apakah variabel adalah array",
            "Mengecek apakah string termasuk array",
            "Mengecek apakah objek termasuk array",
            "Semua jawaban benar",
        ],
        answer: 0,
    },
    
    {
        q: "Manakah metode array yang digunakan untuk menyortir elemen array?",
        options: ["sort()", "filter()", "map()", "reduce()"],
        answer: 0,
    },
    
    {
        q: 'Apakah output dari <code>[1, 2, 3, 4].map(num => num * 2)</code>?',
        options: ["[2, 4, 6, 8]", "[1, 4, 9, 16]", "[2, 3, 4, 5]", "[1, 2, 3, 4]"],
        answer: 0,
    },
    
    {
        q: "Apa yang akan dilakukan oleh metode <code>forEach()</code> pada setiap elemen array?",
        options: [
            "Menambahkan elemen baru",
            "Menghapus elemen",
            "Mengecek keberadaan elemen",
            "Mengeksekusi fungsi pada setiap elemen",
        ],
        answer: 3,
    },
    
    {
        q: "Dalam JavaScript, apa yang akan muncul jika kita mencetak nilai dari <code>null + 5</code>?",
        options: ["5", "null", "NaN", "Error"],
        answer: 2,
    },
    
    {
        q: "Bagaimana cara menghapus elemen terakhir dari array?",
        options: ["pop()", "shift()", "delete()", "splice()"],
        answer: 0,
    },
    
    {
        q: 'Apa yang dimaksud dengan metode <code>indexOf()</code> pada array?',
        options: [
            "Mengembalikan index dari elemen pertama yang ditemukan",
            "Mengembalikan nilai dari elemen terakhir yang ditemukan",
            "Mengembalikan index dari elemen terakhir yang ditemukan",
            "Semua jawaban benar",
        ],
        answer: 0,
    },
    
    {
        q: "Berapa hasil dari <code>[1, 2, 3, 4].filter(num => num > 2)</code>?",
        options: ["[1, 2]", "[3, 4]", "[2, 3, 4]", "[1, 3]"],
        answer: 1,
    },
    
    {
        q: "Bagaimana cara menambahkan elemen ke array di index tertentu dengan menggunakan metode <code>splice()</code>?",
        options: [
            "splice(index, 0, elemen)",
            "splice(index, 1, elemen)",
            "push(elemen)",
            "unshift(elemen)",
        ],
        answer: 0,
    },
    
    {
        q: 'Apakah yang dilakukan oleh metode <code>join()</code> pada array?',
        options: [
            "Menggabungkan semua elemen array menjadi string",
            "Menghilangkan elemen terakhir dari array",
            "Menyaring elemen array",
            "Mengganti elemen array",
        ],
        answer: 0,
    },
    
    {
        q: 'Apa output dari <code>[1, 2, 3, 4].reduce((acc, num) => acc + num)</code>?',
        options: ["10", "24", "2", "1234"],
        answer: 1,
    },
    
    {
        q: "Manakah metode yang digunakan untuk mengubah semua elemen array?",
        options: ["map()", "filter()", "forEach()", "reduce()"],
        answer: 2,
    },
    
    {
        q: 'Apakah yang dilakukan oleh metode <code>reverse()</code> pada array?',
        options: [
            "Membalikkan urutan elemen array",
            "Menghapus elemen terakhir",
            "Menambahkan elemen baru di awal array",
            "Semua jawaban benar",
        ],
        answer: 0,
    },
    
    {
        q: "Apa yang dilakukan oleh metode <code>slice()</code> pada array?",
        options: [
            "Menghapus elemen tertentu",
            "Menyaring elemen array",
            "Membuat salinan array tanpa mengubahnya",
            "Menambahkan elemen baru",
        ],
        answer: 2,
    },
    
    {
        q: 'Berapakah hasil dari <code>Math.max(...[2, 5, 8, 3])</code>?',
        options: ["2", "5", "8", "3"],
        answer: 2,
    },
    
    {
        q: "Dalam JavaScript, apakah perbedaan antara <code>==</code> dan <code>===</code>?",
        options: [
            "Tidak ada perbedaan, keduanya sama",
            "== membandingkan nilai tanpa memperhatikan tipe data, === membandingkan nilai dan tipe data",
            "== membandingkan tipe data tanpa memperhatikan nilai, === membandingkan tipe data dan nilai",
            "== hanya digunakan untuk string, === hanya digunakan untuk number",
        ],
        answer: 1,
    },
    
    {
        q: "Apa yang akan terjadi jika kita mencoba mengakses elemen array dengan indeks yang tidak ada?",
        options: ["Muncul pesan kesalahan", "Mengembalikan nilai null", "Mengembalikan undefined", "Menambahkan elemen baru"],
        answer: 2,
    },
    
    {
        q: 'Bagaimana cara menggabungkan dua array menjadi satu dalam JavaScript?',
        options: [
            "array1.merge(array2)",
            "array1.join(array2)",
            "array1.concat(array2)",
            "array1.combine(array2)",
        ],
        answer: 2,
    },
    
    {
        q: "Dalam JavaScript, apakah yang dilakukan oleh operator <code>typeof</code>?",
        options: [
            "Menggabungkan dua nilai",
            "Mengembalikan tipe data dari suatu nilai",
            "Menghapus elemen array",
            "Mengurangkan dua nilai",
        ],
        answer: 1,
    },
];
