// components/PartnersProgramStructuredData.jsx
import Script from "next/script";

export const PartnersProgramStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Upscale Alliance Partnership Program",
        description:
          "Comprehensive white-label partnership program offering digital marketing services (SEO, PPC, social media, web development, content writing) and Revenue Cycle Management (RCM) solutions for agencies and businesses.",
        provider: {
          "@type": "Organization",
          name: "Upscale Alliance",
          url: "https://upscalealliance.com",
          logo: "https://upscalealliance.com/newlogo.png",
          sameAs: [
            "https://www.facebook.com/upscalealliance",
            "https://www.linkedin.com/company/upscalealliance",
            "https://twitter.com/upscalealliance",
          ],
        },
        serviceType: [
          "White-Label Digital Marketing",
          "Strategic Partnership Program",
          "Revenue Share Collaboration",
          "Agency Growth Services",
          "SEO Partnership",
          "PPC Management",
          "Social Media Marketing",
          "Web Development Services",
          "Content Writing Services",
          "Revenue Cycle Management (RCM)",
          "Medical Billing Services",
          "Healthcare RCM Solutions",
        ],
        areaServed: {
          "@type": "Country",
          name: "Worldwide",
        },
        audience: {
          "@type": "Audience",
          audienceType: [
            "Digital Marketing Agencies",
            "Healthcare Agencies",
            "Business Consultants",
            "Freelancers",
            "Startups",
            "Small Businesses",
            "Enterprise Companies",
          ],
        },
        offers: {
          "@type": "Offer",
          category: "Business Services",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "WebPage",
        name: "Partnership Program",
        description:
          "Strategic partnership program offering white-label digital marketing and RCM services for agencies",
        url: "https://upscalealliance.com/partners-program",
        mainEntity: {
          "@type": "Service",
          name: "Partnership Services",
        },
      },
    ],
  };

  return (
    <Script
      id="partners-program-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
