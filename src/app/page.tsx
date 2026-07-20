import MainHome from "@/Components/Home/Index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Upscale Alliance | Digital Marketing & RCM Solutions Agency",
    template:
      "%s | Upscale Alliance | Digital Marketing & RCM Solutions Agency",
  },

  description:
    "Upscale Alliance is a premier digital marketing and RCM agency specializing in SEO, Generative Engine Optimization (GEO), PPC advertising, website development, and Revenue Cycle Management (RCM) services. We help businesses grow online while optimizing medical billing and revenue operations for healthcare practices.",

  keywords: [
    "digital marketing agency",
    "SEO services",
    "GEO optimization",
    "generative engine optimization",
    "AI search optimization",
    "Google SEO",
    "PPC advertising",
    "Meta ads",
    "Google ads",
    "website development agency",
    "Next.js web development",
    "performance marketing",
    "AI SEO agency",
    "Revenue Cycle Management",
    "medical billing services",
    "RCM solutions",
    "healthcare RCM",
    "medical practice revenue optimization",
    "healthcare digital marketing",
    "medical billing automation",
    "RCM consulting",
    "medical claims management",
    "revenue cycle optimization",
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
    canonical: "https://upscalealliance.com/",
  },

  openGraph: {
    title: "Upscale Alliance | Digital Marketing & RCM Solutions Agency",
    description:
      "We provide comprehensive digital marketing services (SEO, GEO, PPC, web development) and Revenue Cycle Management (RCM) solutions to help businesses grow online and optimize medical billing operations for healthcare practices.",
    url: "https://upscalealliance.com/",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Upscale Alliance Digital Marketing & RCM Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Upscale Alliance | Digital Marketing & RCM Solutions",
    description:
      "SEO, GEO, PPC, web development & Revenue Cycle Management (RCM) services for business growth and healthcare revenue optimization.",
    images: ["https://upscalealliance.com/home-hero.png"],
  },

  category: "Digital Marketing & Healthcare Technology",
};
export default function Home() {
  return (
    <div>
      <MainHome />
    </div>
  );
}
