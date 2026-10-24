import type { Metadata } from "next";

export const siteUrl = "https://azgartner.no";

export const homeTitle = "AZ Gartner | Prosjektering av bygg og utomhusanlegg";

export const descriptions = {
  home: "AZ Gartner på Frosta prosjekterer bygg og utomhusanlegg, med byggesøknader, hagedesign, GPS-oppmåling, reguleringsplaner og miljøkartlegging.",
  tjenester:
    "Hagedesign, byggesøknader, GPS-tjenester, prosjektering av hus og hytter, miljøkartlegging og reguleringsplaner fra AZ Gartner på Frosta.",
  omOss:
    "AZ Gartner holder til på Frosta. Vi kombinerer faglig kompetanse og praktisk erfaring innen prosjektering av bygg og utomhusanlegg.",
  kontakt:
    "Ta kontakt med AZ Gartner på Frosta. Ring +47 90 90 01 50, send e-post til azgartneras@gmail.com, eller kom innom Alstadvegen 265.",
};

export const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Mann i arbeidsklær ved gravemaskiner på en anleggsplass ved fjorden.",
};

export const services = [
  {
    title: "Hagedesign",
    text: "Vi prosjekterer og designer bygg og utomhus arealer i en harmonisk helhet. Spennende elementer plassert i anlegget. Vi designer i 3D.",
  },
  {
    title: "Byggesøknader",
    text: "Vi er ansvarlig søker for alle typer tiltak, bygg, veger, utomhus. Vi tegner i 3D.",
  },
  {
    title: "GPS tjenester",
    text: "Inn og utmåling av tiltak, bygg, veger, rørledninger. FVD dokumentasjon.",
  },
  {
    title: "Prosjektering",
    text: "Vi tegner og prosjekterer hytter og hus, veger og utomhusanlegg. Visning i 3D.",
  },
  {
    title: "Miljøkartlegging/avfallsplaner",
    text: "Vi kartlegger og utformer miljøkartlegging ved riving av hus. Vi utformer avfallsplaner til søknader/tiltak.",
  },
  {
    title: "Hus og hytter",
    text: "Vi tegner hus og hytter med utomhusanlegg. Tegner i 3D. BIM.",
  },
  {
    title: "Reguleringsplaner",
    text: "Vi lager reguleringsplaner, detaljplanlegging, planbeskrivelser, planbestemmelser, ROS analyse, plankart.",
  },
];

export const faqs = [
  {
    q: "Hva koster det å få hjelp med en byggesøknad eller prosjektering?",
    a: "Prisen avhenger av prosjektets størrelse, kompleksitet og hvilken dokumentasjon som kreves. Ta gjerne kontakt med oss og fortell litt om prosjektet ditt, så kan vi vurdere omfanget og gi deg et pristilbud.",
  },
  {
    q: "Må jeg søke kommunen før jeg bygger?",
    a: "Det kommer an på hva du ønsker å bygge, hvor stort tiltaket er, og hvilke regler som gjelder for eiendommen. Enkelte mindre tiltak kan gjennomføres uten byggesøknad, mens andre krever tillatelse fra kommunen. Vi kan hjelpe deg med å avklare hva som gjelder for ditt prosjekt.",
  },
  {
    q: "Hvor lang tid tar det å få godkjent en byggesøknad?",
    a: "Kommunens saksbehandlingsfrist er normalt 3 eller 12 uker, avhengig av søknadstype og om vilkårene er oppfylt. Prosjektering, nabovarsling og innhenting av dokumentasjon kommer i tillegg. Vi bistår med å utarbeide nødvendig dokumentasjon og sende inn søknaden.",
  },
  {
    q: "Kan jeg bygge på eller endre en eiendom selv om det finnes begrensninger i reguleringsplanen?",
    a: "Det avhenger av hvilke bestemmelser som gjelder for eiendommen. I enkelte tilfeller kan det være mulig å søke om dispensasjon. Vi kan hjelpe deg med å undersøke mulighetene og vurdere hvilke søknader som eventuelt er nødvendige.",
  },
  {
    q: "Trenger jeg ferdige tegninger før jeg tar kontakt?",
    a: "Nei, du trenger ikke ha ferdige tegninger eller planer. Det holder at du har en idé om hva du ønsker å gjøre. Vi kan bistå med å utvikle prosjektet, utarbeide tegninger og planlegge veien videre.",
  },
  {
    q: "Kan dere hjelpe med hele prosessen fra idé til godkjent byggesøknad?",
    a: "Ja, vi kan bistå med alt fra de første skissene og prosjekteringen til utarbeidelse og innsending av byggesøknaden. Hvilke oppgaver vi tar ansvar for, avklares ut fra prosjektets behov.",
  },
];

const address = {
  "@type": "PostalAddress",
  streetAddress: "Alstadvegen 265",
  postalCode: "7633",
  addressLocality: "Frosta",
  addressCountry: "NO",
};

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AZ Gartner AS",
      legalName: "AZ GARTNER AS",
      url: siteUrl,
      logo: `${siteUrl}/images/azgartner.png`,
      email: "azgartneras@gmail.com",
      telephone: "+4790900150",
      identifier: "992542462",
      address,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AZ Gartner",
      inLanguage: "nb-NO",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "AZ Gartner AS",
      url: siteUrl,
      image: `${siteUrl}/og.jpg`,
      telephone: "+4790900150",
      email: "azgartneras@gmail.com",
      address,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      areaServed: "Norge",
    },
  ],
};

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tjenester fra AZ Gartner",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.text,
        url: `${siteUrl}/tjenester`,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: "Norge",
      },
    })),
  };
}

export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const fullTitle = absolute ? title : `${title} | AZ Gartner`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path === "/" ? siteUrl : path },
    openGraph: {
      type: "website",
      locale: "nb_NO",
      siteName: "AZ Gartner",
      title: fullTitle,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
