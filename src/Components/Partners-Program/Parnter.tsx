"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Handshake,
  Users,
  Shield,
  Lock,
  Target,
  Zap,
  TrendingUp,
  Globe,
  Briefcase,
  BarChart3,
  FileText,
  Building,
  CheckCircle2,
  ChevronDown,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Award,
  Clock,
  Users2,
  Layers,
  HeadphonesIcon,
  FileCheck,
  PieChart,
  LineChart,
  Sparkles,
  Star,
  TargetIcon,
  ArrowUpRight,
  Globe2,
  Cpu,
  Network,
  GitBranch,
  Workflow,
  BarChart,
  ShieldCheck,
  Eye,
  Fingerprint,
  LockKeyhole,
  MapPin,
  Compass,
  Search,
  Filter,
  UserCheck,
  Heart,
  TrendingDown,
  Lightbulb,
  Rocket,
  Building2,
  BriefcaseBusiness,
  Crown,
  BadgeCheck,
  Medal,
  Trophy,
  Gem,
  Diamond,
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

// ---------- SETTINGS ICON ----------
const Settings = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

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
              You've seen what strategic partnerships can do, so now…
            </p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Ready to grow together?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
              Let's build a strategic partnership that delivers consistent quality, protects your clients, and drives mutual growth.
            </p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/partnership-program-contact"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Start Your Partnership Journey
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

const targetAudience = [
  {
    title: "Digital & Marketing Agencies",
    icon: <Globe2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    description: "Expand service offerings without hiring overhead",
    features: ["White-label execution", "Scalable capacity", "Quality assurance"],
  },
  {
    title: "Healthcare Consultants",
    icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    description: "HIPAA-compliant backend operations support",
    features: ["Compliance expertise", "Confidential handling", "Regulatory knowledge"],
  },
  {
    title: "SaaS & Tech Providers",
    icon: <Cpu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    description: "Technical implementation and integration support",
    features: ["API integration", "Technical support", "Implementation"],
  },
  {
    title: "Media Buying Agencies",
    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    description: "Performance-driven campaign execution",
    features: ["ROI-focused", "Data analytics", "Optimization"],
  },
  {
    title: "Business Development Firms",
    icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    description: "Revenue share partnerships for mutual growth",
    features: ["Shared incentives", "Strategic alignment", "Long-term focus"],
  },
  {
    title: "Managed Service Providers",
    icon: <Network className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    description: "Comprehensive backend operations management",
    features: ["End-to-end support", "24/7 monitoring", "Proactive management"],
  },
];

const principles = [
  { icon: <LockKeyhole className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Zero Client Poaching", description: "Iron-clad protection of your client relationships", angle: 0 },
  { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Full Ownership Retention", description: "You retain 100% client ownership, always", angle: 45 },
  { icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6" />, title: "White-Label Excellence", description: "Flawless execution under your brand", angle: 90 },
  { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Execution Obsession", description: "Quality-first approach to every deliverable", angle: 135 },
  { icon: <Workflow className="w-5 h-5 sm:w-6 sm:h-6" />, title: "SOP-Driven Workflows", description: "Consistency through standardized processes", angle: 180 },
  { icon: <BarChart className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Transparent Accountability", description: "Clear reporting and communication", angle: 225 },
  { icon: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Scalable Infrastructure", description: "Built to grow with your business", angle: 270 },
  { icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Risk Mitigation", description: "Proactive approach to challenges", angle: 315 },
];

const timelineItems = [
  {
    side: "left",
    title: "Strategic Leadership",
    description: "Dedicated account leadership overseeing objectives",
    icon: <Users2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    features: ["Account alignment", "Strategic oversight", "Performance management"],
  },
  {
    side: "right",
    title: "Execution Excellence",
    description: "Domain experts handling daily operations",
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    features: ["Specialized expertise", "Quality delivery", "Timely execution"],
  },
  {
    side: "left",
    title: "Quality Assurance",
    description: "Dedicated QA ensuring delivery standards",
    icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    features: ["Standards compliance", "Quality checks", "Continuous improvement"],
  },
  {
    side: "right",
    title: "Account Management",
    description: "Single point of contact & transparent reporting",
    icon: <HeadphonesIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    features: ["Regular updates", "Issue resolution", "Strategic reviews"],
  },
];

const partnershipModels = [
  {
    title: "White-Label Delivery",
    description: "Full execution under your brand",
    icon: <Eye className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-blue-500 to-blue-600",
    features: ["Brand consistency", "Complete discretion", "Seamless integration"],
    bestFor: "Agencies expanding services",
  },
  {
    title: "Revenue Share",
    description: "Aligned incentives for growth",
    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-green-500 to-green-600",
    features: ["Shared success", "Long-term alignment", "Mutual investment"],
    bestFor: "Strategic partners",
  },
  {
    title: "Backend Execution",
    description: "Operations support, you stay client-facing",
    icon: <Workflow className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-purple-500 to-purple-600",
    features: ["Focus on strategy", "Operational support", "Full transparency"],
    bestFor: "Consultants & advisors",
  },
  {
    title: "Project-Based",
    description: "Fixed scope, defined outcomes",
    icon: <TargetIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-orange-500 to-orange-600",
    features: ["Clear deliverables", "Predictable costs", "Defined timeline"],
    bestFor: "Specific initiatives",
  },
  {
    title: "Retainer Fulfillment",
    description: "Ongoing execution support",
    icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-indigo-500 to-indigo-600",
    features: ["Predictable capacity", "Consistent quality", "Scalable support"],
    bestFor: "Steady workloads",
  },
  {
    title: "Co-Branded",
    description: "Joint market presence",
    icon: <GitBranch className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-pink-500 to-pink-600",
    features: ["Brand synergy", "Market expansion", "Shared resources"],
    bestFor: "Market expansion",
  },
];

const serviceCategories = [
  {
    category: "Revenue & Operations",
    icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    services: [
      { name: "Revenue Cycle Management", highlight: true },
      { name: "Medical Billing Optimization" },
      { name: "Claims Processing" },
      { name: "Denial Management" },
      { name: "Conversion Rate Optimization" },
      { name: "Sales Funnel Optimization" },
    ],
    color: "blue",
  },
  {
    category: "Growth & Visibility",
    icon: <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    services: [
      { name: "SEO Strategy & Implementation", highlight: true },
      { name: "Generative Engine Optimization" },
      { name: "Answer Engine Optimization" },
      { name: "Strategic Link Building" },
      { name: "Content Strategy" },
      { name: "Technical SEO Audit" },
    ],
    color: "green",
  },
  {
    category: "Digital Infrastructure",
    icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    services: [
      { name: "Website Development", highlight: true },
      { name: "Paid Advertising Management" },
      { name: "Social Media Strategy" },
      { name: "Email Marketing Automation" },
      { name: "Analytics & Tracking" },
      { name: "Marketing Technology" },
    ],
    color: "purple",
  },
];

const processSteps = [
  { step: "Discovery", description: "Strategic alignment & scope review", details: ["Initial consultation", "Needs assessment", "Goal alignment"], icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { step: "Definition", description: "Clear scope & deliverables", details: ["Scope documentation", "Timeline planning", "Resource allocation"], icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { step: "Setup", description: "Workflow & access configuration", details: ["Onboarding", "System setup", "Team introduction"], icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { step: "Delivery", description: "Execution with regular reporting", details: ["Ongoing execution", "Progress updates", "Quality checks"], icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { step: "Optimize", description: "Continuous improvement & scaling", details: ["Performance review", "Optimization", "Growth planning"], icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

const metrics = [
  { metric: "Operational Stability", value: "99.9%", description: "Uptime & reliability" },
  { metric: "Client Retention", value: "95%", description: "Year-over-year growth" },
  { metric: "Quality Score", value: "4.9/5.0", description: "Partner satisfaction" },
  { metric: "Response Time", value: "<2h", description: "Average support response" },
];

const successFactors = [
  { title: "Predictable Performance", description: "Reliable outcomes meeting SLAs consistently", icon: <BarChart className="w-5 h-5 sm:w-6 sm:h-6" />, color: "blue" },
  { title: "Process Maturity", description: "Refined workflows minimizing errors and delays", icon: <Workflow className="w-5 h-5 sm:w-6 sm:h-6" />, color: "green" },
  { title: "Revenue Consistency", description: "Steady growth through aligned objectives", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, color: "purple" },
  { title: "Shared Growth Mindset", description: "Mutual investment in long-term success", icon: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6" />, color: "orange" },
  { title: "Brand Protection", description: "Your reputation safeguarded through quality", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, color: "red" },
  { title: "Strategic Alignment", description: "Shared vision and collaborative planning", icon: <TargetIcon className="w-5 h-5 sm:w-6 sm:h-6" />, color: "indigo" },
];

const comparisonRows = [
  { aspect: "Team Structure", us: "Managed delivery team", freelance: "Individual dependent", vendor: "Rotating point persons" },
  { aspect: "Accountability", us: "Structured SOPs & reporting", freelance: "Ad-hoc updates", vendor: "Reactive responses" },
  { aspect: "Client Protection", us: "Zero poaching guarantee", freelance: "High risk exposure", vendor: "Contract dependent" },
  { aspect: "Scalability", us: "Built-in capacity planning", freelance: "Bottleneck risks", vendor: "Lead time required" },
  { aspect: "Long-Term Alignment", us: "Shared growth objectives", freelance: "Project-focused", vendor: "Transaction-focused" },
  { aspect: "Risk Management", us: "Process-driven redundancy", freelance: "Single point failure", vendor: "Limited backup" },
];

const caseStudies = [
  {
    outcome: "Healthcare Agency Transformation",
    metrics: ["65% revenue growth", "Stable delivery timeline", "40% operational efficiency gain"],
    icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-red-100 to-pink-100",
    textColor: "text-red-600",
  },
  {
    outcome: "Performance Agency Scaling",
    metrics: ["40% capacity increase", "New service line launch", "95% client retention rate"],
    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-blue-100 to-cyan-100",
    textColor: "text-blue-600",
  },
  {
    outcome: "Consulting Firm Expansion",
    metrics: ["Backend ops established", "Focus on strategy retained", "Revenue diversification achieved"],
    icon: <BriefcaseBusiness className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    color: "from-green-100 to-emerald-100",
    textColor: "text-green-600",
  },
];

const faqs = [
  { q: "Do you offer true white-label services?", a: "Yes, completely. We work invisibly under your brand with full documentation, reporting, and communication in your name. Our team becomes an extension of yours, maintaining your brand voice and standards throughout all interactions.", icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { q: "Who owns the client relationship?", a: "You retain 100% client ownership. We are strictly a delivery partner with zero client contact unless specifically requested and managed by you. All communication can be channeled through your team.", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { q: "How do you handle confidentiality and NDAs?", a: "NDA-first approach. We sign your NDA before any discussions begin, and maintain strict client data segregation and confidentiality protocols. All team members undergo security training.", icon: <LockKeyhole className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { q: "What's your capacity for scaling accounts?", a: "We operate with built-in redundancy and capacity planning. We can scale from single projects to full account management with proper lead time, thanks to our structured team approach.", icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { q: "Which industries do you specialize in?", a: "Healthcare, professional services, SaaS, e-commerce, and B2B services. We adapt our expertise to your client's specific industry needs with dedicated research and onboarding.", icon: <BriefcaseBusiness className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { q: "What's the typical onboarding timeline?", a: "2-4 weeks for complete setup including workflows, access, and team alignment. We prioritize thorough onboarding over rushed starts to ensure long-term success.", icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" /> },
];

// ============ MAIN COMPONENT ============
export default function PartnersProgramExecutive() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-body)]">
      {/* Progress Indicator */}
      <div className="fixed top-1/2 right-4 sm:right-6 md:right-8 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          {Array.from({ length: 14 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === i ? "bg-[#1570EF] scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to section ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ========== 1. HERO ========== */}
      <section ref={(el) => { sectionRefs.current[0] = el; }} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32 px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute top-10 left-4 w-48 h-48 md:top-20 md:left-10 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-4 w-64 h-64 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />

        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg mb-8 md:mb-10">
              <Handshake className="w-5 h-5 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-gray-700"}>PARTNERS PROGRAM</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              <GradientWord>Strategic Growth</GradientWord>
              <br />
              <span className="relative">
                <GradientWord>Partnerships</GradientWord>
              </span>
            </h1>

            <p className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"}>
              Enterprise-grade execution, revenue-share collaboration, and white-label delivery for agencies who value <span className="font-semibold text-gray-900">discretion</span> and <span className="font-semibold text-gray-900">long-term alignment</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl mx-auto mb-8 md:mb-12 px-4">
              {[
                { icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />, title: "Client Ownership", desc: "Always respected, never compromised" },
                { icon: <Eye className="w-5 h-5 md:w-6 md:h-6" />, title: "Full Transparency", desc: "Complete visibility & control" },
                { icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />, title: "Revenue Share", desc: "Aligned growth incentives" },
              ].map((signal, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-[#1570EF]">{signal.icon}</div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{signal.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{signal.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href={"/partnership-program-contact"}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#1570EF] to-blue-600 text-white rounded-xl font-semibold text-base sm:text-lg overflow-hidden w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none">
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    Start Partnership Discussion
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#1570EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* ========== 2. TARGET AUDIENCE ========== */}
      <section ref={(el) => { sectionRefs.current[1] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6">
              <TargetIcon className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>TARGET AUDIENCE</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Designed For <span className="relative"><GradientWord>Leaders</GradientWord><div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#1570EF] to-blue-600 rounded-full" /></span>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              Serious filter for agencies and operators who prioritize <span className="font-semibold text-gray-900">quality, discretion, and long-term growth</span> over quick transactions.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {targetAudience.map((segment, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-[#1570EF] hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl text-[#1570EF]">{segment.icon}</div>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-[#1570EF] transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{segment.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{segment.description}</p>
                  <ul className="space-y-2">
                    {segment.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
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

      {/* ========== 3. PROBLEM & SOLUTION ========== */}
      <section ref={(el) => { sectionRefs.current[2] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center px-4 sm:px-0">
            <Reveal className="bg-gradient-to-br from-red-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-red-100">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-red-100 rounded-xl"><TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" /></div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-wider">Industry Reality</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Common Partnership Pain Points</h3>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {["Inconsistent quality damaging your brand reputation", "Constant client poaching fears and boundary violations", "Poor communication leading to missed deadlines", "Lack of accountability and transparent reporting", "Short-term thinking eroding client trust", "Hidden costs and unexpected scope creep"].map((pain, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-red-100 hover:border-red-200 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{pain}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-green-100 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16" />
              <div className="flex items-center gap-3 mb-6 sm:mb-8 relative z-10">
                <div className="p-2 sm:p-3 bg-green-100 rounded-xl"><Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" /></div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-green-600 uppercase tracking-wider">Our Solution</span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Structured Partnership Framework</h3>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 relative z-10">
                {["System-driven delivery ensuring consistent quality", "Clear boundaries with iron-clad client protection", "Structured communication and SLA-based reporting", "Transparent pricing and scope management", "Long-term partnership mindset with shared goals", "Proactive capacity planning and scalability"].map((solution, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-green-100 hover:border-green-200 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{solution}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== 4. PARTNERSHIP PRINCIPLES ========== */}
      <section
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-white backdrop-blur-sm rounded-full border border-blue-200 mb-4 sm:mb-6 shadow-sm">
              <Gem className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-gray-700"}>
                CORE PHILOSOPHY
              </span>
            </Reveal>

            <Reveal
              delay={100}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
            >
              Partnership Principles That{" "}
              <GradientWord>Drive Success</GradientWord>
            </Reveal>

            <Reveal
              delay={200}
              className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}
            >
              Calm. Mature. Confident. Built for directors who value stability
              over hype.
            </Reveal>
          </div>

          {/* Desktop Circular Layout */}
          <div className="hidden lg:block relative w-full aspect-square max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-2 border-blue-100/50 rounded-full" />
                <div className="absolute inset-8 border-2 border-blue-200/50 rounded-full" />
                <div className="absolute inset-16 border-2 border-blue-300/50 rounded-full" />
              </div>
            </div>

            <div className="absolute inset-0">
              {principles.map((principle, idx) => {
                const radius = 42;
                const angleInRad = (principle.angle * Math.PI) / 180;
                const x = 50 + radius * Math.cos(angleInRad);
                const y = 50 + radius * Math.sin(angleInRad);

                return (
                  <Reveal key={idx} delay={idx * 100}>
                    <div
                      className="absolute w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44
                        bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200
                        p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center
                        shadow-sm hover:border-[#1570EF]/50 hover:shadow-lg transition-all duration-300
                        -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: `translate(-50%, -50%)`,
                      }}
                    >
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                          bg-gradient-to-br from-blue-50 to-indigo-50
                          rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4"
                      >
                        <div className="text-[#1570EF]">{principle.icon}</div>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1 sm:mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-tight px-2">
                        {principle.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}

              {/* Center Element */}
              <Reveal delay={800}>
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                    bg-gradient-to-br from-[#1570EF] to-blue-600
                    rounded-full flex items-center justify-center text-center p-5 sm:p-6
                    shadow-xl shadow-blue-500/30 ring-4 ring-white/20"
                >
                  <div>
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full
                        flex items-center justify-center mb-2 mx-auto"
                    >
                      <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                      Strategic Alignment
                    </h3>
                    <p className="text-[10px] sm:text-xs text-white/90">
                      Long-term mutual success
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Mobile Grid Layout */}
          <div className="lg:hidden grid grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
            {principles.map((principle, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div
                  className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200
                    p-4 sm:p-6 shadow-sm hover:shadow-lg hover:border-[#1570EF]/50
                    transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-indigo-50
                      rounded-2xl flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <div className="text-[#1570EF]">{principle.icon}</div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5. OPERATIONAL BACKBONE ========== */}
      <section ref={(el) => { sectionRefs.current[4] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6">
              <Cpu className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>OPERATIONAL BACKBONE</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Built on <span className="relative"><GradientWord>Robust Infrastructure</GradientWord><div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#1570EF] to-blue-600 rounded-full" /></span>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              "Our partners don't rely on individuals — they rely on a managed delivery team built to scale."
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1570EF] to-blue-600 hidden md:block" />
            <div className="space-y-8 sm:space-y-12">
              {timelineItems.map((item, idx) => (
                <Reveal key={idx} delay={idx * 200}>
                  <div className={`flex ${item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-6 sm:gap-8`}>
                    <div className={`flex-1 ${item.side === "left" ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-[#1570EF] transition-colors">
                        <div className={`flex ${item.side === "left" ? "md:justify-end" : ""} mb-4 sm:mb-6`}>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center text-[#1570EF]">{item.icon}</div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{item.description}</p>
                        <ul className={`space-y-2 ${item.side === "left" ? "md:text-right" : ""}`}>
                          {item.features.map((feature, fIdx) => (
                            <li key={fIdx} className="text-sm sm:text-base text-gray-700">
                              <span className="inline-flex items-center gap-2">
                                {item.side === "right" && <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />}
                                {feature}
                                {item.side === "left" && <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block relative">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white border-4 border-[#1570EF] rounded-full" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 6. PARTNERSHIP MODELS ========== */}
      <section ref={(el) => { sectionRefs.current[5] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full mb-4 sm:mb-6">
              <BriefcaseBusiness className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-gray-700"}>PARTNERSHIP MODELS</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Flexible Engagement <GradientWord>Models</GradientWord>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              Choose the structure that aligns with your business goals and growth objectives.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {partnershipModels.map((model, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${model.color}`} />
                  <div className="p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 text-gray-700">{model.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{model.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{model.description}</p>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {model.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded-full">
                      <UserCheck className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{model.bestFor}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 7. SERVICES ========== */}
      <section ref={(el) => { sectionRefs.current[6] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:40px_40px] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>SERVICE PORTFOLIO</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Comprehensive <span className="relative"><GradientWord>Capabilities</GradientWord><div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#1570EF] to-blue-600 rounded-full" /></span>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              End-to-end service delivery across multiple domains and industries.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {serviceCategories.map((category, idx) => (
              <Reveal key={idx} delay={idx * 200}>
                <div className={`relative bg-gradient-to-b ${category.color === "blue" ? "from-blue-50/50 to-white" : category.color === "green" ? "from-green-50/50 to-white" : "from-purple-50/50 to-white"} rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${category.color === "blue" ? "bg-blue-100" : category.color === "green" ? "bg-green-100" : "bg-purple-100"}`}>
                      <div className={category.color === "blue" ? "text-blue-600" : category.color === "green" ? "text-green-600" : "text-purple-600"}>{category.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{category.category}</h3>
                      <div className={`w-8 h-1 sm:w-12 sm:h-1 rounded-full mt-2 ${category.color === "blue" ? "bg-blue-500" : category.color === "green" ? "bg-green-500" : "bg-purple-500"}`} />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {category.services.map((service, sIdx) => (
                      <Reveal key={sIdx} delay={idx * 200 + sIdx * 50}>
                        <div className={`flex items-center gap-3 p-3 rounded-lg ${service.highlight ? category.color === "blue" ? "bg-blue-100/50" : category.color === "green" ? "bg-green-100/50" : "bg-purple-100/50" : "hover:bg-gray-50"} transition-colors duration-200`}>
                          <div className={`w-2 h-2 rounded-full ${category.color === "blue" ? "bg-blue-500" : category.color === "green" ? "bg-green-500" : "bg-purple-500"}`} />
                          <span className={`font-medium text-sm sm:text-base ${service.highlight ? category.color === "blue" ? "text-blue-700" : category.color === "green" ? "text-green-700" : "text-purple-700" : "text-gray-700"}`}>{service.name}</span>
                          {service.highlight && <span className="ml-auto text-xs font-semibold px-2 py-1 rounded-full bg-white">POPULAR</span>}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 8. ENGAGEMENT PROCESS ========== */}
      <section ref={(el) => { sectionRefs.current[7] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full mb-4 sm:mb-6">
              <Workflow className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-gray-700"}>ENGAGEMENT PROCESS</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Simple. Predictable. <GradientWord>Safe.</GradientWord>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              A structured process designed for seamless integration and predictable outcomes.
            </Reveal>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 transform -translate-y-1/2 hidden lg:block" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              {processSteps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 200}>
                  <div className="relative">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 text-center hover:border-[#1570EF] hover:shadow-xl transition-all duration-300 group">
                      <div className="relative mb-6 sm:mb-8">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 text-[#1570EF]">{step.icon}</div>
                        {idx < 4 && (
                          <>
                            <div className="absolute top-1/2 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-white border-4 border-blue-300 rounded-full transform translate-x-1/2 -translate-y-1/2 hidden lg:block" />
                            <div className="absolute top-1/2 right-0 w-1 h-1 sm:w-2 sm:h-2 bg-blue-500 rounded-full transform translate-x-1/2 -translate-y-1/2 hidden lg:block" />
                          </>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.step}</h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 9. COMMUNICATION STANDARDS ========== */}
      <section ref={(el) => { sectionRefs.current[8] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4 sm:mb-6">
              <HeadphonesIcon className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-[#1570EF]"}>COMMUNICATION STANDARDS</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Transparent <GradientWord>Communication</GradientWord>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              Clear protocols that eliminate uncertainty and build lasting trust.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-0">
            <Reveal className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-100 rounded-2xl flex items-center justify-center"><HeadphonesIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" /></div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Communication Channels</h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">Always Connected</p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { channel: "Dedicated Point of Contact", description: "Single accountable lead for your account", icon: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { channel: "Weekly Sync Calls", description: "Structured agenda, recorded for reference", icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { channel: "Slack / Email Access", description: "Real-time communication as needed", icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { channel: "Emergency Escalation", description: "24/7 critical issue resolution path", icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> },
                ].map((item, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="flex items-start gap-3 sm:gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-colors">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{item.channel}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-green-100 rounded-2xl flex items-center justify-center"><FileCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600" /></div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Reporting Cadence</h3>
                  <p className="text-green-600 font-medium text-sm sm:text-base">Always Informed</p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { frequency: "Daily Updates", description: "Progress tracking via preferred channel", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, color: "green" },
                  { frequency: "Weekly Reports", description: "Comprehensive performance metrics", icon: <BarChart className="w-4 h-4 sm:w-5 sm:h-5" />, color: "blue" },
                  { frequency: "Monthly Reviews", description: "Strategic alignment & optimization", icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, color: "purple" },
                  { frequency: "Quarterly Reviews", description: "Growth planning & goal setting", icon: <TargetIcon className="w-4 h-4 sm:w-5 sm:h-5" />, color: "orange" },
                ].map((item, idx) => (
                  <Reveal key={idx} delay={idx * 100}>
                    <div className="flex items-start gap-3 sm:gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-200 transition-colors">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 ${item.color === "green" ? "bg-green-100" : item.color === "blue" ? "bg-blue-100" : item.color === "purple" ? "bg-purple-100" : "bg-orange-100"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <div className={item.color === "green" ? "text-green-600" : item.color === "blue" ? "text-blue-600" : item.color === "purple" ? "text-purple-600" : "text-orange-600"}>{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{item.frequency}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========== 10. SECURITY & COMPLIANCE ========== */}
      <section ref={(el) => { sectionRefs.current[9] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full mb-4 sm:mb-6">
              <ShieldCheck className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-gray-700"}>SECURITY & COMPLIANCE</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Enterprise-Grade <GradientWord>Security</GradientWord>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              Military-grade protocols for healthcare and regulated industries.
            </Reveal>
          </div>

          <div className="relative px-4 sm:px-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-indigo-50/30 rounded-3xl transform rotate-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-3xl transform -rotate-1" />
            <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-6 sm:p-8 md:p-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center"><Fingerprint className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" /></div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Security Protocols</h3>
                      <p className="text-blue-600 font-medium text-sm sm:text-base">Iron-Clad Protection</p>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    {["NDA-first engagement approach", "HIPAA-compliant infrastructure", "Role-based access control systems", "Encrypted data transmission & storage", "Regular security audits & compliance checks", "SOC 2 Type II certified data centers"].map((protocol, idx) => (
                      <Reveal key={idx} delay={idx * 100}>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" /></div>
                          <span className="text-sm sm:text-base text-gray-700">{protocol}</span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-gray-200">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center"><LockKeyhole className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-700" /></div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Confidentiality</h3>
                      <p className="text-gray-600 font-medium text-sm sm:text-base">Absolute Discretion</p>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    {["Client data isolation & segregation", "Confidential document handling", "Non-disclosure of partner relationships", "Secure communication channels", "Data retention & disposal policies", "Background checked personnel"].map((standard, idx) => (
                      <Reveal key={idx} delay={idx * 100}>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0"><Shield className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" /></div>
                          <span className="text-sm sm:text-base text-gray-700">{standard}</span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 sm:gap-3"><BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" /><span className="text-white font-semibold text-sm sm:text-base">Enterprise Security</span></div>
                  <div className="h-4 sm:h-6 w-px bg-white/30 hidden sm:block" />
                  <div className="flex items-center gap-2 sm:gap-3"><Medal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" /><span className="text-white font-semibold text-sm sm:text-base">Industry Compliance</span></div>
                  <div className="h-4 sm:h-6 w-px bg-white/30 hidden sm:block" />
                  <div className="flex items-center gap-2 sm:gap-3"><Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" /><span className="text-white font-semibold text-sm sm:text-base">Zero Breach History</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 11. WHY PARTNERS STAY ========== */}
      <section ref={(el) => { sectionRefs.current[10] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4 sm:mb-6">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className={TYPOGRAPHY.label + " text-green-600"}>PARTNER SUCCESS</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Why Partners <GradientWord>Stay & Thrive</GradientWord>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              Tangible advantages that drive long-term partnership success.
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0">
            {metrics.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mb-2 sm:mb-3">{stat.value}</div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{stat.metric}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{stat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            {successFactors.map((factor, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:border-green-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${factor.color === "blue" ? "bg-blue-100" : factor.color === "green" ? "bg-green-100" : factor.color === "purple" ? "bg-purple-100" : factor.color === "orange" ? "bg-orange-100" : factor.color === "red" ? "bg-red-100" : "bg-indigo-100"} group-hover:scale-110 transition-transform duration-300`}>
                      <div className={factor.color === "blue" ? "text-blue-600" : factor.color === "green" ? "text-green-600" : factor.color === "purple" ? "text-purple-600" : factor.color === "orange" ? "text-orange-600" : factor.color === "red" ? "text-red-600" : "text-indigo-600"}>{factor.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{factor.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{factor.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 12. COMPARISON TABLE ========== */}
      <section ref={(el) => { sectionRefs.current[11] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full mb-4 sm:mb-6">
              <Filter className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-gray-700"}>COMPARISON</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Structured Partnership vs <GradientWord>Alternatives</GradientWord>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              A calm comparison highlighting fundamental operational differences.
            </Reveal>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg overflow-x-auto">
            <div className="min-w-[800px] sm:min-w-full">
              <div className="grid grid-cols-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                <div className="p-4 sm:p-6"><h3 className="font-semibold text-gray-900 text-sm sm:text-base">Comparison Aspect</h3></div>
                <div className="p-4 sm:p-6 bg-gradient-to-b from-blue-50 to-white"><div className="flex items-center gap-2 sm:gap-3"><div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#1570EF] rounded-full" /><h3 className="font-bold text-[#1570EF] text-sm sm:text-base">Upscale Alliance</h3></div><p className="text-xs sm:text-sm text-blue-600 mt-1">Strategic Partnership</p></div>
                <div className="p-4 sm:p-6"><div className="flex items-center gap-2 sm:gap-3"><div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full" /><h3 className="font-bold text-gray-700 text-sm sm:text-base">Freelancers</h3></div><p className="text-xs sm:text-sm text-gray-600 mt-1">Individual Dependent</p></div>
                <div className="p-4 sm:p-6"><div className="flex items-center gap-2 sm:gap-3"><div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full" /><h3 className="font-bold text-gray-700 text-sm sm:text-base">Traditional Vendors</h3></div><p className="text-xs sm:text-sm text-gray-600 mt-1">Transaction-Focused</p></div>
              </div>
              {comparisonRows.map((row, idx) => (
                <div key={idx} className={`grid grid-cols-4 ${idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"} hover:bg-blue-50/30 transition-colors`}>
                  <div className="p-4 sm:p-6 border-r border-gray-200"><h4 className="font-medium text-gray-900 text-sm sm:text-base">{row.aspect}</h4></div>
                  <div className="p-4 sm:p-6 border-r border-gray-200"><div className="flex items-center gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" /><span className="font-medium text-gray-900 text-sm sm:text-base">{row.us}</span></div></div>
                  <div className="p-4 sm:p-6 border-r border-gray-200"><span className="text-gray-700 text-sm sm:text-base">{row.freelance}</span></div>
                  <div className="p-4 sm:p-6"><span className="text-gray-700 text-sm sm:text-base">{row.vendor}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 13. CASE STUDIES ========== */}
      <section ref={(el) => { sectionRefs.current[12] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4 sm:mb-6">
              <LineChart className="w-4 h-4 text-purple-600" />
              <span className={TYPOGRAPHY.label + " text-purple-600"}>PARTNERSHIP OUTCOMES</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Real <GradientWord>Partnership Success</GradientWord>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              Anonymous success indicators from existing strategic partnerships.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {caseStudies.map((caseStudy, idx) => (
              <Reveal key={idx} delay={idx * 200}>
                <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${caseStudy.color}`} />
                  <div className="p-6 sm:p-8">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${caseStudy.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={caseStudy.textColor}>{caseStudy.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{caseStudy.outcome}</h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {caseStudy.metrics.map((metric, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-3"><div className="w-2 h-2 bg-gray-900 rounded-full" /><span className="text-gray-700 text-sm sm:text-base">{metric}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 14. FAQ ========== */}
      <section ref={(el) => { sectionRefs.current[13] = el; }} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-20 px-4">
            <Reveal className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full mb-4 sm:mb-6">
              <FileText className="w-4 h-4 text-[#1570EF]" />
              <span className={TYPOGRAPHY.label + " text-gray-700"}>FREQUENTLY ASKED QUESTIONS</span>
            </Reveal>
            <Reveal delay={100} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Common <GradientWord>Questions Answered</GradientWord>
            </Reveal>
            <Reveal delay={200} className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-3xl mx-auto"}>
              Direct answers to the most important partnership questions.
            </Reveal>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group">
                  <button onClick={() => toggleFaq(idx)} className="w-full text-left flex items-center justify-between p-4 sm:p-6 md:p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#1570EF] hover:shadow-lg transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none" aria-expanded={expandedFaq === idx}>
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-[#1570EF]">{faq.icon}</div>
                      <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{faq.q}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 transition-transform duration-300 ${expandedFaq === idx ? "rotate-180 text-[#1570EF]" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8 pt-4 md:pt-6 bg-gradient-to-b from-white to-blue-50/30 rounded-b-2xl border-x border-b border-gray-200">
                          <div className="flex gap-3 sm:gap-4 md:gap-6">
                            <div className="flex-shrink-0 w-8 sm:w-10 md:w-12" />
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA (Same as Homepage) ========== */}
      <CallToAction />
    </div>
  );
}

