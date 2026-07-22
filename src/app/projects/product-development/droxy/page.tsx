import type { Metadata } from "next";
import DroxyPage from "@/Components/Projects/Product/Droxy/DroxyPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://upscalealliance.com"),

  title:
    "Droxy AI Case Study | AI SaaS Branding, Website Design & Framer Development",

  description:
    "Discover how Upscale Alliance partnered with Droxy AI to create a bold brand identity, high-converting Framer website, interactive product experiences, marketing assets, and scalable digital design system for an AI-powered communication platform.",

  keywords: [
    "Droxy AI",
    "Droxy case study",
    "AI SaaS case study",
    "AI startup branding",
    "AI website design",
    "Framer development",
    "Framer website",
    "Framer agency",
    "branding agency",
    "startup branding",
    "SaaS branding",
    "website redesign",
    "UI UX design",
    "UI UX case study",
    "product design",
    "landing page design",
    "AI product design",
    "marketing website",
    "interactive website",
    "motion design",
    "web design agency",
    "creative agency",
    "digital agency",
    "startup website",
    "B2B SaaS website",
    "website development",
    "responsive website",
    "conversion optimization",
    "modern website design",
    "brand identity design"
  ],

  alternates: {
    canonical: "/case-studies/droxy-ai",
  },

  openGraph: {
    type: "article",
    url: "/case-studies/droxy-ai",
    siteName: "Upscale Alliance",
    title:
      "Droxy AI Case Study | Branding & Website Design",
    description:
      "See how Upscale Alliance transformed Droxy AI with a new brand identity, Framer website, marketing assets and interactive digital experiences.",
    images: [
      {
        url: "/projects/web/droxy/droxy-cover.webp",
        width: 1200,
        height: 630,
        alt: "Droxy AI Case Study",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Droxy AI Case Study | Upscale Alliance",
    description:
      "AI branding, website design, Framer development and digital product case study.",
    images: ["/projects/web/droxy/droxy-cover.webp"],
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
  return <DroxyPage />;
}