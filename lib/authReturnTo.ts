// Shared by the auth pages (Login, Register, and any page that resumes a flow
// after sign-in, e.g. the MCP OAuth consent page). Keep the redirect
// validation in one place — it is security-sensitive and easy to drift.

const STRIPPED_PARAMS = [
  "access_token",
  "clear_access_token",
  "app_id",
  "app_base_url",
  "functions_version",
  "from_url",
];

export function safeReturnTo(rawReturnTo:string) {
  const raw =
    rawReturnTo !== undefined
      ? rawReturnTo
      : typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("returnTo")
        : null;

  if (!raw || typeof raw !== "string") return "/dashboard";

  const origin =
    typeof window !== "undefined" ? window.location.origin : "http://localhost";

  try {
    const url = new URL(raw, origin);
    if (url.origin !== origin) return "/dashboard";

    for (const p of STRIPPED_PARAMS) {
      url.searchParams.delete(p);
    }

    const path = url.pathname + url.search;
    if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) {
      return "/dashboard";
    }
    return path;
  } catch {
    return "/dashboard";
  }
}
