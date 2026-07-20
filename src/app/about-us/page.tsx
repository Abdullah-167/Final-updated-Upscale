import AboutPage from "@/Components/About/AboutMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Upscale Alliance | SEO, GEO & AI-Driven Growth Experts",

  description:
    "Learn about Upscale Alliance — a next-generation digital marketing agency specializing in SEO, Generative Engine Optimization (GEO), PPC advertising, and high-performance web development built for Google and AI-powered search.",

  keywords: [
    "about Upscale Alliance",
    "SEO agency experts",
    "GEO optimization specialists",
    "generative engine optimization agency",
    "AI search optimization company",
    "digital marketing experts",
    "PPC marketing professionals",
    "Google and AI SEO agency",
    "Next.js development agency",
    "data-driven digital marketing",
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
    canonical: "https://upscalealliance.com/about-us",
  },

  openGraph: {
    title:
      "About Upscale Alliance | SEO, GEO & AI-First Digital Marketing Agency",
    description:
      "Discover the team, vision, and expertise behind Upscale Alliance — helping brands grow through SEO, GEO, PPC, and AI-search-ready digital experiences.",
    url: "https://upscalealliance.com/about-us",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/home-hero.png",
        width: 1200,
        height: 630,
        alt: "About Upscale Alliance Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Upscale Alliance | SEO, GEO & AI Growth Specialists",
    description:
      "Meet the experts behind Upscale Alliance — delivering SEO, GEO, PPC, and AI-driven digital growth strategies.",
    images: ["https://upscalealliance.com/home-hero.png"],
  },

  category: "Digital Marketing",
};


const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
