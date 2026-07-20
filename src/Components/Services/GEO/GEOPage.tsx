"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Search,
  TrendingUp,
  MessageSquare,
  Globe,
  Brain,
  BarChart3,
  Target,
  Check,
  ArrowRight,
  Clock,
  Users,
  Cpu,
  MessageCircle,
  Bot,
  Shield,
  Award,
  DollarSign,
  Eye,
  Rocket,
  LineChart,
  BookOpen,
  CircleCheck,
  ChevronDown,
  Phone,
  Mail,
  Calendar,
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
              You've seen the future of search, so now…
            </p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Ready to dominate AI search?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
              Let's make sure your brand is the answer when AI assistants get asked.
            </p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/contact-us"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Start Your GEO Journey
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

const platforms = [
  { name: "ChatGPT", icon: "/chatgptgeo.png" },
  { name: "Claude", icon: "/claudegeo.png" },
  { name: "Google AI Overviews", icon: "/googlegeo.png" },
  { name: "Gemini", icon: "/geminigeo.png" },
  { name: "Perplexity AI", icon: "/perplexitygeo.png" },
  { name: "DeepSeek", icon: "/deepseekgeo.png" },
  { name: "Exa", icon: "/exageo.png" },
  { name: "Google AI Mode", icon: "/googlegeo.png" },
  { name: "Microsoft Copilot", icon: "/microsoftcopilotgeo.png" },
  { name: "Grok", icon: "/grokgeo.png" },
];

const strategies = [
  {
    title: "AI Knowledge Optimization",
    description: "Ensure your content is in AI training data",
    icon: <Brain className="w-6 h-6" />,
    items: ["Schema Markup", "AI-readable Content", "Data Structuring", "API Integration"],
  },
  {
    title: "Conversational SEO",
    description: "Optimize for voice and chat queries",
    icon: <MessageSquare className="w-6 h-6" />,
    items: ["FAQ Optimization", "Natural Language", "Context Awareness", "Query Patterns"],
  },
  {
    title: "AI Tool Presence",
    description: "Get featured in AI plugins and tools",
    icon: <Zap className="w-6 h-6" />,
    items: ["Plugin Development", "API Exposure", "Tool Integration", "Partnerships"],
  },
  {
    title: "Performance Tracking",
    description: "Monitor AI search visibility",
    icon: <BarChart3 className="w-6 h-6" />,
    items: ["AI Analytics", "Conversation Tracking", "Citation Monitoring", "ROI Measurement"],
  },
];

const process = [
  { step: 1, title: "AI Audit", description: "Analyze current AI search presence", duration: "1 Week" },
  { step: 2, title: "Strategy Development", description: "Create GEO optimization plan", duration: "2 Weeks" },
  { step: 3, title: "Implementation", description: "Optimize content and technical setup", duration: "3-4 Weeks" },
  { step: 4, title: "Monitoring", description: "Track AI search performance", duration: "Ongoing" },
];

const packages = [
  {
    name: "GEO + AEO Starter",
    price: "$2,500/mo",
    features: [
      "AI Search & GEO/AEO audit",
      "Answer-focused content updates",
      "Basic schema setup",
      "Brand & entity optimization",
      "ChatGPT & Google AI optimization",
      "Up to 3 AI platforms",
      "Monthly visibility report",
    ],
    bestFor: "Businesses starting AI search optimization",
  },
  {
    name: "GEO + AEO Growth",
    price: "$5,000/mo",
    features: [
      "Full GEO + AEO audit",
      "Conversational content optimization",
      "Answer-ready pages (FAQ, snippets)",
      "Ongoing schema improvements",
      "Up to 6 AI platforms",
      "AI citations & brand mentions",
      "Weekly performance reports",
    ],
    bestFor: "Growing brands focused on AI visibility",
    popular: true,
  },
  {
    name: "GEO + AEO Enterprise",
    price: "$10,000/mo",
    features: [
      "Custom enterprise GEO + AEO strategy",
      "Advanced entity & knowledge graph work",
      "Real-time AI visibility tracking",
      "Multi-language AI optimization",
      "Custom plugins or AI workflows",
      "Dedicated GEO/AEO specialist",
      "All major AI platforms",
    ],
    bestFor: "Enterprises needing advanced AI search control",
  },
];

const metrics = [
  { value: "40%", label: "of searches will be AI-powered by 2026" },
  { value: "3x", label: "higher engagement from AI referrals" },
  { value: "60%", label: "better conversion from AI-driven traffic" },
  { value: "24/7", label: "AI assistant availability" },
];

const faqs = [
  {
    question: "What is GEO (Generative Engine Optimization)?",
    answer:
      "GEO is the practice of optimizing your content to appear in AI-powered search results and conversational AI responses from platforms like ChatGPT, Google Bard, and Microsoft Copilot.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "Traditional SEO focuses on ranking in search engines using keywords and backlinks. GEO focuses on being included in AI training data and providing authoritative, structured content that AI assistants can understand and recommend.",
  },
  {
    question: "Why should I invest in GEO now?",
    answer:
      "AI search is growing rapidly. Early adopters gain a significant advantage as AI becomes the primary way people find information online.",
  },
  {
    question: "How do you measure GEO success?",
    answer:
      "We track AI citation rates, conversation mentions, API integration performance, and referral traffic from AI platforms using specialized analytics tools.",
  },
];

// ============ MAIN COMPONENT ============
export default function GEOPage() {
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
            <Sparkles className="w-4 h-4 text-[#1570EF]" />
            <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>
              GENERATIVE ENGINE OPTIMIZATION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={TYPOGRAPHY.h1 + " text-gray-900 mb-6"}
          >
            Dominate{" "}
            <GradientWord>AI Search</GradientWord>
            <br />
            Before Everyone Else
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto mb-10"}
          >
            Get your brand discovered by ChatGPT, Claude, Gemini, Copilot,
            and every other AI assistant. The future of search is here —
            and it's AI-first.
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
                Get AI Search Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12"
          >
            {metrics.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-2xl font-bold text-[#1570EF]">{stat.value}</div>
                <div className={TYPOGRAPHY.bodySmall + " text-gray-500 mt-1"}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== THE PROBLEM ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6 border border-red-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className={TYPOGRAPHY.label + " text-red-600"}>THE PROBLEM</span>
            </div>

            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-6"}>
              Is Your Business{" "}
              <span className="text-[#1570EF]">Visible in AI Search?</span>
            </h2>

            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"}>
              If you're here looking for GEO services, odds are, your brand is
              invisible in AI search results.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <Search className="w-6 h-6" />,
                  title: "Ghost in AI Search",
                  desc: "Your brand doesn't appear when users ask AI assistants",
                  color: "from-red-50 to-red-100/50",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Losing to Competitors",
                  desc: "Competitors are getting cited by AI, you're not",
                  color: "from-orange-50 to-orange-100/50",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Leaving Money on Table",
                  desc: "AI-driven traffic is going to your competition",
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
              <div className="mt-10 bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  <span className="text-[#1570EF] font-semibold">Here's the tough truth:</span>{" "}
                  Most businesses are optimizing for traditional search engines
                  while AI assistants are becoming the primary way people find
                  information. If you're not in AI training data, you don't exist.
                </p>
              </div>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* ========== THE SOLUTION ========== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1570EF]/5 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6 border border-green-200">
              <Rocket className="w-4 h-4 text-green-600" />
              <span className={TYPOGRAPHY.label + " text-green-600"}>THE SOLUTION</span>
            </div>
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900"}>
              We Make Your Brand{" "}
              <span className="text-[#1570EF]">The AI Answer</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: "AI Knowledge Optimization",
                  desc: "We ensure your content is structured for AI consumption — not just humans.",
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Conversational SEO",
                  desc: "We optimize for the way people actually ask questions to AI assistants.",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Multi-Platform Coverage",
                  desc: "We optimize your brand across every major AI platform — ChatGPT, Claude, Gemini, Perplexity, Copilot, and more.",
                },
                {
                  icon: <LineChart className="w-6 h-6" />,
                  title: "Measurable ROI",
                  desc: "We track AI citations, mentions, and referral traffic so you know exactly what you're getting.",
                },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-[#1570EF]" />
                  <h3 className="text-2xl font-bold text-gray-900">What Our Clients Achieve</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "AI Visibility Increase", value: "312%", color: "text-[#1570EF]" },
                    { label: "AI Citations", value: "250+", color: "text-[#1570EF]" },
                    { label: "Referral Traffic Growth", value: "187%", color: "text-green-600" },
                    { label: "Brand Mentions in AI", value: "4x", color: "text-[#1570EF]" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    "Our clients rank on average for 250+ AI-generated answers across all major AI platforms."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== PLATFORMS ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              AI Platforms <span className="text-[#1570EF]">We Optimize For</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Full coverage across every major AI search platform and assistant
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {platforms.map((platform, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-[#1570EF]/30 hover:bg-[#1570EF]/5 transition-all group hover:scale-105 duration-300">
                  <Image
                    alt={platform.name}
                    src={platform.icon}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="text-sm font-medium text-gray-800">{platform.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STRATEGIES ========== */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Our <span className="text-[#1570EF]">GEO Strategies</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              A comprehensive approach to dominating AI search results
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {strategies.map((strategy, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] group-hover:bg-[#1570EF] group-hover:text-white transition-colors flex-shrink-0">
                      {strategy.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1570EF] transition-colors">
                        {strategy.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{strategy.description}</p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-2 gap-3">
                    {strategy.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CircleCheck className="w-4 h-4 text-[#1570EF] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Our <span className="text-[#1570EF]">Implementation Process</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              A simple 4-step process to AI search dominance
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1570EF] to-blue-400 hidden md:block" />

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="relative">
                    <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-[#1570EF]/20 hover:shadow-lg transition-all group">
                      <div className="w-16 h-16 rounded-full bg-[#1570EF] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg shadow-[#1570EF]/25 group-hover:scale-110 transition-transform">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                      <div className="inline-flex items-center gap-1 text-xs font-medium text-[#1570EF] bg-[#1570EF]/10 px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1570EF]/5 to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6 border border-[#1570EF]/20">
              <Award className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>WHY UPSCALE ALLIANCE</span>
            </div>
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900"}>
              Why Choose <span className="text-[#1570EF]">Us</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Native Approach",
                desc: "We don't adapt SEO strategies — we build from the ground up for AI search.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Proven Results",
                desc: "Our clients see 300%+ increase in AI visibility within 90 days.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Multi-Platform Coverage",
                desc: "We optimize across every major AI platform — not just one or two.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all text-center group">
                  <div className="w-16 h-16 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mx-auto mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
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
              GEO Service <span className="text-[#1570EF]">Packages</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Choose the right level of AI search optimization for your business
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => {
              const isActive = activePackage === idx;

              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div
                    className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col ${
                      isActive
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
                        className={`cursor-pointer w-full py-4 rounded-xl font-semibold transition-all ${
                          isActive
                            ? "bg-[#1570EF] text-white hover:bg-[#0A5BD0] shadow-lg shadow-[#1570EF]/25"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        Start Optimization
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
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Frequently Asked <span className="text-[#1570EF]">Questions</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Everything you need to know about Generative Engine Optimization
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
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        activeFaq === idx ? "rotate-180 text-[#1570EF]" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === idx ? "max-h-96" : "max-h-0"
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