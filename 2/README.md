# Praktikum: Membuat Project Pertama ReactJS
npx create-next-app
![test](/2/1.png)


# Pada gambar tersebut, silakan Anda browsing apa yang dimaksud dengan:

TypeScript : javascript with type, dimana typescript adalah supersetnya dari javascript
ESLint : eslint atau linter itu adalah sebuah tools yang biasa di gunakan oleh developer untuk melakukan static analyzes untuk menemukan masalah pada codingan atau potensi yang bisa menimbulkan bug dengan cepat
Tailwind CSS : Mirip dengan css framework seperti bootstrap namun ESLint lebih mudah diinteregrasikan dengan react/nextjs, dokumentasi lengkat, costumisasi mudah 
App Router : router baru yang memungkinkan Anda menggunakan fitur-fitur terbaru React, seperti Komponen Server dan Streaming
Import alias : digunakan untuk mempersingkat dan memperjelas jalur file atau modul.

buka dengan vscode
![test](/2.png)
1. Git : folder yg berarti sudah ada tools dimana digunakan untuk mengelola versi source code program 
2. next. : framework untuk React.js
3. img : folder memuat image
4. node_modules : directory dibuat oleh npm dan jalan untuk tracking setiap package yg telah diinstal di json
5. src memiliki konfigurasi file 
6. .estlintcr : salah satu file yang akan dicari ESLint untuk konfigurasinya, dan juga yang memiliki prioritas tertinggi
7. gitnigore :  cara git untuk mengabaikan file yang dimasukan dalam daftar .gitignore agar tidak diikut sertakan pada proses git push
8. next.config : file konfigurasi yang digunakan dalam aplikasi Next.js untuk menyesuaikan perilaku sistem build Next.js
9. next-env.d : dibuat di root proyek File ini memastikan tipe Next.js diambil oleh kompiler TypeScript
10. package : terdapat package dari proyek
11. package.lock : file kunci yang menyimpan informasi tentang dependensi atau paket yang diinstal untuk proyek node.js
12. postcss.config.js : alat Node.js yang mengubah gaya Anda menggunakan plugin JavaScript.
13. README : Terdapat jawaban serta praktikum
14. tailwind.config : di root proyek tempat dapat menentukan penyesuaian apa pun termasuk tampilan
15. tsconfig : objek bersarang yang berisi aturan yang harus diterapkan oleh kompiler TypeScript

# RUN npm run dev serta edit teks
![test](/3.png)
Penyebab tidak perlu menjalankan perintah npm run dev dan tidak juga diperlukan me-reload halaman di browser : salah satunya karena menggunakan framework react dimana framework ini mendukung fitur hot reloading (reload otomatis) ketika mengubah kode tanpa harus mereset server

# cukup screenshot dan jelaskan perbedaannya diantara ketiga framework tersebut (termasuk Next.js) di file
![test](/4.png) 
![test](/5.png)

1. Yang pertama ketika react berhasil diinstal langsung disuguhkan dengan UI untuk membuat komponen-komponen UI dan logika aplikasi berbeda gatsby dan remix
2. Setelah diinstal remix memiliki struktur proyek yang mirip dengan react namun dengan tambahan fitur dari remix seperti routing server-side, data fetching, dan fitur-fitur lain
3. Gatsby juga mirip dengan react namun dengan tambahan fitur seperti gatsby-config.js, gatsby-node.js dan folder pages bersifat halaman statis




