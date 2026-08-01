const PROJECT_ID = "c4cd8d40-7956-4081-9f89-3b1ca269cbfd";
const CDN_ORIGIN = `https://project--${PROJECT_ID}.lovable.app`;

/**
 * CDN asset pointers use root-relative URLs (/__l5e/assets-v1/...) that are only
 * served by Lovable hosting. In local dev (localhost / cloned repo) that path 404s,
 * so resolve it against the project's public origin instead.
 */
export function assetUrl(url: string): string {
  if (!url.startsWith("/__l5e/")) return url;
  return import.meta.env.DEV ? `${CDN_ORIGIN}${url}` : url;
}
