import type { ReactNode } from "react";
import { JsonLd } from "../../components/json-ld";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { descriptions, faqJsonLd, faqs, pageMetadata, services, servicesJsonLd } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Byggesøknader og prosjektering",
  description: descriptions.tjenester,
  path: "/tjenester",
});

const body =
  "text-[16px] leading-[20.48px] tracking-[-0.32px]";
const bodyLarge =
  "text-[18px] leading-[21.6px] tracking-[-0.36px]";
const heading =
  "text-[40px] leading-[1.08] tracking-[-1.2px] lg:text-[56px] lg:leading-[60.48px] lg:tracking-[-1.68px]";
const mono =
  "font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]";

function Button({
  href,
  children,
  variant,
  size = "lg",
}: {
  href: string;
  children: ReactNode;
  variant: "fill" | "outline";
  size?: "sm" | "lg";
}) {
  const sizeClass =
    size === "sm" ? "px-4 pt-[7px] pb-[10px]" : "px-6 pt-[13px] pb-4";
  const variantClass =
    variant === "fill"
      ? "bg-[#007D4B] text-white hover:bg-transparent hover:text-[#007D4B]"
      : "bg-transparent text-[#007D4B] hover:bg-[#007D4B] hover:text-white";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-[#007D4B] ${body} transition-colors duration-200 ${sizeClass} ${variantClass}`}
    >
      {children}
    </a>
  );
}

function Eyebrow({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className={`flex items-center gap-2 text-[#007D4B] ${mono}`}>
      <img src={icon} alt="" width={14} height={14} />
      {children}
    </div>
  );
}

export default function TjenesterPage() {
  return (
    <div className="bg-[#f2f1ed]">
      <JsonLd data={servicesJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <SiteHeader />
      <main className="w-full bg-[#f2f1ed] px-6 md:px-10 lg:px-16 min-[1280px]:px-[70px]!">
        <section className="mx-auto flex max-w-[960px] flex-col items-center gap-6 pt-16 text-center lg:pt-24">
          <Eyebrow icon="/tjenester/briefcase.svg">Våre tjenester</Eyebrow>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-balance text-[48px] leading-[1.08] tracking-[-1.4px] md:text-[64px] md:tracking-[-1.9px] lg:text-[80px] lg:leading-[86.4px] lg:tracking-[-2.4px]">
              Kompetanse fra idé
              <br />
              til ferdig resultat
            </h1>
            <p className={`max-w-[560px] text-black/60 ${bodyLarge}`}>
              Vi tilbyr tjenester innen prosjektering, 3D-design, byggesøknader
              og GPS-oppmåling. Med solid fagkompetanse hjelper vi deg fra
              planlegging til gjennomføring.
            </p>
          </div>
          <Button href="#tjenester" variant="fill">
            Utforsk våre tjenester
          </Button>
        </section>

        <section id="tjenester" className="mt-24 scroll-mt-32">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col gap-[7px] rounded-lg bg-white p-8"
              >
                <h2 className="text-[24px] leading-[25.92px] tracking-[-0.72px]">
                  {service.title}
                </h2>
                <p className={`max-w-[400px] text-black/60 ${body}`}>
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-40">
          <h2 className={`mx-auto max-w-[440px] text-center ${heading}`}>
            Svar på
            <br />
            spørsmålene dine
          </h2>
          <div className="mx-auto mt-[72px] grid max-w-[974px] gap-x-6 gap-y-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.q} className="border-b border-black/10 pb-6">
                <h3 className={bodyLarge}>{faq.q}</h3>
                <p className={`mt-2 max-w-[400px] text-black/60 ${body}`}>{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-40">
          <div className="rounded-lg bg-white p-2">
            <div className="flex flex-col gap-8 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-10">
              <div className="flex max-w-[600px] flex-col gap-3">
                <Eyebrow icon="/images/pin.svg">Ta kontakt</Eyebrow>
                <h2 className={`max-w-[520px] ${heading}`}>
                  Har du et prosjekt
                  <br />
                  i tankene?
                </h2>
              </div>
              <div className="flex max-w-[420px] flex-col items-start gap-6">
                <p className={`text-black/60 ${body}`}>
                  Enten du planlegger et nytt bygg, ønsker å utvikle et
                  uteområde eller trenger hjelp med en byggesøknad, hjelper vi
                  deg videre.
                </p>
                <Button href="/kontakt" variant="fill">
                  Kontakt oss
                </Button>
              </div>
            </div>
            <div className="aspect-[1456/640] overflow-hidden rounded-md">
              <img
                src="/az.jpg"
                alt="Mann i arbeidsklær ved gravemaskiner på en anleggsplass ved fjorden."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className={`px-4 py-3 text-black/60 ${body}`}>
              Kreditering: Trønder-Avisa · Opphavsperson: Roar A. Fordal · Vi må spørre Trønder-Avisa om lov til å bruke bildet
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
