// app/medical-billing/page.tsx
import MedicalBillingPage from "@/Components/Services/RCM/Medical-Ar/MedicalAr";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Billing & AR Management Services | Healthcare RCM Solutions",
  description:
    "Upscale Alliance provides professional medical billing & accounts receivable management services for healthcare providers. Reduce denials, improve cash flow, and maximize revenue with our HIPAA-compliant RCM solutions.",
  keywords: [
    "medical billing services",
    "accounts receivable management",
    "revenue cycle management",
    "healthcare RCM solutions",
    "medical billing company",
    "AR management healthcare",
    "denial management services",
    "medical claims processing",
    "healthcare revenue optimization",
    "medical practice billing",
    "hospital billing services",
    "clinical billing solutions",
    "HIPAA compliant billing",
    "medical coding services",
    "healthcare accounts receivable",
    "revenue recovery services",
    "medical billing outsourcing",
    "AR cleanup healthcare",
    "claim denial management",
    "medical revenue cycle",
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
    url: "https://upscalealliance.com/services/medical-billing-ar",
    siteName: "Upscale Alliance",
    title:
      "Medical Billing & AR Management Services | Healthcare RCM Solutions",
    description:
      "Reduce denials, improve cash flow, and maximize revenue with our professional medical billing & accounts receivable management services.",
    images: [
      {
        url: "/medical-bill.png",
        width: 1200,
        height: 630,
        alt: "Medical Billing & AR Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Medical Billing & AR Management Services | Healthcare RCM Solutions",
    description:
      "Professional medical billing & accounts receivable management services for healthcare providers.",
    images: ["/medical-bill.png"],
    creator: "@upscalealliance",
  },
  alternates: {
    canonical: "https://upscalealliance.com/services/medical-billing-ar",
  },
  other: {
    "dc.subject": "Healthcare Revenue Cycle Management",
    "dc.type": "Service",
    classification: "Healthcare Business Services",
    rating: "General",
    "google-site-verification": "your-google-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    specialty: "Medical Billing & Accounts Receivable Management",
  },
};

const page = () => {
  return <MedicalBillingPage />;
};

export default page;
