import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { descriptions, pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Om oss på Frosta",
  description: descriptions.omOss,
  path: "/om-oss",
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
}: {
  href: string;
  children: ReactNode;
  variant: "fill" | "outline";
}) {
  const variantClass =
    variant === "fill"
      ? "bg-[#007D4B] text-white hover:bg-transparent hover:text-[#007D4B]"
      : "bg-transparent text-[#007D4B] hover:bg-[#007D4B] hover:text-white";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-[#007D4B] px-6 pt-[13px] pb-4 ${body} transition-colors duration-200 ${variantClass}`}
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

const stories = [
  {
    icon: "/omoss/pin.svg",
    label: "Holder til på Frosta",
    text: "Hos AZ Gartner kombinerer vi faglig kompetanse med praktisk erfaring innen prosjektering av bygg og utomhusanlegg. Vi legger vekt på kvalitet, nøyaktighet og løsninger tilpasset hvert prosjekt.",
  },
  {
    icon: "/omoss/target.svg",
    label: "Det som driver oss",
    text: "Vi bistår både private og profesjonelle aktører med hagedesign, byggesøknader, GPS-oppmåling, reguleringsplaner og miljøkartlegging.",
  },
  {
    icon: "/omoss/shield.svg",
    label: "Vårt løfte",
    text: "Målet vårt er å gjøre planleggingen enklere og bidra til gode resultater, fra de første ideene til ferdige planer.",
  },
];

const showValues = false;

const values = [
  {
    number: "01",
    title: "Kompetanse",
    text: "Med mesterkompetanse og sentral godkjenning har vi et solid faglig grunnlag for arbeidet vi utfører.",
    image: "/identitet.jpg",
    alt: "Åpent gårdsrom mellom moderne bygg, med beplantning og høye hus i bakgrunnen.",
  },
  {
    number: "02",
    title: "Presisjon",
    text: "Med digitale verktøy, GPS-oppmåling og 3D-prosjektering legger vi til rette for presise løsninger.",
    image: "/hero/byggesøknader.jpg",
    alt: "Person som tegner plantegninger ved et skrivebord.",
  },
  {
    number: "03",
    title: "Samarbeid",
    text: "Vi legger vekt på god dialog og tett samarbeid for å finne løsninger tilpasset dine behov.",
    image: "/hero/landskap.jpg",
    alt: "Gårdsrom mellom moderne bygg, med blomsterbed og en steinlagt plass.",
  },
  {
    number: "04",
    title: "Kvalitet",
    text: "Vi legger vekt på gjennomarbeidede løsninger, god dokumentasjon og kvalitet i alle ledd.",
    image: "/az.jpg",
    alt: "Mann i arbeidsklær ved gravemaskiner på en anleggsplass ved fjorden.",
  },
];

export default function OmOssPage() {
  return (
    <div className="bg-[#f2f1ed]">
      <SiteHeader />
      <main className="w-full bg-[#f2f1ed] px-6 md:px-10 lg:px-16 min-[1280px]:px-[70px]!">
        <section className="mx-auto flex max-w-[960px] flex-col items-center gap-6 pt-16 text-center lg:pt-24">
          <Eyebrow icon="/omoss/lightbulb.svg">Hvem vi er</Eyebrow>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[48px] leading-[1.08] tracking-[-1.4px] md:text-[64px] md:tracking-[-1.9px] lg:text-[80px] lg:leading-[86.4px] lg:tracking-[-2.4px]">
              Gode løsninger
              <br />
              starter med fagkunnskap
            </h1>
            <p className={`max-w-[560px] text-black/60 ${bodyLarge}`}>
              Vi legger vekt på kvalitet, nøyaktighet og løsninger som er
              tilpasset hvert enkelt prosjekt.
            </p>
          </div>
          <Button href="/kontakt" variant="fill">
            Kontakt oss
          </Button>
        </section>

        <section className="mt-24 flex flex-col gap-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.label}
                className="flex min-h-[275px] flex-col justify-between rounded-lg bg-white p-8"
              >
                <Eyebrow icon={story.icon}>{story.label}</Eyebrow>
                <p className={`mt-10 max-w-[360px] ${body}`}>{story.text}</p>
              </article>
            ))}
          </div>
          <div className="aspect-[1472/800] overflow-hidden rounded-lg">
            <img
              src="/identitet.jpg"
              alt="Åpent gårdsrom mellom moderne bygg, med beplantning og høye hus i bakgrunnen."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>

        {showValues ? (
        <section className="mt-40">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className={`max-w-[440px] ${heading}`}>
              Hva vi
              <br />
              står for
            </h2>
            <Button href="/kontakt" variant="outline">
              Kontakt oss
            </Button>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article key={value.number} className="flex flex-col">
                <div className="aspect-[350/467] overflow-hidden rounded-lg">
                  <img
                    src={value.image}
                    alt={value.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className={`mt-4 text-black/60 ${mono}`}>{value.number}</p>
                <h3 className="mt-[7px] text-[24px] leading-[25.92px] tracking-[-0.72px]">
                  {value.title}
                </h3>
                <p className={`mt-[7px] max-w-[264px] text-black/60 ${body}`}>
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </section>
        ) : null}

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
