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
  {
    "slug": "is-reverse-osmosis-water-healthy",
    "metaTitle": "Is Reverse Osmosis Water Healthy? (2026)",
    "title": "Is Reverse Osmosis Water Safe and Healthy to Drink?",
    "description": "Yes, reverse osmosis water is safe and healthy to drink. Here is the honest truth about mineral removal, remineralization, and who benefits most.",
    "category": "Reverse Osmosis",
    "intro": "Yes, reverse osmosis (RO) water is safe and healthy to drink. It is some of the purest drinking water you can produce at home, removing lead, PFAS, nitrates, chlorine byproducts, and other contaminants. The common concern is that RO also strips out beneficial minerals like calcium and magnesium, which is true, but the amount removed is small compared to what you get from food, and remineralization or a 6-stage alkaline system easily adds those minerals back.",
    "sections": [
      {
        "h": "What reverse osmosis actually removes from your water",
        "p": [
          "Reverse osmosis pushes water through a semipermeable membrane with pores small enough to block particles that standard carbon filters miss. That includes lead, arsenic, nitrates, fluoride, PFAS forever chemicals, chromium-6, and disinfection byproducts, along with the dissolved salts that make water taste flat or metallic. For families on Southern California municipal water, that means fewer contaminants of concern and noticeably cleaner-tasting water straight from the tap.",
          "The same membrane that blocks those contaminants also removes a portion of the naturally dissolved minerals in the water, including calcium and magnesium. This is where the healthy minerals concern comes from, and it is a fair question worth answering honestly rather than dismissing."
        ]
      },
      {
        "h": "The mineral concern, answered honestly",
        "p": [
          "It is true that RO water contains fewer dissolved minerals than tap or spring water. The important context is how small a share of your daily minerals actually comes from water in the first place. The vast majority of the calcium, magnesium, and potassium your body uses comes from food such as leafy greens, dairy, nuts, beans, and whole grains, not from what is dissolved in your glass of water. For a person eating a reasonably balanced diet, the minerals lost through RO are a minor contribution that is easily covered elsewhere.",
          "The World Health Organization has noted that demineralized water is not ideal as a sole long-term source in situations where diet is poor and water is the main mineral source. That is a real consideration, which is exactly why remineralization exists as an option. It is not a reason to avoid RO, and it is not a claim that RO water is dangerous. Represented fairly, the takeaway is simple: RO water is safe to drink, and if you want the minerals back, adding them is straightforward."
        ]
      },
      {
        "h": "How remineralization and 6-stage alkaline systems add minerals back",
        "p": [
          "Many modern RO systems include a remineralization stage that reintroduces calcium and magnesium after filtration. This gives you the contaminant removal of RO along with mineral content and a smoother, less flat taste. A 6-stage alkaline RO system takes this a step further by passing the purified water through a mineral and alkaline cartridge that adds beneficial minerals back and raises the pH, producing water many people find crisper and easier to drink.",
          "It is worth being clear about the health claims here. The evidence that drinking higher-pH alkaline water improves health beyond ordinary hydration is limited and contested, so we do not promise medical benefits from alkalinity itself. What a remineralized or alkaline stage reliably delivers is better taste and the return of the minerals RO removes, which directly addresses the concern most people actually have."
        ]
      },
      {
        "h": "Who benefits most from reverse osmosis",
        "p": [
          "RO is a strong fit for households that want the broadest contaminant reduction, especially where lead plumbing, PFAS, high nitrates, or hard mineral taste are concerns. Families with young children, anyone preparing infant formula, and people who simply want the cleanest possible drinking and cooking water tend to value the peace of mind most. It is also ideal if you currently buy bottled water, since a home system delivers comparable purity at a fraction of the ongoing cost.",
          "If your main issue is scale buildup and hard water throughout the house rather than drinking-water quality, a whole-house salt-free conditioner addresses that at every tap, and it pairs well with an RO system at the kitchen sink. A free in-home water test is the fastest way to see exactly what is in your water and whether RO, alkaline RO, or a combined setup makes the most sense for your home."
        ]
      },
      {
        "h": "Is RO water better than bottled water?",
        "p": [
          "In most cases, yes. A quality RO system produces water that meets or exceeds the purity of typical bottled water, and you control the process instead of trusting an unlabeled source. You also avoid the recurring expense and plastic waste of bottled water, since RO delivers on-demand filtered water directly from your tap. For a family that goes through several cases a month, a home system usually pays for itself over time.",
          "Bottled water is not held to a single universal purity standard, and some is simply filtered municipal water. With a properly maintained RO system you know exactly what stages the water passes through and when the filters were last changed, which is a meaningful advantage for consistency and trust."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does reverse osmosis remove all the healthy minerals from water?",
        "a": "RO removes a portion of dissolved minerals like calcium and magnesium, but not all, and the amount is small compared to what you get from food. If you want those minerals back, a remineralization stage or a 6-stage alkaline system adds them in after filtration."
      },
      {
        "q": "Is it safe to drink reverse osmosis water every day?",
        "a": "Yes. Drinking RO water daily is safe for the whole family, including children. Most of your daily minerals come from food, not water, so the minerals RO removes are easily covered by a normal diet, and remineralization is available if you prefer added mineral content."
      },
      {
        "q": "Is alkaline reverse osmosis water actually healthier?",
        "a": "Alkaline RO water reliably tastes smoother and returns the minerals RO removes. The evidence that a higher pH provides health benefits beyond normal hydration is limited and debated, so we recommend it mainly for taste and remineralization rather than any specific medical claim."
      },
      {
        "q": "How do I know if reverse osmosis is right for my home?",
        "a": "A free in-home water test shows exactly what is in your tap water. From there we can recommend standard RO, 6-stage alkaline RO, a whole-house conditioner, or a combination based on your actual water and your household's priorities."
      }
    ],
    "related": [
      {
        "label": "Reverse Osmosis Systems",
        "href": "/products/reverse-osmosis"
      },
      {
        "label": "6-Stage Alkaline System",
        "href": "/products/alkaline"
      },
      {
        "label": "Book a Free In-Home Water Test",
        "href": "/contact"
      }
    ]
  },
  {
    "slug": "water-filtration-financing",
    "metaTitle": "Water Filtration Financing in CA (2026)",
    "title": "How Do You Finance a Home Water Filtration System in California?",
    "description": "Learn how to finance a home water filtration system in California. Monthly plans run about $26 to $74 with zero money down, subject to credit approval.",
    "category": "Buying Guide",
    "intro": "You can finance a home water filtration system in California with monthly payments of roughly 26 to 74 dollars and zero money down, subject to credit approval. Financing spreads the cost of the equipment, professional installation, and service over time instead of paying the full amount upfront. At PurAgain Water, every financed system still includes the same lifetime service plan and 7-year warranty as a cash purchase.",
    "sections": [
      {
        "h": "Financing vs. paying upfront: which makes sense for you",
        "p": [
          "Paying upfront means one lump sum and no monthly commitment, which appeals to homeowners who prefer to own the system outright from day one and avoid any credit application. It is the simplest path if you have the cash set aside and want to close the purchase in a single step.",
          "Financing makes sense if you would rather keep your savings intact and match the monthly payment to the value your family gets from cleaner water every day. Instead of one large charge, you pay a predictable amount each month while using the system from the first day it is installed. Neither option changes the equipment, the warranty, or the service you receive. The right choice comes down to your budget and how you prefer to manage a home improvement expense."
        ]
      },
      {
        "h": "What the 26 to 74 dollar monthly range depends on",
        "p": [
          "The monthly payment lands somewhere in the roughly 26 to 74 dollar range based on which system you choose and the terms of your financing. A single-point reverse osmosis or 6-stage alkaline drinking water system sits at the lower end because it treats water at one tap. A whole-house salt-free conditioning system, which treats every faucet, shower, and appliance in the home, sits higher because it is a larger installation.",
          "The exact figure also depends on your financing term and the rate you qualify for, which is why every quote is confirmed after a free in-home water test. That visit lets us recommend the right system for your actual water and your home layout, so the monthly number you see is real rather than a guess. All financing is subject to credit approval."
        ]
      },
      {
        "h": "Zero money down and what credit approval means",
        "p": [
          "Zero money down means you do not pay anything at the time of installation to start using your system. Approved homeowners begin their monthly plan after the system is installed, which removes the upfront barrier that stops many families from improving their water sooner.",
          "Subject to credit approval is an honest condition, not fine print we hide. Financing is offered through a lending partner, and approval and your specific rate depend on your credit profile. Some homeowners qualify for the lowest payments while others see terms in the higher part of the range. There is no cost or obligation to find out where you stand, and we will always show you the paying-upfront option alongside financing so you can compare."
        ]
      },
      {
        "h": "What is included with every system",
        "p": [
          "Financing at PurAgain Water covers far more than the equipment. Every system includes professional installation by our own technicians, so there is no separate labor bill and no hunting for a plumber. Your monthly payment reflects a complete, installed, working system.",
          "You also receive a lifetime service plan and a 7-year warranty on the equipment. The service plan keeps your system performing over the years with filter changes and maintenance handled by our team, and the warranty protects you against defects for nearly a decade. These are the same benefits whether you finance or pay upfront, so choosing a monthly plan never means giving up support or coverage."
        ]
      },
      {
        "h": "How to get an accurate financing quote",
        "p": [
          "The most reliable way to know your real monthly payment is to start with a free in-home water test. A technician measures what is actually in your water, reviews your plumbing, and recommends the system that fits your household. From there you get a precise quote with both the upfront price and the financed monthly option.",
          "There is no pressure and no charge for the visit. PurAgain Water serves homeowners across Southern California from our base in Escondido, and the test typically takes under an hour. Renters are not eligible for financing on a permanent installed system, so this program is designed for homeowners planning to stay in their home."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Do I need perfect credit to finance a water filtration system?",
        "a": "No. Financing is subject to credit approval, and a range of credit profiles can qualify. Your credit affects the rate and term, which is why payments span roughly 26 to 74 dollars per month. Checking your options carries no cost or obligation."
      },
      {
        "q": "Is anything really zero money down?",
        "a": "Yes. Approved homeowners pay nothing at installation and begin their monthly plan afterward. There is no down payment required to start using the system, though all financing remains subject to credit approval."
      },
      {
        "q": "Does financing change the warranty or service I get?",
        "a": "No. A financed system includes the exact same lifetime service plan and 7-year warranty as paying upfront, plus professional installation. Choosing a monthly plan never reduces your coverage or support."
      },
      {
        "q": "Can renters finance a system?",
        "a": "No. Financing and installation are for homeowners only, since the system is permanently installed in the home. If you own your home in Southern California, you can schedule a free in-home water test to see your options."
      }
    ],
    "related": [
      {
        "label": "How Much Does a Water Filtration System Cost?",
        "href": "/guides/water-filtration-cost"
      },
      {
        "label": "Reverse Osmosis Drinking Water Systems",
        "href": "/products/reverse-osmosis"
      },
      {
        "label": "Book a Free In-Home Water Test",
        "href": "/contact"
      }
    ]
  },
  {
    "slug": "how-to-choose-water-filtration-system",
    "metaTitle": "How to Choose a Water Filtration System (2026)",
    "title": "How Do You Choose the Right Home Water Filtration System in 2026?",
    "description": "A 2026 buyer's guide to choosing a home water filtration system: reverse osmosis vs whole-house vs alkaline, sizing, what to ask, and red flags to avoid.",
    "category": "Buying Guide",
    "intro": "",
    "sections": [
      {
        "h": "Start With a Water Test, Not a Product",
        "p": [
          "The single most common buying mistake is picking a system before you know what is actually in your water. Chlorine taste, hardness scale, nitrates, PFAS, and total dissolved solids are all different problems, and no single filter solves all of them. A test tells you what you are treating so you do not overpay for capacity you do not need or, worse, install something that does nothing for your specific water.",
          "If you are on a private well, ask for a laboratory analysis. If you are on municipal water, your utility publishes an annual Consumer Confidence Report that lists what it detects, though that report reflects water at the treatment plant and not what picks up from aging pipes on the way to your home. A free in-home test that samples water at your own tap gives you the most honest picture, and any reputable company should offer one before recommending anything."
        ]
      },
      {
        "h": "Reverse Osmosis vs Whole-House vs Alkaline: What Each One Actually Does",
        "p": [
          "Reverse osmosis (RO) forces water through a membrane that removes dissolved solids, and it is the strongest option for drinking water. A quality RO system reduces a broad range of contaminants including many that carbon filters miss, such as nitrates, arsenic, fluoride, and PFAS. It installs under the kitchen sink and treats the water you drink and cook with, not the whole house. A 6-stage alkaline system is RO with added remineralization and pH adjustment stages, so you get the same strong filtration while adding back minerals like calcium and magnesium after the membrane strips them out.",
          "A whole-house system treats water where it enters your home, so every shower, faucet, and appliance benefits. In Southern California the most common whole-house need is hardness. A salt-free conditioner changes how minerals behave so they are less likely to form scale, which protects water heaters and plumbing without adding sodium or wasting water on regeneration cycles. Whole-house conditioning and point-of-use RO are not competitors. They solve different problems, and many homes use both: a conditioner for scale and skin, plus RO or alkaline at the sink for drinking."
        ]
      },
      {
        "h": "Sizing: Match the System to Your Household and Water Use",
        "p": [
          "Sizing matters most for whole-house equipment. The key number is peak flow rate, measured in gallons per minute, which depends on how many bathrooms and fixtures might run at once. An undersized unit causes pressure drops when two showers run together, while an oversized one is money spent on capacity you never use. A good installer calculates this from your fixture count and family size rather than selling one generic box to every home.",
          "For drinking-water systems, sizing is about daily volume and storage. Most under-sink RO units produce enough for a family's drinking and cooking, and a properly sized tank keeps up with normal demand. If you have a large household or want RO plumbed to a refrigerator or a second tap, mention that up front so the system and tank are specified correctly. The right size is the one built around your actual home, not a package number pulled off a shelf."
        ]
      },
      {
        "h": "What to Look For in a Quality System and Company",
        "p": [
          "On the equipment side, look for independent certification of performance claims. NSF/ANSI standards (for example, Standard 58 for reverse osmosis and Standard 42 or 53 for carbon filtration) confirm a system was tested to reduce what the label says it reduces. Ask which specific contaminants the system is certified to reduce, since a vague promise to make water cleaner is not the same as a verified reduction claim for the substances in your water.",
          "On the company side, the fundamentals matter more than the sales pitch. Look for professional installation rather than a drop-ship box, a clear warranty (a 7-year warranty and a lifetime service plan signal a company that expects to stand behind the work), transparent filter-replacement schedules and costs, and licensed technicians who serve your area. Financing can make a quality system affordable, and terms in the range of roughly 26 to 74 dollars per month with zero money down are common, though any financing is subject to credit approval and you should see the total cost, not just the monthly number."
        ]
      },
      {
        "h": "Red Flags and High-Pressure Sales Tactics to Avoid",
        "p": [
          "The clearest warning sign is urgency manufactured out of thin air. Watch for the today-only discount that vanishes if you do not sign tonight, the price that mysteriously drops by thousands the moment you hesitate, or a rep who will not leave until you commit. A fair price is a fair price tomorrow. Reputable companies give you the test results, a written quote, and time to think.",
          "Be skeptical of scare theatrics like precipitate tests where a probe turns your water an alarming color, since those reactions are basic chemistry and are not a valid measure of water safety. Also avoid anyone who recommends a system before testing your water, cannot name the specific contaminants their unit reduces, hides filter-replacement and total costs, or dismisses your questions. Alkaline and pH claims deserve honest framing too: remineralized water can taste better and is preferred by many households, but broad health cures attributed to alkaline water are not well supported by strong evidence, and an honest company will say so rather than promise miracles."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Do I need both a whole-house system and a reverse osmosis system?",
        "a": "Often yes, because they solve different problems. A whole-house conditioner addresses hardness and scale that affect every faucet and appliance, while reverse osmosis or alkaline treats the drinking and cooking water at your kitchen sink to a much higher standard. A water test tells you whether you need one, the other, or both."
      },
      {
        "q": "Is alkaline water actually healthier than regular filtered water?",
        "a": "The honest answer is that evidence for broad health benefits from alkaline water is limited. What a 6-stage alkaline system reliably delivers is strong reverse-osmosis filtration plus remineralization that many people prefer for taste and mouthfeel. Choose it because you like the water and want thorough filtration, not because of dramatic health claims."
      },
      {
        "q": "How much should a home water filtration system cost?",
        "a": "Cost depends on what you are treating and how much of the home you cover. Rather than a single sticker price, look at the total picture: equipment, professional installation, warranty, and ongoing filter replacements. Financing around 26 to 74 dollars per month with zero money down is common, subject to credit approval, and you should always ask to see the full cost, not just the monthly payment."
      },
      {
        "q": "What is the most important question to ask a water company?",
        "a": "Ask which specific contaminants their system is certified to reduce and to see the independent certification, such as NSF/ANSI standards. That one question separates companies that test your water and match a verified solution to it from those selling a generic box with vague promises."
      }
    ],
    "related": [
      {
        "label": "Reverse Osmosis vs Water Softener: Which Do You Need?",
        "href": "/guides/reverse-osmosis-vs-water-softener"
      },
      {
        "label": "What Does a Water Filtration System Cost?",
        "href": "/guides/water-filtration-cost"
      },
      {
        "label": "Get a Free In-Home Water Test",
        "href": "/contact"
      }
    ]
  },
  {
    "slug": "do-i-need-water-filter-city-water",
    "metaTitle": "Do You Need a Water Filter With City Water? (2026)",
    "title": "Do You Need a Water Filter If You Already Have Treated City Water?",
    "description": "City treatment makes water safe to drink, but it does not remove hardness, disinfection byproducts, or lead added by home plumbing. Here is what a filter still does.",
    "category": "Water Quality",
    "intro": "Yes, most homes on treated city water still benefit from home filtration. Municipal utilities make water safe to drink and meet federal standards, but their job stops at your property line. That leaves hardness, chlorine and chloramine taste, disinfection byproducts, and contaminants your own pipes add, like lead, along with emerging concerns such as PFAS that older treatment plants were never built to remove.",
    "sections": [
      {
        "h": "What city treatment actually does",
        "p": [
          "Municipal water systems are built around one primary mission, which is preventing waterborne disease. They filter out sediment and particles, disinfect with chlorine or chloramine to kill bacteria and viruses, and monitor for regulated contaminants under the federal Safe Drinking Water Act. In Southern California, much of the supply is imported from the Colorado River and Northern California, then blended and treated before it reaches your neighborhood.",
          "This system works, and the water arriving at your meter is legally safe. But safe and ideal are not the same thing. Federal limits are set for public health across an entire population, and utilities are not responsible for taste, hardness, the byproducts of their own disinfection, or anything that happens after the water enters your home."
        ]
      },
      {
        "h": "What treatment does not remove: hardness",
        "p": [
          "Hardness is dissolved calcium and magnesium picked up as water moves through rock and soil. It is not a health hazard, so utilities do not remove it, and Southern California water is notably hard. You see the results as white scale on faucets and glassware, spots on dishes, soap that will not lather, dry skin and hair, and mineral buildup that shortens the life of water heaters, dishwashers, and coffee makers.",
          "City treatment leaves hardness completely untouched. Addressing it requires equipment in your home, either a traditional softener that swaps the minerals out or a salt-free conditioner that changes how the minerals crystallize so they no longer stick to surfaces."
        ]
      },
      {
        "h": "Chlorine, chloramine, and disinfection byproducts",
        "p": [
          "The same disinfectants that keep water safe in transit also affect its taste and smell. Chlorine gives that pool-like odor, and many Southern California systems use chloramine, a longer-lasting chlorine and ammonia compound that is harder to remove and can be a concern for people with fish tanks or on dialysis. Neither is dangerous at treated levels, but neither is pleasant to drink or cook with.",
          "When chlorine reacts with natural organic matter in the water, it forms disinfection byproducts such as trihalomethanes and haloacetic acids. These are regulated and kept below federal limits, but many households prefer to reduce their exposure further. A quality carbon filter or reverse osmosis system removes chlorine and chloramine taste and lowers disinfection byproducts at the point where you actually drink the water."
        ]
      },
      {
        "h": "What your own plumbing adds: lead and metals",
        "p": [
          "This is the gap most people overlook. Water can leave the treatment plant clean and still pick up contaminants on the last leg of its journey through your home. Older homes, and the service lines and solder connecting them, can contain lead, which dissolves into water that sits in the pipes overnight. Lead has no safe level of exposure and is especially concerning for infants and young children.",
          "No amount of city treatment protects you here, because the contamination happens after the water is your responsibility. The only reliable fix is treatment at the tap. A reverse osmosis system installed under the kitchen sink is highly effective at reducing lead, along with other trace metals, before the water reaches your glass."
        ]
      },
      {
        "h": "PFAS and emerging contaminants",
        "p": [
          "PFAS, sometimes called forever chemicals, are a family of synthetic compounds used in nonstick coatings, firefighting foam, and countless consumer products. They resist breaking down in the environment and have been detected in water supplies across the country. Federal drinking water limits for several PFAS compounds were finalized in 2024, and utilities are working toward compliance, but many older treatment plants were never designed to remove them.",
          "Conventional municipal filtration does not reliably remove PFAS. Technologies that do include reverse osmosis and specialized carbon, which is why point-of-use RO has become the practical choice for households that want to reduce PFAS exposure now rather than wait on infrastructure upgrades."
        ]
      },
      {
        "h": "So do you actually need one?",
        "p": [
          "If your only goal is water that will not make you sick, city treatment already delivers that. If you want water that also tastes clean, protects your appliances and plumbing from scale, removes the lead your own pipes may contribute, and reduces disinfection byproducts and PFAS, then home filtration fills real gaps that no utility is responsible for closing.",
          "The honest answer depends on your specific water and home, which is why the most useful first step is a free in-home water test. It measures your actual hardness and what is coming out of your tap, so any recommendation is based on your water rather than averages. From there you can decide whether a whole-house conditioner, a drinking-water RO system, or both make sense for your family."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is Southern California tap water safe to drink?",
        "a": "Yes. Local utilities treat and monitor the supply to meet federal Safe Drinking Water Act standards, so it is legally safe. Home filtration is about improving taste, reducing hardness, and addressing contaminants like lead and PFAS that treatment does not fully cover, not about fixing unsafe water."
      },
      {
        "q": "If my water is already treated, does a filter really remove anything?",
        "a": "Yes. City treatment does not remove hardness, and it leaves chlorine or chloramine taste and disinfection byproducts in the water. It also cannot address lead or metals your own plumbing adds after the water leaves the plant. A carbon or reverse osmosis filter targets exactly those things at the point of use."
      },
      {
        "q": "Does boiling water do the same thing as filtering?",
        "a": "No. Boiling kills bacteria, but it does nothing for hardness, chlorine, disinfection byproducts, lead, or PFAS. In fact, boiling can slightly concentrate dissolved contaminants as water evaporates. Filtration is a different job and is the right tool for these concerns."
      },
      {
        "q": "Do I need whole-house filtration or just a drinking-water system?",
        "a": "It depends on your goals. A whole-house conditioner addresses hardness and scale throughout the home, protecting appliances, skin, and hair. A point-of-use reverse osmosis system handles drinking and cooking water, removing lead, PFAS, and taste. Many families use both. A free water test helps you decide what your home actually needs."
      }
    ],
    "related": [
      {
        "label": "Is San Diego Tap Water Safe?",
        "href": "/guides/is-san-diego-tap-water-safe"
      },
      {
        "label": "Reverse Osmosis Systems",
        "href": "/products/reverse-osmosis"
      },
      {
        "label": "What Is PFAS in Drinking Water?",
        "href": "/guides/what-is-pfas"
      }
    ]
  },
  {
    "slug": "alkaline-water-benefits",
    "metaTitle": "Alkaline Water Benefits: Hype vs. Fact (2026)",
    "title": "Alkaline water benefits: what's actually supported, and what's marketing?",
    "description": "Alkaline water's real benefit is taste and added minerals, not most health claims. Here's what science supports, what's hype, and how 6-stage alkaline RO works.",
    "category": "Alkaline Water",
    "intro": "The most honest benefit of alkaline water is that it tastes cleaner and adds back beneficial minerals like calcium, magnesium, and potassium. The bigger health claims, that it neutralizes body acid, boosts energy, or slows aging, are largely unproven, because your body tightly regulates its own pH no matter what you drink. Where alkaline water genuinely shines is taste and mineral content, especially when a 6-stage alkaline RO system purifies water first and then remineralizes it.",
    "sections": [
      {
        "h": "What alkaline water actually is",
        "p": [
          "Alkaline water simply has a higher pH than neutral water. Pure water sits at a pH of 7; alkaline drinking water is usually in the 8 to 9.5 range. That higher pH comes from dissolved alkaline minerals, mainly calcium, magnesium, potassium, and bicarbonate. The pH number alone tells you very little, though. What matters is what is creating that pH and how much of it is present, which is measured as mineral content, not just the pH reading on a test strip.",
          "There is an important difference between water that is naturally mineral-rich and water that has been artificially raised in pH by an electric ionizer with no added minerals. Mineral-based alkalinity is stable and adds something to the water. pH boosted by electrolysis alone tends to be thin, and the effect fades quickly once the water sits or mixes with the acidic environment of your stomach."
        ]
      },
      {
        "h": "What the science actually supports",
        "p": [
          "The claim that drinking alkaline water changes your body's pH does not hold up. Your blood is kept in a very narrow range near 7.4 by your kidneys and lungs, and your stomach is strongly acidic by design. Water you drink cannot meaningfully move blood pH, and popular ideas about alkaline water reducing overall body acidity, preventing disease, or slowing aging are not supported by solid clinical evidence. Marketing that promises those outcomes is running ahead of the research.",
          "There are narrower, more credible findings. Some small studies suggest alkaline water may help with acid reflux symptoms by deactivating the enzyme pepsin, and one study on athletes found modest hydration and blood-acidity differences after intense exercise. These are limited, early results, not proof of broad health benefits. The genuinely well-supported points are simpler: staying well hydrated matters, and getting minerals like calcium, magnesium, and potassium is good for you. Alkaline mineral water can be a pleasant, low-effort way to get a little more of those minerals."
        ]
      },
      {
        "h": "Taste and mineral content: the real benefit",
        "p": [
          "The benefit most people actually notice is taste. Reverse osmosis produces extremely pure water, and because it removes nearly everything, including minerals, very pure water can taste flat or slightly sharp to some palates. Adding a measured blend of calcium, magnesium, and potassium back in rounds out the flavor and gives water a smoother, cleaner, slightly sweet character that most families prefer for drinking, coffee, and tea.",
          "Mineral content is also a modest nutritional plus. Water is not meant to be your main source of minerals, but calcium and magnesium in remineralized water are easy for the body to absorb and add up over a day of drinking. So the fair way to frame alkaline water is this: better taste and a small mineral bonus are real and worth having, while the dramatic health claims are not something to buy a system for."
        ]
      },
      {
        "h": "How a 6-stage alkaline RO system adds minerals back",
        "p": [
          "A 6-stage alkaline RO system solves the flat-taste problem by design. The first stages do the purifying: sediment and carbon filters catch particles, chlorine, chloramine, and taste and odor compounds, then the reverse-osmosis membrane removes up to 99% of dissolved contaminants such as lead, arsenic, PFAS, and nitrates. At this point the water is exceptionally pure but stripped of minerals, which is exactly why the next stages matter.",
          "The final stages remineralize and polish. A mineral or alkalizing stage passes the purified water over natural mineral media that releases calcium, magnesium, and potassium back into the water, gently raising the pH and restoring taste. A final carbon or polishing stage smooths everything out before it reaches your glass. The result is water that is both genuinely purified and pleasant to drink, rather than choosing between one or the other. Puragain's 6-stage alkaline system is built around this purify-then-remineralize approach and installs at the kitchen tap for drinking and cooking."
        ]
      },
      {
        "h": "Is alkaline water right for your home?",
        "p": [
          "If you want the cleanest possible drinking water and you also care about taste, an alkaline RO system is a sensible choice, because you get near-total contaminant removal plus the minerals and smoother flavor added back at the end. If your main concern is hardness, scale, and dry skin throughout the house, that is a different problem solved by whole-house conditioning rather than by alkaline drinking water. Many Southern California homes benefit from both: whole-house treatment for how water feels everywhere, and alkaline RO for what you drink.",
          "The honest bottom line is to choose alkaline water for taste and mineral content, not for cure-all promises. The best way to decide is to know exactly what is in your specific water first. Puragain offers a free in-home water test where a technician measures your water on-site and shows you the results with no obligation, so any system you choose is matched to what your home actually needs."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does alkaline water change your body's pH?",
        "a": "No, not meaningfully. Your kidneys and lungs keep blood pH in a tight range near 7.4, and your stomach is strongly acidic regardless of what you drink. Claims that alkaline water alkalizes your body are not supported by solid evidence."
      },
      {
        "q": "So is alkaline water actually good for you?",
        "a": "The honest answer is that its real benefits are better taste and a small amount of added calcium, magnesium, and potassium. Staying hydrated and getting minerals is good for you, but the dramatic disease and anti-aging claims are unproven."
      },
      {
        "q": "What pH is alkaline drinking water?",
        "a": "Usually between 8 and 9.5. But pH alone matters less than what creates it. Water made alkaline by real dissolved minerals is more stable and better tasting than water whose pH is raised artificially with no minerals added."
      },
      {
        "q": "Why does RO water need minerals added back?",
        "a": "Reverse osmosis removes almost everything, including minerals, so very pure water can taste flat. A 6-stage alkaline system adds calcium, magnesium, and potassium back after purification to restore taste and gently raise the pH."
      }
    ],
    "related": [
      {
        "label": "6-Stage Alkaline System",
        "href": "/products/alkaline"
      },
      {
        "label": "Reverse Osmosis System",
        "href": "/products/reverse-osmosis"
      },
      {
        "label": "Cost of a filtration system",
        "href": "/guides/water-filtration-cost"
      }
    ]
  },
];

export const GUIDE_MAP: Record<string, Guide> = Object.fromEntries(GUIDES.map((g) => [g.slug, g]));
