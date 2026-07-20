"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link as LinkIcon,
  TrendingUp,
  Search,
  FileText,
  Globe,
  Shield,
  Check,
  Clock,
  Users,
  Target,
  BarChart3,
  Award,
  ArrowRight,
  Zap,
  PenTool,
  Rocket,
  Sparkles,
  DollarSign,
  ChevronDown,
  Phone,
  Mail,
  Calendar,
  Eye,
  Building2,
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
              You've seen what authority can do, so now…
            </p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Ready to build authority links?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
              Let's get your website the backlinks it needs to rank higher and drive more traffic.
            </p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/contact-us"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Start Building Authority
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

const linkTypes = [
  {
    title: "Guest Posts",
    description: "High-quality articles on authority websites",
    icon: <FileText className="w-6 h-6" />,
    features: ["Authority Sites", "Relevant Niches", "Editorial Links", "Traffic Referrals"],
  },
  {
    title: "Resource Links",
    description: "Mentions in resource pages and directories",
    icon: <Globe className="w-6 h-6" />,
    features: ["Resource Pages", "Industry Directories", "Local Citations", "Brand Mentions"],
  },
  {
    title: "Expert Roundups",
    description: "Featured as expert in industry articles",
    icon: <Users className="w-6 h-6" />,
    features: ["Expert Features", "Industry Authority", "Relationship Building", "Brand Exposure"],
  },
  {
    title: "Niche Edits",
    description: "Adding links to existing relevant content",
    icon: <PenTool className="w-6 h-6" />,
    features: ["Contextual Links", "High Authority Pages", "Natural Placement", "Quick Results"],
  },
];

const metrics = [
  { value: "135", label: "backlinks built in 5 months" },
  { value: "50+", label: "DA 40+ websites in our network" },
  { value: "95%", label: "of links are dofollow" },
  { value: "100%", label: "White-hat strategies only" },
];

const benefits = [
  {
    title: "Domain Authority",
    description: "Improve your website's authority score",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    title: "Search Rankings",
    description: "Boost positions in search results",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Referral Traffic",
    description: "Drive qualified visitors from links",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Brand Credibility",
    description: "Establish industry authority",
    icon: <Shield className="w-5 h-5" />,
  },
];

const process = [
  { step: 1, title: "Research & Strategy", description: "Analyze competitors and identify opportunities", duration: "1-2 Weeks" },
  { step: 2, title: "Outreach & Negotiation", description: "Connect with publishers and secure placements", duration: "2-3 Weeks" },
  { step: 3, title: "Content Creation", description: "Write high-quality, relevant content", duration: "1-2 Weeks" },
  { step: 4, title: "Publication & Tracking", description: "Publish and monitor link performance", duration: "Ongoing" },
];

const packages = [
  {
    name: "Starter Links",
    price: "$2,999",
    period: "/ mo",
    features: [
      "8 backlinks per month",
      "DR 40–70 websites",
      "Manual outreach only",
      "Contextual dofollow links",
      "Target page selection",
      "Anchor text planning",
      "Monthly link report",
    ],
    bestFor: "Early-stage brands building authority",
  },
  {
    name: "Growth Links",
    price: "$5,999",
    period: "/ mo",
    features: [
      "16+ backlinks per month",
      "DR 50–90 websites",
      "Authority placements included",
      "Multiple target pages",
      "Advanced anchor optimization",
      "Competitor gap analysis",
      "Custom reporting dashboard",
    ],
    bestFor: "Scaling brands needing authority",
    popular: true,
  },
  {
    name: "Enterprise Links",
    price: "$9,999",
    period: "/ mo",
    features: [
      "26+ backlinks per month",
      "DR 60–90 authority sites",
      "Links across multiple domains",
      "High-trust placements",
      "Internal link optimization",
      "Toxic backlink audit",
      "Dedicated strategy manager",
    ],
    bestFor: "Aggressive growth & market leaders",
  },
];

const caseStudyStats = [
  { label: "Domain Rating", before: "65", after: "71", change: "+9.23%" },
  { label: "Monthly Organic Traffic", before: "74", after: "1,500", change: "+1,983%" },
  { label: "Ranking Keywords", before: "540", after: "762", change: "+41.11%" },
  { label: "Backlinks Earned", before: "2", after: "135", change: "Over 5 months" },
];

const sampleSites = [
  { name: "LearnWorlds", dr: "85" },
  { name: "Superprof", dr: "70" },
  { name: "SafeSearchKids", dr: "66" },
  { name: "ClubHub UK", dr: "55" },
  { name: "Teachfloor", dr: "51" },
  { name: "KiddyCharts", dr: "48" },
];

const competitors = [
  { name: "Khan Academy", dr: "90" },
  { name: "IXL", dr: "79" },
  { name: "BrainPOP", dr: "79" },
  { name: "Learning.com", dr: "63" },
  { name: "Adventure Academy", dr: "61" },
];

const qualityStandards = [
  "No PBNs or low-quality sites",
  "Minimum DA 30 requirement",
  "Editorial review process",
  "Niche relevance ensured",
  "Natural anchor text",
  "Google-compliant practices",
  "Transparent reporting",
  "Manual outreach only",
];

const faqs = [
  {
    question: "How long does it take to see results from link building?",
    answer: "Link building is a long-term SEO strategy. You'll typically see initial ranking improvements in 1-3 months, with significant results appearing in 3-6 months. Quality links continue to provide value for years.",
  },
  {
    question: "What's the difference between guest posting and buying links?",
    answer: "Guest posting involves creating valuable content for relevant websites in exchange for a natural, contextual link. Buying links typically involves paying for low-quality links that violate Google's guidelines and can result in penalties.",
  },
  {
    question: "How do you ensure link quality?",
    answer: "We manually vet every website in our network, ensuring minimum Domain Authority 30+, editorial standards, niche relevance, and organic traffic. We never use PBNs, automated links, or questionable practices.",
  },
  {
    question: "Can I choose the websites where my links will appear?",
    answer: "Yes! We provide a list of available websites in your niche, including their metrics (DA, traffic, etc.). You can approve or request different placements based on your specific goals and preferences.",
  },
];

// ============ MAIN COMPONENT ============
export default function LinkBuildingMain() {
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
            <LinkIcon className="w-4 h-4 text-[#1570EF]" />
            <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>
              LINK BUILDING & GUEST POSTING
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={TYPOGRAPHY.h1 + " text-gray-900 mb-6"}
          >
            Build <GradientWord>Authority Links</GradientWord>
            <br />
            That Drive Real SEO Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto mb-10"}
          >
            Get high-quality backlinks from authority websites through
            strategic guest posting that improves rankings and drives traffic.
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
                Get Free Backlink Audit
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
              Is Your Website{" "}
              <span className="text-[#1570EF]">Invisible in Search?</span>
            </h2>

            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"}>
              You have a great website. But without quality backlinks, search engines
              won't trust you enough to rank your content.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <Search className="w-6 h-6" />,
                  title: "No Organic Traffic",
                  desc: "Your site is buried on page 3+ where nobody finds it",
                  color: "from-red-50 to-red-100/50",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Competitors Dominate",
                  desc: "Your competition has the links — you don't",
                  color: "from-orange-50 to-orange-100/50",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Leads Going Elsewhere",
                  desc: "Customers are finding your competitors, not you",
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
                  Search engines don't trust websites without quality backlinks.
                  If you're not building links, your competitors are—and they're
                  taking all the traffic.
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
              We Build Links That{" "}
              <span className="text-[#1570EF]">Actually Work</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "White-Hat Only",
                  desc: "No PBNs, no spam, no shortcuts. Just real, editorial links from real websites.",
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Strategic Placements",
                  desc: "Every link is placed where it matters most—on relevant, high-authority sites.",
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Quality Content",
                  desc: "We write content that publishers actually want to publish—not filler for a link.",
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Measurable Results",
                  desc: "We track rankings, traffic, and authority so you know exactly what you're getting.",
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
                    { label: "Organic Traffic Growth", value: "+1,983%", color: "text-[#1570EF]" },
                    { label: "Domain Rating Increase", value: "+9.23%", color: "text-[#1570EF]" },
                    { label: "Ranking Keywords", value: "762+", color: "text-green-600" },
                    { label: "Backlinks Built", value: "135", color: "text-[#1570EF]" },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    "Our clients gain real authority, not vanity metrics."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== LINK TYPES ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              High-Quality{" "}
              <span className="text-[#1570EF]">Link Building Methods</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              White-hat strategies that build sustainable domain authority
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {linkTypes.map((type, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1570EF] transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
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

      {/* ========== CASE STUDY ========== */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6 border border-[#1570EF]/20">
              <Award className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>CASE STUDY</span>
            </div>
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900"}>
              From 74 to 1,500 Monthly Visitors
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto mt-4"}>
              How we took a children's education platform from invisible to discovered
            </p>
          </Reveal>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseStudyStats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all text-center">
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Before</div>
                  <div className="text-2xl font-bold text-gray-400">{stat.before}</div>
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-3 mb-1">After</div>
                  <div className="text-3xl font-bold text-[#1570EF]">{stat.after}</div>
                  <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    {stat.change}
                  </div>
                  <div className="text-sm text-gray-500 mt-3">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Case Study Content - Simplified for readability */}
          <Reveal>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet the Client</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our client builds digital learning tools for kids—programs designed to spark
                    curiosity early and keep it alive, while also meeting the needs of children
                    who learn differently. One of their flagship offerings is a platform built
                    for parents, teachers, and librarians supporting children between 2 and 8.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The problem? The platform had been live for years but had quietly stalled.
                    Traffic had been flatlined since 2018, and the resource wasn't reaching
                    nearly the number of families and educators it could have helped.
                  </p>
                  <div className="mt-6 bg-[#1570EF]/5 rounded-xl p-4 border border-[#1570EF]/20">
                    <p className="text-sm font-medium text-[#1570EF]">Our Goal:</p>
                    <p className="text-gray-700">Get this platform back in front of the people searching for it.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Children's education is not a space where you can cut corners. Parents and
                    teachers are skeptical of low-quality sites, so every placement had to sit
                    on a genuinely relevant, trustworthy page—not just any site with a pulse
                    and a DR score.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    That standard cost us volume. Plenty of webmasters don't respond to outreach,
                    and we walked past far more opportunities than we accepted. Even with those
                    constraints, we kept a steady pace of roughly <strong>27 quality backlinks</strong> per month.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-bold text-gray-900 mb-3">Competitors We Were Up Against:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {competitors.map((comp, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                          <span className="text-sm font-medium text-gray-700">{comp.name}</span>
                          <span className="text-xs font-bold text-[#1570EF]">DR {comp.dr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Benefits of{" "}
              <span className="text-[#1570EF]">Quality Link Building</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Strategic backlinks that deliver long-term SEO value
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-[#1570EF]/20 hover:shadow-lg transition-all group">
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

      {/* ========== QUALITY STANDARDS ========== */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Our <span className="text-[#1570EF]">Quality Standards</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              We only build links that Google loves and that drive real results
            </p>
          </Reveal>

          <Reveal>
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {qualityStandards.map((standard, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Our <span className="text-[#1570EF]">Link Building Process</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              A systematic approach to securing quality backlinks
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
              Link Building <span className="text-[#1570EF]">Packages</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Authority backlinks built for Google and AI search
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
                        Start Building Links
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className={TYPOGRAPHY.h2 + " text-gray-900 mb-4"}>
              Frequently Asked <span className="text-[#1570EF]">Questions</span>
            </h2>
            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-2xl mx-auto"}>
              Common questions about guest posting and link building
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