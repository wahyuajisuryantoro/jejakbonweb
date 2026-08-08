import type { Metadata } from "next";
import LegalDocument, {
  type LegalBlock,
  type LegalSection,
} from "../components/LegalDocument";
import { site } from "../components/site-config";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan — JejakBon",
  description:
    "Syarat dan Ketentuan penggunaan aplikasi JejakBon dari Serein Indonesia, termasuk ketentuan lisensi, pembelian, batasan tanggung jawab, dan ketentuan EULA untuk App Store dan Play Store.",
  alternates: { canonical: "/terms" },
};

const intro: LegalBlock[] = [
  {
    kind: "text",
    value: `Selamat datang di ${site.name}. Syarat dan Ketentuan ini mengatur penggunaan aplikasi ${site.name} yang disediakan oleh ${site.developer} ("kami" atau "milik kami").`,
  },
  {
    kind: "text",
    value: `Dengan mengunduh, mengakses, atau menggunakan ${site.name}, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan syarat-syarat ini, mohon untuk tidak menggunakan aplikasi kami.`,
  },
];

const sections: LegalSection[] = [
  {
    number: "1",
    title: "Layanan yang Disediakan",
    blocks: [
      {
        kind: "text",
        value: `${site.name} adalah aplikasi pencatatan hutang piutang pribadi yang menyediakan fitur:`,
      },
      {
        kind: "list",
        value: [
          "Pencatatan hutang dan piutang yang terpisah secara otomatis",
          "Manajemen kontak beserta riwayat transaksi per orang",
          "Pengaturan pembayaran tempo maupun cicilan dengan jadwal yang dihitung otomatis",
          "Pengingat jatuh tempo melalui notifikasi di perangkat Anda",
          "Pembuatan surat tagihan dalam bentuk PDF untuk dicetak atau dibagikan",
          "Laporan hutang piutang yang dapat difilter, diekspor, dan dibagikan",
          "Pencadangan dan pemulihan data melalui berkas cadangan",
        ],
      },
      {
        kind: "note",
        value: `${site.name} adalah alat bantu pencatatan pribadi. Kami BUKAN lembaga keuangan, bukan penyedia pinjaman, bukan jasa penagihan, dan tidak memproses, menyalurkan, maupun menyimpan uang Anda dalam bentuk apa pun.`,
      },
      {
        kind: "text",
        value:
          "Kami berhak untuk mengubah, menangguhkan, atau menghentikan layanan atau fitur tertentu dengan pemberitahuan yang wajar melalui pembaruan aplikasi atau halaman ini.",
      },
    ],
  },
  {
    number: "2",
    title: "Penggunaan dan Kelayakan",
    blocks: [
      { kind: "subtitle", value: "2.1 Tanpa Pendaftaran Akun" },
      {
        kind: "text",
        value: `${site.name} tidak mewajibkan pembuatan akun, kata sandi, atau verifikasi identitas. Aplikasi dapat langsung digunakan setelah dipasang. Karena itu, tidak ada mekanisme login yang dapat kami gunakan untuk memulihkan data Anda apabila perangkat hilang atau rusak.`,
      },
      { kind: "subtitle", value: "2.2 Kelayakan Pengguna" },
      {
        kind: "text",
        value:
          "Anda harus berusia minimal 18 tahun atau telah mencapai usia dewasa menurut hukum di yurisdiksi Anda untuk mengikatkan diri pada Syarat dan Ketentuan ini. Pengguna di bawah usia tersebut hanya boleh menggunakan aplikasi di bawah pengawasan dan dengan persetujuan orang tua atau wali yang sah.",
      },
      { kind: "subtitle", value: "2.3 Tanggung Jawab atas Perangkat dan Data" },
      {
        kind: "text",
        value:
          "Karena seluruh data tersimpan di perangkat Anda, Anda bertanggung jawab penuh atas:",
      },
      {
        kind: "list",
        value: [
          "Keamanan perangkat Anda, termasuk penggunaan kunci layar, Face ID, atau Touch ID",
          "Keakuratan seluruh data yang Anda masukkan ke dalam aplikasi",
          "Pembuatan berkas cadangan secara berkala dan penyimpanannya di tempat yang aman",
          "Kerahasiaan data pihak lain yang Anda catat, termasuk nama, nomor telepon, dan foto bukti",
        ],
      },
      { kind: "subtitle", value: "2.4 Data Pihak Ketiga yang Anda Catat" },
      {
        kind: "text",
        value:
          "Ketika Anda mencatat data orang lain, Anda menyatakan bahwa Anda memiliki dasar yang sah untuk melakukannya dan bertanggung jawab atas penggunaannya, termasuk saat Anda mengirimkan surat tagihan kepada mereka. Kami tidak bertanggung jawab atas penyalahgunaan data pihak ketiga oleh Anda.",
      },
    ],
  },
  {
    number: "3",
    title: "Lisensi Premium dan Pembayaran",
    blocks: [
      { kind: "subtitle", value: "3.1 Versi Gratis" },
      {
        kind: "text",
        value: `${site.name} dapat diunduh dan digunakan secara gratis dengan batas penggunaan, yaitu maksimal ${site.freeMaxTransactions} transaksi dan ${site.freeMaxContacts} kontak. Seluruh fitur inti dapat dicoba dalam batas tersebut.`,
      },
      { kind: "subtitle", value: "3.2 Lisensi Sekali Bayar" },
      {
        kind: "text",
        value: `Untuk membuka penggunaan tanpa batas, tersedia lisensi premium dengan skema sekali bayar (one-time purchase) seharga ${site.lifetimePrice}. Lisensi ini berlaku selamanya untuk akun toko yang digunakan saat pembelian.`,
      },
      {
        kind: "note",
        value:
          "JejakBon TIDAK menerapkan langganan bulanan maupun tahunan. Tidak ada penagihan berulang dan tidak ada perpanjangan otomatis.",
      },
      { kind: "subtitle", value: "3.3 Pemroses Pembayaran" },
      {
        kind: "text",
        value:
          "Seluruh pembayaran diproses oleh Apple App Store atau Google Play Store sesuai platform yang Anda gunakan. Kami tidak menerima, menyimpan, atau memproses data kartu maupun rekening Anda.",
      },
      { kind: "subtitle", value: "3.4 Pemulihan Pembelian" },
      {
        kind: "text",
        value:
          "Apabila Anda memasang ulang aplikasi atau berganti perangkat, lisensi dapat dipulihkan melalui menu Pulihkan Pembelian selama Anda masuk dengan akun App Store atau Google Play yang sama seperti saat pembelian. Perlu diketahui bahwa memulihkan lisensi tidak memulihkan catatan Anda — untuk itu gunakan berkas cadangan.",
      },
      { kind: "subtitle", value: "3.5 Pengembalian Dana" },
      {
        kind: "text",
        value:
          "Permohonan pengembalian dana tunduk pada kebijakan Apple App Store atau Google Play Store dan harus diajukan langsung kepada platform tersebut, bukan kepada kami. Apabila pembelian Anda dikembalikan dananya, lisensi premium akan dinonaktifkan.",
      },
      { kind: "subtitle", value: "3.6 Perubahan Harga" },
      {
        kind: "text",
        value:
          "Kami berhak mengubah harga lisensi sewaktu-waktu. Perubahan harga hanya berlaku untuk pembelian baru dan tidak memengaruhi lisensi yang telah Anda beli sebelumnya.",
      },
    ],
  },
  {
    number: "4",
    title: "Penggunaan yang Diizinkan",
    blocks: [
      {
        kind: "text",
        value: `Anda setuju untuk menggunakan ${site.name} hanya untuk tujuan yang sah dan sesuai dengan Syarat dan Ketentuan ini. Anda dilarang untuk:`,
      },
      {
        kind: "list",
        value: [
          "Menggunakan aplikasi untuk tujuan ilegal, penipuan, rentenir, atau praktik pinjaman yang melanggar hukum",
          "Menggunakan surat tagihan yang dihasilkan aplikasi untuk mengancam, mengintimidasi, atau mempermalukan pihak lain",
          "Mencatat data pribadi orang lain tanpa dasar yang sah",
          "Mengganggu, merusak, atau merekayasa balik (reverse engineering) fungsi aplikasi",
          "Mencoba mengakses sistem atau data tanpa izin",
          "Mengunggah atau menyebarkan virus, malware, atau kode berbahaya",
          "Memodifikasi aplikasi untuk membuka fitur premium tanpa pembelian yang sah",
          "Melanggar hak kekayaan intelektual kami atau pihak ketiga",
        ],
      },
    ],
  },
  {
    number: "5",
    title: "Kepemilikan dan Hak Kekayaan Intelektual",
    blocks: [
      {
        kind: "text",
        value: `${site.name} dan seluruh kontennya, termasuk namun tidak terbatas pada kode program, teks, grafik, logo, ikon, gambar, dan desain antarmuka, adalah properti ${site.developer} dan dilindungi oleh hukum hak cipta Indonesia dan internasional.`,
      },
      {
        kind: "text",
        value:
          "Anda diberikan lisensi terbatas, non-eksklusif, dan tidak dapat dialihkan untuk menggunakan aplikasi sesuai dengan Syarat dan Ketentuan ini.",
      },
    ],
  },
  {
    number: "6",
    title: "Data Pengguna",
    blocks: [
      { kind: "subtitle", value: "6.1 Kepemilikan Data" },
      {
        kind: "text",
        value: `Anda memiliki sepenuhnya semua data yang Anda masukkan ke dalam ${site.name}, termasuk data kontak, transaksi, cicilan, foto bukti, dan konten lainnya.`,
      },
      { kind: "subtitle", value: "6.2 Tidak Ada Akses dari Pihak Kami" },
      {
        kind: "text",
        value:
          "Karena data tersimpan secara lokal dan tidak dikirimkan ke server kami, kami tidak memiliki akses terhadap isi catatan Anda dan tidak memerlukan lisensi apa pun atas data tersebut.",
      },
      { kind: "subtitle", value: "6.3 Tanggung Jawab Pencadangan" },
      {
        kind: "text",
        value:
          "Kami menyediakan fitur pencadangan, namun pembuatan dan penyimpanan berkas cadangan sepenuhnya menjadi tanggung jawab Anda. Kami tidak menyimpan salinan cadangan dan tidak dapat memulihkan data yang hilang akibat perangkat rusak, hilang, dicuri, atau aplikasi dicopot tanpa cadangan.",
      },
    ],
  },
  {
    number: "7",
    title: "Penghentian Layanan",
    blocks: [
      {
        kind: "text",
        value:
          "Kami berhak menghentikan dukungan atau distribusi aplikasi apabila:",
      },
      {
        kind: "list",
        value: [
          "Anda melanggar Syarat dan Ketentuan ini",
          "Aktivitas Anda membahayakan keamanan atau integritas layanan",
          "Diwajibkan oleh hukum atau oleh kebijakan platform distribusi",
        ],
      },
      {
        kind: "text",
        value:
          "Karena aplikasi berjalan sepenuhnya di perangkat Anda, penghentian dukungan tidak serta-merta menghapus data yang telah tersimpan di perangkat Anda. Anda dapat menghentikan penggunaan kapan saja dengan mencopot pemasangan aplikasi.",
      },
    ],
  },
  {
    number: "8",
    title: "Batasan Tanggung Jawab",
    blocks: [
      {
        kind: "text",
        value: `${site.name} disediakan "sebagaimana adanya" (as is) dan "sebagaimana tersedia" (as available). Kami tidak memberikan jaminan apa pun, baik tersurat maupun tersirat, mengenai:`,
      },
      {
        kind: "list",
        value: [
          "Kelengkapan, keakuratan, atau keandalan perhitungan dan catatan di dalam aplikasi",
          "Ketersediaan aplikasi tanpa gangguan atau bebas dari kesalahan",
          "Ketepatan waktu pengiriman notifikasi pengingat, yang bergantung pada pengaturan dan kondisi sistem operasi perangkat Anda",
        ],
      },
      {
        kind: "subtitle",
        value: "8.1 Catatan Bukan Bukti Hukum dan Bukan Nasihat Keuangan",
      },
      {
        kind: "text",
        value:
          "Catatan, laporan, dan surat tagihan yang dihasilkan aplikasi adalah dokumen pribadi yang Anda buat sendiri berdasarkan data yang Anda masukkan. Dokumen tersebut tidak dengan sendirinya merupakan alat bukti yang mengikat secara hukum, tidak menggantikan perjanjian tertulis yang sah, dan bukan merupakan nasihat keuangan, akuntansi, perpajakan, maupun hukum.",
      },
      { kind: "subtitle", value: "8.2 Sengketa antara Anda dan Pihak Lain" },
      {
        kind: "text",
        value:
          "Kami tidak menjadi pihak dalam kesepakatan hutang piutang antara Anda dan orang lain. Kami tidak bertanggung jawab atas sengketa, keterlambatan pembayaran, gagal bayar, atau kerugian yang timbul dari hubungan tersebut.",
      },
      { kind: "subtitle", value: "8.3 Batasan Ganti Rugi" },
      {
        kind: "text",
        value:
          "Sejauh diizinkan oleh hukum yang berlaku, kami tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, khusus, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan aplikasi, termasuk kehilangan data akibat tidak adanya cadangan.",
      },
    ],
  },
  {
    number: "9",
    title: "Ganti Rugi",
    blocks: [
      {
        kind: "text",
        value: `Anda setuju untuk mengganti rugi, membela, dan membebaskan ${site.developer} dari segala klaim, kerugian, kewajiban, dan biaya (termasuk biaya pengacara) yang timbul dari pelanggaran Anda terhadap Syarat dan Ketentuan ini, penggunaan aplikasi yang tidak sah, atau penyalahgunaan data pihak ketiga yang Anda catat di dalam aplikasi.`,
      },
    ],
  },
  {
    number: "10",
    title: "Hukum yang Berlaku",
    blocks: [
      {
        kind: "text",
        value: `Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum ${site.jurisdiction}. Setiap sengketa yang timbul dari atau terkait dengan Syarat dan Ketentuan ini akan diselesaikan di pengadilan yang berwenang di Indonesia.`,
      },
    ],
  },
  {
    number: "11",
    title: "Perubahan Syarat dan Ketentuan",
    blocks: [
      {
        kind: "text",
        value:
          "Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku segera setelah diposting di halaman ini. Penggunaan berkelanjutan Anda atas aplikasi setelah perubahan diposting akan dianggap sebagai penerimaan Anda terhadap perubahan tersebut.",
      },
    ],
  },
  {
    number: "12",
    title: "Pemisahan",
    blocks: [
      {
        kind: "text",
        value:
          "Jika ada ketentuan dalam Syarat dan Ketentuan ini yang dianggap tidak sah atau tidak dapat dilaksanakan, ketentuan tersebut akan dipisahkan dan ketentuan lainnya akan tetap berlaku sepenuhnya.",
      },
    ],
  },
  {
    number: "13",
    title: "Ketentuan EULA untuk App Store (Apple) dan Play Store (Google)",
    blocks: [
      {
        kind: "text",
        value: `Aplikasi ${site.name} didistribusikan melalui Apple App Store dan Google Play Store. Ketentuan dalam bagian ini berlaku khusus untuk pengguna yang mengunduh aplikasi dari kedua platform tersebut dan merupakan bagian tidak terpisahkan dari Syarat dan Ketentuan ini.`,
      },

      { kind: "subtitle", value: "13.1 Pengakuan (Acknowledgment)" },
      {
        kind: "text",
        value: `Anda dengan ini mengakui bahwa Syarat dan Ketentuan ini adalah perjanjian antara Anda dan ${site.developer} saja, dan BUKAN dengan Apple Inc. ("Apple") atau Google LLC ("Google"). ${site.developer}, bukan Apple atau Google, yang bertanggung jawab sepenuhnya atas aplikasi ${site.name} dan seluruh kontennya. Apple dan Google bertindak hanya sebagai distributor aplikasi melalui App Store dan Play Store.`,
      },

      { kind: "subtitle", value: "13.2 Ruang Lingkup Lisensi (Scope of License)" },
      {
        kind: "text",
        value: `Lisensi yang diberikan kepada Anda untuk ${site.name} bersifat terbatas, non-eksklusif, dan tidak dapat dialihkan (non-transferable) untuk penggunaan pada perangkat Apple iOS atau Android yang Anda miliki atau Anda kendalikan, sebagaimana diizinkan oleh App Store Terms of Service atau Google Play Terms of Service yang berlaku. Lisensi ini tidak mengizinkan Anda untuk menggunakan aplikasi pada perangkat yang tidak Anda miliki atau Anda kendalikan, kecuali dalam hal Family Sharing atau Volume Purchasing sebagaimana diizinkan oleh ketentuan Apple atau Google.`,
      },

      {
        kind: "subtitle",
        value: "13.3 Pemeliharaan dan Dukungan (Maintenance and Support)",
      },
      {
        kind: "text",
        value: `${site.developer} bertanggung jawab sepenuhnya atas pemeliharaan dan dukungan teknis (maintenance and support services) aplikasi ${site.name}. Apple dan Google TIDAK memiliki kewajiban apa pun untuk menyediakan layanan pemeliharaan atau dukungan terkait aplikasi ini. Permintaan bantuan harus diajukan langsung kepada ${site.developer} melalui kontak di bagian akhir dokumen ini.`,
      },

      { kind: "subtitle", value: "13.4 Jaminan (Warranty)" },
      {
        kind: "text",
        value: `${site.developer} bertanggung jawab atas seluruh jaminan (warranty) terkait aplikasi, baik yang tersurat maupun tersirat menurut hukum, sejauh tidak ditolak secara efektif. Apabila aplikasi gagal memenuhi jaminan yang berlaku, Anda dapat memberitahukan hal tersebut kepada Apple (untuk pengguna iOS), dan Apple akan mengembalikan harga pembelian aplikasi kepada Anda jika ada. Sejauh diizinkan oleh hukum yang berlaku, Apple dan Google TIDAK memiliki kewajiban jaminan lainnya terkait aplikasi. Setiap klaim, kerugian, kewajiban, kerusakan, biaya, atau pengeluaran yang timbul akibat kegagalan jaminan akan menjadi tanggung jawab tunggal ${site.developer}.`,
      },

      { kind: "subtitle", value: "13.5 Klaim Produk (Product Claims)" },
      {
        kind: "text",
        value: `Anda mengakui bahwa ${site.developer}, dan BUKAN Apple atau Google, yang bertanggung jawab untuk menangani setiap klaim yang diajukan oleh Anda atau pihak ketiga terkait aplikasi atau kepemilikan dan/atau penggunaan aplikasi oleh Anda, termasuk namun tidak terbatas pada:`,
      },
      {
        kind: "list",
        value: [
          "Klaim tanggung jawab produk (product liability claims)",
          "Klaim bahwa aplikasi gagal memenuhi persyaratan hukum atau peraturan yang berlaku",
          "Klaim yang timbul berdasarkan undang-undang perlindungan konsumen, privasi data, atau perundang-undangan serupa",
        ],
      },

      {
        kind: "subtitle",
        value: "13.6 Hak Kekayaan Intelektual (Intellectual Property Rights)",
      },
      {
        kind: "text",
        value: `Apabila terdapat klaim dari pihak ketiga yang menyatakan bahwa aplikasi atau penggunaan aplikasi oleh Anda melanggar hak kekayaan intelektual pihak ketiga, maka ${site.developer}, dan BUKAN Apple atau Google, yang akan bertanggung jawab penuh untuk melakukan investigasi, pembelaan, penyelesaian, dan pelunasan atas klaim pelanggaran kekayaan intelektual tersebut.`,
      },

      { kind: "subtitle", value: "13.7 Kepatuhan Hukum (Legal Compliance)" },
      {
        kind: "text",
        value: "Anda menyatakan dan menjamin bahwa:",
      },
      {
        kind: "list",
        value: [
          'Anda tidak berada di negara yang dikenai embargo oleh Pemerintah Amerika Serikat, atau negara yang ditetapkan oleh Pemerintah Amerika Serikat sebagai "negara pendukung terorisme" ("terrorist supporting" country)',
          "Anda tidak terdaftar dalam daftar pihak yang dilarang atau dibatasi oleh Pemerintah Amerika Serikat (U.S. Government list of prohibited or restricted parties)",
        ],
      },

      {
        kind: "subtitle",
        value: "13.8 Nama dan Alamat Developer (Developer Name and Address)",
      },
      {
        kind: "text",
        value: `Setiap pertanyaan, komplain, atau klaim terkait aplikasi ${site.name} dapat diajukan kepada ${site.developer} melalui email ${site.supportEmail} atau WhatsApp ${site.whatsapp}. Yurisdiksi: ${site.jurisdiction}.`,
      },

      {
        kind: "subtitle",
        value: "13.9 Ketentuan Pihak Ketiga (Third Party Terms of Agreement)",
      },
      {
        kind: "text",
        value:
          "Anda wajib mematuhi seluruh ketentuan dari pihak ketiga yang relevan saat menggunakan aplikasi, termasuk namun tidak terbatas pada Apple Media Services Terms and Conditions, App Store Terms of Service, Google Play Terms of Service, kebijakan privasi platform terkait, serta ketentuan operator nirkabel atau penyedia layanan data yang Anda gunakan.",
      },

      {
        kind: "subtitle",
        value: "13.10 Penerima Manfaat Pihak Ketiga (Third Party Beneficiary)",
      },
      {
        kind: "text",
        value:
          "Anda mengakui dan menyetujui bahwa Apple Inc. beserta anak perusahaannya, dan Google LLC beserta anak perusahaannya, adalah penerima manfaat pihak ketiga (third-party beneficiary) dari Syarat dan Ketentuan ini. Setelah Anda menerima Syarat dan Ketentuan ini, Apple dan Google memiliki hak (yang dianggap telah diterima oleh kedua pihak tersebut) untuk melaksanakan Syarat dan Ketentuan ini terhadap Anda sebagai penerima manfaat pihak ketiga.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      title={`Syarat dan Ketentuan ${site.name}`}
      subtitle="Ketentuan yang mengatur penggunaan aplikasi, lisensi premium, dan batasan tanggung jawab."
      intro={intro}
      sections={sections}
      contactIntro="Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:"
    />
  );
}
