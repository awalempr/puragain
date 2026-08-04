// Content hub — pillar + cluster articles. Answer-format for search + AI citation.

export type Guide = {
  slug: string;
  metaTitle: string;
  title: string;
  description: string;
  category: string;
  intro: string;
  sections: { h: string; p: string[] }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "is-san-diego-tap-water-safe",
    metaTitle: "Is San Diego Tap Water Safe to Drink? (2026)",
    title: "Is San Diego tap water safe to drink?",
    description:
      "San Diego tap water meets legal safety standards, but it's hard, chloramine-treated, and can carry trace contaminants. Here's what's really in it and whether you should filter.",
    category: "Water Quality",
    intro:
      "San Diego tap water meets federal and California safety standards — but “meets standards” isn't the same as “ideal.” The region imports roughly 85% of its water and disinfects it with chloramine, which leaves hardness minerals, a chlorine taste, and trace contaminants that a home filtration system removes.",
    sections: [
      { h: "Where San Diego's water comes from", p: [
        "About 85% of San Diego County's water is imported from the Colorado River and Northern California via the State Water Project, then blended and disinfected before it reaches your tap. Imported water is mineral-rich, which is the main reason San Diego water is hard.",
      ]},
      { h: "What's actually in it", p: [
        "Beyond hardness minerals (calcium and magnesium), San Diego water commonly contains chloramine (a chlorine-ammonia disinfectant), disinfection byproducts like trihalomethanes, and — depending on your home's plumbing age — trace lead or copper from your own pipes. Some regional supplies have also tested positive for PFAS.",
      ]},
      { h: "So is it safe to drink?", p: [
        "Legally, yes — it's tested and compliant. But many households still filter it because of the taste, the hardness, and the trace contaminants that legal limits allow. A reverse-osmosis system removes up to 99% of these at your kitchen tap, and a whole-house conditioner handles the hardness everywhere else.",
      ]},
      { h: "How to know what's in your water", p: [
        "Your exact water quality depends on your specific neighborhood supply and your home's plumbing. The only way to know for sure is to test it. Puragain Water offers a free in-home water test — a technician tests your water on-site and shows you the results with no obligation.",
      ]},
    ],
    faqs: [
      { q: "Is San Diego water hard?", a: "Yes. San Diego imports mineral-rich water, so it's considered hard — often 15+ grains per gallon — which causes scale, spots, and dry skin." },
      { q: "Does San Diego use chloramine?", a: "Many San Diego County utilities disinfect with chloramine rather than chlorine. It's harder to remove and affects taste and smell." },
      { q: "Should I filter San Diego tap water?", a: "It's a personal choice, but most people filter for taste, hardness, and to remove trace contaminants that legal limits still allow. Reverse osmosis removes up to 99%." },
    ],
    related: [
      { label: "5-Stage Reverse Osmosis", href: "/products/reverse-osmosis" },
      { label: "Water Filtration in San Diego", href: "/water-filtration/san-diego" },
      { label: "Why SoCal water is so hard", href: "/guides/hard-water-southern-california" },
    ],
  },
  {
    slug: "hard-water-southern-california",
    metaTitle: "Why Is Southern California Water So Hard? (And How to Fix It)",
    title: "Why is Southern California water so hard — and how to fix it?",
    description:
      "Southern California has some of the hardest water in the country. Here's what causes it, what it does to your home, and how to fix hard water for good.",
    category: "Hard Water",
    intro:
      "Southern California has some of the hardest water in the country — often 15 to 25+ grains per gallon. That hardness comes from calcium and magnesium in the imported supply, and it's behind spotty dishes, scale buildup, dry skin, and appliances that fail years early.",
    sections: [
      { h: "What makes water “hard”", p: [
        "Hardness is simply dissolved calcium and magnesium. It's measured in grains per gallon (gpg): under 3 is soft, 7–10 is hard, and much of Southern California runs well above that — sometimes past 20 gpg.",
      ]},
      { h: "Why SoCal water is so hard", p: [
        "The region relies on imported Colorado River water, which picks up minerals as it travels. In the Inland Empire, hardness is even higher, and many homes are on wells that add their own mineral load.",
      ]},
      { h: "What hard water does to your home", p: [
        "Hard water leaves scale inside your pipes and water heater (raising energy bills), spots your glassware, creates soap scum, dries out skin and hair, stiffens laundry, and shortens the life of dishwashers, washing machines, and water heaters.",
      ]},
      { h: "How to fix hard water", p: [
        "A whole-house system treats hardness before it reaches any tap. Traditional softeners use salt and produce brine waste; Puragain's salt-free conditioning uses template-assisted crystallization to neutralize hardness without salt, wasted water, or the slippery feel — protecting your plumbing, appliances, skin, and hair.",
      ]},
    ],
    faqs: [
      { q: "How hard is Southern California water?", a: "It varies by area but is generally hard to very hard — often 15–25+ grains per gallon, among the hardest in the U.S." },
      { q: "Is hard water safe to drink?", a: "Yes, hard water is safe to drink. The problem is what it does to your home, skin, and appliances — not your health." },
      { q: "Salt softener or salt-free conditioner?", a: "Salt softeners remove minerals but use salt and waste water. Salt-free conditioners neutralize scale without salt or waste — better for most SoCal homes and the environment." },
    ],
    related: [
      { label: "Whole House System", href: "/products/whole-house" },
      { label: "RO vs. Water Softener", href: "/guides/reverse-osmosis-vs-water-softener" },
      { label: "Water Filtration in Temecula", href: "/water-filtration/temecula" },
    ],
  },
  {
    slug: "reverse-osmosis-vs-water-softener",
    metaTitle: "Reverse Osmosis vs. Water Softener: Which Do You Need?",
    title: "Reverse osmosis vs. water softener: which do you need?",
    description:
      "Reverse osmosis and water softeners solve different problems. Here's the difference, and how to know whether you need one, the other, or both.",
    category: "Buying Guide",
    intro:
      "Reverse osmosis and water softeners solve two different problems. Reverse osmosis purifies your drinking water; a softener or conditioner treats hardness for your whole home. Most Southern California homes benefit from both.",
    sections: [
      { h: "What reverse osmosis does", p: [
        "A reverse-osmosis (RO) system installs at one point — usually your kitchen sink — and forces water through a membrane that removes up to 99% of contaminants: lead, PFAS, chlorine, arsenic, and more. It's about purity for drinking and cooking.",
      ]},
      { h: "What a softener or conditioner does", p: [
        "A whole-house softener or salt-free conditioner treats hardness for every tap, shower, and appliance in the home. It doesn't purify drinking water — it protects your plumbing and improves how water feels on your skin and clothes.",
      ]},
      { h: "Do you need one or both?", p: [
        "If your main concern is drinking-water quality and taste, start with reverse osmosis. If it's scale, dry skin, spotty dishes, and appliance wear, start with whole-house conditioning. For complete coverage — pure drinking water and soft water everywhere — many homes install both.",
      ]},
      { h: "Salt vs. salt-free", p: [
        "Traditional softeners use salt and flush brine down the drain, wasting water. Salt-free conditioning uses template-assisted crystallization to neutralize hardness with no salt, no waste water, and no slippery feel — the approach Puragain uses for whole-house treatment.",
      ]},
    ],
    faqs: [
      { q: "Can I have both an RO system and a softener?", a: "Yes, and many homes do — the softener protects the whole house while RO purifies your drinking water at the kitchen tap." },
      { q: "Does reverse osmosis soften water?", a: "Only at that one tap. RO is point-of-use, so it won't protect your showers, water heater, or appliances — that's what a whole-house system is for." },
      { q: "Does a softener purify drinking water?", a: "No. A softener treats hardness but doesn't remove contaminants like lead or PFAS. For pure drinking water you need reverse osmosis." },
    ],
    related: [
      { label: "5-Stage Reverse Osmosis", href: "/products/reverse-osmosis" },
      { label: "Whole House System", href: "/products/whole-house" },
      { label: "Cost of a filtration system", href: "/guides/water-filtration-cost" },
    ],
  },
  {
    slug: "what-is-pfas",
    metaTitle: "What Is PFAS and How to Remove It From Your Water?",
    title: "What is PFAS and how do you remove it from your water?",
    description:
      "PFAS 'forever chemicals' have been found in water supplies nationwide. Here's what they are, why they matter, and how reverse osmosis removes them at home.",
    category: "Contaminants",
    intro:
      "PFAS — often called “forever chemicals” — are synthetic compounds that don't break down naturally and have been found in water supplies across the country, including parts of California. Reverse osmosis is one of the most effective ways to remove them at home.",
    sections: [
      { h: "What PFAS are", p: [
        "PFAS (per- and polyfluoroalkyl substances) are man-made chemicals used for decades in nonstick cookware, water-repellent fabrics, and food packaging. They're extremely persistent — they don't degrade in the environment or the human body, which is why they're called “forever chemicals.”",
      ]},
      { h: "Why PFAS matter", p: [
        "In 2024 the EPA set its first enforceable national drinking-water limits for several PFAS compounds, reflecting research linking long-term exposure to health concerns. Because they accumulate over time, reducing exposure through your drinking water matters.",
      ]},
      { h: "PFAS in California water", p: [
        "PFAS have been detected in a number of California water sources, and testing and regulation are ongoing. Levels vary by supply, so local testing is the only way to know your exposure.",
      ]},
      { h: "How to remove PFAS at home", p: [
        "Reverse osmosis is one of the most reliable point-of-use methods for reducing PFAS, along with certain high-grade carbon filters. Puragain's multi-stage RO systems combine carbon and an RO membrane to remove up to 99% of contaminants, including PFAS, from your drinking water.",
      ]},
    ],
    faqs: [
      { q: "Does reverse osmosis remove PFAS?", a: "Yes. Reverse osmosis is one of the most effective home methods for reducing PFAS in drinking water." },
      { q: "Do standard carbon filters remove PFAS?", a: "Only high-grade activated carbon reduces PFAS effectively, and not as reliably as reverse osmosis. Basic pitcher and fridge filters are not designed for it." },
      { q: "Does boiling water remove PFAS?", a: "No. Boiling does not remove PFAS — it can actually concentrate them as water evaporates." },
    ],
    related: [
      { label: "5-Stage Reverse Osmosis", href: "/products/reverse-osmosis" },
      { label: "Is San Diego tap water safe?", href: "/guides/is-san-diego-tap-water-safe" },
    ],
  },
  {
    slug: "well-water-treatment",
    metaTitle: "Well Water Treatment in San Diego & Riverside County",
    title: "Well water treatment: what you need to know",
    description:
      "Homes on well water in Fallbrook, Ramona, Valley Center, and rural Riverside County face unique challenges. Here's how to test and treat well water properly.",
    category: "Well Water",
    intro:
      "Homes on well water — common in areas like Fallbrook, Ramona, Valley Center, Bonsall, and rural Riverside County — face different challenges than city water. Well water can carry hardness, iron, sediment, and bacteria, and it needs testing before you choose a treatment system.",
    sections: [
      { h: "Common well water issues", p: [
        "Well water frequently has very high hardness, iron and manganese (which stain fixtures and laundry), sediment, a sulfur “rotten egg” smell, and sometimes bacteria or elevated nitrates. Because it isn't municipally treated, quality varies well to well.",
      ]},
      { h: "Why testing comes first", p: [
        "Unlike city water, there's no utility report for a private well — what's in your neighbor's well may be very different from yours. A proper water test identifies exactly what needs treating so you don't over- or under-build the system.",
      ]},
      { h: "Treatment options for wells", p: [
        "A typical well setup layers a sediment pre-filter, hardness conditioning, and reverse osmosis for drinking water, plus disinfection (such as UV) where bacteria are a concern. The right combination depends entirely on your test results.",
      ]},
      { h: "Well-water areas we serve", p: [
        "Puragain Water tests and treats well water throughout North County San Diego and southwest Riverside County, including Fallbrook, Ramona, Valley Center, and Bonsall.",
      ]},
    ],
    faqs: [
      { q: "Is well water safe to drink?", a: "It can be, but it isn't municipally tested, so it should be tested for bacteria, nitrates, hardness, and metals before you rely on it." },
      { q: "Do I need a softener for well water?", a: "Often yes — well water is frequently very hard — but a test determines whether you also need iron removal, sediment filtration, or disinfection." },
      { q: "Can reverse osmosis treat well water?", a: "Yes, for drinking water, usually paired with pre-filtration to protect the RO membrane from sediment and iron." },
    ],
    related: [
      { label: "Water Filtration in Fallbrook", href: "/water-filtration/fallbrook" },
      { label: "Water Filtration in Ramona", href: "/water-filtration/ramona" },
      { label: "Whole House System", href: "/products/whole-house" },
    ],
  },
  {
    slug: "water-filtration-cost",
    metaTitle: "How Much Does a Home Water Filtration System Cost?",
    title: "How much does a home water filtration system cost?",
    description:
      "Home water filtration typically runs $25–$75/month with financing (subject to credit approval), or can be bought outright. Here's what drives the cost and what's included.",
    category: "Buying Guide",
    intro:
      "A home water filtration system typically costs between $25 and $75 per month with financing (subject to credit approval), or can be purchased outright. With Puragain, that price includes professional installation and a lifetime service plan — not just the equipment.",
    sections: [
      { h: "What drives the cost", p: [
        "The two biggest factors are the type of system (a point-of-use reverse-osmosis unit costs less than whole-house treatment) and your home — its size, plumbing, and installation complexity.",
      ]},
      { h: "Puragain pricing", p: [
        "Reverse osmosis starts around $26/month, the 6-stage alkaline system around $42/month, and whole-house treatment around $74/month — all with zero money down, subject to credit approval. Systems can also be purchased outright.",
      ]},
      { h: "What's included in the price", p: [
        "Every system includes free professional installation, a 7-year warranty, and a lifetime service plan: annual filter changes, annual water testing, annual maintenance, and unlimited service calls. That ongoing service is a real part of the value, not an add-on.",
      ]},
      { h: "Filtration vs. bottled water", p: [
        "Households that buy bottled water often spend more over a few years than a filtration system costs — with the added hassle of hauling and storing cases, and the plastic waste. Filtration gives you unlimited clean water from your own tap.",
      ]},
    ],
    faqs: [
      { q: "How much does it cost per month?", a: "Roughly $26–$74/month depending on the system, with zero money down (subject to credit approval)." },
      { q: "Is installation extra?", a: "No. Professional installation is included in the price on every system." },
      { q: "Is financing available?", a: "Yes — zero-money-down monthly financing is available, subject to credit approval. Systems can also be purchased outright." },
    ],
    related: [
      { label: "5-Stage Reverse Osmosis", href: "/products/reverse-osmosis" },
      { label: "6-Stage Alkaline", href: "/products/alkaline" },
      { label: "Book a Free Water Test", href: "/contact" },
    ],
  },
  {
    slug: "signs-of-hard-water",
    metaTitle: "7 Signs You Have Hard Water at Home",
    title: "7 signs you have hard water at home",
    description:
      "Spotty dishes, soap scum, dry skin, scale on fixtures — these are classic signs of hard water. Here's how to spot it and what to do about it.",
    category: "Hard Water",
    intro:
      "Hard water leaves telltale signs around your home. If you notice spotty dishes, soap scum, dry skin, or scale on your fixtures, dissolved calcium and magnesium are the likely cause — and Southern California's water is some of the hardest in the country.",
    sections: [
      { h: "The 7 signs", p: [
        "1. Spotty, cloudy glassware straight out of the dishwasher. 2. Soap scum and film on tubs, tile, and shower doors. 3. Dry, itchy skin and dull hair after showering. 4. White scale crust on faucets and showerheads. 5. Stiff, scratchy laundry. 6. Reduced water pressure from clogged fixtures. 7. Water heaters and appliances failing earlier than they should.",
      ]},
      { h: "Why it happens", p: [
        "All of these come from the same source: dissolved calcium and magnesium that precipitate out as scale and react with soap. The higher the hardness (grains per gallon), the more pronounced the signs.",
      ]},
      { h: "What to do about it", p: [
        "A quick test confirms your hardness level, and a whole-house conditioner treats it at the source so it never reaches your taps, appliances, or skin. Puragain's free in-home test measures your hardness and shows you exactly what you're dealing with.",
      ]},
    ],
    faqs: [
      { q: "Is hard water dangerous to drink?", a: "No — hard water is safe to drink. The issue is the damage it does to your home, appliances, skin, and hair." },
      { q: "How can I test for hard water?", a: "A free in-home water test measures your exact hardness in grains per gallon and identifies other issues at the same time." },
      { q: "Will a system fix all these signs?", a: "Yes — whole-house conditioning addresses the root cause (hardness), which resolves the scale, spots, soap scum, and dry-skin symptoms over time." },
    ],
    related: [
      { label: "Whole House System", href: "/products/whole-house" },
      { label: "Why SoCal water is so hard", href: "/guides/hard-water-southern-california" },
    ],
  },
  {
    slug: "chlorine-vs-chloramine",
    metaTitle: "Chlorine vs. Chloramine in Your Tap Water",
    title: "Chlorine vs. chloramine: what's the difference?",
    description:
      "Many Southern California utilities use chloramine instead of chlorine. Here's the difference, how it affects your water, and how to remove it at home.",
    category: "Water Quality",
    intro:
      "Many Southern California utilities disinfect with chloramine instead of chlorine. Both keep water safe from pathogens, but chloramine is harder to remove and can affect taste, smell, and sensitive uses like aquariums.",
    sections: [
      { h: "The difference", p: [
        "Chlorine is a fast-acting disinfectant that dissipates relatively quickly. Chloramine is chlorine combined with ammonia — it's more stable, lasts longer in the pipes, and produces fewer regulated byproducts, which is why many utilities switched to it.",
      ]},
      { h: "How it affects your home", p: [
        "Chloramine can give water a distinct taste and smell, and it bothers some people's skin and eyes. It's also harmful to fish and must be fully removed for aquariums and for kidney-dialysis use.",
      ]},
      { h: "How to remove chloramine", p: [
        "Chloramine is more stubborn than chlorine — standard carbon filters and most fridge filters only partially remove it. Catalytic (high-grade) carbon and reverse osmosis are far more effective, which is why Puragain's multi-stage RO systems use carbon stages ahead of the RO membrane.",
      ]},
    ],
    faqs: [
      { q: "Does San Diego use chloramine?", a: "Many San Diego County and Southern California utilities use chloramine. Check your local water provider's report, or test your water to be sure." },
      { q: "Does reverse osmosis remove chloramine?", a: "Yes — a multi-stage RO system with catalytic carbon removes chloramine effectively at the tap." },
      { q: "Do refrigerator filters remove chloramine?", a: "Only partially. Basic carbon filters aren't designed to fully remove chloramine — catalytic carbon or RO does a far better job." },
    ],
    related: [
      { label: "5-Stage Reverse Osmosis", href: "/products/reverse-osmosis" },
      { label: "Is San Diego tap water safe?", href: "/guides/is-san-diego-tap-water-safe" },
    ],
  },
];

export const GUIDE_MAP: Record<string, Guide> = Object.fromEntries(GUIDES.map((g) => [g.slug, g]));
