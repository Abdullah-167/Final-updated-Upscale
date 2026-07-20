"use client";

const RCMProcess = () => {
  return (
    <section
      id="rcm-process"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="max-w-[680px] mb-12 sm:mb-14">
          <span className="inline-block mb-3 text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Our RCM Process
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            A Transparent Revenue Cycle Workflow
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Our Revenue Cycle Management process is designed to improve
            collections, reduce claim denials, and give healthcare providers
            full visibility into their financial performance.
          </p>
        </div>

        {/* ================= PROCESS STEPS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {processSteps.map((step) => (
            <div
              key={step.step}
              className="
                p-5 sm:p-6
                rounded-2xl
                border border-gray-100
                shadow-sm hover:shadow-md
                transition-all
                bg-white
              "
            >
              <div className="text-blue-600 font-bold text-lg sm:text-xl mb-3">
                {step.step}
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RCMProcess;

/* ================= DATA ================= */

const processSteps = [
  {
    step: "01",
    title: "Patient Intake & Eligibility Verification",
    desc:
      "We verify patient demographics, insurance coverage, and benefits upfront to minimize billing errors and prevent claim rejections.",
  },
  {
    step: "02",
    title: "Medical Coding & Charge Entry",
    desc:
      "Accurate CPT, ICD-10, and HCPCS coding ensures compliant claim submission and maximizes reimbursement potential.",
  },
  {
    step: "03",
    title: "Claims Submission & Scrubbing",
    desc:
      "Claims are scrubbed for errors and submitted electronically to payers to reduce delays and denials.",
  },
  {
    step: "04",
    title: "Payment Posting & Reconciliation",
    desc:
      "We post payments accurately, reconcile EOBs and ERAs, and identify underpayments or discrepancies.",
  },
  {
    step: "05",
    title: "Denial Management & Appeals",
    desc:
      "Denied claims are analyzed, corrected, and appealed promptly to recover lost revenue.",
  },
  {
    step: "06",
    title: "AR Follow-Ups & Reporting",
    desc:
      "Continuous AR follow-ups and detailed financial reporting keep your revenue predictable and transparent.",
  },
];
