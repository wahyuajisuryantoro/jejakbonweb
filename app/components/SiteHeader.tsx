import Link from "next/link";

const navLinks = [
  { label: "Fitur", href: "/#fitur" },
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Untuk iPhone", href: "/marketing" },
  { label: "Bantuan", href: "/support" },
];

export default function SiteHeader({
  cta = { label: "Unduh Aplikasi", href: "/marketing" },
}: {
  cta?: { label: string; href: string };
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-bold">
            J
          </span>
          <span className="text-lg font-bold tracking-tight">JejakBon</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-text-secondary md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={cta.href}
          className="shrink-0 rounded-full bg-text-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
        >
          {cta.label}
        </Link>
      </div>
    </header>
  );
}
