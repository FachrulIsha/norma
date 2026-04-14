// script.js - Pilihan langsung tampil, tanpa tombol play/timer

(function () {
    "use strict";

    const kontenSkenario = document.getElementById('kontenSkenario');
    const tombolUlang = document.getElementById('tombolUlang');
    const areaPilihan = document.getElementById('areaPilihan');

    // Render konten skenario sesuai pilihan
    function renderSkenario(nomor) {
        kontenSkenario.classList.remove('sembunyi');
        let html = '';

        if (nomor === '1') {
            html = `
        <div class="header-skenario">😔 Membiarkan menangis & terus mengejek</div>
        <div class="kolom-teks">
          <p style="font-size:1.5rem; margin-bottom:20px;"><strong>Konsekuensi bagi Korban (Andi):</strong></p>
          <p>Ia akan merasa sangat terluka, malu, dan kehilangan rasa aman di lingkungan sekolah. Hal ini bisa berdampak buruk pada kesehatan mental dan motivasi belajarnya.</p>
          <p style="margin-top:25px; font-size:1.5rem;"><strong>Konsekuensi bagi Pelaku/Lingkungan:</strong></p>
          <p>Tindakan ini sangat bertentangan dengan Sila ke-2 Pancasila (Kemanusiaan yang Adil dan Beradab). Jika dipilih atau dibiarkan, ini akan menumbuhkan budaya sekolah yang <em>toxic</em>, di mana kekerasan verbal dianggap sebagai hal yang biasa atau bahkan hiburan.</p>
        </div>
      `;
        } else if (nomor === '2') {
            html = `
        <div class="header-skenario">😶 Diam dan pergi meninggalkan Andi</div>
        <div class="kolom-teks">
          <p style="font-size:1.5rem; margin-bottom:20px;"><strong>Konsekuensi bagi Korban (Andi):</strong></p>
          <p>Ia akan merasa diabaikan, sendirian, dan tidak berharga. Kesunyian dari teman-temannya bisa membuatnya berpikir bahwa ia pantas menerima perlakuan kasar tersebut.</p>
          <p style="margin-top:25px; font-size:1.5rem;"><strong>Konsekuensi bagi Saksi (Bystander):</strong></p>
          <p>Sikap diam saja berarti menormalisasi perilaku buruk. Meski tidak ikut mengejek, membiarkan ketidakadilan terjadi menunjukkan kurangnya tanggung jawab moral dan solidaritas sosial.</p>
        </div>
      `;
        } else { // Skenario 3 dengan video tambahan (Video 2)
            html = `
        <div class="header-skenario">🙏 Bimo meminta maaf & menyadari kesalahan</div>
        <div class="flex-skenario">
          <div class="kolom-teks">
            <p style="font-size:1.5rem; margin-bottom:20px;"><strong>Konsekuensi bagi Korban (Andi):</strong></p>
            <p>Perasaannya tervalidasi dan ia merasa dihargai kembali. Kata maaf membantunya memulihkan diri dari rasa sedih dan membuka jalan untuk memaafkan.</p>
            <p style="margin-top:25px; font-size:1.5rem;"><strong>Konsekuensi bagi Pelaku (Bimo):</strong></p>
            <p>Menunjukkan kedewasaan emosional dan keberanian untuk mengakui kesalahan. Ia belajar bahwa setiap tindakan memiliki dampak dan ia bertanggung jawab untuk memperbaikinya.</p>
          </div>
          <div class="video-samping">
            <div class="label-video2">🎬 VIDEO 2</div>
            <video controls preload="metadata" controlsList="nodownload" style="width:100%; border-radius:20px;">
              <source src="video2.mp4" type="video/mp4">
              <source src="video2.webm" type="video/webm">
              <p style="color:white;">Video tidak ditemukan</p>
            </video>
          </div>
        </div>
      `;
        }

        kontenSkenario.innerHTML = html;
    }

    // Event klik pada kartu pilihan (delegasi)
    areaPilihan.addEventListener('click', (e) => {
        const kartu = e.target.closest('.kartu-pilihan');
        if (!kartu) return;
        const skenario = kartu.getAttribute('data-skenario');
        renderSkenario(skenario);
    });

    // Tombol "Sembunyikan Penjelasan"
    tombolUlang.addEventListener('click', () => {
        kontenSkenario.classList.add('sembunyi');
        kontenSkenario.innerHTML = '';
    });

    // Pastikan konten skenario tersembunyi saat halaman dimuat
    kontenSkenario.classList.add('sembunyi');
})();