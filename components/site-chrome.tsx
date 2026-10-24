"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { CopyrightYear } from "../app/copyright-year";

const body =
  "text-[16px] leading-[20.48px] tracking-[-0.32px]";
const mono =
  "font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]";

function Button({
  href,
  children,
  size = "sm",
  className = "",
}: {
  href: string;
  children: ReactNode;
  size?: "sm" | "lg";
  className?: string;
}) {
  const sizeClass =
    size === "sm" ? "px-4 pt-[7px] pb-[10px]" : "px-6 pt-[13px] pb-4";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-[#007D4B] bg-[#007D4B] text-white transition-colors duration-200 hover:bg-transparent hover:text-[#007D4B] ${body} ${sizeClass} ${className}`}
    >
      {children}
    </a>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={`px-2 pt-1 pb-1.5 transition-colors duration-200 hover:text-[#007D4B] ${body} ${active ? "text-[#007D4B]" : ""}`}
    >
      {children}
    </a>
  );
}

function Logo({ className = "h-[72px]" }: { className?: string }) {
  return (
    <a href="/" className="inline-flex shrink-0 items-center">
      <img
        src="/images/azgartner.png?v=2"
        alt="AZ Gartner AS"
        className={`w-auto transition-opacity duration-200 hover:opacity-80 ${className}`}
      />
    </a>
  );
}

const footerColumns = [
  { title: "Meny", links: ["Hjem", "Tjenester", "Om oss", "Kontakt"] },
  { title: "Kontakt", links: ["+47 90 90 01 50", "azgartneras@gmail.com"] },
  { title: "Besøk oss", links: ["Alstadvegen 265", "7633 Frosta"] },
];

const footerHref: Record<string, string> = {
  Hjem: "/",
  Tjenester: "/tjenester",
  "Om oss": "/om-oss",
  Kontakt: "/kontakt",
  "+47 90 90 01 50": "tel:+4790900150",
  "azgartneras@gmail.com": "mailto:azgartneras@gmail.com",
  "Alstadvegen 265":
    "https://www.google.com/maps/search/?api=1&query=Alstadvegen+265,+7633+Frosta",
  "7633 Frosta":
    "https://www.google.com/maps/search/?api=1&query=Alstadvegen+265,+7633+Frosta",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f2f1ed]">
      <div className="flex w-full items-center justify-between gap-4 px-6 py-3 md:px-10 lg:items-start lg:px-16 lg:py-4 lg:pb-5 min-[1280px]:px-[70px]!">
        <Logo className="h-12 lg:h-[72px]" />
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-4">
            <span
              className={`absolute left-0 h-px w-4 bg-[#141414] transition-transform ${open ? "top-[7px] rotate-45" : "top-[3px]"}`}
            />
            <span
              className={`absolute top-[7px] left-0 h-px w-4 bg-[#141414] ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-[#141414] transition-transform ${open ? "top-[7px] -rotate-45" : "top-[11px]"}`}
            />
          </span>
        </button>
        <div className="hidden min-w-0 flex-1 lg:mt-[32px] lg:flex lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap items-center gap-3">
            <NavLink href="/">Hjem</NavLink>
            <NavLink href="/tjenester">Tjenester</NavLink>
            <NavLink href="/om-oss">Om oss</NavLink>
          </nav>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="tel:+4790900150"
              className={`inline-flex items-center gap-2 px-2 pt-1 pb-1.5 transition-colors duration-200 hover:text-[#007D4B] ${body}`}
            >
              <img src="/images/phone-blue.svg" alt="" width={16} height={16} />
              +47 90 90 01 50
            </a>
            <Button href="/kontakt">Kontakt oss</Button>
          </div>
        </div>
      </div>
      {open ? (
        <div className="absolute inset-x-0 top-full z-30 flex flex-col items-center gap-6 border-b border-black/10 bg-[#f2f1ed] px-6 py-8 lg:hidden">
          <nav className="flex flex-col items-center gap-2">
            <NavLink href="/">Hjem</NavLink>
            <NavLink href="/tjenester">Tjenester</NavLink>
            <NavLink href="/om-oss">Om oss</NavLink>
          </nav>
          <a
            href="tel:+4790900150"
            className={`inline-flex items-center gap-2 px-2 pt-1 pb-1.5 transition-colors duration-200 hover:text-[#007D4B] ${body}`}
          >
            <img src="/images/phone-blue.svg" alt="" width={16} height={16} />
            +47 90 90 01 50
          </a>
          <Button href="/kontakt" className="w-full">
            Kontakt oss
          </Button>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-40 w-full border-t border-black/10 bg-black/[0.02] px-6 py-[72px] md:px-10 lg:px-16 min-[1280px]:px-[70px]!">
      <div className="mx-auto flex w-full max-w-[974px] flex-col items-center gap-[72px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <Logo className="h-24" />
          <p className={`max-w-[320px] text-black/60 ${body}`}>
            Prosjektering av bygg og utomhusanlegg, med byggesøknader,
            miljøkartlegging og rådgivning.
          </p>
          <p className={`text-black/60 ${mono}`}>Org.nr. 992 542 462</p>
        </div>
        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col items-center gap-5">
              <p className={`text-black/60 ${mono}`}>{column.title}</p>
              <div className="flex flex-col items-center">
                {column.links.map((link) => {
                  const href = footerHref[link];
                  const external = href.startsWith("http");
                  return (
                    <a
                      key={link}
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`px-1 pt-[4px] pb-[6px] text-center transition-colors duration-200 hover:text-[#007D4B] ${body}`}
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className={`text-black/60 ${mono}`}>
            © <CopyrightYear /> AZ Gartner AS. Alle rettigheter reservert.
          </p>
          <p className={body}>
            <span className="text-black/60">Levert av </span>
            <a
              href="https://kynetic.no"
              className="text-[#007D4B] underline underline-offset-2 transition-opacity duration-200 hover:opacity-60"
            >
              Kynetic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
