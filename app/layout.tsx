import type { Metadata } from "next";
import { Host_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { JsonLd } from "../components/json-ld";
import { businessJsonLd, descriptions, homeTitle, ogImage, siteUrl } from "../lib/site";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: "%s | AZ Gartner",
  },
  description: descriptions.home,
  applicationName: "AZ Gartner",
  authors: [{ name: "AZ Gartner AS", url: siteUrl }],
  creator: "AZ Gartner AS",
  publisher: "AZ Gartner AS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "AZ Gartner",
    url: siteUrl,
    title: homeTitle,
    description: descriptions.home,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: descriptions.home,
    images: [ogImage.url],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className={`${hostGrotesk.variable} ${ibmPlexMono.variable} scroll-smooth`}>
      <body className="bg-[#f2f1ed] font-[family-name:var(--font-host)] text-[#141414] antialiased">
        <JsonLd data={businessJsonLd} />
        {children}
      </body>
    </html>
  );
}
