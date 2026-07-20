import PrivacyPolicyPage from "@/Components/Policies/PrivacyPolicyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Upscale Alliance",

  description:
    "Read Upscale Alliance’s Privacy Policy to understand how we collect, use, protect, and handle your personal information across our website and digital services.",

  keywords: [
    "privacy policy",
    "data protection policy",
    "user privacy",
    "personal data usage",
    "GDPR compliance",
    "privacy practices",
    "website privacy policy",
    "data security policy",
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
    canonical: "https://upscalealliance.com/policies/privacy-policy",
  },

  openGraph: {
    title: "Privacy Policy | Upscale Alliance",
    description:
      "Learn how Upscale Alliance safeguards your personal data and maintains transparency in how information is collected and used.",
    url: "https://upscalealliance.com/policies/privacy-policy",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Upscale Alliance Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Upscale Alliance",
    description:
      "Details on how Upscale Alliance collects, uses, and protects user information.",
    images: ["https://upscalealliance.com/home-hero.png"],
  },

  category: "Legal",
};

const page = () => {
  return (
    <div>
      <PrivacyPolicyPage />
    </div>
  );
};

export default page;
