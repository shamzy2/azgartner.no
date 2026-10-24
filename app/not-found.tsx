import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

const description =
  "Siden du leter etter finnes ikke. Gå til forsiden, se tjenestene, eller ta kontakt med AZ Gartner på Frosta.";

export const metadata: Metadata = {
  title: "Siden finnes ikke",
  description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "AZ Gartner",
    title: "Siden finnes ikke | AZ Gartner",
    description,
  },
  twitter: {
    card: "summary",
    title: "Siden finnes ikke | AZ Gartner",
    description,
  },
};

const body = "text-[16px] leading-[20.48px] tracking-[-0.32px]";
const mono =
  "font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]";

const pages = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NotFound() {
  return (
    <div className="bg-[#f2f1ed]">
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] w-full max-w-[720px] flex-col items-center justify-center px-6 py-24 text-center md:px-10">
        <p className={`text-[#007D4B] ${mono}`}>404</p>
        <h1 className="mt-4 text-[48px] leading-[1.08] tracking-[-1.4px] md:text-[64px] md:tracking-[-1.9px]">
          Siden finnes ikke
        </h1>
        <p className={`mt-4 max-w-[460px] text-black/60 ${body}`}>
          Adressen stemmer ikke. Siden kan være flyttet, eller den har aldri vært her.
        </p>
        <div className="mt-8 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <a
            href="/"
            className={`inline-flex w-full items-center justify-center rounded-full border border-[#007D4B] bg-[#007D4B] px-6 pt-[13px] pb-4 text-white transition-colors duration-200 hover:bg-transparent hover:text-[#007D4B] sm:w-auto ${body}`}
          >
            Til forsiden
          </a>
          <a
            href="/tjenester"
            className={`inline-flex w-full items-center justify-center rounded-full border border-[#007D4B] px-6 pt-[13px] pb-4 text-[#007D4B] transition-colors duration-200 hover:bg-[#007D4B] hover:text-white sm:w-auto ${body}`}
          >
            Se tjenester
          </a>
        </div>
        <nav aria-label="Sider" className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {pages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className={`text-black/60 transition-colors duration-200 hover:text-[#007D4B] ${body}`}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
