import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Hero } from "@/components/hero";
import { ContaminantPills } from "@/components/contaminant-pills";
import {
  Star,
  ArrowRight,
  Phone,
  Droplets,
  DollarSign,
  Shield,
  Zap,
  ChevronDown,
  Clock,
  Award,
  HeartPulse,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ContaminantPills />


      {/* ═══ PROBLEM ═══ */}
      <section className="px-6 pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
              <div>
                <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">The Problem</span>
                <h2 className="font-heading text-4xl lg:text-[3.2rem] font-bold text-gray-900 leading-[1.1]" style={{ letterSpacing: "-0.03em" }}>
                  The water in your home isn&apos;t as clean as you think.
                </h2>
              </div>
              <div className="lg:pt-10">
                <p className="text-gray-500 text-[17px] leading-relaxed">
                  Tap water across America contains chlorine, lead, PFAS, bacteria, and microplastics. Even in systems rated &ldquo;safe.&rdquo;
                  Hard water silently damages your skin, hair, appliances, and plumbing. And most families spend $600+ a year on bottled water as a workaround.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Problem cards */}
          <StaggerContainer className="grid md:grid-cols-3 gap-5 mt-16">
            {[
              { icon: <Droplets className="w-5 h-5" />, title: "Hidden contaminants", desc: "Chlorine, lead, PFAS, bacteria, pesticides, and microplastics lurk in tap water across the country." },
              { icon: <HeartPulse className="w-5 h-5" />, title: "Health risks compound", desc: "Daily exposure to heavy metals and chemicals accumulates over time, affecting your family with every glass." },
              { icon: <DollarSign className="w-5 h-5" />, title: "A cost you're already paying", desc: "The average family spends $600+/year on bottled water. You're paying for clean water and still not getting it." },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <div className="rounded-2xl p-8 border border-gray-100 h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#3a8fd4]/8 text-[#3a8fd4] flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="font-heading text-[15px] font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ═══ DIVIDER ═══ */}
      <div className="max-w-[1100px] mx-auto px-6"><div className="border-t border-gray-100" /></div>


      {/* ═══ GUIDE + STATS ═══ */}
      <section className="px-6 py-24 lg:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            <FadeIn className="lg:col-span-3">
              <Image
                src="/images/brand/logo.png"
                alt="Puragain Water"
                width={160}
                height={40}
                className="h-8 w-auto object-contain mb-6"
              />
              <h2 className="font-heading text-3xl lg:text-[2.8rem] font-bold text-gray-900 mb-6" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Clean water.<br />
                With a clear conscience.
              </h2>
              <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
                Puragain Water is a family-owned business with over 30 years in the water industry.
                We&apos;ve helped thousands of families stop guessing and start trusting their water.
              </p>
              <p className="text-gray-500 text-[16px] leading-relaxed">
                Every system includes zero money down, free installation, a 7-year warranty, and a
                lifetime servicing plan. Annual testing, maintenance, and unlimited service calls. All included.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, label: "7-Year Warranty" },
                  { icon: <Zap className="w-5 h-5" />, label: "Free Installation" },
                  { icon: <Clock className="w-5 h-5" />, label: "Lifetime Service Plan" },
                  { icon: <Award className="w-5 h-5" />, label: "Annual Water Testing" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#3a8fd4]/8 text-[#3a8fd4] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-gray-900 text-[15px] font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Inline stats */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-gray-100">
            {[
              { number: "30+", label: "Years Experience" },
              { number: "5,000+", label: "Families Served" },
              { number: "$0", label: "Money Down" },
              { number: "∞", label: "Service Included" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">{s.number}</div>
                  <div className="text-gray-400 text-[11px] mt-2 uppercase tracking-[0.15em] font-medium">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ═══ DIVIDER ═══ */}
      <div className="max-w-[1100px] mx-auto px-6"><div className="border-t border-gray-100" /></div>


      {/* ═══ PRODUCTS ═══ */}
      <section className="px-6 py-24 lg:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">Water Filtration Systems</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
              Designed to protect your home.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid lg:grid-cols-3 gap-6">
            {[
              {
                href: "/products/reverse-osmosis",
                image: "/images/products/ro-lifestyle.jpeg",
                badge: "Most Popular",
                name: "5-Stage Reverse Osmosis",
                desc: "Removes 99% of contaminants from your kitchen tap. Compact under-sink installation.",
                price: "$26",
                priceOld: null,
              },
              {
                href: "/products/alkaline",
                image: "/images/products/alkaline-lifestyle.jpeg",
                badge: "Premium",
                name: "6-Stage Alkaline",
                desc: "Everything the RO does, plus alkaline mineral restoration. Raises pH to 9.5.",
                price: "$42",
                priceOld: null,
              },
              {
                href: "/products/whole-house",
                image: "/images/products/whole-house-lifestyle.jpeg",
                badge: "Complete Home",
                name: "Whole House System",
                desc: "Clean water from every tap, shower, and appliance. Salt-free conditioning.",
                price: "$74",
                priceOld: "$101",
              },
            ].map((p) => (
              <StaggerItem key={p.name}>
                <Link href={p.href} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 h-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-[#3a8fd4] px-3 py-1.5 rounded-full">
                      {p.badge}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3a8fd4] transition-colors">{p.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        {p.priceOld && <span className="text-gray-400 text-sm line-through mr-2">{p.priceOld}</span>}
                        <span className="text-brand-red text-xl font-bold">{p.price}<span className="text-gray-400 text-sm font-normal">/mo*</span></span>
                      </div>
                      <span className="text-[#3a8fd4] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-transform">
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-6">
            <p className="text-gray-400 text-xs">*Monthly payment may vary based on credit approval. Zero down, free installation on all systems.</p>
          </FadeIn>
        </div>
      </section>


      {/* ═══ HOW IT WORKS ═══ */}
      <section className="px-6 py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">The Plan</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
              Three steps. That&apos;s it.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { n: "01", title: "We test your water", desc: "A technician visits your home and tests on-site. You see exactly what's in your water. Free, no obligation." },
              { n: "02", title: "We recommend a system", desc: "Based on your results, not a sales script. The right system for your water, with financing available." },
              { n: "03", title: "We install & service for life", desc: "Professional installation. Every filter change, check-up, and repair. Covered forever." },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="text-center">
                  <div className="text-[#3a8fd4]/10 text-7xl font-bold mb-4 tracking-tight">{s.n}</div>
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-14">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-red text-white rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-[#b00e0e] transition-colors shadow-lg shadow-red-500/15">
              Schedule Your Free Test <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>


      {/* ═══ COMPARISON — The ONE blue accent section ═══ */}
      <section className="bg-[#3a8fd4] py-24 lg:py-28 px-6">
        <div className="max-w-[900px] mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">The Smarter Choice</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
              Bottled water vs. Puragain.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-5 text-white/30 text-[11px] uppercase tracking-wider font-medium w-1/3"></th>
                    <th className="p-5 text-white/40 text-[11px] uppercase tracking-wider font-medium text-center w-1/3">Bottled Water</th>
                    <th className="p-5 text-white text-[11px] uppercase tracking-wider font-bold text-center w-1/3 bg-white/5">Puragain Water</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { label: "Monthly cost", bottled: "$40+/mo", puragain: "$26/mo" },
                    { label: "Cost per gallon", bottled: "$1.40", puragain: "$0.01" },
                    { label: "Gallons per month", bottled: "25", puragain: "1,500" },
                    { label: "Water testing", bottled: "✗", puragain: "✓ Annual, free" },
                    { label: "Lifetime service", bottled: "✗", puragain: "✓ Included" },
                    { label: "7-year warranty", bottled: "✗", puragain: "✓ Included" },
                  ].map((row, i) => (
                    <tr key={row.label} className={i < 5 ? "border-b border-white/5" : ""}>
                      <td className="p-5 text-white/60 font-medium">{row.label}</td>
                      <td className="p-5 text-white/30 text-center">{row.bottled}</td>
                      <td className="p-5 text-white font-semibold text-center bg-white/5">{row.puragain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="text-center mt-10">
            <p className="text-white/40 text-sm mb-8">
              Just 1 penny per gallon of pure, clean water. Right from your tap.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#3a8fd4] rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-gray-50 transition-colors">
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>


      {/* ═══ REVIEWS ═══ */}
      <section className="px-6 py-24 lg:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">Reviews</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
              Don&apos;t take our word for it.
            </h2>
            <div className="flex items-center justify-center gap-1 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-gray-900">5.0 on Yelp</span>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Shreyans P.", quote: "Puragain Water's customer service and installation were absolutely amazing! The quality of the water in the entire household is also incredible..." },
              { name: "Candizzle L.", quote: "The water is great and much cheaper than buying cases of water. The service was top notch from start to finish..." },
              { name: "Angelina M.", quote: "Love Love my whole house filtered water... No more hard water on my shower doors, in my dishwasher, or anywhere else..." },
            ].map((r) => (
              <StaggerItem key={r.name}>
                <div className="rounded-2xl p-8 h-full flex flex-col border border-gray-100">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-[15px] mb-6 flex-1 leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <p className="text-gray-900 text-sm font-semibold">
                    {r.name} <span className="text-gray-400 font-normal text-xs ml-1">via Yelp</span>
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-8">
            <Link href="/reviews" className="text-[#3a8fd4] text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-3 transition-transform">
              Read all reviews on Yelp <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>


      {/* ═══ DIVIDER ═══ */}
      <div className="max-w-[1100px] mx-auto px-6"><div className="border-t border-gray-100" /></div>


      {/* ═══ FAQ ═══ */}
      <section id="faq" className="px-6 py-24 lg:py-32 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">FAQ</span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
              Frequently asked questions.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {[
                { q: "What exactly does your system remove?", a: "Our reverse osmosis systems remove up to 99% of contaminants including chlorine, lead, PFAS, fluoride, arsenic, bacteria, pesticides, microplastics, herbicides, radium, pharmaceuticals, and more." },
                { q: "How much does it cost?", a: "Systems start at just $26/month with zero money down and free professional installation. Every system includes a 7-year warranty and a lifetime servicing plan at no extra cost." },
                { q: "What's included in the lifetime servicing plan?", a: "Annual water testing, annual maintenance visits with filter checks and system tune-ups, unlimited service calls at no cost, and 24/7 live support. All included for the life of your system." },
                { q: "How long does installation take?", a: "Most installations are completed in 1-2 hours by our certified technicians. No plumber needed. We handle everything." },
                { q: "Do I need to own my home?", a: "While homeowners are our most common customers, renters can also qualify with landlord approval. Our under-sink systems are compact and non-invasive." },
                { q: "Will it affect my water pressure?", a: "No. Our reverse osmosis systems use a dedicated faucet for drinking water, so your existing water pressure is completely unaffected. Whole house systems maintain full flow." },
                { q: "How often do filters need replacing?", a: "Filters are typically replaced once a year and it's included in your lifetime servicing plan. Our technician handles it during your annual maintenance visit." },
                { q: "Is the water testing really free?", a: "Yes. A certified technician visits your home, tests your water on-site, and shows you the results. No cost, no obligation, no pressure." },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-[15px] font-semibold text-gray-900 hover:text-[#3a8fd4] transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ═══ CTA — The ONE red accent ═══ */}
      <section className="bg-brand-red py-20 lg:py-24 px-6">
        <FadeIn className="max-w-[700px] mx-auto text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
            Stop guessing. Start drinking clean.
          </h2>
          <p className="text-white/70 text-[16px] mb-10">
            Join 5,000+ families who trust Puragain Water every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-white text-brand-red rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-gray-50 transition-colors">
              Get Started Today
            </Link>
            <a href="tel:8554092837" className="flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> 855-409-2837
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
