import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { AppStoreBadge, PlayStoreBadge } from "../components/StoreBadges";
import { site } from "../components/site-config";

export const metadata: Metadata = {
  title: "JejakBon untuk iPhone — Catat Hutang & Piutang Tanpa Ribet",
  description:
    "JejakBon adalah aplikasi pencatat hutang piutang untuk iPhone. Atur cicilan, pantau jatuh tempo, dan kirim surat tagihan otomatis. Unduh gratis, sekali bayar untuk membuka semua fitur — tanpa langganan.",
  alternates: { canonical: "/marketing" },
  openGraph: {
    title: "JejakBon untuk iPhone — Catat Hutang & Piutang Tanpa Ribet",
    description:
      "Catat hutang piutang, atur cicilan, dan kirim tagihan otomatis. Tanpa akun, tanpa iklan, data tersimpan di perangkat Anda.",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const highlights = [
  {
    title: "Hutang & piutang terpisah otomatis",
    body: "Setiap transaksi langsung masuk ke kelompok yang tepat, lengkap dengan status bayar yang ter-update dan foto bukti transfer bila diperlukan.",
  },
  {
    title: "Cicilan yang dihitung sendiri",
    body: "Bayar sekaligus atau dicicil. Tentukan jumlah cicilan, dan jadwalnya terbagi rata otomatis lengkap dengan histori bayar per termin.",
  },
  {
    title: "Pengingat jatuh tempo",
    body: "Notifikasi muncul menjelang tanggal jatuh tempo, jadi Anda tidak perlu mengingat sendiri kapan waktunya menagih atau membayar.",
  },
  {
    title: "Surat tagihan siap kirim",
    body: "Buat surat tagihan rapi dalam bentuk PDF hanya dari data yang sudah ada, lalu kirim lewat WhatsApp atau cetak langsung.",
  },
  {
    title: "Laporan yang bisa dibagikan",
    body: "Pantau posisi keuangan Anda dengan laporan yang dapat difilter per kontak dan periode, lalu diekspor untuk arsip pribadi.",
  },
  {
    title: "Data di perangkat, cadangan di tangan Anda",
    body: "Catatan tersimpan lokal di iPhone Anda, bukan di server kami. Buat berkas cadangan sendiri kapan saja dan pulihkan saat ganti perangkat.",
  },
];

const pricing = {
  free: {
    title: "Coba Gratis",
    price: "Rp 0",
    note: "Tanpa batas waktu",
    items: [
      `Sampai ${site.freeMaxTransactions} transaksi`,
      `Sampai ${site.freeMaxContacts} kontak`,
      "Semua fitur inti dapat dicoba",
      "Tanpa akun, tanpa kartu kredit",
    ],
  },
  premium: {
    title: "Lisensi Lifetime",
    price: site.lifetimePrice,
    note: "Sekali bayar, bukan langganan",
    items: [
      "Transaksi dan kontak tanpa batas",
      "Cicilan, surat tagihan, dan laporan penuh",
      "Backup & restore tanpa batas",
      "Berlaku selamanya, tanpa tagihan berulang",
    ],
  },
};

const screenshots = [
  {
    src: "/images/dashboard.webp",
    alt: "Dashboard JejakBon menampilkan ringkasan total hutang dan piutang",
    caption: "Ringkasan hutang & piutang dalam satu layar",
    width: 1220,
    height: 2616,
  },
  {
    src: "/images/catat_hutang.webp",
    alt: "Halaman catat hutang di aplikasi JejakBon",
    caption: "Catat hutang lengkap dengan jatuh tempo",
    width: 830,
    height: 1600,
  },
  {
    src: "/images/catat_piutang.webp",
    alt: "Halaman catat piutang di aplikasi JejakBon",
    caption: "Pantau siapa yang belum membayar",
    width: 819,
    height: 1600,
  },
  {
    src: "/images/daftar_kontak.webp",
    alt: "Daftar kontak hutang piutang di aplikasi JejakBon",
    caption: "Riwayat transaksi rapi per kontak",
    width: 1220,
    height: 2618,
  },
];

const audiences = [
  {
    title: "Pedagang & pemilik warung",
    body: "Catat pelanggan yang berbelanja dengan sistem bon agar tidak ada tagihan yang terlewat saat waktunya menagih.",
  },
  {
    title: "Keluarga & teman",
    body: "Pinjam-meminjam antar teman sering lupa dicatat. Simpan nominalnya sejak awal agar hubungan baik tetap terjaga.",
  },
  {
    title: "Pekerja & freelancer",
    body: "Talangan biaya proyek, patungan kantor, atau pembayaran klien yang tertunda — semuanya tercatat di satu tempat.",
  },
  {
    title: "Anak kos & mahasiswa",
    body: "Patungan makan, iuran kos, atau pinjaman kecil antar teman jadi lebih mudah diingat dan dilunasi.",
  },
];

const appInfo = [
  { label: "Harga", value: "Gratis, dengan pembelian dalam aplikasi" },
  { label: "Lisensi lifetime", value: `${site.lifetimePrice} sekali bayar` },
  { label: "Kategori", value: site.category },
  { label: "Kompatibilitas", value: `${site.minimumIosVersion} atau lebih baru` },
  { label: "Peringkat usia", value: site.ageRating },
  { label: "Bahasa", value: site.languages },
  { label: "Versi", value: site.appVersion },
  { label: "Pengembang", value: site.developer },
];

const privacyPoints = [
  "Tidak memerlukan pendaftaran akun, email, maupun kata sandi.",
  "Catatan, foto bukti, dan berkas cadangan tersimpan lokal di perangkat Anda.",
  "Tidak ada pelacak iklan maupun analitik perilaku di dalam aplikasi.",
  "Menghapus aplikasi akan menghapus seluruh data lokal yang tersimpan.",
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function MarketingPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-text-primary">
      <SiteHeader cta={{ label: "Unduh Sekarang", href: "#unduh" }} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-primary/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-40 left-[-10%] h-72 w-72 rounded-full bg-secondary/30 blur-3xl"
          />
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-16 pb-14 sm:px-6 md:grid-cols-2 md:pt-24 md:pb-20">
            <div className="relative text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-4 py-1.5 text-xs font-semibold text-text-secondary">
                <span className="h-2 w-2 rounded-full bg-success" />
                Tersedia untuk iPhone
              </span>
              <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
                Semua Hutang &amp; Piutang,{" "}
                <span className="relative inline-block">
                  Satu Aplikasi
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-primary"
                  />
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg md:mx-0">
                Catat hutang piutang, atur cicilan, dan kirim tagihan otomatis —
                semua dalam satu aplikasi. Sekali bayar untuk membuka semua
                fitur, tanpa langganan.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <AppStoreBadge />
                <PlayStoreBadge />
              </div>

              <p className="mt-4 text-xs text-text-disabled">
                Unduh gratis · Tanpa akun · Data tersimpan di perangkat Anda
              </p>
            </div>

            <div className="relative flex justify-center">
              <div
                aria-hidden
                className="absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 blur-2xl sm:h-96 sm:w-96"
              />
              <div className="w-56 overflow-hidden rounded-[2rem] border-4 border-text-primary/90 shadow-2xl sm:w-64">
                <Image
                  src="/images/dashboard.webp"
                  alt="Dashboard aplikasi JejakBon di iPhone"
                  width={1220}
                  height={2616}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Masalah yang diselesaikan */}
        <section className="bg-text-primary py-14 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              &ldquo;Sepertinya dia masih punya hutang, tapi berapa ya?&rdquo;
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">
              Catatan di kertas hilang, catatan di aplikasi pesan tenggelam, dan
              mengingat sendiri hampir selalu meleset. Ujungnya bukan cuma uang
              yang tidak kembali, tapi juga rasa canggung saat harus menagih.
              JejakBon menyimpan angkanya untuk Anda, sejak menit pertama
              kesepakatan dibuat.
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section id="fitur" className="scroll-mt-20 py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Dibuat Sederhana, Sengaja
              </h2>
              <p className="mt-3 text-text-secondary">
                Cukup fitur yang benar-benar Anda pakai setiap hari.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border-soft bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <span
                    aria-hidden
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-text-primary"
                    >
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section id="tampilan" className="scroll-mt-20 bg-surface py-14 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Lihat Tampilannya
              </h2>
              <p className="mt-3 text-text-secondary">
                Antarmuka bersih yang langsung menunjukkan angka yang Anda cari.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {screenshots.map((shot) => (
                <figure key={shot.src} className="flex flex-col items-center">
                  <div className="w-44 overflow-hidden rounded-[1.75rem] border-4 border-text-primary/90 shadow-xl">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-[15rem] text-center text-sm leading-relaxed text-text-secondary">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Untuk siapa */}
        <section id="untuk-siapa" className="scroll-mt-20 py-14 md:py-20">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Cocok untuk Siapa?
              </h2>
              <p className="mt-3 text-text-secondary">
                Siapa pun yang uangnya sedang berada di tangan orang lain — atau
                sebaliknya.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {audiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border-soft bg-surface p-6"
                >
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Harga */}
        <section id="harga" className="scroll-mt-20 bg-surface py-14 md:py-20">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Sekali Bayar, Pakai Selamanya
              </h2>
              <p className="mt-3 text-text-secondary">
                Coba dulu tanpa biaya. Kalau cocok, buka semuanya dengan satu
                kali pembayaran — tanpa tagihan bulanan.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-border-soft bg-white p-7">
                <h3 className="font-bold">{pricing.free.title}</h3>
                <p className="mt-3 text-3xl font-bold tracking-tight">
                  {pricing.free.price}
                </p>
                <p className="mt-1 text-sm text-text-disabled">
                  {pricing.free.note}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {pricing.free.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-text-disabled"
                      />
                      <span className="text-sm leading-relaxed text-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl border-2 border-text-primary bg-white p-7">
                <span className="absolute top-6 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold">
                  Rekomendasi
                </span>
                <h3 className="font-bold">{pricing.premium.title}</h3>
                <p className="mt-3 text-3xl font-bold tracking-tight">
                  {pricing.premium.price}
                </p>
                <p className="mt-1 text-sm text-text-disabled">
                  {pricing.premium.note}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {pricing.premium.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3 text-text-primary"
                        >
                          <path d="M4 12.5l5 5L20 6.5" />
                        </svg>
                      </span>
                      <span className="text-sm leading-relaxed text-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-6 text-center text-xs leading-relaxed text-text-disabled">
              Pembayaran diproses oleh App Store atau Google Play. Lisensi dapat
              dipulihkan lewat menu Pulihkan Pembelian saat Anda memasang ulang
              aplikasi atau berganti perangkat.
            </p>
          </div>
        </section>

        {/* Privasi */}
        <section id="privasi" className="scroll-mt-20 py-14 md:py-20">
          <div className="mx-auto grid w-full max-w-5xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Catatan Keuangan Anda, Tetap Milik Anda
              </h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                JejakBon adalah alat pencatatan pribadi. Kami bukan lembaga
                keuangan, bukan penyedia pinjaman online, dan tidak memproses
                transaksi uang dalam bentuk apa pun.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/privacy"
                  className="inline-flex justify-center rounded-full border border-border-soft bg-surface px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-light-gray"
                >
                  Kebijakan Privasi
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex justify-center rounded-full border border-border-soft bg-surface px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-light-gray"
                >
                  Syarat &amp; Ketentuan
                </Link>
              </div>
            </div>
            <ul className="space-y-3">
              {privacyPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-2xl border border-border-soft bg-surface p-4"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-text-primary"
                    >
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-text-secondary">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Informasi aplikasi */}
        <section
          id="informasi"
          className="scroll-mt-20 bg-surface py-14 md:py-20"
        >
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Informasi Aplikasi
              </h2>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {appInfo.map((info) => (
                <div
                  key={info.label}
                  className="rounded-2xl border border-border-soft bg-white p-5"
                >
                  <dt className="text-xs font-semibold tracking-wide text-text-disabled uppercase">
                    {info.label}
                  </dt>
                  <dd className="mt-1.5 font-semibold">{info.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-center text-sm text-text-secondary">
              Butuh panduan penggunaan atau ingin melaporkan kendala?{" "}
              <Link
                href="/support"
                className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
              >
                Kunjungi halaman Bantuan &amp; Dukungan
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA unduh */}
        <section id="unduh" className="scroll-mt-20 pb-16 md:pb-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-text-primary px-6 py-14 text-center sm:px-12 md:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
              />
              <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Mulai Catat Hari Ini
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-white/70">
                Unduh JejakBon dan biarkan aplikasi yang mengingat angkanya.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <AppStoreBadge />
                <PlayStoreBadge />
              </div>
              <p className="relative mt-6 text-sm text-white/50">
                Pertanyaan?{" "}
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="font-medium break-all text-white underline underline-offset-2"
                >
                  {site.supportEmail}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
