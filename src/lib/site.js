// Public site address. Set NEXT_PUBLIC_SITE_URL for a custom domain; on Vercel the
// production domain is provided automatically, so link previews work without setup.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
