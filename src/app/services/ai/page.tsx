"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    Star,
    ChevronDown,
    Workflow,
    BarChart3,
    Bot,
    Database,
    Settings2,
    Target,
    FileText,
    Layers,
    RefreshCcw,
    Building2,
    Home as HomeIcon,
    HeartPulse,
    Wrench,
    MessageSquare,
    GraduationCap,
    Zap,
    Mail,
    CreditCard,
    FileSignature,
    Users,
    Receipt,
    Sparkles,
    Brain,
    Calendar,
    Phone,
    Clock,
    Award,
    TrendingUp,
    Rocket,
    Shield,
    Eye,
    Cpu,
    Network,
    Link as LinkIcon,
    Globe,
    XCircle,
    CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Shared hooks / helpers                                            */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.25) {
    const ref = useRef<T | null>(null);
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
            { threshold }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

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

function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const { ref, inView } = useInView<HTMLDivElement>(0.15);
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

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-4 flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-neutral-500">
            <span className="h-px w-6 bg-[#1570EF]" />
            {children}
        </div>
    );
}

function GradientWord({ children }: { children: React.ReactNode }) {
    return (
        <span className="bg-gradient-to-r from-[#1570EF] to-blue-400 bg-clip-text text-transparent">
            {children}
        </span>
    );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

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
];

const stats = [
    { value: "$1M–$20M", label: "REVENUE RANGE" },
    { value: "5–100", label: "TEAM SIZE" },
    { value: "3–6 months", label: "TYPICAL ENGAGEMENT" },
];

const industries = [
    { label: "Professional Services", icon: Building2 },
    { label: "Real Estate", icon: HomeIcon },
    { label: "Healthcare", icon: HeartPulse },
    { label: "Trades", icon: Wrench },
    { label: "Consulting", icon: MessageSquare },
    { label: "Coaches & Education", icon: GraduationCap },
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
        icon: Settings2,
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

const steps = [
    {
        num: "01",
        tag: "WEEK 1",
        icon: Brain,
        title: "Automation Audit",
        desc: "We map your operations, identify bottlenecks, and define the automation roadmap. You get a clear plan with ROI projections.",
        bullets: [
            "Workflow mapping and bottleneck analysis",
            "ROI projections for each automation",
            "Technology stack recommendations",
        ],
    },
    {
        num: "02",
        tag: "WEEKS 2–8",
        icon: Settings2,
        title: "Build & Implementation",
        desc: "We design, build, and deploy your custom automation systems. Everything is tested, documented, and connected to your existing stack.",
        bullets: [
            "Custom workflow automation builds",
            "CRM and data architecture setup",
            "AI agent development and training",
        ],
    },
    {
        num: "03",
        tag: "ONGOING",
        icon: Users,
        title: "Enablement & Scale",
        desc: "We train your team, hand over documentation, and provide ongoing support. Then we identify the next set of automations to compound results.",
        bullets: [
            "Team training and documentation",
            "Process handover and SOPs",
            "Ongoing monitoring and optimisation",
        ],
    },
];

const receiveList = [
    "Full automation map of your current operations",
    "Identified bottlenecks and wasted hours",
    "Custom automation roadmap (30/60/90-day)",
    "ROI projections for each recommended system",
    "Priority-ranked implementation plan",
];

const testimonials = [
    {
        title: "Implemented what I learned that weekend, saving hours of time",
        quote: "I recently did an AI workshop and was blown away by how much we learnt in just a day. It already feels like I'm finding ways to create the software that didn't exist for our agency.",
        name: "Daniel Marshall",
        role: "Financial Coach & Facilitator",
    },
    {
        title: "Blown away by how much we learnt in just a day",
        quote: "Our team recently undertook a full-day intensive and were blown away by how much we learnt in just a day. It already feels like I'm finding ways to create the software that didn't exist for our agency.",
        name: "Sam Sidney",
        role: "Founder, Milkbar Digital",
    },
    {
        title: "Walked out genuinely blown away by how much is actually possible",
        quote: "I did the AI workshop last week and walked out genuinely blown away by how much is actually possible. Everything is broken down so clearly.",
        name: "Sarah Jeavons",
        role: "Model, Actress & Winner of SAS Australia",
    },
    {
        title: "Changed the way I think about AI",
        quote: "I did a six and a half hour AI deep dive last week, and honestly it's changed the way I think about using AI in my business. I saw frameworks I hadn't seen anywhere else.",
        name: "Addison Forbes",
        role: "Founder of Paidfunnels.com & Meta Ads Expert",
    },
    {
        title: "Automated a process that eats 5 to 10 hours a week",
        quote: "The workshop was genuinely useful. No fluff, no theory for theory's sake. By the end of the day, I had automated a process that typically eats 5 to 10 hours a week.",
        name: "Chris Chan",
        role: "Exercise Scientist",
    },
    {
        title: "A system I can rely on daily",
        quote: "The team took the time to understand both my personal and professional needs and tailored the setup so it genuinely streamlined how I think, plan, and work.",
        name: "Sammi Culhane",
        role: "Mother",
    },
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

const graphStages = [
    {
        month: "MONTH 3",
        title: "Follow-up runs itself",
        desc: "Lead routing and nurture sequences respond in seconds, not hours.",
        endLabel: "1 month",
    },
    {
        month: "MONTH 8",
        title: "Reporting builds itself",
        desc: "Pipeline, team output, and operational health, visible in real time.",
        endLabel: "5 months",
    },
    {
        month: "MONTH 12",
        title: "The gap compounds",
        desc: "The businesses that act now create distance their competitors can't close.",
        endLabel: "12 months",
    },
];

const graphBadges = [
    { at: 0.32, label: "Call booked", icon: Zap, top: "80%", left: "5%", color: "#1570EF" },
    { at: 0.44, label: "Lead routed in 14s", icon: Users, top: "60%", left: "21%", color: "#1570EF" },
    { at: 0.58, label: "Invoice paid", icon: CreditCard, top: "42%", left: "40%", color: "#1570EF" },
    { at: 0.72, label: "Report completed", icon: BarChart3, top: "24%", left: "58%", color: "#1570EF" },
    { at: 0.86, label: "Proposal drafted", icon: Sparkles, top: "8%", left: "76%", color: "#1570EF" },
];

/* ------------------------------------------------------------------ */
/*  Notification stack (hero)                                         */
/* ------------------------------------------------------------------ */

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
                        <span
                            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: `${item.color}1A` }}
                        >
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

/* ------------------------------------------------------------------ */
/*  Growth Graph                                                       */
/* ------------------------------------------------------------------ */

function GrowthGraphScroll({ progress, endLabel }: { progress: number; endLabel: string }) {
    const pathRef = useRef<SVGPathElement | null>(null);
    const [tip, setTip] = useState({ x: 540, y: 26 });

    const startX = 20;
    const baseY = 210;
    const topY = 26;
    const endX = 540;
    const d = `M${startX},${baseY} C${startX + (endX - startX) * 0.35},${baseY - 8} ${startX + (endX - startX) * 0.7
        },${baseY - (baseY - topY) * 0.55} ${endX},${topY}`;

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

                    <line
                        x1={startX}
                        y1={218}
                        x2={580}
                        y2={200}
                        stroke="#D4D4D8"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        opacity={remap(progress, 0, 0.15)}
                    />

                    <path
                        ref={pathRef}
                        d={d}
                        fill="none"
                        stroke="#1570EF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        pathLength={1}
                        strokeDasharray={1}
                        strokeDashoffset={1 - drawProgress}
                    />

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
                    <div
                        className="absolute right-0 top-1/3 text-right text-[11px] font-semibold uppercase leading-tight text-[#1570EF]"
                        style={{ opacity: gapOpacity }}
                    >
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

/* ------------------------------------------------------------------ */
/*  Shift Section - Sticky Scrollytelling                              */
/* ------------------------------------------------------------------ */

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
                            Companies that build automated infrastructure today will compound their advantage every month. The
                            rest will wonder what happened.
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
                                        background:
                                            progress >= (i + 1) / stageCount
                                                ? "#1570EF"
                                                : progress > i / stageCount
                                                    ? `linear-gradient(90deg, #1570EF ${((progress - i / stageCount) / (1 / stageCount)) * 100
                                                    }%, #e5e5e5 0)`
                                                    : "#e5e5e5",
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

/* ================================================================== */
/*  Page Sections                                                     */
/* ================================================================== */

function Hero() {
    return (
        <section className="relative overflow-hidden px-6 pb-20 pt-10 lg:px-10 lg:pt-16">
            <div
                className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(21,112,239,0.18), transparent 70%)" }}
            />
            <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                <div>
                    <Reveal>
                        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[13px] font-semibold text-neutral-800 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#1570EF]" /> AI-Powered Automation
                        </span>
                    </Reveal>

                    <Reveal delay={80}>
                        <h1 className="text-[42px] font-extrabold leading-[1.05] tracking-tight text-neutral-950 sm:text-[54px] lg:text-[58px]">
                            Run Your Business{" "}
                            <span className="block">
                                <GradientWord>on Autopilot</GradientWord>
                                <sup className="ml-0.5 text-[16px] font-bold text-neutral-950">™</sup> with
                            </span>
                            AI Automation
                        </h1>
                    </Reveal>

                    <Reveal delay={160}>
                        <p className="mt-6 max-w-md text-[16.5px] leading-relaxed text-neutral-500">
                            We build AI automation systems that run your marketing, sales, and operations, so your team can focus
                            on work that actually moves the needle.
                        </p>
                    </Reveal>

                    <Reveal delay={220}>
                        <ul className="mt-6 space-y-3">
                            {[
                                "Fewer manual tasks, more strategic output",
                                "CRM, email, lead routing: all connected",
                                "Custom-built for your workflows, not templates",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2.5 text-[14.5px] text-neutral-600">
                                    <Check size={16} className="shrink-0 text-[#1570EF]" strokeWidth={3} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={280}>
                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Link
                                href="/contact-us"
                                className="flex items-center gap-2 rounded-full bg-[#1570EF] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#0A5BD0]"
                            >
                                Start your audit <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="#services"
                                className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-800 transition hover:bg-neutral-50"
                            >
                                View our services
                            </Link>
                        </div>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay={200}>
                        <div className="relative mx-auto max-w-md">
                            <NotificationStack />
                            <p className="mt-8 text-center text-[12px] font-bold uppercase tracking-widest text-neutral-400">
                                Your systems, working while you don't
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>

            <Reveal delay={120}>
                <div className="mx-auto mt-20 max-w-7xl">
                    <p className="mb-8 text-center text-[12px] font-bold uppercase tracking-widest text-neutral-400">
                        Trusted by industry leaders
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
                        {logos.map((logo, index) => (
                            <div key={index} className="w-24 h-12 relative opacity-60">
                                <Image
                                    src={logo}
                                    alt={`Company logo ${index + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

function AudienceSection() {
    return (
        <section className="px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-5xl text-center">
                <Reveal>
                    <Eyebrow>
                        <span className="mx-auto flex items-center gap-3 justify-center w-full">
                            <span className="h-px w-6 bg-[#1570EF]" /> Who this is for <span className="h-px w-6 bg-[#1570EF]" />
                        </span>
                    </Eyebrow>
                </Reveal>
                <Reveal delay={80}>
                    <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-[40px]">
                        Built for Established Businesses Ready to Scale
                    </h2>
                </Reveal>
                <Reveal delay={140}>
                    <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-neutral-500">
                        We work with companies generating $1M-$20M in revenue who've outgrown duct-taped systems and are
                        ready for automation that actually holds up.
                    </p>
                </Reveal>

                <Reveal delay={200}>
                    <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 divide-y divide-black/5 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {stats.map((s) => (
                            <div key={s.label} className="px-8 py-8">
                                <p className="text-[26px] font-extrabold tracking-tight text-neutral-950">{s.value}</p>
                                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-neutral-400">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={240}>
                    <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
                        {industries.map((ind) => (
                            <span
                                key={ind.label}
                                className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-neutral-700 shadow-sm"
                            >
                                <ind.icon size={15} className="text-[#1570EF]" />
                                {ind.label}
                            </span>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={260}>
                    <p className="mt-16 text-[12px] font-bold uppercase tracking-widest text-neutral-400">Sound familiar?</p>
                    <p className="mx-auto mt-3 max-w-xl text-[15px] text-neutral-500">
                        These are the patterns we see in every business that's plateaued, and they're the first things
                        we fix.
                    </p>
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

                <Reveal delay={340}>
                    <p className="mt-12 text-[22px] font-extrabold tracking-tight text-neutral-950">We remove that cap</p>
                </Reveal>
            </div>
        </section>
    );
}

function FeaturesSection() {
    return (
        <section id="services" className="px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <Reveal className="text-center">
                    <h2 className="mx-auto max-w-2xl text-[32px] font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-[40px]">
                        We Build AI Automation Infrastructure That Runs Your Business
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-[16px] text-neutral-500">
                        Everything we build is designed to run without you. That's the point.
                    </p>
                </Reveal>

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f, i) => (
                        <Reveal key={f.title} delay={(i % 3) * 80}>
                            <div className="h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:shadow-md">
                                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1570EF]/10">
                                    <f.icon size={19} className="text-[#1570EF]" />
                                </span>
                                <h3 className="text-[16.5px] font-bold text-neutral-950">{f.title}</h3>
                                <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-500">{f.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AgenticAISection() {
    return (
        <section className="px-6 py-24 bg-gradient-to-br from-[#1570EF]/5 to-white lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <Reveal>
                        <Eyebrow>
                            <span className="mx-auto flex items-center gap-3 justify-center w-full">
                                <span className="h-px w-6 bg-[#1570EF]" /> AGENTIC AI <span className="h-px w-6 bg-[#1570EF]" />
                            </span>
                        </Eyebrow>
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-[40px]">
                            Make Your Workflow Automations{" "}
                            <GradientWord>Self-Driving</GradientWord>
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className="mx-auto mt-4 max-w-2xl text-[16px] text-neutral-500">
                            Build intelligent agents that think, plan, and act autonomously—collaborating with robots, humans, and other agents.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                <span className="text-red-600 font-bold text-sm">RPA</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Traditional RPA</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Rigid and fragile, like driving manually to a destination using printed directions. If you miss a turn or make an error, everything quickly breaks.
                        </p>
                        <ul className="space-y-3">
                            {["Rule-based only", "Breaks when UI changes", "No decision making", "Requires constant maintenance"].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-[#1570EF] shadow-xl relative">
                        <div className="absolute -top-3 left-8 px-3 py-1 bg-[#1570EF] text-white text-sm font-semibold rounded-full">
                            AGENTIC AI
                        </div>
                        <div className="flex items-center gap-3 mb-6 mt-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <Rocket className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Agentic AI</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Like self-driving cars that understand your goal and the nuance it takes to get there. They course-correct, identify shortcuts, and get smarter over time.
                        </p>
                        <ul className="space-y-3">
                            {["Understands context & goals", "Adapts to changes automatically", "Makes intelligent decisions", "Learns and improves over time"].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {agenticFeatures.map((feature, idx) => (
                        <Reveal key={idx} delay={idx * 100}>
                            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF] hover:shadow-xl transition-all">
                                <div className={`w-14 h-14 rounded-xl bg-${feature.color}-100 flex items-center justify-center text-${feature.color}-600 mb-4`}>
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
    );
}

function ProcessSection() {
    return (
        <section className="px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <Reveal className="text-center">
                    <Eyebrow>
                        <span className="mx-auto flex w-full items-center justify-center gap-3">
                            <span className="h-px w-6 bg-[#1570EF]" /> How we deliver <span className="h-px w-6 bg-[#1570EF]" />
                        </span>
                    </Eyebrow>
                    <h2 className="mx-auto max-w-2xl text-[32px] font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-[40px]">
                        From Audit to Autopilot in Weeks, Not Months
                    </h2>
                </Reveal>

                <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="pointer-events-none absolute left-0 right-0 top-[-2.5rem] hidden h-px bg-neutral-200 md:block" />
                    {steps.map((s, i) => (
                        <Reveal key={s.num} delay={i * 100}>
                            <div className="h-full rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <span className="text-[30px] font-extrabold tracking-tight text-[#1570EF]">{s.num}</span>
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">{s.tag}</span>
                                </div>
                                <span className="mt-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1570EF]/10">
                                    <s.icon size={17} className="text-[#1570EF]" />
                                </span>
                                <h3 className="mt-4 text-[19px] font-bold text-neutral-950">{s.title}</h3>
                                <p className="mt-2 text-[14.5px] leading-relaxed text-neutral-500">{s.desc}</p>
                                <ul className="mt-5 space-y-2.5 border-t border-neutral-100 pt-5">
                                    {s.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2 text-[13.5px] text-neutral-600">
                                            <Check size={14} className="mt-0.5 shrink-0 text-[#1570EF]" strokeWidth={3} />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={200} className="mt-14 text-center">
                    <Link
                        href="#services"
                        className="inline-flex items-center gap-2 rounded-full bg-[#1570EF] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#0A5BD0]"
                    >
                        View our services <ArrowRight size={16} />
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}

function AuditCTASection() {
    return (
        <section id="audit" className="relative overflow-hidden bg-neutral-950 px-6 py-24 lg:px-10">
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(21,112,239,0.5), transparent 70%)" }}
            />
            <div className="relative mx-auto max-w-6xl">
                <Reveal className="text-center">
                    <Eyebrow>
                        <span className="mx-auto flex w-full items-center justify-center gap-3 !text-neutral-400">
                            <span className="h-px w-6 bg-[#1570EF]" /> The offer <span className="h-px w-6 bg-[#1570EF]" />
                        </span>
                    </Eyebrow>
                    <h2 className="mx-auto max-w-xl text-[32px] font-extrabold leading-tight tracking-tight text-white sm:text-[40px]">
                        Start with an <GradientWord>Automation Audit</GradientWord>
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-[15.5px] text-neutral-400">
                        Before we build anything, we map your entire operation. You'll walk away with a clear picture of
                        what to automate, what it'll save, and exactly how to do it.
                    </p>
                </Reveal>

                <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
                    <Reveal delay={100}>
                        <p className="mb-5 text-[15px] font-bold text-white">What you'll receive:</p>
                        <ul className="space-y-4">
                            {receiveList.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-[14.5px] text-neutral-300">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1570EF]">
                                        <Check size={12} className="text-white" strokeWidth={3} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={180}>
                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
                            <p className="text-[15px] leading-relaxed text-neutral-300">
                                We go deep with every client. No assembly-line approach. Start with an audit and see exactly what
                                automation could do for your business.
                            </p>
                            <Link
                                href="/contact-us"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1570EF] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#0A5BD0]"
                            >
                                Start your audit <ArrowRight size={16} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? testimonials : testimonials.slice(0, 6);

    return (
        <section className="px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <Reveal className="text-center">
                    <Eyebrow>
                        <span className="mx-auto flex w-full items-center justify-center gap-3">
                            <span className="h-px w-6 bg-[#1570EF]" /> What clients say <span className="h-px w-6 bg-[#1570EF]" />
                        </span>
                    </Eyebrow>
                    <h2 className="text-[32px] font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-[40px]">
                        Real Results from Real Businesses
                    </h2>
                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[14px] text-neutral-500">
                        <span className="flex items-center gap-0.5 text-[#1570EF]">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                            ))}
                        </span>
                        29 five-star reviews · Brisbane, Sydney, Melbourne, Adelaide and New York City
                    </div>
                </Reveal>

                <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {visible.map((t, i) => (
                        <Reveal key={t.name} delay={(i % 3) * 70}>
                            <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                                <span className="mb-3 flex items-center gap-0.5 text-[#1570EF]">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <Star key={j} size={13} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </span>
                                <h3 className="text-[16px] font-bold leading-snug text-neutral-950">{t.title}</h3>
                                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-neutral-500">&quot;{t.quote}&quot;</p>
                                <div className="mt-6 flex items-center gap-3">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-[13px] font-bold text-neutral-500">
                                        {t.name.split(" ").map((n) => n[0]).join("")}
                                    </span>
                                    <div>
                                        <p className="text-[13.5px] font-semibold text-neutral-900">{t.name}</p>
                                        <p className="text-[12px] text-neutral-400">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {!expanded && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setExpanded(true)}
                            className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-800 transition hover:bg-neutral-50"
                        >
                            Show all reviews
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

function FinalCTASection() {
    return (
        <section className="relative overflow-hidden px-6 py-28 text-center lg:px-10">
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(21,112,239,0.08), transparent 65%)" }}
            />
            <div className="relative mx-auto max-w-2xl">
                <Reveal>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1570EF]/20 rounded-full border border-[#1570EF]/30 mb-6">
                        <Rocket className="w-5 h-5 text-[#1570EF]" />
                        <span className="text-sm font-semibold text-[#1570EF] tracking-wide">READY TO TRANSFORM?</span>
                    </div>
                </Reveal>
                <Reveal delay={80}>
                    <h2 className="text-[34px] font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-[44px]">
                        The Future Rewards the <GradientWord>Decisive</GradientWord>
                    </h2>
                </Reveal>
                <Reveal delay={140}>
                    <p className="mt-5 text-[16px] text-neutral-500">
                        Ready to see what AI automation could do for your business? Let's map it out together.
                    </p>
                </Reveal>
                <Reveal delay={200}>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center gap-2 rounded-full bg-[#1570EF] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#0A5BD0]"
                        >
                            Start your audit <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 text-[15px] font-semibold text-neutral-800 transition hover:bg-neutral-50"
                        >
                            View services <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

export default function AiAutomationLandingPage() {
    return (
        <main className="bg-[#F4F4F6] antialiased">
            <Hero />
            <ShiftSection />
            <AudienceSection />
            <FeaturesSection />
            <AgenticAISection />
            <ProcessSection />
            <AuditCTASection />
            <TestimonialsSection />
            <FinalCTASection />

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </main>
    );
}