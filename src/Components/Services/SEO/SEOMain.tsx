"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Link as LinkIcon,
  FileText,
  Check,
  Clock,
  Zap,
  Shield,
  Users,
  ArrowRight,
  ChartBar,
  Calendar,
  Award,
  Sparkles,
  Brain,
  MessageSquare,
  Rocket,
  Eye,
  DollarSign,
  CircleCheck,
  ChevronDown,
  Phone,
  Mail,
  X,
  Play,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ============ TYPOGRAPHY SCALE ============
const TYPOGRAPHY = {
  h1: "font-[family-name:var(--font-cabinet)] font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.02em]",
  h2: "font-[family-name:var(--font-cabinet)] font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.015em]",
  h3: "font-[family-name:var(--font-cabinet)] font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-[-0.01em]",
  h4: "font-[family-name:var(--font-cabinet)] font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em]",
  subheading: "font-[family-name:var(--font-display)] font-semibold text-xl sm:text-2xl lg:text-3xl leading-[1.3]",
  body: "font-[family-name:var(--font-body)] font-normal text-base leading-[1.6]",
  bodyLarge: "font-[family-name:var(--font-body)] font-normal text-lg leading-[1.6]",
  bodySmall: "font-[family-name:var(--font-body)] font-normal text-sm leading-[1.5]",
  label: "font-[family-name:var(--font-body)] font-medium text-xs uppercase tracking-[0.08em]",
  labelSmall: "font-[family-name:var(--font-body)] font-medium text-[10px] uppercase tracking-[0.1em]",
  mono: "font-[family-name:var(--font-mono)] font-normal text-sm leading-[1.5]",
};

// ============ COMPONENTS ============

// ---------- REVEAL ANIMATION ----------
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(.22,.61,.36,1) ${delay}ms, transform 0.7s cubic-bezier(.22,.61,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ---------- EYEBROW ----------
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-neutral-500">
      <span className="h-px w-6 bg-[#1570EF]" />
      {children}
    </div>
  );
}

// ---------- GRADIENT WORD ----------
function GradientWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#1570EF] to-blue-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

// ---------- CTA SECTION (Same as Homepage) ----------
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
        <div className="flex items-center max-w-[1200px] mx-auto relative flex-wrap lg:flex-nowrap">
          <div className="gap-6">
            <p className="font-[family-name:var(--font-body)] text-sm md:text-lg pb-7 text-white/80">
              You've seen what visibility can do, so now…
            </p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Ready to dominate search & AI?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
              Let's build an SEO strategy that puts you in front of customers and AI assistants.
            </p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/contact-us"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Start Your SEO Journey
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

// ============ DATA ============

const stats = [
  { value: "69%", label: "increase in website sessions for consulting firms" },
  { value: "81%", label: "increase in engagement for legal clients" },
  { value: "441", label: "keywords ranking on first page of Google" },
  { value: "44%", label: "increase in unique website users" },
];

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Increased Visibility",
    desc: "Rank higher in search results and AI platforms",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "More Qualified Traffic",
    desc: "Drive visitors who are actually looking for your services",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Higher Revenue",
    desc: "Convert more visitors into paying customers",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Ready",
    desc: "Get cited by ChatGPT, Gemini, Claude & more",
  },
];

const tools = [
  "Google Search Console",
  "Google Analytics 4",
  "Ahrefs / Semrush",
  "Screaming Frog",
  "Google PageSpeed Insights",
  "Google Business Profile",
  "AI Citation Trackers",
  "ChatGPT Analytics",
];

const packages = [
  {
    name: "Foundational SEO",
    price: "$1,200/mo",
    features: [
      "Targeted Keyword Research (20–30 terms)",
      "On-Page Optimization for Key Pages",
      "Technical SEO Health Audit & Fixes",
      "Google Analytics & Search Console",
      "Monthly Performance Reporting",
      "Local SEO Setup (Google Business Profile)",
    ],
    bestFor: "Local businesses & startups",
  },
  {
    name: "Growth SEO + AEO",
    price: "$2,500/mo",
    features: [
      "Advanced Keyword Strategy (50+ terms)",
      "Full On-Page Optimization",
      "Technical SEO Implementation",
      "Content Strategy & Guidance",
      "Authority Link Building (5–8 links)",
      "Weekly Ranking & Traffic Reports",
      "AEO Optimization (Voice & Answer Search)",
      "Featured Snippet Optimization",
    ],
    bestFor: "Growing businesses targeting measurable traffic",
    popular: true,
  },
  {
    name: "Enterprise SEO + AEO + GEO",
    price: "$5,500/mo",
    features: [
      "Comprehensive Keyword & Market Research",
      "Enterprise Technical SEO Optimization",
      "Strategic Content Development",
      "High-Authority Link Acquisition",
      "International & Multi-Location SEO",
      "Custom SEO Dashboards",
      "Full AEO + GEO Optimization",
      "AI Platform Optimization (ChatGPT, Gemini, Claude)",
      "AI Citation & Mention Tracking",
      "CRO Recommendations & A/B Insights",
    ],
    bestFor: "Competitive industries & national brands",
  },
];

const faqs = [
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer:
      "SEO optimizes for traditional search engines like Google. AEO (Answer Engine Optimization) optimizes for voice search and featured snippets. GEO (Generative Engine Optimization) optimizes for AI platforms like ChatGPT, Gemini, and Claude. We combine all three for maximum visibility across every way people search.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "You'll typically see initial improvements in 3-6 months, with significant results appearing in 6-12 months. AEO and GEO results can appear faster as AI platforms update more frequently. We provide monthly reports showing your progress.",
  },
  {
    question: "Why is GEO important for my business?",
    answer:
      "By 2025, 40% of all searches will be AI-powered. If your brand isn't in AI training data, you're invisible to the next generation of search users. GEO ensures you get cited by ChatGPT, Gemini, Claude, and every other AI assistant.",
  },
  {
    question: "How do you measure SEO + AEO + GEO success?",
    answer:
      "We track traditional SEO metrics (rankings, traffic, conversions) plus AI-specific metrics like AI citations, brand mentions in AI responses, referral traffic from AI platforms, and overall visibility score across all search channels.",
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer:
      "No ethical SEO company guarantees specific rankings. Search algorithms change constantly. We guarantee to implement best practices that improve your organic visibility, AI presence, and drive measurable business results.",
  },
];

// ============ MAIN COMPONENT ============
export default function SEOMain() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activePackage, setActivePackage] = useState<number | null>(1);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-body)]">
      {/* ========== HERO ========== */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1570EF]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full border border-[#1570EF]/20 mb-6"
          >
            <Search className="w-4 h-4 text-[#1570EF]" />
            <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>
              SEO + AEO + GEO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={TYPOGRAPHY.h1 + " text-gray-900 mb-6"}
          >
            Get Found by{" "}
            <GradientWord>Customers & AI </GradientWord>
            Who Are Searching for You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto mb-10"}
          >
            If you're here looking for SEO services, odds are, your website isn't
            getting the traffic it deserves — and you're invisible in AI search.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group px-8 py-4 bg-[#1570EF] text-white font-semibold rounded-xl text-lg shadow-lg shadow-[#1570EF]/25 hover:shadow-[#1570EF]/40 transition-all flex items-center gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none"
              >
                Get Free SEO + AEO Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-[#1570EF]">{stat.value}</div>
                <div className={TYPOGRAPHY.bodySmall + " text-gray-500 mt-1"}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== THE PROBLEM ========== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className={TYPOGRAPHY.label + " text-red-600"}>THE PROBLEM</span>
            </div>

            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-6"}>
              Is Your SEO Strategy Making You Money?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Beautiful Website, No Traffic?",
                  desc: "Your website looks great but no one's finding it.",
                  color: "from-red-50 to-red-100/50",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Ranking But No Revenue?",
                  desc: "You have rankings but they're not converting to sales.",
                  color: "from-orange-50 to-orange-100/50",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Invisible in AI Search?",
                  desc: "ChatGPT, Gemini, and Claude don't know you exist.",
                  color: "from-amber-50 to-amber-100/50",
                },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 border border-gray-200/50`}>
                    <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center text-red-500 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-10 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-[#1570EF] font-semibold">Here's the tough truth:</span>{" "}
                  Most SEO strategies fail because businesses focus on ranking for
                  keywords instead of solving the problems their audience actually
                  cares about. We lead with the solution your target market needs,
                  then optimize for the words they're actually searching for.
                </p>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* ========== THE SOLUTION ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6 border border-green-200">
              <Rocket className="w-4 h-4 text-green-600" />
              <span className={TYPOGRAPHY.label + " text-green-600"}>THE SOLUTION</span>
            </div>
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900"}>
              We Create SEO Strategies That Are{" "}
              <span className="text-[#1570EF]">Traffic & Revenue Machines</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto mt-4"}>
              If your SEO strategy doesn't make you look like you're the best at what you do,
              you're leaving money on the table.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Reveal>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    Say you're the best lawyer. A potential client searches for "best
                    family lawyer near me." They find your competitor ranking #1 with
                    a professional site and clear value proposition. You're on page 3.
                    Odds are, they will call your competitor.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4 font-medium text-[#1570EF]">
                    Our process results in a SEO strategy that puts you in front of
                    potential clients when they need you most.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-[#1570EF]/5 rounded-2xl p-6 border border-[#1570EF]/20">
                  <p className="text-lg italic text-gray-700">
                    "That's why I'm in this business. We help our clients have a machine
                    for making money through search."
                  </p>
                  <p className="text-sm font-semibold text-gray-900 mt-2">
                    — Abdullah, Managing Partner
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-[#1570EF]" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Clients Achieve</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Organic Traffic Growth", value: "+300%", color: "text-[#1570EF]" },
                    { label: "Keyword Rankings on Page 1", value: "441+", color: "text-[#1570EF]" },
                    { label: "AI Citations & Mentions", value: "250+", color: "text-green-600" },
                    { label: "Revenue from Search", value: "+312%", color: "text-[#1570EF]" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    "Our clients rank on average for 180+ keywords and get cited by 6+ AI platforms."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== DOES YOUR SEO REPRESENT YOU? ========== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-6"}>
              Does Your SEO{" "}
              <span className="text-[#1570EF]">Represent Your Brand?</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"}>
              Your search presence is one of the first impressions people have of your
              business, so it needs to reflect what makes you unique.
            </p>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg text-left">
              <p className="text-gray-700 leading-relaxed">
                For Upscale Alliance, that begins in our kickoff meetings. We pick
                your brain to assess blind spots and opportunities. Then, we do
                in-depth research on your competitors to understand your business
                and uncover the problems your SEO strategy needs to solve.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Whether that's local SEO, national SEO, AEO for voice search, or
                GEO for AI platforms — we're here with you every step of the way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== HOW WELL DOES YOUR SEO CONVERT? ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              How Well Does Your{" "}
              <span className="text-[#1570EF]">SEO Convert?</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              You won't make any money if your potential clients can't find you.
              Our team maximizes visibility across every search channel.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Traditional SEO",
                desc: "We optimize every page, click, and form to drive leads, sales, and credibility.",
                items: [
                  "Keyword Research & Strategy",
                  "On-Page & Technical SEO",
                  "Authority Link Building",
                ],
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "AEO (Answer Engine)",
                desc: "Optimize for voice search, featured snippets, and conversational queries.",
                items: [
                  "FAQ & Question Optimization",
                  "Voice Search Ready Content",
                  "Featured Snippet Targeting",
                ],
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "GEO (Generative Engine)",
                desc: "Get cited by ChatGPT, Gemini, Claude, and every AI assistant.",
                items: [
                  "AI Training Data Optimization",
                  "Entity & Knowledge Graph",
                  "Multi-Platform AI Citations",
                ],
              },
            ].map((service, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all group">
                  <div className="w-16 h-16 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1570EF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-[#1570EF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 bg-[#1570EF]/5 rounded-2xl p-8 border border-[#1570EF]/20 max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">What We Optimize</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-[#1570EF]" />
                      Strategic keyword mapping & content outlines
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-[#1570EF]" />
                      Technical SEO for maximum crawlability
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-[#1570EF]" />
                      AI-ready content structured for all platforms
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1570EF]">69%</div>
                    <div className="text-sm text-gray-600">increase in website sessions for consulting firms</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== CREDIBILITY DESIGN ========== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-6"}>
                Credibility Design:{" "}
                <span className="text-[#1570EF]">More Than Just Rankings</span>
              </h2>
              <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 leading-relaxed mb-6"}>
                Being #1 means nothing if visitors don't trust you. Social proof,
                like testimonials, case studies, and accolades, builds trust and
                converts visitors into customers.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF]">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#1570EF]">81%</div>
                    <div className="text-sm text-gray-600">increase in engagement for legal clients</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trust Signals That Convert</h3>
                <ul className="space-y-4">
                  {[
                    { icon: <Star className="w-5 h-5" />, label: "Client Testimonials" },
                    { icon: <Award className="w-5 h-5" />, label: "Case Studies & Results" },
                    { icon: <Users className="w-5 h-5" />, label: "Client Logos & Accolades" },
                    { icon: <Shield className="w-5 h-5" />, label: "Trust Badges & Certifications" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="text-[#1570EF]">{item.icon}</div>
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== WHAT HAPPENS AFTER LAUNCH ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              What Happens After Your{" "}
              <span className="text-[#1570EF]">SEO Strategy Launches?</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              We build SEO strategies that last using industry-leading platforms
              and proven methodologies.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "SEO-Friendly Structure",
                desc: "Boost visibility and rankings with optimized architecture",
                stat: "441 keywords on first page",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile-First Optimization",
                desc: "Mobile-first indexing with lightning-fast load times",
                stat: "68% of traffic comes from mobile",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI & GEO Ready",
                desc: "Content optimized for ChatGPT, Gemini, Claude & more",
                stat: "250+ AI citations average",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#1570EF]/20 hover:shadow-xl transition-all text-center group">
                  <div className="w-16 h-16 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mx-auto mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <div className="inline-block bg-[#1570EF]/10 text-[#1570EF] text-sm font-semibold px-4 py-2 rounded-full">
                    {item.stat}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 bg-[#1570EF]/5 rounded-2xl p-8 border border-[#1570EF]/20 max-w-3xl mx-auto">
              <p className="text-lg italic text-gray-700 text-center">
                "Think of your SEO strategy as the foundation your business stands on.
                Like a skyscraper, it should be built to last and visible from everywhere."
              </p>
              <p className="text-sm font-semibold text-gray-900 text-center mt-2">
                — Abdullah, Managing Partner
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== TESTING & LAUNCH ========== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-6"}>
                Testing & Launch:{" "}
                <span className="text-[#1570EF]">No Costly Surprises</span>
              </h2>
              <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 leading-relaxed mb-6"}>
                You can trust our SEO strategies because we run them through the
                gauntlet. Before we launch, we stress-test all major search engines
                and AI platforms to ensure your strategy is bulletproof.
              </p>
              <ul className="space-y-3">
                {[
                  "Advanced technical SEO audits",
                  "Performance & speed optimization",
                  "Cross-platform testing (Google, Bing, ChatGPT, Gemini)",
                  "AI citation verification",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-[#1570EF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Bulletproof SEO</h3>
                    <p className="text-sm text-gray-500">Zero surprises, guaranteed</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700 border-l-4 border-[#1570EF] pl-4">
                  "My favorite part of the project was when Upscale Alliance launched
                  our SEO strategy. If something is wrong, I know you guys can turn
                  the change around in real time. Not stressing at all is the best part."
                </blockquote>
                <p className="text-sm font-semibold text-gray-900 mt-2">
                  — Joe Gasik, COO | Abundia Global Impact Group
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== GROWTH & SUPPORT ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              A Strategy That <span className="text-[#1570EF]">Grows With You</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              SEO isn't a one-time project — it's the foundation of your digital
              visibility and long-term growth.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Training",
                desc: "We train your team on how to maintain and sustain your SEO momentum.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Premium Support",
                desc: "Full support plan to keep your strategy secure and profitable.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Growth Packages",
                desc: "Ongoing optimization to continue growing your visibility.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#1570EF]/20 hover:shadow-xl transition-all text-center group">
                  <div className="w-16 h-16 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mx-auto mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 bg-[#1570EF]/5 rounded-2xl p-8 border border-[#1570EF]/20 max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 italic">
                "Adding the SEO strategy has made things easier for me. Some people
                who may not have found us before have now, and that's been a big
                game changer just in terms of how people reach me."
              </p>
              <p className="text-sm font-semibold text-gray-900 mt-2">— Ali Lotfizadeh</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6 border border-[#1570EF]/20">
              <Award className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>WHY UPSCALE ALLIANCE</span>
            </div>
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900"}>
              Why Choose <span className="text-[#1570EF]">Us</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto mt-4"}>
              You have endless options, including freelancers, offshore shops, and
              expensive agencies. Here's why our clients choose us.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "We're Not Amateurs",
                desc: "Senior-level SEO specialists only. No junior team members on your account.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "We're Not Offshore",
                desc: "US-based with clear communication. We're based in New York.",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "We're Not Cookie-Cutter",
                desc: "Every strategy starts with your unique story, not templates.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "We're Not Churn-and-Burn",
                desc: "18+ years in business. 350+ clients managed. 99% client retention.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all text-center group">
                  <div className="w-16 h-16 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mx-auto mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto text-center shadow-lg">
              <p className="text-xl font-semibold text-gray-900">
                We build SEO strategies that sell while you sleep, scale as you grow,
                and stand the test of time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Our <span className="text-[#1570EF]">Process</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              A systematic approach to sustainable search and AI visibility
            </p>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Discovery & Audit", desc: "Analyze current performance", duration: "1-2 Weeks" },
              { step: 2, title: "Strategy Development", desc: "Create customized plan", duration: "1 Week" },
              { step: 3, title: "Implementation", desc: "Execute optimizations", duration: "Ongoing" },
              { step: 4, title: "Reporting & Optimization", desc: "Track results and refine", duration: "Monthly" },
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:border-[#1570EF]/20 hover:shadow-lg transition-all group">
                  <div className="w-16 h-16 rounded-full bg-[#1570EF] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg shadow-[#1570EF]/25 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{step.desc}</p>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-[#1570EF] bg-[#1570EF]/10 px-3 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TOOLS ========== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Industry-Standard <span className="text-[#1570EF]">Tools</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              We use the best tools in the industry to deliver measurable results
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="px-5 py-2.5 bg-white rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:border-[#1570EF]/30 hover:shadow-md transition-all">
                  {tool}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PACKAGES ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              SEO + AEO + GEO <span className="text-[#1570EF]">Packages</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Choose the right level of optimization for your business
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => {
              const isActive = activePackage === idx;

              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div
                    className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col ${isActive
                      ? "border-[#1570EF] shadow-2xl shadow-[#1570EF]/10 scale-[1.02]"
                      : "border-gray-200 hover:border-[#1570EF]/30"
                      }`}
                    onMouseEnter={() => setActivePackage(idx)}
                    onMouseLeave={() => setActivePackage(1)}
                  >
                    <div className="mb-4 min-h-[28px]">
                      {pkg.popular && isActive && (
                        <span className="inline-block px-4 py-1 bg-[#1570EF] text-white text-sm font-bold rounded-full">
                          MOST POPULAR
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                    <div className="text-sm text-gray-500 mb-6">{pkg.bestFor}</div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <Check className="w-5 h-5 text-[#1570EF] flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact-us" className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`cursor-pointer w-full py-4 rounded-xl font-semibold transition-all ${isActive
                          ? "bg-[#1570EF] text-white hover:bg-[#0A5BD0] shadow-lg shadow-[#1570EF]/25"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                          }`}
                      >
                        Start Campaign
                      </motion.button>
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Frequently Asked <span className="text-[#1570EF]">Questions</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Everything you need to know about SEO, AEO, and GEO
            </p>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="bg-white rounded-2xl border border-gray-200 hover:border-[#1570EF]/20 transition-all overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1570EF]/5 transition-colors focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none"
                    aria-expanded={activeFaq === idx}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === idx ? "rotate-180 text-[#1570EF]" : ""
                        }`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? "max-h-96" : "max-h-0"
                      }`}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA (Same as Homepage) ========== */}
      <CallToAction />
    </div>
  );
}

// Missing Icons
const Smartphone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

