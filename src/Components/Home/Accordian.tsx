"use client";

import { useState } from "react";
import { Bricolage_Grotesque, Inter } from "next/font/google";

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

type FaqItem = {
  question: string;
  answer: string[];
};

const faqs: FaqItem[] = [
  {
    question: "Why choose our digital marketing & AI services?",
    answer: [
      "We've spent years helping businesses grow through data-driven marketing, AI automation, and design that actually converts — not just templates dressed up to look busy.",
      "Choosing us means working with one team across marketing, AI, design, video, and development, so nothing gets lost between departments. We focus on measurable outcomes: more leads, more conversions, and a brand that looks like it belongs at the top of your industry.",
      "Whether your goal is more visibility or a smarter, more automated back-end, our approach is built around your specific business — not a one-size-fits-all package.",
    ],
  },
  {
    question: "How do you know if my brand needs a refresh?",
    answer: [
      "If your website feels outdated, your conversions have plateaued, or your competitors simply look sharper online, it's usually a sign your brand needs attention.",
    ],
  },
  {
    question: "How does your process work from start to finish?",
    answer: [
      "We start with a short discovery call to understand your goals, then move into strategy, design, development, and launch — with regular check-ins at every stage.",
    ],
  },
  {
    question: "Why should I work with your agency instead of freelancers?",
    answer: [
      "A single agency gives you one accountable team across every service — marketing, AI, design, and development — instead of managing multiple freelancers who don't talk to each other.",
    ],
  },
  {
    question: "Do you offer AI automation for existing businesses?",
    answer: [
      "Yes — we build custom AI workflows that plug into your existing tools, automating repetitive tasks so your team can focus on higher-value work.",
    ],
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      className={`${display.variable} ${body.variable} bg-white py-16 sm:py-20 lg:py-24 w-full`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-[40px] grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24 self-start">
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#0B1220]">
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
                  className="group cursor-pointer w-full flex items-start justify-between gap-4 sm:gap-6 py-4 sm:py-6 text-left"
                >
                  <span
                    className={`group-hover:text-[#2F6FED] font-[family-name:var(--font-body)] text-base sm:text-lg lg:text-xl font-medium transition-colors duration-300 ${
                      isOpen ? "text-[#2F6FED]" : "text-[#0B1220]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`group-hover:text-[#2F6FED] shrink-0 mt-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center text-xl transition-colors duration-300 ${
                      isOpen ? "text-[#2F6FED]" : "text-[#0B1220]"
                    }`}
                  >
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pb-4 sm:pb-6 pr-4 sm:pr-8 flex flex-col gap-3 sm:gap-4">
                    {faq.answer.map((paragraph, i) => (
                      <p
                        key={i}
                        className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[#4A5578] leading-relaxed"
                      >
                        {paragraph}
                      </p>
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
}