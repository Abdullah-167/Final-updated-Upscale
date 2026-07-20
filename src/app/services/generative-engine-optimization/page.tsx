import GEOPage from "@/Components/Services/GEO/GEOPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Generative Engine Optimization (GEO) Services | AI Search Visibility",

  description:
    "Upscale Alliance offers Generative Engine Optimization (GEO) services to help brands and companies appear, get cited, and gain visibility across AI-powered search engines like ChatGPT, Gemini, and other generative platforms.",

  keywords: [
    "generative engine optimization",
    "GEO services",
    "AI search optimization",
    "AI SEO services",
    "optimize for ChatGPT",
    "optimize for Gemini",
    "AI driven search optimization",
    "LLM search optimization",
    "AI content visibility",
    "next generation SEO",
  ],

  authors: [{ name: "Upscale Alliance" }],
  creator: "Upscale Alliance",
  publisher: "Upscale Alliance",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://upscalealliance.com/services/generative-engine-optimization",
  },

  openGraph: {
    title:
      "Generative Engine Optimization (GEO) | Get Found in AI Search",
    description:
      "Increase brand visibility and citations across AI-powered search engines with GEO strategies built for generative results and large language models.",
    url: "https://upscalealliance.com/services/generative-engine-optimization",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/services/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Generative Engine Optimization Services by Upscale Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "GEO Services | Optimize for AI-Powered Search Engines",
    description:
      "Future-ready Generative Engine Optimization to help brands appear, rank, and get cited in AI-driven search experiences.",
    images: ["https://upscalealliance.com/services/home-hero.png"],
  },

  category: "AI Search Optimization",
};


const page = () => {
  return (
    <div>
      <GEOPage />
    </div>
  );
};

export default page;
