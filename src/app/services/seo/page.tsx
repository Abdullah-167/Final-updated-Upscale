import SEOMain from "@/Components/Services/SEO/SEOMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "SEO Services | Data-Driven Search Engine Optimization Agency",

  description:
    "Upscale Alliance delivers data-driven SEO services that improve rankings, traffic, and conversions. We optimize for Google and AI-powered search engines through technical SEO, content strategy, and GEO alignment.",

  keywords: [
    "SEO services",
    "search engine optimization agency",
    "professional SEO services",
    "technical SEO",
    "on page SEO",
    "off page SEO",
    "AI search optimization",
    "GEO SEO services",
    "enterprise SEO agency",
    "organic traffic growth",
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
    canonical: "https://upscalealliance.com/services/seo",
  },

  openGraph: {
    title:
      "SEO Services | Rank Higher on Google & AI Search Engines",
    description:
      "Strategic SEO services designed to increase visibility, authority, and long-term organic growth across Google and AI-driven search platforms.",
    url: "https://upscalealliance.com/services/seo",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/services/home-hero.png",
        width: 1200,
        height: 630,
        alt: "SEO Services by Upscale Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SEO Services | Sustainable Rankings & Organic Growth",
    description:
      "Technical SEO, content optimization, and GEO strategies built for modern search and AI visibility.",
    images: ["https://upscalealliance.com/services/home-hero.png"],
  },

  category: "Search Engine Optimization",
};



const page = () => {
  return (
    <div>
      <SEOMain />
    </div>
  );
};

export default page;
