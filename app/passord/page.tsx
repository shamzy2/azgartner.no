import type { Metadata } from "next";
import { Suspense } from "react";
import { unlockSite } from "./actions";

export const metadata: Metadata = {
  title: "Passord",
  robots: { index: false, follow: false },
};

export default function PasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ feil?: string; fra?: string }>;
}) {
  return (
    <main className="flex min-h-svh items-center justify-center px-6">
      <div className="flex w-full max-w-[420px] flex-col items-center gap-6 text-center">
        <img src="/images/azgartner.png?v=2" alt="AZ Gartner AS" className="h-20 w-auto" />
        <div className="flex flex-col gap-2">
          <h1 className="text-[32px] leading-[1.1] tracking-[-0.8px]">Siden er ikke offentlig ennå</h1>
          <p className="text-[16px] leading-[20.48px] tracking-[-0.32px] text-black/60">
            Skriv inn passordet for å se nettsiden.
          </p>
        </div>
        <Suspense fallback={<PasswordFields fra="/" />}>
          <PasswordForm searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}

async function PasswordForm({
  searchParams,
}: {
  searchParams: Promise<{ feil?: string; fra?: string }>;
}) {
  const params = await searchParams;
  const fra = params.fra && params.fra.startsWith("/") && !params.fra.startsWith("//") ? params.fra : "/";

  return <PasswordFields fra={fra} wrong={Boolean(params.feil)} />;
}

function PasswordFields({ fra, wrong = false }: { fra: string; wrong?: boolean }) {
  return (
    <form action={unlockSite} className="flex w-full flex-col items-center gap-6">
      <input type="hidden" name="fra" value={fra} />
      <label className="flex w-full flex-col gap-2 text-left">
        <span className="font-[family-name:var(--font-mono)] text-[14px] uppercase leading-[20.48px] tracking-[-0.32px]">
          Passord
        </span>
        <input
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className="w-full rounded-full border border-black/10 bg-white px-6 py-4 text-[16px] leading-[20.48px] tracking-[-0.32px] outline-none focus:border-[#007D4B]"
        />
      </label>
      {wrong ? <p className="text-[16px] leading-[20.48px] tracking-[-0.32px] text-[#007D4B]">Feil passord.</p> : null}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full border border-[#007D4B] bg-[#007D4B] px-6 pt-[13px] pb-4 text-[16px] leading-[20.48px] tracking-[-0.32px] text-white transition-colors duration-200 hover:bg-transparent hover:text-[#007D4B]"
      >
        Fortsett
      </button>
    </form>
  );
}
