export function middleware(req) {
  console.log(`[${Date.now()}] In all pages middleware. Pathname ${req.nextUrl.pathname}`)
}