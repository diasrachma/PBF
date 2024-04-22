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

![1](https://github.com/diasrachma/PBF/assets/112748414/c8522c3f-198e-440a-bb76-07788f66188e)

Lalu buatlah file baru di src\components\atoms\post.tsx dengan kode berikut.

![2](https://github.com/diasrachma/PBF/assets/112748414/7f41e773-5207-4a8f-9a29-e4156a9955fd)

Selanjutnya kita buat molecules di src\components\molecules\recentpost.tsx dengan kode berikut.

![3](https://github.com/diasrachma/PBF/assets/112748414/4b997759-83a6-4d99-ac4a-ce927c24d769)

Kemudian buat organisms di src\components\organisms\allpost.tsx dengan kode berikut.

![4](https://github.com/diasrachma/PBF/assets/112748414/09993e60-da05-4b03-9e76-c4f720e0b3f0)

Terakhir kita buat templates di src\components\templates\profile_page.tsx dengan kode berikut.

![5](https://github.com/diasrachma/PBF/assets/112748414/61cd2de0-e35b-4293-94c8-82ea602e0ef1)

Tambahkan ProfilePage ke page.tsx lalu run

Tambahkan komponen ProfilePage seperti kode berikut.

![6](https://github.com/diasrachma/PBF/assets/112748414/80255000-60b1-4965-8493-3006bee1687e)

Hapus bagian theme pada file tailwind.config.ts seperti kode berikut.

![7](https://github.com/diasrachma/PBF/assets/112748414/539ad80e-e954-4fdf-affd-372c0f176548)

Hapus semua style CSS di file src\app\globals.css lalu ganti dengan kode berikut.

![8](https://github.com/diasrachma/PBF/assets/112748414/68e2c6f9-e23f-4e92-b3ac-dd7746d1887a)

Ketika di run dengan npm run dev maka di browser akan tampil seperti berikut.

![9](https://github.com/diasrachma/PBF/assets/112748414/d7f12e92-8a2e-448f-8230-96e75d03c5ed)

`Soal 4`

Capture hasilnya dan buatlah laporan di README.md. Tambahkan teks Nama dan NIM pada bagian komponen Post agar menunjukkan itu hasil kerja Anda !

![10](https://github.com/diasrachma/PBF/assets/112748414/b5612e0a-7784-4d64-a20e-1980c0749cbf)

# Praktikum 3: Membuat Context Tema Light/Dark

Membuat variabel tema

Buatlah file dan folder baru di src\utilities\themes\mythemes.tsx yang berisi kode berikut.

![11](https://github.com/diasrachma/PBF/assets/112748414/f038232d-0548-48f1-8804-e7cf58b18c89)

Kemudian buatlah contextnya di file src\utilities\contexts\mycontext.tsx

![12](https://github.com/diasrachma/PBF/assets/112748414/365d90da-70cd-41c3-ae51-d18bee782ae4)

Buat komponen atom NavBar

Buatlah file baru di src\components\atoms\navbar.tsx

![13](https://github.com/diasrachma/PBF/assets/112748414/861d3918-17ef-464c-84d9-8fa7033f6741)

Buat Provider

Buatlah provider di src\components\atoms\myapp.tsx

![14](https://github.com/diasrachma/PBF/assets/112748414/0ae8a29d-0870-4fc1-961b-108b6ca8a893)

Buat masing-masing page

Pindahkan komponen ProfilePage ke file src\components\templates\profile_page.tsx

![15](https://github.com/diasrachma/PBF/assets/112748414/15d8ebd2-379c-402a-960c-21a09661c9f9)

Sehingga struktur folder di templates menjadi seperti berikut.

![16](https://github.com/diasrachma/PBF/assets/112748414/d6c58945-a2e0-4953-9848-bcf2f43172e2)

Buat routing

![17](https://github.com/diasrachma/PBF/assets/112748414/81aa0ef3-02a0-4e9f-9f3e-a0bc7ec19e31)

Gantilah isi kode pada src\app\page.tsx menjadi seperti berikut.

![page1](https://github.com/diasrachma/PBF/assets/112748414/422df701-c21c-4122-bc62-5d5ace817465)

Termasuk di masing-masing page src\app\profile\page.tsx, untuk page About dan Contacs silakan Anda sesuaikan.

![page2](https://github.com/diasrachma/PBF/assets/112748414/e5fb65a5-3aa6-45db-9294-a47f07bb40e0)

untuk src\app\contact\page.tsx

![page3](https://github.com/diasrachma/PBF/assets/112748414/bd0e1448-f74a-443e-a993-ceb7d49ad398)

untuk src\app\about\page.tsx

![18](https://github.com/diasrachma/PBF/assets/112748414/199c3e88-1121-4e73-b33c-d18dea20b5c1)

Kemudian disesuaikan pada profile, about dan contacts

![19](https://github.com/diasrachma/PBF/assets/112748414/7d19e53c-570e-4d7a-b524-7e01887ec8f6)

![20](https://github.com/diasrachma/PBF/assets/112748414/f87e7a47-8a5f-4295-b9d9-8d461665319a)

![21](https://github.com/diasrachma/PBF/assets/112748414/b9791b02-a5b0-4909-8c12-1a854afd41ac)

`Soal 5`
Silakan save semua dan lakukan running di browser Anda. Capture hasilnya dan buatlah laporan di README.md. Tambahkan teks Nama dan NIM pada setiap page routing agar menunjukkan itu hasil kerja Anda sendiri!

Hasil untuk Home

![22](https://github.com/diasrachma/PBF/assets/112748414/7301e0ab-d354-4ed9-8fd2-2395c99c5163)

Hasil untuk About

![23](https://github.com/diasrachma/PBF/assets/112748414/efa762ab-5dd1-45b7-9e13-140653e2e3e5)

Hasil untuk Contact

![24](https://github.com/diasrachma/PBF/assets/112748414/0f49cc23-be91-4caf-a020-516df4481785)

Hasil untuk Profile

![25](https://github.com/diasrachma/PBF/assets/112748414/2b5763f7-e77f-463e-81c7-9d52cf940027)

Hasil untuk Set Dark Theme

![26](https://github.com/diasrachma/PBF/assets/112748414/6bbe267c-2fd7-4122-bd1f-8d2f85eeb2b1)

Apakah toggle button tema sudah berfungsi ? jika belum, silakan perbaiki!

**Sudah berfungsi** 

Mengapa ketika refresh atau berpindah halaman tema tidak permanen ? Buatlah menjadi permanen walaupun page sudah direfresh dan pindah halaman!

`Sudah permanen, karena pada src\components\atoms\myapp.tsx sudah membuat tema aplikasi persisten dengan menggunakan localStorage, memastikan tema yang dipilih tetap konsisten saat pengguna berpindah halaman`

https://github.com/diasrachma/PBF/assets/112748414/dd486991-c252-45db-8953-838236cf42d5

