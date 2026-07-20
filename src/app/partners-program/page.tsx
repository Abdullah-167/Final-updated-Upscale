import PartnersProgram from "@/Components/Partners-Program/Parnter";
import { PartnersProgramStructuredData } from "@/Components/Partners-Program/PartnersProgramStructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership Program | White-Label Digital Marketing & RCM Services for Agencies",
  description: "Upscale Alliance Partnership Program offers white-label digital marketing & Revenue Cycle Management (RCM) solutions. Partner with us for SEO, PPC, social media, web development, content writing, and healthcare RCM services under your brand.",
  keywords: [
    "partner program",
    "strategic partnerships",
    "white label services",
    "agency partnerships",
    "revenue share",
    "growth partners",
    "digital agency collaboration",
    "white-label digital marketing",
    "RCM partnership program",
    "revenue cycle management services",
    "medical billing partnership",
    "SEO partnership",
    "PPC management white label",
    "social media marketing for agencies",
    "web development partnership",
    "content writing services",
    "Upscale Alliance partners",
    "agency growth program",
    "digital marketing reseller",
    "B2B marketing partnership",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upscalealliance.com/partners-program",
    siteName: "Upscale Alliance",
    title: "Partnership Program | White-Label Digital Marketing & RCM Services",
    description: "Partner with Upscale Alliance for white-label digital marketing and RCM solutions. Scale your agency with SEO, PPC, social media, web development, content writing, and Revenue Cycle Management services.",
    images: [
      {
        url: "/program.png",
        width: 1200,
        height: 630,
        alt: "Upscale Alliance Partnership Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnership Program | White-Label Digital Marketing & RCM Services",
    description: "Partner with Upscale Alliance for white-label digital marketing and RCM solutions. Scale your agency with SEO, PPC, social media, web development, content writing, and Revenue Cycle Management services.",
    images: ["/program.png"],
    creator: "@upscalealliance",
  },
  alternates: {
    canonical: "https://upscalealliance.com/partners-program",
  },
  other: {
    "dc.subject": "Business Partnership Program",
    "dc.type": "Service",
    "classification": "Business Services",
    "rating": "General",
    "google-site-verification": "your-google-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

const page = () => {
  return (
    <div>
      <PartnersProgramStructuredData />
      <PartnersProgram />
    </div>
  );
};

export default page;