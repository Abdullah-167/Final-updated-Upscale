"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, TrendingUp, Calendar } from "lucide-react";

const ResultsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] font-medium text-sm">
                PROVEN RESULTS
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Know the Systems <br />
              <span className="text-[#1570EF]">that Get Results</span>
            </h2>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-[#1570EF]/5 to-white rounded-2xl p-6 border border-[#1570EF]/20 mb-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#1570EF] rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-[#1570EF]">
                    $45M+
                  </span>
                  <p className="text-sm text-gray-500">
                    combined revenue generated
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                in the last two years alone, powered by the automation
                strategies and systems we designed and implemented.
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8">
              We know exactly what systems you need as we have{" "}
              <span className="font-semibold text-gray-900">
                whole of market access
              </span>
              .
            </p>

            {/* CTA */}
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" cursor-pointer px-8 py-4 bg-[#1570EF] text-white font-semibold rounded-xl text-lg shadow-lg hover:bg-[#0A5BD0] transition-all inline-flex items-center gap-3 group"
              >
                <Calendar className="w-5 h-5" />
                Book A Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Trust Indicator */}
            <p className="text-sm text-gray-400 mt-4">
              *No obligation. 30-minute strategy call.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/82803392335.png"
                alt="Systems that get results"
                width={800}
                height={600}
                className="w-full h-auto object-cover rotate-slow"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-200"
            ></motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-gray-200"
        >
          {[
            { label: "Combined Revenue", value: "$45M+", color: "blue" },
            { label: "Clients Served", value: "100+", color: "green" },
            { label: "Systems Deployed", value: "500+", color: "purple" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-2xl font-bold text-${stat.color}-600`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
