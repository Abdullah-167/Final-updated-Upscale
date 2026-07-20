"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RCMSpecialtiesStatement() {
  const sliderRef = useRef<HTMLDivElement>(null);

  /* =====================
     MOBILE AUTO SCROLL
  ====================== */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let rafId: number;
    let isDragging = false;

    const autoScroll = () => {
      // auto scroll ONLY on small screens
      if (window.innerWidth < 768 && !isDragging) {
        slider.scrollLeft += 0.4;

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(autoScroll);
    };

    const onPointerDown = () => (isDragging = true);
    const onPointerUp = () => (isDragging = false);

    slider.addEventListener("pointerdown", onPointerDown);
    slider.addEventListener("pointerup", onPointerUp);
    slider.addEventListener("pointerleave", onPointerUp);

    rafId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(rafId);
      slider.removeEventListener("pointerdown", onPointerDown);
      slider.removeEventListener("pointerup", onPointerUp);
      slider.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-5 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#F5F9FF] text-neutral-900 rounded-3xl shadow-sm p-6 sm:p-8 md:p-12"
        >
          {/* ================= HEADER (UNCHANGED) ================= */}
          <div className="mb-10 md:mb-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 rounded-full mb-5"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700">
                Tailored RCM Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3"
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Revenue Cycle Management
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
            >
              for Specialized Healthcare Providers
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto md:mx-0"
            >
              Industry-specific expertise for optimized billing, coding, and
              revenue recovery
            </motion.p>
          </div>

          {/* ================= LABEL (UNCHANGED) ================= */}
          <p className="text-xs sm:text-sm mb-5 font-semibold text-gray-700 tracking-wide uppercase flex items-center justify-center md:justify-start gap-2">
            Specialties We Support
            <svg
              className="w-4 h-4 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </p>

          {/* ================= SPECIALTIES ================= */}
          <div className="relative">
            {/* Fade edges – MOBILE ONLY */}
            <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#F5F9FF] to-transparent z-10 md:hidden pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#F5F9FF] to-transparent z-10 md:hidden pointer-events-none" />

            {/* Desktop = wrap | Mobile = horizontal scroll */}
            <div
              ref={sliderRef}
              className="
                flex gap-2
                md:flex-wrap
                justify-center md:justify-start
                overflow-x-auto md:overflow-visible
                scrollbar-hide
                cursor-grab select-none
                py-1
              "
            >
              {[...rcmSpecialties, ...rcmSpecialties].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.04, duration: 0.25 }}
                  viewport={{ once: true }}
                  className="
                    bg-[#296BFC] text-white
                    text-xs sm:text-sm
                    px-4 py-2
                    rounded-full shadow-sm
                    hover:bg-[#0F5BD3]
                    transition-colors
                    cursor-default
                    shrink-0
                  "
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ================= DATA ================= */

const rcmSpecialties = [
  "Neurology",
  "Cardiology",
  "Orthopedics",
  "Internal Medicine",
  "Family Medicine",
  "Mental & Behavioral Health",
  "Urgent Care",
  "Physical Therapy",
  "Chiropractic",
  "Pediatrics",
  "Dermatology",
  "Gastroenterology",
  "Oncology",
  "Radiology",
  "Pain Management",
  "Endocrinology",
  "Pulmonology",
  "Nephrology",
  "Rheumatology",
  "Urology",
  "OB-GYN",
  "General Surgery",
  "Multi-Specialty Clinics",
  "Telehealth Providers",
  "Private Practices",
];
