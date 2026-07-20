import PartnersContactPage from "@/Components/Partners-Program/Contact";
import { PartnersStructuredData } from "@/Components/Partners-Program/PartnersStructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Upscale Alliance Partnership Program",
  description:
    "Join the Upscale Alliance Partner Program. Scale your agency with white-label digital marketing services, revenue share partnerships, and backend execution support for agencies and freelancers.",
  keywords: [
    "digital marketing partnership",
    "white-label marketing services",
    "agency partnership program",
    "revenue share marketing",
    "SEO partnership",
    "PPC partnership",
    "social media marketing partners",
    "web development partners",
    "marketing agency collaboration",
    "scale marketing agency",
    "Upscale Alliance partners",
    "digital marketing reseller program",
    "marketing white label",
    "agency growth partnership",
    "B2B marketing partnerships",
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
    url: "https://upscalealliance.com/partners-contact",
    siteName: "Upscale Alliance",
    title: "Partner With Us | Upscale Alliance Partnership Program",
    description:
      "Join the Upscale Alliance Partner Program. Scale your agency with white-label digital marketing services, revenue share partnerships, and backend execution support.",
    images: [
      {
        url: "/partner-contact.png",
        width: 1200,
        height: 630,
        alt: "Upscale Alliance Partnership Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With Us | Upscale Alliance Partnership Program",
    description:
      "Join the Upscale Alliance Partner Program. Scale your agency with white-label digital marketing services, revenue share partnerships, and backend execution support.",
    images: ["/partner-contact.png"],
    creator: "@upscalealliance",
  },
  alternates: {
    canonical: "https://upscalealliance.com/partnership-program-contact",
  },
};

const page = () => {
  return (
    <div>
      <PartnersStructuredData />
      <PartnersContactPage />
    </div>
  );
};

export default page;
