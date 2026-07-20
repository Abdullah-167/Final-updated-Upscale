const RCMResults = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 text-gray-900">
          Proven RCM Outcomes
        </h2>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
              40%
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Faster Reimbursements
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
              85%
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Reduction in Denials
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
              99%
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Clean Claim Rate
            </p>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
              25%
            </div>
            <p className="text-sm sm:text-base text-gray-600">
              Increased Collections
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RCMResults;
