"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Shreyans P.",
    initials: "SP",
    color: "bg-blue-500",
    location: "Cerritos, CA",
    quote: "Puragain Water's customer service and installation were absolutely amazing! The quality of the water in the entire household is also incredible. The attention to detail throughout the process by Chris, the sales water specialist was outstanding.",
  },
  {
    name: "Esh N.",
    initials: "EN",
    color: "bg-orange-500",
    location: "Escondido, CA",
    quote: "Just had our consultation with Michael M. and I'm so pleased with his level of service. He was very polite and very pleasant. He explained everything thoroughly and answered all our questions.",
  },
  {
    name: "Candizzle L.",
    initials: "CL",
    color: "bg-emerald-500",
    location: "San Diego, CA",
    quote: "The water is great and much cheaper than buying cases of water. The service was top notch from start to finish. The installer was very professional and knowledgeable.",
  },
  {
    name: "Angelina M.",
    initials: "AM",
    color: "bg-purple-500",
    location: "Oceanside, CA",
    quote: "Love Love my whole house filtered water. No more hard water on my shower doors, in my dishwasher, or anywhere else. My skin and hair feel so much better too!",
  },
  {
    name: "Rob C.",
    initials: "RC",
    color: "bg-cyan-500",
    location: "Carlsbad, CA",
    quote: "I have been so happy with the system and service. Very responsive and the system really helped to clear out the scale in my pipes. Great investment for our home.",
  },
  {
    name: "Mohammad M.",
    initials: "MM",
    color: "bg-red-500",
    location: "Vista, CA",
    quote: "The water here is very bad and smells like swamp water. We decided to give these guys a try and let me tell you its a huge difference! Crystal clear, great tasting water now.",
  },
  {
    name: "Mila M.",
    initials: "ML",
    color: "bg-pink-500",
    location: "Encinitas, CA",
    quote: "We've had Puragain for about 4 months now and our water never tasted so good! I can tell the difference in my hair, skin and even my plants look happier!!",
  },
  {
    name: "Jennifer L.",
    initials: "JL",
    color: "bg-teal-500",
    location: "Rancho Bernardo, CA",
    quote: "We had no idea how bad our water was until Puragain tested it. Now our whole family drinks straight from the tap. Best decision we've made for our home.",
  },
];

function ReviewCard({ review, featured = false }: { review: typeof reviews[0]; featured?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-6 h-full flex flex-col ${
        featured
          ? "bg-[#3a8fd4] text-white"
          : "bg-white border border-gray-100"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-11 h-11 rounded-full ${featured ? "bg-white/20" : review.color} flex items-center justify-center text-white text-sm font-bold`}>
          {review.initials}
        </div>
        <div>
          <p className={`text-sm font-semibold ${featured ? "text-white" : "text-gray-900"}`}>{review.name}</p>
          <p className={`text-xs ${featured ? "text-white/50" : "text-gray-400"}`}>{review.location}</p>
        </div>
      </div>

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 fill-current ${featured ? "text-white/70" : "text-yellow-400"}`} />
        ))}
      </div>

      <p className={`text-[14px] leading-relaxed flex-1 ${featured ? "text-white/80" : "text-gray-500"}`}>
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className={`mt-4 pt-4 border-t ${featured ? "border-white/10" : "border-gray-100"} flex items-center gap-2`}>
        <svg viewBox="0 0 384 512" className={`w-3.5 h-3.5 ${featured ? "text-white/40" : "text-[#d32323]"}`} fill="currentColor">
          <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.54-110.2c.56-17.63-20.45-27.72-33.36-16.05l-73.55 66.33a22.37 22.37 0 0 0-2.63 49.49zM176 0C73.72 0-12.68 100.55 2.28 203.41l112.47-54.88a22.8 22.8 0 0 1 29.93 11.05l20.21 40.72a166 166 0 0 0 5.28-47.28C170.17 102.57 198.37 0 176 0zm175.85 261.65a22.8 22.8 0 0 0-29.93-11l-112.47 54.88a22.79 22.79 0 0 1-29.93-11.05l-20.21-40.72a166 166 0 0 0-5.28 47.28c0 50.45-28.2 153-5.83 153 102.28 0 188.68-100.55 173.72-203.41l29.93 11.02z"/>
        </svg>
        <span className={`text-[11px] font-medium ${featured ? "text-white/30" : "text-gray-400"}`}>Verified on Yelp</span>
      </div>
    </div>
  );
}

export function ReviewCarousel() {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Show 4 reviews at a time, rotate through all
  const pageSize = 4;
  const totalPages = Math.ceil(reviews.length / pageSize);

  const nextPage = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextPage, 5000);
    return () => clearInterval(interval);
  }, [nextPage, isPaused]);

  const currentReviews = reviews.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="grid md:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          {currentReviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} featured={i === 0} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`rounded-full transition-colors duration-300 ${
              i === page
                ? "w-8 h-2 bg-[#3a8fd4]"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
