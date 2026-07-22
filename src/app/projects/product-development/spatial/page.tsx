import type { Metadata } from "next";
import SpatialPage from "@/Components/Projects/Product/Spatial/SpatialPage";

export const metadata: Metadata = {
  title: "Spatial Case Study | VisionOS, Webflow & Product Design | Upscale Alliance",
  description:
    "Discover how Upscale Alliance partnered with Spatial to refresh its brand, redesign key website experiences, and launch a high-performance Webflow website supporting Apple Vision Pro and VisionOS initiatives.",
  keywords: [
    "Spatial case study",
    "Spatial website redesign",
    "VisionOS design",
    "Apple Vision Pro website",
    "Webflow development",
    "Webflow agency",
    "Product design case study",
    "UI UX case study",
    "Brand refresh",
    "Landing page design",
    "High performance website",
    "Digital product design",
    "Upscale Alliance",
  ],
  openGraph: {
    title: "Spatial Case Study | VisionOS, Webflow & Product Design",
    description:
      "See how Upscale Alliance helped Spatial redesign its digital experience, launch a modern Webflow website, and support its Apple Vision Pro product rollout.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spatial Case Study | VisionOS & Webflow",
    description:
      "Explore how Spatial partnered with Upscale Alliance for a complete website refresh and product launch experience.",
  },
};

export default function Page() {
  return <SpatialPage />;
}