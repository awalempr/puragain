import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Puragain Water",
  description: "Puragain Water terms and conditions of service. Read our terms regarding system purchases, installations, and lifetime service plans.",
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: March 24, 2026</p>

        <div className="space-y-8 text-gray-600 text-[15px] leading-relaxed">
          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using the Puragain Water website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services. These terms apply to all visitors, users, and customers.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">2. Services</h2>
            <p>Puragain Water provides residential water filtration systems, installation services, and ongoing maintenance plans. Our services include water quality testing, system recommendations, professional installation, and lifetime servicing plans as described on our website and in individual service agreements.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">3. Pricing & Payment</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All prices displayed on the website are monthly payment amounts and are subject to credit approval</li>
              <li>Monthly payments may vary based on credit qualification and financing terms</li>
              <li>&quot;Zero Money Down&quot; applies to qualified buyers with approved credit</li>
              <li>Prices do not include applicable sales tax</li>
              <li>Puragain Water reserves the right to modify pricing at any time without prior notice for new purchases</li>
              <li>Existing contracts are not affected by price changes</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">4. Installation</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Professional installation is included at no additional cost with all system purchases</li>
              <li>Installation is performed by Puragain Water certified technicians</li>
              <li>Customer must provide reasonable access to the installation area</li>
              <li>Standard installations typically take 1-4 hours depending on the system type</li>
              <li>Additional plumbing modifications beyond standard installation may incur extra charges, which will be communicated before work begins</li>
              <li>Customer is responsible for ensuring the installation location meets basic requirements (electrical access for whole house systems, adequate space under sink for RO systems)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">5. Warranty</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All systems include a 7-year warranty covering parts and labor</li>
              <li>Warranty covers defects in materials and workmanship under normal use</li>
              <li>Warranty does not cover damage caused by misuse, unauthorized modifications, neglect, or acts of nature</li>
              <li>Warranty is non-transferable and applies to the original purchaser at the original installation address</li>
              <li>To make a warranty claim, contact our service department at 855-409-0084</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">6. Lifetime Service Plan</h2>
            <p className="mb-3">All systems include a lifetime service plan at no additional cost, which covers:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Annual water quality testing</li>
              <li>Annual filter and component replacements</li>
              <li>Annual system maintenance and tune-up</li>
              <li>Unlimited service calls at no charge</li>
              <li>24/7 live customer support</li>
            </ul>
            <p className="mt-3">The lifetime service plan remains active as long as the monthly payment is current and the system remains at the original installation address. Service plan benefits are non-transferable.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">7. Free Water Testing</h2>
            <p>Puragain Water offers free in-home water testing with no obligation to purchase. A certified technician will visit your home, conduct the test, and present the results on-site. There is no cost or commitment required for this service.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">8. Cancellation & Returns</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Customers may cancel within 3 business days of signing a purchase agreement in accordance with the Federal Trade Commission&apos;s Cooling-Off Rule</li>
              <li>After the cooling-off period, cancellations are subject to the terms of your individual financing agreement</li>
              <li>Installed systems that are removed after the cancellation period may be subject to removal fees</li>
              <li>Contact us at 855-40-WATER for cancellation requests</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">9. Website Use</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>You may use our website for lawful purposes only</li>
              <li>You may not attempt to gain unauthorized access to any part of the website or its systems</li>
              <li>You may not use automated tools to scrape, crawl, or extract data from the website</li>
              <li>All content on the website (text, images, design, code) is the property of Puragain Water and may not be reproduced without permission</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">10. SMS Communications</h2>
            <p>By opting in to SMS communications, you consent to receive text messages from Puragain Water regarding your inquiry, appointment scheduling, and service updates. Message and data rates may apply. You may opt out at any time by replying STOP. Message frequency varies.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">11. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Puragain Water shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">12. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Puragain Water, its officers, employees, and agents from any claims, damages, or expenses arising from your violation of these terms or misuse of our services.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">13. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of the State of California. Any disputes arising from these terms shall be resolved in the courts of San Diego County, California.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">14. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">15. Contact</h2>
            <p>For questions about these terms, contact us:</p>
            <ul className="list-none space-y-1.5 mt-3">
              <li><strong>Phone:</strong> <a href="tel:8554092837" className="text-[#3a8fd4] hover:underline">855-40-WATER</a></li>
              <li><strong>Service:</strong> <a href="tel:8554090084" className="text-[#3a8fd4] hover:underline">855-409-0084</a></li>
              <li><strong>Company:</strong> Puragain Water, Escondido, CA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
