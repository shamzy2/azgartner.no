"use client";

import type { FormEvent } from "react";

const topics = [
  "Hagedesign",
  "Byggesøknader",
  "GPS tjenester",
  "Prosjektering",
  "Miljøkartlegging/avfallsplaner",
  "Hus og hytter",
  "Reguleringsplaner",
  "Annet",
];

const field =
  "w-full rounded-full border border-black/10 bg-[#f2f1ed] px-6 py-4 text-[16px] leading-[20.48px] tracking-[-0.32px] outline-none transition-colors focus:border-[#007D4B]";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "");
    const body = `Navn: ${name}\nE-post: ${email}\nTelefon: ${phone}\nHva gjelder det: ${topic}\n\n${message}`;
    window.location.href = `mailto:azgartneras@gmail.com?subject=${encodeURIComponent("Henvendelse fra nettsiden")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-2">
        <span className="font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]">
          Fullt navn
        </span>
        <input className={field} name="name" required placeholder="Skriv inn navnet ditt" />
      </label>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]">
            E-post
          </span>
          <input
            className={field}
            name="email"
            type="email"
            required
            placeholder="Skriv inn e-posten din"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]">
            Telefon
          </span>
          <input className={field} name="phone" type="tel" placeholder="Skriv inn telefonnummer" />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]">
          Hva gjelder det
        </span>
        <select
          className={`${field} appearance-none bg-[url('/kontakt/caret-down.svg')] bg-[length:16px_16px] bg-[position:right_48px_center] bg-no-repeat pr-16`}
          name="topic"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Velg tema
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]">
          Melding
        </span>
        <textarea
          className="min-h-[136px] w-full rounded-lg border border-black/10 bg-[#f2f1ed] px-6 py-4 text-[16px] leading-[20.48px] tracking-[-0.32px] outline-none transition-colors focus:border-[#007D4B]"
          name="message"
          required
          placeholder="Fortell oss hvordan vi kan hjelpe"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full border border-[#007D4B] bg-[#007D4B] px-6 pt-[13px] pb-4 text-[16px] leading-[20.48px] tracking-[-0.32px] text-white transition-colors duration-200 hover:bg-transparent hover:text-[#007D4B]"
      >
        Send melding
      </button>
    </form>
  );
}
