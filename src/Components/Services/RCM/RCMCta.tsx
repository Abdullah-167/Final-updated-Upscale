"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RCMCta() {
  return (
    <div className="max-w-[1300px] mx-auto px-5">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-neutral-900 rounded-3xl px-6 sm:px-10 md:px-16 py-16 md:py-20 text-white overflow-hidden relative"
      >
        {/* ===== Auto Sliding / Fade Background Layers ===== */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ x: ["-15%", "15%", "-15%"] }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/15 to-transparent blur-3xl" />
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ x: ["15%", "-15%", "15%"] }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-600/15 to-transparent blur-3xl" />
        </motion.div>

        {/* Edge Fade (Left & Right Blur Effect) */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />

        {/* ===== Content ===== */}
        <div className="relative z-20 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-blue-400 mb-4"
          >
            Revenue clarity starts here
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Ready to turn your billing into a predictable revenue engine?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-neutral-300 text-base sm:text-lg mb-10 max-w-2xl"
          >
            We partner with healthcare organizations that want fewer denials,
            faster reimbursements, and complete visibility across their Revenue
            Cycle without operational chaos.
          </motion.p>

          {/* ===== CTA Buttons (UNCHANGED) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={"/rcm-contact"}>
              <button className="cursor-pointer text-sm md:text-lg bg-[#296BFC] text-white px-8 py-4 rounded-3xl font-medium shadow-sm hover:bg-[#0F5BD3] transition-colors">
                Request Revenue Assessment
              </button>
            </Link>

            <Link href={"/rcm-contact"}>
              <button className="cursor-pointer text-sm md:text-lg bg-white/5 text-white px-8 py-4 rounded-3xl font-medium border border-white/10 hover:bg-white/10 transition-colors">
                Talk to an RCM Specialist
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
