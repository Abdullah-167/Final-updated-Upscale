"use client";

import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { IoIosLink } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  Code,
  FileText,
  Maximize,
  Pause,
  Play,
  Search,
  Shield,
  Target,
  TrendingUp,
  Users,
  Volume2,
  VolumeX,
  Zap,
  Menu,
  X,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useAnimation
} from "framer-motion";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import SplitTextSection from "./SplitTextSection";

// ============ FONTS ============
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// ============ TYPOGRAPHY SCALE ============
const TYPOGRAPHY = {
  // Headings - tight line-height (1.1-1.2), negative letter-spacing
  h1: "font-[family-name:var(--font-cabinet)] font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.02em]",
  h2: "font-[family-name:var(--font-cabinet)] font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.015em]",
  h3: "font-[family-name:var(--font-cabinet)] font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.01em]",
  h4: "font-[family-name:var(--font-cabinet)] font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em]",
  // Subheadings - semibold
  subheading: "font-[family-name:var(--font-display)] font-semibold text-xl sm:text-2xl lg:text-3xl leading-[1.3]",
  // Body - relaxed line-height (1.5-1.6)
  body: "font-[family-name:var(--font-body)] font-normal text-base leading-[1.6]",
  bodyLarge: "font-[family-name:var(--font-body)] font-normal text-lg leading-[1.6]",
  bodySmall: "font-[family-name:var(--font-body)] font-normal text-sm leading-[1.5]",
  // Labels - positive letter-spacing
  label: "font-[family-name:var(--font-body)] font-medium text-xs uppercase tracking-[0.08em]",
  labelSmall: "font-[family-name:var(--font-body)] font-medium text-[10px] uppercase tracking-[0.1em]",
  // Monospace
  mono: "font-[family-name:var(--font-mono)] font-normal text-sm leading-[1.5]",
};

// ============ SPACING SCALE ============
const SPACING = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "16px",
  4: "24px",
  5: "32px",
  6: "48px",
  7: "64px",
  8: "96px",
  9: "128px",
};

// ============ BORDER RADIUS SCALE ============
const RADIUS = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
};

// ============ COLOR SYSTEM ============
const COLORS = {
  primary: "#1570EF",
  primaryHover: "#0A5BD0",
  primaryLight: "#E8F0FE",
  primaryDark: "#0B4A9F",
  secondary: "#4F46E5",
  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  text: {
    primary: "#060814",
    secondary: "#475467",
    white: "#FFFFFF",
    muted: "#6B7280",
  },
};

// ============ COMPONENTS ============

// ---------- CUSTOM CURSOR ----------
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: position.x - (isHovering ? 20 : 8),
        y: position.y - (isHovering ? 20 : 8),
        scale: isHovering ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5,
      }}
      style={{
        width: isHovering ? 40 : 16,
        height: isHovering ? 40 : 16,
        borderRadius: "50%",
        backgroundColor: isHovering ? "rgba(21, 112, 239, 0.15)" : "rgba(21, 112, 239, 0.5)",
        border: isHovering ? "2px solid rgba(21, 112, 239, 0.8)" : "2px solid rgba(21, 112, 239, 0.6)",
        backdropFilter: isHovering ? "blur(4px)" : "none",
      }}
    />
  );
};

// ---------- SCROLLBAR STYLING ----------
const ScrollbarStyles = () => (
  <style jsx global>{`
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: ${COLORS.gray[100]};
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${COLORS.primary};
      border-radius: 4px;
      transition: background 0.3s ease;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${COLORS.primaryHover};
    }
    * {
      scrollbar-width: thin;
      scrollbar-color: ${COLORS.primary} ${COLORS.gray[100]};
    }
  `}</style>
);

// ---------- PRELOADER ----------
const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-[#1570EF] border-t-transparent rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-[family-name:var(--font-body)] text-sm text-gray-500"
            >
              Loading experience...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};



// ---------- HERO ----------
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [errors, setErrors] = useState<{ website?: string; email?: string }>({});
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => { });
    }
  }, []);

  const validateForm = useCallback(() => {
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
  }, [website, email]);

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
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website: website.trim(), email: email.trim() }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitStatus({ type: "success", message: "✅ Analysis request submitted! Check your email for confirmation." });
        setWebsite("");
        setEmail("");
        setErrors({});
        setTimeout(() => setSubmitStatus({ type: null, message: "" }), 5000);
      } else {
        throw new Error(data.message || "Failed to submit request");
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "❌ Something went wrong. Please try again or contact us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const logos = useMemo(() => [
    "/image-21-1.png", "/image-23.png", "/image-24.png", "/image-25.png",
    "/image-26.png", "/image-27.png", "/image-28.png", "/image-31.png",
    "/image-35.png", "/Jimdo_Logo_2021-1.svg", "/Myriad-Capital-Pradekite-investuoti-siandien-2-1.svg",
    "/nano.png", "/Skycop-Flight-Delay-Compensation-Claim-up-to-E600-0-1.svg",
  ], []);

  return (
    <motion.div style={{ scale: heroScale }} className="relative w-full h-auto flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <video
        ref={videoRef}
        loop
        playsInline
        muted
        src="/shadergradient-pingpong.webm"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/70 pointer-events-none" aria-hidden="true" />

      <div className="relative text-center max-w-[1050px] px-6 text-white mt-8 sm:mt-12 md:mt-16 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={TYPOGRAPHY.h1 + " text-[#1570EF] pb-4"}
        >
          Grow Faster. Look Sharper. Work Smarter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={TYPOGRAPHY.bodyLarge + " text-[#475467] max-w-2xl mx-auto"}
        >
          Big decisions need the right guidance. We help leaders turn time into results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-10 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-5 sm:py-6 rounded-xl shadow-lg max-w-[750px] mx-auto mb-6 sm:mb-8 border border-gray-200"
        >
          <form onSubmit={handleSubmit} noValidate>
            {submitStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 p-3 rounded-lg ${submitStatus.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-center gap-2">
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p className={TYPOGRAPHY.bodySmall + " font-medium"}>
                    {submitStatus.message}
                  </p>
                </div>
              </motion.div>
            )}

            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-center justify-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <IoIosLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg sm:text-xl" aria-hidden="true" />
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                      if (errors.website) setErrors({ ...errors, website: undefined });
                    }}
                    placeholder="yoursite.com"
                    className={`w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white/80 text-gray-900 outline-none border ${errors.website
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1570EF]"
                      } rounded-lg transition-colors placeholder-gray-500 ${TYPOGRAPHY.bodySmall}`}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.website}
                    aria-describedby={errors.website ? "website-error" : undefined}
                    style={{ touchAction: "manipulation" }}
                  />
                  {errors.website && (
                    <p id="website-error" className="text-red-500 text-xs mt-1 text-left pl-3 font-[family-name:var(--font-body)]">
                      {errors.website}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="relative">
                  <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg sm:text-xl" aria-hidden="true" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="your@email.com"
                    className={`w-full pl-9 sm:pl-10 pr-3 py-2.5 sm:py-3 bg-white/80 text-gray-900 outline-none border ${errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#1570EF]"
                      } rounded-lg transition-colors placeholder-gray-500 ${TYPOGRAPHY.bodySmall}`}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    style={{ touchAction: "manipulation" }}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1 text-left pl-3 font-[family-name:var(--font-body)]">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full md:w-[150px] bg-[#1570EF] hover:bg-[#0A5BD0] duration-300 transition-all text-white font-[family-name:var(--font-body)] font-semibold py-2.5 sm:py-3 rounded-lg text-sm sm:text-base shadow-md shadow-[#1570EF]/25 hover:shadow-[#1570EF]/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none"
                  style={{ touchAction: "manipulation" }}
                  aria-label={isSubmitting ? "Analyzing..." : "Analyze Now"}
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /><span className="text-xs sm:text-sm">Analyzing...</span></>
                  ) : (
                    "Analyze Now"
                  )}
                </motion.button>
              </div>
            </div>

            <p className={TYPOGRAPHY.bodySmall + " text-gray-500 mt-3 text-center"}>
              One click. One report. Everything you need to know about your online presence.
            </p>
          </form>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={TYPOGRAPHY.label + " text-[#475467] font-semibold mb-4 sm:mb-6"}
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
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-24 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 flex items-center justify-center flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`Trusted company logo ${index + 1}`}
                width={128}
                height={64}
                className="object-contain w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          .animate-marquee { display: flex; animation: marquee 30s linear infinite; }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @media (max-width: 768px) { .animate-marquee { animation-duration: 25s; } }
          @media (max-width: 480px) { .animate-marquee { animation-duration: 20s; } }
        `}</style>
      </motion.div>
    </motion.div>
  );
};

// ---------- HOME ABOUT ----------
interface CountNumberProps {
  value: number;
  className?: string;
}

const CountNumber: React.FC<CountNumberProps> = ({ value, className = "" }) => {
  const prevValue = useRef(value);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    if (value > prevValue.current) setDirection('up');
    else if (value < prevValue.current) setDirection('down');
    prevValue.current = value;
  }, [value]);

  const displayValue = value.toString();

  return (
    <span className={`inline-flex ${className}`}>
      {displayValue.split('').map((digit, index) => (
        <span key={index} className="relative inline-block w-[0.6em] h-[1.2em] overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={`${digit}-${index}-${value}`}
              initial={{ y: direction === 'up' ? '100%' : '-100%', opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction === 'up' ? '-100%' : '100%', opacity: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-display)]"
              style={{ fontFeatureSettings: '"tnum" 1' }}
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
};

const HomeAbout = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const [counts, setCounts] = useState({ projects: 0, clients: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const text = "We don't just offer services we architect growth. In a world where attention is currency and speed is survival, we help brands cut through the noise with precision-engineered strategies. We don't believe in templates or shortcuts. We believe in understanding your unique DNA and building systems that scale, strategies that stick, and results that speak for themselves. This isn't just digital marketing. This is digital mastery.";
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let index = 0;
          const interval = setInterval(() => {
            if (index < words.length) {
              setVisibleWords(prev => [...prev, index]);
              index++;
            } else {
              clearInterval(interval);
            }
          }, 100);
          return () => clearInterval(interval);
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [words.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const projectsDuration = 2500;
          const projectsStartTime = Date.now();
          const projectsInterval = setInterval(() => {
            const elapsed = Date.now() - projectsStartTime;
            const progress = Math.min(elapsed / projectsDuration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(eased * 140);
            setCounts(prev => ({ ...prev, projects: currentCount }));
            if (progress >= 1) { setCounts(prev => ({ ...prev, projects: 140 })); clearInterval(projectsInterval); }
          }, 50);

          const clientsDuration = 2500;
          const clientsStartTime = Date.now();
          const clientsInterval = setInterval(() => {
            const elapsed = Date.now() - clientsStartTime;
            const progress = Math.min(elapsed / clientsDuration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(eased * 50);
            setCounts(prev => ({ ...prev, clients: currentCount }));
            if (progress >= 1) { setCounts(prev => ({ ...prev, clients: 50 })); clearInterval(clientsInterval); }
          }, 50);

          return () => { clearInterval(projectsInterval); clearInterval(clientsInterval); };
        }
      });
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="max-w-[1200px] mx-auto relative w-full overflow-visible py-24 px-6 sm:px-10 lg:px-[40px]"
      aria-label="About us"
    >
      <div className="flex flex-col justify-between lg:flex-row items-start gap-16">
        <div className="lg:flex-shrink-0 lg:sticky lg:top-24">
          <h2 className={TYPOGRAPHY.h2 + " text-[#060814]"}>
            About
          </h2>
        </div>
        <div className="flex-1">
          <div className='max-w-[600px] ml-auto'>
            <p className='font-[family-name:var(--font-display)] text-[34px] pb-[100px] leading-[1.3]'>
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`transition-colors duration-300 ${visibleWords.includes(index) ? 'text-[#1570EF]' : 'text-[#060814]'
                    }`}
                  style={{ transitionDelay: visibleWords.includes(index) ? `${index * 20}ms` : '0ms' }}
                >
                  {word}{' '}
                </span>
              ))}
            </p>
            <div className='flex gap-18 mb-[70px]'>
              <div>
                <div className='relative inline-flex items-start text-[152px] leading-[170px] font-[family-name:var(--font-display)]'>
                  <CountNumber value={counts.projects} />
                  <span className='text-[65px] text-[#1570EF] leading-none ml-1'>+</span>
                </div>
                <p className={TYPOGRAPHY.body + " text-[#475467]"}>Projects Completed</p>
              </div>
              <div>
                <div className='relative inline-flex items-start text-[152px] leading-[170px] font-[family-name:var(--font-display)]'>
                  <CountNumber value={counts.clients} />
                  <span className='text-[65px] text-[#1570EF] leading-none ml-1'>+</span>
                </div>
                <p className={TYPOGRAPHY.body + " text-[#475467]"}>Clients Served Worldwide</p>
              </div>
            </div>
            <div className='flex gap-8 flex-wrap'>
              <Image src={'/awards-design-nominees.svg'} alt={'Upscale Alliance Awards Design Nominees'} width={130} height={130} loading="lazy" />
              <Image src={'/awards-awwwards-logo.svg'} alt={'Upscale Alliance Awards Awwwards Logo'} width={130} height={130} loading="lazy" />
              <Image src={'/awards-css-design-awards-logo.svg'} alt={'Upscale Alliance Awards CSS Design Awards Logo'} width={130} height={130} loading="lazy" />
              <Image src={'/clutch-web-design.svg'} alt={'Upscale Alliance Clutch Web Design'} width={80} height={80} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- SERVICES SECTION ----------
type Service = {
  number: string;
  title: string;
  description: string;
  href: string;
  cardFrom: string;
  cardTo: string;
  cardText: string;
};

const services: Service[] = [
  { 
    number: "01", 
    title: "AI Automation", 
    description: "Deploy self-learning AI agents that run your operations 24/7 so you scale without scaling headcount.",
    href: "/services/ai-automation", 
    cardFrom: "#3B82F6", 
    cardTo: "#2563EB", 
    cardText: "#FFFFFF" 
  },
  { 
    number: "02", 
    title: "Web Design & Dev", 
    description: "Conversion-first engineering meets pixel-perfect design. We build sites that load fast, look sharp, and turn visitors into revenue.",
    href: "/services/website-development", 
    cardFrom: "#0EA5E9", 
    cardTo: "#0284C7", 
    cardText: "#FFFFFF" 
  },
  { 
    number: "03", 
    title: "Link Building", 
    description: "Secure high-impact backlinks from industry leaders—not directories. Real authority that search engines actually trust.",
    href: "/services/link-building", 
    cardFrom: "#8B5CF6", 
    cardTo: "#7C3AED", 
    cardText: "#FFFFFF" 
  },
  { 
    number: "04", 
    title: "Content Writing", 
    description: "Words that persuade, rank, and convert. Every piece is strategically crafted to build authority and drive action.",
    href: "/services/content-writing", 
    cardFrom: "#F59E0B", 
    cardTo: "#D97706", 
    cardText: "#FFFFFF" 
  },
  { 
    number: "05", 
    title: "Social Media Marketing", 
    description: "Turn your brand into a movement with scroll-stopping content and culture-driven strategy that actually builds a following.",
    href: "/services/paid-advertising", 
    cardFrom: "#EC4899", 
    cardTo: "#DB2777", 
    cardText: "#FFFFFF" 
  },
  { 
    number: "06", 
    title: "SEO", 
    description: "Rank higher and get found by the people who matter. We drive qualified traffic, not just noise.",
    href: "/services/seo", 
    cardFrom: "#10B981", 
    cardTo: "#059669", 
    cardText: "#FFFFFF" 
  },
  { 
    number: "07", 
    title: "Video Editing", 
    description: "Turn raw footage into polished, engaging stories that capture attention and drive action.",
    href: "/services/video-editing", 
    cardFrom: "#EF4444", 
    cardTo: "#DC2626", 
    cardText: "#FFFFFF" 
  },
  { 
    number: "08", 
    title: "GEO", 
    description: "Make your brand the answer when AI assistants like ChatGPT and Gemini get asked questions.",
    href: "/services/generative-engine-optimization", 
    cardFrom: "#06B6D4", 
    cardTo: "#0891B2", 
    cardText: "#FFFFFF" 
  },
  { 
    number: "09", 
    title: "Revenue Cycle Management", 
    description: "Tighten your revenue loop from lead capture to payment collection. Less friction, more cash flow.",
    href: "/services/revenue-cycle-management", 
    cardFrom: "#F97316", 
    cardTo: "#EA580C", 
    cardText: "#FFFFFF" 
  },
];

const CARD_WIDTH = 240;
const CARD_HEIGHT = 170;

const NewServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cardPos, setCardPos] = useState({ left: 0, top: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    if (rafId.current !== null) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      setCardPos({ left: x - CARD_WIDTH / 2, top: y - CARD_HEIGHT / 2 });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const active = activeIndex !== null ? services[activeIndex] : null;

  return (
    <section id="services" className={`bg-gradient-to-r from-blue-50 to-cyan-50 py-16 sm:py-20 lg:py-24 w-full overflow-x-hidden`} aria-label="Our services">
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6 mb-8 sm:mb-10">
        <div>
          <p className={TYPOGRAPHY.labelSmall + " text-[#1570EF] mb-4"}>
            ( Services )
          </p>
          <h2 className={TYPOGRAPHY.h2 + " text-gray-900"}>
            Full-stack
            <br />
            digital growth
          </h2>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative border-t border-gray-200 w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        role="list"
      >
        <div
          aria-hidden="true"
          className="hidden sm:block absolute rounded-2xl pointer-events-none overflow-hidden"
          style={{
            left: 0,
            top: 0,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            transform: `translate3d(${cardPos.left}px, ${cardPos.top}px, 0)`,
            willChange: "transform",
            opacity: active ? 1 : 0,
            transition: "transform 380ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out",
            backgroundImage: active ? `radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(135deg, ${active.cardFrom} 0%, ${active.cardTo} 100%)` : undefined,
            backgroundSize: "14px 14px, 100% 100%",
            padding: "20px",
            zIndex: 20,
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <span className={TYPOGRAPHY.labelSmall} style={{ color: active?.cardText }}>
              {active ? `${active.number} / SERVICE` : ""}
            </span>
            <span className="font-[family-name:var(--font-display)] font-semibold text-2xl leading-tight" style={{ color: active?.cardText }}>
              {active ? active.title : ""}
            </span>
          </div>
        </div>

        {services.map((service, index) => {
          const isActive = activeIndex === index;
          return (
            <Link
              key={service.number}
              href={service.href}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`relative flex w-full items-center gap-4 sm:gap-6 lg:gap-10 border-b border-gray-200 px-6 sm:px-10 lg:px-16 transition-colors duration-300 ${isActive ? "bg-white" : "bg-transparent"
                }`}
              style={{ height: 100 }}
              role="listitem"
              aria-current={isActive ? "true" : undefined}
            >
              <span className={`${TYPOGRAPHY.label} shrink-0 transition-colors duration-300 ${isActive ? "text-gray-600" : "text-gray-400"
                }`}>
                {service.number}
              </span>
              <h3 className={`font-[family-name:var(--font-cabinet)] font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-none transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-700"
                }`}>
                {service.title}
              </h3>
              <p className={`hidden lg:block ml-auto max-w-[16rem] ${TYPOGRAPHY.bodySmall} transition-colors duration-300 ${isActive ? "text-gray-600" : "text-gray-500"
                }`}>
                {service.description}
              </p>
              <span
                aria-hidden="true"
                className={isActive ? "text-[#1570EF]" : "text-gray-400"}
                style={{
                  transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), color 300ms ease-out",
                  transform: isActive ? "rotate(0deg)" : "rotate(-45deg)",
                  display: "inline-block",
                }}
              >
                &#8594;
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

// ---------- DIGITAL SECTION ----------
const Digital = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => { });
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) video.pause();
      else video.play();
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      if (video.duration) setDuration(video.duration);
    }
  }, []);

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (video) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      video.currentTime = percentage * video.duration;
      setProgress(percentage * 100);
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    const video = videoRef.current;
    if (video && video.requestFullscreen) video.requestFullscreen();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className={`max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-[40px] py-24 w-full overflow-x-hidden`} aria-label="Digital marketing expertise">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="max-w-[650px]">
          <h2 className={TYPOGRAPHY.h2 + " pb-6 sm:pb-10 text-gray-900"}>
            Work with <span className="text-[#1570EF]">Marketing Experts</span> Who Truly Care
          </h2>
          <p className={TYPOGRAPHY.bodyLarge + " pb-6 sm:pb-10 text-[#475467]"}>
            Digital marketing for businesses isn't just our service it's our passion. We treat your business like our own, focusing on campaigns that truly move the needle (not vanity metrics). We are deeply committed to our valued clients and their success.
          </p>
          <Link href={"/contact-us"}>
            <button className="bg-[#1570EF] hover:bg-[#0A5BD0] transition-all duration-300 text-white px-6 py-3 font-[family-name:var(--font-body)] font-semibold rounded-lg shadow-md shadow-[#1570EF]/25 hover:shadow-[#1570EF]/40 cursor-pointer text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none">
              Book a Free Consultation
            </button>
          </Link>
        </div>

        <div className="bg-[#1570EF] p-4 sm:p-5 rounded-4xl max-w-[320px] w-full">
          <div
            className="relative group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <video
              ref={videoRef}
              loop
              playsInline
              src="/reviews.mp4"
              className="mx-auto w-full h-full max-w-[350px] max-h-[500px] rounded-[30px]"
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              aria-label="Client testimonials video"
            />
            <button
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 sm:p-5 hover:bg-black/70 transition-colors">
                {isPlaying ? <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> : <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />}
              </div>
            </button>
            <div className={`absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-xl p-2 sm:p-3 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'
              }`}>
              <div className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-2" onClick={handleProgressClick} role="slider" aria-label="Video progress">
                <div className="h-full bg-[#1570EF] rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button onClick={togglePlay} className="text-white hover:text-[#1570EF] transition-colors" aria-label={isPlaying ? "Pause" : "Play"}>
                    {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                  <button onClick={toggleMute} className="text-white hover:text-[#1570EF] transition-colors" aria-label={isMuted ? "Unmute" : "Mute"}>
                    {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                  <span className={TYPOGRAPHY.mono + " text-white text-xs sm:text-sm"}>{formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}</span>
                </div>
                <button onClick={handleFullscreen} className="text-white hover:text-[#1570EF] transition-colors" aria-label="Fullscreen">
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- DATA DRIVEN ----------
const comparisonData = [
  { metric: "Website Traffic", before: 45, after: 85 },
  { metric: "Search Visibility", before: 35, after: 78 },
  { metric: "Conversion Rate", before: 28, after: 65 },
  { metric: "Brand Mentions", before: 20, after: 72 },
  { metric: "Domain Authority", before: 40, after: 75 },
  { metric: "Lead Generation", before: 30, after: 82 },
];

const DataDriven = () => {
  return (
    <section className={`w-full py-16 sm:py-20 lg:py-28 px-6 bg-gradient-to-r from-blue-50 to-cyan-50`} aria-label="Data-driven results">
      <div className="max-w-[1250px] mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap justify-between items-center gap-x-10">
          <div className="max-w-[600px]">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 leading-tight pb-4 sm:pb-5"}>
              Data-Driven Digital Services That Accelerate Your Growth
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-[#475467] max-w-[450px] pb-5"}>
              We combine analytics, modern development, and performance marketing to build scalable digital systems that improve visibility, increase revenue, and strengthen your brand's competitive edge.
            </p>
            <Link href={"/contact-us"}>
              <button className="bg-[#1570EF] hover:bg-[#0A5BD0] transition-all duration-300 text-white px-5 sm:px-6 py-2.5 font-[family-name:var(--font-body)] font-semibold rounded-lg shadow-md shadow-[#1570EF]/25 hover:shadow-[#1570EF]/40 cursor-pointer text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none">
                Book a Free Consultation
              </button>
            </Link>
          </div>

          <div className="lg:mt-0 mt-8 sm:mt-10 w-full max-w-[600px] bg-white p-4 sm:p-6 rounded-[35px] shadow-lg">
            <h3 className={TYPOGRAPHY.h4 + " text-gray-800 mb-2 text-center"}>
              Performance Metrics Comparison
            </h3>
            <p className={TYPOGRAPHY.bodySmall + " text-gray-500 text-center mb-4"}>
              Before vs After Working With Us
            </p>
            <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" tick={{ fontSize: 10 }} interval={0} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, '']} contentStyle={{ backgroundColor: 'white', borderRadius: '8px', fontFamily: 'Inter, sans-serif' }} />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="before" name="Before" fill="#94A3B8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" name="After Working With Us" fill="#1570EF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <p className={TYPOGRAPHY.bodySmall + " text-gray-500"}>Marketing Visibility</p>
                <p className="font-[family-name:var(--font-cabinet)] font-bold text-base sm:text-lg text-[#1570EF]">↑ 123%</p>
              </div>
              <div className="text-center">
                <p className={TYPOGRAPHY.bodySmall + " text-gray-500"}>Brand Authority</p>
                <p className="font-[family-name:var(--font-cabinet)] font-bold text-base sm:text-lg text-[#1570EF]">↑ 87%</p>
              </div>
              <div className="text-center">
                <p className={TYPOGRAPHY.bodySmall + " text-gray-500"}>ROI Growth</p>
                <p className="font-[family-name:var(--font-cabinet)] font-bold text-base sm:text-lg text-[#1570EF]">↑ 156%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- WORK SECTION ----------
type WorkItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  caseStudyUrl: string;
  tags: string[];
  category: string;
};

const workData: WorkItem[] = [
  { id: "1", title: "Data Wizz", description: "Designing the new branding, website, pitch deck and marketing collateral for a $12.5M seed AI platform", image: "/projects/web/datawizz/DATAWIZZ.avif", video: "/projects/web/datawizz/DATAWIZZ_CASE_STUDY_web.mp4", caseStudyUrl: "/projects/product-development/datawizz", tags: ["Branding", "Web Design", "AI"], category: "Web Design & Branding" },
  { id: "2", title: "N3XT.io", description: "Designed the brand and digital experience for a $72M-funded next-gen narrow bank platform.", image: "/projects/web/n3xt/n3xtcard.avif", video: "/projects/web/n3xt/N3XT_CASESTUDY_web.mp4", caseStudyUrl: "/projects/product-development/n3xt", tags: ["Web Design", "E-Commerce"], category: "Web Design & Dev" },
  { id: "3", title: "Spatial", description: "Brand refresh and a new website presence for a spatial computing and 3D collaboration platform.", image: "/projects/web/spatial/Spatial.avif", video: "/projects/web/spatial/Spatial_web.mp4", caseStudyUrl: "/projects/product-development/spatial", tags: ["Link Building", "SEO"], category: "Link Building" },
  { id: "4", title: "Droxy", description: "Strategic content ecosystem that generated 12,000+ qualified leads in 12 months.", image: "/projects/web/droxy/droxy.webp", video: "/projects/web/droxy/droxy_CASESTUDY_web.mp4", caseStudyUrl: "/projects/product-development/droxy", tags: ["Content Writing", "Strategy"], category: "Content Marketing" },
  { id: "5", title: "Zave.it", description: "Designing the brand, site and product for an AI operating layer that helps real estate investment firms scale AUM.", image: "/projects/web/zaveit/zaveit1.avif", video: "/projects/web/zaveit/zaveitweb.mp4", caseStudyUrl: "/projects/product-development/zaveit", tags: ["Social Media", "Branding"], category: "Social Media Marketing" },
  { id: "6", title: "GanAI", description: "Future-proofed AI search optimization that made our client the #1 answer in ChatGPT and Perplexity results.", image: "/projects/web/ganai/genaimain.webp", video: "/projects/web/genai/genaimain.mp4", caseStudyUrl: "/projects/product-development/gan-ai", tags: ["GEO", "AI Search"], category: "GEO & AI" },
  { id: "4", title: "Droxy", description: "Strategic content ecosystem that generated 12,000+ qualified leads in 12 months.", image: "/projects/web/droxy/droxy.webp", video: "/work/content-demo.mp4", caseStudyUrl: "/projects/product-development/droxy", tags: ["Content Writing", "Strategy"], category: "Content Marketing" },
  { id: "5", title: "Zave.it", description: "Designing the brand, site and product for an AI operating layer that helps real estate investment firms scale AUM.", image: "/projects/web/zaveit/zaveit1.avif", video: "/projects/web/zaveit/zaveitweb.mp4", caseStudyUrl: "/projects/product-development/zaveit", tags: ["Social Media", "Branding"], category: "Social Media Marketing" },
  { id: "6", title: "GanAI", description: "Future-proofed AI search optimization that made our client the #1 answer in ChatGPT and Perplexity results.", image: "/projects/web/genai/genai.webp", video: "/work/geo-demo.mp4", caseStudyUrl: "/projects/product-development/gan-ai", tags: ["GEO", "AI Search"], category: "GEO & AI" },
];

const WorkCard = ({ item }: { item: WorkItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration) {
      setVideoDuration(video.duration);
      setCurrentTime(video.currentTime);
      if (video.currentTime >= video.duration - 0.1) { video.currentTime = 0; video.play().catch(() => { }); }
    }
  }, []);

  const handleVideoEnded = useCallback(() => {
    const video = videoRef.current;
    if (video) { video.currentTime = 0; video.play().catch(() => { }); }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    const video = videoRef.current;
    if (video && !videoError) {
      video.muted = true;
      if (!hasStartedPlaying) { video.currentTime = 0; setHasStartedPlaying(true); }
      const playPromise = video.play();
      if (playPromise !== undefined) playPromise.catch(() => { });
    }
  }, [videoError, hasStartedPlaying]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    const video = videoRef.current;
    if (video) video.pause();
  }, []);

  const handleVideoError = useCallback(() => setVideoError(true), []);

  useEffect(() => {
    return () => { const video = videoRef.current; if (video) { video.pause(); video.currentTime = 0; } };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-[16px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
    >
      <Link href={item.caseStudyUrl} aria-label={`View case study: ${item.title}`}>
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
          <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out z-10 ${isHovering ? "opacity-0" : "opacity-100"}`}>
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={450}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = "/work/fallback-image.jpg"; }}
            />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out z-20 ${isHovering ? "opacity-100" : "opacity-0"}`}>
            {!videoError ? (
              <video
                ref={videoRef}
                src={item.video}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
                poster={item.image}
                onError={handleVideoError}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
                onLoadedMetadata={() => { if (videoRef.current) setVideoDuration(videoRef.current.duration); }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className={TYPOGRAPHY.bodySmall + " text-gray-500"}>Video unavailable</span>
              </div>
            )}
          </div>
          <div className="absolute top-4 left-4 z-30 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-[family-name:var(--font-body)] text-xs font-semibold text-gray-800 shadow-sm">
            {item.category}
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-30 pointer-events-none ${isHovering ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`}>
            <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 transform transition-transform duration-500 group-hover:scale-110">
              <Play className="w-8 h-8 text-white fill-white/10" />
            </div>
          </div>
          {isHovering && !videoError && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-30">
              <div className="h-full bg-[#1570EF] transition-all duration-100" style={{ width: videoDuration > 0 ? `${(currentTime / videoDuration) * 100}%` : '0%' }} />
            </div>
          )}
        </div>

        <div className="p-6 relative z-10 bg-white">
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags.map((tag, index) => (
              <span key={index} className={TYPOGRAPHY.label + " text-[#1570EF] bg-blue-50 px-2.5 py-1 rounded-full"}>
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-[family-name:var(--font-cabinet)] font-bold text-xl text-gray-900 mb-2 group-hover:text-[#1570EF] transition-colors duration-300 line-clamp-2">
            {item.title}
          </h3>
          <p className={TYPOGRAPHY.bodySmall + " text-[#475467] line-clamp-2"}>
            {item.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

const WorkSection = () => {
  const row1 = workData.slice(0, 3);
  const row2 = workData.slice(3, 6);

  return (
    <section id="work" className={`w-full py-16 sm:py-20 lg:py-28 px-6 bg-gradient-to-b from-white to-gray-50/50`} aria-label="Our work and case studies">
      <div className="max-w-[1250px] mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="inline-flex items-center gap-3 mb-4">
            <span className="w-3 h-0.5 bg-[#1570EF] rounded-full" aria-hidden="true" />
            <span className={TYPOGRAPHY.label + " text-[#1570EF] font-semibold"}>Our Work</span>
            <span className="w-3 h-0.5 bg-[#1570EF] rounded-full" aria-hidden="true" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
            Case Studies That <br className="sm:hidden" />
            <span className="text-[#1570EF]">Prove Our Impact</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className={TYPOGRAPHY.body + " text-[#475467] max-w-2xl mx-auto"}>
            See how we've helped businesses like yours achieve measurable growth through strategy, innovation, and execution.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {row1.map((item) => <WorkCard key={item.id} item={item} />)}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {row2.map((item) => <WorkCard key={item.id} item={item} />)}
        </motion.div>
      </div>
    </section>
  );
};

// ---------- PROCESS SECTION ----------
interface ProcessCardProps {
  title: string;
  description: string;
  step: number;
  icon: React.ReactNode;
  deliverables: string[];
  focusAreas: string[];
  isWide?: boolean;
  circleSize: { width: number; height: number };
  circlePosition?: { top: number; left: number };
}

const ProcessCard = ({
  title,
  description,
  step,
  icon,
  deliverables,
  focusAreas,
  isWide = false,
  circleSize,
  circlePosition = { top: -48, left: -150 },
}: ProcessCardProps) => {
  const circleControls = useAnimation();

  const handleMouseEnter = useCallback(() => {
    circleControls.start({ x: 0, y: 0, opacity: 0.08, scale: 1.05, transition: { type: "spring", stiffness: 120, damping: 15 } });
  }, [circleControls]);

  const handleMouseLeave = useCallback(() => {
    circleControls.start({ x: -180, y: -120, opacity: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } });
  }, [circleControls]);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-[16px] shadow-lg relative overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#1570EF]/30 transition-all duration-300 group ${isWide ? "md:col-span-2" : ""
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-50/60 to-blue-100/30 absolute rounded-full"
        style={{ width: `${circleSize.width}px`, height: `${circleSize.height}px`, top: `${circlePosition.top}px`, left: `${circlePosition.left}px` }}
        animate={circleControls}
        initial={{ x: -180, y: -120, opacity: 0, scale: 1 }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] bg-gradient-to-br from-[#1570EF] to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-[#1570EF]/25 transition-shadow">
                <span className="text-white font-[family-name:var(--font-cabinet)] font-bold text-lg sm:text-xl">{step}</span>
              </div>
              <div className="absolute -bottom-5 -right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-[8px] bg-white border-2 border-white shadow-lg flex items-center justify-center">
                <div className="text-[#1570EF] text-sm sm:text-base">{icon}</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className={TYPOGRAPHY.label + " text-gray-500 mb-2"}>Focus Areas</div>
            <div className="flex gap-2">
              {focusAreas.slice(0, 2).map((area, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-50 text-[#1570EF] text-xs font-medium rounded-[8px] border border-blue-100 font-[family-name:var(--font-body)]">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="font-[family-name:var(--font-cabinet)] font-bold text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4">{title}</h3>
          <p className={TYPOGRAPHY.body + " text-[#475467] mb-6 sm:mb-8"}>{description}</p>

          <div className="hidden md:block">
            <h4 className={TYPOGRAPHY.label + " text-gray-500 mb-4 flex items-center gap-2"}>
              <CheckCircle className="w-4 h-4" />
              Key Deliverables
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-[8px] hover:bg-blue-50/50 transition-colors">
                  <div className="w-6 h-6 rounded-[4px] bg-white border border-blue-100 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></div>
                  </div>
                  <span className={TYPOGRAPHY.bodySmall + " text-gray-700"}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className={TYPOGRAPHY.bodySmall + " font-medium text-gray-700"}>Progress</span>
                <span className={TYPOGRAPHY.bodySmall + " font-bold text-[#1570EF]"}>Step {step} of 5</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-[#1570EF] via-blue-500 to-blue-400 h-2 rounded-full shadow-inner"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 5) * 100}%` }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const processData = [
    { title: "Deep Analysis", description: "We begin by thoroughly understanding your business objectives, target audience, and competitive landscape. This research-intensive phase forms the strategic foundation for all subsequent work.", step: 1, icon: <Search className="w-5 h-5" />, deliverables: ["Comprehensive Business Analysis", "Competitive Landscape Report", "Target Audience Personas", "SWOT Analysis Document"], focusAreas: ["Research", "Analysis", "Strategy"], isWide: true, circleSize: { width: 320, height: 320 }, circlePosition: { top: -140, left: -240 } },
    { title: "Strategic Roadmapping", description: "Based on insights gathered, we develop a detailed strategic plan with clear objectives, KPIs, timelines, and resource allocation to ensure alignment with your business goals.", step: 2, icon: <Target className="w-5 h-5" />, deliverables: ["Strategic Roadmap Document", "KPI & Success Metrics", "Project Timeline & Milestones", "Resource Allocation Plan"], focusAreas: ["Planning", "Strategy", "Roadmapping"], isWide: false, circleSize: { width: 260, height: 260 }, circlePosition: { top: -100, left: -180 } },
    { title: "Design & Development Execution", description: "Our team implements the strategic plan through precise design and development work, ensuring technical excellence, user-centric design, and optimal performance.", step: 3, icon: <Code className="w-5 h-5" />, deliverables: ["Technical Implementation", "Design Systems & Components", "Quality Assurance Reports", "Performance Optimization"], focusAreas: ["Execution", "Development", "Design"], isWide: false, circleSize: { width: 280, height: 280 }, circlePosition: { top: -110, left: -200 } },
    { title: "Testing & Quality Assurance", description: "We rigorously test all deliverables across multiple parameters to ensure functionality, performance, security, and user experience meet our high standards.", step: 4, icon: <Shield className="w-5 h-5" />, deliverables: ["Comprehensive Testing Reports", "Performance Benchmarks", "Security Audit Results", "User Experience Reviews"], focusAreas: ["Testing", "Quality", "Security"], isWide: false, circleSize: { width: 240, height: 240 }, circlePosition: { top: -90, left: -160 } },
    { title: "Launch & Continuous Optimization", description: "After successful deployment, we monitor performance, gather data insights, and implement continuous improvements to drive ongoing growth and success.", step: 5, icon: <TrendingUp className="w-5 h-5" />, deliverables: ["Launch & Deployment Report", "Performance Analytics Dashboard", "Optimization Recommendations", "Growth Strategy Updates"], focusAreas: ["Optimization", "Growth", "Analysis"], isWide: false, circleSize: { width: 300, height: 300 }, circlePosition: { top: -130, left: -220 } },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden" aria-label="Our process">
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-3 h-0.5 bg-[#1570EF] rounded-full" aria-hidden="true" />
            <span className={TYPOGRAPHY.label + " text-[#1570EF] font-semibold"}>Our Methodology</span>
            <div className="w-3 h-0.5 bg-[#1570EF] rounded-full" aria-hidden="true" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className={TYPOGRAPHY.h2 + " mb-4 sm:mb-6 text-gray-900"}>
            A <span className="text-[#1570EF]">Structured Approach</span> to Excellence
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className={TYPOGRAPHY.bodyLarge + " text-[#475467] max-w-3xl mx-auto"}>
            Our proven 5-phase methodology ensures precision, transparency, and measurable results at every step of your project journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {processData.map((item, index) => (
            <ProcessCard key={index} {...item} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-[24px] p-6 sm:p-8">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className={TYPOGRAPHY.h4 + " text-gray-900 mb-3"}>Core Principles of Our Process</h3>
            <p className={TYPOGRAPHY.body + " text-[#475467] max-w-2xl mx-auto"}>These guiding principles ensure every project delivers exceptional value and exceeds expectations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#1570EF]" />, title: "Client-Centric Approach", description: "Your goals and vision drive every decision we make throughout the process." },
              { icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#1570EF]" />, title: "Transparent Communication", description: "Regular updates, clear documentation, and open channels for feedback." },
              { icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#1570EF]" />, title: "Agile & Adaptive", description: "Flexible methodology that adapts to changing requirements and opportunities." },
            ].map((principle, index) => (
              <div key={index} className="text-center p-4 sm:p-6 rounded-[16px] bg-gray-50/50 hover:bg-blue-50/50 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-[12px] bg-blue-50 flex items-center justify-center mx-auto mb-3 sm:mb-4">{principle.icon}</div>
                <h4 className="font-[family-name:var(--font-cabinet)] font-bold text-base sm:text-lg text-gray-900 mb-2">{principle.title}</h4>
                <p className={TYPOGRAPHY.bodySmall + " text-[#475467]"}>{principle.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ---------- FAQ SECTION ----------
type FaqItem = { question: string; answer: string[] };

const faqs: FaqItem[] = [
  { question: "Why choose our digital marketing & AI services?", answer: ["We've spent years helping businesses grow through data-driven marketing, AI automation, and design that actually converts — not just templates dressed up to look busy.", "Choosing us means working with one team across marketing, AI, design, video, and development, so nothing gets lost between departments. We focus on measurable outcomes: more leads, more conversions, and a brand that looks like it belongs at the top of your industry.", "Whether your goal is more visibility or a smarter, more automated back-end, our approach is built around your specific business — not a one-size-fits-all package."] },
  { question: "How do you know if my brand needs a refresh?", answer: ["If your website feels outdated, your conversions have plateaued, or your competitors simply look sharper online, it's usually a sign your brand needs attention."] },
  { question: "How does your process work from start to finish?", answer: ["We start with a short discovery call to understand your goals, then move into strategy, design, development, and launch — with regular check-ins at every stage."] },
  { question: "Why should I work with your agency instead of freelancers?", answer: ["A single agency gives you one accountable team across every service — marketing, AI, design, and development — instead of managing multiple freelancers who don't talk to each other."] },
  { question: "Do you offer AI automation for existing businesses?", answer: ["Yes — we build custom AI workflows that plug into your existing tools, automating repetitive tasks so your team can focus on higher-value work."] },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className={`bg-white py-16 sm:py-20 lg:py-24 w-full`} aria-label="Frequently asked questions">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-[40px] grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24 self-start">
          <h2 className={TYPOGRAPHY.h2 + " text-[#0B1220]"}>
            Your questions
            <br />
            answered
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={faq.question} className="border-t border-black">
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="group cursor-pointer w-full flex items-start justify-between gap-4 sm:gap-6 py-4 sm:py-6 text-left focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none rounded-lg"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-[family-name:var(--font-body)] group-hover:text-[#1570EF] text-base sm:text-lg lg:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-[#1570EF]" : "text-[#0B1220]"
                    }`}>
                    {faq.question}
                  </span>
                  <span className={`group-hover:text-[#1570EF] shrink-0 mt-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center text-xl transition-colors duration-300 ${isOpen ? "text-[#1570EF]" : "text-[#0B1220]"
                    }`}>
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="pb-4 sm:pb-6 pr-4 sm:pr-8 flex flex-col gap-3 sm:gap-4">
                    {faq.answer.map((paragraph, i) => (
                      <p key={i} className={TYPOGRAPHY.body + " text-[#4A5578]"}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-black" />
        </div>
      </div>
    </section>
  );
};

// ---------- CTA SECTION ----------
const CallToAction = () => {
  return (
    <section className="relative overflow-hidden" aria-label="Call to action">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative z-10 bg-[#1570EF] mx-auto px-8 py-40"
      >
        <div className="flex items-center max-w-[1200px] mx-auto relative">
          <div className="gap-6">
            <p className={TYPOGRAPHY.body + " text-white/80 pb-7"}>You've reached the end, so now…</p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Tell us what you're building.
            </h3>
            <p className={TYPOGRAPHY.bodyLarge + " text-white/90 max-w-2xl"}>We'll help you map the right scope, team, timeline, and next steps.</p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/contact-us"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Get a quote today
                <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-[#1570EF]" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="absolute -top-18 -right-20 z-10" aria-hidden="true">
          <svg viewBox="0 0 100 100" className="h-[28rem] w-[28rem] animate-[spin_15s_linear_infinite] text-blue-500" fill="none">
            <g stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
              <path d="M30 31 L44 49" /><path d="M61 28 L44 49" /><path d="M44 49 L32 70" />
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

// ---------- FOOTER ----------
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6" role="contentinfo">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-[family-name:var(--font-cabinet)] font-bold text-2xl text-[#1570EF] mb-4">Upscale</h3>
          <p className={TYPOGRAPHY.bodySmall + " text-gray-400 max-w-xs"}>
            We architect growth through precision-engineered strategies and digital mastery.
          </p>
        </div>
        <div>
          <h4 className={TYPOGRAPHY.label + " text-gray-400 mb-4"}>Services</h4>
          <ul className="space-y-2">
            {["AI Automation", "Web Design & Dev", "SEO", "Content Writing", "Social Media"].map((item) => (
              <li key={item}>
                <Link href="#" className={TYPOGRAPHY.bodySmall + " text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none rounded-lg px-2 py-1"}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={TYPOGRAPHY.label + " text-gray-400 mb-4"}>Company</h4>
          <ul className="space-y-2">
            {["About", "Work", "Contact", "Careers"].map((item) => (
              <li key={item}>
                <Link href="#" className={TYPOGRAPHY.bodySmall + " text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none rounded-lg px-2 py-1"}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={TYPOGRAPHY.label + " text-gray-400 mb-4"}>Connect</h4>
          <ul className="space-y-2">
            <li><a href="mailto:hello@upscale.com" className={TYPOGRAPHY.bodySmall + " text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none rounded-lg px-2 py-1"}>hello@upscale.com</a></li>
            <li><a href="#" className={TYPOGRAPHY.bodySmall + " text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none rounded-lg px-2 py-1"}>LinkedIn</a></li>
            <li><a href="#" className={TYPOGRAPHY.bodySmall + " text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none rounded-lg px-2 py-1"}>Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
        <p className={TYPOGRAPHY.bodySmall + " text-gray-500"}>© {currentYear} Upscale Alliance. All rights reserved.</p>
      </div>
    </footer>
  );
};

// ============ MAIN EXPORT ============
export default function Home() {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`}>
      {/* SEO Meta - Add to layout.tsx */}
      <ScrollbarStyles />
      <Preloader />
      <main id="main-content">
        <Hero />
        <HomeAbout />
        <NewServicesSection />
        <Digital />
        <DataDriven />
        <WorkSection />
        <ProcessSection />
        <FaqSection />
        <SplitTextSection />
        <CallToAction />
      </main>
    </div>
  );
}