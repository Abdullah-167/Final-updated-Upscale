import PatientEligibilityVerificationPage from "@/Components/Services/RCM/PatientEligibilityVerification/PatientEligibilityVerificationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Patient Eligibility Verification Services | Real-time Insurance Verification for Healthcare",
  description:
    "Upscale Alliance provides professional patient eligibility verification services for healthcare providers. Real-time insurance verification, benefit checking, and coverage validation to reduce claim denials and improve revenue cycle performance.",
  keywords: [
    "patient eligibility verification",
    "insurance verification services",
    "real-time eligibility verification",
    "healthcare insurance verification",
    "medical billing verification",
    "insurance benefit checking",
    "coverage verification services",
    "claim denial reduction",
    "revenue cycle management",
    "healthcare RCM solutions",
    "medical practice verification",
    "hospital eligibility verification",
    "insurance payer verification",
    "HIPAA compliant verification",
    "electronic eligibility verification",
    "patient insurance validation",
    "pre-service verification",
    "clean claims submission",
    "healthcare revenue optimization",
    "denial management services",
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
    url: "https://upscalealliance.com/services/patient-eligibility-verification",
    siteName: "Upscale Alliance",
    title:
      "Patient Eligibility Verification Services | Real-time Insurance Verification",
    description:
      "Reduce claim denials with real-time patient eligibility verification. Verify insurance coverage, benefits, and patient responsibility before services are rendered.",
    images: [
      {
        url: "/eligibity.png",
        width: 1200,
        height: 630,
        alt: "Patient Eligibility Verification Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Patient Eligibility Verification Services | Real-time Insurance Verification",
    description:
      "Reduce claim denials with real-time patient eligibility verification. Verify insurance coverage before services are rendered.",
    images: ["/eligibity.png"],
    creator: "@upscalealliance",
  },
  alternates: {
    canonical:
      "https://upscalealliance.com/services/patient-eligibility-verification",
  },
  other: {
    "dc.subject": "Healthcare Eligibility Verification",
    "dc.type": "Service",
    classification: "Healthcare Technology Services",
    rating: "General",
    "google-site-verification": "your-google-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    specialty: "Patient Eligibility & Insurance Verification",
  },
};

const page = () => {
  return <PatientEligibilityVerificationPage />;
};

export default page;
