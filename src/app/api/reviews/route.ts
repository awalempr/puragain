import { NextResponse } from "next/server";

const FALLBACK_REVIEWS = [
  {
    id: "1",
    user: { name: "Shreyans P." },
    rating: 5,
    text: "Puragain Water's customer service and installation were absolutely amazing! The quality of the water in the entire household is also incredible...",
    time_created: "2024-03-15",
  },
  {
    id: "2",
    user: { name: "Candizzle L." },
    rating: 5,
    text: "The water is great and much cheaper than buying cases of water. The service was top notch from start to finish...",
    time_created: "2024-02-20",
  },
  {
    id: "3",
    user: { name: "Angelina M." },
    rating: 5,
    text: "Love Love my whole house filtered water... No more hard water on my shower doors, in my dishwasher, or anywhere else...",
    time_created: "2024-01-10",
  },
  {
    id: "4",
    user: { name: "David R." },
    rating: 5,
    text: "Professional installation, great tasting water. The lifetime service plan is what sold us. No regrets.",
    time_created: "2024-04-05",
  },
  {
    id: "5",
    user: { name: "Sarah M." },
    rating: 5,
    text: "We noticed a difference immediately. Our coffee tastes better, our skin feels softer. Worth every penny.",
    time_created: "2024-05-12",
  },
];

export async function GET() {
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
        const data = await res.json();
        return NextResponse.json(data);
      }
    } catch {
      // Fall through to static fallback
    }
  }

  return NextResponse.json({ reviews: FALLBACK_REVIEWS });
}
