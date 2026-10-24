"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { accessCookie, passwordToken, safeReturnPath, tokensMatch } from "../../lib/site-access";

export async function unlockSite(formData: FormData) {
  const expected = process.env.SITE_PASSWORD;
  const given = String(formData.get("password") || "");
  const fra = safeReturnPath(formData.get("fra"));

  if (!expected || !tokensMatch(await passwordToken(given), await passwordToken(expected))) {
    const url = fra === "/" ? "/passord?feil=1" : `/passord?feil=1&fra=${encodeURIComponent(fra)}`;
    redirect(url);
  }

  const cookieStore = await cookies();
  cookieStore.set(accessCookie, await passwordToken(expected), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect(fra);
}
