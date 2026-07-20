import NotFoundPage from "@/Components/404";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | 404 Error - Upscale Alliance",
  description:
    "The page you're looking for doesn't exist. Return to Upscale Alliance homepage or explore our digital marketing, RCM, and partnership services.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Page Not Found | 404 Error - Upscale Alliance",
    description:
      "The page you're looking for doesn't exist. Return to Upscale Alliance homepage or explore our services.",
  },
  twitter: {
    card: "summary",
    title: "Page Not Found | 404 Error - Upscale Alliance",
    description:
      "The page you're looking for doesn't exist. Return to Upscale Alliance homepage or explore our services.",
  },
  alternates: {
    canonical: "https://upscalealliance.com",
  },
  other: {
    "dc.type": "Error Page",
    "prerender-status-code": "404",
  },
};

const page = () => {
  return (
    <div>
      <NotFoundPage />
    </div>
  );
};

export default page;
