Fitur yang Diterapkan dalam JavaScript dan Cara Mengaksesnya
1. Menu Navigasi Responsif
-deskripsi
Menu navigasi dapat dibuka dan ditutup pada layar kecil. Ketika tombol menu (biasanya berbentuk ikon  hamburger) diklik, kelas slide akan ditambahkan atau dihapus pada elemen nav ul, sehingga memunculkan animasi geser (dengan asumsi CSS terkait sudah diatur).
-Cara Mengakses
Klik tombol menu (ikon hamburger) di bagian atas halaman untuk menampilkan atau menyembunyikan menu navigasi.

2. Scroll ke Bagian Tertentu
-Deskripsi
Tombol navigasi akan menggulir halaman secara halus ke bagian tertentu ketika diklik. Fitur ini menggunakan fungsi scrollToElement untuk mengarahkan ke elemen berdasarkan ID, seperti "kerjasama", "ayam", "testimoni", "about", atau "home".
-Cara Mengakses
Klik tombol atau tautan di menu navigasi yang sesuai dengan nama bagian (misalnya, "Kerja Sama", "Ayam", atau "Testimoni") untuk langsung menuju bagian tersebut.

3. Navigasi Halus dengan Anchor Link
-Deskripsi
Tautan berbasis anchor akan menggulir halaman secara halus ke elemen tujuan. JavaScript mencegah perilaku default tautan dan menggunakan fungsi scrollToElement untuk efek gulir.
-Cara Mengakses
Klik tautan yang memiliki atribut href dengan tanda # (misalnya, #home atau #about) untuk menggulir ke bagian terkait.

4. Pengiriman Formulir dengan EmailJS
-Deskripsi
Formulir kontak mengirimkan data (nama, email, dan pesan) ke layanan EmailJS. Pesan berhasil akan menampilkan notifikasi "Pesan berhasil dikirim!" dan otomatis mereset formulir. Jika gagal, notifikasi "Gagal mengirim pesan, coba lagi!" akan ditampilkan.
-Cara Mengakses
Isi formulir kontak dengan nama, email, dan pesan, lalu klik tombol "Kirim". Pastikan koneksi internet stabil agar pengiriman berhasil.

5. Inisialisasi EmailJS
-Deskripsi
EmailJS diinisialisasi secara otomatis saat halaman dimuat menggunakan API key.
-Cara Mengakses
Tidak memerlukan interaksi pengguna; fitur berjalan otomatis saat halaman dimuat.
