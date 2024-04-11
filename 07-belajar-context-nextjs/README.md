`Nama : Dias Rachma Rosalina`

`NIM : 2341727003`

# Praktikum 1: Membuat Variasi Ukuran Teks Heading dengan Context

Buat struktur folder dengan prinsip atomic design

![1](https://github.com/diasrachma/PBF/assets/112748414/660e8fa6-a665-423c-88ad-f4fa4ce83afd)

Buat file baru di src/components/atoms/heading.tsx berisi kode sebagai berikut.

![prak 1 langkah 3 heading](https://github.com/diasrachma/PBF/assets/112748414/a05f33a1-9845-4df8-a8d2-a2c6985b82aa)

Kemudian buat file baru di src\components\atoms\section.tsx berisi kode berikut.

![prak 1 langkah 3 section](https://github.com/diasrachma/PBF/assets/112748414/d5b69ace-dff4-46cf-8ead-2e25ff67dccb)

Lalu bagian MainPage buat file baru di src\components\templates\main_page.tsx berisi kode sebagai berikut.

![prak 1 langkah 3 main_page](https://github.com/diasrachma/PBF/assets/112748414/bbcc842e-2c3f-42fe-bd58-0d6dab0ed100)

Ubah isi kode page.tsx dan run

Ubahlah kode di src\app\page.tsx seperti berikut. Lalu run dan lihat hasilnya di browser.

![prak 1 langkah 4](https://github.com/diasrachma/PBF/assets/112748414/48bd0916-d043-40b2-9f13-a43f7135d197)


`Soal 1`

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![2](https://github.com/diasrachma/PBF/assets/112748414/cf053e23-0e23-43f1-aa1c-90e03084234b)

Buat Context

Buatlah file baru di src\utilities\context\mycontext.tsx yang berisi kode sebagai berikut:

![3](https://github.com/diasrachma/PBF/assets/112748414/1755b733-6845-4ca9-8672-078e743896e6)

Gunakan context

Ubahlah isi kode komponen Heading dengan Impor useContext Hook dari React dan context :

![4](https://github.com/diasrachma/PBF/assets/112748414/a2160680-f338-46da-902a-e4f3688553c2)

Sekarang komponen Heading tidak membutuhkan sebuah prop level. Perbarui JSX sehingga Section yang dapat menerimanya:

![5](https://github.com/diasrachma/PBF/assets/112748414/efc47c5b-1dc9-4210-b2c2-79218732157c)

Sediakan context

Komponen Section saat ini merenders anaknya, bungkus mereka semua dengan sebuah context provider untuk menyediakan LevelContext kepada mereka seperti kode berikut:

![8](https://github.com/diasrachma/PBF/assets/112748414/711bc408-7e8a-41ed-8e65-f2b675d3e5b3)


`Soal 2`

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![6](https://github.com/diasrachma/PBF/assets/112748414/4fdd53f1-af3e-4b8c-834d-8526a0b0066e)

Jika terjadi error, silakan perbaiki, Mengapa hal itu bisa terjadi? Jelaskan!

![7](https://github.com/diasrachma/PBF/assets/112748414/849e6793-ac60-4cb1-adbe-44c07ac93ee3)

`Error terjadi karena react membutuhkan use client`

Hasilnya :

![11](https://github.com/diasrachma/PBF/assets/112748414/4e15e4c8-5e7d-49c5-92cd-8b308dc70644)

Menggunakan dan menyediakan context dari komponen yang sama caranya dengan mengubah sedikit kode pada komponen Section:

![prak 1 langkah 6 section](https://github.com/diasrachma/PBF/assets/112748414/513fafb5-5f5f-4b0c-bb61-1b28563bc2f5)

Dengan perubahan ini, tidak perlu mengoper prop level baik ke < Section > atau ke < Heading >:

![prak 1 langkah 6 main page 2](https://github.com/diasrachma/PBF/assets/112748414/4df8e746-62fa-4ae3-91ae-5c2f61b188ad)

![3](https://github.com/diasrachma/PBF/assets/112748414/2632c3e9-5639-4ffa-b975-8524dcd4fcf1)


`Soal 3`
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang dipelajari dan bagaimana tampilannya saat ini?

![2](https://github.com/diasrachma/PBF/assets/112748414/7c8228e3-ede8-4021-bf79-6a757bce1c62)

`Untuk tampilan sama seperti sebelumnya, tetapi dalam penerapan nya menjadi lebih simple karena LevelContext otomatis mendeteksi level dari parent nya, sehingga jika ada Section di dalam Section, otomatis Level parent bertambah 1 dari level sebelumnya`

# Praktikum 2: Membuat Context melewati komponen perantara

Buat komponen atom baru

Buatlah file baru di src\components\atoms\section2.tsx berisi kode sebagai berikut.

![img](/08-belajar-context/img/prak%202%20langkah%201%20section2.PNG)

Lalu buatlah file baru di src\components\atoms\post.tsx dengan kode berikut.

![img](/08-belajar-context/img/prak%202%20langkah%201%20post.PNG)

Selanjutnya kita buat molecules di src\components\molecules\recentpost.tsx dengan kode berikut.

![img](/08-belajar-context/img/prak%202%20langkah%201%20recentpost.PNG)

Kemudian buat organisms di src\components\organisms\allpost.tsx dengan kode berikut.

![img](/08-belajar-context/img/prak%202%20langkah%201%20allpost.PNG)

Terakhir kita buat templates di src\components\templates\profile_page.tsx dengan kode berikut.

![img](/08-belajar-context/img/prak%202%20langkah%201%20profile%20page.PNG)

Tambahkan ProfilePage ke page.tsx lalu run

Tambahkan komponen ProfilePage seperti kode berikut.

![img](/08-belajar-context/img/prak%202%20langkah%202%20nambah%20profilepage%20ke%20page.PNG)

Hapus bagian theme pada file tailwind.config.ts seperti kode berikut.

![img](/08-belajar-context/img/prak%202%20langkah%202%20hapus%20theme.PNG)

Hapus semua style CSS di file src\app\globals.css lalu ganti dengan kode berikut.

![img](/08-belajar-context/img/prak%202%20langkah%202%20globals%20css.PNG)

Ketika di run dengan npm run dev maka di browser akan tampil seperti berikut.

![img](/08-belajar-context/img/prak%202%20langkah%202%20hasilnya.PNG)

`Soal 4`

Capture hasilnya dan buatlah laporan di README.md. Tambahkan teks Nama dan NIM pada bagian komponen Post agar menunjukkan itu hasil kerja Anda !

![img](/08-belajar-context/img/prak%202%20langkah%202%20soal%20no%204.PNG)
