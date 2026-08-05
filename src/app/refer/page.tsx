import type { Metadata } from "next";
import ReferClient from "./refer-client";

export const metadata: Metadata = {
  title: "Refer a Friend — Get $200 | PurAgain Rewards",
  description:
    "Refer a friend to Puragain Water and earn $200 for every friend who gets a system installed — plus $25 the moment they book a free water test. Your friend gets $100 at install and a free in-home water test.",
  alternates: { canonical: "/refer" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "PurAgain Rewards — Get $200 for Every Friend You Refer",
    description:
      "Give your friends better water, get paid for it. $200 per install, a $25 booking bonus, and a free in-home water test for them. Southern California's family-owned water experts.",
    url: "/refer",
    type: "website",
  },
};

// Surface the reward mechanics to search engines / rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do I earn for referring a friend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You earn $200 for every friend who gets a Puragain system installed, plus a $25 bonus the moment your friend books their free in-home water test — even before they buy. Your friend gets $100 at install and a free water test.",
      },
    },
    {
      "@type": "Question",
      name: "When do I get paid for a referral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get $25 when your referred friend books their free in-home water test, and the remaining $200 after their system is installed and verified. Rewards are paid to the referring customer.",
      },
    },
    {
      "@type": "Question",
      name: "Who qualifies as a referral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your friend must be a new customer (not an existing Puragain customer) in our service area. One reward is paid per referred household, and the $200 install reward requires a verified installation.",
      },
    },
  ],
};

export default function ReferPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReferClient />
    </>
  );
}
