import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { accessCookie, passwordToken, safeReturnPath, tokensMatch } from "./lib/site-access";

export async function proxy(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return NextResponse.next();

  const { pathname, search } = request.nextUrl;
  if (pathname === "/passord") return NextResponse.next();

  const expected = await passwordToken(password);
  const current = request.cookies.get(accessCookie)?.value;
  if (current && tokensMatch(current, expected)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/passord";
  url.search = "";
  const fra = `${pathname}${search}`;
  if (safeReturnPath(fra) !== "/") url.searchParams.set("fra", fra);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|svg|webp|ico|gif)$).*)"],
};
