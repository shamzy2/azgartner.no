import type { ReactNode } from "react";
import { JsonLd } from "../components/json-ld";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { descriptions, faqJsonLd, faqs, homeTitle, pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  title: homeTitle,
  description: descriptions.home,
  path: "/",
  absolute: true,
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
      className={`inline-flex w-full items-center justify-center rounded-full border border-[#007D4B] md:w-auto ${body} transition-colors duration-200 ${sizeClass} ${variantClass}`}
    >
      {children}
    </a>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1.5 text-[#007D4B] transition-opacity duration-200 hover:opacity-60 ${body}`}
    >
      {children}
      <img src="/images/caret.svg" alt="" width={14} height={14} />
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

const devices = [
  {
    title: "Byggesøknader",
    text: "Vi hjelper deg med søknadsprosessen for\nbyggeprosjekter.",
    image: "/hero/byggesøknader.jpg",
    alt: "Person som tegner plantegninger ved et skrivebord.",
  },
  {
    title: "Søker for alle tiltak",
    text: "Vi tar hånd om søknadsprosessen for alle typer landskapsprosjekter.",
    image: "/images/tablet.png",
    alt: "Nettbrett som står på et hvitt bord, med fargerike appikoner på skjermen.",
  },
  {
    title: "Prosjektering",
    text: "Vi designer tilpassede landskap som realiserer\ndine visjoner.",
    image: "/hero/landskap.jpg",
    alt: "Gårdsrom mellom moderne bygg, med blomsterbed og en steinlagt plass.",
  },
];

const approvals = [
  {
    icon: "/godkjenning/mesterbrev.png",
    title: "Godkjent mesterbedrift",
    text: "AZ Gartner er registrert som mesterbedrift innen anleggsgartnerfaget. Mesterkompetansen dokumenterer faglig kunnskap og erfaring.",
    label: "Anleggsgartnerfaget",
    href: "https://mesterregister.mesterbrev.no/bedrifter/1608",
  },
  {
    icon: "/godkjenning/sentraltgodkjent.png",
    title: "Sentral godkjenning",
    text: "Vi har sentral godkjenning fra Direktoratet for byggkvalitet innen blant annet ansvarlig søker, prosjektering og utførelse.",
    label: "Godkjente fagområder",
    href: "https://sgregister.dibk.no/enterprises/992542462",
  },
];

const differences = [
  {
    icon: "/hvorfor/kompetanse-graduation-cap.svg",
    label: "Kompetanse",
    title: "Solid fagkunnskap",
    text: "Med mesterkompetanse og sentral godkjenning har vi et solid faglig grunnlag for arbeidet vi utfører.",
  },
  {
    icon: "/hvorfor/helhet-layers.svg",
    label: "Helhet",
    title: "Fra idé til løsning",
    text: "Vi bistår med planlegging, prosjektering og søknadsarbeid, slik at prosjektet får en god start.",
  },
  {
    icon: "/hvorfor/presisjon-ruler.svg",
    label: "Presisjon",
    title: "Nøyaktig planlegging",
    text: "Med digitale verktøy, GPS-oppmåling og 3D-prosjektering legger vi til rette for presise løsninger.",
  },
  {
    icon: "/hvorfor/samarbeid-handshake.svg",
    label: "Samarbeid",
    title: "Personlig oppfølging",
    text: "Vi legger vekt på god dialog og tett samarbeid for å finne løsninger tilpasset dine behov.",
  },
  {
    icon: "/hvorfor/baerekraft-leaf.svg",
    label: "Bærekraft",
    title: "Miljøbevisste valg",
    text: "Gjennom miljøkartlegging og god planlegging bidrar vi til løsninger som tar hensyn til omgivelsene.",
  },
  {
    icon: "/hvorfor/kvalitet-shield-check.svg",
    label: "Kvalitet",
    title: "Faglig kvalitet",
    text: "Vi legger vekt på gjennomarbeidede løsninger, god dokumentasjon og kvalitet i alle ledd.",
  },
];

const reviews = [
  {
    kind: "image" as const,
    src: "/images/review-1.png",
    alt: "Smilende mann med briller som ser på telefonen sin i en bygate.",
  },
  {
    kind: "quote" as const,
    title: "Raskt og helt problemfritt",
    text: "Devix byttet skjermen på telefonen min på under to timer, og alt gikk smertefritt. Kommunikasjonen og de ærlige prisene skilte seg ut.",
    name: "Michael R.",
    avatar: "/images/avatar-1.png",
  },
  {
    kind: "image" as const,
    src: "/images/review-2.png",
    alt: "Ung kvinne som jobber på en laptop inne.",
  },
  {
    kind: "quote" as const,
    title: "Bedre enn forventet",
    text: "Laptopen min hadde vært treg i flere måneder, men Devix fant feilen raskt og fikk den til å gå som ny samme dag. Virkelig imponerende tjeneste.",
    name: "Samantha T.",
    avatar: "/images/avatar-2.png",
  },
  {
    kind: "quote" as const,
    title: "Anbefales på det sterkeste",
    text: "Jeg har levert flere enheter til Devix, og de leverer alltid pålitelig og profesjonelt, med samme kvalitet hver gang. Et verksted jeg stoler på.",
    name: "Lena P.",
    avatar: "/images/avatar-3.png",
  },
  {
    kind: "image" as const,
    src: "/images/review-3.png",
    alt: "Kvinne som holder et gammelt kamera foran ansiktet.",
  },
  {
    kind: "quote" as const,
    title: "Superrask levering",
    text: "Spillkonsollen min hadde en HDMI-feil, og Devix fikset den samme dag, raskere enn jeg hadde trodd. Raskt, hyggelig og svært profesjonelt.",
    name: "Chris B.",
    avatar: "/images/avatar-4.png",
  },
  {
    kind: "image" as const,
    src: "/images/review-4.png",
    alt: "Mann med VR-briller og blått lys.",
  },
];

const showReviews = false;

const articles = [
  {
    date: "20. nov. 2025",
    title: "Slik forlenger du levetiden på telefonbatteriet",
    text: "Enkle vaner og tips som holder batteriet friskt lenger.",
    image: "/images/article-1.png",
    alt: "Kvinne i en sofa som blar på en telefon med grønt deksel.",
  },
  {
    date: "4. nov. 2025",
    title: "Vanlige telefonproblemer og hvordan du unngår dem",
    text: "Fra knust skjerm til ladeproblemer: hva som forårsaker dem, og hvordan du forebygger.",
    image: "/images/article-2.png",
    alt: "Hender som holder en telefon over en laptop på et skrivebord.",
  },
  {
    date: "17. okt. 2025",
    title: "Hvorfor enheter blir for varme, og hva du kan gjøre",
    text: "Finn ut hvorfor enheten blir varm, og hva du kan gjøre for å kjøle den trygt ned.",
    image: "/images/article-3.png",
    alt: "Hender som skriver på en laptop ved siden av en telefon og briller.",
  },
];

const showArticles = false;

export default function Home() {
  return (
    <div id="top">
      <JsonLd data={faqJsonLd()} />
      <SiteHeader />

      <main className="w-full px-6 md:px-10 lg:px-16 min-[1280px]:px-[70px]! pt-[87px]">
        <section className="flex flex-col gap-24">
          <div className="flex max-w-[960px] flex-col gap-6">
            <Eyebrow icon="/images/pin.svg">Holder til på Frosta</Eyebrow>
            <div className="flex flex-col gap-4">
              <h1 className="text-[48px] leading-[1.08] tracking-[-1.4px] md:text-[64px] md:tracking-[-1.9px] lg:text-[80px] lg:leading-[86.4px] lg:tracking-[-2.4px]">
                Prosjektering av
                <br />
                bygg og utomhusanlegg
              </h1>
              <p className={`max-w-[560px] text-black/60 ${bodyLarge}`}>
                Vi tilbyr profesjonell prosjektering av bygg og utomhusanlegg,
                med tjenester innen byggesøknader, miljøkartlegging og
                rådgivning.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href="/tjenester" variant="fill">
                Se tjenester
              </Button>
              <Button href="/kontakt" variant="outline">
                Kontakt oss
              </Button>
            </div>
          </div>

          <div id="devices" className="scroll-mt-32">
            <div className="mb-6 flex items-center justify-between">
              <p className={bodyLarge}>Hva jobber vi med</p>
              <TextLink href="/tjenester">Se alt</TextLink>
            </div>
            <div className="grid gap-6 min-[500px]:grid-cols-2 lg:grid-cols-3">
              {devices.map((device) => (
                <article key={device.title} className="flex flex-col gap-[15px]">
                  <div className="aspect-[475/633] overflow-hidden rounded-lg">
                    <img
                      src={device.image}
                      alt={device.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-[24px] leading-[25.92px] tracking-[-0.72px]">
                      {device.title}
                    </h2>
                    <p className={`whitespace-pre-line text-black/60 ${body}`}>{device.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-40 flex flex-col items-center text-center">
          <p className={bodyLarge}>Omtalt i</p>
          <div className="mt-[32px] grid w-full grid-cols-2 items-center justify-items-center md:grid-cols-4">
            {[
              {
                src: "/omtalt/bladet.svg",
                name: "Bladet",
                href: "https://www.bladet.no/nyheter/n/y7jWjR/droemmehus-solgt-for-4-75-millioner",
                aspect: "aspect-[813/221]",
              },
              {
                src: "/omtalt/tronderavisa.svg",
                name: "Trønderavisa",
                href: "https://www.t-a.no/da-de-trengte-mer-plass-falt-valget-pa-helt-spesielle-sovehytter-blir-helt-magisk/s/5-116-1919228",
                aspect: "aspect-[1333/233]",
              },
              {
                src: "/omtalt/frostingen.svg",
                name: "Frostingen",
                href: "https://www.frostingen.no/to-nye-frosta-foretak-har-sett-dagens-lys/s/27-166-7358",
                aspect: "aspect-[1320/238]",
              },
              {
                src: "/omtalt/Adresseavisen.svg",
                name: "Adresseavisen",
                href: "https://www.adressa.no/nytte/bolig/i/BjpEzw/inspirert-av-et-vannmolekyl",
                aspect: "aspect-[1310/262]",
              },
            ].map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.name}
                className="group bg-[#f2f1ed] px-8 py-4 sm:px-12"
              >
                <span
                  aria-hidden
                  className={`block h-7 bg-[#6D6C6B] transition-colors duration-300 ease-out group-hover:bg-[#007D4B] ${logo.aspect}`}
                  style={{
                    maskImage: `url(${logo.src})`,
                    WebkitMaskImage: `url(${logo.src})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskMode: "alpha",
                  }}
                />
              </a>
            ))}
          </div>
          <p className={`mt-8 max-w-[760px] text-balance text-black/60 ${body}`}>
            Vi kombinerer faglig kompetanse og praktisk erfaring for å skape
            funksjonelle og bærekraftige løsninger tilpasset hvert enkelt
            prosjekt.
          </p>
          <div className="mt-4">
            <TextLink href="/om-oss">Om oss</TextLink>
          </div>
        </section>

        <section id="services" className="mt-40 flex scroll-mt-32 flex-col items-center">
          <h2 className={`max-w-[640px] text-center ${heading}`}>
            Dokumentert kompetanse
            <br />
            og kvalitet
          </h2>
          <div className="mt-14 grid w-full gap-6 lg:grid-cols-2">
            {approvals.map((item) => (
              <article
                key={item.title}
                className="flex min-h-[336px] flex-col justify-between gap-10 rounded-lg bg-white p-8"
              >
                <div className="flex flex-col gap-6">
                  <img src={item.icon} alt="" className="h-16 w-16 object-contain" />
                  <div>
                    <h3 className="text-[24px] leading-[25.92px] tracking-[-0.72px]">
                      {item.title}
                    </h3>
                    <p className={`mt-[7px] max-w-[460px] text-black/60 ${body}`}>
                      {item.text}
                    </p>
                  </div>
                  <p className={`text-[#007D4B] ${mono}`}>{item.label}</p>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-fit items-center gap-1.5 text-[#007D4B] underline underline-offset-2 transition-opacity duration-200 hover:opacity-60 ${body}`}
                >
                  Se godkjenning
                  <img src="/images/caret.svg" alt="" width={14} height={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-40">
          <h2 className={`mx-auto max-w-[440px] text-center ${heading}`}>
            Hvorfor velge
            <br />
            AZ Gartner?
          </h2>
          <div className="mt-[72px] grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {differences.map((item) => (
              <article key={item.title} className="flex flex-col items-center px-6 text-center">
                <img src={item.icon} alt="" width={32} height={32} />
                <p className={`mt-6 text-[#007D4B] ${mono}`}>{item.label}</p>
                <h3 className="mt-[7px] text-[24px] leading-[25.92px] tracking-[-0.72px]">
                  {item.title}
                </h3>
                <p className={`mt-[7px] max-w-[320px] text-black/60 ${body}`}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section
        id="about"
        className="mt-40 scroll-mt-32 border-y border-black/10 bg-black/[0.02] py-40"
      >
        <div className="w-full px-6 md:px-10 lg:px-16 min-[1280px]:px-[70px]! grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-[clamp(48px,10vw,148px)]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <Eyebrow icon="/images/icon-spark.svg">Vår identitet</Eyebrow>
              <h2 className={`max-w-[600px] ${heading}`}>
                Gode løsninger starter med solid fagkunnskap og gjennomtenkt
                planlegging.
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className={`max-w-[600px] space-y-5 text-black/60 ${body}`}>
                <p>
                  Hos AZ Gartner kombinerer vi faglig kompetanse med praktisk
                  erfaring innen prosjektering av bygg og utomhusanlegg. Vi
                  legger vekt på kvalitet, nøyaktighet og løsninger som er
                  tilpasset hvert enkelt prosjekt.
                </p>
                <p>
                  Vi bistår både private og profesjonelle aktører med alt fra
                  hagedesign og byggesøknader til GPS-oppmåling,
                  reguleringsplaner og miljøkartlegging. Målet vårt er å gjøre
                  planleggingen enklere og bidra til gode resultater, fra de
                  første ideene til ferdige planer.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button href="/om-oss" variant="fill">
                  Om oss
                </Button>
                <Button href="/kontakt" variant="outline">
                  Kontakt oss
                </Button>
              </div>
            </div>
          </div>
          <div className="min-h-[420px] overflow-hidden rounded-lg lg:h-full lg:min-h-[640px]">
            <img
              src="/identitet.jpg"
              alt="Åpent gårdsrom mellom moderne bygg, med beplantning og høye hus i bakgrunnen."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="w-full px-6 md:px-10 lg:px-16 min-[1280px]:px-[70px]!">
        {showReviews ? <section className="mt-40">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className={`max-w-[440px] ${heading}`}>
              Dette sier
              <br />
              kundene våre
            </h2>
            <Button href="/kontakt" variant="outline">
              Kontakt oss
            </Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review) =>
              review.kind === "image" ? (
                <div
                  key={review.src}
                  className="min-h-[280px] overflow-hidden rounded-lg xl:min-h-[402px]"
                >
                  <img
                    src={review.src}
                    alt={review.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <article
                  key={review.name}
                  className="flex min-h-[402px] flex-col justify-between rounded-lg bg-white p-8"
                >
                  <div>
                    <img src="/images/quote.svg" alt="" width={24} height={24} className="opacity-60" />
                    <h3 className="mt-4 max-w-[160px] text-[24px] leading-[25.92px] tracking-[-0.72px]">
                      {review.title}
                    </h3>
                  </div>
                  <div className="mt-8">
                    <p className={`max-w-[224px] text-black/60 ${body}`}>{review.text}</p>
                    <div className="mt-6 flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover"
                      />
                      <p className={body}>{review.name}</p>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </section> : null}

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

        <section id="contact" className="mt-40 scroll-mt-32">
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

        {showArticles ? <section id="blog" className="mt-40 flex scroll-mt-32 flex-col items-center">
          <h2 className={`max-w-[440px] text-center ${heading}`}>
            Siste guider
            <br />
            og artikler
          </h2>
          <div className="mt-14 grid w-full gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group flex min-h-[520px] flex-col overflow-hidden rounded-lg bg-white transition-colors duration-200 hover:bg-[#141414] lg:h-[557px]"
              >
                <div className="p-8">
                  <p
                    className={`${mono} text-black/60 transition-colors duration-200 group-hover:text-white/60`}
                  >
                    {article.date}
                  </p>
                  <h3 className="mt-4 max-w-[280px] text-[24px] leading-[25.92px] tracking-[-0.72px] transition-colors duration-200 group-hover:text-white">
                    {article.title}
                  </h3>
                  <p
                    className={`mt-[7px] max-w-[320px] text-black/60 transition-colors duration-200 group-hover:text-white/70 ${body}`}
                  >
                    {article.text}
                  </p>
                </div>
                <div className="mt-auto min-h-[220px] flex-1 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14">
            <Button href="#blog" variant="fill">
              Se alt
            </Button>
          </div>
        </section> : null}
      </div>

      <SiteFooter />
    </div>
  );
}
