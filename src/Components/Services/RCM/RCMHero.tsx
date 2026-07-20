"use client";

import Image from "next/image";
import Link from "next/link";

const RCMHero = () => {
  return (
    <section className="w-full pt-28 sm:pt-32 md:pt-40 pb-16 px-4 sm:px-6 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[600px] text-left">
            <span className="inline-block mb-3 text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Revenue Cycle Management Services
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              End-to-End Revenue Cycle Management for Healthcare Providers
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-4">
              Our Revenue Cycle Management (RCM) services help healthcare
              providers manage medical billing, claims processing, and
              reimbursements efficiently from patient intake to final payment.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-[520px] mx-auto md:mx-0 mb-6">
              We work with hospitals, clinics, and private practices to reduce
              claim denials, improve cash flow, and maintain HIPAA-compliant
              billing operations without internal complexity.
            </p>

            {/* CTA */}
            <div className="flex justify-start">
              <Link href="/rcm-contact">
                <button className="w-full sm:w-auto bg-[#1570EF] hover:bg-[#101828] transition-all duration-300 text-white px-6 py-4 font-semibold rounded-lg shadow-md">
                  Book Free RCM Consultation
                </button>
              </Link>
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
              {[
                "HIPAA-Compliant RCM",
                "End-to-End Medical Billing",
                "US Healthcare Specialists",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full max-w-[520px] hidden md:flex">
            <Image
              src="/rcm-hero.png"
              alt="Healthcare revenue cycle management and medical billing services"
              width={520}
              height={520}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RCMHero;
