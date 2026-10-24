import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { descriptions, pageMetadata } from "../../lib/site";
import { ContactForm } from "./contact-form";
import { LocationMap } from "./location-map";

const showForm = false;

export const metadata = pageMetadata({
  title: "Kontakt oss på Frosta",
  description: descriptions.kontakt,
  path: "/kontakt",
});

const body =
  "text-[16px] leading-[20.48px] tracking-[-0.32px]";
const bodyLarge =
  "text-[18px] leading-[21.6px] tracking-[-0.36px]";
const mono =
  "font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]";

function Eyebrow({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className={`flex items-center gap-2 text-[#007D4B] ${mono}`}>
      <img src={icon} alt="" width={14} height={14} />
      {children}
    </div>
  );
}

const channels = [
  {
    label: "Telefon",
    title: "Ring oss",
    text: "Ring +47 90 90 01 50 for en rask prat om prosjektet ditt.",
    action: "Ring oss",
    href: "tel:+4790900150",
  },
  {
    label: "Besøk",
    title: "Kom innom",
    text: "Vi holder til i Alstadvegen 265, 7633 Frosta.",
    action: "Se kart",
    href: "#kart",
  },
  {
    label: "E-post",
    title: "Send en melding",
    text: "Skriv til azgartneras@gmail.com, så svarer vi så snart vi kan.",
    action: "Send e-post",
    href: "mailto:azgartneras@gmail.com",
  },
];

export default function KontaktPage() {
  return (
    <div className="bg-[#f2f1ed]">
      <SiteHeader />
      <main className="w-full bg-[#f2f1ed] px-6 md:px-10 lg:px-16 min-[1280px]:px-[70px]!">
        <section className="mx-auto flex max-w-[960px] flex-col items-center gap-4 pt-16 text-center lg:pt-24">
          <Eyebrow icon="/kontakt/chat.svg">Ta kontakt</Eyebrow>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[48px] leading-[1.08] tracking-[-1.4px] md:text-[64px] md:tracking-[-1.9px] lg:text-[80px] lg:leading-[86.4px] lg:tracking-[-2.4px]">
              Har du et prosjekt
              <br />
              i tankene?
            </h1>
            <p className={`max-w-[560px] text-black/60 ${bodyLarge}`}>
              Enten du planlegger et nytt bygg, ønsker å utvikle et uteområde
              eller trenger hjelp med en byggesøknad, hjelper vi deg videre.
            </p>
          </div>
        </section>

        <section className="mt-24 grid gap-6 min-[500px]:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <article
              key={channel.label}
              className="flex h-full flex-col gap-6 rounded-lg bg-white p-2"
            >
              <div className="flex flex-1 flex-col gap-[7px] px-6 pt-6">
                <p className={`text-[#007D4B] ${mono}`}>{channel.label}</p>
                <h2 className="text-[24px] leading-[25.92px] tracking-[-0.72px]">
                  {channel.title}
                </h2>
                <p className={`max-w-[320px] text-black/60 ${body}`}>{channel.text}</p>
              </div>
              <a
                href={channel.href}
                {...(channel.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`mt-auto inline-flex items-center justify-center rounded-full border border-[#007D4B] px-6 pt-[13px] pb-4 text-[#007D4B] transition-colors duration-200 hover:bg-[#007D4B] hover:text-white ${body}`}
              >
                {channel.action}
              </a>
            </article>
          ))}
        </section>

        <section id="kart" className="mt-16 scroll-mt-32">
          <LocationMap />
        </section>

        {showForm ? (
          <section id="skjema" className="mt-24 scroll-mt-32">
            <div className="rounded-lg bg-white p-8">
              <p className={`text-[#007D4B] ${mono}`}>Ta kontakt</p>
              <h2 className="mt-2 text-[40px] leading-[1.08] tracking-[-1.2px]">
                Vi kan hjelpe
              </h2>
              <p className={`mt-2 max-w-[400px] text-black/60 ${body}`}>
                Send oss en kort melding, så tar vi kontakt om prosjektet ditt.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}
