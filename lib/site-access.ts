export const accessCookie = "site_access";

export async function passwordToken(password: string) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function tokensMatch(a: string, b: string) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) {
    mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index);
  }
  return mismatch === 0;
}

export function safeReturnPath(value: FormDataEntryValue | null) {
  const path = String(value || "/");
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("/passord")) return "/";
  return path;
}
