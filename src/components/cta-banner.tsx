import Link from "next/link";

interface CtaBannerProps {
  headline: string;
  subtext?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant: "red" | "navy";
}

export function CtaBanner({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  variant,
}: CtaBannerProps) {
  const bg = variant === "red" ? "bg-brand-red" : "bg-[#3a8fd4]";
  const primaryClass =
    variant === "red"
      ? "bg-white text-brand-red hover:bg-gray-100"
      : "bg-brand-red text-white hover:bg-[#b00e0e]";
  const secondaryClass =
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/50";

  return (
    <section className={`${bg} py-20 px-6`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          {headline}
        </h2>
        {subtext && (
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold transition-colors duration-200 ${primaryClass}`}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold transition-colors duration-200 ${secondaryClass}`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
