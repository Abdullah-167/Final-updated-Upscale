"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  TrendingUp,
  MessageSquare,
  Share2,
  Video,
  Image as ImageIcon,
  BarChart3,
  Calendar,
  Check,
  Clock,
  Target,
  Zap,
  Heart,
  ThumbsUp,
  ArrowRight,
  DollarSign,
  Sparkles,
  Search,
  ShoppingBag,
  Globe,
  Smartphone,
  Award,
  Rocket,
  Shield,
  ChevronDown,
  Phone,
  Mail,
  Star,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
              You've seen what social growth can do, so now…
            </p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Ready to build your social presence?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
              Let's create a social media and paid advertising strategy that builds your community and drives revenue.
            </p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/contact-us"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Start Your Social Journey
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
  {
    name: "Facebook",
    description: "Community building and brand awareness",
    icon: "FB",
    features: ["Page Management", "Ad Campaigns", "Community Engagement", "Content Strategy"],
  },
  {
    name: "Instagram",
    description: "Visual storytelling and engagement",
    icon: "IG",
    features: ["Feed Management", "Stories/Reels", "Hashtag Strategy", "Influencer Outreach"],
  },
  {
    name: "LinkedIn",
    description: "B2B marketing and professional networking",
    icon: "IN",
    features: ["Company Page", "Content Publishing", "Lead Generation", "Industry Authority"],
  },
  {
    name: "TikTok",
    description: "Short-form video and viral content",
    icon: "TT",
    features: ["Video Strategy", "Trend Utilization", "Creator Partnerships", "Community Building"],
  },
];

const ppcPlatforms = [
  {
    name: "Google Ads",
    description: "Search, Display, and YouTube advertising",
    icon: <Search className="w-6 h-6" />,
    features: ["Search Campaigns", "Display Network", "YouTube Ads", "Shopping Ads"],
  },
  {
    name: "Meta Ads",
    description: "Facebook & Instagram paid advertising",
    icon: <DollarSign className="w-6 h-6" />,
    features: ["Audience Targeting", "Lookalike Audiences", "Carousel Ads", "Lead Ads"],
  },
  {
    name: "LinkedIn Ads",
    description: "Professional B2B advertising",
    icon: <Globe className="w-6 h-6" />,
    features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Account Targeting"],
  },
  {
    name: "TikTok Ads",
    description: "Short-form video advertising",
    icon: <Video className="w-6 h-6" />,
    features: ["In-Feed Ads", "Brand Takeovers", "Hashtag Challenges", "Spark Ads"],
  },
];

const services = [
  {
    title: "Content Strategy & Creation",
    description: "Engaging content that resonates with your audience",
    icon: <ImageIcon className="w-6 h-6" />,
    items: ["Content Calendar", "Visual Design", "Copywriting", "Video Production", "Brand Voice"],
  },
  {
    title: "Community Management",
    description: "Build relationships and foster engagement",
    icon: <Users className="w-6 h-6" />,
    items: ["Comment Response", "Message Management", "Engagement Strategy", "Crisis Management", "Community Growth"],
  },
  {
    title: "Paid Advertising",
    description: "PPC & social media ads that drive results",
    icon: <DollarSign className="w-6 h-6" />,
    items: ["Ad Strategy", "Audience Targeting", "Budget Management", "A/B Testing", "ROI Optimization"],
  },
  {
    title: "Analytics & Reporting",
    description: "Data-driven insights and performance tracking",
    icon: <BarChart3 className="w-6 h-6" />,
    items: ["Performance Metrics", "Competitor Analysis", "ROI Tracking", "Monthly Reports", "Strategy Adjustments"],
  },
];

const benefits = [
  {
    title: "Brand Awareness",
    description: "Increase visibility and recognition",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    title: "Engagement",
    description: "Build loyal community relationships",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: "Lead Generation",
    description: "Drive qualified leads and sales",
    icon: <Target className="w-5 h-5" />,
  },
  {
    title: "Customer Support",
    description: "Provide real-time customer service",
    icon: <MessageSquare className="w-5 h-5" />,
  },
];

const packages = [
  {
    name: "Social Media Essentials",
    price: "$799",
    period: "/mo",
    features: [
      "Manage 2 social platforms",
      "12 posts per month",
      "Custom graphics",
      "Community engagement",
      "Monthly analytics report",
      "Organic growth plan",
    ],
    bestFor: "Small businesses building social presence",
  },
  {
    name: "Social + Paid Ads Growth",
    price: "$1,999",
    period: "/mo",
    features: [
      "Manage 3 social platforms",
      "20 posts per month",
      "Premium content + short videos",
      "Community engagement",
      "Paid ads setup",
      "Ad budget up to $1,000",
      "Weekly reports",
    ],
    bestFor: "Brands combining organic + paid traffic",
    popular: true,
  },
  {
    name: "Full Social + PPC Accelerator",
    price: "$3,499",
    period: "/mo",
    features: [
      "All major social platforms",
      "Daily content + videos",
      "Advanced content strategy",
      "24/7 engagement",
      "Full PPC management",
      "Ad budget up to $2,500",
      "Real-time analytics",
      "Dedicated specialist",
    ],
    bestFor: "High-growth brands focused on results",
  },
];

const ppcPackages = [
  {
    name: "PPC Starter",
    price: "$499",
    period: "/mo + ad spend",
    features: [
      "1 ad platform",
      "Campaign setup",
      "Keyword research",
      "Monthly optimization",
      "Conversion tracking",
      "Basic performance report",
      "Ad spend up to $1,500",
    ],
    bestFor: "Small businesses testing paid ads",
  },
  {
    name: "PPC Growth",
    price: "$1,199",
    period: "/mo + ad spend",
    features: [
      "2 ad platforms",
      "Advanced campaign setup",
      "Audience targeting",
      "Weekly optimization",
      "A/B ad testing",
      "Landing page review",
      "Detailed analytics",
      "Ad spend up to $4,000",
    ],
    bestFor: "Growing brands scaling paid traffic",
    popular: true,
  },
  {
    name: "PPC Enterprise",
    price: "$2,499",
    period: "/mo + ad spend",
    features: [
      "All major platforms",
      "Full funnel strategy",
      "Daily optimization",
      "Competitor analysis",
      "Custom dashboards",
      "Dedicated PPC manager",
      "Priority support",
      "Ad spend $6,000+",
    ],
    bestFor: "High-budget brands focused on ROI",
  },
];

const process = [
  { step: 1, title: "Strategy Session", description: "Define goals and target audience", duration: "1 Week" },
  { step: 2, title: "Content Planning", description: "Create content calendar and assets", duration: "2 Weeks" },
  { step: 3, title: "Implementation", description: "Launch and manage campaigns", duration: "Ongoing" },
  { step: 4, title: "Optimization", description: "Analyze and improve performance", duration: "Monthly" },
];

const metrics = [
  { value: "4.2B", label: "Social media users worldwide" },
  { value: "2.5H", label: "Average daily social media use" },
  { value: "71%", label: "of consumers buy from social referrals" },
  { value: "3x", label: "higher engagement with video content" },
];

const faqs = [
  {
    question: "Should I focus on social media or PPC?",
    answer: "We recommend both. Social media builds long-term brand awareness and community, while PPC delivers immediate, targeted traffic and conversions. Using them together creates a powerful marketing funnel.",
  },
  {
    question: "How do you integrate social media and PPC?",
    answer: "We create a unified strategy where social media content informs PPC audiences, and PPC data optimizes social content. Top-performing organic posts become PPC ads, and PPC insights help refine social targeting.",
  },
  {
    question: "What's the minimum budget for PPC?",
    answer: "For meaningful results, we recommend starting with $500-1,000/month in ad spend plus management fees. This allows enough budget to test different audiences and optimize performance.",
  },
  {
    question: "How long until I see results?",
    answer: "PPC delivers immediate traffic within hours. Social media builds gradually: you'll see engagement within days, follower growth within weeks, and significant brand impact within months.",
  },
];

// ============ MAIN COMPONENT ============
export default function SocialMediaPage() {
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
            <Share2 className="w-4 h-4 text-[#1570EF]" />
            <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>
              SOCIAL MEDIA & PPC MARKETING
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={TYPOGRAPHY.h1 + " text-gray-900 mb-6"}
          >
            Grow Your{" "}
            <GradientWord>Social Presence</GradientWord>
            <br />
            & Drive{" "}
            <GradientWord>Paid Results</GradientWord>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto mb-10"}
          >
            Complete social media management and PPC advertising solutions
            that build your community and drive measurable business growth.
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
                Get Free Social Audit
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
              Is Your Social Media{" "}
              <span className="text-[#1570EF]">Actually Working?</span>
            </h2>

            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"}>
              Posting content without a strategy is just noise. If your social media
              isn't driving engagement, leads, or sales—you're wasting time and money.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "No Engagement",
                  desc: "Your posts get likes but no real conversations",
                  color: "from-red-50 to-red-100/50",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "No Community",
                  desc: "Followers aren't turning into customers",
                  color: "from-orange-50 to-orange-100/50",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "No ROI",
                  desc: "You're spending time and money with no return",
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
                  Social media without strategy is just noise. Your competitors are
                  building communities and running targeted ads while you're posting
                  into the void.
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
              We Build <span className="text-[#1570EF]">Social Systems</span> That Grow
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Strategic Content",
                  desc: "Content that resonates with your audience and drives action.",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Community Building",
                  desc: "Turn followers into engaged community members and customers.",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Paid Advertising",
                  desc: "Targeted PPC campaigns that deliver immediate ROI.",
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Data-Driven Optimization",
                  desc: "We track everything and optimize for what works.",
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
                    { label: "Follower Growth", value: "20-50% monthly", color: "text-[#1570EF]" },
                    { label: "Engagement Rate", value: "3-8% average", color: "text-[#1570EF]" },
                    { label: "Website Traffic", value: "30-100% increase", color: "text-green-600" },
                    { label: "Lead Generation", value: "15-40 new leads/month", color: "text-[#1570EF]" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    "Combined organic + paid strategies deliver maximum results."
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
              Social Media Platforms <span className="text-[#1570EF]">We Manage</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Comprehensive social media management across all major platforms
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] text-xl font-bold mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1570EF] transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PPC PLATFORMS ========== */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              PPC & Paid <span className="text-[#1570EF]">Advertising Platforms</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Professional paid advertising management across all platforms
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ppcPlatforms.map((platform, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1570EF] transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Our Social Media & <span className="text-[#1570EF]">PPC Services</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              End-to-end social media management and paid advertising solutions
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1570EF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#1570EF]" />
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

      {/* ========== BENEFITS ========== */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Why Invest in <span className="text-[#1570EF]">Social Media & PPC?</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Combined approach delivers maximum marketing impact
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#1570EF]/20 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 rounded-full bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mx-auto mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
              Our <span className="text-[#1570EF]">Process</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              A systematic approach to integrated marketing success
            </p>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:border-[#1570EF]/20 hover:shadow-lg transition-all group">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PACKAGES ========== */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Social Media <span className="text-[#1570EF]">Management Packages</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Integrated packages for complete social media and advertising management
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
                    <div className="text-4xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                    <div className="text-sm text-gray-400">{pkg.period}</div>
                    <div className="text-sm text-gray-500 mt-4 mb-6">{pkg.bestFor}</div>

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
                        Get Started
                      </motion.button>
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">*Ad spend is billed separately from management fees.</p>
        </div>
      </section>

      {/* ========== PPC PACKAGES ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              PPC-Only <span className="text-[#1570EF]">Packages</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              For businesses focused exclusively on paid advertising
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {ppcPackages.map((pkg, idx) => {
              const isActive = activePackage === idx + 3;

              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div
                    className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col ${
                      isActive
                        ? "border-[#1570EF] shadow-2xl shadow-[#1570EF]/10 scale-[1.02]"
                        : "border-gray-200 hover:border-[#1570EF]/30"
                    }`}
                    onMouseEnter={() => setActivePackage(idx + 3)}
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
                    <div className="text-4xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                    <div className="text-sm text-gray-400">{pkg.period}</div>
                    <div className="text-sm text-gray-500 mt-4 mb-6">{pkg.bestFor}</div>

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
                        Start PPC Campaign
                      </motion.button>
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">*Ad spend is billed separately from management fees.</p>
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
              Common questions about social media and paid advertising
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