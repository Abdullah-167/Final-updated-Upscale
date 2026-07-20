import TexasRCMPage from "@/Components/Services/RCM/Texas-rcm/Texas-rcm-main";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Primary keyword in title
  title:
    "Texas Revenue Cycle Management (RCM) | Medical Billing Services for Healthcare Providers",

  // AI & SEO optimized description
  description:
    "Expert Texas Revenue Cycle Management (RCM) services that increase medical practice revenue by 20-40%. Our AI-powered medical billing solutions reduce denials, accelerate payments, and streamline healthcare revenue operations across all 254 Texas counties. Get a free RCM audit today.",

  // Comprehensive keyword strategy
  keywords: [
    // Primary Keywords
    "Texas Revenue Cycle Management",
    "Texas medical billing services",
    "Texas RCM solutions",
    "Texas healthcare revenue optimization",

    // Secondary Keywords
    "Dallas medical billing",
    "Houston RCM services",
    "Austin healthcare billing",
    "San Antonio medical billing",
    "Fort Worth revenue cycle management",
    "El Paso medical billing",

    // Long-tail Keywords
    "best RCM companies in Texas 2024",
    "how to improve medical billing in Texas",
    "Texas medical practice revenue increase",
    "reduce billing errors Texas healthcare",
    "automated medical billing systems Texas",

    // Geographic Keywords
    "Texas Medicaid billing services",
    "Texas workers compensation billing",
    "Texas CHIP program billing",
    "Texas medical coding services",

    // Service-specific Keywords
    "Texas medical claims processing",
    "Texas AR management healthcare",
    "Texas practice management solutions",
    "Texas healthcare IT services",
    "Texas medical billing automation",
  ],

  // Canonical URL
  alternates: {
    canonical:
      "https://upscalealliance.com/services/revenue-cycle-management/texas",
  },

  // Open Graph for Social Sharing
  openGraph: {
    title: "Texas RCM Services: Boost Medical Practice Revenue by 20-40%",
    description:
      "AI-powered Texas Revenue Cycle Management solutions that transform medical billing operations. Reduce denials, accelerate payments, and maximize healthcare practice revenue across Texas.",
    url: "https://upscalealliance.com/services/revenue-cycle-management/texas",
    type: "website",
    locale: "en_US",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "/rcm-hero.png", // Using the same image as hero section
        width: 1200,
        height: 630,
        alt: "Texas Revenue Cycle Management Services - Upscale Alliance",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Transform Texas Medical Billing with AI-Powered RCM",
    description:
      "Increase Texas healthcare practice revenue by 20-40% with our expert Revenue Cycle Management solutions.",
    images: ["/rcm-hero.png"],
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
  other: {
    // JSON-LD for Local Business (Texas specific)
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Upscale Alliance Texas RCM Services",
      description:
        "Professional Revenue Cycle Management services for Texas healthcare providers",
      url: "https://upscalealliance.com/services/revenue-cycle-management/texas",
      logo: "https://upscalealliance.com/logo.png",
      image: "https://upscalealliance.com/rcm-hero.png",
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "State",
        name: "Texas",
      },
      openingHours: "Mo-Fr 08:00-18:00",
      telephone: "+1-800-123-4567",
      priceRange: "$$$",
      serviceType:
        "Texas Revenue Cycle Management, Medical Billing, Healthcare Consulting",
      sameAs: [
        "https://facebook.com/upscalealliance",
        "https://twitter.com/upscalealliance",
        "https://linkedin.com/company/upscalealliance",
      ],
    }),
  },
};

const RCMPage = () => {
  return (
    <>
      {/* AI-Optimized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Texas Revenue Cycle Management Services",
              description:
                "AI-powered medical billing and revenue optimization solutions for Texas healthcare practices",
              provider: {
                "@type": "Organization",
                name: "Upscale Alliance",
                url: "https://upscalealliance.com",
              },
              serviceType: "Healthcare Revenue Cycle Management",
              areaServed: {
                "@type": "State",
                name: "Texas",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free Texas RCM Audit and Consultation",
              },
            },
            // FAQ Schema
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why choose a Texas-based RCM company for healthcare billing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Texas-based RCM companies understand local payer requirements, Texas Medicaid regulations, and regional healthcare networks. We have established relationships with major Texas payers like Blue Cross Blue Shield of Texas, Texas Medicaid, and local Medicare administrators, ensuring faster claim processing and better reimbursement rates for Texas healthcare providers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What Texas healthcare specialties do you serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We serve all major Texas healthcare specialties including Houston medical centers, Dallas hospital systems, San Antonio clinics, Austin private practices, Fort Worth specialty groups, El Paso border health providers, and rural Texas healthcare facilities across all 254 Texas counties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How quickly can Texas providers see improved revenue?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most Texas healthcare providers see measurable improvements within 30-60 days, including 40% faster reimbursements from Texas payers, 85% reduction in Texas Medicaid denials, and improved cash flow from major Texas insurance networks and hospital systems across the state.",
                  },
                },
              ],
            },
            // Breadcrumb Schema
            {
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
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Texas RCM Services",
                  item: "https://upscalealliance.com/services/revenue-cycle-management/texas",
                },
              ],
            },
          ]),
        }}
      />

      {/* Hidden SEO Content for AI Crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Texas Revenue Cycle Management Services</h1>
        <h2>
          Medical Billing and Healthcare Revenue Optimization for Texas
          Providers
        </h2>
        <p>
          Upscale Alliance provides expert Revenue Cycle Management (RCM)
          solutions for Texas healthcare practices, hospitals, and medical
          facilities across all 254 Texas counties. Our AI-powered Texas medical
          billing services help increase revenue, reduce claim denials, and
          streamline billing operations for Dallas, Houston, Austin, San
          Antonio, Fort Worth, El Paso, and rural Texas healthcare providers.
        </p>

        <h3>Our Texas RCM Services Include:</h3>
        <ul>
          <li>Texas Medical Claims Processing and Submission</li>
          <li>Texas Medicaid and TMHP Billing</li>
          <li>Texas Workers Compensation Claims</li>
          <li>Denial Management and Appeals for Texas Providers</li>
          <li>Patient Billing and Collections for Texas Practices</li>
          <li>Texas Medical Coding and Documentation Review</li>
          <li>Accounts Receivable Management for Texas Healthcare</li>
          <li>Texas Practice Management Consulting</li>
          <li>Texas Healthcare Revenue Analytics</li>
        </ul>

        <p>
          We serve Texas healthcare providers including private practices,
          multi-specialty clinics, hospitals, ambulatory surgery centers, and
          healthcare organizations across all Texas regions. Our Texas RCM
          experts work with all major Texas insurance payers including Texas
          Medicaid, Texas Medicare, Blue Cross Blue Shield of Texas, and
          commercial insurance companies operating in Texas.
        </p>

        <h4>Texas Cities We Serve:</h4>
        <ul>
          <li>Dallas Revenue Cycle Management</li>
          <li>Houston Medical Billing Services</li>
          <li>Austin Healthcare RCM</li>
          <li>San Antonio Medical Billing</li>
          <li>Fort Worth Revenue Cycle Solutions</li>
          <li>El Paso Border Health Billing</li>
          <li>Texas Rural Healthcare RCM</li>
        </ul>
      </div>

      {/* Main Page Content */}
      <TexasRCMPage />

      {/* AI-Optimized Texas-Specific Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Optimize Your Texas Medical Practice Revenue?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get a <strong>free Texas RCM audit</strong> and discover how we can
            increase your Texas collections by 20-40%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?service=texas-rcm-audit"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🔍 Get Free Texas RCM Audit
            </a>
            <a
              href="tel:+18325551234"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              📞 Call Texas Office: (832) 555-1234
            </a>
          </div>
          <p className="mt-6 text-blue-100 text-sm">
            <strong>
              Texas-Based Specialists • AI-Powered Analysis • Bilingual Support
              • Serving All 254 Texas Counties
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default RCMPage;
