import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#3a8fd4] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/brand/logo.png"
              alt="Puragain Water"
              width={140}
              height={35}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mb-2">Pure Water. Pure Life.</p>
            <p className="text-xs text-gray-500">
              Family owned. 30+ years in the water industry.
            </p>
          </div>

          {/* Systems */}
          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Systems
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/products/reverse-osmosis"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  5-Stage Reverse Osmosis
                </Link>
              </li>
              <li>
                <Link
                  href="/products/alkaline"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  6-Stage Alkaline
                </Link>
              </li>
              <li>
                <Link
                  href="/products/whole-house"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Whole House System
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-gray-400">Lifetime Servicing</li>
              <li className="text-sm text-gray-400">Annual Water Testing</li>
              <li className="text-sm text-gray-400">Annual Maintenance</li>
              <li className="text-sm text-gray-400">Unlimited Service Calls</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:8554092837"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Sales: 855-409-2837
                </a>
              </li>
              <li>
                <a
                  href="tel:8554090084"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Service: 855-409-0084
                </a>
              </li>
              <li className="text-sm text-gray-400">24/7 Live Support</li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Get Started →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 Puragain Water · Privacy Policy · Terms & Conditions
          </p>
          <div className="flex gap-4">
            <span className="w-8 h-8 rounded-full bg-white/5 block" />
            <span className="w-8 h-8 rounded-full bg-white/5 block" />
            <span className="w-8 h-8 rounded-full bg-white/5 block" />
          </div>
        </div>
      </div>
    </footer>
  );
}
