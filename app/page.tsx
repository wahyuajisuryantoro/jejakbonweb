import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { AppStoreBadge, PlayStoreBadge } from "./components/StoreBadges";

const features = [
  {
    title: "Catat Hutang",
    description:
      "Simpan setiap hutang dengan detail nominal, tanggal jatuh tempo, dan catatan. Tidak ada lagi hutang yang terlupakan.",
    image: "/images/catat_hutang.webp",
    width: 830,
    height: 1600,
    accent: "bg-accent-pink/20",
  },
  {
    title: "Catat Piutang",
    description:
      "Pantau siapa saja yang berhutang kepada Anda. Tagih tepat waktu dengan catatan jatuh tempo yang jelas.",
    image: "/images/catat_piutang.webp",
    width: 819,
    height: 1600,
    accent: "bg-secondary/30",
  },
  {
    title: "Daftar Kontak",
    description:
      "Kelola semua kontak hutang piutang dalam satu tempat. Lihat riwayat transaksi per orang dengan mudah.",
    image: "/images/daftar_kontak.webp",
    width: 1220,
    height: 2618,
    accent: "bg-accent-purple/20",
  },
];

const benefits = [
  {
    title: "Ringkasan Otomatis",
    description:
      "Dashboard menampilkan total hutang dan piutang Anda secara real-time.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="7" height="9" rx="1.5" />
        <rect x="14" y="3" width="7" height="5" rx="1.5" />
        <rect x="14" y="12" width="7" height="9" rx="1.5" />
        <rect x="3" y="16" width="7" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Sekali Bayar",
    description:
      "Coba gratis lebih dulu. Buka semua fitur dengan sekali bayar, tanpa langganan bulanan.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5h3.75a1.75 1.75 0 1 1 0 3.5h-2.5a1.75 1.75 0 1 0 0 3.5H14.5" />
      </svg>
    ),
  },
  {
    title: "Data Aman",
    description:
      "Catatan keuangan Anda tersimpan aman dan hanya bisa diakses oleh Anda.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
        <path d="M9.5 12l2 2 3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Ringan & Cepat",
    description:
      "Aplikasi ringan yang dirancang agar pencatatan selesai dalam hitungan detik.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-6 w-6"
      >
        <path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12L13 2z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "1",
    title: "Tambah Kontak",
    description:
      "Masukkan nama orang yang berhutang atau memberi hutang kepada Anda.",
  },
  {
    number: "2",
    title: "Catat Transaksi",
    description: "Isi nominal, tanggal, dan keterangan hutang atau piutang.",
  },
  {
    number: "3",
    title: "Pantau & Lunasi",
    description:
      "Lihat ringkasan di dashboard dan tandai lunas saat pembayaran selesai.",
  },
];

export default function Home() {
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
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-16 pb-12 sm:px-6 md:grid-cols-2 md:pt-24 md:pb-20">
            <div className="relative text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-4 py-1.5 text-xs font-semibold text-text-secondary">
                <span className="h-2 w-2 rounded-full bg-success" />
                Aplikasi Pencatat Hutang Piutang
              </span>
              <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
                Catat Hutang &amp; Piutang,{" "}
                <span className="relative inline-block">
                  Tanpa Ribet
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-primary"
                  />
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg md:mx-0">
                JejakBon membantu Anda mencatat, memantau, dan melunasi hutang
                piutang dengan rapi — agar uang dan hubungan baik tetap terjaga.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#unduh"
                  className="w-full rounded-full bg-text-primary px-7 py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-85 sm:w-auto"
                >
                  Unduh Sekarang
                </a>
                <a
                  href="#fitur"
                  className="w-full rounded-full border border-border-soft bg-white px-7 py-3.5 text-center text-sm font-semibold text-text-primary transition-colors hover:bg-surface sm:w-auto"
                >
                  Lihat Fitur
                </a>
              </div>
              <p className="mt-4 text-xs text-text-disabled">
                Unduh gratis · Tanpa akun · Tanpa langganan
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
                  alt="Tampilan dashboard aplikasi JejakBon"
                  width={1220}
                  height={2616}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fitur */}
        <section id="fitur" className="bg-surface py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Semua yang Anda Butuhkan
              </h2>
              <p className="mt-4 text-text-secondary">
                Fitur sederhana namun lengkap untuk mengelola hutang piutang
                sehari-hari.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col overflow-hidden rounded-3xl border border-border-soft bg-white transition-shadow hover:shadow-lg"
                >
                  <div
                    className={`flex justify-center px-8 pt-8 ${feature.accent}`}
                  >
                    <div className="w-40 overflow-hidden rounded-t-2xl border-4 border-b-0 border-text-primary/90 shadow-lg">
                      <Image
                        src={feature.image}
                        alt={`Fitur ${feature.title} JejakBon`}
                        width={feature.width}
                        height={feature.height}
                        className="h-52 w-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cara Kerja */}
        <section id="cara-kerja" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Mulai dalam 3 Langkah
              </h2>
              <p className="mt-4 text-text-secondary">
                Tidak perlu belajar lama. Buka aplikasi dan langsung catat.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-border-soft bg-white p-8 text-center"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Keunggulan */}
        <section id="keunggulan" className="bg-surface py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Kenapa JejakBon?
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-border-soft bg-white p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-text-primary">
                    {benefit.icon}
                  </span>
                  <h3 className="mt-4 font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="unduh" className="py-16 md:py-24">
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
                Jangan Biarkan Hutang Terlupakan
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-white/70">
                Unduh JejakBon sekarang dan rasakan tenangnya punya catatan
                keuangan yang rapi.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <AppStoreBadge />
                <PlayStoreBadge />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
