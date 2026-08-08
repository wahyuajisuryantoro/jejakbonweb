import type { Metadata } from "next";
import LegalDocument, {
  type LegalBlock,
  type LegalSection,
} from "../components/LegalDocument";
import { site } from "../components/site-config";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — JejakBon",
  description:
    "Kebijakan Privasi JejakBon: bagaimana Serein Indonesia mengumpulkan, menggunakan, menyimpan, dan melindungi data Anda pada aplikasi pencatat hutang piutang JejakBon.",
  alternates: { canonical: "/privacy" },
};

const intro: LegalBlock[] = [
  {
    kind: "text",
    value: `${site.developer} ("kami" atau "milik kami") menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan aplikasi ${site.name}.`,
  },
  {
    kind: "text",
    value: `Dengan menggunakan ${site.name}, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.`,
  },
  {
    kind: "note",
    value: `Ringkasnya: JejakBon bekerja sepenuhnya di perangkat Anda. Kami tidak memiliki server yang menyimpan catatan keuangan Anda, tidak mewajibkan pendaftaran akun, dan tidak dapat membaca isi catatan Anda dari jarak jauh.`,
  },
];

const sections: LegalSection[] = [
  {
    number: "1",
    title: "Informasi yang Kami Kumpulkan",
    blocks: [
      { kind: "subtitle", value: "1.1 Informasi yang Anda Masukkan Sendiri" },
      {
        kind: "text",
        value:
          "Seluruh informasi berikut Anda masukkan secara mandiri dan disimpan di dalam basis data lokal pada perangkat Anda:",
      },
      {
        kind: "list",
        value: [
          "Nama profil yang Anda isi saat pertama kali membuka aplikasi",
          "Data kontak hutang piutang: nama, nomor telepon, email, alamat, catatan, dan foto kontak bila Anda menambahkannya",
          "Kontak darurat yang Anda catat pada suatu kontak: nama, nomor telepon, dan hubungan",
          "Data transaksi: jenis (hutang atau piutang), judul, keterangan, nominal, metode pembayaran (tempo atau cicilan), tanggal jatuh tempo, dan status pelunasan",
          "Data cicilan dan riwayat pembayaran, termasuk nominal serta tanggal setiap pembayaran",
          "Foto bukti transaksi yang Anda ambil melalui kamera atau pilih dari galeri",
          "Data surat tagihan atau invoice yang Anda hasilkan dari aplikasi",
        ],
      },
      {
        kind: "note",
        value:
          "JejakBon tidak mewajibkan pendaftaran akun, alamat email, kata sandi, maupun nomor telepon Anda untuk dapat digunakan. Data di atas tidak dikirimkan ke server kami.",
      },
      { kind: "subtitle", value: "1.2 Informasi yang Diproses Pihak Ketiga" },
      {
        kind: "text",
        value:
          "Untuk memproses pembelian lisensi premium, aplikasi menggunakan layanan RevenueCat yang bekerja sama dengan Apple App Store dan Google Play Store. Layanan ini dapat memproses:",
      },
      {
        kind: "list",
        value: [
          "Pengenal pengguna anonim yang dibuat otomatis oleh sistem pembelian (bukan nama atau email Anda)",
          "Riwayat pembelian dan status lisensi pada perangkat Anda",
          "Informasi teknis perangkat yang diperlukan untuk memvalidasi pembelian, seperti jenis perangkat dan versi sistem operasi",
        ],
      },
      {
        kind: "text",
        value:
          "Data pembelian ini terpisah sepenuhnya dari catatan hutang piutang Anda. Kami tidak menerima nomor kartu, rekening, atau data pembayaran Anda — seluruh pembayaran diproses langsung oleh Apple atau Google.",
      },
      { kind: "subtitle", value: "1.3 Informasi yang Tidak Kami Kumpulkan" },
      {
        kind: "list",
        value: [
          "Kami tidak memasang layanan analitik perilaku maupun pelacak iklan pihak ketiga di dalam aplikasi",
          "Kami tidak mengumpulkan lokasi perangkat Anda",
          "Kami tidak membaca daftar kontak telepon Anda; setiap kontak Anda masukkan sendiri secara manual",
          "Kami tidak mengunggah catatan keuangan, foto bukti, maupun berkas cadangan Anda ke server kami",
        ],
      },
    ],
  },
  {
    number: "2",
    title: "Bagaimana Kami Menggunakan Informasi Anda",
    blocks: [
      {
        kind: "text",
        value:
          "Informasi yang Anda masukkan diproses di dalam perangkat Anda untuk:",
      },
      {
        kind: "list",
        value: [
          "Menampilkan dan mengelola catatan hutang dan piutang Anda",
          "Menghitung sisa tagihan, status pelunasan, dan jadwal cicilan secara otomatis",
          "Menampilkan ringkasan serta laporan keuangan yang dapat difilter per kontak dan periode",
          "Mengirimkan pengingat lokal menjelang tanggal jatuh tempo yang Anda tetapkan",
          "Menghasilkan surat tagihan dalam bentuk PDF untuk Anda cetak atau bagikan",
          "Membuat dan memulihkan berkas cadangan atas permintaan Anda",
          "Memverifikasi status lisensi premium Anda",
        ],
      },
      {
        kind: "text",
        value:
          "Kami tidak menggunakan catatan keuangan Anda untuk iklan bertarget, penilaian kredit, penjualan data, atau tujuan pemasaran apa pun.",
      },
    ],
  },
  {
    number: "3",
    title: "Penyimpanan dan Keamanan Data",
    blocks: [
      { kind: "subtitle", value: "3.1 Penyimpanan Data" },
      {
        kind: "text",
        value:
          "Seluruh catatan Anda disimpan dalam basis data lokal di dalam area penyimpanan aplikasi pada perangkat Anda. Foto bukti transaksi juga disimpan secara lokal. Kami tidak menyimpan salinan data tersebut di server mana pun.",
      },
      {
        kind: "text",
        value:
          "Karena data bersifat lokal, data tidak berpindah dengan sendirinya ketika Anda mengganti perangkat atau memasang ulang aplikasi. Gunakan fitur Backup & Restore untuk memindahkan data Anda secara mandiri.",
      },
      { kind: "subtitle", value: "3.2 Berkas Cadangan" },
      {
        kind: "text",
        value:
          "Fitur cadangan menghasilkan satu berkas yang berisi salinan catatan dan foto bukti Anda. Berkas ini sepenuhnya berada dalam kendali Anda — Anda yang menentukan di mana ia disimpan dan kepada siapa ia dibagikan. Kami tidak menerima salinannya.",
      },
      {
        kind: "note",
        value:
          "Berkas cadangan tidak dienkripsi dengan kata sandi. Perlakukan berkas tersebut seperti dokumen keuangan pribadi: simpan di tempat yang aman dan jangan bagikan kepada pihak yang tidak Anda percayai.",
      },
      { kind: "subtitle", value: "3.3 Keamanan Data" },
      {
        kind: "text",
        value:
          "Kami menerapkan langkah-langkah yang wajar untuk melindungi data Anda, termasuk:",
      },
      {
        kind: "list",
        value: [
          "Penyimpanan pada area aplikasi yang diisolasi oleh sistem operasi iOS dan Android, sehingga tidak dapat diakses aplikasi lain",
          "Tidak adanya pengiriman catatan keuangan ke jaringan, sehingga tidak ada risiko penyadapan saat transmisi",
          "Status lisensi yang tidak ikut tertimpa saat Anda memulihkan berkas cadangan lama",
        ],
      },
      {
        kind: "text",
        value:
          "Karena data berada di perangkat Anda, keamanan perangkat adalah lapisan perlindungan utama. Kami sangat menyarankan Anda mengaktifkan kunci layar, Face ID, atau Touch ID.",
      },
      {
        kind: "text",
        value:
          "Namun, tidak ada metode penyimpanan elektronik yang 100% aman. Kami tidak dapat menjamin keamanan absolut data Anda, terutama apabila perangkat Anda hilang, diakses orang lain, atau dimodifikasi secara tidak resmi.",
      },
    ],
  },
  {
    number: "4",
    title: "Izin Perangkat yang Kami Minta",
    blocks: [
      {
        kind: "text",
        value:
          "Aplikasi hanya meminta izin yang diperlukan untuk fitur yang Anda gunakan. Seluruh izin dapat Anda tolak atau cabut kapan saja melalui Pengaturan perangkat.",
      },
      {
        kind: "list",
        value: [
          "Kamera — untuk mengambil foto bukti transaksi",
          "Galeri atau Foto — untuk memilih dan menyimpan foto bukti transaksi",
          "Notifikasi — untuk menampilkan pengingat jatuh tempo di perangkat Anda",
          "Alarm terjadwal — agar pengingat tetap muncul tepat waktu, termasuk setelah perangkat dinyalakan ulang",
          "Penyimpanan berkas — untuk menyimpan dan membaca berkas cadangan serta menyimpan surat tagihan PDF",
          "Internet — hanya digunakan untuk memvalidasi pembelian lisensi premium",
        ],
      },
      {
        kind: "note",
        value:
          "Menolak izin kamera, galeri, atau notifikasi tidak menghalangi Anda menggunakan fitur pencatatan utama.",
      },
    ],
  },
  {
    number: "5",
    title: "Berbagi Informasi dengan Pihak Ketiga",
    blocks: [
      {
        kind: "text",
        value:
          "Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Informasi hanya dapat terlibat pihak ketiga dalam situasi berikut:",
      },
      {
        kind: "list",
        value: [
          "Pemroses pembelian: RevenueCat, Apple App Store, dan Google Play Store memproses data pembelian lisensi sesuai kebijakan privasi masing-masing",
          "Berbagi atas inisiatif Anda: ketika Anda membagikan surat tagihan, laporan, atau berkas cadangan melalui WhatsApp, email, atau aplikasi lain, data tersebut tunduk pada kebijakan aplikasi tujuan",
          "Kepatuhan hukum: apabila diwajibkan oleh hukum yang berlaku atau untuk melindungi hak kami",
          "Dengan persetujuan Anda: dalam hal lain dengan izin eksplisit dari Anda",
        ],
      },
      {
        kind: "note",
        value:
          "Perlu dicatat bahwa karena catatan Anda tidak pernah dikirim ke server kami, kami secara teknis tidak memiliki akses ke isi catatan Anda dan karenanya tidak dapat menyerahkannya kepada pihak mana pun.",
      },
    ],
  },
  {
    number: "6",
    title: "Hak Anda",
    blocks: [
      { kind: "text", value: "Anda memiliki hak untuk:" },
      {
        kind: "list",
        value: [
          "Mengakses data: melihat seluruh data Anda kapan saja langsung dari dalam aplikasi",
          "Memperbaiki data: mengubah atau memperbarui catatan, kontak, dan transaksi yang tidak akurat",
          "Menghapus data: menghapus catatan tertentu, atau menghapus seluruh data dengan mencopot pemasangan aplikasi",
          "Portabilitas data: mengekspor data Anda melalui fitur Backup & Restore serta laporan yang dapat dibagikan",
          "Membatasi pemrosesan: menolak atau mencabut izin perangkat melalui Pengaturan",
        ],
      },
      {
        kind: "text",
        value:
          "Karena seluruh data berada di perangkat Anda, hak-hak ini dapat Anda jalankan sendiri secara langsung tanpa perlu mengajukan permintaan kepada kami. Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui informasi kontak di bagian akhir dokumen ini.",
      },
    ],
  },
  {
    number: "7",
    title: "Retensi Data",
    blocks: [
      {
        kind: "text",
        value:
          "Data Anda tersimpan selama aplikasi masih terpasang di perangkat Anda. Kami tidak menetapkan batas waktu penyimpanan karena kami tidak menyimpan data tersebut.",
      },
      {
        kind: "list",
        value: [
          "Menghapus satu catatan atau kontak dari aplikasi bersifat permanen dan tidak dapat dibatalkan",
          "Mencopot pemasangan aplikasi akan menghapus seluruh basis data lokal beserta foto bukti yang tersimpan di dalamnya",
          "Berkas cadangan yang sudah Anda simpan di luar aplikasi tidak ikut terhapus; Anda perlu menghapusnya sendiri",
          "Korespondensi email dukungan yang Anda kirimkan kepada kami disimpan selama diperlukan untuk menyelesaikan permintaan Anda, dan paling lama 12 bulan",
        ],
      },
    ],
  },
  {
    number: "8",
    title: "Privasi Anak-anak",
    blocks: [
      {
        kind: "text",
        value: `${site.name} tidak ditujukan untuk anak di bawah usia 13 tahun, dan kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak.`,
      },
      {
        kind: "text",
        value:
          "Karena aplikasi tidak mengirimkan data ke server kami, kami tidak memiliki data anak dalam penguasaan kami. Apabila Anda orang tua atau wali dan menemukan anak Anda menggunakan aplikasi ini, Anda dapat menghapus seluruh datanya langsung dari perangkat.",
      },
    ],
  },
  {
    number: "9",
    title: "Layanan dan Platform Pihak Ketiga",
    blocks: [
      {
        kind: "text",
        value:
          "Aplikasi didistribusikan melalui Apple App Store dan Google Play Store. Kedua platform tersebut memiliki kebijakan privasi masing-masing yang berlaku atas aktivitas pengunduhan dan pembelian Anda, dan berada di luar kendali kami.",
      },
      {
        kind: "text",
        value:
          "Hal yang sama berlaku untuk aplikasi tujuan ketika Anda membagikan surat tagihan atau laporan, misalnya WhatsApp atau layanan email yang Anda gunakan.",
      },
    ],
  },
  {
    number: "10",
    title: "Perubahan Kebijakan Privasi",
    blocks: [
      {
        kind: "text",
        value:
          "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan dengan memposting kebijakan baru di halaman ini dan memperbarui tanggal “Terakhir diperbarui”.",
      },
      {
        kind: "text",
        value:
          "Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala. Penggunaan berkelanjutan atas aplikasi setelah perubahan diposting akan dianggap sebagai penerimaan Anda terhadap perubahan tersebut.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={`Kebijakan Privasi ${site.name}`}
      subtitle="Bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data Anda."
      intro={intro}
      sections={sections}
      contactIntro="Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, silakan hubungi kami:"
    />
  );
}
