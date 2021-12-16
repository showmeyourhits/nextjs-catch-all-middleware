export function middleware(req) {
  console.log(`[${Date.now()}] In middleware for dynamic subroute. Pathname ${req.nextUrl.pathname}`)
}