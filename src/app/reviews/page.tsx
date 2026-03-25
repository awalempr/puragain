import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Phone, Shield, Clock, Award } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Reviews | Puragain Water",
  description: "See what 5,000+ families are saying about Puragain Water filtration systems. 4.7 stars on Yelp with 430+ reviews.",
};

const reviews = [
  { name: "Shreyans P.", initials: "SP", color: "bg-blue-500", location: "Cerritos, CA", text: "Puragain Water's customer service and installation were absolutely amazing! The quality of the water in the entire household is also incredible. The attention to detail throughout the process by Chris, the sales water specialist was outstanding." },
  { name: "Candizzle L.", initials: "CL", color: "bg-emerald-500", location: "San Diego, CA", text: "The water is great and much cheaper than buying cases of water. The service was top notch from start to finish. The installer was very professional and knowledgeable." },
  { name: "Angelina M.", initials: "AM", color: "bg-purple-500", location: "Oceanside, CA", text: "Love Love my whole house filtered water. No more hard water on my shower doors, in my dishwasher, or anywhere else. My skin and hair feel so much better too!" },
  { name: "Rob C.", initials: "RC", color: "bg-orange-500", location: "Carlsbad, CA", text: "I have been so happy with the system and service. Very responsive and the system really helped to clear out the scale in my pipes. Great investment for our home." },
  { name: "Mohammad M.", initials: "MM", color: "bg-red-500", location: "Vista, CA", text: "The water here is very bad and smells like swamp water. We decided to give these guys a try and let me tell you its a huge difference! Crystal clear, great tasting water." },
  { name: "Mila M.", initials: "ML", color: "bg-pink-500", location: "Encinitas, CA", text: "We've had Puragain for about 4 months now and our water never tasted so good! I can tell the difference in my hair, skin and even my plants look happier!!" },
  { name: "Jennifer L.", initials: "JL", color: "bg-cyan-500", location: "Rancho Bernardo, CA", text: "We had no idea how bad our water was until Puragain tested it. Now our whole family drinks straight from the tap. Best decision we've made for our home." },
  { name: "Michael T.", initials: "MT", color: "bg-indigo-500", location: "Poway, CA", text: "Professional from start to finish. The installer explained everything, and the water quality difference was immediate. Our coffee has never tasted better." },
  { name: "Rachel K.", initials: "RK", color: "bg-teal-500", location: "Del Mar, CA", text: "We switched from bottled water and are saving over $200 a month. The system paid for itself in the first year. Highly recommend Puragain to anyone." },
  { name: "David R.", initials: "DR", color: "bg-amber-500", location: "Escondido, CA", text: "Conner and Blake are awesome! Installation was smooth and within estimated time. Water feels and smells better on day one. The lifetime service plan is what sold us." },
];

const stats = [
  { value: "4.7", label: "Star Rating" },
  { value: "430+", label: "Yelp Reviews" },
  { value: "5,000+", label: "Families Served" },
  { value: "30+", label: "Years Experience" },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-0 px-6">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">Customer Reviews</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              5,000+ families.<br />
              <span className="text-[#3a8fd4]">One promise.</span> Pure water.
            </h1>
            <p className="text-gray-500 text-[17px] max-w-xl mx-auto leading-relaxed">
              Real reviews from real families who made the switch to clean, filtered water.
            </p>
          </FadeIn>

          {/* Stats bar */}
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-[28px] py-10 px-8 lg:px-12 mb-0"
              style={{
                background: "linear-gradient(135deg, rgba(58,143,212,0.12) 0%, rgba(58,143,212,0.06) 50%, rgba(58,143,212,0.1) 100%)",
                border: "1px solid rgba(58,143,212,0.15)",
                boxShadow: "0 8px 40px rgba(58,143,212,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="text-center relative">
                  {i > 0 && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-[#3a8fd4]/10 hidden lg:block" />}
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#3a8fd4] tracking-tight mb-1">{s.value}</div>
                  <p className="text-gray-400 text-[12px] font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured review — full width */}
      <section className="px-6 py-20 bg-white">
        <FadeIn>
          <div className="max-w-[1100px] mx-auto">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #2f5e8f 0%, #3a8fd4 50%, #4a9de0 100%)",
              }}
            >
              <div className="p-10 lg:p-14">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white/70 text-white/70" />
                  ))}
                </div>
                <p className="text-white text-xl lg:text-2xl font-medium leading-relaxed mb-8" style={{ letterSpacing: "-0.01em" }}>
                  &ldquo;Puragain Water&apos;s customer service and installation were absolutely amazing! The quality of the water in the entire household is also incredible. The attention to detail throughout the process by Chris, the sales water specialist was outstanding.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">SP</div>
                  <div>
                    <p className="text-white font-semibold">Shreyans P.</p>
                    <p className="text-white/50 text-sm">Cerritos, CA</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative h-full min-h-[300px]">
                <Image
                  src="/images/hero-lifestyle.jpeg"
                  alt="Happy family with clean water"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Reviews masonry grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 text-center" style={{ letterSpacing: "-0.02em" }}>
              More from our customers.
            </h2>
          </FadeIn>

          {/* Masonry-style: 3 columns with varied heights */}
          <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {reviews.slice(1).map((review) => (
              <StaggerItem key={review.name}>
                <div className="break-inside-avoid rounded-2xl p-7 bg-white border border-gray-100 flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-5 border-t border-gray-100">
                    <div className={`w-9 h-9 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-bold`}>
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-semibold">{review.name}</p>
                      <p className="text-gray-400 text-xs">{review.location}</p>
                    </div>
                    <svg viewBox="0 0 384 512" className="w-3.5 h-3.5 text-[#d32323] ml-auto" fill="currentColor">
                      <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.54-110.2c.56-17.63-20.45-27.72-33.36-16.05l-73.55 66.33a22.37 22.37 0 0 0-2.63 49.49zM176 0C73.72 0-12.68 100.55 2.28 203.41l112.47-54.88a22.8 22.8 0 0 1 29.93 11.05l20.21 40.72a166 166 0 0 0 5.28-47.28C170.17 102.57 198.37 0 176 0z"/>
                    </svg>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-12">
            <a
              href="https://www.yelp.com/biz/puragain-water-escondido-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3a8fd4] text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-3 transition-transform"
            >
              Read all 430+ reviews on Yelp <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
              Why families choose Puragain.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "7-Year Warranty", desc: "Every system is backed by a comprehensive warranty covering all parts and labor." },
              { icon: <Clock className="w-6 h-6" />, title: "Lifetime Service", desc: "Annual testing, maintenance, filter replacements, and unlimited service calls. All included." },
              { icon: <Award className="w-6 h-6" />, title: "30+ Years Experience", desc: "Family-owned with over three decades in the water industry. 5,000+ installations and counting." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-14 h-14 rounded-2xl bg-[#3a8fd4]/8 text-[#3a8fd4] flex items-center justify-center mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-8 pb-0 bg-white">
        <FadeIn>
          <div
            className="max-w-[1000px] mx-auto rounded-3xl px-8 py-16 lg:px-16 lg:py-20 text-center relative overflow-hidden -mb-20"
            style={{ background: "linear-gradient(135deg, #2f5e8f 0%, #3a8fd4 50%, #4a9de0 100%)" }}
          >
            <div className="absolute inset-[1px] rounded-[23px] pointer-events-none" style={{ border: "1px solid rgba(255,255,255,0.1)" }} />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Ready to join them?
              </h2>
              <p className="text-white/60 text-[16px] mb-10 max-w-md mx-auto leading-relaxed">
                Join 5,000+ families who trust Puragain Water every day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="bg-brand-red text-white rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-[#b00e0e] transition-colors shadow-lg shadow-black/15">
                  Get Started Today
                </Link>
                <a href="tel:8554092837" className="flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> 855-40-WATER
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
