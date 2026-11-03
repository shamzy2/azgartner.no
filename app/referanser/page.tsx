import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { descriptions, pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  title: "Referanser",
  description: descriptions.referanser,
  path: "/referanser",
});

const body = "text-[16px] leading-[20.48px] tracking-[-0.32px]";
const bodyLarge = "text-[18px] leading-[21.6px] tracking-[-0.36px]";
const mono =
  "font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]";

const showLogo = false;

const references = [
  {
    label: "UTF",
    title: "Statoil Heidrun",
    text: "Utomhusanlegg",
  },
  {
    label: "UTF",
    title: "Lade Gård",
    text: "Reitangruppen",
  },
  {
    title: "Prosjektleder",
    text: "Prosjekter hos Jernbaneverket, Statens vegvesen, Fylkeskommunen, kommunale prosjekter og private næringsbygg.",
  },
  {
    label: "PRO",
    title: "Norges største agurk gartneri",
  },
  {
    label: "PRO",
    title: "Flere næringsbygg og boligbygg",
  },
];

export default function ReferanserPage() {
  return (
    <div className="bg-[#f2f1ed]">
      <SiteHeader />
      <main className="w-full bg-[#f2f1ed] px-6 pb-24 md:px-10 lg:px-16 lg:pb-32 min-[1280px]:px-[70px]!">
        <section className="mx-auto flex max-w-[720px] flex-col items-center gap-4 pt-16 text-center lg:pt-24">
          <p className={`text-[#007D4B] ${mono}`}>Utvalgte oppdrag</p>
          <h1 className="text-[48px] leading-[1.08] tracking-[-1.4px] md:text-[64px] md:tracking-[-1.9px] lg:text-[80px] lg:leading-[86.4px] lg:tracking-[-2.4px]">
            Referanser
          </h1>
          <p className={`max-w-[520px] text-black/60 ${bodyLarge}`}>
            Prosjekter og oppdrag vi har vært med på.
          </p>
        </section>

        <section className="mx-auto mt-16 flex max-w-[960px] flex-col gap-4">
          {references.map((item) => (
            <article
              key={item.title}
              className="flex items-center gap-5 rounded-lg bg-white p-4 sm:gap-8 sm:p-6"
            >
              {showLogo ? (
                <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-md bg-[#f2f1ed] px-2 text-center text-[10px] leading-[12px] tracking-[-0.1px] text-black/40 sm:h-20 sm:w-32">
                  her kommer logo
                </div>
              ) : null}
              <div className="min-w-0">
                {item.label ? (
                  <p className={`text-[#007D4B] ${mono}`}>{item.label}</p>
                ) : null}
                <h2 className="text-[24px] leading-[28px] tracking-[-0.72px]">
                  {item.title}
                </h2>
                {item.text ? (
                  <p className={`mt-1 text-black/60 ${body}`}>{item.text}</p>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
