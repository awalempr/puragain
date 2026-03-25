import { NextResponse } from "next/server";

const FALLBACK_REVIEWS = [
  { id: "1", user: { name: "Shreyans P." }, rating: 5, text: "Puragain Water's customer service and installation were absolutely amazing! The quality of the water in the entire household is also incredible...", time_created: "2024-03-15" },
  { id: "2", user: { name: "Candizzle L." }, rating: 5, text: "The water is great and much cheaper than buying cases of water. The service was top notch from start to finish...", time_created: "2024-02-20" },
  { id: "3", user: { name: "Angelina M." }, rating: 5, text: "Love Love my whole house filtered water... No more hard water on my shower doors, in my dishwasher, or anywhere else...", time_created: "2024-01-10" },
  { id: "4", user: { name: "David R." }, rating: 5, text: "Professional installation, great tasting water. The lifetime service plan is what sold us. No regrets.", time_created: "2024-04-05" },
  { id: "5", user: { name: "Sarah M." }, rating: 5, text: "We noticed a difference immediately. Our coffee tastes better, our skin feels softer. Worth every penny.", time_created: "2024-05-12" },
];

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 30; // requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function GET(request: Request) {
  // Rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  const apiKey = process.env.YELP_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch(
        "https://api.yelp.com/v3/businesses/puragain-water-escondido-3/reviews",
        {
          headers: { Authorization: `Bearer ${apiKey}` },
          next: { revalidate: 86400 },
        }
      );

      if (res.ok) {
        const raw = await res.json();
        // Filter response to only needed fields
        const reviews = (raw.reviews || []).map((r: { id: string; rating: number; text: string; time_created: string; user: { name: string } }) => ({
          id: r.id,
          rating: r.rating,
          text: r.text,
          time_created: r.time_created,
          user: { name: r.user?.name },
        }));
        return NextResponse.json({ reviews });
      }
    } catch {
      // Fall through to static fallback
    }
  }

  return NextResponse.json({ reviews: FALLBACK_REVIEWS });
}
