import type { Metadata } from "next";
import NextPage from "@/Components/Projects/Product/N3xt/NextPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://upscalealliance.com"),

  title:
    "N3XT Case Study | Fintech Branding, Banking UX & Website Design",

  description:
    "Discover how Upscale Alliance partnered with N3XT to design a modern fintech brand, intuitive banking experience, high-performance website, product interfaces, investor collateral, and launch assets for a next-generation digital banking platform.",

  keywords: [
    "N3XT",
    "N3XT case study",
    "fintech case study",
    "digital banking website",
    "banking UX design",
    "banking UI design",
    "financial technology",
    "fintech branding",
    "fintech website design",
    "banking platform",
    "digital bank",
    "neobank design",
    "financial SaaS",
    "startup branding",
    "product design",
    "product UX",
    "website redesign",
    "landing page design",
    "Framer website",
    "Framer development",
    "UI UX design",
    "responsive website",
    "web design agency",
    "creative agency",
    "digital agency",
    "pitch deck design",
    "investor presentation",
    "motion graphics",
    "website development",
    "conversion focused website"
  ],

  alternates: {
    canonical: "/case-studies/n3xt",
  },

  openGraph: {
    type: "article",
    url: "/case-studies/n3xt",
    siteName: "Upscale Alliance",
    title:
      "N3XT Case Study | Fintech Product & Website Design",
    description:
      "Explore how Upscale Alliance designed the branding, banking experience, website and digital product ecosystem for N3XT.",
    images: [
      {
        url: "/projects/web/n3xt/n3xt-cover.webp",
        width: 1200,
        height: 630,
        alt: "N3XT Case Study",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "N3XT Case Study | Upscale Alliance",
    description:
      "Fintech branding, banking UX, website design and digital product case study.",
    images: ["/projects/web/n3xt/n3xt-cover.webp"],
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
  return <NextPage />;
}