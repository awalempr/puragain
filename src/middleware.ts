import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Vercel/Cloudflare automatically provide geo headers
// This middleware blocks non-US traffic from the site
export function middleware(request: NextRequest) {
  // Vercel provides country via header; Cloudflare uses cf-ipcountry
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    "";

  // Allow US traffic, localhost/dev, and unknown geo (don't block if geo unavailable)
  if (country === "US" || country === "" || !country) {
    return NextResponse.next();
  }

  // Allow API routes (for any integrations)
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Allow static assets
  if (
    request.nextUrl.pathname.startsWith("/_next/") ||
    request.nextUrl.pathname.startsWith("/images/") ||
    request.nextUrl.pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Block non-US traffic with a simple response
  return new NextResponse(
    `<!DOCTYPE html>
    <html><head><title>Puragain Water</title>
    <style>body{font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#f5f7fa;color:#333;text-align:center}div{max-width:400px;padding:40px}</style>
    </head><body><div>
    <h1>Puragain Water</h1>
    <p>We currently only serve customers in the United States.</p>
    <p>For inquiries, please call <a href="tel:8554092837">855-40-WATER</a>.</p>
    </div></body></html>`,
    {
      status: 451,
      headers: { "Content-Type": "text/html" },
    }
  );
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
