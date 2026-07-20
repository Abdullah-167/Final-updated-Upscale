"use client";

const RCMWhoWeServe = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">

        {/* ================= HEADER ================= */}
        <div className="max-w-[680px] mb-12 sm:mb-14">
          <span className="inline-block mb-2 sm:mb-3 text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Who We Serve
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
            Revenue Cycle Management for Diverse Healthcare Providers
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We provide tailored Revenue Cycle Management services for healthcare
            organizations of all sizes, adapting our workflows to specialty-
            specific billing and payer requirements.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {[
            {
              title: "Hospitals & Health Systems",
              desc: "Enterprise-level RCM support designed to manage high claim volumes, complex payer mixes, and multi-department billing.",
            },
            {
              title: "Private Practices",
              desc: "End-to-end billing and collections for solo and group practices seeking consistent reimbursements without internal overhead.",
            },
            {
              title: "Specialty Clinics",
              desc: "Specialty-aware coding, claims management, and payer follow-ups aligned with unique reimbursement rules.",
            },
            {
              title: "Urgent Care Centers",
              desc: "Fast-paced RCM workflows optimized for high patient turnover and time-sensitive claim submission.",
            },
            {
              title: "Behavioral & Mental Health Providers",
              desc: "Compliance-focused billing for therapy, counseling, and behavioral health services across public and private payers.",
            },
            {
              title: "Telehealth Providers",
              desc: "RCM solutions adapted for virtual care, remote billing models, and evolving payer telehealth policies.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                p-5 sm:p-6
                bg-white
                rounded-2xl
                border border-gray-100
                shadow-sm
                hover:shadow-md
                transition-shadow
              "
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RCMWhoWeServe;
