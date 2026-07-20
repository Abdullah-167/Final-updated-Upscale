import Rcmcontactpage from "@/Components/Services/RCM/Rcm-Contact/Rcm-contact-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  // Primary keyword in title
  title: "Free RCM Assessment Request | Revenue Cycle Management Consultation",

  // AI & SEO optimized description
  description:
    "Request a free Revenue Cycle Management (RCM) assessment for your healthcare practice. Get expert analysis, identify revenue leakage, and receive a customized optimization plan. Schedule your consultation today.",

  // Comprehensive keyword strategy
  keywords: [
    // Primary Keywords
    "RCM assessment request",
    "free revenue cycle management consultation",
    "RCM services contact",
    "medical billing assessment",
    "revenue cycle optimization consultation",

    // Secondary Keywords
    "healthcare revenue cycle analysis",
    "medical practice billing assessment",
    "RCM consultation services",
    "free medical billing audit",
    "revenue cycle management experts",

    // Long-tail Keywords
    "schedule RCM consultation free",
    "get free revenue cycle assessment",
    "RCM services for healthcare providers",
    "how to improve medical billing revenue",
    "free medical practice revenue analysis",

    // Action-oriented Keywords
    "contact RCM specialists",
    "request RCM proposal",
    "get RCM quote",
    "RCM consultation appointment",
    "free billing assessment form",
  ],

  // Canonical URL
  alternates: {
    canonical: "https://upscalealliance.com/rcm-contact",
  },

  // Open Graph for Social Sharing
  openGraph: {
    title: "Get Free RCM Assessment | Schedule Your Consultation",
    description:
      "Request a free Revenue Cycle Management assessment. Get expert analysis and a customized plan to optimize your healthcare practice revenue.",
    url: "https://upscalealliance.com/rcm-contact",
    type: "website",
    locale: "en_US",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "/contact-hero.jpg", // Add a contact-specific image
        width: 1200,
        height: 630,
        alt: "Contact RCM Experts - Free Assessment Request",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Request Free RCM Assessment | Upscale Alliance",
    description:
      "Get a free revenue cycle analysis and consultation with our RCM experts. Optimize your medical practice revenue.",
    images: ["/contact-hero.jpg"],
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
    // JSON-LD for Contact Page
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "RCM Contact & Consultation",
      description:
        "Contact form for Revenue Cycle Management assessment and consultation requests",
      url: "https://upscalealliance.com/rcm-contact",
      provider: {
        "@type": "Organization",
        name: "Upscale Alliance",
        url: "https://upscalealliance.com",
      },
      mainEntity: {
        "@type": "WebPageElement",
        isAccessibleForFree: true,
        cssSelector: "#contact-form",
      },
    }),
  },
};

const RCMContact = () => {
  return (
    <>
      {/* AI-Optimized Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            // Service Schema
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Revenue Cycle Management Consultation",
              description:
                "Free RCM assessment and consultation services for healthcare providers",
              provider: {
                "@type": "Organization",
                name: "Upscale Alliance",
                url: "https://upscalealliance.com",
              },
              areaServed: "United States",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free RCM Assessment and Consultation",
                availability: "https://schema.org/InStock",
              },
            },
            // Contact Point Schema
            {
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              contactType: "customer service",
              telephone: "+1 (917) 947-0117",
              email: "info@upscalealliance.com",
              availableLanguage: "English",
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "20:00",
              },
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
                  name: "Contact & Assessment",
                  item: "https://upscalealliance.com/rcm-contact",
                },
              ],
            },
          ]),
        }}
      />

      {/* Hidden SEO Content for AI Crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Contact RCM Experts - Free Assessment Request</h1>
        <h2>Request a Free Revenue Cycle Management Consultation</h2>

        <section>
          <h3>Why Schedule a Free RCM Assessment?</h3>
          <p>
            Our free Revenue Cycle Management assessment helps healthcare
            providers identify revenue leakage, reduce claim denials, and
            optimize billing operations. During your consultation, our RCM
            experts will analyze your current processes and provide actionable
            recommendations to improve collections by 20-40%.
          </p>

          <h4>What's Included in Your Free Assessment:</h4>
          <ul>
            <li>Comprehensive revenue cycle analysis</li>
            <li>Claim denial rate assessment</li>
            <li>Accounts receivable aging review</li>
            <li>Coding accuracy evaluation</li>
            <li>Compliance audit</li>
            <li>Customized improvement roadmap</li>
            <li>ROI projection report</li>
          </ul>
        </section>

        <section>
          <h3>Our RCM Services Include:</h3>
          <ul>
            <li>Medical Claims Processing</li>
            <li>Denial Management & Appeals</li>
            <li>Patient Billing & Collections</li>
            <li>Medical Coding Review</li>
            <li>Accounts Receivable Management</li>
            <li>Practice Management Consulting</li>
            <li>Healthcare Revenue Analytics</li>
            <li>Compliance & Audit Support</li>
          </ul>
        </section>

        <section>
          <h3>Contact Information:</h3>
          <ul>
            <li>
              <strong>Phone:</strong> (888) 555-RCM1
            </li>
            <li>
              <strong>Email:</strong> info@upscalealliance.com
            </li>
            <li>
              <strong>Hours:</strong> Mon-Fri, 8AM-8PM EST
            </li>
            <li>
              <strong>Response Time:</strong> Within 4 hours
            </li>
            <li>
              <strong>Location:</strong> 123 Healthcare Ave, Suite 500, Medical
              District, NY 10001
            </li>
          </ul>
        </section>

        <section>
          <h3>Medical Specialties We Serve:</h3>
          <ul>
            <li>Cardiology</li>
            <li>Orthopedics</li>
            <li>Neurology</li>
            <li>Mental & Behavioral Health</li>
            <li>Family Medicine</li>
            <li>Internal Medicine</li>
            <li>All Medical Specialties</li>
          </ul>
        </section>

        <section>
          <h3>Practice Sizes Supported:</h3>
          <ul>
            <li>Solo Practitioners (1-5 employees)</li>
            <li>Small Practices (6-15 employees)</li>
            <li>Medium Practices (16-30 employees)</li>
            <li>Large Practices (31-50 employees)</li>
            <li>Multi-Provider Groups (51-100 employees)</li>
            <li>Hospital Systems (100+ employees)</li>
          </ul>
        </section>

        <section>
          <h3>Common RCM Challenges We Solve:</h3>
          <ul>
            <li>High claim denial rates</li>
            <li>Slow payment cycles</li>
            <li>Coding errors and inaccuracies</li>
            <li>Poor patient collections</li>
            <li>Inefficient billing workflows</li>
            <li>Lack of revenue visibility</li>
            <li>Compliance concerns</li>
            <li>Staffing challenges</li>
          </ul>
        </section>

        <section>
          <h3>Benefits of Our RCM Services:</h3>
          <ul>
            <li>20-40% increase in collections</li>
            <li>85% reduction in claim denials</li>
            <li>40% faster reimbursements</li>
            <li>99% clean claim rate</li>
            <li>Reduced administrative costs</li>
            <li>Improved cash flow</li>
            <li>Enhanced patient satisfaction</li>
            <li>Full compliance assurance</li>
          </ul>
        </section>
      </div>

      {/* Main Page Content */}
      <div className="visible">
        <Rcmcontactpage />
      </div>

      {/* AI-Optimized Additional Information */}
      <div className="bg-blue-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Response Time Guarantee
              </h3>
              <p className="text-gray-600 mb-2">
                • 4-hour response time during business hours
              </p>
              <p className="text-gray-600 mb-2">
                • 24-hour consultation scheduling
              </p>
              <p className="text-gray-600">
                • 48-hour assessment report delivery
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                No Obligation Assessment
              </h3>
              <p className="text-gray-600 mb-2">
                • Free comprehensive analysis
              </p>
              <p className="text-gray-600 mb-2">• No hidden fees or charges</p>
              <p className="text-gray-600">• Customized recommendations</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                HIPAA Compliant Process
              </h3>
              <p className="text-gray-600 mb-2">
                • Encrypted data transmission
              </p>
              <p className="text-gray-600 mb-2">• Secure document handling</p>
              <p className="text-gray-600">• Confidentiality guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-6">
            Call us now for urgent RCM consultation
          </p>
          <a
            href="tel:+1888555RCM1"
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            📞 (888) 555-RCM1
          </a>
          <p className="mt-4 text-blue-100 text-sm">
            Available Mon-Fri, 8AM-8PM EST
          </p>
        </div>
      </div>
    </>
  );
};

export default RCMContact;
