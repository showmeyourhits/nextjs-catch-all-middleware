export function middleware(req) {
  console.log(`In middleware for catch_all subroute slug. Pathname ${req.nextUrl.pathname}`)
}