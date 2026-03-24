import type { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Reviews | Puragain Water",
  description: "See what 5,000+ families are saying about Puragain Water filtration systems. 4.7 stars on Yelp with 430+ reviews.",
};

const reviews = [
  {
    name: "Shreyans P.",
    initials: "SP",
    color: "bg-blue-500",
    rating: 5,
    date: "Jan 2026",
    text: "Puragain Water's customer service and installation were absolutely amazing! The quality of the water in the entire household is also incredible. Highly recommend to anyone looking for a water filtration system.",
  },
  {
    name: "Candizzle L.",
    initials: "CL",
    color: "bg-emerald-500",
    rating: 5,
    date: "Feb 2026",
    text: "The water is great and much cheaper than buying cases of water. The service was top notch from start to finish. The installer was very professional and knowledgeable.",
  },
  {
    name: "Angelina M.",
    initials: "AM",
    color: "bg-purple-500",
    rating: 5,
    date: "Dec 2025",
    text: "Love Love my whole house filtered water. No more hard water on my shower doors, in my dishwasher, or anywhere else. My skin and hair feel so much better too!",
  },
  {
    name: "Rob C.",
    initials: "RC",
    color: "bg-orange-500",
    rating: 5,
    date: "Mar 2026",
    text: "I have been so happy with the system and service. Very responsive and the system really helped to clear out the scale in my pipes. Great investment for our home.",
  },
  {
    name: "Mohammad M.",
    initials: "MM",
    color: "bg-red-500",
    rating: 5,
    date: "Aug 2025",
    text: "The water here is very bad and smells like swamp water. We decided to give these guys a try and let me tell you its a huge difference! Crystal clear, great tasting water.",
  },
  {
    name: "Mila M.",
    initials: "MM",
    color: "bg-pink-500",
    rating: 5,
    date: "Jun 2025",
    text: "We've had Puragain for about 4 months now and our water never tasted so good! I can tell the difference in my hair, skin and even my plants look happier!!",
  },
  {
    name: "Jennifer L.",
    initials: "JL",
    color: "bg-cyan-500",
    rating: 5,
    date: "Nov 2025",
    text: "We had no idea how bad our water was until Puragain tested it. Now our whole family drinks straight from the tap. Best decision we've made for our home.",
  },
  {
    name: "Michael T.",
    initials: "MT",
    color: "bg-indigo-500",
    rating: 5,
    date: "Oct 2025",
    text: "Professional from start to finish. The installer explained everything, and the water quality difference was immediate. Our coffee has never tasted better.",
  },
  {
    name: "Rachel K.",
    initials: "RK",
    color: "bg-teal-500",
    rating: 5,
    date: "Sep 2025",
    text: "We switched from bottled water and are saving over $200 a month. The system paid for itself in the first year. Highly recommend Puragain to anyone.",
  },
  {
    name: "David R.",
    initials: "DR",
    color: "bg-amber-500",
    rating: 5,
    date: "Jan 2026",
    text: "Conner and Blake are awesome! Installation was smooth and within estimated time. Water feels and smells better on day one. The lifetime service plan is what sold us.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-16 px-6">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">Customer Reviews</span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ letterSpacing: "-0.03em" }}>
            5,000+ families trust Puragain.
          </h1>
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm font-semibold text-gray-900">4.7 stars</span>
            <span className="text-gray-400 text-sm ml-1">· 430+ reviews on Yelp</span>
          </div>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Real reviews from real families who made the switch to clean, filtered water.
          </p>
        </FadeIn>
      </section>

      {/* Reviews Grid */}
      <section className="bg-gray-50 py-20 px-6">
        <StaggerContainer className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-5">
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Avatar + name */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-sm font-bold`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-semibold">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.date} · via Yelp</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Yelp link */}
        <FadeIn className="text-center mt-10">
          <a
            href="https://www.yelp.com/biz/puragain-water-escondido-3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3a8fd4] text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-3 transition-all"
          >
            Read all reviews on Yelp <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="bg-[#3a8fd4] py-20 px-6">
        <FadeIn className="max-w-[700px] mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Ready to join them?
          </h2>
          <p className="text-white/60 text-[16px] mb-8 leading-relaxed">
            Join 5,000+ families who trust Puragain Water every day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-[#b00e0e] transition-colors shadow-lg shadow-black/10"
          >
            Find My System <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
