"use client";

import React, { useRef, useEffect, useState } from "react";
import { IoIosLink } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<{ website?: string; email?: string }>(
    {},
  );

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  const validateForm = () => {
    const newErrors: { website?: string; email?: string } = {};

    if (!website.trim()) {
      newErrors.website = "Website URL is required";
    } else if (!isValidUrl(website)) {
      newErrors.website = "Please enter a valid website URL (e.g., example.com)";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
    return pattern.test(url) || url.includes(".");
  };

  const isValidEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website: website.trim(),
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "✅ Analysis request submitted! Check your email for confirmation.",
        });
        setWebsite("");
        setEmail("");
        setErrors({});
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        throw new Error(data.message || "Failed to submit request");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "❌ Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const logos = [
    "/image-21-1.png",
    "/image-23.png",
    "/image-24.png",
    "/image-25.png",
    "/image-26.png",
    "/image-27.png",
    "/image-28.png",
    "/image-31.png",
    "/image-35.png",
    "/Jimdo_Logo_2021-1.svg",
    "/Myriad-Capital-Pradekite-investuoti-siandien-2-1.svg",
    "/nano.png",
    "/Skycop-Flight-Delay-Compensation-Claim-up-to-E600-0-1.svg",
  ];

  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        loop
        playsInline
        muted
        src="/shadergradient-pingpong.webm"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative text-center max-w-[1050px] px-6 text-white mt-20 sm:mt-24 md:mt-28 lg:mt-32 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#1570EF] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-3 sm:pb-4"
        >
          Grow Faster. Look Sharper. Work Smarter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg opacity-90 text-[#475467] max-w-2xl mx-auto"
        >
          Big decisions need the right guidance. We help leaders turn time into results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-10 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-5 sm:py-6 rounded-xl shadow-lg max-w-[750px] mx-auto mb-6 sm:mb-8 border border-gray-200"
        >
          <form onSubmit={handleSubmit}>
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-3 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                  <p className="text-xs sm:text-sm font-medium">{submitStatus.message}</p>
                </div>
              </motion.div>
            )}

            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <IoIosLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg sm:text-xl" />
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                      if (errors.website) setErrors({ ...errors, website: undefined });
                    }}
                    placeholder="yoursite.com"
                    className={`w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white/80 text-black outline-none border ${
                      errors.website
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#1570EF]"
                    } rounded-lg transition-colors placeholder-gray-500 text-sm sm:text-base`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.website && (
                  <p className="text-red-500 text-xs mt-1 text-left pl-3">
                    {errors.website}
                  </p>
                )}
              </div>

              <div className="flex-1 w-full">
                <div className="relative">
                  <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg sm:text-xl" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="your@email.com"
                    className={`w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white/80 text-black outline-none border ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 focus:border-[#1570EF]"
                    } rounded-lg transition-colors placeholder-gray-500 text-sm sm:text-base`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 text-left pl-3">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full md:w-[140px] lg:w-[150px] bg-[#1570EF] hover:bg-[#101828] duration-300 transition-all text-white font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-xs sm:text-sm">Analyzing...</span>
                    </>
                  ) : (
                    "Analyze Now"
                  )}
                </motion.button>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3 text-center">
              One click. One report. Everything you need to know about your online presence.
            </p>
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[#475467] font-semibold text-sm sm:text-base mb-4 sm:mb-6"
        >
          Trusted by 50+ companies
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="overflow-hidden w-full relative mb-6 sm:mb-8 px-4"
      >
        <div className="flex gap-8 sm:gap-10 whitespace-nowrap animate-marquee">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 flex items-center justify-center flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`Company ${index + 1}`}
                width={128}
                height={64}
                className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 25s;
            }
          }

          @media (max-width: 480px) {
            .animate-marquee {
              animation-duration: 20s;
            }
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default Hero;