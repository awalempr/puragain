import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Puragain Water",
  description: "Puragain Water privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: March 24, 2026</p>

        <div className="prose-custom space-y-8 text-gray-600 text-[15px] leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Name, email address, phone number, and mailing address when you fill out a contact form, request a consultation, or schedule a water test</li>
              <li>Installation address and property information related to system installation</li>
              <li>Payment and billing information when you purchase a system</li>
              <li>Communications you send to us via email, phone, or through our website</li>
              <li>Survey responses, quiz answers, and feedback you provide</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">2. Information Collected Automatically</h2>
            <p className="mb-3">When you visit our website, we automatically collect certain information, including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Device type, browser type, operating system, and IP address</li>
              <li>Pages viewed, time spent on pages, and navigation patterns</li>
              <li>Referring website or advertising source</li>
              <li>Cookies and similar tracking technologies (see Section 7)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Schedule water tests, consultations, and system installations</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website, products, and services</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">4. Information Sharing</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Service providers who assist in operating our business (CRM, payment processing, email delivery)</li>
              <li>Advertising partners for remarketing purposes (Meta, Google) using anonymized or hashed data</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners in connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including encryption of data in transit (SSL/TLS), secure storage practices, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale or sharing of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at 855-40-WATER or through our contact page.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">7. Cookies & Tracking</h2>
            <p className="mb-3">We use cookies and similar technologies for:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Advertising cookies:</strong> Used to deliver relevant ads and measure campaign performance</li>
            </ul>
            <p className="mt-3">You can manage cookie preferences through our cookie consent banner or your browser settings. Disabling cookies may affect website functionality.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">8. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites (such as Yelp for reviews). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
            <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we learn that we have collected information from a child, we will delete it promptly.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">10. California Privacy Rights (CCPA)</h2>
            <p>California residents have additional rights under the California Consumer Privacy Act, including the right to know what personal information is collected, the right to delete, and the right to opt out of the sale of personal information. To exercise these rights, contact us at 855-40-WATER.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">11. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of material changes by posting the updated policy on our website with a revised &quot;Last updated&quot; date.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">12. Contact Us</h2>
            <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
            <ul className="list-none space-y-1.5 mt-3">
              <li><strong>Phone:</strong> <a href="tel:8554092837" className="text-[#3a8fd4] hover:underline">855-40-WATER</a></li>
              <li><strong>Email:</strong> privacy@puragainwater.com</li>
              <li><strong>Company:</strong> Puragain Water, Escondido, CA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
