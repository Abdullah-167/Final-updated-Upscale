"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Subscribed successfully.");
        setEmail("");
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch {
      setMessage("Subscription failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* Column 1: Brand + Overview */}
        <div className="space-y-6">
          <Image
            src="/UpscaleAllianceLLc.png"
            alt="Upscale Alliance LLC"
            width={230}
            height={56}
            priority
          />

          <p className="text-sm text-gray-600 leading-relaxed">
            Upscale Alliance LLC is a growth-focused agency delivering
            Healthcare Revenue Cycle Management and performance-driven digital
            marketing solutions.
          </p>

          {/* Social */}
          <div className="flex gap-4 text-gray-500 pt-2">
            <Link
              href="https://www.facebook.com/UpscaleAllianceLLC/"
              target="_blank"
              className="hover:text-blue-600"
            >
              <IoLogoFacebook size={20} />
            </Link>
            <Link
              href="https://x.com/upscalealliance"
              target="_blank"
              className="hover:text-blue-600"
            >
              <IoLogoTwitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/upscale-alliance-llc/"
              target="_blank"
              className="hover:text-blue-600"
            >
              <IoLogoLinkedin size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/upscalealliancellc/"
              target="_blank"
              className="hover:text-blue-600"
            >
              <IoLogoInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Column 2: Locations & Contact */}
        <div className="space-y-6">
          <h3 className="font-semibold text-gray-900">Locations</h3>

          <div className="text-sm text-gray-600 space-y-4">
            <div>
              <p className="font-medium text-gray-900">United States (HQ)</p>
              <p>
                1501 South Greeley Hwy
                <br />
                Ste C #1100
                <br />
                Cheyenne, WY 82007
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <span className="font-medium text-gray-900">Phone:</span>{" "}
              <a href="tel:+19179470117" className="hover:text-blue-600">
                +1 (917) 947-0117
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-900">Email:</span>{" "}
              <a
                href="mailto:info@upscalealliance.com"
                className="hover:text-blue-600"
              >
                info@upscalealliance.com
              </a>
            </p>
          </div>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-5">Services</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link
                href="/services/revenue-cycle-management"
                className="hover:text-blue-600"
              >
                Revenue Cycle Management
              </Link>
            </li>
            <li>
              <Link
                href="/services/medical-billing-ar"
                className="hover:text-blue-600"
              >
                Medical Billing & AR Management
              </Link>
            </li>
            <li>
              <Link
                href="/services/patient-eligibility-verification"
                className="hover:text-blue-600"
              >
                Eligibility Verification
              </Link>
            </li>
            <li>
              <Link
                href="/services/website-development"
                className="hover:text-blue-600"
              >
                Website Development
              </Link>
            </li>
            <li>
              <Link href="/services/ai-automation" className="hover:text-blue-600">
                AI Automation
              </Link>
            </li>
            <li>
              <Link href="/services/seo" className="hover:text-blue-600">
                Search Engine Optimization (SEO)
              </Link>
            </li>
            <li>
              <Link
                href="/services/generative-engine-optimization"
                className="hover:text-blue-600"
              >
                Generative Engine Optimization (GEO)
              </Link>
            </li>
            <li>
              <Link
                href="/services/paid-advertising"
                className="hover:text-blue-600"
              >
                Paid Advertising
              </Link>
            </li>
            <li>
              <Link
                href="/services/content-writing"
                className="hover:text-blue-600"
              >
                Content Writing
              </Link>
            </li>
            <li>
              <Link
                href="/services/video-editing"
                className="hover:text-blue-600"
              >
                Video Editing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Company + Newsletter */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/about-us" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners-program" className="hover:text-blue-600">
                  Partners Program
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/privacy-policy"
                  className="hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/policies/terms-&-conditions"
                  className="hover:text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Insights on healthcare RCM, SEO, and growth strategy.
            </p>

            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 pr-28 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-1 top-1 bottom-1 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-semibold transition"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>

            {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-6 border-t border-gray-200 text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} Upscale Alliance LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
