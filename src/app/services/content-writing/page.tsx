import ContentWritingPage from "@/Components/Services/ContentMarketing/ContentMarketingMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Content Writing Services | SEO & AI-Optimized Content Strategy",

  description:
    "Upscale Alliance provides professional content writing services that combine SEO strategy, GEO principles, and audience-focused storytelling to drive rankings, authority, and conversions across Google and AI-powered search engines.",

  keywords: [
    "content writing services",
    "SEO content writing",
    "AI optimized content",
    "GEO content strategy",
    "website content writing",
    "blog writing services",
    "copywriting services",
    "content marketing agency",
    "search optimized content",
    "LLM friendly content",
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
    canonical: "https://upscalealliance.com/services/content-writing",
  },

  openGraph: {
    title:
      "Content Writing Services | SEO & AI-Ready Content That Converts",
    description:
      "Strategic content writing designed to rank, earn trust, and perform across Google and AI-powered search experiences.",
    url: "https://upscalealliance.com/services/content-writing",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/services/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Content Writing Services by Upscale Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Content Writing Services | SEO & AI-Optimized Content",
    description:
      "High-quality content writing that supports SEO, GEO, and AI search visibility while driving real business results.",
    images: [
      "https://upscalealliance.com/services/home-hero.png",
    ],
  },

  category: "Content Marketing",
};


const page = () => {
  return (
    <div>
      <ContentWritingPage />
    </div>
  );
};

export default page;
