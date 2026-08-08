import { site } from "./site-config";

function AppleLogo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.25 3.02-.9.9-1.98 1.42-3.13 1.33-.02-1.1.44-2.22 1.24-3.03.85-.86 2.06-1.4 3.14-1.44.02.04.02.08 0 .12zM20.5 17.1c-.55 1.27-.82 1.83-1.53 2.95-.99 1.56-2.38 3.5-4.11 3.51-1.54.02-1.93-1-4.02-.99-2.09.01-2.52 1.01-4.06.99-1.73-.02-3.05-1.77-4.04-3.32C.06 16.06-.23 11.1 1.47 8.47c1.2-1.87 3.1-2.96 4.88-2.96 1.82 0 2.96 1 4.46 1 1.46 0 2.35-1 4.45-1 1.59 0 3.27.86 4.47 2.35-3.93 2.15-3.29 7.76.77 9.24z" />
    </svg>
  );
}

function GooglePlayLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M3.6 1.84a1 1 0 0 0-.35.76v18.8a1 1 0 0 0 .35.76l.1.08 10.53-10.53v-.25L3.7 1.76l-.1.08zM17.9 15.1l-3.1-3.1v-.25l3.1-3.1.07.04 3.72 2.11c1.06.6 1.06 1.59 0 2.2l-3.72 2.11-.07-.01zM17.97 15.13 14.8 11.96 4.2 22.56c.35.37.93.42 1.58.05l12.19-6.92-.01-.56zM17.97 8.83 5.78 1.91c-.65-.37-1.23-.32-1.58.05L14.8 12.55l3.17-3.17v-.55z" />
    </svg>
  );
}

/**
 * Tombol bergaya badge App Store.
 * Sebelum rilis, disarankan mengganti dengan aset resmi Apple
 * (Apple Marketing Resources & Identity Guidelines).
 */
export function AppStoreBadge({
  className = "",
  href = site.appStoreUrl,
}: {
  className?: string;
  href?: string;
}) {
  const isPlaceholder = href === "#";
  return (
    <a
      href={href}
      aria-label="Unduh JejakBon di App Store"
      aria-disabled={isPlaceholder}
      className={`inline-flex items-center gap-3 rounded-xl bg-black px-5 py-2.5 text-white transition-opacity hover:opacity-85 ${className}`}
    >
      <AppleLogo />
      <span className="text-left leading-tight">
        <span className="block text-[10px] tracking-wide uppercase opacity-80">
          Download on the
        </span>
        <span className="block text-lg font-semibold">App Store</span>
      </span>
    </a>
  );
}

export function PlayStoreBadge({
  className = "",
  href = site.playStoreUrl,
}: {
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      aria-label="Unduh JejakBon di Google Play"
      className={`inline-flex items-center gap-3 rounded-xl bg-black px-5 py-2.5 text-white transition-opacity hover:opacity-85 ${className}`}
    >
      <GooglePlayLogo />
      <span className="text-left leading-tight">
        <span className="block text-[10px] tracking-wide uppercase opacity-80">
          Dapatkan di
        </span>
        <span className="block text-lg font-semibold">Google Play</span>
      </span>
    </a>
  );
}
