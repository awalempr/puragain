import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Terms & Conditions",
  description:
    "Puragain Water SMS/text messaging program terms: what to expect, message frequency, rates, and how to opt out (STOP) or get help (HELP).",
  alternates: { canonical: "/sms-terms" },
};

export default function SmsTermsPage() {
  return (
    <section className="bg-white pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          SMS Terms &amp; Conditions
        </h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: August 2, 2026</p>

        <div className="space-y-8 text-gray-600 text-[15px] leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">1. Program Description</h2>
            <p>
              Puragain Water operates a text messaging (SMS) program (the &quot;Program&quot;) to communicate with
              consumers who have requested information, a quote, or a free in-home water test from us. Through the
              Program you may receive messages related to scheduling and reminders for water tests, consultations, and
              installations, follow-ups regarding your inquiry, service and account updates, and occasional offers or
              promotions from Puragain Water.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">2. How You Opt In</h2>
            <p>
              You consent to receive text messages from Puragain Water when you provide your mobile number and agree to
              be contacted &mdash; for example, by submitting a contact, quote, or free-water-test request form on our
              website, or by giving your number to a Puragain Water representative and agreeing to be texted. Providing
              consent to receive text messages is <strong>not a condition of any purchase</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">3. Message Frequency</h2>
            <p>
              Message frequency varies based on your interaction with us (for example, when you schedule an appointment
              or respond to a follow-up). You may receive recurring messages related to your inquiry and appointments.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">4. Message &amp; Data Rates</h2>
            <p>
              <strong>Message and data rates may apply.</strong> Rates are charged by your mobile carrier and are your
              responsibility. Puragain Water is not responsible for any carrier charges you incur.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">5. How to Opt Out</h2>
            <p>
              You can cancel the Program at any time by texting <strong>STOP</strong> to any message you receive from
              us. After you send <strong>STOP</strong>, we will send you a one-time confirmation message, and you will
              no longer receive text messages from the Program. If you want to rejoin, simply reply <strong>START</strong>{" "}
              or opt in again through our website.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">6. How to Get Help</h2>
            <p>
              For help at any time, reply <strong>HELP</strong> to any message, or contact us at{" "}
              <a href="mailto:support@puragain.com" className="text-[#3a8fd4] hover:underline">
                support@puragain.com
              </a>
              . Replying <strong>HELP</strong> will return our contact information and instructions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">7. Carriers &amp; Delivery</h2>
            <p>
              Wireless carriers are not liable for delayed or undelivered messages. Message delivery is subject to
              effective transmission from your wireless service provider and is not guaranteed. The Program is available
              on major U.S. carriers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">8. Your Privacy</h2>
            <p>
              Your mobile opt-in information &mdash; including your phone number and your consent to receive text
              messages &mdash; is used only to operate this Program.{" "}
              <strong>
                We do not share, sell, or rent your mobile opt-in data or SMS consent to any third parties or affiliates
                for their marketing or promotional purposes.
              </strong>{" "}
              For details on how we handle your information, see our{" "}
              <a href="/privacy" className="text-[#3a8fd4] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">9. Changes to These Terms</h2>
            <p>
              We may update these SMS Terms &amp; Conditions from time to time. Changes will be posted on this page with
              an updated revision date. Your continued participation in the Program after changes are posted constitutes
              acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
            <p>Questions about the Program? Contact us:</p>
            <ul className="list-none space-y-1.5 mt-3">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@puragain.com" className="text-[#3a8fd4] hover:underline">
                  support@puragain.com
                </a>
              </li>
              <li>
                <strong>Web:</strong>{" "}
                <a href="/contact" className="text-[#3a8fd4] hover:underline">
                  puragainwater.com/contact
                </a>
              </li>
              <li>
                <strong>Company:</strong> Puragain Water, Escondido, CA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
