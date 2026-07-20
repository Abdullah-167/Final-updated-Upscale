import ContactMain from "@/Components/Contactus/ContactMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Upscale Alliance | SEO, GEO & Digital Growth Experts",

  description:
    "Get in touch with Upscale Alliance to discuss SEO, Generative Engine Optimization (GEO), PPC advertising, and high-performance web development. Let’s build scalable growth for Google and AI-powered search.",

  keywords: [
    "contact Upscale Alliance",
    "contact digital marketing agency",
    "SEO agency contact",
    "GEO optimization consultation",
    "AI search optimization services",
    "PPC advertising agency contact",
    "digital marketing consultation",
    "website development agency contact",
    "Next.js development consultation",
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
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://upscalealliance.com/contact-us",
  },

  openGraph: {
    title: "Contact Upscale Alliance | SEO, GEO & AI-Driven Digital Marketing",
    description:
      "Connect with Upscale Alliance to explore SEO, GEO, PPC, and AI-search-ready digital growth strategies tailored to your business.",
    url: "https://upscalealliance.com/contact-us",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Contact Upscale Alliance Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Upscale Alliance | SEO, GEO & Growth Strategy",
    description:
      "Speak with Upscale Alliance about SEO, GEO, PPC, and AI-driven digital marketing solutions.",
    images: ["https://upscalealliance.com/home-hero.png"],
  },

  category: "Digital Marketing",
};

const ContactPage = () => {
  return (
    <div>
      <ContactMain />
    </div>
  );
};

export default ContactPage;
