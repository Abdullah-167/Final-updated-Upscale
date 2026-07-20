"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    title: "Jimdo – 3x Traffic Growth",
    description:
      "Full website rebuild + SEO overhaul. Increased organic traffic by 320% in 6 months with technical SEO, GEO optimization, and performance upgrades.",
    image: "/jimbo1.png",
  },
  {
    title: "Myriad Capital – Lead Engine System",
    description:
      "Designed a conversion-oriented website and deployed a complete PPC + SEO funnel that boosted qualified leads by 4.2x.",
    image: "/myriadcapital.png",
  },
  {
    title: "Skycop – International SEO Expansion",
    description:
      "Scaled their presence across 17 countries using GEO optimization, multilingual SEO, and landing page optimization.",
    image: "/skycop2.png",
  },
];

const CaseStudies = () => {
  return (
    <section className="w-full py-24 px-6 bg-gray-50">
      <div className="max-w-[1250px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Work That Drives Results
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            A look at how we've helped brands grow using data-driven marketing,
            conversion-focused design, and modern development.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Text */}
              <div className="pt-2 pb-10 px-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <button className=" absolute bottom-5 cursor-pointer text-[#1570EF] font-semibold group-hover:underline transition-all">
                  View Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
