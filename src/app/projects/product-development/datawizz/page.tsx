import type { Metadata } from "next";
import DatawizzPage from "@/Components/Projects/Product/Datawizz/DatawizzPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://upscalealliance.com"),

  title:
    "Datawizz Case Study | AI SaaS Website Design, Branding & Framer Development",

  description:
    "Explore how Upscale Alliance partnered with Datawizz to design its AI brand, develop a high-performance Framer website, create launch assets, investor materials, marketing collateral, and product experiences that helped position the company for rapid growth.",

  keywords: [
    "Datawizz case study",
    "AI SaaS website",
    "AI startup website",
    "Framer website development",
    "Framer agency",
    "website case study",
    "branding case study",
    "UI UX case study",
    "SaaS branding",
    "startup branding",
    "AI company branding",
    "product design",
    "landing page design",
    "website redesign",
    "B2B SaaS website",
    "startup website design",
    "web design agency",
    "creative agency",
    "digital agency",
    "interactive website",
    "high performance website",
    "marketing website",
    "investor presentation design",
    "product marketing",
    "UI design",
    "UX design",
    "website development",
    "responsive web design",
    "conversion focused website",
  ],

  alternates: {
    canonical: "/projects/datawizz",
  },

  openGraph: {
    type: "article",
    url: "/projects/datawizz",
    siteName: "Upscale Alliance",
    title:
      "Datawizz Case Study | AI SaaS Website & Brand Development",
    description:
      "See how Upscale Alliance helped Datawizz build its brand identity, website, launch assets, investor materials and digital experience.",
    images: [
      {
        url: "/projects/web/datawizz/datawizz-cover.webp",
        width: 1200,
        height: 630,
        alt: "Datawizz Website Case Study",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Datawizz Case Study | Upscale Alliance",
    description:
      "A complete AI startup branding, website design and Framer development case study.",
    images: ["/projects/web/datawizz/datawizz-cover.webp"],
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
  return <DatawizzPage />;
}