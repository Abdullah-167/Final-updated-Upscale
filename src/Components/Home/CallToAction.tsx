"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 bg-[#1570EF] mx-auto px-8 py-40"
      >
        <div className="flex items-center">
          <div className="gap-6">
            <p className="text-sm md:text-lg pb-7 text-white">You've reached the end, so now…</p>
            <h3 className="text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Tell us what you’re building.
            </h3>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              We’ll help you map the right scope, team, timeline, and next steps.
            </p>
          </div>
          <div className="mt-[260px]">
            <Link href={"/contact-us"}>
              <button
                type="submit"
                className=" cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group"
              >
                Get a quote today
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-[#1570EF]"
                  ></path>
                </svg>
              </button>
            </Link>

          </div>
        </div>
        {/* Optional subtle background dots or pattern */}
        <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none"></div>

        <div className="absolute -top-18 -right-20 z-10">
          <svg
            viewBox="0 0 100 100"
            className="h-[28rem] w-[28rem] animate-[spin_15s_linear_infinite] text-blue-500"
            fill="none"
            aria-hidden="true"
          >
            <g stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
              <path d="M30 31 L44 49" />
              <path d="M61 28 L44 49" />
              <path d="M44 49 L32 70" />
            </g>
            <rect x="19" y="20" width="22" height="22" rx="7.5" fill="currentColor" />
            <rect x="46" y="13" width="30" height="30" rx="10" fill="currentColor" />
            <rect x="33" y="38" width="22" height="22" rx="7.5" fill="currentColor" />
            <rect x="21" y="59" width="22" height="22" rx="7.5" fill="currentColor" />
          </svg>
        </div>
      </motion.div>

    </section>
  );
};

export default CallToAction;
