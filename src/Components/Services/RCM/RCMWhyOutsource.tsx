"use client";

import { ArrowRight } from "lucide-react";

const RCMSystemFlow = () => {
  const steps = [
    {
      title: "End-to-End RCM Coverage",
      desc: "From patient eligibility and coding to claim submission, denial management, and payment posting — we manage the entire revenue cycle.",
    },
    {
      title: "Compliance-First Operations",
      desc: "HIPAA-compliant workflows, certified coders, and payer-specific rules ensure accuracy, security, and reduced audit risk.",
    },
    {
      title: "Measurable Financial Impact",
      desc: "Faster reimbursements, lower denial rates, and improved AR days backed by transparent reporting and analytics.",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 bg-[#0B1220] text-white">
      <div className="max-w-[1300px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="mb-14 sm:mb-16 lg:mb-20 max-w-[700px]">
          <span className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider">
            UpscaleAlliance RCM System
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
            Revenue Cycle Management Built as a Continuous Flow
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            UpscaleAlliance operates Revenue Cycle Management as a connected
            system eliminating revenue leaks, delays, and operational
            friction.
          </p>
        </div>

        {/* ================= FLOW ================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start lg:items-center gap-5 sm:gap-6 group max-w-full lg:max-w-[450px]"
            >
              {/* TEXT */}
              <div className="min-w-0 sm:min-w-[220px]">
                <div className="text-xs sm:text-sm text-blue-400 mb-1">
                  Step {index + 1}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* ARROW (DESKTOP ONLY) */}
              {index !== steps.length - 1 && (
                <ArrowRight className="hidden lg:block w-10 h-10 xl:w-12 xl:h-12 text-gray-500 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RCMSystemFlow;
