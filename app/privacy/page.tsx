import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — JejakBon",
  description:
    "Kebijakan privasi aplikasi JejakBon, pencatat hutang piutang.",
};

const sections = [
  {
    title: "1. Informasi yang Kami Kumpulkan",
    content: [
      "JejakBon dirancang dengan prinsip privasi. Data pencatatan hutang piutang, daftar kontak, nominal, dan catatan transaksi yang Anda masukkan disimpan secara lokal di perangkat Anda.",
      "Kami tidak mewajibkan pendaftaran akun untuk menggunakan fitur inti aplikasi. Informasi kontak yang Anda tambahkan hanya digunakan untuk keperluan pencatatan di dalam aplikasi.",
    ],
  },
  {
    title: "2. Penggunaan Informasi",
    content: [
      "Data yang Anda masukkan digunakan semata-mata untuk menampilkan catatan hutang piutang, ringkasan dashboard, dan riwayat transaksi di dalam aplikasi.",
      "Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.",
    ],
  },
  {
    title: "3. Penyimpanan dan Keamanan Data",
    content: [
      "Data tersimpan di perangkat Anda. Kami menerapkan langkah-langkah wajar untuk melindungi data dari akses yang tidak sah.",
      "Anda bertanggung jawab menjaga keamanan perangkat Anda, termasuk penggunaan kunci layar atau proteksi lainnya.",
    ],
  },
  {
    title: "4. Izin Aplikasi",
    content: [
      "JejakBon dapat meminta izin tertentu pada perangkat Anda (misalnya akses kontak) hanya jika diperlukan untuk fitur yang Anda gunakan. Izin dapat dicabut kapan saja melalui pengaturan perangkat.",
    ],
  },
  {
    title: "5. Data Anak-Anak",
    content: [
      "JejakBon tidak ditujukan untuk anak di bawah usia 13 tahun dan kami tidak dengan sengaja mengumpulkan data pribadi dari anak-anak.",
    ],
  },
  {
    title: "6. Penghapusan Data",
    content: [
      "Anda dapat menghapus catatan kapan saja melalui aplikasi. Menghapus aplikasi dari perangkat akan menghapus seluruh data yang tersimpan secara lokal.",
    ],
  },
  {
    title: "7. Perubahan Kebijakan",
    content: [
      "Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan diumumkan melalui halaman ini dengan tanggal pembaruan terbaru.",
    ],
  },
  {
    title: "8. Hubungi Kami",
    content: [
      "Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami melalui email: ajiwahyu334@gmail.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-text-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border-soft bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-bold">
              J
            </span>
            <span className="text-lg font-bold tracking-tight">JejakBon</span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-border-soft px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-surface"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-surface py-14 md:py-20">
          <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Kebijakan Privasi
            </h1>
            <p className="mt-4 text-text-secondary">
              Privasi Anda penting bagi kami. Halaman ini menjelaskan bagaimana
              JejakBon menangani data Anda.
            </p>
            <p className="mt-3 text-xs text-text-disabled">
              Terakhir diperbarui: 4 Juli 2026
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mx-auto w-full max-w-3xl space-y-10 px-4 sm:px-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold">{section.title}</h2>
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="mt-3 leading-relaxed text-text-secondary"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border-soft bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold">
              J
            </span>
            <span className="font-bold">JejakBon</span>
          </div>
          <p className="text-xs text-text-disabled">
            © 2026 JejakBon. Hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
