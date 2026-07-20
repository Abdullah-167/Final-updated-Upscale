import WebsiteDevelopmentPage from "@/Components/Services/Website-Dev/Website-dev";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Website Development Services | High-Performance & SEO-Ready Websites",

  description:
    "Upscale Alliance provides high-performance website development services using modern frameworks like Next.js. We build fast, scalable, SEO- and GEO-ready websites optimized for Google and AI-powered search engines.",

  keywords: [
    "website development services",
    "web development agency",
    "Next.js website development",
    "high performance websites",
    "SEO ready websites",
    "GEO optimized websites",
    "AI search optimized websites",
    "custom website development",
    "modern web development agency",
    "business website development",
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
    canonical: "https://upscalealliance.com/services/website-development",
  },

  openGraph: {
    title:
      "Website Development Services | SEO & AI-Optimized Web Solutions",
    description:
      "We design and develop high-performance, SEO- and GEO-optimized websites built for scalability, conversions, and AI-driven search visibility.",
    url: "https://upscalealliance.com/services/website-development",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/services/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Website Development Services by Upscale Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Website Development Services | Fast, Scalable & SEO-Ready Websites",
    description:
      "Custom website development using modern frameworks like Next.js, optimized for SEO, GEO, and AI-powered search engines.",
    images: [
      "https://upscalealliance.com/services/home-hero.png",
    ],
  },

  category: "Web Development",
};


const page = () => {
  return (
    <div>
      <WebsiteDevelopmentPage />
    </div>
  );
};

export default page;
