# Praktikum 1: Instalasi Redux dan bootstrap

Folder Pertemuan 06

![folder pertemuan 6](https://github.com/diasrachma/PBF/assets/112748414/8d28a936-c6a2-4ca7-8264-62dc3e3da2ab)


Setelah menginstall boostrap kemudian import boostrap pada aplikasi next.js pada pages/_app.tsx

![pagesapp tsx](https://github.com/diasrachma/PBF/assets/112748414/049f7de5-1cef-4396-93d2-1b0e13dc43f1)


implementasi bootstrap pada project next.js pada pages/index.tsx

![pagesindex tsx](https://github.com/diasrachma/PBF/assets/112748414/2808b4f1-5ec8-41d5-9af3-b4b0b5ebeac3)


Hasil 1

![Hasil1Praktikum1](https://github.com/diasrachma/PBF/assets/112748414/e0b444de-a333-4d8e-b255-d8ab9c938786)

Hasil 2

![Hasil2Praktikum1](https://github.com/diasrachma/PBF/assets/112748414/7c9b9530-cf7a-4a92-a8bc-1186842dfc11)

# Praktikum 2 : Contoh Login dengan redux

Setelah berhasil menginstal kita cek di file package.json apakah library sudah ada

![packagejson](https://github.com/diasrachma/PBF/assets/112748414/c0628c90-cfd7-4160-950e-040e13a5596c)

folder redux sejajar dengan public dan membuat file redux/auth/authSlice.js

![reduxauth](https://github.com/diasrachma/PBF/assets/112748414/fc991541-2a4d-4e3f-930f-1e4bcd9a31d7)

File redux/store/store.js

![reduxstore](https://github.com/diasrachma/PBF/assets/112748414/eae85c44-63e6-4be8-9c35-11e479f3e3c2)

key persistConfig pada file .env.local

![env local](https://github.com/diasrachma/PBF/assets/112748414/b5e894ce-9bba-47a8-a523-ed2ad1b71cec)

file baru pada pages/login.tsx

![login](https://github.com/diasrachma/PBF/assets/112748414/de7d5a69-b333-4425-a9c9-78182f75fe09)

1. Jalankan pada browser yang terjadi terdapat login dan log out

   Login

   ![loginberhasil](https://github.com/diasrachma/PBF/assets/112748414/05f9afd8-e474-46da-9a25-6bfd9352dbf5)

  Logout
  
  ![logoutberhasil](https://github.com/diasrachma/PBF/assets/112748414/b0e7a8bc-7700-4fb0-876b-d0ca9af0a43c)

   https://github.com/diasrachma/PBF/assets/112748414/5b2abb53-fa54-4fc8-9d72-1cece489f0f1

2. Baris 25 dan 30 terdapat method parse(), apa yang terjadi jika kita tidak menggunakan methode tersebut?

Jika tidak menggunakan persistStore, maka Redux Persist tidak akan diaktifkan. Redux Persist berfungsi untuk aplikasi nextJS, persistStore memastikan keadaan Redux disimpan dan dipulihkan, sementara parse membantu dalam memulihkan objek dari penyimpanan dengan benar

# Praktikum 3: Membuat Aplikasi Counter Sederhana

buat file di redux/counter/naikTurunSlice.js

![naikturunslice](https://github.com/diasrachma/PBF/assets/112748414/afe64637-c853-440d-ac3f-2cf57039fd29)

modifikasi redux/store/store.js

![store](https://github.com/diasrachma/PBF/assets/112748414/6f3c73a6-8b37-4f8b-bad8-290531656f6c)

file baru di pages/counter.tsx

![counter tsx](https://github.com/diasrachma/PBF/assets/112748414/fc869e85-ec51-48d7-a5d7-69ba9eb0c94f)

Kemudian kita jalankan di browser dengan url localhost:3000/counter

![hasilcounter](https://github.com/diasrachma/PBF/assets/112748414/a26c5488-5335-48d5-9df9-b0c0a7fabd17)


https://github.com/diasrachma/PBF/assets/112748414/764d39fc-03cc-4bd2-94ed-0c8a4651641e

# Soal Praktikum

Tentu, berikut ini adalah jawaban untuk pertanyaan-pertanyaan tersebut tanpa menggunakan kata "Anda":

1. **Apa kegunaan dari kode ini `import { useEffect } from "react";` pada file `pages/_app.tsx`? Jelaskan.**
   - Kode `import { useEffect } from "react";` digunakan untuk mengimpor fungsi `useEffect` dari pustaka React. `useEffect` adalah salah satu dari hook yang disediakan oleh React untuk melakukan efek samping (side effects) dalam komponen fungsional. Di dalam file `pages/_app.tsx`, `useEffect` dapat digunakan untuk menangani efek samping yang berlaku di seluruh aplikasi Next.js, seperti inisialisasi analitik, pemuatan data awal, atau manajemen status masuk (login).

2. **Jika pada file `pages/_app.tsx` kita tidak menggunakan `useEffect` (menghapus baris 3, dan baris 9-11), apa yang akan terjadi?**
   - Jika tidak menggunakan `useEffect` di dalam file `pages/_app.tsx`, tidak akan ada efek samping yang ditangani secara global di seluruh aplikasi. Ini berarti tidak akan dapat melakukan inisialisasi yang diperlukan untuk aplikasi secara keseluruhan, seperti pengaturan analitik, pemuatan data awal, atau manajemen status masuk (login) secara otomatis pada setiap permintaan halaman.

3. **Mengapa di React/Next.js penulisan tag HTML untuk class, harus diganti menjadi `className`?**
   - Di React/Next.js, penulisan atribut `class` pada elemen HTML harus diganti menjadi `className` karena `class` adalah kata kunci yang digunakan dalam JavaScript untuk mendefinisikan kelas (class) dan objek. Oleh karena itu, untuk menghindari konflik dengan penggunaan `class` dalam konteks JavaScript, React memilih untuk menggunakan `className` sebagai pengganti untuk menentukan kelas CSS pada elemen HTML.

4. **Apakah store pada Next.js bisa menyimpan banyak redux reducer?**
   - Ya, store pada Next.js dengan menggunakan Redux bisa menyimpan banyak redux reducer. Anda dapat menggabungkan beberapa reducer menjadi satu reducer utama menggunakan fungsi `combineReducers` dari Redux, dan kemudian menggunakan reducer utama tersebut saat membuat toko Redux menggunakan `configureStore`. Dengan demikian, dapat memiliki satu toko Redux yang mengelola keadaan aplikasi dengan banyak reducer.

5. **Jelaskan kegunaan dari file `store.js`!**
   - File `store.js` adalah tempat di mana mendefinisikan dan mengonfigurasi toko Redux untuk aplikasi. Di dalam file ini, dapat menentukan konfigurasi Redux seperti middleware, reducers, dan pengaturan Redux Persist jika digunakan. File `store.js` memberikan satu titik pusat untuk membuat dan mengonfigurasi toko Redux, yang kemudian dapat diimpor dan digunakan di seluruh aplikasi.

6. **Pada file `pages/login.tsx`, apa maksud dari kode ini? `const { isLogin } = useSelector((state) => state.auth);`**
   - Kode `const { isLogin } = useSelector((state) => state.auth);` menggunakan hook `useSelector` dari React Redux untuk memilih bagian tertentu dari keadaan aplikasi Redux dan membuatnya tersedia dalam komponen `login.tsx`. Dalam hal ini, memilih nilai `isLogin` dari state Redux yang dikelola oleh reducer `auth`. Nilai `isLogin` kemungkinan akan menunjukkan apakah pengguna telah login atau tidak, sehingga dapat digunakan untuk menentukan tindakan apa yang harus diambil dalam halaman login.

7. **Pada file `pages/counter.tsx`, apa maksud dari kode ini? `const {totalCounter} = useSelector((state) => state.counter);`**
   - Kode `const {totalCounter} = useSelector((state) => state.counter);` juga menggunakan hook `useSelector` dari React Redux untuk memilih bagian tertentu dari keadaan aplikasi Redux dan membuatnya tersedia dalam komponen `counter.tsx`. Di sini, memilih nilai `totalCounter` dari state Redux yang dikelola oleh reducer `counter`. Nilai `totalCounter` kemungkinan akan berisi total hitungan yang diinginkan, seperti jumlah total item dalam keranjang belanja atau jumlah total pesan yang belum dibaca, tergantung pada logika aplikasi.





