<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Catatan Kelas — Tugas Kolaborasi Web</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="masthead">
    <div class="wrap">
      <p class="kicker">Pemrograman Web · Tugas Kolaborasi</p>
      <h1>Catatan Kelas</h1>
      <p class="lede">Sebuah papan tugas sederhana yang kami bangun berdua, dari nol, pakai HTML, CSS, dan JavaScript murni — lalu dikerjakan bersama lewat Git &amp; GitHub.</p>
    </div>
  </header>

  <main class="wrap">

    <section class="team" aria-labelledby="team-title">
      <h2 id="team-title">Dikerjakan oleh</h2>
      <div class="team-grid">
        <article class="person">
          <span class="avatar" aria-hidden="true">JP</span>
          <h3>Johadi Pratama</h3>
          <p>Menyusun struktur HTML &amp; mengembangkan logika JavaScript.</p>
        </article>
        <article class="person">
          <span class="avatar" aria-hidden="true">MFR</span>
          <h3>Muhamad Faqih Rafin</h3>
          <p>Merancang tampilan CSS &amp; menyiapkan dokumentasi repositori.</p>
        </article>
      </div>
    </section>

    <hr class="rule">

    <section class="board" aria-labelledby="board-title">
      <h2 id="board-title">Papan Tugas</h2>
      <p class="section-note">Coba tambahkan catatan tugas kuliah di bawah ini — tersimpan selama halaman terbuka.</p>

      <form id="task-form" class="task-form">
        <input type="text" id="task-input" placeholder="Tulis tugas baru…" autocomplete="off" required>
        <select id="task-priority">
          <option value="rendah">Rendah</option>
          <option value="sedang" selected>Sedang</option>
          <option value="tinggi">Tinggi</option>
        </select>
        <button type="submit">Tambah</button>
      </form>

      <ul id="task-list" class="task-list"></ul>

      <p id="empty-state" class="empty-state">Belum ada tugas. Semua beres — untuk sekarang.</p>
      <p class="task-summary" id="task-summary"></p>
    </section>

    <hr class="rule">

    <section class="about" aria-labelledby="about-title">
      <h2 id="about-title">Tentang proyek ini</h2>
      <p>Situs ini dibuat untuk memenuhi tugas mata kuliah Pemrograman Web, dengan fokus pada kerja sama tim menggunakan Git dan GitHub. Setiap perubahan pada kode — mulai dari struktur halaman, gaya tampilan, hingga fitur papan tugas — dicatat sebagai commit terpisah agar kontribusi masing-masing anggota terlihat jelas pada riwayat repositori.</p>
    </section>

  </main>

  <footer class="site-footer">
    <div class="wrap">
      <p>Dibuat oleh Johadi Pratama &amp; Muhamad Faqih Rafin — Tugas Pemrograman Web.</p>
    </div>
  </footer>

<script src="script.js"></script>
</body>
</html>
