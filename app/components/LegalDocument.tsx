import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { site } from "./site-config";

export type LegalBlock =
  | { kind: "text"; value: string }
  | { kind: "subtitle"; value: string }
  | { kind: "list"; value: string[] }
  | { kind: "note"; value: string };

export type LegalSection = {
  /** Nomor bagian, mis. "1" atau "13". */
  number: string;
  title: string;
  blocks: LegalBlock[];
};

function slug(number: string) {
  return `bagian-${number}`;
}

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "subtitle") {
          return (
            <h3 key={i} className="mt-6 font-bold">
              {block.value}
            </h3>
          );
        }

        if (block.kind === "list") {
          return (
            <ul key={i} className="mt-4 space-y-2.5">
              {block.value.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span className="leading-relaxed text-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.kind === "note") {
          return (
            <p
              key={i}
              className="mt-4 rounded-2xl border border-border-soft bg-surface p-4 text-sm leading-relaxed text-text-secondary"
            >
              {block.value}
            </p>
          );
        }

        return (
          <p key={i} className="mt-4 leading-relaxed text-text-secondary">
            {block.value}
          </p>
        );
      })}
    </>
  );
}

export default function LegalDocument({
  title,
  subtitle,
  intro,
  sections,
  contactHeading = "Hubungi Kami",
  contactIntro,
}: {
  title: string;
  subtitle: string;
  intro: LegalBlock[];
  sections: LegalSection[];
  contactHeading?: string;
  contactIntro: string;
}) {
  return (
    <div className="flex flex-1 flex-col bg-white text-text-primary">
      <SiteHeader cta={{ label: "Kembali ke Beranda", href: "/" }} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/40 blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-3xl px-4 py-14 text-center sm:px-6 md:py-20">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 leading-relaxed text-text-secondary">
              {subtitle}
            </p>
            <p className="mt-3 text-xs text-text-disabled">
              Terakhir diperbarui: {site.lastUpdated}
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          {/* Pendahuluan */}
          <section aria-labelledby="pendahuluan">
            <h2 id="pendahuluan" className="text-xl font-bold">
              Pendahuluan
            </h2>
            <Blocks blocks={intro} />
          </section>

          {/* Daftar isi */}
          <nav
            aria-label="Daftar isi"
            className="mt-10 rounded-3xl border border-border-soft bg-surface p-6"
          >
            <h2 className="text-xs font-bold tracking-widest text-text-disabled uppercase">
              Daftar Isi
            </h2>
            <ol className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {sections.map((section) => (
                <li key={section.number}>
                  <a
                    href={`#${slug(section.number)}`}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary hover:underline"
                  >
                    {section.number}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Isi */}
          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section
                key={section.number}
                id={slug(section.number)}
                className="scroll-mt-20"
              >
                <h2 className="text-xl font-bold">
                  {section.number}. {section.title}
                </h2>
                <Blocks blocks={section.blocks} />
              </section>
            ))}
          </div>

          {/* Kontak */}
          <section className="mt-12 scroll-mt-20" id="kontak">
            <div className="rounded-3xl border border-border-soft bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold">{contactHeading}</h2>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {contactIntro}
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <dt className="w-28 shrink-0 font-semibold">Penerbit</dt>
                  <dd className="text-text-secondary">{site.developer}</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <dt className="w-28 shrink-0 font-semibold">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.supportEmail}`}
                      className="break-all text-text-secondary underline underline-offset-2 transition-colors hover:text-text-primary"
                    >
                      {site.supportEmail}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <dt className="w-28 shrink-0 font-semibold">WhatsApp</dt>
                  <dd>
                    <a
                      href={site.whatsappLink}
                      className="text-text-secondary underline underline-offset-2 transition-colors hover:text-text-primary"
                    >
                      {site.whatsapp}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <dt className="w-28 shrink-0 font-semibold">Website</dt>
                  <dd>
                    <a
                      href={site.companyUrl}
                      className="break-all text-text-secondary underline underline-offset-2 transition-colors hover:text-text-primary"
                    >
                      {site.companyUrl}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                  <dt className="w-28 shrink-0 font-semibold">Yurisdiksi</dt>
                  <dd className="text-text-secondary">{site.jurisdiction}</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
