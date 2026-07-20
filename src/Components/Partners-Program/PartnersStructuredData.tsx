// components/PartnersStructuredData.jsx or add to your page component
import Script from "next/script";

export const PartnersStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Partner With Us | Upscale Alliance Partnership Program",
    description:
      "Join the Upscale Alliance Partner Program. Scale your agency with white-label digital marketing services, revenue share partnerships, and backend execution support for agencies and freelancers.",
    url: "https://upscalealliance.com/partnership-program-contact",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      url: "https://upscalealliance.com",
      name: "Upscale Alliance",
      description: "Digital Marketing Agency",
    },
    about: {
      "@type": "Service",
      name: "Partnership Program",
      description:
        "White-label digital marketing partnership program for agencies",
      provider: {
        "@type": "Organization",
        name: "Upscale Alliance",
        url: "https://upscalealliance.com",
      },
      serviceType: [
        "White-Label Marketing",
        "Revenue Share Partnership",
        "Backend Execution Support",
      ],
      areaServed: {
        "@type": "Country",
        name: "Worldwide",
      },
    },
    mainEntity: {
      "@type": "ContactPage",
      name: "Partnership Inquiry Form",
      description: "Contact form for partnership opportunities",
    },
  };

  return (
    <Script
      id="partners-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
