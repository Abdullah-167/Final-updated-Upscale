import SocailMediaMain from "@/Components/Services/SocialMedia/SocialMediaMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Paid Advertising Services | PPC, Google Ads & Meta Ads Experts",

  description:
    "Upscale Alliance delivers ROI-driven paid advertising services across Google Ads, Meta Ads, and other platforms. We build, optimize, and scale PPC campaigns for measurable growth and AI-informed audience targeting.",

  keywords: [
    "paid advertising services",
    "PPC management services",
    "Google Ads agency",
    "Meta Ads agency",
    "Facebook advertising services",
    "performance marketing agency",
    "conversion focused advertising",
    "AI optimized ad campaigns",
    "digital advertising experts",
    "paid media management",
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
    canonical: "https://upscalealliance.com/services/paid-advertising",
  },

  openGraph: {
    title:
      "Paid Advertising Services | ROI-Focused PPC & Paid Media",
    description:
      "Scale faster with data-driven paid advertising across Google Ads and Meta Ads. Built for performance, conversions, and intelligent audience targeting.",
    url: "https://upscalealliance.com/services/paid-advertising",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/services/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Paid Advertising Services by Upscale Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Paid Advertising Services | Google Ads & Meta Ads Specialists",
    description:
      "ROI-driven PPC and paid media management across Google and Meta platforms, optimized for scalable growth.",
    images: [
      "https://upscalealliance.com/services/home-hero.png",
    ],
  },

  category: "Paid Advertising",
};


const page = () => {
  return (
    <div>
      <SocailMediaMain />
    </div>
  );
};

export default page;
