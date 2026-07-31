import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Puragain Water about home water filtration. Free water test, professional install, lifetime service. Call 855-40-WATER or send us a message.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Puragain Water",
    description:
      "Questions or ready to get started? Free water test, zero money down, lifetime service. Call 855-40-WATER.",
    url: "https://puragain.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
