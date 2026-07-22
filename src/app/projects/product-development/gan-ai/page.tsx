import type { Metadata } from "next";
import GenaiPage from "@/Components/Projects/Product/GenAi/GanaiPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://upscalealliance.com"),

  title:
    "Gan.AI Case Study | AI Video Platform, Branding & Website Design",

  description:
    "Explore how Upscale Alliance partnered with Gan.AI to redesign its AI video platform experience through strategic branding, website design, UI/UX, product design, and a high-performance marketing website that supported product launches and business growth.",

  keywords: [
    "Gan AI",
    "Gan.AI",
    "Gan AI case study",
    "AI video platform",
    "generative AI",
    "AI avatars",
    "text to speech AI",
    "voice cloning AI",
    "AI video generation",
    "AI startup",
    "AI SaaS",
    "AI branding",
    "AI website design",
    "Framer website",
    "Framer development",
    "Framer agency",
    "SaaS website design",
    "startup branding",
    "website redesign",
    "UI UX design",
    "UI UX case study",
    "product design",
    "landing page design",
    "marketing website",
    "creative agency",
    "digital agency",
    "interactive website",
    "responsive web design",
    "conversion focused website",
    "B2B SaaS website"
  ],

  alternates: {
    canonical: "/case-studies/gan-ai",
  },

  openGraph: {
    type: "article",
    url: "/case-studies/gan-ai",
    siteName: "Upscale Alliance",
    title:
      "Gan.AI Case Study | AI Video Platform & Website Design",
    description:
      "Discover how Upscale Alliance helped Gan.AI elevate its brand, redesign its website and create a launch-ready digital experience for its AI platform.",
    images: [
      {
        url: "/projects/web/ganai/ganai-cover.webp",
        width: 1200,
        height: 630,
        alt: "Gan.AI Case Study",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gan.AI Case Study | Upscale Alliance",
    description:
      "AI startup branding, website design, UI/UX and digital product case study.",
    images: ["/projects/web/ganai/ganai-cover.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  creator: "Upscale Alliance",
  publisher: "Upscale Alliance",

  category: "Case Study",

  authors: [
    {
      name: "Upscale Alliance",
      url: "https://upscalealliance.com",
    },
  ],
};

export default function Page() {
  return <GenaiPage />;
}