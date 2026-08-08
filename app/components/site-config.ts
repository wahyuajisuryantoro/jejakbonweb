/**
 * Konfigurasi terpusat JejakBon.
 * Nilai di sini diambil dari source aplikasi Flutter (hutang_piutang_fe).
 * Ubah di sini agar seluruh halaman ikut ter-update.
 */

export const site = {
  name: "JejakBon",
  tagline: "Catat Hutang & Piutang, Tanpa Ribet",

  /** Ganti bila domain produksi berbeda. */
  url: "https://jejakbon.sereinindonesia.com",

  /* Identitas penerbit */
  developer: "Serein Indonesia",
  companyUrl: "https://sereinindonesia.com",
  supportEmail: "sereintechindonesia@gmail.com",
  whatsapp: "+62 812-2998-5420",
  whatsappLink: "https://wa.me/6281229985420",
  jurisdiction: "Republik Indonesia",

  /* Tautan store — isi setelah aplikasi live */
  appStoreUrl: "#",
  playStoreUrl: "#",

  /* Info aplikasi — sumber: pubspec.yaml & project.pbxproj */
  appVersion: "1.0.1",
  minimumIosVersion: "iOS 15.0",
  ageRating: "4+",
  category: "Keuangan",
  languages: "Bahasa Indonesia",

  /* Monetisasi — sumber: billing_config.dart & database_helper.dart */
  price: "Unduh gratis, dengan pembelian dalam aplikasi",
  lifetimePrice: "Rp 89.000",
  freeMaxTransactions: 5,
  freeMaxContacts: 5,

  /* Tanggal berlaku dokumen hukum */
  lastUpdated: "Agustus 2026",
} as const;

export const supportMailto = (subject: string) =>
  `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}`;
