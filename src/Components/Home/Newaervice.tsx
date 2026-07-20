"use client";

import { useRef, useState } from "react";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";

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
    description: "Automate to dominate. We deploy self-learning AI agents that run your operations 24/7 so you scale without scaling headcount.",
    href: "/services/ai-automation",
    cardFrom: "#3B82F6",
    cardTo: "#2563EB",
    cardText: "#FFFFFF",
  },
  {
    number: "02",
    title: "Web Design & Dev",
    description: "Conversion-first engineering meets pixel-perfect design. We build sites that load fast, look sharp, and turn visitors into revenue.",
    href: "/services/website-development",
    cardFrom: "#4F46E5",
    cardTo: "#4338CA",
    cardText: "#FFFFFF",
  },
  {
    number: "03",
    title: "Link Building",
    description: "Digital dominance starts with authority. We secure high-impact backlinks from industry leaders not directories, but real influence.",
    href: "/services/link-building",
    cardFrom: "#6366F1",
    cardTo: "#4F46E5",
    cardText: "#FFFFFF",
  },
  {
    number: "04",
    title: "Content Writing",
    description: "Words that persuade, rank, and convert. Every piece is strategically crafted to build authority and drive action.",
    href: "/services/content-writing",
    cardFrom: "#60A5FA",
    cardTo: "#3B82F6",
    cardText: "#FFFFFF",
  },
  {
    number: "05",
    title: "Social Media Marketing",
    description: "Stop posting. Start commanding. We turn your brand into a movement with scroll-stopping strategy and culture-driven content.",
    href: "/services/paid-advertising",
    cardFrom: "#818CF8",
    cardTo: "#6366F1",
    cardText: "#FFFFFF",
  },
  {
    number: "06",
    title: "SEO",
    description: "Rank higher. Get found. We optimize for what actually matters bringing you qualified traffic, not just noise.",
    href: "/services/seo",
    cardFrom: "#4F46E5",
    cardTo: "#4338CA",
    cardText: "#FFFFFF",
  },
  {
    number: "07",
    title: "GEO",
    description: "Be the answer, not just a result. We optimize your brand for AI search engines so when users ask, you're the one they get.",
    href: "/services/generative-engine-optimization",
    cardFrom: "#4F46E5",
    cardTo: "#4338CA",
    cardText: "#FFFFFF",
  },
  {
    number: "08",
    title: "Video Editing",
    description: "Transform raw footage into compelling visual stories. We craft engaging videos that capture attention, communicate your message, and drive action.",
    href: "/services/video-editing",
    cardFrom: "#4F46E5",
    cardTo: "#4338CA",
    cardText: "#FFFFFF",
  },
  {
    number: "09",
    title: "Revenue Cycle Management",
    description: "Cash flow is king. We tighten your revenue loop from lead to payment so your business runs like a well-oiled machine.",
    href: "/services/revenue-cycle-management",
    cardFrom: "#4F46E5",
    cardTo: "#4338CA",
    cardText: "#FFFFFF",
  },
];

const CARD_WIDTH = 240;
const CARD_HEIGHT = 170;

export default function NewServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cardPos, setCardPos] = useState({ left: 0, top: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const container = containerRef.current;
    if (!container) return;

    // capture the values now (React pools/reuses the event object)
    const clientX = e.clientX;
    const clientY = e.clientY;

    // throttle to one update per animation frame so this stays cheap
    // even if the rest of the page (carousels, motion effects, etc.)
    // is doing heavy work at the same time
    if (rafId.current !== null) return;

    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      setCardPos({ left: x - CARD_WIDTH / 2, top: y - CARD_HEIGHT / 2 });
    });
  }

  const active = activeIndex !== null ? services[activeIndex] : null;

  return (
    <section
      className={`${display.variable} ${body.variable} ${mono.variable} bg-gradient-to-r from-blue-50 to-cyan-50 py-16 sm:py-20 lg:py-24 w-full overflow-x-hidden`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6 mb-8 sm:mb-10">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.25em] uppercase text-blue-600 mb-4">
            ( Services )
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-gray-900">
            Full-stack
            <br />
            digital growth
          </h2>
        </div>

        <a
          href="#all-services"
          className="hidden sm:inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm text-gray-700 border border-gray-300 rounded-full px-5 py-3 hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap"
        >
          All services
        </a>
      </div>

      <div
        ref={containerRef}
        className="relative border-t border-gray-200 w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* card now animates via transform (GPU-composited) instead of
            left/top (layout-triggering) — this is what keeps it smooth
            even when other heavy sections (carousels, motion, etc.) are
            mounted on the same page */}
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
            transition:
              "transform 380ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out",
            backgroundImage: active
              ? `radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(135deg, ${active.cardFrom} 0%, ${active.cardTo} 100%)`
              : undefined,
            backgroundSize: "14px 14px, 100% 100%",
            padding: "20px",
            zIndex: 20,
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <span
              className="font-[family-name:var(--font-mono)] text-xs tracking-widest"
              style={{ color: active?.cardText }}
            >
              {active ? `${active.number} / SERVICE` : ""}
            </span>
            <span
              className="font-[family-name:var(--font-display)] font-semibold text-2xl leading-tight"
              style={{ color: active?.cardText }}
            >
              {active ? active.title : ""}
            </span>
          </div>
        </div>

        {services.map((service, index) => {
          const isActive = activeIndex === index;
          return (
            <a
              key={service.number}
              href={service.href}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`relative flex w-full items-center gap-4 sm:gap-6 lg:gap-10 border-b border-gray-200 px-6 sm:px-10 lg:px-16 transition-colors duration-300 ${isActive ? "bg-white" : "bg-transparent"
                }`}
              style={{ height: 100 }}
            >
              <span
                className={`font-[family-name:var(--font-mono)] text-sm shrink-0 transition-colors duration-300 ${isActive ? "text-gray-600" : "text-gray-400"
                  }`}
              >
                {service.number}
              </span>

              <h3
                className={`font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-none transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-700"
                  }`}
              >
                {service.title}
              </h3>

              <p
                className={`hidden lg:block ml-auto max-w-[16rem] font-[family-name:var(--font-body)] text-sm transition-colors duration-300 ${isActive ? "text-gray-600" : "text-gray-500"
                  }`}
              >
                {service.description}
              </p>

              <span
                aria-hidden="true"
                className={isActive ? "text-blue-600" : "text-gray-400"}
                style={{
                  transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), color 300ms ease-out",
                  transform: isActive ? "rotate(0deg)" : "rotate(-45deg)",
                  display: "inline-block",
                }}
              >
                &#8594;
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}