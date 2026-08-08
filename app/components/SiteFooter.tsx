import Link from "next/link";
import { site } from "./site-config";

const footerLinks = [
  { label: "Fitur", href: "/#fitur" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Untuk iPhone", href: "/marketing" },
  { label: "Bantuan & Dukungan", href: "/support" },
  { label: "Kebijakan Privasi", href: "/privacy" },
  { label: "Syarat & Ketentuan", href: "/terms" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold">
                J
              </span>
              <span className="font-bold">JejakBon</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-text-secondary">
              Aplikasi pencatat hutang piutang untuk keperluan pribadi. Bukan
              layanan pinjaman atau lembaga keuangan.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text-secondary">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-border-soft pt-6 text-center text-xs text-text-disabled md:flex-row md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} {site.name} oleh {site.developer}. Hak
            cipta dilindungi.
          </p>
          <p>
            Dukungan:{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="font-medium text-text-secondary underline underline-offset-2 transition-colors hover:text-text-primary"
            >
              {site.supportEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
