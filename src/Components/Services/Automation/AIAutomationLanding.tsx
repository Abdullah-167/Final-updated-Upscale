"use client";

import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Zap,
  TrendingUp,
  BarChart3,
  Users,
  Target,
  Globe,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Network,
  Workflow,
  Rocket,
  Briefcase,
  Shield,
  Eye,
  ChevronDown,
  Calendar,
  Mail,
  Phone,
  Award,
  FileText,
  Search,
  Settings,
  MessageSquare,
  Brain,
  Layers,
  TrendingDown,
  Building2,
  Heart,
  ShoppingCart,
  DollarSign,
  Cloud,
  Building,
  BookOpen,
  Truck,
  Scale,
  Megaphone,
  Hotel,
  HelpCircle,
  User,
  Check,
  Layout,
  Cpu,
  Code,
  Database,
  CreditCard,
  Receipt,
  FileSignature,
  Home,
  HeartPulse,
  Wrench,
  GraduationCap,
  RefreshCcw,
  Star,
  XCircle,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
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
      background: #F3F4F6;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: #1570EF;
      border-radius: 4px;
      transition: background 0.3s ease;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #0A5BD0;
    }
    * {
      scrollbar-width: thin;
      scrollbar-color: #1570EF #F3F4F6;
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

// ============ DATA ============

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

const notifications = [
  { app: "Slack", text: "New sales call booked", time: "Now", icon: Zap, color: "#1570EF" },
  { app: "Hermes", text: "Lead research brief compiled", time: "2m", icon: Brain, color: "#374151" },
  { app: "OpenClaw", text: "Inbox triaged · 23 emails handled", time: "5m", icon: Mail, color: "#0f766e" },
  { app: "DocuSign", text: "Contract signed · onboarding started", time: "9m", icon: FileSignature, color: "#ffb61e" },
  { app: "HubSpot", text: "Lead routed to Sarah · replied in 14s", time: "12m", icon: Users, color: "#ff7a59" },
  { app: "Stripe", text: "Invoice #1043 paid · $4,800", time: "18m", icon: CreditCard, color: "#635bff" },
  { app: "Xero", text: "Invoice reconciled · $6,200", time: "22m", icon: Receipt, color: "#13b5ea" },
  { app: "Gmail", text: "Follow-up sent to 38 warm leads", time: "27m", icon: Mail, color: "#ea4335" },
];

const painPoints = [
  "Your team spends hours on tasks that should take minutes.",
  "Leads slip through cracks because follow-up is manual.",
  "You're paying for 6+ tools that don't talk to each other.",
  "Reporting takes a full day because data lives everywhere.",
  "You've tried automating before, but nothing stuck.",
  "Growth means hiring more people, not building better systems.",
  "Your best people are buried in admin instead of strategy.",
];

const agenticFeatures = [
  {
    title: "Autonomous Decision Making",
    description: "AI agents that understand context, set goals, and execute plans without human intervention",
    icon: <Brain className="w-8 h-8" />,
    color: "blue",
  },
  {
    title: "Multi-Agent Collaboration",
    description: "Multiple AI agents working together, handing off tasks and sharing context seamlessly",
    icon: <Network className="w-8 h-8" />,
    color: "green",
  },
  {
    title: "Self-Learning Systems",
    description: "Agents that improve over time by learning from outcomes and feedback",
    icon: <RefreshCcw className="w-8 h-8" />,
    color: "purple",
  },
  {
    title: "Human-in-the-Loop",
    description: "Strategic oversight with automated execution—humans supervise, agents execute",
    icon: <Users className="w-8 h-8" />,
    color: "orange",
  },
];

const features = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "End-to-end process automation that connects your tools and eliminates manual handoffs.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboards",
    desc: "Real-time visibility into pipeline, team output, and operational health, built automatically.",
  },
  {
    icon: Bot,
    title: "AI-Powered Agents",
    desc: "Custom AI agents that handle triage, qualification, and first-response at scale.",
  },
  {
    icon: Database,
    title: "CRM & Data Architecture",
    desc: "Clean, structured data that flows where it needs to, with no manual data entry required.",
  },
  {
    icon: Settings,
    title: "System Integration",
    desc: "Connect your entire stack. We make Zapier, Make, n8n, and custom APIs work as one system.",
  },
  {
    icon: Target,
    title: "Lead Management",
    desc: "Automated lead scoring, routing, and nurture sequences that respond in seconds, not hours.",
  },
  {
    icon: FileText,
    title: "Document Automation",
    desc: "Proposals, invoices, and contracts generated and sent automatically from your CRM data.",
  },
  {
    icon: Layers,
    title: "Onboarding Systems",
    desc: "Client and employee onboarding flows that run themselves: checklists, emails, and access provisioning.",
  },
  {
    icon: RefreshCcw,
    title: "Ongoing Optimisation",
    desc: "We don't just build it and leave. We monitor, iterate, and improve your automations monthly.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    duration: "1-2 weeks",
    description: "We analyze your current processes, systems, and data to identify high-impact opportunities for AI and automation.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    duration: "1 week",
    description: "We create a prioritized roadmap with clear ROI projections, technology recommendations, and implementation timeline.",
    icon: <Target className="w-8 h-8" />,
  },
  {
    step: "03",
    title: "Build & Test",
    duration: "2-6 weeks",
    description: "Our engineers build and test your custom AI agents and automations in a sandbox environment before deployment.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    step: "04",
    title: "Deploy & Monitor",
    duration: "Ongoing",
    description: "We launch your solutions, monitor performance, and continuously optimize for maximum ROI.",
    icon: <Rocket className="w-8 h-8" />,
  },
];

const services = [
  {
    category: "AI Agents & Agentic Automation",
    icon: <Bot className="w-8 h-8" />,
    description: "Autonomous AI employees that think, plan, and execute",
    features: [
      "Custom AI agent development",
      "Multi-agent orchestration",
      "Agentic workflow design",
      "LLM integration (GPT-4, Claude, Gemini)",
      "Vector databases & embeddings",
      "RAG (Retrieval Augmented Generation)",
    ],
    color: "blue",
  },
  {
    category: "Business Process Automation",
    icon: <Workflow className="w-8 h-8" />,
    description: "End-to-end automation of complex business workflows",
    features: [
      "Zapier & Make.com development",
      "n8n & Power Automate",
      "Custom API integrations",
      "Legacy system modernization",
      "Robotic Process Automation (RPA)",
      "Document processing automation",
    ],
    color: "green",
  },
  {
    category: "Systems Integration",
    icon: <Network className="w-8 h-8" />,
    description: "Connect your entire tech stack for seamless data flow",
    features: [
      "CRM integration (HubSpot, Salesforce, Pipedrive)",
      "ERP integration",
      "Marketing automation (Marketo, ActiveCampaign)",
      "Data warehouse synchronization",
      "Real-time data pipelines",
      "Legacy system connectivity",
    ],
    color: "purple",
  },
  {
    category: "AI Consulting & Strategy",
    icon: <Brain className="w-8 h-8" />,
    description: "Strategic roadmap for AI adoption and implementation",
    features: [
      "AI readiness assessment",
      "Use case identification",
      "ROI modeling",
      "Technology selection",
      "Governance framework",
      "Team training & upskilling",
    ],
    color: "orange",
  },
  {
    category: "Data Analytics & BI",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Turn your data into actionable insights",
    features: [
      "Custom dashboards",
      "Real-time reporting",
      "Predictive analytics",
      "Data visualization",
      "KPI tracking",
      "Business intelligence",
    ],
    color: "red",
  },
  {
    category: "Sales & Marketing Automation",
    icon: <Megaphone className="w-8 h-8" />,
    description: "Accelerate revenue with automated marketing and sales",
    features: [
      "Lead generation automation",
      "Email marketing sequences",
      "Personalized outreach at scale",
      "CRM enrichment",
      "Sales pipeline automation",
      "Attribution reporting",
    ],
    color: "indigo",
  },
];

const useCasesList = [
  {
    id: 1,
    title: "Sales and marketing automation",
    description: "Content creation, full-funnel automation, lead routing, CRM, outbound, payments, contracts and much more.",
    image: "/sales.svg",
  },
  {
    id: 2,
    title: "Image, voice, text recognition and analysis",
    description: "Analyze and parse documents, biometrics, emotion, facial, products, videos and more.",
    image: "/Image.svg",
  },
  {
    id: 3,
    title: "Predictive analytics",
    description: "Data-driven decision making through risk analytics, demand or inventory forecasting.",
    image: "/Predictive.svg",
  },
  {
    id: 4,
    title: "Conversational AI",
    description: "Prompt engineering, automatic replies for customer service, sales, chat bots, and marketing.",
    image: "/Conversational.svg",
  },
  {
    id: 5,
    title: "Project management",
    description: "Connect all manual, repetitive steps in a process, from task handoff to completion.",
    image: "/Project.svg",
  },
  {
    id: 6,
    title: "Staff augmentation",
    description: "Save employees hours a day by automating their most tedious daily tasks.",
    image: "/Staff.svg",
  },
  {
    id: 7,
    title: "Data silos",
    description: "Automate data entry, collection, cleansing and reporting from silo'd locations.",
    image: "/Data.svg",
  },
  {
    id: 8,
    title: "Customer service",
    description: "Most customer service questions and responses are similar and repetitive.",
    image: "/Customer.svg",
  },
  {
    id: 9,
    title: "Connect apps",
    description: "Most of your apps can be integrated for instant handoffs of data and consolidation.",
    image: "/Connect.svg",
  },
];

const appImages = [
  { id: 1, name: "Gmail", logo: "/mail.png" },
  { id: 2, name: "Slack", logo: "/slack.png" },
  { id: 3, name: "Zoom", logo: "/zoom.png" },
  { id: 4, name: "Salesforce", logo: "/salesforce1.png" },
  { id: 5, name: "HubSpot", logo: "/hubspotmini.png" },
  { id: 6, name: "Shopify", logo: "/shopify.png" },
  { id: 7, name: "Zendesk", logo: "/zendesk.png" },
  { id: 8, name: "Mailchimp", logo: "/mailchimp.png" },
  { id: 9, name: "Stripe", logo: "/stripe.png" },
  { id: 10, name: "Webflow", logo: "/Webflow.png" },
  { id: 11, name: "Trello", logo: "/trello.png" },
  { id: 12, name: "Teams", logo: "/teams.png" },
  { id: 13, name: "Asana", logo: "/asana.png" },
  { id: 14, name: "Outlook", logo: "/Outlook.png" },
  { id: 15, name: "Marketo", logo: "/Marketo.png" },
  { id: 16, name: "Notion", logo: "/notion.png" },
  { id: 17, name: "Airtable", logo: "/Airtable.png" },
  { id: 18, name: "Jira", logo: "/Jira.png" },
  { id: 19, name: "Drive", logo: "/drive.png" },
  { id: 20, name: "DocuSign", logo: "/DocuSign.png" },
  { id: 21, name: "Discord", logo: "/discord.png" },
  { id: 22, name: "ClickUp", logo: "/ClickUp.png" },
  { id: 23, name: "Calendly", logo: "/Calendly.png" },
  { id: 24, name: "Twitter", logo: "/twitter.png" },
  { id: 25, name: "Facebook", logo: "/facebook.png" },
  { id: 26, name: "Meet", logo: "/meet.png" },
];

const leadingCompanies = [
  { id: 1, name: "ChatGPT", logo: "/chatgpt.png" },
  { id: 2, name: "OpenAI", logo: "/openai.png" },
  { id: 3, name: "Claude", logo: "/Claude.webp" },
  { id: 4, name: "Gemini", logo: "/gemeni.png" },
  { id: 5, name: "HubSpot", logo: "/Hubspot.png" },
  { id: 6, name: "Salesforce", logo: "/salesforce.png" },
  { id: 7, name: "Zapier", logo: "/zapier.png" },
  { id: 8, name: "Zoho", logo: "/zoho.png" },
  { id: 9, name: "Monday.com", logo: "/monday.png" },
  { id: 10, name: "UI Path", logo: "/UI-path.png" },
  { id: 11, name: "Make", logo: "/make.png" },
  { id: 12, name: "Pipedrive", logo: "/pipedrive.png" },
  { id: 13, name: "GoHighLevel", logo: "/highlevel.png" },
  { id: 14, name: "n8n", logo: "/n8n.png" },
];

const industriesWeServe = [
  { id: 1, name: "Healthcare", icon: <Heart className="w-8 h-8 text-blue-600" />, bg: "bg-blue-100", desc: "HIPAA Compliant" },
  { id: 2, name: "E-commerce", icon: <ShoppingCart className="w-8 h-8 text-green-600" />, bg: "bg-green-100", desc: "Shopify, Magento" },
  { id: 3, name: "Finance", icon: <DollarSign className="w-8 h-8 text-purple-600" />, bg: "bg-purple-100", desc: "Banking, Insurance" },
  { id: 4, name: "SaaS", icon: <Cloud className="w-8 h-8 text-orange-600" />, bg: "bg-orange-100", desc: "B2B, B2C Platforms" },
  { id: 5, name: "Real Estate", icon: <Building className="w-8 h-8 text-red-600" />, bg: "bg-red-100", desc: "Property, REITs" },
  { id: 6, name: "Manufacturing", icon: <Cpu className="w-8 h-8 text-amber-600" />, bg: "bg-amber-100", desc: "Supply Chain" },
  { id: 7, name: "Education", icon: <BookOpen className="w-8 h-8 text-teal-600" />, bg: "bg-teal-100", desc: "EdTech, Institutions" },
  { id: 8, name: "Logistics", icon: <Truck className="w-8 h-8 text-indigo-600" />, bg: "bg-indigo-100", desc: "Supply Chain" },
  { id: 9, name: "Legal", icon: <Scale className="w-8 h-8 text-cyan-600" />, bg: "bg-cyan-100", desc: "Law Firms" },
  { id: 10, name: "Marketing", icon: <Megaphone className="w-8 h-8 text-pink-600" />, bg: "bg-pink-100", desc: "Agencies, Brands" },
  { id: 11, name: "Hospitality", icon: <Hotel className="w-8 h-8 text-rose-600" />, bg: "bg-rose-100", desc: "Hotels, Travel" },
  { id: 12, name: "Non-Profit", icon: <Heart className="w-8 h-8 text-emerald-600" />, bg: "bg-emerald-100", desc: "NGOs, Foundations" },
];

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "(917) 947-0117" },
  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@upscalealliance.com" },
  { icon: <Clock className="w-5 h-5" />, label: "Response", value: "Within 24 hours" },
];

const faqs = [
  {
    q: "What is AI automation and how does it work?",
    a: "AI automation combines artificial intelligence with automated workflows to handle both complex processes and repetitive tasks. AI-driven automations can analyze data, make decisions, and learn from patterns, enabling businesses to achieve outcomes that go beyond traditional automation.",
  },
  {
    q: "What's the difference between traditional RPA and agentic AI?",
    a: "Traditional RPA is rigid and fragile—like driving manually to a destination using printed directions. Agentic AI is like self-driving cars that understand your goal and the nuance it takes to get there. They course-correct, identify shortcuts, and get smarter over time.",
  },
  {
    q: "How do you ensure security and compliance (HIPAA, SOC2)?",
    a: "We implement enterprise-grade security protocols including end-to-end encryption, role-based access control, and comprehensive audit logging. Our solutions are HIPAA-compliant and SOC2-ready.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see initial results within 30-60 days. Our 90-day fast-track program delivers a fully integrated AI system with quick wins in month one, ROI guaranteed.",
  },
  {
    q: "Do you work with small businesses or just large enterprises?",
    a: "We work with businesses of all sizes—from startups to Fortune 500 companies. Our flexible engagement models scale with your needs and budget.",
  },
  {
    q: "What makes your agency different from other AI consultants?",
    a: "We combine 15+ years of leadership experience with deep technical expertise. We're not just consultants—we're builders. We design, develop, and deploy custom AI agents and automations that deliver measurable ROI.",
  },
];

// Graph data for scrollytelling section
const graphStages = [
  { month: "MONTH 3", title: "Follow-up runs itself", desc: "Lead routing and nurture sequences respond in seconds, not hours.", endLabel: "1 month" },
  { month: "MONTH 8", title: "Reporting builds itself", desc: "Pipeline, team output, and operational health, visible in real time.", endLabel: "5 months" },
  { month: "MONTH 12", title: "The gap compounds", desc: "The businesses that act now create distance their competitors can't close.", endLabel: "12 months" },
];

const graphBadges = [
  { at: 0.32, label: "Call booked", icon: Zap, top: "80%", left: "5%", color: "#1570EF" },
  { at: 0.44, label: "Lead routed in 14s", icon: Users, top: "60%", left: "21%", color: "#1570EF" },
  { at: 0.58, label: "Invoice paid", icon: CreditCard, top: "42%", left: "40%", color: "#1570EF" },
  { at: 0.72, label: "Report completed", icon: BarChart3, top: "24%", left: "58%", color: "#1570EF" },
  { at: 0.86, label: "Proposal drafted", icon: Sparkles, top: "8%", left: "76%", color: "#1570EF" },
];

// ============ HELPER FUNCTIONS ============

function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(rect.top <= 0 ? 1 : 0);
        return;
      }
      const p = -rect.top / total;
      setProgress(Math.min(1, Math.max(0, p)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, progress };
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function remap(v: number, inMin: number, inMax: number) {
  return clamp01((v - inMin) / (inMax - inMin));
}

// ============ NOTIFICATION STACK ============
function NotificationStack() {
  const [tick, setTick] = useState(0);
  const n = notifications.length;

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[230px] w-full overflow-hidden">
      {notifications.map((item, i) => {
        const pos = (tick - i + n * 100) % n;
        const visible = pos < 5;
        const Icon = item.icon;
        const translateY = pos * 56;
        const scale = 1 - pos * 0.02;
        const opacity = visible ? 1 - pos * 0.22 : 0;

        return (
          <div
            key={i}
            className="absolute inset-x-0 flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.15)]"
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              opacity: opacity,
              zIndex: n - pos,
              transition: "transform 0.9s cubic-bezier(.22,.61,.36,1), opacity 0.9s cubic-bezier(.22,.61,.36,1)",
              top: 0,
              position: "absolute",
            }}
          >
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${item.color}1A` }}>
              <Icon size={17} style={{ color: item.color }} />
              {pos === 0 && (
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-medium text-neutral-400">{item.app}</p>
              <p className="truncate text-[13.5px] font-semibold text-neutral-900">{item.text}</p>
            </div>
            <span className="shrink-0 text-[11px] text-neutral-400">{item.time}</span>
          </div>
        );
      })}
    </div>
  );
}

// ============ GROWTH GRAPH ============
function GrowthGraphScroll({ progress, endLabel }: { progress: number; endLabel: string }) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [tip, setTip] = useState({ x: 540, y: 26 });

  const startX = 20;
  const baseY = 210;
  const topY = 26;
  const endX = 540;
  const d = `M${startX},${baseY} C${startX + (endX - startX) * 0.35},${baseY - 8} ${startX + (endX - startX) * 0.7},${baseY - (baseY - topY) * 0.55} ${endX},${topY}`;

  const drawProgress = remap(progress, 0.02, 0.98);

  useEffect(() => {
    const node = pathRef.current;
    if (!node) return;
    const length = node.getTotalLength();
    const point = node.getPointAtLength(length * drawProgress);
    setTip({ x: point.x, y: point.y });
  }, [drawProgress]);

  const showGap = progress > 0.75;
  const gapOpacity = remap(progress, 0.75, 0.9);

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.18)] sm:p-8">
      <div className="mb-6 flex items-center gap-6 text-[13px] font-medium text-neutral-500">
        <span className="flex items-center gap-2">
          <span className="h-[2px] w-5 rounded-full bg-[#1570EF]" /> Automated
        </span>
        <span className="flex items-center gap-2">
          <span className="h-[2px] w-5 rounded-full border-t-2 border-dashed border-neutral-300" /> Manual
        </span>
      </div>

      <div className="relative h-[260px] w-full">
        <svg viewBox="0 0 600 240" className="h-full w-full overflow-visible" preserveAspectRatio="none">
          {[60, 110, 160].map((y) => (
            <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#EDEDF0" strokeWidth="1" />
          ))}

          <line x1={startX} y1={218} x2={580} y2={200} stroke="#D4D4D8" strokeWidth="2" strokeDasharray="6 6" opacity={remap(progress, 0, 0.15)} />

          <path ref={pathRef} d={d} fill="none" stroke="#1570EF" strokeWidth="3" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - drawProgress} />

          <circle cx={tip.x} cy={tip.y} r={5} fill="#1570EF" opacity={progress > 0.03 ? 1 : 0} />

          {showGap && (
            <g opacity={gapOpacity}>
              <line x1="585" y1="26" x2="585" y2="204" stroke="#1570EF" strokeWidth="1.5" />
              <line x1="578" y1="26" x2="592" y2="26" stroke="#1570EF" strokeWidth="1.5" />
              <line x1="578" y1="204" x2="592" y2="204" stroke="#1570EF" strokeWidth="1.5" />
            </g>
          )}
        </svg>

        {showGap && (
          <div className="absolute right-0 top-1/3 text-right text-[11px] font-semibold uppercase leading-tight text-[#1570EF]" style={{ opacity: gapOpacity }}>
            the gap
            <span className="block text-neutral-400">compounds</span>
          </div>
        )}

        {graphBadges.map((b, i) => {
          const Icon = b.icon;
          const localOpacity = remap(progress, b.at, b.at + 0.06);
          return (
            <div
              key={i}
              className="absolute flex items-center gap-1.5 whitespace-nowrap rounded-full border border-black/5 bg-white px-2.5 py-1.5 text-[11.5px] font-semibold text-neutral-700 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.25)]"
              style={{
                top: b.top,
                left: b.left,
                opacity: localOpacity,
                transform: `translateY(${8 * (1 - localOpacity)}px)`,
              }}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: `${b.color}1A` }}>
                <Icon size={11} style={{ color: b.color }} />
              </span>
              {b.label}
            </div>
          );
        })}

        <div className="absolute inset-x-0 bottom-0 flex justify-between text-[11px] font-medium text-neutral-400">
          <span>Now</span>
          <span>{endLabel}</span>
        </div>
      </div>

      <p className="mt-6 text-center text-[13px] font-bold uppercase tracking-tight text-[#1570EF]">
        We help you close the gap, starting with a single audit
      </p>
    </div>
  );
}

// ============ SHIFT SECTION ============
function ShiftSection() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const stageCount = graphStages.length;
  const rawStage = progress * stageCount;
  const stageIndex = Math.min(stageCount - 1, Math.floor(rawStage));
  const current = graphStages[stageIndex];

  return (
    <section ref={ref} className="relative" style={{ height: `${stageCount * 100}vh` }}>
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>The Shift</Eyebrow>
            <h2 className="text-[34px] font-extrabold leading-[1.12] tracking-tight text-neutral-950 sm:text-[40px]">
              The Next Era of Business Will Be Won by <GradientWord>Automation Maturity</GradientWord>
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-neutral-500">
              Companies that build automated infrastructure today will compound their advantage every month. The rest will wonder what happened.
            </p>

            <div className="mt-10 max-w-sm border-t border-neutral-200 pt-6" key={stageIndex}>
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#1570EF]" style={{ animation: "fadeIn 0.5s ease" }}>
                {current.month}
              </p>
              <h3 className="mt-2 text-[19px] font-bold text-neutral-950" style={{ animation: "fadeIn 0.5s ease" }}>
                {current.title}
              </h3>
              <p className="mt-1.5 text-[14.5px] text-neutral-500" style={{ animation: "fadeIn 0.5s ease" }}>
                {current.desc}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {graphStages.map((_, i) => (
                <span
                  key={i}
                  className="h-1 flex-1 max-w-[40px] rounded-full bg-neutral-200"
                  style={{
                    background: progress >= (i + 1) / stageCount ? "#1570EF" : progress > i / stageCount ? `linear-gradient(90deg, #1570EF ${((progress - i / stageCount) / (1 / stageCount)) * 100}%, #e5e5e5 0)` : "#e5e5e5",
                    transition: "background 0.1s linear",
                  }}
                />
              ))}
            </div>
          </div>

          <GrowthGraphScroll progress={progress} endLabel={current.endLabel} />
        </div>
      </div>
    </section>
  );
}


// ============ MAIN EXPORT ============
export default function AiAutomationLandingPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-body)]">
      <ScrollbarStyles />
      <Preloader />
      <main id="main-content">
        {/* ========== HERO ========== */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image
              src="/automayionherobg.png"
              alt="AI Automation Agency Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/60" />
          </div>

          <div className="relative text-center max-w-[1200px] px-6 text-white mt-20 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg mb-8 md:mb-10"
            >
              <Sparkles className="w-4 h-4 text-[#1570EF]" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">AI Automation Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={TYPOGRAPHY.h1 + " mb-6 md:mb-8"}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-[#1570EF] to-gray-900">The #1 AI & Automation</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1570EF] to-blue-600">Agency</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={TYPOGRAPHY.bodyLarge + " text-gray-600 max-w-4xl mx-auto mb-8 md:mb-12 px-4"}
            >
              We combine AI & Automation to build incredibly efficient systems that replace manual work giving your business massive gains in speed, quality, bandwidth, and customer experience.
              <span className="block mt-4 font-semibold text-[#1570EF]">Fully custom. Done-for-you. ROI guaranteed.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            >
              <Link href="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-8 py-4 bg-[#1570EF] text-white font-semibold rounded-xl text-lg shadow-lg hover:bg-[#0A5BD0] transition-all flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Free Strategy Call
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1570EF]">50,000+</div>
                <div className="text-sm text-gray-300">Hours of manual work replaced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1570EF]">1,200%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1570EF]">100+</div>
                <div className="text-sm text-gray-300">Businesses scaled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1570EF]">30-60</div>
                <div className="text-sm text-gray-300">Days to first results</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-lg text-gray-300 italic border-t border-white/20 pt-8"
            >
              "A one-person billion-dollar company will happen!" – Sam Altman, CEO of OpenAI
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="overflow-hidden w-full relative mt-16 px-4"
          >
            <p className="text-center text-gray-300 mb-4">Trusted by industry leaders</p>
            <div className="flex gap-10 whitespace-nowrap animate-marquee">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="w-32 h-16 flex items-center justify-center flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                  <Image
                    src={logo}
                    alt={`Company logo ${index + 1}`}
                    width={128}
                    height={64}
                    className="object-contain w-full h-full opacity-70 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <style jsx>{`
            .animate-marquee { display: flex; animation: marquee 30s linear infinite; }
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            @media (max-width: 768px) { .animate-marquee { animation-duration: 25s; } }
            @media (max-width: 480px) { .animate-marquee { animation-duration: 20s; } }
          `}</style>
        </section>

        {/* ========== SHIFT / SCROLLYTELLING ========== */}
        <ShiftSection />

        {/* ========== AUDIENCE / PAIN POINTS ========== */}
        <section className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <Eyebrow><span className="mx-auto flex items-center gap-3 justify-center w-full"><span className="h-px w-6 bg-[#1570EF]" /> Who this is for <span className="h-px w-6 bg-[#1570EF]" /></span></Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-[40px]">Built for Established Businesses Ready to Scale</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-neutral-500">
                We work with companies generating $1M-$20M in revenue who've outgrown duct-taped systems and are ready for automation that actually holds up.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 divide-y divide-black/5 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  { value: "$1M–$20M", label: "REVENUE RANGE" },
                  { value: "5–100", label: "TEAM SIZE" },
                  { value: "3–6 months", label: "TYPICAL ENGAGEMENT" },
                ].map((s) => (
                  <div key={s.label} className="px-8 py-8">
                    <p className="text-[26px] font-extrabold tracking-tight text-neutral-950">{s.value}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-neutral-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-16 text-[12px] font-bold uppercase tracking-widest text-neutral-400">Sound familiar?</p>
              <p className="mx-auto mt-3 max-w-xl text-[15px] text-neutral-500">These are the patterns we see in every business that's plateaued, and they're the first things we fix.</p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mx-auto mt-10 max-w-3xl divide-y divide-black/5 rounded-3xl border border-black/5 bg-white text-left shadow-sm">
                {painPoints.map((p, i) => (
                  <div key={p} className="flex items-start gap-4 px-7 py-5">
                    <span className="mt-0.5 text-[13px] font-bold text-neutral-300">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1570EF]" />
                    <p className="text-[15px] text-neutral-700">{p}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== AGENTIC AI ========== */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-[#1570EF]/5 to-white" id="agenticai">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <Eyebrow><span className="mx-auto flex items-center gap-3 justify-center w-full"><span className="h-px w-6 bg-[#1570EF]" /> AGENTIC AI <span className="h-px w-6 bg-[#1570EF]" /></span></Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Make Your Workflow Automations <span className="text-[#1570EF]">Self-Driving</span></h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Build intelligent agents that think, plan, and act autonomously—collaborating with robots, humans, and other agents.</p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center"><span className="text-red-600 font-bold text-sm">RPA</span></div>
                  <h3 className="text-2xl font-bold text-gray-900">Traditional RPA</h3>
                </div>
                <p className="text-gray-600 mb-6">Rigid and fragile, like driving manually to a destination using printed directions. If you miss a turn or make an error, everything quickly breaks.</p>
                <ul className="space-y-3">
                  {["Rule-based only", "Breaks when UI changes", "No decision making", "Requires constant maintenance"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-[#1570EF] shadow-xl relative">
                <div className="absolute -top-3 left-8 px-3 py-1 bg-[#1570EF] text-white text-sm font-semibold rounded-full">AGENTIC AI</div>
                <div className="flex items-center gap-3 mb-6 mt-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center"><Rocket className="w-6 h-6 text-green-600" /></div>
                  <h3 className="text-2xl font-bold text-gray-900">Agentic AI</h3>
                </div>
                <p className="text-gray-600 mb-6">Like self-driving cars that understand your goal and the nuance it takes to get there. They course-correct, identify shortcuts, and get smarter over time.</p>
                <ul className="space-y-3">
                  {["Understands context & goals", "Adapts to changes automatically", "Makes intelligent decisions", "Learns and improves over time"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agenticFeatures.map((feature, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF] hover:shadow-xl transition-all group">
                    <div className={`w-14 h-14 rounded-xl bg-${feature.color}-100 flex items-center justify-center text-${feature.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FEATURES ========== */}
        <section id="services" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <h2 className="mx-auto max-w-2xl text-[32px] font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-[40px]">
                We Build AI Automation Infrastructure That Runs Your Business
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] text-neutral-500">Everything we build is designed to run without you. That's the point.</p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) * 80}>
                  <div className="h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:shadow-md group">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1570EF]/10 group-hover:bg-[#1570EF] transition-colors">
                      <f.icon size={19} className="text-[#1570EF] group-hover:text-white transition-colors" />
                    </span>
                    <h3 className="text-[16.5px] font-bold text-neutral-950">{f.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-500">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SERVICES ========== */}
        <section className="py-20 px-4 sm:px-6 bg-gray-50" id="businessprocessautomation">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <Eyebrow><span className="mx-auto flex items-center gap-3 justify-center w-full"><span className="h-px w-6 bg-[#1570EF]" /> SERVICES <span className="h-px w-6 bg-[#1570EF]" /></span></Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI & Automation Services <span className="text-[#1570EF]">Built for Scale</span></h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">From strategy to implementation—practical AI and automation solutions that drive measurable results</p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF] hover:shadow-xl transition-all group">
                    <div className={`w-14 h-14 rounded-xl bg-${service.color}-100 flex items-center justify-center text-${service.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.category}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 4).map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="text-[#1570EF] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIAL ========== */}
        <div className="flex max-w-7xl lg:flex-nowrap flex-wrap mx-auto py-20 px-4 sm:px-6">
          <Reveal delay={80}>
            <h2 className="max-w-[600px] text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our results speak for themselves <span className="text-[#1570EF]">our clients say it even better</span></h2>
          </Reveal>
          <Reveal>
            <div className="max-w-[800px] w-full bg-[#EEF7FE] p-5 rounded-xl mx-auto mt-5 md:mt-28">
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-gray-700 leading-relaxed mb-6">
                "Working with Upscale Alliance has been a great experience. A mate recommended Abdullah after they helped automate his business, and I'm glad I took the advice. We operate across multiple locations, and I wasn't sure where to start. Abdullah took the time to understand how our business worked, walked us through everything, and mapped out a clear automation strategy that actually made sense for us. They also built an AI agent that now handles customer enquiries automatically, saving our team hours every week. The whole process was straightforward, and the results have exceeded our expectations."
              </p>
              <div className="flex items-center gap-3">
                <div className="">
                  <Image
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
                    src={"/mark.jpg"}
                    alt={"Ali Elzein"}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="text-[14px] sm:text-[16px] font-semibold text-gray-900">
                    Mark Morrison
                  </p>
                  <p className="text-[12px] sm:text-[13px] text-gray-500">
                    Founder of Agency HQ
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ========== USE CASES ========== */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <Eyebrow><span className="mx-auto flex items-center gap-3 justify-center w-full"><span className="h-px w-6 bg-[#1570EF]" /> ENDLESS POSSIBILITIES <span className="h-px w-6 bg-[#1570EF]" /></span></Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Endless Use Cases of <span className="text-[#1570EF]">AI and Automation</span></h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our clients make their employees <span className="font-semibold text-[#1570EF]">10X more efficient</span> by taking tedious, repetitive tasks off their plate.</p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCasesList.map((useCase, idx) => (
                <Reveal key={useCase.id} delay={idx * 100}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#1570EF] hover:shadow-xl transition-all duration-300 group">
                    <div className="mb-6 w-16 h-16 relative">
                      <Image src={useCase.image} alt={useCase.title} width={64} height={64} className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1570EF] transition-colors">{useCase.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PROCESS ========== */}
        <section className="py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <Eyebrow><span className="mx-auto flex items-center gap-3 justify-center w-full"><span className="h-px w-6 bg-[#1570EF]" /> OUR PROCESS <span className="h-px w-6 bg-[#1570EF]" /></span></Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Our <span className="text-[#1570EF]">AI and Automation</span> Agency Works</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">We get under the hood of your business and find opportunities to replace the most manual, repetitive bottlenecks with AI-powered, automated processes.</p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <Reveal key={step.step} delay={idx * 100}>
                  <div className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#1570EF]/20 hover:shadow-lg transition-all group">
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

        {/* ========== LEADING COMPANIES ========== */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <Eyebrow><span className="mx-auto flex items-center gap-3 justify-center w-full"><span className="h-px w-6 bg-[#1570EF]" /> TRUSTED PARTNERS <span className="h-px w-6 bg-[#1570EF]" /></span></Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Leading AI Companies <br /><span className="text-[#1570EF]">We Work With</span></h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
              {leadingCompanies.map((company, idx) => (
                <Reveal key={company.id} delay={idx * 50}>
                  <div className="flex items-center justify-center group">
                    <div className="w-24 h-16 flex items-center justify-center">
                      <Image src={company.logo} alt={company.name} width={96} height={48} className="object-contain w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" title={company.name} loading="lazy" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CONNECT APPS ========== */}
        <section className="py-20 px-4 sm:px-6 bg-gray-50" id="systemsintegration">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Reveal>
                  <Eyebrow>INTEGRATIONS</Eyebrow>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We connect to <br /><span className="text-[#1570EF]">all your apps</span></h2>
                  <p className="text-xl text-gray-600 mb-8">Plus thousands more through APIs, custom code and web hooks.</p>
                  <Link href="/contact-us">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer px-8 py-4 bg-[#1570EF] text-white font-semibold rounded-xl text-lg shadow-lg hover:bg-[#0A5BD0] transition-all inline-flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none">
                      <Calendar className="w-5 h-5" /> Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <p className="text-sm text-gray-400 mt-4">*No obligation. 30-minute strategy call.</p>
                </Reveal>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
                {appImages.map((app, idx) => (
                  <Reveal key={app.id} delay={idx * 20}>
                    <div className="p-2 flex items-center justify-center group hover:scale-105 transition-transform">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Image src={app.logo} alt={app.name} width={48} height={48} className="object-contain w-full h-full" title={app.name} loading="lazy" />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== INDUSTRIES WE WORK WITH ========== */}
        <section className="py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Reveal>
                <Eyebrow><span className="mx-auto flex items-center gap-3 justify-center w-full"><span className="h-px w-6 bg-[#1570EF]" /> INDUSTRIES WE SERVE <span className="h-px w-6 bg-[#1570EF]" /></span></Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We Work With <span className="text-[#1570EF]">All Industries</span></h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">From healthcare to manufacturing, we've helped businesses across every sector automate their workflows and scale their operations.</p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industriesWeServe.map((industry, idx) => (
                <Reveal key={industry.id} delay={100 + idx * 50}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#1570EF] hover:shadow-xl transition-all duration-300 text-center group">
                    <div className={`w-16 h-16 ${industry.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {industry.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">{industry.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6"><span className="font-semibold text-gray-900">Don't see your industry?</span> We work with businesses of all types.</p>
              <Link href="/contact-us">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer px-8 py-4 bg-[#1570EF] text-white font-semibold rounded-xl text-lg shadow-lg hover:bg-[#0A5BD0] transition-all inline-flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none">
                  Talk to Us About Your Industry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section className="py-20 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="lg:sticky lg:top-24 lg:h-fit">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6">
                    <HelpCircle className="w-4 h-4 text-[#1570EF]" />
                    <span className="text-[#1570EF] font-medium text-sm">FAQ</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked <br /><span className="text-[#1570EF]">Questions</span></h2>
                  <p className="text-xl text-gray-600 mb-8">Everything you need to know about working with us. Can't find what you're looking for? Reach out directly.</p>
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Still have questions?</h3>
                    <p className="text-gray-600 text-sm mb-4">We're here to help. Book a free consultation or email us directly.</p>
                    <div className="flex gap-3 flex-wrap">
                      <Link href="/contact-us">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer px-4 py-2 bg-[#1570EF] text-white text-sm font-semibold rounded-lg hover:bg-[#0A5BD0] transition-all focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none">
                          Contact Us
                        </motion.button>
                      </Link>
                      <Link href="mailto:info@upscalealliance.com">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-all focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none">
                          Email Us
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <Reveal key={idx} delay={idx * 50}>
                    <div className="group">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:border-[#1570EF] transition-all focus-visible:ring-2 focus-visible:ring-[#1570EF] focus-visible:outline-none"
                        aria-expanded={expandedFaq === idx}
                        aria-controls={`faq-answer-${idx}`}
                      >
                        <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedFaq === idx ? "rotate-180 text-[#1570EF]" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {expandedFaq === idx && (
                          <motion.div
                            id={`faq-answer-${idx}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 bg-white border-x border-b border-gray-200 rounded-b-xl">
                              <p className="text-gray-600">{faq.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
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
              You've seen what's possible, so now…
            </p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Ready to automate your business?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
              Let's build the AI systems that will run your operations while you focus on growth.
            </p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/contact-us"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Start Your Automation Journey
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
      </main>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}