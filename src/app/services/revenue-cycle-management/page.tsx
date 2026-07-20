import RCMMAin from "@/Components/Services/RCM/RCMMAin";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  // Primary keyword in title
  title:
    "Revenue Cycle Management (RCM) Services | Medical Billing & Healthcare Revenue Optimization",

  // SEO-optimized description with keywords and CTAs
  description:
    "Expert Revenue Cycle Management (RCM) services that increase medical practice revenue by 20-40%. Our AI-powered medical billing solutions reduce denials, accelerate payments, and streamline healthcare revenue operations. Get a free RCM audit today.",

  // Comprehensive keyword strategy
  keywords: [
    // Primary Keywords
    "Revenue Cycle Management",
    "medical billing services",
    "RCM solutions",
    "healthcare revenue optimization",

    // Secondary Keywords
    "medical practice billing",
    "claims management services",
    "denial management",
    "patient billing solutions",
    "medical coding services",

    // Long-tail Keywords
    "best RCM companies 2024",
    "how to improve medical billing",
    "medical practice revenue increase",
    "reduce billing errors healthcare",
    "automated medical billing systems",

    // Geographic Keywords (if targeting specific areas)
    "RCM services USA",
    "medical billing companies",
    "healthcare revenue cycle consulting",

    // Service-specific Keywords
    "medical claims processing",
    "AR management healthcare",
    "practice management solutions",
    "healthcare IT services",
    "medical billing automation",
  ],

  // Structured Data for Rich Snippets
  alternates: {
    canonical: "https://upscalealliance.com/services/revenue-cycle-management",
  },

  // Open Graph for Social Sharing
  openGraph: {
    title: "Boost Medical Practice Revenue by 20-40% | RCM Services",
    description:
      "AI-powered Revenue Cycle Management solutions that transform medical billing operations. Reduce denials, accelerate payments, and maximize healthcare practice revenue.",
    url: "https://upscalealliance.com/services/revenue-cycle-management",
    type: "website",
    locale: "en_US",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/og-rcm-services.jpg",
        width: 1200,
        height: 630,
        alt: "AI-Powered Revenue Cycle Management Services - Upscale Alliance",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Transform Medical Billing with AI-Powered RCM",
    description:
      "Increase healthcare practice revenue by 20-40% with our expert Revenue Cycle Management solutions.",
    images: ["https://upscalealliance.com/og-rcm-services.jpg"],
    creator: "@upscalealliance",
  },

  // Robots for Crawling
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

  // Additional SEO Meta Tags
  verification: {
    google: "your-google-verification-code",
  },

  // Schema.org Structured Data (for rich results)
  other: {
    // JSON-LD for Local Business
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Upscale Alliance RCM Services",
      description:
        "Professional Revenue Cycle Management services for healthcare practices",
      url: "https://upscalealliance.com/services/revenue-cycle-management",
      logo: "https://upscalealliance.com/logo.png",
      image: "https://upscalealliance.com/rcm-hero.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Your City",
        addressRegion: "Your State",
        postalCode: "Your ZIP",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.7128",
        longitude: "-74.0060",
      },
      openingHours: "Mo-Fr 09:00-18:00",
      telephone: "+1-800-123-4567",
      priceRange: "$$$",
      serviceType:
        "Revenue Cycle Management, Medical Billing, Healthcare Consulting",
      areaServed: "United States",
      sameAs: [
        "https://facebook.com/upscalealliance",
        "https://twitter.com/upscalealliance",
        "https://linkedin.com/company/upscalealliance",
      ],
    }),
  },
};

const page = () => {
  return (
    <>
      {/* AI-Optimized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Revenue Cycle Management Services",
            description:
              "AI-powered medical billing and revenue optimization solutions for healthcare practices",
            provider: {
              "@type": "Organization",
              name: "Upscale Alliance",
              url: "https://upscalealliance.com",
            },
            serviceType: "Healthcare Revenue Cycle Management",
            category: "Medical Services",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free RCM Audit and Consultation",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
          }),
        }}
      />

      {/* FAQ Schema for Featured Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Revenue Cycle Management (RCM)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Revenue Cycle Management (RCM) is the financial process that healthcare facilities use to track patient care episodes from registration and appointment scheduling to the final payment of a balance. It encompasses all administrative and clinical functions that contribute to the capture, management, and collection of patient service revenue.",
                },
              },
              {
                "@type": "Question",
                name: "How much can RCM services increase my practice revenue?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our AI-powered RCM solutions typically increase medical practice revenue by 20-40% by reducing claim denials, accelerating payment cycles, and improving billing accuracy through automated processes and expert oversight.",
                },
              },
              {
                "@type": "Question",
                name: "What makes your RCM services different?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We combine AI technology with healthcare billing expertise to provide transparent, data-driven RCM solutions. Our proprietary algorithms identify revenue leakage points, predict denial risks, and optimize coding accuracy for maximum reimbursement.",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://upscalealliance.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://upscalealliance.com/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Revenue Cycle Management",
                item: "https://upscalealliance.com/services/revenue-cycle-management",
              },
            ],
          }),
        }}
      />
      <RCMMAin />
    </>
  );
};

export default page;
