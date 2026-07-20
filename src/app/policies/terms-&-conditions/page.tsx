import TermsConditionsPage from "@/Components/Policies/TermsConditionsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Upscale Alliance",

  description:
    "Review the Terms and Conditions governing the use of Upscale Alliance’s website, services, intellectual property, and user responsibilities.",

  keywords: [
    "terms and conditions",
    "website terms of use",
    "service terms",
    "legal terms",
    "user agreement",
    "terms of service",
    "usage policy",
  ],

  authors: [{ name: "Upscale Alliance" }],
  creator: "Upscale Alliance",
  publisher: "Upscale Alliance",

  robots: {
    index: true,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://upscalealliance.com/policies/terms-&-conditions",
  },

  openGraph: {
    title: "Terms & Conditions | Upscale Alliance",
    description:
      "The legal terms and conditions that apply to the use of Upscale Alliance’s website and services.",
    url: "https://upscalealliance.com/policies/terms-&-conditions",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Upscale Alliance Terms and Conditions",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Upscale Alliance",
    description:
      "Understand the terms governing the use of Upscale Alliance’s services and website.",
    images: ["https://upscalealliance.com/home-hero.png"],
  },

  category: "Legal",
};

const page = () => {
  return <div>
    <TermsConditionsPage />
  </div>;
};

export default page;
