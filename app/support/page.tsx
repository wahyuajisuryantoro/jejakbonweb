import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { site, supportMailto } from "../components/site-config";

export const metadata: Metadata = {
  title: "Bantuan & Dukungan — JejakBon",
  description:
    "Pusat bantuan resmi JejakBon: panduan penggunaan, pertanyaan yang sering diajukan, pemecahan masalah, pengelolaan data, dan cara menghubungi tim dukungan.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Bantuan & Dukungan — JejakBon",
    description:
      "Panduan penggunaan, FAQ, pemecahan masalah, dan kontak dukungan aplikasi JejakBon.",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const jumpLinks = [
  { label: "Panduan Memulai", href: "#memulai" },
  { label: "Panduan Fitur", href: "#panduan-fitur" },
  { label: "Pertanyaan Umum", href: "#faq" },
  { label: "Pemecahan Masalah", href: "#masalah" },
  { label: "Data & Privasi", href: "#data" },
  { label: "Hubungi Kami", href: "#kontak" },
];

const gettingStarted = [
  {
    number: "1",
    title: "Unduh dan buka aplikasi",
    body: "Pasang JejakBon dari App Store atau Google Play, lalu buka aplikasinya. Anda tidak perlu mendaftar akun, memasukkan nomor telepon, atau menghubungkan rekening bank. Aplikasi langsung siap dipakai.",
  },
  {
    number: "2",
    title: "Tambahkan kontak pertama",
    body: "Buka menu Kontak, lalu tekan tombol tambah. Isi nama orang yang berhutang kepada Anda atau yang memberi Anda hutang. Nomor telepon, email, alamat, dan catatan bersifat opsional — isi seperlunya saja.",
  },
  {
    number: "3",
    title: "Catat hutang atau piutang",
    body: "Pilih Catat Hutang bila Anda yang berhutang, atau Catat Piutang bila orang lain berhutang kepada Anda. Isi judul, nominal, dan tanggal jatuh tempo. Anda juga dapat memilih metode pembayaran tempo atau cicilan, serta melampirkan foto bukti transfer.",
  },
  {
    number: "4",
    title: "Pantau lewat dashboard",
    body: "Halaman utama menampilkan total hutang dan total piutang Anda secara otomatis, beserta transaksi yang mendekati jatuh tempo. Tandai lunas saat pembayaran selesai, dan catat pembayaran sebagian bila dibayar bertahap.",
  },
];

const featureGuides = [
  {
    title: "Catat Hutang",
    intro: "Untuk mencatat uang yang Anda pinjam dari orang lain.",
    steps: [
      "Buka menu Catat Hutang dari halaman utama.",
      "Pilih kontak pemberi pinjaman, atau buat kontak baru bila belum ada.",
      "Isi nominal hutang dan tanggal transaksi.",
      "Tentukan tanggal jatuh tempo bila ada kesepakatan waktu pembayaran.",
      "Tambahkan keterangan, misalnya \"pinjaman modal dagang\" atau \"talangan biaya servis motor\".",
      "Simpan. Transaksi langsung masuk ke ringkasan total hutang di dashboard.",
    ],
  },
  {
    title: "Catat Piutang",
    intro: "Untuk mencatat uang yang dipinjam orang lain dari Anda.",
    steps: [
      "Buka menu Catat Piutang dari halaman utama.",
      "Pilih kontak peminjam, atau buat kontak baru bila belum ada.",
      "Isi nominal piutang dan tanggal transaksi.",
      "Tentukan tanggal jatuh tempo agar Anda tahu kapan waktunya menagih.",
      "Tambahkan keterangan agar konteksnya tetap jelas di kemudian hari.",
      "Simpan. Total piutang di dashboard akan langsung diperbarui.",
    ],
  },
  {
    title: "Daftar Kontak",
    intro: "Untuk melihat posisi hutang piutang per orang dalam satu tampilan.",
    steps: [
      "Buka menu Kontak untuk melihat seluruh nama yang pernah Anda catat.",
      "Ketuk salah satu nama untuk membuka riwayat transaksinya.",
      "Di halaman detail, Anda dapat melihat total hutang dan piutang dengan orang tersebut beserta daftar transaksinya.",
      "Gunakan opsi ubah untuk memperbaiki nama, atau opsi hapus bila kontak sudah tidak diperlukan.",
    ],
  },
  {
    title: "Menandai Lunas & Mengubah Catatan",
    intro: "Untuk menjaga catatan tetap sesuai kondisi sebenarnya.",
    steps: [
      "Buka transaksi yang ingin diperbarui dari dashboard atau dari halaman detail kontak.",
      "Catat pembayaran bila dibayar sebagian — sisa tagihan akan dihitung ulang secara otomatis.",
      "Tandai sebagai lunas bila pembayaran sudah selesai sepenuhnya. Transaksi lunas tidak lagi dihitung dalam total aktif.",
      "Gunakan opsi ubah bila ada kesalahan nominal, tanggal, atau keterangan.",
      "Gunakan opsi hapus untuk membuang catatan yang keliru. Perlu diingat, catatan yang sudah dihapus tidak dapat dikembalikan.",
    ],
  },
  {
    title: "Cicilan",
    intro: "Untuk kesepakatan yang dibayar bertahap, bukan sekaligus.",
    steps: [
      "Saat membuat transaksi, pilih metode pembayaran Cicilan.",
      "Tentukan jumlah cicilan, frekuensi pembayaran, dan tanggal mulai. Nominal setiap termin akan terbagi rata secara otomatis.",
      "Buka detail transaksi untuk melihat daftar termin beserta tanggal jatuh tempo masing-masing.",
      "Catat pembayaran pada termin yang bersangkutan setiap kali cicilan dibayarkan.",
      "Status setiap termin akan berubah menjadi lunas, dan sisa keseluruhan ikut menyesuaikan.",
    ],
  },
  {
    title: "Pengingat Jatuh Tempo",
    intro: "Agar tanggal penting tidak lewat begitu saja.",
    steps: [
      "Pastikan izin notifikasi sudah diaktifkan saat aplikasi pertama kali diminta, atau melalui Pengaturan perangkat.",
      "Buka Profil, lalu masuk ke menu Notifikasi & Reminder untuk mengatur pengingat.",
      "Isi tanggal jatuh tempo pada setiap transaksi agar pengingat dapat dijadwalkan.",
      "Pengingat dijadwalkan di perangkat Anda dan tetap berjalan meskipun aplikasi sedang tidak dibuka.",
    ],
  },
  {
    title: "Surat Tagihan",
    intro: "Untuk menagih dengan cara yang rapi dan sopan.",
    steps: [
      "Buka transaksi piutang yang ingin ditagih.",
      "Pilih opsi pembuatan surat tagihan. Data kontak dan rincian transaksi akan terisi otomatis dari catatan Anda.",
      "Tinjau hasilnya dalam bentuk PDF sebelum dikirim.",
      "Bagikan melalui WhatsApp atau aplikasi lain, simpan sebagai berkas, atau cetak langsung dari perangkat.",
    ],
  },
  {
    title: "Laporan Keuangan",
    intro: "Untuk melihat gambaran besar posisi hutang piutang Anda.",
    steps: [
      "Buka menu Laporan, lalu pilih laporan hutang atau laporan piutang.",
      "Gunakan filter berdasarkan kontak maupun periode waktu sesuai kebutuhan.",
      "Periksa ringkasan total beserta rincian transaksi yang termasuk dalam filter tersebut.",
      "Ekspor atau bagikan laporan bila Anda memerlukan arsip di luar aplikasi.",
    ],
  },
  {
    title: "Backup & Restore",
    intro:
      "Karena data tersimpan di perangkat, cadangan adalah satu-satunya cara memindahkan data.",
    steps: [
      "Buka Profil, lalu masuk ke menu Backup & Restore.",
      "Pilih buat cadangan. Aplikasi akan menghasilkan satu berkas berisi seluruh catatan beserta foto bukti Anda.",
      "Simpan berkas tersebut di tempat yang aman, misalnya penyimpanan awan pribadi atau komputer Anda.",
      "Untuk memulihkan, pilih opsi restore lalu pilih berkas cadangan yang sebelumnya Anda simpan.",
      "Lakukan pencadangan secara berkala, terutama sebelum mengganti perangkat atau memasang ulang aplikasi.",
    ],
  },
  {
    title: "Lisensi Premium",
    intro: "Untuk membuka penggunaan tanpa batas.",
    steps: [
      "Buka Profil, lalu masuk ke menu Lisensi Premium untuk melihat status dan harga terkini.",
      "Lakukan pembelian melalui App Store atau Google Play. Pembayaran diproses sepenuhnya oleh platform tersebut.",
      "Lisensi aktif seketika setelah pembayaran berhasil dan berlaku selamanya untuk akun toko yang Anda gunakan.",
      "Bila Anda memasang ulang aplikasi atau berganti perangkat, gunakan opsi Pulihkan Pembelian dengan akun toko yang sama.",
    ],
  },
];

const faqGroups = [
  {
    group: "Umum",
    items: [
      {
        q: "Apakah JejakBon gratis?",
        a: `JejakBon dapat diunduh dan dipakai gratis dengan batas penggunaan, yaitu maksimal ${site.freeMaxTransactions} transaksi dan ${site.freeMaxContacts} kontak. Semua fitur inti bisa dicoba dalam batas tersebut, tanpa batas waktu dan tanpa perlu memasukkan data kartu.`,
      },
      {
        q: "Berapa biaya untuk membuka batasan?",
        a: `Tersedia lisensi premium seharga ${site.lifetimePrice} dengan skema sekali bayar. Setelah dibeli, transaksi dan kontak menjadi tanpa batas dan lisensi berlaku selamanya. Ini bukan langganan — tidak ada tagihan bulanan maupun perpanjangan otomatis.`,
      },
      {
        q: "Saya sudah pernah membeli, tapi lisensi tidak aktif di perangkat baru. Bagaimana?",
        a: "Buka Profil lalu masuk ke menu Lisensi Premium dan pilih Pulihkan Pembelian. Pastikan Anda masuk dengan akun App Store atau Google Play yang sama seperti saat melakukan pembelian, dan perangkat sedang terhubung ke internet.",
      },
      {
        q: "Apakah JejakBon memberikan pinjaman uang?",
        a: "Tidak. JejakBon adalah aplikasi pencatatan pribadi. Kami bukan lembaga keuangan, bukan penyedia pinjaman online, dan tidak memproses transaksi uang dalam bentuk apa pun. Aplikasi ini hanya membantu Anda mencatat kesepakatan hutang piutang yang terjadi di luar aplikasi.",
      },
      {
        q: "Apakah saya harus membuat akun untuk memakainya?",
        a: "Tidak perlu. JejakBon dapat langsung digunakan setelah dipasang, tanpa pendaftaran, tanpa email, dan tanpa nomor telepon.",
      },
      {
        q: "Apakah aplikasi bisa dipakai tanpa internet?",
        a: "Bisa. Seluruh pencatatan, perhitungan, laporan, dan pengingat berjalan di perangkat Anda. Internet hanya diperlukan saat membeli atau memulihkan lisensi premium.",
      },
      {
        q: "Apakah JejakBon menampilkan iklan?",
        a: "Tidak. Aplikasi tidak memuat iklan maupun pelacak iklan pihak ketiga. Pengembangan aplikasi didanai dari pembelian lisensi premium.",
      },
      {
        q: "Perangkat apa saja yang didukung?",
        a: `JejakBon tersedia untuk iPhone dengan ${site.minimumIosVersion} atau versi yang lebih baru, serta perangkat Android. Peringkat usia aplikasi adalah ${site.ageRating}.`,
      },
    ],
  },
  {
    group: "Penggunaan",
    items: [
      {
        q: "Apa bedanya hutang dan piutang di JejakBon?",
        a: "Hutang adalah uang yang Anda pinjam dari orang lain, sehingga Anda berkewajiban membayar. Piutang adalah uang yang dipinjam orang lain dari Anda, sehingga Anda berhak menerima pembayaran. Keduanya dihitung terpisah di dashboard.",
      },
      {
        q: "Bagaimana cara mencatat pembayaran sebagian atau cicilan?",
        a: "Untuk pembayaran bertahap yang sudah disepakati sejak awal, pilih metode pembayaran Cicilan saat membuat transaksi — jadwal dan nominal per termin akan terbagi otomatis. Untuk pembayaran sebagian yang sifatnya sewaktu-waktu, buka transaksinya lalu catat pembayaran; sisa tagihan akan dihitung ulang.",
      },
      {
        q: "Bisakah saya melampirkan foto bukti transfer?",
        a: "Bisa. Saat membuat atau mengubah transaksi, Anda dapat mengambil foto langsung dari kamera atau memilih dari galeri. Foto tersebut tersimpan di perangkat Anda dan ikut disertakan dalam berkas cadangan.",
      },
      {
        q: "Bagaimana cara membuat surat tagihan?",
        a: "Buka transaksi piutang yang ingin ditagih, lalu pilih opsi pembuatan surat tagihan. Rincian akan terisi otomatis dari catatan Anda dan hasilnya berupa PDF yang dapat dikirim lewat WhatsApp, disimpan, atau dicetak.",
      },
      {
        q: "Saya salah memasukkan nominal. Bisakah diperbaiki?",
        a: "Bisa. Buka transaksi yang bersangkutan, pilih opsi ubah, lalu perbaiki nominal, tanggal, atau keterangannya. Ringkasan di dashboard akan menyesuaikan secara otomatis.",
      },
      {
        q: "Apakah data yang sudah dihapus bisa dikembalikan?",
        a: "Tidak. Penghapusan bersifat permanen dan tidak dapat dibatalkan. Sebaiknya periksa kembali sebelum menghapus catatan atau kontak.",
      },
      {
        q: "Apakah ada pengingat jatuh tempo?",
        a: "Ada. Aplikasi menjadwalkan notifikasi menjelang tanggal jatuh tempo yang Anda tetapkan. Pengaturannya berada di Profil, menu Notifikasi & Reminder. Pastikan izin notifikasi sudah diaktifkan melalui Pengaturan perangkat.",
      },
      {
        q: "Mata uang apa yang digunakan?",
        a: "Aplikasi menggunakan format Rupiah (IDR) sesuai target pengguna di Indonesia.",
      },
    ],
  },
  {
    group: "Data & Keamanan",
    items: [
      {
        q: "Di mana data saya disimpan?",
        a: "Seluruh catatan dan foto bukti Anda tersimpan di dalam basis data lokal pada perangkat Anda. Data tersebut tidak dikirimkan ke server kami, sehingga kami sendiri tidak dapat membacanya.",
      },
      {
        q: "Apakah data saya ikut berpindah kalau saya ganti perangkat?",
        a: "Tidak dengan sendirinya. Gunakan menu Backup & Restore di halaman Profil untuk membuat berkas cadangan, simpan berkas itu di tempat aman, lalu pulihkan di perangkat baru. Memulihkan lisensi premium adalah proses yang terpisah dari memulihkan data.",
      },
      {
        q: "Apakah berkas cadangan saya aman?",
        a: "Berkas cadangan berisi salinan catatan dan foto bukti Anda, dan tidak dilindungi kata sandi. Perlakukan berkas tersebut seperti dokumen keuangan pribadi: simpan di tempat yang aman dan jangan bagikan kepada pihak yang tidak Anda percayai.",
      },
      {
        q: "Bagaimana cara menghapus seluruh data saya?",
        a: "Anda dapat menghapus catatan atau kontak satu per satu melalui aplikasi. Untuk menghapus semuanya sekaligus, hapus aplikasi dari perangkat — seluruh basis data lokal beserta foto bukti akan ikut terhapus. Berkas cadangan yang sudah Anda simpan di luar aplikasi perlu dihapus sendiri.",
      },
      {
        q: "Izin apa saja yang diminta aplikasi?",
        a: "Kamera dan galeri untuk foto bukti transaksi, notifikasi untuk pengingat jatuh tempo, serta akses berkas untuk menyimpan cadangan dan surat tagihan. Semua izin bersifat opsional dan dapat dicabut kapan saja melalui Pengaturan perangkat tanpa mengganggu fitur pencatatan utama.",
      },
    ],
  },
];

const troubleshooting = [
  {
    problem: "Aplikasi menutup sendiri atau tidak mau terbuka",
    solution:
      "Tutup aplikasi sepenuhnya dari daftar aplikasi berjalan, lalu buka kembali. Bila masih bermasalah, mulai ulang perangkat dan pastikan JejakBon sudah diperbarui ke versi terbaru melalui App Store atau Google Play.",
  },
  {
    problem: "Catatan yang sudah disimpan tidak muncul",
    solution:
      "Periksa apakah Anda sedang membuka filter atau kategori tertentu, misalnya hanya menampilkan transaksi yang belum lunas. Coba juga buka halaman detail kontak yang bersangkutan untuk melihat riwayat lengkapnya.",
  },
  {
    problem: "Total di dashboard terasa tidak sesuai",
    solution:
      "Transaksi yang sudah ditandai lunas biasanya tidak lagi dihitung dalam total aktif. Buka riwayat per kontak untuk memeriksa status tiap transaksi, dan pastikan tidak ada catatan yang tercatat ganda.",
  },
  {
    problem: "Notifikasi jatuh tempo tidak muncul",
    solution:
      "Buka Pengaturan perangkat, cari JejakBon, lalu pastikan izin notifikasi diaktifkan. Periksa juga apakah mode fokus, mode hemat daya, atau mode jangan ganggu sedang aktif.",
  },
  {
    problem: "Muncul pesan batas transaksi atau kontak sudah tercapai",
    solution: `Versi gratis dibatasi ${site.freeMaxTransactions} transaksi dan ${site.freeMaxContacts} kontak. Anda dapat menghapus catatan lama yang sudah tidak diperlukan, atau membuka batas tersebut dengan membeli lisensi premium sekali bayar melalui menu Profil › Lisensi Premium.`,
  },
  {
    problem: "Lisensi premium tidak aktif setelah membeli atau ganti perangkat",
    solution:
      "Buka Profil › Lisensi Premium lalu pilih Pulihkan Pembelian. Pastikan perangkat terhubung ke internet dan Anda masuk dengan akun App Store atau Google Play yang sama seperti saat pembelian. Bila pembayaran masih diproses platform, status dapat aktif beberapa saat kemudian.",
  },
  {
    problem: "Gagal memulihkan berkas cadangan",
    solution:
      "Pastikan berkas yang dipilih adalah berkas cadangan JejakBon dan belum berubah nama ekstensinya. Bila berkas tersimpan di penyimpanan awan, unduh dulu ke perangkat sebelum dipilih. Perlu diketahui, memulihkan cadangan tidak menimpa status lisensi premium Anda.",
  },
  {
    problem: "Aplikasi terasa lambat setelah banyak transaksi",
    solution:
      "Rapikan catatan lama yang sudah lunas dan tidak lagi diperlukan, lalu mulai ulang aplikasi. Pastikan juga ruang penyimpanan perangkat masih memadai, terutama bila Anda menyimpan banyak foto bukti.",
  },
];

const dataTopics = [
  {
    title: "Menyimpan data dengan aman",
    body: "Karena catatan tersimpan di perangkat, keamanan perangkat Anda adalah lapisan perlindungan utama. Aktifkan kunci layar, Face ID, atau Touch ID, dan hindari meminjamkan perangkat dalam keadaan tidak terkunci.",
  },
  {
    title: "Mencadangkan secara berkala",
    body: "Buat berkas cadangan dari Profil › Backup & Restore, terutama sebelum mengganti perangkat atau memasang ulang aplikasi. Simpan berkas tersebut di penyimpanan awan pribadi atau komputer Anda.",
  },
  {
    title: "Menghapus catatan tertentu",
    body: "Buka transaksi atau kontak yang ingin dihapus, lalu pilih opsi hapus. Penghapusan bersifat permanen dan tidak dapat dibatalkan, jadi pastikan catatan tersebut memang sudah tidak diperlukan.",
  },
  {
    title: "Menghapus seluruh data",
    body: "Menghapus aplikasi JejakBon dari perangkat akan menghapus seluruh basis data lokal beserta foto bukti di dalamnya. Berkas cadangan yang sudah Anda simpan di luar aplikasi tidak ikut terhapus dan perlu dihapus sendiri.",
  },
  {
    title: "Data orang lain yang Anda catat",
    body: "Nama, nomor telepon, dan foto bukti milik orang lain yang Anda simpan adalah tanggung jawab Anda. Catat seperlunya, dan berhati-hatilah saat membagikan surat tagihan atau laporan kepada pihak lain.",
  },
  {
    title: "Permintaan terkait privasi",
    body: "Rincian lengkap mengenai pengumpulan, penggunaan, dan penyimpanan data dijelaskan pada Kebijakan Privasi kami. Pertanyaan atau permintaan khusus dapat dikirim ke alamat email dukungan.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SupportPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-text-primary">
      <SiteHeader cta={{ label: "Hubungi Kami", href: "#kontak" }} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/40 blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-4 py-1.5 text-xs font-semibold text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-success" />
              Pusat Bantuan Resmi JejakBon
            </span>
            <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Bantuan &amp; Dukungan
            </h1>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Panduan penggunaan, jawaban atas pertanyaan yang sering diajukan,
              dan cara menghubungi tim kami. Bila jawaban yang Anda cari tidak
              ada di halaman ini, kirimkan email — kami akan membantu.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={supportMailto("Bantuan JejakBon")}
                className="w-full rounded-full bg-text-primary px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 sm:w-auto"
              >
                Email Tim Dukungan
              </a>
              <a
                href="#faq"
                className="w-full rounded-full border border-border-soft bg-white px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-light-gray sm:w-auto"
              >
                Lihat Pertanyaan Umum
              </a>
            </div>
            <p className="mt-4 text-xs text-text-disabled">
              Terakhir diperbarui: {site.lastUpdated}
            </p>
          </div>
        </section>

        {/* Jump links */}
        <nav
          aria-label="Navigasi halaman bantuan"
          className="border-b border-border-soft bg-white"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-2 px-4 py-4 sm:px-6">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-border-soft px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Kontak cepat */}
        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
            <div className="rounded-3xl border border-border-soft bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold">Butuh bantuan cepat?</h2>
              <p className="mt-2 leading-relaxed text-text-secondary">
                Kirim email ke tim dukungan JejakBon. Sertakan tipe perangkat,
                versi sistem operasi, versi aplikasi, dan penjelasan singkat
                mengenai kendala Anda agar kami dapat membantu lebih cepat.
              </p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4">
                  <dt className="text-xs font-semibold tracking-wide text-text-disabled uppercase">
                    Email dukungan
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={supportMailto("Bantuan JejakBon")}
                      className="font-semibold break-all underline underline-offset-2 transition-opacity hover:opacity-70"
                    >
                      {site.supportEmail}
                    </a>
                  </dd>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <dt className="text-xs font-semibold tracking-wide text-text-disabled uppercase">
                    Waktu tanggapan
                  </dt>
                  <dd className="mt-1 font-semibold">1 × 24 jam pada hari kerja</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Panduan Memulai */}
        <section id="memulai" className="scroll-mt-20 bg-surface py-14 md:py-20">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Panduan Memulai
              </h2>
              <p className="mt-3 text-text-secondary">
                Empat langkah untuk mulai mencatat hutang piutang Anda.
              </p>
            </div>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2">
              {gettingStarted.map((step) => (
                <li
                  key={step.number}
                  className="rounded-3xl border border-border-soft bg-white p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Panduan Fitur */}
        <section id="panduan-fitur" className="scroll-mt-20 py-14 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Panduan Fitur
              </h2>
              <p className="mt-3 text-text-secondary">
                Langkah demi langkah untuk setiap fitur utama JejakBon.
              </p>
            </div>
            <div className="mt-10 space-y-5">
              {featureGuides.map((guide) => (
                <article
                  key={guide.title}
                  className="rounded-3xl border border-border-soft bg-white p-6 sm:p-8"
                >
                  <h3 className="text-lg font-bold">{guide.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {guide.intro}
                  </p>
                  <ol className="mt-5 space-y-3">
                    {guide.steps.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-bold text-text-secondary">
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-text-secondary">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 bg-surface py-14 md:py-20">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="mt-3 text-text-secondary">
                Ketuk pertanyaan untuk melihat jawabannya.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              {faqGroups.map((group) => (
                <div key={group.group}>
                  <h3 className="text-xs font-bold tracking-widest text-text-disabled uppercase">
                    {group.group}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <details
                        key={item.q}
                        className="group rounded-2xl border border-border-soft bg-white px-5 py-4 open:shadow-sm"
                      >
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold">
                          <span>{item.q}</span>
                          <span
                            aria-hidden
                            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-text-secondary transition-transform group-open:rotate-45"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              className="h-3.5 w-3.5"
                            >
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pemecahan Masalah */}
        <section id="masalah" className="scroll-mt-20 py-14 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Pemecahan Masalah
              </h2>
              <p className="mt-3 text-text-secondary">
                Kendala yang paling sering dilaporkan beserta cara mengatasinya.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {troubleshooting.map((item) => (
                <div
                  key={item.problem}
                  className="rounded-3xl border border-border-soft bg-white p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-yellow text-text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        className="h-4.5 w-4.5"
                      >
                        <path d="M12 9v4M12 17h.01" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <h3 className="font-bold">{item.problem}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data & Privasi */}
        <section id="data" className="scroll-mt-20 bg-surface py-14 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Data &amp; Privasi
              </h2>
              <p className="mt-3 text-text-secondary">
                Cara mengelola, menyimpan, dan menghapus catatan Anda.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {dataTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="rounded-3xl border border-border-soft bg-white p-6"
                >
                  <h3 className="font-bold">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {topic.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/privacy"
                className="w-full rounded-full border border-border-soft bg-white px-7 py-3.5 text-center text-sm font-semibold transition-colors hover:bg-light-gray sm:w-auto"
              >
                Baca Kebijakan Privasi
              </a>
              <a
                href="/terms"
                className="w-full rounded-full border border-border-soft bg-white px-7 py-3.5 text-center text-sm font-semibold transition-colors hover:bg-light-gray sm:w-auto"
              >
                Baca Syarat &amp; Ketentuan
              </a>
            </div>
          </div>
        </section>

        {/* Kontak */}
        <section id="kontak" className="scroll-mt-20 py-14 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-text-primary px-6 py-14 text-center sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
              />
              <h2 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Masih Butuh Bantuan?
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-white/70">
                Tim dukungan JejakBon siap membantu. Kirim email dan kami akan
                menanggapi dalam 1 × 24 jam pada hari kerja.
              </p>

              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={supportMailto("Bantuan JejakBon — Pertanyaan Umum")}
                  className="w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-text-primary transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Kirim Pertanyaan
                </a>
                <a
                  href={supportMailto("Laporan Bug JejakBon")}
                  className="w-full rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Laporkan Bug
                </a>
              </div>

              <p className="relative mt-6 text-sm text-white/60">
                Atau tulis langsung ke{" "}
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="font-medium break-all text-white underline underline-offset-2"
                >
                  {site.supportEmail}
                </a>
              </p>

              <p className="relative mx-auto mt-8 max-w-xl text-xs leading-relaxed text-white/40">
                JejakBon dikembangkan oleh {site.developer}. Aplikasi ini adalah
                alat pencatatan pribadi dan bukan layanan pinjaman, penagihan,
                maupun lembaga keuangan.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
