import LinkBuildingMain from "@/Components/Services/Linkuilding/LinkBuildingMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Link Building Services | Authority-Driven & White-Hat Backlinks",

  description:
    "Upscale Alliance provides strategic link building services focused on earning high-quality, white-hat backlinks that improve domain authority, rankings, and trust across Google and AI-powered search engines.",

  keywords: [
    "link building services",
    "white hat link building",
    "SEO link building agency",
    "high quality backlinks",
    "authority backlinks",
    "off page SEO services",
    "natural backlink building",
    "ethical link building",
    "AI friendly link building",
    "domain authority growth",
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
    canonical: "https://upscalealliance.com/services/link-building",
  },

  openGraph: {
    title:
      "Link Building Services | Earn Authority & Rankings Naturally",
    description:
      "Build lasting authority with white-hat link building strategies designed to strengthen trust, relevance, and organic visibility.",
    url: "https://upscalealliance.com/services/link-building",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/services/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Link Building Services by Upscale Alliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Link Building Services | High-Quality Backlinks That Last",
    description:
      "Ethical, authority-driven link building that supports sustainable SEO and AI-search visibility.",
    images: [
      "https://upscalealliance.com/services/home-hero.png",
    ],
  },

  category: "SEO Services",
};


const page = () => {
  return (
    <div>
      <LinkBuildingMain />
    </div>
  );
};

export default page;
