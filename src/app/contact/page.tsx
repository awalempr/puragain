import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Puragain Water about home water filtration in Southern California. Free water test, professional install, lifetime service. Book a free water test or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
